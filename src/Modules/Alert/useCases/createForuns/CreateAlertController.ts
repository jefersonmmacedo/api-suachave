import { Request, Response } from "express";

import { CreateAlertUseCase } from "./CreateAlertUseCase";

class CreateAlertController {
  constructor(private createAlertUseCase: CreateAlertUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idProperty, type } = req.body;

    this.createAlertUseCase.execute({
      id, idProperty, type
    });


    return res.status(201).json();
  }
}

export { CreateAlertController };
