import { Observable, of } from "rxjs";
import { ICommand } from "../../../base/icommand.js";
import { CalcAverageAreaSidesLength } from "./calc-average-area-sides-length.command.js";
import { Statistics } from "../../base/entities/statistics.js";
import { Point } from "../../base/value-objects/point.js";

export class CalcAverageAreaSidesLengthHandler implements ICommand<Statistics> {
  handle(command: CalcAverageAreaSidesLength): Observable<Statistics> {
    console.log("[    Domain    ] Statistics");
    const avgEdegeLendth =
      command.area
        .map((polygon) => this.statAveragePolyLength(polygon))
        .reduce((acc, length) => acc + length, 0) / command.area.length;

    const totalEdges = command.area
      .map((polygon) => polygon.length)
      .reduce((acc, length) => acc + length, 0);

    return of(new Statistics(avgEdegeLendth, totalEdges));
  }

  private statAveragePolyLength(poly: Point[]): number {
    return (
      poly.reduce((acc, point, index) => {
        const nextPoint = poly[(index + 1) % poly.length];
        return (
          acc +
          Math.sqrt(
            Math.pow(nextPoint.x - point.x, 2) +
              Math.pow(nextPoint.y - point.y, 2) +
              +Math.pow(nextPoint.z - point.z, 2)
          )
        );
      }, 0) / poly.length
    );
  }
}
