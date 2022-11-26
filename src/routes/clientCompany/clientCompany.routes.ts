import { Router } from "express";
import { createClientCompanyController } from "../../Modules/ClientCompany/useCases/createClientCompany";
import { listClientCompanyController } from "../../Modules/ClientCompany/useCases/listClientCompany";
import { listClientCompanyAdmController } from "../../Modules/ClientCompany/useCases/listClientCompanyAdm";
import { listClientCompanyEmailController } from "../../Modules/ClientCompany/useCases/listClientCompanyEmail";
import { updateClientCompanyController } from "../../Modules/ClientCompany/useCases/updateClientCompany";


const clientCompanyRoutes = Router();

clientCompanyRoutes.post("/", (req, res) => {
  return createClientCompanyController.handle(req, res);
});
clientCompanyRoutes.get("/", (req, res) => {
  return listClientCompanyController.handle(req, res);
});
clientCompanyRoutes.get("/company/:idCompany", (req, res) => {
  return listClientCompanyAdmController.handle(req, res);
});
clientCompanyRoutes.get("/company/:idCompany", (req, res) => {
  return listClientCompanyEmailController.handle(req, res);
});
clientCompanyRoutes.patch("/company/:idCompany", (req, res) => {
  return updateClientCompanyController.handle(req, res);
});


export { clientCompanyRoutes };
