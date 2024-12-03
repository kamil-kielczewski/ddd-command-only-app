import { Observable } from "rxjs";

export interface IElectricityResultsRepository {
  save(results: ElectricityResults): Observable<void>;
}

export class ElectricityResults {
  constructor(public sockets: number[], public averageWallSize: number) {}
}
