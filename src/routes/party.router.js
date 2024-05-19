import { Router } from "express";
import {
  CreatePartyController,
  GetAllPartiesController,
} from "../controllers/party.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const partyRouter = Router();

partyRouter.post("/register", authMiddleware, CreatePartyController);
partyRouter.get("/all", GetAllPartiesController);

export default partyRouter;
