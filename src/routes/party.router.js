import { Router } from "express";
import { CreatePartyController } from "../controllers/party.controller.js";

const partyRouter = Router();

partyRouter.post("/register", CreatePartyController);

export default partyRouter;
