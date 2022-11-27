import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteMessagesRoomsUseCase } from "./DeleteMessagesRoomsUseCase";

class DeleteMessagesRoomsController {
  constructor(private DeleteMessagesRoomsUseCase: DeleteMessagesRoomsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.messagesRooms.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteMessagesRoomsController };
