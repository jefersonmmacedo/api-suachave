import { hash } from "bcrypt";
import { IEvaluationRepository } from "../../repositories/IEvaluationRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  type: string;
  subType: string;
  status: string;
  description: string;
  road: string;
  district: string;
  city: string;
  uf: string;
  bedroom: string;
  garage: string;
  suite: string;
  restroom: string;
  characteristcs: object;
  images: object;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
}

class CreateEvaluationUseCase {
  constructor(private EvaluationRepository: IEvaluationRepository) {
    " ";
  }
  
  async execute({
    id, idCompany, type, subType, status, description, road, district, city, uf, bedroom, garage, suite, restroom,
    characteristcs, images, name, email, phone, whatsapp, 
  }: IRequest): Promise<void> {

      await this.EvaluationRepository.create({
        id, idCompany, type, subType, status, description, road, district, city, uf, bedroom, garage, suite, restroom,
        characteristcs, images, name, email, phone, whatsapp, 
      });

  }
}

export { CreateEvaluationUseCase };