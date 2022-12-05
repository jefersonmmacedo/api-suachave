import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyAllTypeUseCase } from "./ListPropertyAllTypeUseCase";

class ListPropertyAllTypeController {
  constructor(private listPropertyAllUseCase: ListPropertyAllTypeUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability} = req.params;
    const type = req.query.type;

   await collections.property.find({availability, type}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListPropertyAllTypeController };
