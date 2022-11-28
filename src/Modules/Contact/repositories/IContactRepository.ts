import { Contact } from "../models/Contact";

interface ICreateContactDTO {
  id: string;
  idProperty: string;
  idCompany: string;
  idClient: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  type: string;
}

 
interface IContactRepository {
  create({
   idProperty, idCompany, idClient, name, email, phone, whatsapp, type,
  }: ICreateContactDTO): void;
  list();
  delete({id});
}

export { IContactRepository, ICreateContactDTO };
