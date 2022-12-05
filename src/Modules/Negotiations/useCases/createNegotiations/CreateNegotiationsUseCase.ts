import { hash } from "bcrypt";
import { INegotiationsRepository } from "../../repositories/INegotiationsRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  idClient: string;
  idProperty: string;
  typeNegotiation: string;
  status: string;
  deadline: string;
  parcel: string;
  valueProperty: string;
  amountofCharges: string;
  valueTotal: string;
}

class CreateNegotiationsUseCase {
  constructor(private NegotiationsRepository: INegotiationsRepository) {
    " ";
  }
  
  async execute({id, idCompany, idClient, idProperty, typeNegotiation, status, deadline, parcel, valueProperty, amountofCharges, valueTotal}: IRequest): Promise<void> {

      await this.NegotiationsRepository.create({
        id, idCompany, idClient, idProperty, typeNegotiation, status, deadline, parcel, valueProperty, amountofCharges, valueTotal 
      });

  }
}

export { CreateNegotiationsUseCase };


