import { map, Observable, switchMap } from "rxjs";
import { ICommand } from "../../../../subdomains/base/icommand.js";
import { ICommandHandler } from "../../../../subdomains/base/icommand-handler.command.js";
import { CommandDispatcher } from "../../base/commandDispatcher.js";
import { CalcAverageAreaSidesLength } from "../../../../subdomains/statistics-domain/commands/calc-average-room-wall-length/calc-average-area-sides-length.command.js";
import { CalcAverageAreaSidesLengthHandler } from "../../../../subdomains/statistics-domain/commands/calc-average-room-wall-length/calc-average-area-sides-length.handler.js";
import { CalcAverageRoomWallLength } from "../../../../subdomains/electricity-domain/commands/calc-average-room-wall-length/calc-average-room-wall-length.command.js";
import { Point } from "../../../../subdomains/statistics-domain/base/value-objects/point.js";
import { Statistics } from "../../../../subdomains/statistics-domain/base/entities/statistics.js";
import { Room } from "../../../../subdomains/electricity-domain/base/entities/room.entity.js";

export class CalcAverageRoomWallLengthHandlerAdapter
  implements ICommandHandler<number>
{
  constructor(private commandDispatcher = new CommandDispatcher()) {
    this.commandDispatcher.register(
      CalcAverageAreaSidesLength.name,
      new CalcAverageAreaSidesLengthHandler()
    );
  }

  handle(
    electrictDomainCommand: CalcAverageRoomWallLength
  ): Observable<number> {
    const area = electrictDomainCommand.rooms.map((room: Room) =>
      room.points.map((point) => new Point(point.x, point.y, 0))
    );
    const statisticsDomainCommand = new CalcAverageAreaSidesLength(area);
    return this.commandDispatcher
      .execute(statisticsDomainCommand)
      .pipe(map((statistics: Statistics) => statistics.avgAreaSidesLength));
  }
}
