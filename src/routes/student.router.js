import { Router } from "express";
import {
  CreateStudentController,
  ExportStudentsController,
  GenerateListOfStudentsController,
  GetAllStudentsController,
  GetStudentsBySearchController,
  UpdateStudentController,
} from "../controllers/student.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const studentRouter = Router();

studentRouter.post("/register", authMiddleware, CreateStudentController);
studentRouter.get("/export", authMiddleware, ExportStudentsController);
studentRouter.get("/all", authMiddleware, GetAllStudentsController);
studentRouter.get(
  "/generate",
  authMiddleware,
  GenerateListOfStudentsController
);
studentRouter.get("/search", authMiddleware, GetStudentsBySearchController);
studentRouter.put("/update", authMiddleware, UpdateStudentController);

export default studentRouter;
