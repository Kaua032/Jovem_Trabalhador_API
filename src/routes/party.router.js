import { Router } from "express";
import {
  CreatePartyController,
  GetAllPartiesController,
} from "../controllers/party.controller.js";

const partyRouter = Router();

partyRouter.post("/register", CreatePartyController);
partyRouter.get("/all", GetAllPartiesController);

export default partyRouter;
