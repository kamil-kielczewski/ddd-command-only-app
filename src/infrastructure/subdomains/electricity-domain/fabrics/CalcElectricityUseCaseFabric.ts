import { CalcElectricityUseCaseHandler } from "../../../../subdomains/electricity-domain/use-cases/calc-electricity/calc-electricity.usecase.handler.js";
import { ElectricityResultsRepository } from "../repositories/electricityResults.repository.js";
import { FloorRepository } from "../repositories/floor.repository.js";
import { NotificationRepository } from "../repositories/norification.repository.js";
import { ProgressRepository } from "../repositories/progress.repository.js";
import { SettingsRepository } from "../repositories/settings-repository.js";
import { CommandDispatcherFabric } from "./CommandDispatcherFabric.js";

export class CalcElectricityUseCaseFabric {
  constructor(
    private commandDispatcher = new CommandDispatcherFabric().getCommandDispatcher(),
    private settingsRepository = new SettingsRepository(),
    private floorRepository = new FloorRepository(),
    private electricityResultsRepository = new ElectricityResultsRepository(),
    private notificationRepository = new NotificationRepository(),
    private progressRepository = new ProgressRepository(),
    private calcElectricityUseCase = new CalcElectricityUseCaseHandler(
      settingsRepository,
      floorRepository,
      commandDispatcher,
      electricityResultsRepository,
      notificationRepository,
      progressRepository
    )
  ) {}

  create(): CalcElectricityUseCaseHandler {
    return this.calcElectricityUseCase;
  }
}
