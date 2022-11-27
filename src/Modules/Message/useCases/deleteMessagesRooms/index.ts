import { MessagesRoomsRepository } from "../../repositories/implementations/MessagesRoomsRepository";
import { DeleteMessagesRoomsController } from "./DeleteMessagesRoomsController";
import { DeleteMessagesRoomsUseCase } from "./DeleteMessagesRoomsUseCase";

const messagesRoomsRepository = MessagesRoomsRepository.getInstance();
const deleteMessagesRoomsUseCase = new DeleteMessagesRoomsUseCase(messagesRoomsRepository);
const deleteMessagesRoomsController = new DeleteMessagesRoomsController(deleteMessagesRoomsUseCase);

export { deleteMessagesRoomsController };
