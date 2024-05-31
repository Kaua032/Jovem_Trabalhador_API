import { Router } from "express";
import {
  CreatePartyController,
  GetAllPartiesController,
  UpdatePartyController,
} from "../controllers/party.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const partyRouter = Router();

partyRouter.post("/register", authMiddleware, CreatePartyController);
partyRouter.get("/all", GetAllPartiesController);
partyRouter.put("/update/:id", authMiddleware, UpdatePartyController);

export default partyRouter;
