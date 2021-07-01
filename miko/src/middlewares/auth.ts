import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../models";
import { redisClient } from "../config/redis_connect";

type decoded = {
  id: string;
  tokenId: string;
  exp: number;
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.jwt;

  if (!token) {
    res.status(401).json({ status: false, message: "No Access Token found" });
    throw new Error("❌ No Token found");
  }

  try {
    const decoded = <decoded>(
      verify(token, process.env.LINKEDLIST_ACCESS_TOKEN_SECRET!)
    );

    redisClient.get(`BL_${decoded.id.toString()}`, (err, data) => {
      if (err) {
        throw new Error(err.message);
      }
      if (data === token) {
        res.status(401).json({
          status: false,
          message: "❗ Blacklisted Token!",
        });
      }
    });

    const user = await User.findById(decoded.id).select("-password");

    if (user?.tokenId !== decoded.tokenId) {
      res.status(401).json({
        status: false,
        message: "Token already Expired",
      });
    }

    req.body.user! = user;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ status: false, message: "Not Authorized! Invalid Token" });
    throw new Error("❌ Not Authorized! Invalid Token");
  }

  next();
};

export const verifyRefreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const refreshToken = req.cookies.jwt_refresh;

  if (!refreshToken) {
    res.status(401).json({ status: false, message: "No Refresh Token found" });
    throw new Error("❌ No Refresh Token found");
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

    req.body.user! = await User.findById(decodedRefreshToken.id).select(
      "-password",
    );
    next();
  } catch (error) {
    res.status(401).json({ status: false });
    throw new Error("❌ Not Authorized! Invalid Token");
  }
};
