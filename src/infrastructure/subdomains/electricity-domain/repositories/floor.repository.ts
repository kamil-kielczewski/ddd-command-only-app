import { Observable, of } from "rxjs";
import { IFloorRepository } from "../../../../subdomains/electricity-domain/repository/ifloor.repository.js";
import { Floor } from "../../../../subdomains/electricity-domain/base/entities/floor.entity.js";
import { Point } from "../../../../subdomains/electricity-domain/base/value-objects/point.js";

export class FloorRepository implements IFloorRepository {
  loadFloor(): Observable<Floor> {
    // definition of 14 points2d
    const points = [
      new Point(0, 0),
      new Point(1, 1),
      new Point(0, 1),
      new Point(0, 2),
      new Point(0, 3),
      new Point(2, 2),
      new Point(1, 0),
      new Point(2, 3),
      new Point(1, 2),
      new Point(1, 3),
      new Point(3, 2),
      new Point(2, 0),
      new Point(2, 1),
      new Point(3, 0),
    ];

    console.log("[Infrastructure] Floor loaded!");

    return of(new Floor(points));
  }
}
