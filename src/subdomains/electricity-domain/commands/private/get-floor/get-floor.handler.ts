import { Observable } from 'rxjs';
import { ICommandHandler } from '../../../../base/icommand-handler.command.js';
import { Floor } from '../../../base/entities/floor.entity.js';
import { GetFloorCommand } from './get-floor.command.js';
import { IFloorRepository } from '../../../repository/ifloor.repository.js';

export class GetFloorHandler implements ICommandHandler<Floor> {
    constructor(private floorsRepository: IFloorRepository) {}

    handle(command: GetFloorCommand): Observable<Floor> {
        console.log('[    Domain    ] Get settings');
        return this.floorsRepository.loadFloor();
    }
}
