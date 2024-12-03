import { Observable } from "rxjs";

export interface IProgressRepository {
  update(percent: number): Observable<void>;
}
