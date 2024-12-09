import { ICommand } from '../../../../base/icommand.js';
import { Room } from '../../../base/entities/room.entity.js';
import { Floor } from '../../../base/entities/floor.entity.js';
import { Corridor } from '../../../base/entities/corridor.entity.js';
import { Observable } from 'rxjs';

export class CalcRoomSocketsCommand implements ICommand<number[]> {
    constructor(public readonly rooms: Room[]) {}
}
