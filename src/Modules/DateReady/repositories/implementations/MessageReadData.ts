import { MessageReadData } from "../../models/MessageReadData";
import { ICreateMessageReadDataDTO, IMessageReadDataRepository } from "../IMessageReadDataRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class MessageReadDataRepository implements IMessageReadDataRepository {
  private messageReadData: MessageReadData[];

  private static INSTANCE: MessageReadDataRepository;

  private constructor() {
    this.messageReadData = [];
  }

  public static getInstance(): MessageReadDataRepository {
    if (!MessageReadDataRepository.INSTANCE) {
      MessageReadDataRepository.INSTANCE = new MessageReadDataRepository();
    }

    return MessageReadDataRepository.INSTANCE;
  }

 async create({
  idRoom, dateReady
  }: ICreateMessageReadDataDTO) {
    const messageReadData: MessageReadData = new MessageReadData();
    const _id = uuidv4()
    Object.assign(MessageReadData, {
      _id, id: _id,
      idRoom, dateReady,
      created_at: new Date()
    });

    this.messageReadData.push(messageReadData);
    console.log(messageReadData)
    await collections.messageReadData.insertOne(messageReadData).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.messageReadData.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { MessageReadDataRepository };
