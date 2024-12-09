import { CalcElectricityUseCaseCommand } from '../../../../subdomains/electricity-domain/commands/public/use-cases/calc-electricity/calc-electricity.usecase.command.js';
import { CalcElectricityUseCaseHandler } from '../../../../subdomains/electricity-domain/commands/public/use-cases/calc-electricity/calc-electricity.usecase.handler.js';
import { CommandDispatcherFabric } from '../fabrics/CommandDispatcherFabric.js';

export class CalcElectricityUseCase {
    constructor(
        private commandDispatcher = new CommandDispatcherFabric().getCommandDispatcher(),
        private calcElectricityUseCase = new CalcElectricityUseCaseHandler(commandDispatcher)
    ) {
        console.log('[Infrastructure] Start');

        this.calcElectricityUseCase.handle(new CalcElectricityUseCaseCommand()).subscribe((_) => {
            console.log('[Infrastructure] End');
        });
    }
}
