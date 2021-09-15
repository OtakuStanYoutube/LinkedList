import { Router } from "express";
import { router as userRoutes } from "./user";

export const router: Router = Router();

router.use("/user", userRoutes);