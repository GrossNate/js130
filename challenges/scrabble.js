class Scrabble {
  constructor(word) {
    this.word = word;
  }
  static score(word) {
    return new Scrabble(word).score();
  }
  /** @param {string} letter */
  static #getPointValue(letter) {
    const LETTER_POINTS = {
      A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R:1, S: 1, T: 1,
      D: 2, G: 2,
      B: 3, C: 3, M: 3, P: 3,
      F: 4, H: 4, V: 4, W: 4, Y: 4,
      K: 5,
      J: 8, X: 8,
      Q: 10, Z: 10,
    };
    letter = letter.toUpperCase();
    if (letter.match(/[A-Z]/) === null) return 0;
    return LETTER_POINTS[letter];
  }
  score() {
    if (!(typeof this.word === 'string')) return 0;
    return this.word.split("").reduce((points, letter) => Scrabble.#getPointValue(letter) + points, 0);
  }
}

module.exports = Scrabble;
