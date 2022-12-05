import { hash } from "bcrypt";
import { IContractsRepository } from "../../repositories/IContractsRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  idClient: string;
  idNegotiations: string;
  contract: string;
}

class CreateContractsUseCase {
  constructor(private ContractsRepository: IContractsRepository) {
    " ";
  }
  
  async execute({id, idCompany, idClient, idNegotiations, contract,}: IRequest): Promise<void> {

      await this.ContractsRepository.create({
        id, idCompany, idClient, idNegotiations, contract, 
      });

  }
}

export { CreateContractsUseCase };


