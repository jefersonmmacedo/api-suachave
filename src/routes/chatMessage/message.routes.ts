import { Router } from "express";
import { createMessageController } from "../../Modules/ChatMessage/useCases/createMessage";
import { listMessageController } from "../../Modules/ChatMessage/useCases/listMessage";
import { listMessageUserController } from "../../Modules/ChatMessage/useCases/listMessageUser";


const MessageRouter = Router();

MessageRouter.post("/", (req, res) => {
  return createMessageController.handle(req, res);
});
MessageRouter.get("/:idRoom", (req, res) => {
  return listMessageController.handle(req, res);
});
MessageRouter.get("/company/:idCompany", (req, res) => {
  return listMessageUserController.handle(req, res);
});




export { MessageRouter };
