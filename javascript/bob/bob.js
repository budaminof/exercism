function Bob() {
  var obj = {
    question: 'Sure.',
    yell: 'Whoa, chill out!',
    addresing: 'Fine. Be that way!',
    everythingElse: 'Whatever.'
  }

  this.hey = function (term) {
    var style = this.styleOfSpeaking(term);
    return obj[style];
  }

  this.styleOfSpeaking = function(term) {
    if (this.silence(term)) return 'addresing';
    if (this.isNumber(term)) return 'everythingElse';
    if (this.isNumberQuestion(term)) return 'question';
    if (this.isQuestion(term) && this.yelling(term)) return 'yell';
    if (this.isQuestion(term)) return 'question';
    if (this.yelling(term)) return 'yell';
    return 'everythingElse';
  }

  this.isQuestion = function(term) {
    return term.substring(term.length - 1) === '?' ? true
    : false
  }

  this.yelling = function(term) {
    for (var i = 0; i < term.length; i++) {
      if(term[i].match(/[a-z]/) || term[i].match(/\xfc/)) {
        if (term[i] === term[i].toLowerCase()) return false;
      }
    }
    return true;
  }

  this.isNumber = function(term) {
    var test = term.split(', ').join('');
    return isNaN(test) ? false : true;
  }

  this.isNumberQuestion = function(term) {
    var test = term.split('').pop();
    if (test === '?') test = term.split('').splice(0, term.length-1);
    return isNaN(test) ? false : true;
  }

  this.silence = function(term) {
    return term.match(/^$/) || term.match(/^\s+$/) ? true : false;
  }

}

module.exports = Bob;
