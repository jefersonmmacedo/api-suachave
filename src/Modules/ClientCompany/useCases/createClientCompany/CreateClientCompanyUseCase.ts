import { hash } from "bcrypt";
import { IClientCompanyRepository } from "../../repositories/IClientCompanyRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idProcess: string;
  name: string;
  fantasyName: string;
  rg: string;
  cpf: string;
  email: string;
  phone: string;
  whatsapp: string;
  avatar: string;
  road: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  interest: string;
  type: string;
  subtype: string;
  cityPreference: string;
  ufPreference: string;
  attendance: string;
}

class CreateClientCompanyUseCase {
  constructor(private ClientCompanyRepository: IClientCompanyRepository) {
    " ";
  }
  
  async execute({id, idProcess, name, fantasyName, rg, cpf, email, phone, whatsapp, avatar, road,
    number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance, }: IRequest): Promise<void> {
    const findEmail = await this.ClientCompanyRepository.findByEmail(email);
  
      await this.ClientCompanyRepository.create({
        id, idProcess, name, fantasyName, rg, cpf, email, phone, whatsapp, avatar, road,
number, district, city, uf, interest, type, subtype, cityPreference, ufPreference,  attendance, 
      });

  }
}

export { CreateClientCompanyUseCase };