import { AlertRepository } from "../../repositories/implementations/AlertRepository";
import { ListAlertController } from "./ListAlertController";
import { ListAlertUseCase } from "./ListAlertUseCase";

const alertRepository = AlertRepository.getInstance();

const listAlertUsecase = new ListAlertUseCase(alertRepository);

const listAlertController = new ListAlertController(listAlertUsecase);

export { listAlertController };
