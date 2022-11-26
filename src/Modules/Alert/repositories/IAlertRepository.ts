import { Alert } from "../models/Alert";

interface ICreateAlertDTO {
  id: string;
  idClient: string;
  city: string;
  uf: string;
  type: string;
  subtype: string;
  bedroom: string;
  suites: string;
  restroom: string;
  garage: string;
}

 
interface IAlertRepository {
  create({
   idClient, city, uf, type, subtype, bedroom, suites, restroom, garage,
  }: ICreateAlertDTO): void;
  update({
   id, idClient, city, uf, type, subtype, bedroom, suites, restroom, garage,
  }: ICreateAlertDTO): void;
  list();
  delete({id});
}

export { IAlertRepository, ICreateAlertDTO };
