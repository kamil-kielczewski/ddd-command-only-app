import { ICommand } from "../../../base/icommand.js";
import { Statistics } from "../../base/entities/statistics.js";
import { Point } from "../../base/value-objects/point.js";

export class CalcAverageAreaSidesLength implements ICommand<Statistics> {
  constructor(public readonly area: Point[][]) {}
}
