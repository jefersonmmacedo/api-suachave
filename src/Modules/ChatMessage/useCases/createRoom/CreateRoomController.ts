import { Request, Response } from "express";

import { CreateRoomUseCase } from "./CreateRoomUseCase";

class CreateRoomController {
  constructor(private createRoomUseCase: CreateRoomUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, room, idCompany, idClient, idProperty } = req.body;

    this.createRoomUseCase.execute({
      id, room, idCompany, idClient, idProperty
    });


    return res.status(201).json();
  }
}

export { CreateRoomController };
