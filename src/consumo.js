const axios = require('axios')
var results = [];

async function consumoJson() {
  try {
    let res = await axios.get('https://www.datos.gov.co/resource/gt2j-8ykr.json');
    let datos = res.data;
    var keys = Object.keys(datos);
    for (var i = 0, length = keys.length; i < length; i++) {
      rangoID = 0;
      generoLabel = datos[keys[i]].sexo.toString();
      if (datos[keys[i]].edad < 21) {
        rangoID = 1;
        rangoDESC = '0 - 20 Años';
      } else if (datos[keys[i]].edad < 41) {
        rangoID = 2;
        rangoDESC = '21 - 40 Años';
      } else {
        rangoID = 3;
        rangoDESC = '+ 41 Años';
      }
      const resultgenero = results.find(elemento => elemento.genero == generoLabel && elemento.rango == rangoDESC);
      if (resultgenero == undefined) {
        results.push({ genero: generoLabel, rango: rangoDESC, cantidad: 1 });
      } else {
        resultgenero.cantidad++;
      }
    }
    return results;
  } catch (error) {

  }
}

async function soloJson() {
  try {
    let res = await axios.get('https://www.datos.gov.co/resource/gt2j-8ykr.json');
    return res.data;
  } catch (error) {

  }
}

module.exports = { consumoJson, soloJson };


