function Isogram(word) {

  this.isIsogram = function() {
    let obj = {};
    let splitWord = word.toLowerCase().replace(/-| /g, '').split('');

    for (var i = 0; i < splitWord.length; i++) {
      if (!obj[splitWord[i]]) obj[splitWord[i]] = 1;
      else return false
    }
    return true;
  }
}

module.exports = Isogram;
