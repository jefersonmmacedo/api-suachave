import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListRoomsUseCase } from "./ListRoomsUseCase";

class ListRoomsController {
  constructor(private listRoomseCase: ListRoomsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idAccount = req.params;
   await collections.rooms.find(idAccount).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
     // console.log(result)
      return result;
     })

  }
}

export { ListRoomsController };
