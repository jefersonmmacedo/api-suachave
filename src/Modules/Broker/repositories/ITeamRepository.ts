import { Team } from "../models/Team";

interface ITeamDTO {
  id: string;
  idCompany: string;
  avatar: string;
  profession: string;
  name: string;
  schooling: string;
  rg: string;
  cpf: string;
  birthday: Date;
  register: string;
  email: string;
  phone: string;
  whatsapp: string;
  road: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  bank: string;
  agency: string;
  typeAccount: string;
  account: string;
  typeKeyPix: string;
  keypix: string;
}




interface ITeamRepository {
  create({ idCompany, avatar, profession, name, schooling, rg, cpf, birthday, register,
    email, phone, whatsapp, road, number, district, city, uf,
    instagram, facebook, linkedin, twitter,
    bank, agency, typeAccount, account, typeKeyPix, keypix,  }: ITeamDTO): Promise<void>;
  findByEmail(email: string): Promise<void>;
  findByCpf(cpf: string): Promise<void>;
  list();
  update({id, idCompany, avatar, profession, name, schooling, rg, cpf, birthday, register,
    email, phone, whatsapp, road, number, district, city, uf,
    instagram, facebook, linkedin, twitter,
    bank, agency, typeAccount, account, typeKeyPix, keypix,  }: ITeamDTO): void;
  delete({id});
}

export { ITeamRepository, ITeamDTO };
