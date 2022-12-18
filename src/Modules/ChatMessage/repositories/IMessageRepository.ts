import { Message } from "../models/Message";

interface ICreateMessageDTO {
  id: string;
  idRoom: string;
  idAccount: string;
  name: string;
  avatar: string;
  text: string;
  link: string;
  type: string;
}
 
interface IMessageRepository {
  create({
   idRoom, idAccount, name, avatar, text, link, type,
  }: ICreateMessageDTO): void;
  update({
   id, idRoom, idAccount, name, avatar, text, link, type,
  }: ICreateMessageDTO): void;
  list();
  delete({id});
}

export { IMessageRepository, ICreateMessageDTO };
