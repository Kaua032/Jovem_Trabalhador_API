import { Router } from "express";
import {
  CreateStudentController,
  ExportStudentsController,
} from "../controllers/student.controller.js";

const studentRouter = Router();

studentRouter.post("/register", CreateStudentController);
studentRouter.get("/export", ExportStudentsController);

export default studentRouter;
