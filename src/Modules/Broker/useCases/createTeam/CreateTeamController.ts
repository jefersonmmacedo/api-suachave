import { Request, Response } from "express";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

class CreateTeamController {
  constructor(private createTeamUseCase: CreateTeamUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id, idCompany, avatar, profession, name, schooling, rg, cpf, birthday, register,
      email, phone, whatsapp, road, number, district, city, uf,
      instagram, facebook, linkedin, twitter,
      bank, agency, typeAccount, account, typeKeyPix, keypix,  } = req.body;

    this.createTeamUseCase.execute({
      id, idCompany, avatar, profession, name, schooling, rg, cpf, birthday, register,
      email, phone, whatsapp, road, number, district, city, uf,
      instagram, facebook, linkedin, twitter,
      bank, agency, typeAccount, account, typeKeyPix, keypix, 
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateTeamController };






