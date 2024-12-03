import { Observable } from "rxjs";

export interface ISettingsRepository {
  getSettings(): Observable<Settings>;
}

export interface Settings {
  maxCorridorSize: number;
  minRoomCorners: number;
}
