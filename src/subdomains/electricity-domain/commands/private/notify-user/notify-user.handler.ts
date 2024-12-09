import { Observable, of } from 'rxjs';
import { ICommandHandler } from '../../../../base/icommand-handler.command.js';
import { ISettingsRepository, Settings } from '../../../repository/isettings.repository.js';
import { NotifyUserCommand } from './notify-user.command.js';
import { INotificationRepository } from '../../../repository/inorification.repository.js';

export class NotifyUserHandler implements ICommandHandler<void> {
    constructor(private iNotificationRepository: INotificationRepository) {}

    handle(command: NotifyUserCommand): Observable<void> {
        console.log('[    Domain    ] Get settings');
        return this.iNotificationRepository.send(command.messaeKey);
    }
}
