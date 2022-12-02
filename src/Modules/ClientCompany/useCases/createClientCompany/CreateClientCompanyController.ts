import { Request, Response } from "express";
import { CreateClientCompanyUseCase } from "./CreateClientCompanyUseCase";

class CreateClientCompanyController {
  constructor(private createClientCompanyUseCase: CreateClientCompanyUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, idProcess, name, fantasyName, rg, cpf, email, phone, whatsapp, avatar, road,
      number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance, } = req.body;

    this.createClientCompanyUseCase.execute({
      id, idProcess, name, fantasyName, rg, cpf, email, phone, whatsapp, avatar, road,
      number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateClientCompanyController };






