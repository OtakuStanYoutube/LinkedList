import { Router } from "express";
import { router as apiRoutes } from "./api";

export const router: Router = Router();

router.use("/api/v1", apiRoutes);