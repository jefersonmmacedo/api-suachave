import { hash } from "bcrypt";
import { ISchedulingRepository } from "../../repositories/ISchedulingRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idClient: string;
  idProperty: string;
  idCompany: string;
  titleProperty: string;
  imageProperty: string;
  nameClient: string;
  avatarClient: string;
  email: string;
  phone: string;
  whatsapp: string;
  status: string;
  meet: string;
  day: string;
  month: string;
  year: string;
  shift: string;
  hour: string;
  ownACar: string;
  location: string;
  address: string;
  similarProperties: string;
  amountOfPeople: string;
  dateCompleted: Date;
}

class CreateSchedulingUseCase {
  constructor(private SchedulingRepository: ISchedulingRepository) {
    " ";
  }
  
  async execute({id,idClient, idProperty, idCompany, titleProperty, imageProperty, nameClient, avatarClient, email, phone, whatsapp, status, meet,
    day, month, year, shift, hour, ownACar,location, address, similarProperties, amountOfPeople, dateCompleted}: IRequest): Promise<void> {

      await this.SchedulingRepository.create({
        id, idClient, idProperty, idCompany, titleProperty, imageProperty, nameClient, avatarClient, email, phone, whatsapp, status, meet,
        day, month, year, shift, hour, ownACar,location, address, similarProperties, amountOfPeople, dateCompleted
      });

  }
}

export { CreateSchedulingUseCase };