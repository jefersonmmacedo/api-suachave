import { MessagesRooms } from "../models/MessagesRooms";

interface IMessagesRoomsDTO {
  id: string;
  idRomm: string;
  idCompany: string;
  IdClient: string;
  idProperty: string;
  avatar: string;
  text: string;
  link: string;
}
 


interface IMessagesRoomsRepository {
  create({idRomm, idCompany, IdClient, idProperty, avatar, text, link }: IMessagesRoomsDTO): Promise<void>;
  list();
  delete({id});
  update({id, idRomm, idCompany, IdClient, idProperty, avatar, text, link}): Promise<void>
}

export { IMessagesRoomsRepository, IMessagesRoomsDTO };
