import { Request, Response } from "express";
import { User } from "../models";
import { generateAccessToken } from "../utils/generateToken";
import { validateLoginInput } from "../utils/vaidateInput";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { errors, valid } = validateLoginInput(email, password);

  if (!valid) {
    res.status(401);
    throw new Error(`Errors ${errors.email} & ${errors.password}`);
  }

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      id: user._id,
      isAdmin: user.isAdmin,
      token: generateAccessToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
};
