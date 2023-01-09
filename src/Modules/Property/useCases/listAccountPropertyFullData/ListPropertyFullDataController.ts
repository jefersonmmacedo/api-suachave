import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyFullDataUseCase } from "./ListPropertyFullDataUseCase";

class ListPropertyFullDataController {
  constructor(private listPropertyFullDataUseCase: ListPropertyFullDataUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability, status} = req.params;
    const type = req.query.type;
    const subType = req.query.subType;
    const uf = req.query.uf;
    const city = req.query.city;
    const bedroom = req.query.bedroom;
    const restroom = req.query.restroom;
    const garage = req.query.garage;
    const suite = req.query.suite;

    console.log({availability: availability})
    console.log({status: status})
    console.log({bedroom: bedroom})
    console.log({restroom: restroom})
    console.log({garage: garage})
    console.log({suite: suite})
    console.log({type: type})
    console.log({subType: subType})
    console.log({city: city})
    console.log({uf: uf})

   await collections.property.find({
    "$and": [{ availability: availability },
    { status: status},
    { type: type},
    { subType: subType},
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
