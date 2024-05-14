import { Router } from "express";
import { CreateUserController } from "../controllers/user.controller.js";
import { loginController } from "../controllers/auth.controller.js";

const userRouter = Router();

userRouter.post("/register", CreateUserController);
userRouter.post("/login", loginController);

export default userRouter;
