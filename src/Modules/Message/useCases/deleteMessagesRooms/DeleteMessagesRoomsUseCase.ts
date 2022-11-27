import { IMessagesRoomsRepository } from "../../repositories/IMessagesRoomsRepository";

class DeleteMessagesRoomsUseCase {
  constructor(private MessagesRoomsRepository: IMessagesRoomsRepository) {
    ("");
  }

  async execute({id}){

   await this.MessagesRoomsRepository.delete({id});
  }
}

export { DeleteMessagesRoomsUseCase };
