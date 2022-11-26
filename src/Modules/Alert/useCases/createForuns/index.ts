import { AlertRepository } from "../../repositories/implementations/AlertRepository";
import { CreateAlertController } from "./CreateAlertController";
import { CreateAlertUseCase } from "./CreateAlertUseCase";

const alertRepository = AlertRepository.getInstance();

const createAlertUseCase = new CreateAlertUseCase(alertRepository);

const createAlertController = new CreateAlertController(createAlertUseCase);

export { createAlertController };
