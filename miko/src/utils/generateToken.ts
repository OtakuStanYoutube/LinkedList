import { sign } from "jsonwebtoken";
import { randomBytes } from "crypto";

import { redisClient } from "../config/redis_connect";
import { __prod__ } from "../constants";

export const generateTokens = (id: string, tokenId: string) => {
  type payload = {
    id: string;
    tokenId: string;
  };
  const payload: payload = { id, tokenId };

  const accessToken = sign(
    payload,
    process.env.LINKEDLIST_ACCESS_TOKEN_SECRET!,
    {
      expiresIn: __prod__ ? "1h" : "24h",
    },
  );

  let refreshToken = "";

  redisClient.get(id.toString(), (err, data) => {
    if (err) {
      throw new Error(`❗ Error - ${err.message}`);
    }

    if (data) {
      refreshToken = JSON.parse(data).refreshToken;
    } else {
      refreshToken = sign(
        payload,
        process.env.LINKEDLIST_REFRESH_TOKEN_SECRET!,
        {
          expiresIn: __prod__ ? "30d" : "90d",
        },
      );
      redisClient.set(id.toString(), JSON.stringify({ token: refreshToken }));
    }
  });

  return { accessToken, refreshToken };
};

export const generateAccessToken = (id: string, tokenId: string) => {
  type payload = {
    id: string;
    tokenId: string;
  };
  const payload: payload = { id, tokenId };

  const accessToken = sign(
    payload,
    process.env.LINKEDLIST_ACCESS_TOKEN_SECRET!,
    {
      expiresIn: __prod__ ? "1h" : "24h",
    },
  );

  return { accessToken };
};

export const generateActivationToken = (userId: string) => {
  const activationToken = randomBytes(10).toString("hex");

  redisClient.setex(
    activationToken.toString(),
    1200,
    JSON.stringify({ id: userId }),
  );
};
