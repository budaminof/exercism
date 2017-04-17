function Gigasecond (day) {
	this.day = day;

  this.date = () => {
    const gigasecond = Math.pow(10, 12);
    return new Date(this.day.getTime() + gigasecond);
  };
};


module.exports = Gigasecond;
