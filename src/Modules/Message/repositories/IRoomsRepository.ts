import { Rooms } from "../models/Rooms";

interface IRoomsDTO {
  id: string;
  Room: string;
  idCompany: string;
  IdClient:string;
  idProperty:string;
  avatarClient: string;
  imageProperty: string;
}


interface IRoomsRepository {
  create({Room, idCompany, IdClient, idProperty, avatarClient, imageProperty }: IRoomsDTO): Promise<void>;
  list();
  delete({id});
  update({id, Room, idCompany, IdClient, idProperty, avatarClient, imageProperty}): Promise<void>
}

export { IRoomsRepository, IRoomsDTO };
