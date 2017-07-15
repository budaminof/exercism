class SpaceAge {
  constructor(sec) {
    this.seconds = sec;
  }

  planetTime(planetYear) {
    let earthYearInSec = 31557600;
    return Number((this.seconds / (earthYearInSec * planetYear)).toFixed(2));
  }

  onEarth() {
    return this.planetTime(1.0);
  }

  onMercury() {
    return this.planetTime(0.2408467);
  }

  onVenus() {
    return this.planetTime(0.61519726);
  }

  onMars() {
    return this.planetTime(1.8808158);
  }

  onJupiter() {
    return this.planetTime(11.862615);
  }

  onSaturn() {
    return this.planetTime(29.447498);
  }

  onUranus() {
    return this.planetTime(84.016846);
  }

  onNeptune() {
    return this.planetTime(164.79132);
  }


}

module.exports = SpaceAge;
