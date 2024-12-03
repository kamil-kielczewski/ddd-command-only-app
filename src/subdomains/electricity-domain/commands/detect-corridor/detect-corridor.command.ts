import { Floor } from "../../base/entities/floor.entity.js";
import { ICommand } from "../../../base/icommand.js";
import { Corridor } from "../../base/entities/corridor.entity.js";

export class DetectCorridorCommand implements ICommand<Corridor> {
  constructor(public readonly floor: Floor, public maxCorridorSize: number) {}
}
