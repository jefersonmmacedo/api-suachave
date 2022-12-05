import { Router } from "express";
import { createContractsController } from "../../Modules/Negotiations/useCases/createContracts";
import { listContractsController } from "../../Modules/Negotiations/useCases/listContracts";


const contractsRoutes = Router();

contractsRoutes.post("/", (req, res) => {
  return createContractsController.handle(req, res);
});
contractsRoutes.get("/negotiations/:idNegotiations", (req, res) => {
  return listContractsController.handle(req, res);
});



export { contractsRoutes };
