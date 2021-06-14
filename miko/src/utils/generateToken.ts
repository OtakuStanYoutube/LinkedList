import { sign } from "jsonwebtoken";
import { __prod__ } from "../constants";

export const generateAccessToken = (id: string) => {
  type payload = {
    id: string;
  };
  const payload: payload = { id };

  return sign(payload, process.env.LINKEDLIST_ACCESS_TOKEN_SECRET!, {
    expiresIn: __prod__ ? "1h" : "24h",
  });
};

export const generateRefreshToken = (id: string) => {
  type payload = {
    id: string;
  };
  const payload: payload = { id };

  return sign(payload, process.env.LINKEDLIST_REFRESH_TOKEN_SECRET!, {
    expiresIn: __prod__ ? "30d" : "90d",
  });
};
