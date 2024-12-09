import { ICommand } from '../../../../base/icommand.js';
import { Settings } from '../../../repository/isettings.repository.js';

export class NotifyUserCommand implements ICommand<Settings> {
    constructor(public messaeKey: string) {}
}
