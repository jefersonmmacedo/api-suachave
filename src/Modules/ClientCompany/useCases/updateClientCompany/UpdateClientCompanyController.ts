import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateClientCompanyUseCase } from "./UpdateClientCompanyUseCase";

class UpdateClientCompanyController {
  constructor(private UpdateClientCompanyUseCase: UpdateClientCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idProcess, typeClient, idCompany, name, fantasyName, rg, cpf, email, phone, whatsapp, avatar, road,
      number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance, } = req.body;
    const id = req.params; 


    await collections.clientCompany.findOneAndUpdate(id, {$set:{
      idProcess, typeClient, idCompany, name, fantasyName, rg, cpf, email, phone, whatsapp, avatar, road,
number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance, 
    }}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateClientCompanyController };
