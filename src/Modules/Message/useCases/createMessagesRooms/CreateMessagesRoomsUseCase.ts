import { IMessagesRoomsRepository } from "../../repositories/IMessagesRoomsRepository";

interface IRequest {
  id: string;
  idRomm: string;
  idCompany: string;
  IdClient: string;
  idProperty: string;
  avatar: string;
  text: string;
  link: string;
}

class CreateMessagesRoomsUseCase {
  constructor(private MessagesRoomsRepository: IMessagesRoomsRepository) {
    ("");
  }

  async execute({
    id,idRomm, idCompany, IdClient, idProperty, avatar, text, link
  }: IRequest): Promise<void>{

   await this.MessagesRoomsRepository.create({
   id, idRomm, idCompany, IdClient, idProperty, avatar, text, link
    });
  }
}

export { CreateMessagesRoomsUseCase };
