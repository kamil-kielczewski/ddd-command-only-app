import { firstValueFrom, from, of } from "rxjs";
import { IFloorRepository } from "../../repository/ifloor.repository.js";
import { ICommandDispatcher } from "../../../base/icommand-dispatcher.js";
import { DetectCorridorCommand } from "../../commands/detect-corridor/detect-corridor.command.js";
import { DetectRoomsCommand } from "../../commands/detect-rooms/detect-rooms.command.js";
import { ISettingsRepository } from "../../repository/isettings.repository.js";
import { Corridor } from "../../base/entities/corridor.entity.js";
import { Room } from "../../base/entities/room.entity.js";
import { CalcAverageRoomWallLength } from "../../commands/calc-average-room-wall-length/calc-average-room-wall-length.command.js";
import {
  ElectricityResults,
  IElectricityResultsRepository,
} from "../../repository/ielectricityResults.repository.js";
import { INotificationRepository } from "../../repository/inorification.repository.js";
import { CalcRoomSocketsCommand } from "../../commands/calc-room-sockets/calc-room-sockets.command.js";
import { IProgressRepository } from "../../repository/iprogress.repository.js";
import { ICommandHandler } from "../../../base/icommand-handler.command.js";
import { CalcElectricityUseCaseCommand } from "./calc-electricity.usecase.command.js";

export class CalcElectricityUseCaseHandler implements ICommandHandler<void> {
  constructor(
    private settingsRepository: ISettingsRepository,
    private floorRepository: IFloorRepository,
    private iCommandDispatcher: ICommandDispatcher,
    private iElectricityResultsRepository: IElectricityResultsRepository,
    private iNotificationRepository: INotificationRepository,
    private iProgressRepository: IProgressRepository
  ) {}

  handle(command: CalcElectricityUseCaseCommand) {
    return from(this.run());
  }

  async run() {
    console.log("[    Domain    ] Use case: start ");
    this.iProgressRepository.update(0);

    const settings = await firstValueFrom(
      this.settingsRepository.getSettings()
    );
    const floor = await firstValueFrom(this.floorRepository.loadFloor());

    this.iProgressRepository.update(10);

    const corridor = await firstValueFrom(
      this.iCommandDispatcher.execute<Corridor>(
        new DetectCorridorCommand(floor, settings.maxCorridorSize)
      )
    );
    this.iProgressRepository.update(30);

    const rooms = await firstValueFrom(
      this.iCommandDispatcher.execute<Room[]>(
        new DetectRoomsCommand(floor, corridor, settings.minRoomCorners)
      )
    );

    this.iProgressRepository.update(50);

    const sockets = await firstValueFrom(
      this.iCommandDispatcher.execute<number[]>(
        new CalcRoomSocketsCommand(rooms)
      )
    );

    this.iProgressRepository.update(75);

    const statistics = await firstValueFrom(
      this.iCommandDispatcher.execute<number>(
        new CalcAverageRoomWallLength(rooms)
      )
    );

    this.iProgressRepository.update(90);

    await this.iElectricityResultsRepository.save(
      new ElectricityResults(sockets, statistics)
    );

    this.iProgressRepository.update(100);

    this.iNotificationRepository.send("Electricity_calculation_completed");
    console.log("[    Domain    ] Use case: finish ");
  }
}
