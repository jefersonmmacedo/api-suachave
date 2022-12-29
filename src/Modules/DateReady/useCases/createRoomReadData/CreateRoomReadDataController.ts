import { Request, Response } from "express";

import { CreateRoomReadDataUseCase } from "./CreateRoomReadDataUseCase";

class CreateRoomReadDataController {
  constructor(private createRoomReadDataUseCase: CreateRoomReadDataUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idRoom, dateReady } = req.body;

    this.createRoomReadDataUseCase.execute({
      id, idRoom, dateReady
    });


    return res.status(201).json();
  }
}

export { CreateRoomReadDataController };
