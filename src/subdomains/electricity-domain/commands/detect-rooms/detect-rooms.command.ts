import { Floor } from "../../base/entities/floor.entity.js";
import { ICommand } from "../../../base/icommand.js";
import { Room } from "../../base/entities/room.entity.js";
import { Corridor } from "../../base/entities/corridor.entity.js";

export class DetectRoomsCommand implements ICommand<Room[]> {
  constructor(
    public readonly floor: Floor,
    public readonly corridor: Corridor,
    public readonly minRoomCorners: number
  ) {}
}
