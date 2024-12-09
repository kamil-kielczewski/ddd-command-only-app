import { Observable } from 'rxjs';
import { ICommandHandler } from '../../../../base/icommand-handler.command.js';
import { SaveElectricityCommand } from './save-electricity.command.js';
import { IElectricityResultsRepository } from '../../../repository/ielectricityResults.repository.js';

export class SaveElectricityHandler implements ICommandHandler<void> {
    constructor(private iElectricityResultsRepository: IElectricityResultsRepository) {}

    handle(command: SaveElectricityCommand): Observable<void> {
        console.log('[    Domain    ] Save electricity results');
        return this.iElectricityResultsRepository.save(command.resultsToSave);
    }
}
