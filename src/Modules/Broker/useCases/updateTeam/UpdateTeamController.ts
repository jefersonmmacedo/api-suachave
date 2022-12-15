import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateTeamUseCase } from "./UpdateTeamUseCase";

class UpdateTeamController {
  constructor(private UpdateTeamUseCase: UpdateTeamUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idCompany, register, profession, name, schooling, rg, cpf,
      road, number, district, city, uf, email, phone, whatsapp,
      avatar, facebook, instagram, linkedin, twitter, } = req.body;
    const id = req.params; 


    await collections.team.findOneAndUpdate(id, {$set:{idCompany, register, profession, name, schooling, rg, cpf,
      road, number, district, city, uf, email, phone, whatsapp,
      avatar, facebook, instagram, linkedin, twitter,}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateTeamController };
