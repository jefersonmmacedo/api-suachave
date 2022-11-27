import { IRoomsRepository } from "../../repositories/IRoomsRepository";

class DeleteRoomsUseCase {
  constructor(private RoomsRepository: IRoomsRepository) {
    ("");
  }

  async execute({id}){

   await this.RoomsRepository.delete({id});
  }
}

export { DeleteRoomsUseCase };
