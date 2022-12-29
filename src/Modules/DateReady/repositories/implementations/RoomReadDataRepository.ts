import { RoomReadData } from "../../models/RoomReadData";
import { ICreateRoomReadDataDTO, IRoomReadDataRepository } from "../IRoomReadDataRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class RoomReadDataRepository implements IRoomReadDataRepository {
  private roomReadData: RoomReadData[];

  private static INSTANCE: RoomReadDataRepository;

  private constructor() {
    this.roomReadData = [];
  }

  public static getInstance(): RoomReadDataRepository {
    if (!RoomReadDataRepository.INSTANCE) {
      RoomReadDataRepository.INSTANCE = new RoomReadDataRepository();
    }

    return RoomReadDataRepository.INSTANCE;
  }

 async create({
  idRoom, dateReady
  }: ICreateRoomReadDataDTO) {
    const roomReadData: RoomReadData = new RoomReadData();
    const _id = uuidv4()
    Object.assign(roomReadData, {
      _id, id: _id,
      idRoom, dateReady,
      created_at: new Date()
    });

    this.roomReadData.push(roomReadData);
    console.log(roomReadData)
    await collections.roomReadData.insertOne(roomReadData).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.roomReadData.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { RoomReadDataRepository };
