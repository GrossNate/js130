// 11:54 - 12:19

class RomanNumeral {
  static #digitConversions = [
    " I II III IV V VI VII VIII IX".split(" "),
    " X XX XXX XL L LX LXX LXXX XC".split(" "),
    " C CC CCC CD D DC DCC DCCC CM".split(" "),
    " M MM MMM".split(" ")
  ];
  constructor(decimalNumber) {
    this.decimalNumber = decimalNumber;
  }
  toRoman() {
    return String(this.decimalNumber)
      .split("")
      .reverse()
      .map((digit, place) => RomanNumeral.#digitConversions[place][digit])
      .reverse()
      .join("");
  }
}

module.exports = RomanNumeral;
