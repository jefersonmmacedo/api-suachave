import { IWaitingListRepository } from "../../repositories/IWaitingListRepository";

interface IRequest {
  id: string;
  type: string;
  nameFamtasy: string;
  whatsapp: string;
  email: string;
  cep: string;
  city: string;
  uf: string;
}

class CreateWaitingListUseCase {
  constructor(private WaitingListRepository: IWaitingListRepository) {
    " ";
  }

  execute({ id, type, nameFamtasy, whatsapp, email, cep, city, uf, }: IRequest): void {

    this.WaitingListRepository.create({
      id, type, nameFamtasy, whatsapp, email, cep, city, uf,
    });
  }
}

export { CreateWaitingListUseCase };
