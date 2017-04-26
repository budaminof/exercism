function PhoneNumber(num) {
  let result = num.replace(/\D+/g,'');

  this.number = () => {
    if (result.length >= 11) {
      if (result[0] == 1) return result.slice(1);
      else return '0000000000'
    }
    if (result.length <= 9) return '0000000000';
    return result;
  }

  this.areaCode = () => {
    let areaCode = result.slice(0, 3);
    return areaCode;
  }

  this.toString = () => {
    return `(${result.slice(0, 3)}) ${result.slice(3, 6)}-${result.slice(6)}`;
  }
}


module.exports = PhoneNumber;
