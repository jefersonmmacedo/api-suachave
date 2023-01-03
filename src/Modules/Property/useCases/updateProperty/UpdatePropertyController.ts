import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdatePropertyUseCase } from "./UpdatePropertyUseCase";

class UpdatePropertyController {
  constructor(private UpdatePropertyUseCase: UpdatePropertyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idCompany, avatarCompany, fantasyName, title, road, district, city, uf, description, type, subType, status, newProperty, firstLease,
      availability, bedroom, garage, suite, restroom, furnished, pets, priceSale, priceRent, textRent, buildingArea,
      siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction, images, featuredImage,
      platformVideo, video, slider, financing, characteristcs, } = req.body;
    const id = req.params; 


    await collections.property.findOneAndUpdate(id, {$set:{ idCompany, avatarCompany, fantasyName, title, road, district, city, uf, description, type, subType, status, newProperty, firstLease,
      availability, bedroom, garage, suite, restroom, furnished, pets, priceSale, priceRent, textRent, buildingArea,
      siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction, images, featuredImage,
      platformVideo, video, slider, financing, characteristcs,}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdatePropertyController };

