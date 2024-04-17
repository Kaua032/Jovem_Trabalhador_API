import { Router } from "express";
import userRouter from "./user.router.js";
import studentRouter from "./student.router.js";

const router = Router();

router.use("/user", userRouter);
router.use("/student", studentRouter);

export default router;
