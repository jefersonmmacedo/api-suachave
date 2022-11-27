import { RoomsRepository } from "../../repositories/implementations/RoomsRepository";
import { CreateRoomsController } from "./CreateRoomsController";
import { CreateRoomsUseCase } from "./CreateRoomsUseCase";

const roomsRepository = RoomsRepository.getInstance();
const createRoomsUseCase = new CreateRoomsUseCase(roomsRepository);
const createRoomsController = new CreateRoomsController(createRoomsUseCase);

export { createRoomsController };
