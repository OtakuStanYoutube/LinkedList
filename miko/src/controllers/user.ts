import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { User, Profile, Token } from "../models";
import { randomBytes } from "crypto";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateToken";
import { generateUniqueUsername } from "../utils/generateUniqueUsername";
import { mailUser } from "../utils/emailUser";
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
    const tokenId = uuidv4();

    user.tokenId = tokenId;
    await user.save();

    const accessToken = generateAccessToken(user._id, tokenId);
    const refreshToken = generateRefreshToken(user._id);

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
      id: user._id,
      isAdmin: user.isAdmin,
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
    const profile = await Profile.create({
      parent: user._id,
      handle: user.username,
    });

    const token = await Token.create({
      userId: user._id,
      token: randomBytes(10).toString("hex"),
    });

    user.activeProfile = profile._id;
    await user.save();

    const info = await mailUser(username, email, token._id);

    res.status(201).json({
      status: true,
      message: info,
    });
  } else {
    throw new Error("❗ Invalid User!");
  }
};

export const getAccessToken = async (req: Request, res: Response) => {
  const user = await User.findById(req.body.id);

  if (user) {
    const tokenId = uuidv4();

    user.tokenId = tokenId;
    await user.save();

    const accessToken = generateAccessToken(user._id, tokenId);
    const refreshToken = generateRefreshToken(user._id);

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
      id: user._id,
      isAdmin: user.isAdmin,
      accessToken,
      refreshToken,
    });
  } else {
    res.status(401);
    throw new Error("❗ Invalid User");
  }
};
