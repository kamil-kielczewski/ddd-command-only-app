import { Observable, of } from "rxjs";
import { IProgressRepository } from "../../../../subdomains/electricity-domain/repository/iprogress.repository.js";

export class ProgressRepository implements IProgressRepository {
  update(percent: number): Observable<void> {
    console.log("[Infrastructure] " + percent + "%");
    return of(void 0);
  }
}
