import { ICommand } from '../../../../base/icommand.js';
import { Floor } from '../../../base/entities/floor.entity.js';

export class GetFloorCommand implements ICommand<Floor> {
    constructor() {}
}
