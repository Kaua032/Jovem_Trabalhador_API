import { Router } from "express";
import {
  CreateStudentController,
  ExportStudentsController,
  GetAllStudentsController,
  GetStudentsBySearch,
} from "../controllers/student.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const studentRouter = Router();

studentRouter.post("/register", authMiddleware, CreateStudentController);
studentRouter.get("/export", authMiddleware, ExportStudentsController);
studentRouter.get("/all", authMiddleware, GetAllStudentsController);
studentRouter.get("/search", GetStudentsBySearch);

export default studentRouter;
