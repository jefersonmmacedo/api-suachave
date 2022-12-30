import { hash } from "bcrypt";
import { IPropertyRepository } from "../../repositories/IPropertyRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  avatarCompany: string;
  fantasyName: string;
  title: string;
  road: string;
  district: string;
  city: string;
  uf: string;
  description: string;
  type: string;
  subType: string;
  status: string;
  availability: string;
  bedroom: string;
  garage: string;
  suite: string;
  restroom: string;
  furnished: string;
  pets: string;
  priceSale: string;
  priceRent: string;
  textRent: string;
  condominium: string;
  iptu: string;
  otherPrices: string;
  yearOfConstruction: string;
  buildingArea: string;
  siglaBuildingArea: string;
  totalArea: string;
  siglaTotalArea: string;
  images: object;
  featuredImage: string;
  platformVideo: string;
  video: string;
  slider: string;
  financing: string;
  characteristcs: object;
}

class UpdatePropertyUseCase {
  constructor(private PropertyRepository: IPropertyRepository) {
    " ";
  }
  
  async execute({
    id, idCompany, avatarCompany, fantasyName, title, road, district, city, uf, description, type, subType, status,
    availability, bedroom, garage, suite, restroom, furnished, pets, priceSale, priceRent, textRent, condominium,
    iptu, otherPrices, buildingArea, siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction,
    images, featuredImage, platformVideo, video, slider, financing, characteristcs
   }: IRequest): Promise<void> {

      await this.PropertyRepository.update({
        id, idCompany, avatarCompany, fantasyName, title, road, district, city, uf, description, type, subType, status,
        availability, bedroom, garage, suite, restroom, furnished, pets, priceSale, priceRent, textRent, condominium,
        iptu, otherPrices, buildingArea, siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction,
        images, featuredImage, platformVideo, video, slider, financing, characteristcs
      });

  }
}

export { UpdatePropertyUseCase };

