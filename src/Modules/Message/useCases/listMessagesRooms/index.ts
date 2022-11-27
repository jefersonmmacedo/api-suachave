import { MessagesRoomsRepository } from "../../repositories/implementations/MessagesRoomsRepository";
import { ListMessagesRoomsController } from "./ListMessagesRoomsController";
import { ListMessagesRoomsUseCase } from "./ListMessagesRoomsUseCase";

const messagesRoomsRepository = MessagesRoomsRepository.getInstance();

const listMessagesRoomsUsecase = new ListMessagesRoomsUseCase(messagesRoomsRepository);

const listMessagesRoomsController = new ListMessagesRoomsController(listMessagesRoomsUsecase);

export { listMessagesRoomsController };
