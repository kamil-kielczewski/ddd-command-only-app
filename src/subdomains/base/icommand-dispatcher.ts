import { Observable } from 'rxjs';
import { ICommand } from './icommand.js';

export interface ICommandDispatcher {
    execute<T = any>(command: ICommand<T>): Observable<T>;
}
