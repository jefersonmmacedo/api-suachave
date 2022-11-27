import { Router } from "express";
import { createRoomsController } from "../../Modules/Message/useCases/createRooms";
import { deleteRoomsController } from "../../Modules/Message/useCases/deleteRooms";
import { listRoomsController } from "../../Modules/Message/useCases/listRooms";



const RoomsRoutes = Router();

RoomsRoutes.post("/", (req, res) => {
  return createRoomsController.handle(req, res);
});
RoomsRoutes.get("/", (req, res) => {
  return listRoomsController.handle(req, res);
});
RoomsRoutes.delete("/", (req, res) => {
  return deleteRoomsController.handle(req, res);
});


export { RoomsRoutes };


