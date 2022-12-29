import { IRoomReadDataRepository } from "../../repositories/IRoomReadDataRepository";

interface IRequest {
  id: string;
  idRoom: string;
  dateReady: string;
}

class CreateRoomReadDataUseCase {
  constructor(private RoomReadDataRepository: IRoomReadDataRepository) {
    " ";
  }

  execute({ id, idRoom, dateReady }: IRequest): void {
    this.RoomReadDataRepository.create({
      id, idRoom, dateReady
    });
  }
}

export { CreateRoomReadDataUseCase };
