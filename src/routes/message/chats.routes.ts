import { Router } from "express";
import { createChatsController } from "../../Modules/Message/useCases/createChats";
import { deleteChatsController } from "../../Modules/Message/useCases/deleteChats";
import { listChatsController } from "../../Modules/Message/useCases/listChats";



const chatsRoutes = Router();

chatsRoutes.post("/", (req, res) => {
  return createChatsController.handle(req, res);
});
chatsRoutes.get("/", (req, res) => {
  return listChatsController.handle(req, res);
});
chatsRoutes.delete("/", (req, res) => {
  return deleteChatsController.handle(req, res);
});


export { chatsRoutes };


