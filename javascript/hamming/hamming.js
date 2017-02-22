function Hamming() {
  this.compute = function(a, b) {
    let distance = 0;
    if (a.length !== b.length) {
      throw {
         name: "Error",
         message: 'DNA strands must be of equal length.'
      }
    } else {
      for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) distance++;
      }
      return distance;
    }
  }

}

module.exports = Hamming;
