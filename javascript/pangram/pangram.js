function Pangram(term) {
  this.isPangram = function() {
    var regex = /([a-z])(?!.*\1)/g;
    return (term.toLowerCase().match(regex) || []).length === 26;
  }

}

module.exports = Pangram;
