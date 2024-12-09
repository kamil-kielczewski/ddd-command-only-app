import { Room } from '../../../base/entities/room.entity.js';
import { ICommand } from '../../../../base/icommand.js';

export class CalcAverageRoomWallLength implements ICommand<number> {
    constructor(public readonly rooms: Room[]) {}
}
