import { CalcAverageRoomWallLength } from "../../../../subdomains/electricity-domain/commands/calc-average-room-wall-length/calc-average-room-wall-length.command.js";
import { CalcRoomSocketsCommand } from "../../../../subdomains/electricity-domain/commands/calc-room-sockets/calc-room-sockets.command.js";
import { CalcRoomSocketsHandler } from "../../../../subdomains/electricity-domain/commands/calc-room-sockets/calc-room-sockets.handler.js";
import { DetectCorridorCommand } from "../../../../subdomains/electricity-domain/commands/detect-corridor/detect-corridor.command.js";
import { DetectCorridorHandler } from "../../../../subdomains/electricity-domain/commands/detect-corridor/detect-corridor.handler.js";
import { DetectRoomsCommand } from "../../../../subdomains/electricity-domain/commands/detect-rooms/detect-rooms.command.js";
import { DetectRoomsHndler } from "../../../../subdomains/electricity-domain/commands/detect-rooms/detect-rooms.handler.js";
import { CommandDispatcher } from "../../base/commandDispatcher.js";
import { CalcAverageRoomWallLengthHandlerAdapter } from "../adapters/calc-average-room-wall-length.handler.adapter.js";

export class CommandDispatcherFabric {
  constructor(private commandDispatcher = new CommandDispatcher()) {
    this.registerCommands();
  }

  getCommandDispatcher() {
    return this.commandDispatcher;
  }

  registerCommands() {
    // Statistics domain
    this.commandDispatcher.register(
      CalcAverageRoomWallLength.name,
      new CalcAverageRoomWallLengthHandlerAdapter()
    );

    // Electric domain
    this.commandDispatcher.register(
      CalcRoomSocketsCommand.name,
      new CalcRoomSocketsHandler()
    );

    this.commandDispatcher.register(
      DetectCorridorCommand.name,
      new DetectCorridorHandler()
    );

    this.commandDispatcher.register(
      DetectRoomsCommand.name,
      new DetectRoomsHndler()
    );
  }
}
