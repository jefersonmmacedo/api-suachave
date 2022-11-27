import { MessagesRoomsRepository } from "../../repositories/implementations/MessagesRoomsRepository";
import { CreateMessagesRoomsController } from "./CreateMessagesRoomsController";
import { CreateMessagesRoomsUseCase } from "./CreateMessagesRoomsUseCase";

const messagesRoomsRepository = MessagesRoomsRepository.getInstance();
const createMessagesRoomsUseCase = new CreateMessagesRoomsUseCase(messagesRoomsRepository);
const createMessagesRoomsController = new CreateMessagesRoomsController(createMessagesRoomsUseCase);

export { createMessagesRoomsController };
