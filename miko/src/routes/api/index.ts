import { Router } from "express";
import { router as userRoutes } from "./user";

export const router: Router = Router();

// @desc     All user routes for linkedlist api
// @route    POST /api/v1/users/
// @access   Public
router.use("/user", userRoutes);