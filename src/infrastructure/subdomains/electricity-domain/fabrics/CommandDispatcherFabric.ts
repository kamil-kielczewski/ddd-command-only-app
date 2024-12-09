import { CalcAverageRoomWallLength } from '../../../../subdomains/electricity-domain/commands/private/calc-average-room-wall-length/calc-average-room-wall-length.command.js';
import { CalcRoomSocketsCommand } from '../../../../subdomains/electricity-domain/commands/private/calc-room-sockets/calc-room-sockets.command.js';
import { CalcRoomSocketsHandler } from '../../../../subdomains/electricity-domain/commands/private/calc-room-sockets/calc-room-sockets.handler.js';
import { DetectCorridorCommand } from '../../../../subdomains/electricity-domain/commands/private/detect-corridor/detect-corridor.command.js';
import { DetectCorridorHandler } from '../../../../subdomains/electricity-domain/commands/private/detect-corridor/detect-corridor.handler.js';
import { DetectRoomsCommand } from '../../../../subdomains/electricity-domain/commands/private/detect-rooms/detect-rooms.command.js';
import { DetectRoomsHndler } from '../../../../subdomains/electricity-domain/commands/private/detect-rooms/detect-rooms.handler.js';
import { GetFloorCommand } from '../../../../subdomains/electricity-domain/commands/private/get-floor/get-floor.command.js';
import { GetFloorHandler } from '../../../../subdomains/electricity-domain/commands/private/get-floor/get-floor.handler.js';
import { GetSettingsCommand } from '../../../../subdomains/electricity-domain/commands/private/get-settings/get-settings.command.js';
import { GetSettingsHandler } from '../../../../subdomains/electricity-domain/commands/private/get-settings/get-settings.handler.js';
import { NotifyUserCommand } from '../../../../subdomains/electricity-domain/commands/private/notify-user/notify-user.command.js';
import { NotifyUserHandler } from '../../../../subdomains/electricity-domain/commands/private/notify-user/notify-user.handler.js';
import { SaveElectricityCommand } from '../../../../subdomains/electricity-domain/commands/private/save-electricity/save-electricity.command.js';
import { SaveElectricityHandler } from '../../../../subdomains/electricity-domain/commands/private/save-electricity/save-electricity.handler.js';
import { UpdateProgressCommand } from '../../../../subdomains/electricity-domain/commands/private/update-progress/update-progress.command.js';
import { UpdateProgressHandler } from '../../../../subdomains/electricity-domain/commands/private/update-progress/update-progress.handler.js';
import { CommandDispatcher } from '../../base/commandDispatcher.js';
import { CalcAverageRoomWallLengthHandlerAdapter } from '../adapters/calc-average-room-wall-length.handler.adapter.js';
import { ElectricityResultsRepository } from '../repositories/electricityResults.repository.js';
import { FloorRepository } from '../repositories/floor.repository.js';
import { NotificationRepository } from '../repositories/norification.repository.js';
import { ProgressRepository } from '../repositories/progress.repository.js';
import { SettingsRepository } from '../repositories/settings-repository.js';

export class CommandDispatcherFabric {
    constructor(private commandDispatcher = new CommandDispatcher()) {
        this.registerCommands();
    }

    getCommandDispatcher() {
        return this.commandDispatcher;
    }

    registerCommands() {
        // Statistics domain
        this.commandDispatcher.register(CalcAverageRoomWallLength.name, new CalcAverageRoomWallLengthHandlerAdapter());

        // Electric domain
        this.commandDispatcher.register(CalcRoomSocketsCommand.name, new CalcRoomSocketsHandler());
        this.commandDispatcher.register(DetectCorridorCommand.name, new DetectCorridorHandler());
        this.commandDispatcher.register(DetectRoomsCommand.name, new DetectRoomsHndler());
        this.commandDispatcher.register(GetSettingsCommand.name, new GetSettingsHandler(new SettingsRepository()));
        this.commandDispatcher.register(GetFloorCommand.name, new GetFloorHandler(new FloorRepository()));
        this.commandDispatcher.register(UpdateProgressCommand.name, new UpdateProgressHandler(new ProgressRepository()));
        this.commandDispatcher.register(SaveElectricityCommand.name, new SaveElectricityHandler(new ElectricityResultsRepository()));
        this.commandDispatcher.register(NotifyUserCommand.name, new NotifyUserHandler(new NotificationRepository()));
    }
}
