import { RoomsRepository } from "../../repositories/implementations/RoomsRepository";
import { ListRoomsController } from "./ListRoomsController";
import { ListRoomsUseCase } from "./ListRoomsUseCase";

const roomsRepository = RoomsRepository.getInstance();

const listRoomsUsecase = new ListRoomsUseCase(roomsRepository);

const listRoomsController = new ListRoomsController(listRoomsUsecase);

export { listRoomsController };
