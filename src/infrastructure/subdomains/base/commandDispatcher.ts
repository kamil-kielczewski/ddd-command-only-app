import { Observable, throwError } from "rxjs";
import { ICommand } from "../../../subdomains/base/icommand.js";
import { ICommandHandler } from "../../../subdomains/base/icommand-handler.command.js";
import { ICommandDispatcher } from "../../../subdomains/base/icommand-dispatcher.js";

export class CommandDispatcher implements ICommandDispatcher {
  private readonly handlers = new Map<string, ICommandHandler<any>>();

  // Rejestracja handlera dla danej komendy
  register(commandType: string, handler: ICommandHandler<any>): void {
    this.handlers.set(commandType, handler);
  }

  // Wywołanie handlera dla komendy
  execute(command: ICommand<any>): Observable<any> {
    const handler = this.handlers.get(command.constructor.name);

    if (!handler) {
      return throwError(
        () =>
          new Error(`No handler found for command ${command.constructor.name}`)
      );
    }

    return handler.handle(command);
  }
}
