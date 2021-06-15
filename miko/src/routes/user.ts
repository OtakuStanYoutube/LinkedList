import { Router } from "express";
import asyncHandler from "express-async-handler";
import { loginUser, registerUser } from "../controllers/user";

export const router: Router = Router();

// @desc     Authenticate and Login User
// @route    POST /api/v1/users/login
// @access   Public
router.post("/login", asyncHandler(loginUser));

// @desc     Authenticate and Register User
// @route    POST /api/v1/users/register
// @access   Public
router.post("/register", asyncHandler(registerUser));
