import { MessageReadData } from "../models/MessageReadData";

interface ICreateMessageReadDataDTO {
  id: string;
  idUser: string;
  dateReady: string;
}

interface IMessageReadDataRepository {
  create({
    idUser, dateReady,
  }: ICreateMessageReadDataDTO): void;
  update({
   id, idUser, dateReady,
  }: ICreateMessageReadDataDTO): void;
  list();
  delete({id});
}

export { IMessageReadDataRepository, ICreateMessageReadDataDTO };
