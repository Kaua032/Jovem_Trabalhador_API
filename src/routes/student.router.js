import { Router } from "express";
import {
  CreateStudentController,
  DeleteStudentController,
  ExportStudentsController,
  GetAllStudentsController,
  GetStudentsBySearchController,
} from "../controllers/student.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const studentRouter = Router();

studentRouter.post("/register", authMiddleware, CreateStudentController);
studentRouter.get("/export", authMiddleware, ExportStudentsController);
studentRouter.get("/all", authMiddleware, GetAllStudentsController);
studentRouter.get("/search", authMiddleware, GetStudentsBySearchController);

export default studentRouter;
