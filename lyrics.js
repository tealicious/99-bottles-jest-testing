class Lyrics {
  verse(num) {
    return `${num} bottles of beer on the wall, ${num} bottles of beer.
Take one down and pass it around, ${num - 1} bottles of beer on the wall.`;
  }
}
module.exports = Lyrics;
