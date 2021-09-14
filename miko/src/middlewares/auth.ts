import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import User from "../entities/User";
import { redisClient } from "../config/redis_connect";
import { __prod__ } from "../constants";

import { generateAccessToken } from "../utils/generateToken";

type decoded = {
  id: string;
  tokenId?: string;
  exp: number;
};

export const verifyAuthentication = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const accessToken = req.cookies.jwt;
  const refreshToken = req.cookies.jwt_refresh;

  if (!accessToken && !refreshToken) {
    console.log("Access Token>>>>>", accessToken);
    console.log("Refresh Token>>>>>", refreshToken);

    return res
      .status(401)
      .json({ status: false, message: "User is not Authenticated" });
  }
  try {
    const decodedAccessToken = <decoded>(
      verify(accessToken, process.env.LINKEDLIST_ACCESS_TOKEN_SECRET!)
    );

    redisClient.get(`BL_${decodedAccessToken.id.toString()}`, (err, data) => {
      if (err) {
        throw new Error(err.message);
      }
      if (data === accessToken) {
        res.status(401).json({
          status: false,
          message: "❗ Token Already Expired!",
        });
      }
    });
    req.body.id = decodedAccessToken.id;

    return next();
  } catch {}

  if (!refreshToken) {
    return res
      .status(401)
      .json({ status: false, message: "User is not Authenticated" });
  }

  let decodedRefreshToken: decoded = {
    id: "",
    tokenId: "",
    exp: 0,
  };

  try {
    decodedRefreshToken = <decoded>(
      verify(refreshToken, process.env.LINKEDLIST_REFRESH_TOKEN_SECRET!)
    );
  } catch (error) {
    console.log("error Happened");
    next();
    throw new Error("❌ Not Authorized! Invalid Refresh Token");
  }

  redisClient.get(decodedRefreshToken.id.toString(), (err, data) => {
    if (err) {
      throw new Error(`❗ Error - ${err.message}`);
    }
    if (!data) {
      res.status(401).json({
        status: false,
        message: "❗ Invalid Request! Token is not in store",
      });

      return next();
    }
    if (JSON.parse(data!).token !== refreshToken) {
      return res.status(401).json({
        status: false,
        message: "❗ Invalid Request! Token is not in same store",
      });
    }
  });

  const user = await User.findOne({ userID: decodedRefreshToken.id });

  if (user) {
    if (user.tokenId !== decodedRefreshToken.tokenId) {
      return res.status(401).json({
        status: false,
        message: "Token already Expired",
      });
    }

    const tokens = generateAccessToken(user.userID, user.tokenId);

    res.cookie("jwt", tokens.accessToken, {
      httpOnly: true,
      path: "/",
      secure: __prod__,
      sameSite: __prod__ ? "lax" : false,
      maxAge: 60 * 60 * 24 * 7,
    });
    req.body.id! = user.userID;
  }

  next();
};
