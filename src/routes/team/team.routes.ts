import { Router } from "express";
import { createTeamController } from "../../Modules/Broker/useCases/createTeam";
import { listTeamController } from "../../Modules/Broker/useCases/listAccountTeam";
import { listTeamUnicController } from "../../Modules/Broker/useCases/listTeamUnic";
import { updateTeamController } from "../../Modules/Broker/useCases/updateTeam";

const TeamRouter = Router();

TeamRouter.post("/", (req, res) => {
  return createTeamController.handle(req, res);
});

TeamRouter.post("/", (req, res) => {
  return listTeamController.handle(req, res);
});

TeamRouter.post("/:id", (req, res) => {
  return listTeamUnicController.handle(req, res);
});

TeamRouter.patch("/", (req, res) => {
  return updateTeamController.handle(req, res);
});



export { TeamRouter };
