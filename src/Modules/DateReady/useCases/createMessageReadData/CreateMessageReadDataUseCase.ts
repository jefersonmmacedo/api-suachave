import { IMessageReadDataRepository } from "../../repositories/IMessageReadDataRepository";

interface IRequest {
  id: string;
  idRoom: string;
  dateReady: string;
}

class CreateMessageReadDataUseCase {
  constructor(private MessageReadDataRepository: IMessageReadDataRepository) {
    " ";
  }

  execute({ id, idRoom, dateReady }: IRequest): void {
    this.MessageReadDataRepository.create({
      id, idRoom, dateReady
    });
  }
}

export { CreateMessageReadDataUseCase };
