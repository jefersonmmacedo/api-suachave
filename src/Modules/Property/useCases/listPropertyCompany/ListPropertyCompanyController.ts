import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyCompanyUseCase } from "./ListPropertyCompanyUseCase";

class ListPropertyCompanyController {
  constructor(private ListPropertyCompanyUseCase: ListPropertyCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params;
   await collections.property.find(idCompany).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })
  }
}

export { ListPropertyCompanyController };
