import { Observable, of } from 'rxjs';
import { ICommandHandler } from '../../../base/icommand-handler.command.js';
import { CalcRoomSocketsCommand } from './calc-room-sockets.command.js';

export class CalcRoomSocketsHandler implements ICommandHandler<number[]> {
    handle(command: CalcRoomSocketsCommand): Observable<number[]> {
        console.log('[    Domain    ] Calc sockets');

        return of(command.rooms.map((room) => room.points.length * 2));
    }
}
