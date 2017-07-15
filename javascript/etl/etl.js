class ETL {

  transform (obj) {
    let result = {};

    for (let key in obj) {
      for (let i = 0; i < obj[key].length; i++) {
        result[obj[key][i].toLowerCase()] = Number(key);
      }
    }
    return result;
  }

}

module.exports = ETL;
