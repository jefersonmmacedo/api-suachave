import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAlertUserUseCase } from "./ListAlertUserUseCase";

class ListAlertUserController {
  constructor(private listAlertUseCase: ListAlertUserUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idClient = req.params
   await collections.alert.find(idClient).toArray(function(err, result){
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

export { ListAlertUserController };
