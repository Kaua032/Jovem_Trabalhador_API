import { Router } from "express";
import {
  CreateCourseController,
  GetAllCoursesController,
} from "../controllers/course.controller.js";

const courseRouter = Router();

courseRouter.post("/register", CreateCourseController);
courseRouter.get("/all", GetAllCoursesController);

export default courseRouter;
