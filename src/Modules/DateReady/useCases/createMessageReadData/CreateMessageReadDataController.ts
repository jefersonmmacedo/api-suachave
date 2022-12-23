import { Request, Response } from "express";

import { CreateMessageReadDataUseCase } from "./CreateMessageReadDataUseCase";

class CreateMessageReadDataController {
  constructor(private createMessageReadDataUseCase: CreateMessageReadDataUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idRoom, dateReady } = req.body;

    this.createMessageReadDataUseCase.execute({
      id, idRoom, dateReady
    });


    return res.status(201).json();
  }
}

export { CreateMessageReadDataController };
