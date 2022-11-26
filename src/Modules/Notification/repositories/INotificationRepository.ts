import { Notification } from "../models/Notification";

interface INotificationDTO {
  id: string;
  idAccount: string;
  text: string;
  type: string;
  link: string;
  view: string;
}

  
interface INotificationRepository {
  create({ idAccount, text, type, link, view, }: INotificationDTO): Promise<void>;
  list();
  delete({id});
}

export { INotificationRepository, INotificationDTO };

