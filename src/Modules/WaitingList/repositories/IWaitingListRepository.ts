import { WaitingList } from "../models/WaitingList";

interface ICreateWaitingListDTO {
  id: string;
  type: string;
  nameFamtasy: string;
  whatsapp: string;
  email: string;
  cep: string;
  city: string;
  uf: string;
}

 
interface IWaitingListRepository {
  create({
   type, nameFamtasy, whatsapp, email, cep, city, uf,
  }: ICreateWaitingListDTO): void;
  update({
   id, type, nameFamtasy, whatsapp, email, cep, city, uf,
  }: ICreateWaitingListDTO): void;
  list();
  delete({id});
}

export { IWaitingListRepository, ICreateWaitingListDTO };
