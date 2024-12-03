import { Observable, of } from 'rxjs';
import { DetectCorridorCommand } from './detect-corridor.command.js';
import { Corridor } from '../../base/entities/corridor.entity.js';
import { ICommandHandler } from '../../../base/icommand-handler.command.js';

export class DetectCorridorHandler implements ICommandHandler<Corridor> {
    handle(command: DetectCorridorCommand): Observable<Corridor> {
        console.log('[    Domain    ] Detect corridor');

        return of(new Corridor(command.floor.points.slice(0, command.maxCorridorSize)));
    }
}
