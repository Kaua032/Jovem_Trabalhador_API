import { Router } from "express";
import userRouter from "./user.router.js";
import studentRouter from "./student.router.js";
import collegeRouter from "./college.router.js";

const router = Router();

router.use("/user", userRouter);
router.use("/student", studentRouter);
router.use("/college", collegeRouter);

export default router;
