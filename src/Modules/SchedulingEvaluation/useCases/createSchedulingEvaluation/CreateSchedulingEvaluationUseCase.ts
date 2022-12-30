import { hash } from "bcrypt";
import { ISchedulingEvaluationRepository } from "../../repositories/ISchedulingEvaluationRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idClient: string;
  idEvaluation: string;
  idCompany: string;
  email: string;
  phone: string;
  whatsapp: string;
  status: string;
  day: string;
  month: string;
  year: string;
  shift: string;
  hour: string;
  address: string;
  dateCompleted: Date;
}

class CreateSchedulingEvaluationUseCase {
  constructor(private SchedulingEvaluationRepository: ISchedulingEvaluationRepository) {
    " ";
  }
  
  async execute({id, idClient, idEvaluation, idCompany, email, phone, whatsapp, status, day, month, year, shift, hour, address, dateCompleted,}: IRequest): Promise<void> {

      await this.SchedulingEvaluationRepository.create({
        id, idClient, idEvaluation, idCompany, email, phone, whatsapp, status, day, month, year, shift, hour, address, dateCompleted,
      });

  }
}

export { CreateSchedulingEvaluationUseCase };