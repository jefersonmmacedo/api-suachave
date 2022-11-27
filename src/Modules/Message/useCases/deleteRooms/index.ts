import { RoomsRepository } from "../../repositories/implementations/RoomsRepository";
import { DeleteRoomsController } from "./DeleteRoomsController";
import { DeleteRoomsUseCase } from "./DeleteRoomsUseCase";

const roomsRepository = RoomsRepository.getInstance();
const deleteRoomsUseCase = new DeleteRoomsUseCase(roomsRepository);
const deleteRoomsController = new DeleteRoomsController(deleteRoomsUseCase);

export { deleteRoomsController };
