import { Contracts } from "../models/Contracts";

interface IContractsDTO {
  id: string;
  idCompany: string;
  idClient: string;
  idNegotiations: string;
  contract: string;
}

 
interface IContractsRepository {
  create({ idCompany, idClient, idNegotiations, contract, }: IContractsDTO): Promise<void>;
  list();
  update({id, idCompany, idClient, idNegotiations, contract, }: IContractsDTO): void;
  delete({id});
}

export { IContractsRepository, IContractsDTO };
