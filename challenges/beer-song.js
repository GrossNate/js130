// 10:52 am - 11:16 am
class BeerSong {
  static verse(verseNumber) {
    if (verseNumber === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
        "Take it down and pass it around, no more bottles of beer on the wall.\n";
    } else if (verseNumber === 0) {
      return "No more bottles of beer on the wall, no more bottles of beer.\n" +
        "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
    }
    return `${verseNumber} bottle${
      verseNumber > 1 ? "s" : ""
    } of beer on the wall, ${verseNumber} bottle${
      verseNumber > 1 ? "s" : ""
    } of beer.\n` +
      `Take one down and pass it around, ${verseNumber - 1} bottle${
        verseNumber - 1 > 1 ? "s" : ""
      } of beer on the wall.\n`;
  }
  static verses(startVerse, endVerse = 0) {
    return Array(startVerse - endVerse + 1)
      .fill(null)
      .map((_, i) => BeerSong.verse(startVerse - i))
      .join("\n");
  }
  static lyrics() {
    return BeerSong.verses(99);
  }
}

module.exports = BeerSong;

