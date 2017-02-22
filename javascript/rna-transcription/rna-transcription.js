function DnaTranscriber() {
  let obj = {
    'G' : 'C',
    'C' : 'G',
    'T' : 'A',
    'A' : 'U'
  };

  this.toRna = function(a) {
    let result = '';
    for (var i = 0; i < a.length; i++) {
      if (obj[a[i]]) result += obj[a[i]];
      else {
        throw {
         name: "Error",
         message: 'Invalid input'
       }
      }
    }
    return result;
  }
}

module.exports = DnaTranscriber;
