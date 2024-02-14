class Triangle {
  constructor(...sides) {
    if (sides.length !== 3) throw new Error("a triangle must have 3 sides");
    if (sides.includes(0)) {
      throw new Error("a triangle cannot have a 0-length side");
    }
    if (sides.some((sideLength) => sideLength <= 0)) {
      throw new Error(
        "a triangle cannot have a side with a length less than 0",
      );
    }
    if (
      (sides[0] + sides[1] <= sides[2]) || (sides[0] + sides[2] <= sides[1]) ||
      (sides[1] + sides[2] <= sides[0])
    ) {
      throw new Error(
        "the sum of the lengths of any two sides of a triangle must be greater than the third",
      );
    }
    this.sides = sides;
  }
  kind() {
    if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) {
      return "equilateral";
    }
    if (
      this.sides[0] === this.sides[1] || this.sides[0] === this.sides[2] ||
      this.sides[1] === this.sides[2]
    ) return "isosceles";
    return "scalene";
  }
}

module.exports = Triangle;
