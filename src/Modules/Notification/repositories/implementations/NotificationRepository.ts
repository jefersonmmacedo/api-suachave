import { Notification } from "../../models/Notification";
import { INotificationRepository, INotificationDTO } from "../INotificationRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from "uuid";

class NotificationRepository implements INotificationRepository {
  private notification: Notification[];

  private static INSTANCE: NotificationRepository;

  private constructor() {
    this.notification = [];
  }

  public static getInstance(): NotificationRepository {
    if (!NotificationRepository.INSTANCE) {
      NotificationRepository.INSTANCE = new NotificationRepository();
    }

    return NotificationRepository.INSTANCE;
  }

    async create({ idAccount, text, type, link, view,  }: INotificationDTO) {
      const notification: Notification = new Notification();
      const _id = uuidv4()
      
        Object.assign(notification, {
          _id, id: _id, idAccount, text, type, link, view, created_at: new Date(),
        });
        this.notification.push(notification);
        
        await collections.notification.insertOne(notification).then((result) => {
          console.log(result) 
        }).catch(error => {
          console.log(error)
        })
          }
    
  list(): Notification[] {
    return this.notification;
  }


  async delete({id}) {
    await collections.notification.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

}

export { NotificationRepository };

