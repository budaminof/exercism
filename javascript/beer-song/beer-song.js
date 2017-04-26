function BeerSong() {

  this.verse = num => {
    let firstPhrase = `${this.countString(num)} of beer on the wall, ${this.countString(num)} of beer.\n`;
    firstPhrase = firstPhrase.slice(0,1).toUpperCase() + firstPhrase.slice(1);

    let secondPhrase = `${this.secondPhrase(num)}`;

    return `${firstPhrase}${secondPhrase}`;
  }

  this.countString = num => {
    if (num === 0) return 'no more bottles';
    if (num === 1) return '1 bottle';
    return `${num.toString()} bottles`;
  }

  this.pronounString = num => {
    return num === 1 ? 'it' : 'one';
  }

  this.secondPhrase = num => {
    if (num === 0) return `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
    return `Take ${this.pronounString(num)} down and pass it around, ${this.countString(num - 1)} of beer on the wall.\n`;
  }

  this.sing = (begin, end = 0) => {
    let result = '';

    for (let i = end; begin >= end; begin--) {
      result += this.verse(begin) + (begin === end ? '' : '\n');
    }
    return result;
  }

}

module.exports = BeerSong;
