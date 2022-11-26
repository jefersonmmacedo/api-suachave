import { Router } from "express";
import { createBrokerController } from "../../Modules/Broker/useCases/createAccount";
import { listBrokerController } from "../../Modules/Broker/useCases/listAccountBroker";
import { listBrokerUnicController } from "../../Modules/Broker/useCases/listBrokerUnic";
import { updateBrokerController } from "../../Modules/Broker/useCases/updateBroker";

const BrokerRouter = Router();

BrokerRouter.post("/", (req, res) => {
  return createBrokerController.handle(req, res);
});

BrokerRouter.post("/", (req, res) => {
  return listBrokerController.handle(req, res);
});

BrokerRouter.post("/:id", (req, res) => {
  return listBrokerUnicController.handle(req, res);
});

BrokerRouter.patch("/", (req, res) => {
  return updateBrokerController.handle(req, res);
});



export { BrokerRouter };
