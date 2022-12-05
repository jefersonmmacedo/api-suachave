import { Contracts } from "../../models/Contracts";
import { IContractsRepository, IContractsDTO } from "../IContractsRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class ContractsRepository implements IContractsRepository {
  private contracts: Contracts[];

  private static INSTANCE: ContractsRepository;

  private constructor() {
    this.contracts = [];
  }

  public static getInstance(): ContractsRepository {
    if (!ContractsRepository.INSTANCE) {
      ContractsRepository.INSTANCE = new ContractsRepository();
    }

    return ContractsRepository.INSTANCE;
  }


  async create({idCompany, idClient, idNegotiations, contract,}: IContractsDTO) {
    const contracts: Contracts = new Contracts();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(contracts, {
        id, _id: id, idCompany, idClient, idNegotiations, contract,created_at: new Date(),
      });
      this.contracts.push(contracts);
      
      await collections.contracts.insertOne(contracts).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }


  list(){ }

  update({id, idCompany, idClient, idNegotiations, contract,}):void {}

  async delete({id}) {
    await collections.contracts.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { ContractsRepository };




