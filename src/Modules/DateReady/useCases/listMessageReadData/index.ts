import { MessageReadDataRepository } from "../../repositories/implementations/MessageReadData";
import { ListMessageReadDataController } from "./ListMessageReadDataController";
import { ListMessageReadDataUseCase } from "./ListMessageReadDataUseCase";

const messageReadDataRepository = MessageReadDataRepository.getInstance();

const listMessageReadDataUsecase = new ListMessageReadDataUseCase(messageReadDataRepository);

const listMessageReadDataController = new ListMessageReadDataController(listMessageReadDataUsecase);

export { listMessageReadDataController };
