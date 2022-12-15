import { hash } from "bcrypt";
import { ITeamRepository } from "../../repositories/ITeamRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  avatar: string;
  profession: string;
  name: string;
  schooling: string;
  rg: string;
  cpf: string;
  birthday: Date;
  register: string;
  email: string;
  phone: string;
  whatsapp: string;
  road: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  bank: string;
  agency: string;
  typeAccount: string;
  account: string;
  typeKeyPix: string;
  keypix: string;
}

class CreateTeamUseCase {
  constructor(private TeamRepository: ITeamRepository) {
    " ";
  }
  
  async execute({id,idCompany, avatar, profession, name, schooling, rg, cpf, birthday, register,
    email, phone, whatsapp, road, number, district, city, uf,
    instagram, facebook, linkedin, twitter,
    bank, agency, typeAccount, account, typeKeyPix, keypix, }: IRequest): Promise<void> {
    const findEmail = await this.TeamRepository.findByEmail(email);

      await this.TeamRepository.create({
        id, idCompany, avatar, profession, name, schooling, rg, cpf, birthday, register,
        email, phone, whatsapp, road, number, district, city, uf,
        instagram, facebook, linkedin, twitter,
        bank, agency, typeAccount, account, typeKeyPix, keypix, 
      });

  }
}

export { CreateTeamUseCase };


