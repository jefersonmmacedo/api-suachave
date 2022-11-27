import { Request, Response } from "express";

import { CreateMessagesRoomsUseCase } from "./CreateMessagesRoomsUseCase";

class CreateMessagesRoomsController {
  constructor(private createMessagesRoomsUseCase: CreateMessagesRoomsUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      id, idRomm, idCompany, IdClient, idProperty, avatar, text, link
     } =
      req.body;
    this.createMessagesRoomsUseCase.execute({
      id, idRomm, idCompany, IdClient, idProperty, avatar, text, link
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateMessagesRoomsController };
