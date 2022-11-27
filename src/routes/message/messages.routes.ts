import { Router } from "express";
import { createMessagesController } from "../../Modules/Message/useCases/createMessages";
import { deleteMessagesController } from "../../Modules/Message/useCases/deleteMessages";
import { listMessagesController } from "../../Modules/Message/useCases/listMessages";


const MessagesRoutes = Router();

MessagesRoutes.post("/", (req, res) => {
  return createMessagesController.handle(req, res);
});
MessagesRoutes.get("/", (req, res) => {
  return listMessagesController.handle(req, res);
});
MessagesRoutes.delete("/", (req, res) => {
  return deleteMessagesController.handle(req, res);
});

export { MessagesRoutes };


