import { Router } from "express";
import {
  CreateCollegeController,
  DeleteCollegeController,
  GetAllCollegesController,
} from "../controllers/college.controller.js";

const collegeRouter = Router();

collegeRouter.post("/register", CreateCollegeController);
collegeRouter.get("/all", GetAllCollegesController);
collegeRouter.delete("/delete", DeleteCollegeController);

export default collegeRouter;
