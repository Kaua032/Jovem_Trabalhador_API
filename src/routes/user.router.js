import { Router } from "express";
import { CreateUserController } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/register", CreateUserController);

export default userRouter;
