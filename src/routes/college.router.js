import { Router } from "express";
import {
  CreateCollegeController,
  GetAllCollegesController,
} from "../controllers/college.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const collegeRouter = Router();

collegeRouter.post("/register", authMiddleware, CreateCollegeController);
collegeRouter.get("/all", GetAllCollegesController);

export default collegeRouter;
