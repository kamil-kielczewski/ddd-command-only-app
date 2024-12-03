import { Observable } from "rxjs";
import { Floor } from "../base/entities/floor.entity.js";

export interface IFloorRepository {
  loadFloor(): Observable<Floor>;
}
