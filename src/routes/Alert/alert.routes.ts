import { Router } from "express";
import { createAlertController } from "../../Modules/Alert/useCases/createForuns";
import { listAlertController } from "../../Modules/Alert/useCases/listAlert";
import { listAlertUserController } from "../../Modules/Alert/useCases/listAlertUser";

const AlertRouter = Router();

AlertRouter.post("/", (req, res) => {
  return createAlertController.handle(req, res);
});

AlertRouter.get("/", (req, res) => {
  return listAlertController.handle(req, res);
});

AlertRouter.get("/:idClient", (req, res) => {
  return listAlertUserController.handle(req, res);
});



export { AlertRouter };
