import { Router } from "express";
import { createNegotiationsController } from "../../Modules/Negotiations/useCases/createNegotiations";
import { listNegotiationsController } from "../../Modules/Negotiations/useCases/listNegotiations";
import { listNegotiationsUnicController } from "../../Modules/Negotiations/useCases/listNegotiationsUnic";
import { updateNegotiationsController } from "../../Modules/Negotiations/useCases/updateBroker";


const negotiationsRoutes = Router();

negotiationsRoutes.post("/", (req, res) => {
  return createNegotiationsController.handle(req, res);
});
negotiationsRoutes.get("/", (req, res) => {
  return listNegotiationsController.handle(req, res);
});
negotiationsRoutes.get("/company/:idCompany", (req, res) => {
  return listNegotiationsUnicController.handle(req, res);
});
negotiationsRoutes.get("/company/:idCompany", (req, res) => {
  return updateNegotiationsController.handle(req, res);
});


export { negotiationsRoutes };
