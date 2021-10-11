const express = require('express');
const morgan = require('morgan');
require('log-timestamp')('#WHATEVER');
const app = express();
const { sincronizador } = require('../src/sincronizador');

var minutes = 1, the_interval = minutes * 60 * 1000;
setInterval(async function () {
    await sincronizador();
    console.info("Llamando datos y guardando");
}, the_interval);