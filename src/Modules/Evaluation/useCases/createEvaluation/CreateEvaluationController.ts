import { Request, Response } from "express";
import { CreateEvaluationUseCase } from "./CreateEvaluationUseCase";

class CreateEvaluationController {
  constructor(private createEvaluationUseCase: CreateEvaluationUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { 
      id, idCompany, type, subType, status, description, road, district, city, uf, bedroom, garage, suite, restroom,
      characteristcs, images, name, email, phone, whatsapp, 
     } = req.body;

    this.createEvaluationUseCase.execute({
      id, idCompany, type, subType, status, description, road, district, city, uf, bedroom, garage, suite, restroom,
      characteristcs, images, name, email, phone, whatsapp, 
    }).then((result) => {
      console.log(result);
      return res.status(201).json({result: result}).send(result);
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateEvaluationController };






