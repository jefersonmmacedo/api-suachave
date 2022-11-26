import { AlertRepository } from "../../repositories/implementations/AlertRepository";
import { ListAlertUserController } from "./ListAlertUserController";
import { ListAlertUserUseCase } from "./ListAlertUserUseCase";

const alertRepository = AlertRepository.getInstance();

const listAlertUserUsecase = new ListAlertUserUseCase(alertRepository);

const listAlertUserController = new ListAlertUserController(listAlertUserUsecase);

export { listAlertUserController };
