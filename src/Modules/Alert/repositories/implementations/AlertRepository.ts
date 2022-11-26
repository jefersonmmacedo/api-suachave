import { Alert } from "../../models/Alert";
import { ICreateAlertDTO, IAlertRepository } from "../IAlertRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class AlertRepository implements IAlertRepository {
  private alert: Alert[];

  private static INSTANCE: AlertRepository;

  private constructor() {
    this.alert = [];
  }

  public static getInstance(): AlertRepository {
    if (!AlertRepository.INSTANCE) {
      AlertRepository.INSTANCE = new AlertRepository();
    }

    return AlertRepository.INSTANCE;
  }

  async create({
    idClient, city, uf, type, subtype, bedroom, suites, restroom, garage,
  }: ICreateAlertDTO) {
    const alert: Alert = new Alert();
    const _id = uuidv4()
    Object.assign(alert, {
      _id, id: _id,
      idClient, city, uf, type, subtype, bedroom, suites, restroom, garage,
      created_at: new Date()
    });

    this.alert.push(alert);
    console.log(Alert)
    await collections.alert.insertOne(alert).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ id, idClient, city, uf, type, subtype, bedroom, suites, restroom, garage,}){}

  async delete({id}) {
    await collections.alert.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { AlertRepository };
