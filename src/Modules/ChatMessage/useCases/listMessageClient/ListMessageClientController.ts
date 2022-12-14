import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListMessageClientUseCase } from "./ListMessageClientUseCase";

class ListMessageClientController {
  constructor(private listMessageUseCase: ListMessageClientUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idAccount = req.params
   await collections.messagesRooms.find(idAccount).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListMessageClientController };
