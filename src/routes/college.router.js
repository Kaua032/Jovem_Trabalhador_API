import { Router } from "express";
import {
  CreateCollegeController,
  GetAllCollegesController,
} from "../controllers/college.controller.js";

const collegeRouter = Router();

collegeRouter.post("/register", CreateCollegeController);
collegeRouter.get("/all", GetAllCollegesController);

export default collegeRouter;
