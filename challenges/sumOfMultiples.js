class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = (multiples.length === 0) ? [3, 5] : multiples;
  }
  static to(number) {
    return new SumOfMultiples().to(number);
  }
  to(number) {
    // let sumOfMultiples = 0;
    // let factors = [];
    // for (let i = 1; i < number; i += 1) {
    //   if (this.multiples.some((potentialFactor) => i % potentialFactor === 0)) {
    //     sumOfMultiples += i;
    //     factors.push(i);
    //   }
    // }
    // return sumOfMultiples;
    return Array(number)
      .fill(null, 1)
      .reduce(
        (sum, _, i) =>
          sum + (this.multiples.some((factor) => i % factor === 0) ? i : 0),
        0,
      );
  }
}

module.exports = SumOfMultiples;
