export class Point {
  constructor(public readonly x: number, public readonly y: number) {}

  // Equality check for points
  equals(other: Point): boolean {
    return this.x === other.x && this.y === other.y;
  }

  //Sum of two sets A ∪ B
  static union(setA: Point[], setB: Point[]): Point[] {
    const result: Point[] = [...setA];
    setB.forEach((pointB) => {
      if (!result.some((pointA) => pointA.equals(pointB))) {
        result.push(pointB);
      }
    });
    return result;
  }

  // Difference of sets A \ B
  static difference(setA: Point[], setB: Point[]): Point[] {
    return setA.filter(
      (pointA) => !setB.some((pointB) => pointA.equals(pointB))
    );
  }

  // Method to group points by n
  static groupBy(points: Point[], n: number): Point[][] {
    if (n <= 0) {
      throw new Error("Group size must be greater than 0");
    }

    const groups: Point[][] = [];
    for (let i = 0; i < points.length; i += n) {
      groups.push(points.slice(i, i + n));
    }

    return groups;
  }
}
