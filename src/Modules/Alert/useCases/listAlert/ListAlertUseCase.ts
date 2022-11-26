import { collections } from "../../../../../services/database.service";
import { Alert } from "../../models/Alert";
import { IAlertRepository } from "../../repositories/IAlertRepository";

class ListAlertUseCase {
  constructor(private AlertRepository: IAlertRepository) {
    " ";
  }

  async execute() {
   const Alert = await collections.alert.find({});
   const AlertAll = Alert.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(AlertAll)
        }
  }

export { ListAlertUseCase };
