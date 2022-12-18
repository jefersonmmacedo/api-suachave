import { Room } from "../../models/Room";
import { ICreateRoomDTO, IRoomRepository } from "../IRoomRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class RoomRepository implements IRoomRepository {
  private room: Room[];

  private static INSTANCE: RoomRepository;

  private constructor() {
    this.room = [];
  }

  public static getInstance(): RoomRepository {
    if (!RoomRepository.INSTANCE) {
      RoomRepository.INSTANCE = new RoomRepository();
    }

    return RoomRepository.INSTANCE;
  }

 async create({
  idCompany, idClient, idProperty, 
  }: ICreateRoomDTO) {
    const room: Room = new Room();
    const _id = uuidv4()
    Object.assign(room, {
      _id, id: _id, room: _id,
      idCompany, idClient, idProperty,
      created_at: new Date()
    });

    this.room.push(room);
    console.log(Room)
    await collections.rooms.insertOne(room).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.rooms.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { RoomRepository };
