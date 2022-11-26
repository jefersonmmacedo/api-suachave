import { Request, Response } from "express";

import { CreateAlertUseCase } from "./CreateAlertUseCase";

class CreateAlertController {
  constructor(private createAlertUseCase: CreateAlertUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idClient, city, uf, type, subtype, bedroom, suites, restroom, garage, } = req.body;

    this.createAlertUseCase.execute({
      id, idClient, city, uf, type, subtype, bedroom, suites, restroom, garage,
    });


    return res.status(201).json();
  }
}

export { CreateAlertController };
