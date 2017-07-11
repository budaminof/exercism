var Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  let year = this.year;
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  else return false;
};

module.exports = Year;