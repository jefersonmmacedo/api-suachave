import { Request, Response } from "express";
import { CreateNegotiationsUseCase } from "./CreateNegotiationsUseCase";

class CreateNegotiationsController {
  constructor(private createNegotiationsUseCase: CreateNegotiationsUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id,idCompany, idClient, idProperty, typeNegotiation, status, deadline, parcel, valueProperty, amountofCharges, valueTotal} = req.body;

    this.createNegotiationsUseCase.execute({
      id, idCompany, idClient, idProperty, typeNegotiation, status, deadline, parcel, valueProperty, amountofCharges, valueTotal
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateNegotiationsController };






