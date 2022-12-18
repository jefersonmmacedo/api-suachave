import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListRoomUseCase } from "./ListRoomUseCase";

class ListRoomController {
  constructor(private listRoomUseCase: ListRoomUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.rooms.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListRoomController };
