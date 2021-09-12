import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { randomBytes } from "crypto";
import { validate } from "class-validator";
import { verify } from "argon2";

// Entities
import User from "../entities/User";
import Profile from "../entities/Profile";

// Utilities
import { generateTokens } from "../utils/generateToken";
import { generateUniqueUsername } from "../utils/generateUniqueUsername";
import { mapErrors } from "../utils/mapErrors";
// import { mailUser } from "../utils/emailUser";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../utils/vaidateInput";
import { __prod__ } from "../constants";

import { redisClient } from "../config/redis_connect";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { errors, valid } = validateLoginInput(email, password);

  if (!valid) {
    res.status(401).json({ errors });
  }

  const user = await User.findOne({ email });

  if (user && (await verify(user.password, password))) {
    let newTokenId = uuidv4();

    if (user.tokenId) {
      newTokenId = user.tokenId;
    }

    user.tokenId = newTokenId;
    await user.save();

    const { accessToken, refreshToken } = generateTokens(
      user.userID,
      newTokenId,
    );

    res.cookie("jwt", accessToken, {
      httpOnly: true,
      path: "/access_token",
      secure: __prod__,
    });
    res.cookie("jwt_refresh", refreshToken, {
      httpOnly: true,
      path: "/refresh_token",
      secure: __prod__,
    });
    res.status(201).json({
      user,
      accessToken,
    });
  } else {
    res.status(401);
    throw new Error("❗ Invalid User");
  }
};

export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const { errors, valid } = validateRegisterInput(username, email, password);

  if (!valid) {
    res.status(401).json({ errors });
  }

  const userExists = await User.findOne({ email });
  const usernameExists = await User.findOne({ username });

  if (userExists) {
    res.status(401).json({
      status: false,
      message: "❗ User already exists",
    });
  }

  if (usernameExists) {
    res.status(401).json({
      status: false,
      message: "❗ Username already taken! Please select a new username",
      generatedUsername: generateUniqueUsername(username),
    });
  }

  const user = new User({ username, email, password });

  const generatedErrors = await validate(user);

  if (generatedErrors.length > 0) {
    res.status(401).json({
      status: false,
      message: "❗ Invalid User",
      errors: mapErrors(generatedErrors),
    });
  }

  await user.save();

  if (user) {
    const profile = new Profile({ displayname: username, user });

    await profile.save();

    const activationToken = randomBytes(10).toString("hex");

    redisClient.setex(
      activationToken.toString(),
      1200,
      JSON.stringify({ id: user.userID }),
    );

    // const info = await mailUser(username, email, activationToken._id);

    res.status(201).json({
      status: true,
      message: "User created Sucessfully",
    });
  } else {
    throw new Error("❗ Invalid User!");
  }
};

export const verifyEmail = (req: Request, res: Response) => {
  const { activationToken } = req.params;

  redisClient.get(activationToken.toString(), async (err, data) => {
    if (err) {
      throw new Error("❗ Token has expired");
    }

    if (data) {
      const { id } = JSON.parse(data);

      const user = await User.findOne({ userID: id });

      if (user) {
        user.isActive = true;
        await user.save();

        res.status(200).json({
          status: true,
          message: "Email Verified",
        });
      }
    }
  });
};
