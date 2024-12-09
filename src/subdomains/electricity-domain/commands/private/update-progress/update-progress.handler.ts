import { Observable } from 'rxjs';
import { ICommandHandler } from '../../../../base/icommand-handler.command.js';
import { UpdateProgressCommand } from './update-progress.command.js';
import { IProgressRepository } from '../../../repository/iprogress.repository.js';

export class UpdateProgressHandler implements ICommandHandler<void> {
    constructor(private progressRepository: IProgressRepository) {}

    handle(command: UpdateProgressCommand): Observable<void> {
        console.log('[    Domain    ] Update progress');
        return this.progressRepository.update(command.currentProgressPercent);
    }
}
