import { Router } from "express";
import { CreateCollegeController } from "../controllers/college.controller.js";

const collegeRouter = Router();

collegeRouter.post("/register", CreateCollegeController);

export default collegeRouter;
