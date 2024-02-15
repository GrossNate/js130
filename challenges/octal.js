class Octal {
  constructor(octalString) {
    if (
      (!(typeof octalString === "string")) ||
      (octalString.match(/[^0-7]/) !== null)
    ) {
      this.octalString = "0";
    } else {
      this.octalString = octalString;
    }
  }

  toDecimal() {
    return this.octalString
      .split("")
      .toReversed()
      .reduce(
        (decimal, octalDigit, power) => decimal + (octalDigit * (8 ** power)),
        0,
      );
  }
}
module.exports = Octal;
