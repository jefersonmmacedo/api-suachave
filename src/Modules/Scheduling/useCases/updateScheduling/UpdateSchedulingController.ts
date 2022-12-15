import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateSchedulingUseCase } from "./UpdateSchedulingUseCase";

class UpdateSchedulingController {
  constructor(private UpdateSchedulingUseCase: UpdateSchedulingUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idClient, idProperty, idCompany, titleProperty, imageProperty, nameClient, avatarClient, email, phone, whatsapp, status, meet, 
      day, month, year, shift, hour, ownACar, location, address, similarProperties, amountOfPeople, dateCompleted } = req.body;
    const id = req.params; 


    await collections.scheduling.findOneAndUpdate(id, {$set:{idClient, idProperty, idCompany, titleProperty, imageProperty, nameClient, avatarClient, email, phone, whatsapp, status,  meet,        
      day, month, year, shift, hour, ownACar, location, address, similarProperties, amountOfPeople, dateCompleted}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateSchedulingController };
