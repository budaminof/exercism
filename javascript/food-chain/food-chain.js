class FoodChain {
  constructor() {
    this.start = `I know an old lady who swallowed a`;

    this.animals = ['fly', 'spider', 'bird', 'cat' , 'dog', 'goat', 'cow', 'horse'];

    this.swallowed = [
    `I don\'t know why she swallowed the fly. Perhaps she\'ll die.`,
    `It wriggled and jiggled and tickled inside her.`,
    `How absurd to swallow a bird!`,
    `Imagine that, to swallow a cat!`,
    `What a hog, to swallow a dog!`,
    `Just opened her throat and swallowed a goat!`,
    `I don\'t know how she swallowed a cow!`
    ];

    this.why = [
      `I don\'t know why she swallowed the fly. Perhaps she\'ll die.`,
      `She swallowed the spider to catch the fly.`,
      `She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.`,
      `She swallowed the cat to catch the bird.`,
      `She swallowed the dog to catch the cat.`,
      `She swallowed the goat to catch the dog.`,
      `She swallowed the cow to catch the goat.`
    ];

    this.lastPhrase = `I know an old lady who swallowed a horse.\nShe's dead, of course!\n`;
  }

  verse(num) {
    if ( num === 8 ) return this.lastPhrase;
    let song = `${this.start} ${this.animals[num -1]}.\n${this.swallowed[num-1]}\n`;
    if ( num === 1 ) return `${song}`;
    return this.createSong(song, num);
  }

  createSong(song, num) {
    if ( num < 1 ) return song;
    return this.createSong(`${song}${this.why[num-1]}\n`, num - 1);
  }

  verses(start, end) {
    let result = '';
    for (let i = start; i <= end; i++) {
      result += `${this.verse(i)}\n`;
    }
    return result;
  }
}

module.exports = FoodChain;
