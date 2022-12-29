import { Router } from "express";
import { createMessageReadDataController } from "../../Modules/DateReady/useCases/createMessageReadData";
import { createNotificationReadDataController } from "../../Modules/DateReady/useCases/createNotificationReadData";
import { createRoomReadDataController } from "../../Modules/DateReady/useCases/createRoomReadData";
import { listMessageReadDataController } from "../../Modules/DateReady/useCases/listMessageReadData";
import { listNotificationReadDataController } from "../../Modules/DateReady/useCases/listNotificationReadData";
import { listRoomReadDataController } from "../../Modules/DateReady/useCases/listRoomReadData";


const DateReadyRouter = Router();

DateReadyRouter.post("/messages/", (req, res) => {
  return createMessageReadDataController.handle(req, res);
});
DateReadyRouter.post("/rooms/", (req, res) => {
  return createRoomReadDataController.handle(req, res);
});
DateReadyRouter.post("/notifications/", (req, res) => {
  return createNotificationReadDataController.handle(req, res);
});
DateReadyRouter.get("/messages/user/:idUser", (req, res) => {
  return listMessageReadDataController.handle(req, res);
});
DateReadyRouter.get("/notifications/user/:idUser", (req, res) => {
  return listNotificationReadDataController.handle(req, res);
});
DateReadyRouter.get("/rooms/user/:idRoom", (req, res) => {
  return listRoomReadDataController.handle(req, res);
});



export { DateReadyRouter };