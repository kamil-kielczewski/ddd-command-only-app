import { ICommand } from '../../../../base/icommand.js';
import { ElectricityResults } from '../../../repository/ielectricityResults.repository.js';

export class SaveElectricityCommand implements ICommand<void> {
    constructor(public resultsToSave: ElectricityResults) {}
}
