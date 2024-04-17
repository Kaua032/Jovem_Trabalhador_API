import { Router } from "express";
import { CreateCourseController } from "../controllers/course.controller.js";

const courseRouter = Router();

courseRouter.post("/register", CreateCourseController);

export default courseRouter;
