import { Observable } from "rxjs";
import { ICommand } from "./icommand.js";

export interface ICommandHandler<T> {
  handle(command: ICommand<T>): Observable<T>;
}
