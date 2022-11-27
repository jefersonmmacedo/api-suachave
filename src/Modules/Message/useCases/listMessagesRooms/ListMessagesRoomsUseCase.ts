import { collections } from "../../../../../services/database.service";
import { MessagesRooms } from "../../models/MessagesRooms";
import { IMessagesRoomsRepository } from "../../repositories/IMessagesRoomsRepository";

class ListMessagesRoomsUseCase {
  constructor(private MessagesRoomsRepository: IMessagesRoomsRepository) {
    " ";
  }

  async execute() {
    
   const MessagesRooms = await collections.messagesRooms.find({});
   const MessagesRoomsAll = MessagesRooms.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(MessagesRoomsAll)
        }
  }

export { ListMessagesRoomsUseCase };
