import { Request, Response } from "express";

import { CreateRoomsUseCase } from "./CreateRoomsUseCase";

class CreateRoomsController {
  constructor(private createRoomsUseCase: CreateRoomsUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      id, Room, idCompany, IdClient, idProperty, avatarClient, imageProperty
     } =
      req.body;
    this.createRoomsUseCase.execute({
      id, Room, idCompany, IdClient, idProperty, avatarClient, imageProperty
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateRoomsController };
