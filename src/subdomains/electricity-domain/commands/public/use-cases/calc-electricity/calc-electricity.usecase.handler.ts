import { ICommandDispatcher } from '../../../../../base/icommand-dispatcher.js';
import { DetectCorridorCommand } from '../../../../commands/private/detect-corridor/detect-corridor.command.js';
import { DetectRoomsCommand } from '../../../../commands/private/detect-rooms/detect-rooms.command.js';
import { Corridor } from '../../../../base/entities/corridor.entity.js';
import { Room } from '../../../../base/entities/room.entity.js';
import { CalcAverageRoomWallLength } from '../../../../commands/private/calc-average-room-wall-length/calc-average-room-wall-length.command.js';
import { ElectricityResults } from '../../../../repository/ielectricityResults.repository.js';
import { CalcRoomSocketsCommand } from '../../../../commands/private/calc-room-sockets/calc-room-sockets.command.js';
import { ICommandHandler } from '../../../../../base/icommand-handler.command.js';
import { CalcElectricityUseCaseCommand } from './calc-electricity.usecase.command.js';
import { GetSettingsCommand } from '../../../../commands/private/get-settings/get-settings.command.js';
import { from } from 'rxjs';
import { GetFloorCommand } from '../../../private/get-floor/get-floor.command.js';
import { UpdateProgressCommand } from '../../../private/update-progress/update-progress.command.js';
import { SaveElectricityCommand } from '../../../private/save-electricity/save-electricity.command.js';
import { NotifyUserCommand } from '../../../private/notify-user/notify-user.command.js';

export class CalcElectricityUseCaseHandler implements ICommandHandler<void> {
    constructor(private commandDispatcher: ICommandDispatcher) {}

    handle(command: CalcElectricityUseCaseCommand) {
        return from(this.run());
    }

    async run() {
        console.log('[    Domain    ] Use case: start ');

        this.commandDispatcher.execute(new UpdateProgressCommand(0)).toPromise();

        const settings = await this.commandDispatcher.execute(new GetSettingsCommand()).toPromise();

        const floor = await this.commandDispatcher.execute(new GetFloorCommand()).toPromise();

        this.commandDispatcher.execute(new UpdateProgressCommand(10)).toPromise();

        const corridor = await this.commandDispatcher
            .execute<Corridor>(new DetectCorridorCommand(floor!, settings!.maxCorridorSize))
            .toPromise();

        this.commandDispatcher.execute(new UpdateProgressCommand(30)).toPromise();

        const rooms = await this.commandDispatcher
            .execute<Room[]>(new DetectRoomsCommand(floor!, corridor!, settings!.minRoomCorners))
            .toPromise();

        this.commandDispatcher.execute(new UpdateProgressCommand(50)).toPromise();

        const sockets = await this.commandDispatcher.execute(new CalcRoomSocketsCommand(rooms!)).toPromise();

        this.commandDispatcher.execute(new UpdateProgressCommand(75)).toPromise();

        const statistics = await this.commandDispatcher.execute(new CalcAverageRoomWallLength(rooms!)).toPromise();

        this.commandDispatcher.execute(new UpdateProgressCommand(90)).toPromise();

        await this.commandDispatcher.execute(new SaveElectricityCommand(new ElectricityResults(sockets!, statistics!))).toPromise();

        this.commandDispatcher.execute(new UpdateProgressCommand(100)).toPromise();

        this.commandDispatcher.execute(new NotifyUserCommand('Electricity_calculation_completed')).toPromise();

        console.log('[    Domain    ] Use case: finish ');
    }
}
