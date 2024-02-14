class DNA {
  #sequence;

  constructor(sequence) {
    this.#sequence = sequence;
  }

  hammingDistance(testSequence) {
    return [...this.#sequence].reduce(
      (distance, base, index) =>
        (testSequence.length <= index || base === testSequence[index])
          ? distance
          : distance + 1,
      0,
    );
  }
}

module.exports = DNA;
