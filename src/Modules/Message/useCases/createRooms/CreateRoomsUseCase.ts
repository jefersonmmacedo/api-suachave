import { IRoomsRepository } from "../../repositories/IRoomsRepository";

interface IRequest {
  id: string;
  Room: string;
  idCompany: string;
  IdClient:string;
  idProperty:string;
  avatarClient: string;
  imageProperty: string;
}

class CreateRoomsUseCase {
  constructor(private RoomsRepository: IRoomsRepository) {
    ("");
  }

  async execute({
    id,Room, idCompany, IdClient, idProperty, avatarClient, imageProperty
  }: IRequest): Promise<void>{

   await this.RoomsRepository.create({
   id, Room, idCompany, IdClient, idProperty, avatarClient, imageProperty
    });
  }
}

export { CreateRoomsUseCase };
