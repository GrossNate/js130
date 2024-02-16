// 11:24 am - 11:38

class Series {
  constructor(numberString) {
    this.numberString = numberString;
  }

  slices(charCount) {
    if (charCount > this.numberString.length) {
      throw new Error(
        "Slice length can't be greater than number string length.",
      );
    }
    // let slicesArr = [];
    // for (let i = 0; i < this.numberString.length - charCount + 1; i += 1) {
    //   slicesArr.push(
    //     this.numberString.slice(i, i + charCount).split("").map((char) =>
    //       Number(char)
    //     ),
    //   );
    // }
    // return slicesArr;

    return this.numberString
      .split("")
      .map((char) => Number(char))
      .reduce(
        (slices, _, i, digitsArr) =>
          (i + charCount <= digitsArr.length)
            ? slices.concat([digitsArr.slice(i, i + charCount)])
            : slices,
        [],
      );
  }
}

module.exports = Series;

// console.log(new Series('98273463').slices(2));
