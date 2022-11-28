import { Request, Response } from "express";

import { CreateContactUseCase } from "./CreateContactUseCase";

class CreateContactController {
  constructor(private createContactUseCase: CreateContactUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idProperty, idCompany, idClient, name, email, phone, whatsapp, type, } = req.body;

    this.createContactUseCase.execute({
      id, idProperty, idCompany, idClient, name, email, phone, whatsapp, type,
    });


    return res.status(201).json();
  }
}

export { CreateContactController };
