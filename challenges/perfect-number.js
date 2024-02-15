class PerfectNumber {
  static #getFactors(number) {
    let factors = [];
    for (let i = 1; i < number; i += 1) {
      if (number % i === 0) factors.push(i);
    }
    return factors;
  }
  static classify(number) {
    if (number <= 0) throw new Error("Only works for positive integers.");
    let aliquotSum = PerfectNumber.#getFactors(number).reduce((a, b) => a + b);
    if (aliquotSum === number) {
      return "perfect";
    } else if (aliquotSum < number) {
      return "deficient";
    } else {
      return "abundant";
    }
  }
}

module.exports = PerfectNumber;
