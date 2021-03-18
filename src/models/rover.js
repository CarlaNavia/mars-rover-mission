export default class Rover {
  constructor() {
    this.direction = "N";
    this.x = 0;
    this.y = 0;
    this.travelLog = [{ x: this.x, y: this.y }];
    this.gridX = 200;
    this.gridY = 200;
    this.obstacles = [
      { x: 1, y: 1 },
      { x: 5, y: 4 },
      { x: 6, y: 1 },
      { x: 7, y: 7 },
      { x: 10, y: 3 },
    ];
    this.obstacleCoords = null;
  }

  execute(actions) {
    const coordinates = actions.toLowerCase().split("");
    try {
      if (
        coordinates.some(
          (action) => action !== "f" && action !== "r" && action !== "l"
        )
      ) {
        throw new Error(
          "Please, remember that the available characters are f, r and l"
        );
      }

      for (let i = 0; i < coordinates.length; i++) {
        switch (coordinates[i]) {
          case "f":
            this.moveForward();
            break;
          case "r":
            this.turnRight();
            break;
          case "l":
            this.turnLeft();
            break;
          default:
            break;
        }
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  turnLeft() {
    switch (this.direction) {
      case "N":
        this.direction = `W`;
        break;
      case "S":
        this.direction = `E`;
        break;
      case "E":
        this.direction = `N`;
        break;
      case "W":
        this.direction = `S`;
        break;
      default:
        break;
    }
  }

  turnRight() {
    switch (this.direction) {
      case "N":
        this.direction = `E`;
        break;
      case "S":
        this.direction = `W`;
        break;
      case "E":
        this.direction = `S`;
        break;
      case "W":
        this.direction = `N`;
        break;
      default:
        break;
    }
  }

  moveForward() {
    const coords = { x: this.x, y: this.y };

    switch (this.direction) {
      case "W":
        coords.x -= 1;
        break;
      case "N":
        coords.y += 1;
        break;
      case "S":
        coords.y -= 1;
        break;
      case "E":
        coords.x += 1;
        break;
      default:
        break;
    }

    if (
      coords.x > this.gridX ||
      coords.y > this.gridY ||
      coords.x < 0 ||
      coords.y < 0
    ) {
      throw new Error(
        `Cannot move in that direction. It is a weird planet that measures ${this.gridX} x ${this.gridY}.`
      );
    }
    if (
      this.obstacles.some(
        (obstacle) => obstacle.x === coords.x && obstacle.y === coords.y
      )
    ) {
      this.obstacleCoords = coords;
    }
    this.x = coords.x;
    this.y = coords.y;
    this.travelLog.push({ x: this.x, y: this.y });
  }
}
