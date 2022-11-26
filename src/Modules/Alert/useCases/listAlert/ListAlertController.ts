import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAlertUseCase } from "./ListAlertUseCase";

class ListAlertController {
  constructor(private listAlertUseCase: ListAlertUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.alert.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      console.log(result)
      return result;
     })

  }
}

export { ListAlertController };
