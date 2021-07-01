import { Router } from "express";
import asyncHandler from "express-async-handler";
import { loginUser, registerUser, getAccessToken } from "../controllers/user";
import { verifyRefreshToken } from "../middlewares/auth";

export const router: Router = Router();

// @desc     Authenticate and Login User
// @route    POST /api/v1/users/login
// @access   Public
router.post("/login", asyncHandler(loginUser));

// @desc     Authenticate and Register User
// @route    POST /api/v1/users/register
// @access   Public
router.post("/register", asyncHandler(registerUser));

// @desc     Get Access Token for  User
// @route    POST /api/v1/users/token
// @access   Protected
// @method  verifyRefreshToken
router.get("/token", verifyRefreshToken, asyncHandler(getAccessToken));
