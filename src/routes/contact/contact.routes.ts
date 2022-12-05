import { Router } from "express";
import { createContactController } from "../../Modules/Contact/useCases/createContact";
import { listContactUserController } from "../../Modules/Contact/useCases/listContactUser";

const contactRoutes = Router();

contactRoutes.post("/", (req, res) => {
  return createContactController.handle(req, res);
});
contactRoutes.get("/company/:idCompany", (req, res) => {
  return listContactUserController.handle(req, res);
});


export { contactRoutes };
