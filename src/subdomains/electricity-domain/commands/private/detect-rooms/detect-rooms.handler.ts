import { Observable, of } from 'rxjs';
import { Point } from '../../../base/value-objects/point.js';
import { ICommandHandler } from '../../../../base/icommand-handler.command.js';
import { Room } from '../../../base/entities/room.entity.js';
import { DetectRoomsCommand } from './detect-rooms.command.js';

export class DetectRoomsHndler implements ICommandHandler<Room[]> {
    handle(command: DetectRoomsCommand): Observable<Room[]> {
        console.log('[    Domain    ] Detect rooms');

        const noCorridor = Point.difference(command.floor.points, command.corridor.points);

        const groups = Point.groupBy(noCorridor, command.minRoomCorners);

        const rooms = groups.filter((group) => group.length >= command.minRoomCorners).map((group) => new Room(group));

        return of(rooms);
    }
}
