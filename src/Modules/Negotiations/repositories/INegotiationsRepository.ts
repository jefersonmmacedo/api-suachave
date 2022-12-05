import { Negotiations } from "../models/Negotiations";

interface INegotiationsDTO {
  id: string;
  idCompany: string;
  idClient: string;
  idProperty: string;
  typeNegotiation: string;
  status: string;
  deadline: string;
  parcel: string;
  valueProperty: string;
  amountofCharges: string;
  valueTotal: string;
}

 
 

interface INegotiationsRepository {
  create({ idCompany, idClient, idProperty, typeNegotiation, status, deadline, parcel, valueProperty, amountofCharges, valueTotal,}: INegotiationsDTO): Promise<void>;
  list();
  update({id, idCompany, idClient, idProperty, typeNegotiation, status, deadline, parcel, valueProperty, amountofCharges, valueTotal,}: INegotiationsDTO): void;
  delete({id});
}

export { INegotiationsRepository, INegotiationsDTO };
