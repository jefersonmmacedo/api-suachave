import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListRoomUseCase } from "./ListRoomUseCase";

class ListRoomController {
  constructor(private listRoomUseCase: ListRoomUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idProperty, idCompany, idClient} = req.params

    console.log(idProperty, idCompany, idClient)
   await collections.rooms.find({idProperty, idCompany}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        console.log(result)
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListRoomController };
