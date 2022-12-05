import { Request, Response } from "express";
import { CreateContractsUseCase } from "./CreateContractsUseCase";

class CreateContractsController {
  constructor(private createContractsUseCase: CreateContractsUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id,idCompany, idClient, idNegotiations, contract,} = req.body;

    this.createContractsUseCase.execute({
      id, idCompany, idClient, idNegotiations, contract,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateContractsController };






