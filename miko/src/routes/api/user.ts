import { Router } from "express";
import asyncHandler from "express-async-handler";

import {
  loginUser,
  registerUser,
  verifyEmail,
  logoutUser,
} from "../../controllers/user";
import { verifyAuthentication } from "../../middlewares/auth";

export const router: Router = Router();

// @desc     Authenticate and Login User
// @route    POST /api/v1/users/login
// @access   Public
router.post("/login", asyncHandler(loginUser));

// @desc     Authenticate and Register User
// @route    POST /api/v1/users/register
// @access   Public
router.post("/register", asyncHandler(registerUser));

// @desc     Logout curently logged in user
// @route    POST /api/v1/users/logout
// @access   Public
router.post("/logout", verifyAuthentication, asyncHandler(logoutUser));

// @desc     Verify user email
// @route    POST /api/v1/verifyEmail/:token
// @access   Public
// @method  verifyEmail
router.get("verifyEmail/:token", asyncHandler(verifyEmail));
