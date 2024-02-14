class Diamond {
  static makeDiamond(letter) {
    return Array((letter.charCodeAt() - 64) * 2 - 1)
      .fill(null)
      .map((_, i) =>
        (i < (((letter.charCodeAt() - 64) * 2 - 1) / 2))
          ? String.fromCharCode(i + 65)
          : String.fromCharCode((((letter.charCodeAt() - 64) * 2 - 1) - i) + 64)
      )
      .reduce(
        (diamondStr, char, rowIdx) =>
          diamondStr +
          Array((letter.charCodeAt() - 64) * 2 - 1)
            .fill(null)
            .map((_, colIdx) =>
              (
                  (colIdx === (letter.charCodeAt() - 65) + rowIdx) ||
                  (colIdx === (letter.charCodeAt() - 65) - rowIdx) ||
                  (
                    (rowIdx > (letter.charCodeAt() - 65)) &&
                    (
                      (rowIdx === (letter.charCodeAt() - 65) + colIdx) ||
                      (rowIdx === (letter.charCodeAt() - 65) * 3 - colIdx)
                    )
                  )
                )
                ? char
                : " "
            )
            .join("") +
          "\n",
        "",
      );
  }
}

module.exports = Diamond;

