import { Router } from "express";
import {
  CreateCourseController,
  GetAllCoursesController,
  UpdateCourseController,
} from "../controllers/course.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { UpdateCollegeController } from "../controllers/college.controller.js";

const courseRouter = Router();

courseRouter.post("/register", authMiddleware, CreateCourseController);
courseRouter.get("/all", GetAllCoursesController);
courseRouter.put("/update/:id", authMiddleware, UpdateCourseController)

export default courseRouter;
