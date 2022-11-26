import { IAlertRepository } from "../../repositories/IAlertRepository";

interface IRequest {
  id: string;
  idClient: string;
  city: string;
  uf: string;
  type: string;
  subtype: string;
  bedroom: string;
  suites: string;
  restroom: string;
  garage: string;
}

class CreateAlertUseCase {
  constructor(private AlertRepository: IAlertRepository) {
    " ";
  }

  execute({ id, idClient, city, uf, type, subtype, bedroom, suites, restroom, garage, }: IRequest): void {

    this.AlertRepository.create({
      id, idClient, city, uf, type, subtype, bedroom, suites, restroom, garage,
    });
  }
}

export { CreateAlertUseCase };
