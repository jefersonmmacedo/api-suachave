import { collections } from "../../../../../services/database.service";
import { MessagesRooms } from "../../models/MessagesRooms";
import { IMessagesRoomsDTO, IMessagesRoomsRepository } from "../IMessagesRoomsRepository";
import {v4 as uuidv4} from 'uuid'

class MessagesRoomsRepository implements IMessagesRoomsRepository {
  private messagesRooms: MessagesRooms[];

  private static INSTANCE: MessagesRoomsRepository;

  private constructor() {
    this.messagesRooms = [];
  }

  public static getInstance(): MessagesRoomsRepository {
    if (!MessagesRoomsRepository.INSTANCE) {
      MessagesRoomsRepository.INSTANCE = new MessagesRoomsRepository();
    }

    return MessagesRoomsRepository.INSTANCE;
  }

  async create({ idRomm, idCompany, IdClient, idProperty, avatar, text, link }: IMessagesRoomsDTO) {
    const message: MessagesRooms = new MessagesRooms();
    const _id = uuidv4()
    Object.assign(message, {
      _id, id: _id, idRomm, idCompany, IdClient, idProperty, avatar, text, link, created_at: new Date(),
    });

    this.messagesRooms.push(message);
    console.log(message)

    await collections.messagesRooms.insertOne(message).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  async delete({id}) {
    await collections.messagesRooms.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  async update({idRomm, idCompany, IdClient, idProperty, avatar, text, link}): Promise<void> {}
}

export { MessagesRoomsRepository };
