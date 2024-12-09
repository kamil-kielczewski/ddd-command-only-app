import { ICommand } from '../../../../base/icommand.js';

export class UpdateProgressCommand implements ICommand<void> {
    constructor(public currentProgressPercent: number) {}
}
