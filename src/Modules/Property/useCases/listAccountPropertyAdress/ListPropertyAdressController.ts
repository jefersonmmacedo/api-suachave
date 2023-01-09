import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyAdressUseCase } from "./ListPropertyAdressUseCase";

class ListPropertyAdressController {
  constructor(private listPropertyUseCase: ListPropertyAdressUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability, status} = req.params;
    const uf = req.query.uf;
    const city = req.query.city;

   await collections.property.find({
    "$and": [{ availability: availability },
    { status: status},
    { uf: uf},
    { city: city},
  ],
}).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListPropertyAdressController };




// {
//   "status": status,
//   "uf": uf,
//   "city": city,
//   "bedroom": { $gte: Number(parseInt) } ,
//   "restroom": { $gte: Number(restroom) } ,
//   "garage": { $gte: Number(garage) }
// }
