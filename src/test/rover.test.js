const Rover = require("../models/rover");

test("rotate to left", () => {
  var rover = new Rover();
  rover.execute("l");
  expect(rover.direction).toBe("W");
  expect(rover.x).toBe(0);
  expect(rover.y).toBe(0);
});

test("rotate to right", () => {
  var rover = new Rover();
  rover.execute("r");
  expect(rover.direction).toBe("E");
  expect(rover.x).toBe(0);
  expect(rover.y).toBe(0);
});

test("move forward", () => {
  var rover = new Rover();
  rover.execute("f");
  expect(rover.direction).toBe("N");
  expect(rover.x).toBe(0);
  expect(rover.y).toBe(1);
});

test("rover turns left three times with capital letters", () => {
  var rover = new Rover();
  rover.execute("LLL");
  expect(rover.direction).toBe("E");
  expect(rover.x).toBe(0);
  expect(rover.y).toBe(0);
});

test("passing a sequence of movements", () => {
  var rover = new Rover();
  rover.execute("ffrlf");
  expect(rover.x).toBe(0);
  expect(rover.y).toBe(3);
});

test("passing another character", () => {
  const anotherCharacter = () => {
    var rover = new Rover();
    rover.execute("p");
  };
  expect(anotherCharacter).toThrow(
    "Please, remember that the available characters are f, r and l"
  );
});

test("found an obstacle", () => {
  var rover = new Rover();
  rover.execute("FRF");
  expect(rover.obstacleCoords).toStrictEqual({ x: 1, y: 1 });
});

test("wrong actions", () => {
  const wrongActions = () => {
    var rover = new Rover();
    rover.execute("flf");
  };
  expect(wrongActions).toThrow(
    "Cannot move in that direction. It is a weird planet that measures 200 x 200."
  );
});
