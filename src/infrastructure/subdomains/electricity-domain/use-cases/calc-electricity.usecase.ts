import { SettingsRepository } from "../repositories/settings-repository.js";
import { FloorRepository } from "../repositories/floor.repository.js";
import { ElectricityResultsRepository } from "../repositories/electricityResults.repository.js";
import { NotificationRepository } from "../repositories/norification.repository.js";
import { CalcElectricityUseCaseHandler } from "../../../../subdomains/electricity-domain/use-cases/calc-electricity/calc-electricity.usecase.handler.js";
import { ProgressRepository } from "../repositories/progress.repository.js";
import { CommandDispatcherFabric } from "../fabrics/CommandDispatcherFabric.js";
import { CalcElectricityUseCaseFabric } from "../fabrics/CalcElectricityUseCaseFabric.js";
import { CalcElectricityUseCaseCommand } from "../../../../subdomains/electricity-domain/use-cases/calc-electricity/calc-electricity.usecase.command.js";

export class CalcElectricityUseCase {
  constructor(
    private calcElectricityUseCase = new CalcElectricityUseCaseFabric().create()
  ) {
    console.log("[Infrastructure] Start");

    this.calcElectricityUseCase
      .handle(new CalcElectricityUseCaseCommand())
      .subscribe((_) => {
        console.log("[Infrastructure] End");
      });
  }
}
