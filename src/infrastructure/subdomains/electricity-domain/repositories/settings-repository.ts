import { Observable, of } from "rxjs";
import {
  ISettingsRepository,
  Settings,
} from "../../../../subdomains/electricity-domain/repository/isettings.repository.js";

export class SettingsRepository implements ISettingsRepository {
  getSettings(): Observable<Settings> {
    console.log("[Infrastructure] Settings loaded!");

    return of({
      maxCorridorSize: 10,
      minRoomCorners: 4,
    });
  }
}
