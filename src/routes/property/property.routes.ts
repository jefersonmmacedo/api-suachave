import { Router } from "express";
import { createPropertyController } from "../../Modules/Property/useCases/createProperty";
import { listPropertyController } from "../../Modules/Property/useCases/listAccountProperty";
import { listPropertyAllController } from "../../Modules/Property/useCases/listAccountPropertyAll";
import { listPropertyCompanyController } from "../../Modules/Property/useCases/listPropertyCompany";
import { listPropertyUnicController } from "../../Modules/Property/useCases/listPropertyUnic";

const PropertyRoutes = Router();

PropertyRoutes.post("/", (req, res) => {
  return createPropertyController.handle(req, res);
});
PropertyRoutes.get("/all/:availability", (req, res) => {
  return listPropertyAllController.handle(req, res);
});
PropertyRoutes.get("/company/:idCompany", (req, res) => {
  return listPropertyCompanyController.handle(req, res);
});
PropertyRoutes.get("/:id", (req, res) => {
  return listPropertyUnicController.handle(req, res);
});
PropertyRoutes.get("/lists/:availability/:status", (req, res) => {
  return listPropertyController.handle(req, res);
});

export { PropertyRoutes };
