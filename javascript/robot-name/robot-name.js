(function() {

  let robotNames = [];

// create a constructor for generating the name
  function randomGenerator() {};

  randomGenerator.prototype.letters = function (num) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let firstPart="";
    for (var i = 0; i < num; i++) {
      firstPart += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return firstPart;
  };

  randomGenerator.prototype.digits = function (num) {
    let secondPart = "";
    for (var i = 0; i < num; i++) {
      secondPart += Math.floor(Math.random() * 10);
    }
    return secondPart;
  };

// now the robot constructor
// so here the generate method on robot is inhereting
// all the methods on randomGenerator by lookup delogation
  function Robot () {
    this.generate = new randomGenerator();
    this.name = this.generateName();
  }

  Robot.prototype.generateName = function () {
    let letters = this.generate.letters(2);
    let digits = this.generate.digits(3);
    let name = `${letters}${digits}`;

    for (let i = 0; i < robotNames.length; i++) {
      if (robotNames[i] === name) return this.generateName();
    }

    robotNames.push(name);
    return name;
  }

  Robot.prototype.reset = function() {
    this.name = this.generateName();
  }

  module.exports = Robot;

})();
