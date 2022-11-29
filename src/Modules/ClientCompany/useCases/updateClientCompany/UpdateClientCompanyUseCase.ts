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
  tipo: string;
  subtipo: string;
  attendance: string;
}

class UpdateClientCompanyUseCase {
  constructor(private ClientCompanyRepository: IClientCompanyRepository) {
    " ";
  }
  
  async execute({id, idProcess, name, fantasyName, rg, cpf, email, phone, whatsapp, avatar, road,
    number, district, city, uf, interest, tipo, subtipo, attendance, }: IRequest): Promise<void> {
    const findEmail = await this.ClientCompanyRepository.findByEmail(email);
   

      await this.ClientCompanyRepository.update({
        id, idProcess, name, fantasyName, rg, cpf, email, phone, whatsapp, avatar, road,
number, district, city, uf, interest, tipo, subtipo, attendance, 
      });

  }
}

export { UpdateClientCompanyUseCase };
