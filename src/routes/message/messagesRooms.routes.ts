import { Router } from "express";
import { createMessagesRoomsController } from "../../Modules/Message/useCases/createMessagesRooms";
import { deleteMessagesRoomsController } from "../../Modules/Message/useCases/deleteMessagesRooms";
import { listMessagesRoomsController } from "../../Modules/Message/useCases/listMessagesRooms";


const MessagesRoomsRoutes = Router();

MessagesRoomsRoutes.post("/", (req, res) => {
  return createMessagesRoomsController.handle(req, res);
});
MessagesRoomsRoutes.get("/", (req, res) => {
  return listMessagesRoomsController.handle(req, res);
});
MessagesRoomsRoutes.delete("/", (req, res) => {
  return deleteMessagesRoomsController.handle(req, res);
});

export { MessagesRoomsRoutes };


