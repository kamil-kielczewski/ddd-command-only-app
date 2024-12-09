import { Observable, of } from 'rxjs';
import { ICommandHandler } from '../../../../base/icommand-handler.command.js';
import { ISettingsRepository, Settings } from '../../../repository/isettings.repository.js';
import { GetSettingsCommand } from './get-settings.command.js';

export class GetSettingsHandler implements ICommandHandler<Settings> {
    constructor(private settingsRepository: ISettingsRepository) {}

    handle(command: GetSettingsCommand): Observable<Settings> {
        console.log('[    Domain    ] Get settings');
        return this.settingsRepository.getSettings();
    }
}
