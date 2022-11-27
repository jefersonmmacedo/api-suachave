import { collections } from "../../../../../services/database.service";
import { Rooms } from "../../models/Rooms";
import { IRoomsRepository } from "../../repositories/IRoomsRepository";

class ListRoomsUseCase {
  constructor(private RoomssRepository: IRoomsRepository) {
    " ";
  }

  async execute() {
    
   const Rooms = await collections.rooms.find({});
   const RoomsAll = Rooms.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(RoomsAll)
        }
  }

export { ListRoomsUseCase };
