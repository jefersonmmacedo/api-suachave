import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListMessageUseCase } from "./ListMessageUseCase";

class ListMessageController {
  constructor(private listMessageUseCase: ListMessageUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.messagesRooms.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListMessageController };
