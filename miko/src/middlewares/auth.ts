import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import User from "../entities/User";
import { redisClient } from "../config/redis_connect";
import { __prod__ } from "../constants";

import { generateTokens } from "../utils/generateToken";

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
    res
      .status(401)
      .json({ status: false, message: "User is not Authenticated" });
  }

  if (accessToken) {
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
            message: "❗ Blacklisted Token!",
          });
        }
      });

      const user = await User.findOne({ userID: decodedAccessToken.id });

      if (user) {
        if (user.tokenId !== decodedAccessToken.tokenId) {
          res.status(401).json({
            status: false,
            message: "Token already Expired",
          });
        }
      }
      req.body.user! = user;
      next();
    } catch (error) {
      console.log(error);
      throw new Error("❌ Not Authorized! Invalid Token");
    }
  }

  if (!refreshToken) {
    res
      .status(401)
      .json({ status: false, message: "User is not Authenticated" });
  }

  try {
    const decodedRefreshToken = <decoded>(
      verify(refreshToken, process.env.LINKEDLIST_REFRESH_TOKEN_SECRET!)
    );

    redisClient.get(decodedRefreshToken.id.toString(), (err, data) => {
      if (err) {
        throw new Error(`❗ Error - ${err.message}`);
      }
      if (!data) {
        res.status(401).json({
          status: false,
          message: "❗ Invalid Request! Token is not in store",
        });
      }
      if (JSON.parse(data!).token !== refreshToken) {
        res.status(401).json({
          status: false,
          message: "❗ Invalid Request! Token is not in same store",
        });
      }
    });

    const user = await User.findOne({ userID: decodedRefreshToken.id });

    if (user) {
      if (user.tokenId !== decodedRefreshToken.tokenId) {
        res.status(401).json({
          status: false,
          message: "Token already Expired",
        });
      }

      const tokens = generateTokens(user.userID, user.tokenId);

      res.cookie("jwt", tokens.accessToken, {
        httpOnly: true,
        path: "/access_token",
        secure: __prod__,
      });
      res.cookie("jwt_refresh", tokens.refreshToken, {
        httpOnly: true,
        path: "/refresh_token",
        secure: __prod__,
      });
    }

    req.body.user! = user;
    next();
  } catch (error) {
    console.log(error);
    throw new Error("❌ Not Authorized! Invalid Token");
  }

  next();
};
