import { ViewProperty } from "../models/ViewProperty";

interface ICreateViewPropertyDTO {
  id: string;
  idProperty: string;
  idCompany: string;
  idClient: string;
}

interface IViewPropertyRepository {
  create({
   idProperty, idClient, idCompany
  }: ICreateViewPropertyDTO): void;
  update({
   id, idProperty, idClient, idCompany
  }: ICreateViewPropertyDTO): void;
  list();
  delete({id});
}

export { IViewPropertyRepository, ICreateViewPropertyDTO };
