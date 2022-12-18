import { Room } from "../models/Room";

interface ICreateRoomDTO {
  id: string;
  room: string;
  idCompany: string;
  idClient: string;
  idProperty: string;
}



interface IRoomRepository {
  create({
   room, idCompany, idClient, idProperty, 
  }: ICreateRoomDTO): void;
  update({
   id, room, idCompany, idClient, idProperty, 
  }: ICreateRoomDTO): void;
  list();
  delete({id});
}

export { IRoomRepository, ICreateRoomDTO };
