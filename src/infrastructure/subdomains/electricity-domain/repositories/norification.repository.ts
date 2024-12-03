import { Observable, of } from "rxjs";
import { INotificationRepository } from "../../../../subdomains/electricity-domain/repository/inorification.repository.js";

export class NotificationRepository implements INotificationRepository {
  send(messageKey: string): Observable<void> {
    const keyToMessageMap = {
      Electricity_calculation_completed: "Calculation finished!",
    } as any;

    console.log(
      "[Infrastructure] Notification sent: " + keyToMessageMap[messageKey]
    );

    return of(void 0);
  }
}
