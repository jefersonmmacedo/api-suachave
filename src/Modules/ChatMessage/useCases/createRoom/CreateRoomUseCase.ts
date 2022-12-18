import { IRoomRepository } from "../../repositories/IRoomRepository";

interface IRequest {
  id: string;
  room: string;
  idCompany: string;
  idClient: string;
  idProperty: string;
}

class CreateRoomUseCase {
  constructor(private RoomRepository: IRoomRepository) {
    " ";
  }

  execute({ id, room, idCompany, idClient, idProperty }: IRequest): void {
    this.RoomRepository.create({
      id, room, idCompany, idClient, idProperty
    });
  }
}

export { CreateRoomUseCase };
