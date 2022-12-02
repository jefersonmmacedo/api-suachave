import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyFullDataUseCase } from "./ListPropertyFullDataUseCase";

class ListPropertyFullDataController {
  constructor(private listPropertyFullDataUseCase: ListPropertyFullDataUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability, status} = req.params;
    const uf = req.query.uf;
    const city = req.query.city;
    const bedroom = req.query.bedroom;
    const restroom = req.query.restroom;
    const garage = req.query.garage;
    const suite = req.query.garage;

    console.log({bedroom: bedroom})
    console.log({restroom: restroom})
    console.log({garage: garage})

   await collections.property.find({
    "$and": [{ availability: availability },
    { status: status},
    { uf: uf},
    { city: city},
    { bedroom: { $gte: bedroom } },
    { suite: { $gte: suite } },
    { restroom: { $gte: restroom } },
    { garage: { $gte: garage } },
  ],
}).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListPropertyFullDataController };




// {
//   "status": status,
//   "uf": uf,
//   "city": city,
//   "bedroom": { $gte: Number(parseInt) } ,
//   "restroom": { $gte: Number(restroom) } ,
//   "garage": { $gte: Number(garage) }
// }
