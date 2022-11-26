import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListNegotiationsUseCase } from "./ListNegotiationsUseCase";

class ListNegotiationsController {
  constructor(private listNegotiationsUseCase: ListNegotiationsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const status = "active";
    const verified = true;
   await collections.negotiations.find({status: status, verified: verified}).toArray(function(err, result){
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

export { ListNegotiationsController };
