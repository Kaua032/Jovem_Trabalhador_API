import { Router } from "express";
import {
  CreateCourseController,
  GetAllCoursesController,
} from "../controllers/course.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const courseRouter = Router();

courseRouter.post("/register", authMiddleware, CreateCourseController);
courseRouter.get("/all", GetAllCoursesController);

export default courseRouter;
