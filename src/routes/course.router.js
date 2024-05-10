import { Router } from "express";
import {
  CreateCourseController,
  DeleteCourseController,
  GetAllCoursesController,
} from "../controllers/course.controller.js";

const courseRouter = Router();

courseRouter.post("/register", CreateCourseController);
courseRouter.get("/all", GetAllCoursesController);
courseRouter.delete("/delete", DeleteCourseController);

export default courseRouter;
