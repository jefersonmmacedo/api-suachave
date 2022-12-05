import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListContractsUseCase } from "./ListContractsUseCase";

class ListContractsController {
  constructor(private listContractsUseCase: ListContractsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idNegotiations = req.params;
   await collections.contracts.find(idNegotiations).toArray(function(err, result){
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

export { ListContractsController };
