import { Router } from "express";
import { createAccountClientController } from "../../Modules/AccountClient/useCases/createAccount";
import { listAccountClientController } from "../../Modules/AccountClient/useCases/listAccountClient";
import { listAccountClientEmailController } from "../../Modules/AccountClient/useCases/listAccountClientEmail";


const AccountClientRouter = Router();

AccountClientRouter.post("/", (req, res) => {
  return createAccountClientController.handle(req, res);
});

AccountClientRouter.get("/", (req, res) => {
  return listAccountClientController.handle(req, res);
})
AccountClientRouter.get("/unic/:email", (req, res) => {
  return listAccountClientEmailController.handle(req, res);
})


export { AccountClientRouter };
