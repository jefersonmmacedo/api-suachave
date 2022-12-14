import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListNegotiationsCompanyUseCase } from "./ListNegotiationsCompanyUseCase";

class ListNegotiationsCompanyController {
  constructor(private ListNegotiationsCompanyUseCase: ListNegotiationsCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params;
   await collections.negotiations.find(idCompany).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
    //  console.log(result)
      return result;
     })
  }
}

export { ListNegotiationsCompanyController };
