import { RoomReadData } from "../models/RoomReadData";

interface ICreateRoomReadDataDTO {
  id: string;
  idRoom: string;
  dateReady: string;
}

interface IRoomReadDataRepository {
  create({
    idRoom, dateReady,
  }: ICreateRoomReadDataDTO): void;
  update({
   id, idRoom, dateReady,
  }: ICreateRoomReadDataDTO): void;
  list();
  delete({id});
}

export { IRoomReadDataRepository, ICreateRoomReadDataDTO };
