import { Router } from "express";
import {
  CreateStudentController,
  ExportStudentsController,
} from "../controllers/student.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const studentRouter = Router();

studentRouter.post("/register", authMiddleware, CreateStudentController);
studentRouter.get("/export", authMiddleware, ExportStudentsController);

export default studentRouter;
