import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../models";

type decoded = {
  id: string;
  exp: number;
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.jwt;

  if (!token) {
    res.status(401);
    throw new Error("❌ No Token found");
  }

  try {
    const decoded = <decoded>(
      verify(token, process.env.LINKEDLIST_ACCESS_TOKEN_SECRET!)
    );

    req.body.user! = await User.findById(decoded.id).select("-password");
  } catch (error) {
    res.status(401);
    throw new Error("❌ Not Authorized! Invalid Token");
  }

  next();
};

export const verifyRefreshToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.jwt;
  const refreshToken = req.cookies.jwt_refresh;

  if (!refreshToken) {
    res.status(401);
    throw new Error("❌ No Refresh Token found");
  }

  try {
    const decodedToken = <decoded>(
      verify(token, process.env.LINKEDLIST_ACCESS_TOKEN_SECRET!)
    );
    const decodedRefreshToken = <decoded>(
      verify(refreshToken, process.env.LINKEDLIST_REFRESH_TOKEN_SECRET!)
    );

    if (decodedToken.exp * 1000 < Date.now()) {
      console.log(decodedRefreshToken);
      next();
    }
  } catch (error) {
    res.status(401);
    throw new Error("❌ Not Authorized! Invalid Token");
  }
};
