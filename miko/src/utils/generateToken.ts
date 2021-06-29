import { sign } from "jsonwebtoken";
import { redisClient } from "../config/redis_connect";
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

  const refreshToken = sign(
    payload,
    process.env.LINKEDLIST_REFRESH_TOKEN_SECRET!,
    {
      expiresIn: __prod__ ? "30d" : "90d",
    },
  );

  redisClient.get(id.toString(), (err) => {
    if (err) {
      throw new Error(`❗ Error - ${err.message}`);
    }

    redisClient.set(id.toString(), JSON.stringify({ token: refreshToken }));
  });

  return refreshToken;
};
