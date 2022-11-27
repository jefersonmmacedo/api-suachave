import { collections } from "../../../../../services/database.service";
import { Rooms } from "../../models/Rooms";
import { IRoomsDTO, IRoomsRepository } from "../IRoomsRepository";
import {v4 as uuidv4} from 'uuid'

class RoomsRepository implements IRoomsRepository {
  private rooms: Rooms[];

  private static INSTANCE: RoomsRepository;

  private constructor() {
    this.rooms = [];
  }

  public static getInstance(): RoomsRepository {
    if (!RoomsRepository.INSTANCE) {
      RoomsRepository.INSTANCE = new RoomsRepository();
    }

    return RoomsRepository.INSTANCE;
  }

  async create({ Room, idCompany, IdClient, idProperty, avatarClient, imageProperty }: IRoomsDTO) {
    const room: Rooms = new Rooms();
    const _id = uuidv4()
    Object.assign(room, {
      _id, id: _id, Room, idCompany, IdClient, idProperty, avatarClient, imageProperty, created_at: new Date(),
    });

    this.rooms.push(room);
    console.log(room)

    await collections.rooms.insertOne(room).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  async delete({id}) {
    await collections.rooms.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  async update({id, Room, idCompany, IdClient, idProperty, avatarClient, imageProperty}): Promise<void> {}
}

export { RoomsRepository };
