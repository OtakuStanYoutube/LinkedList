import { Request, Response, NextFunction } from "express";
import { errors } from "../lib/logs";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);

  res.status(404);
  errors(` ! Error: `.inverse.red.bold + ` ${error.message}`);
  next(error);
};

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);
  errors(` ! Error: `.inverse.red.bold + ` ${err.message}`);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
