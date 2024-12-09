import { ICommand } from '../../../../base/icommand.js';
import { Settings } from '../../../repository/isettings.repository.js';

export class GetSettingsCommand implements ICommand<Settings> {
    constructor() {}
}
