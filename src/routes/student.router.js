import { Router } from "express";
import { CreateStudentController } from "../controllers/student.controller.js";

const studentRouter = Router();

studentRouter.post("/register", CreateStudentController);

export default studentRouter;
