import { MessageReadData } from "../models/MessageReadData";

interface ICreateMessageReadDataDTO {
  id: string;
  idRoom: string;
  dateReady: string;
}



interface IMessageReadDataRepository {
  create({
    idRoom, dateReady,
  }: ICreateMessageReadDataDTO): void;
  update({
   id, idRoom, dateReady,
  }: ICreateMessageReadDataDTO): void;
  list();
  delete({id});
}

export { IMessageReadDataRepository, ICreateMessageReadDataDTO };
