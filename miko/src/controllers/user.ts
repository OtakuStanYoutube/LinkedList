import { Request, Response } from "express";
import { User } from "../models";
import { generateAccessToken } from "../utils/generateToken";
import { generateUniqueUsername } from "../utils/generateUniqueUsername";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../utils/vaidateInput";
import { __prod__ } from "../constants";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { errors, valid } = validateLoginInput(email, password);

  if (!valid) {
    res.status(401);
    throw new Error(`❗ Errors ${errors.email} & ${errors.password}`);
  }

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateAccessToken(user._id);

    res.cookie("jwt", token, {
      httpOnly: true,
      path: "/access_token",
      secure: __prod__,
    });
    res.status(201).json({
      id: user._id,
      isAdmin: user.isAdmin,
      token,
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
    res.status(401);
    throw new Error(
      `❗ Errors ${errors.email} & ${errors.password} & ${errors.username}`,
    );
  }

  const userExists = await User.findOne({ username });

  if (userExists) {
    res.status(400).json({
      message: "❗ User Already Registered!",
      generatedUsername: generateUniqueUsername(username),
    });
    throw new Error("❗ User Already Registered!");
  }

  const user = await User.create({ username, email, password });

  if (user) {
    const token = generateAccessToken(user._id);

    res.cookie("jwt", token, {
      httpOnly: true,
      path: "/access_token",
      secure: __prod__,
    });
    res.status(201).json({
      id: user._id,
      isAdmin: user.isAdmin,
      token,
    });
  } else {
    throw new Error("❗ Invalid User!");
  }
};
