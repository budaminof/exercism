function Bob() {

  var answers = {
    question: 'Sure.',
    yell: 'Whoa, chill out!',
    addresing: 'Fine. Be that way!',
    everythingElse: 'Whatever.'
  }

  this.hey = function (term) {
    if (this.silence(term)) return answers.addresing;
    if (this.yelling(term)) return answers.yell;
    if (this.isQuestion(term)) return answers.question;
    return answers.everythingElse;
  }

  this.silence = function(term) {
    return term.match(/^$/) || term.match(/^\s+$/) ? true : false;
  }

  this.yelling = function(term) {
    return (term === term.toUpperCase() && (/[a-zA-Z]/g).test(term) === true) ? true : false;
  }

  this.isQuestion = function(term) {
    return term[term.length-1] === "?" ? true : false;
  }

}

module.exports = Bob;
