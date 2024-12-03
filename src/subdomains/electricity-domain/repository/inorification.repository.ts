import { Observable } from "rxjs";

export interface INotificationRepository {
  send(messageKey: string): Observable<void>;
}
