import { Evaluation } from "../models/Evaluation";

interface IEvaluationDTO {
  id: string;
  idCompany: string;
  type: string;
  subType: string;
  status: string;
  description: string;
  road: string;
  district: string;
  city: string;
  uf: string;
  bedroom: string;
  garage: string;
  suite: string;
  restroom: string;
  characteristcs: object;
  images: object;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
}


interface IEvaluationRepository {
  create({
    idCompany, type, subType, status, description, road, district, city, uf, bedroom, garage, suite, restroom,
characteristcs, images, name, email, phone, whatsapp, 
  }: IEvaluationDTO): Promise<void>;
  list();
  delete({id});
}

export { IEvaluationRepository, IEvaluationDTO };
