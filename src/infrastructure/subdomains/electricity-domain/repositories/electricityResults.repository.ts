import { Observable, of } from "rxjs";
import {
  ElectricityResults,
  IElectricityResultsRepository,
} from "../../../../subdomains/electricity-domain/repository/ielectricityResults.repository.js";

export class ElectricityResultsRepository
  implements IElectricityResultsRepository
{
  save(results: ElectricityResults): Observable<void> {
    console.log("[Infrastructure] Results saved: " + JSON.stringify(results));
    return of(void 0);
  }
}
