const express = require('express');
const routes = express.Router();
const { consumoJson } = require('../consumo');
const { Datos } = require('../databases');
const { Sequelize } = require('../databases');


routes.get('/', (req, res) => {
    res.send("TEK");
});

routes.get('/consumo', async (req, res) => {
    res.send(await consumoJson());
});

routes.get('/lista', async (req, res) => {
    const Op = Sequelize.Op;
    let param =  req.query;
    let estado_ = req.query.estado ?? 'Todos';
    let sexo_ = req.query.sexo ?? 'Todos';
    let ciudad_municipio_nom_ = req.query.ciudad_municipio_nom ?? 'Todos';
    let where = [];
    if (estado_ != 'Todos') {
        where.push({ 'estado': estado_ });
    }
    if (sexo_ != 'Todos') {
        where.push({ 'sexo': sexo_ });
    }
    if (ciudad_municipio_nom_ != 'Todos') {
        where.push({ 'ciudad_municipio_nom': ciudad_municipio_nom_ });
    }

    if (where == '') {
        where.push({ 'iddatos': { [Op.gt]: 0 } });
    }

    const datos = await Datos.findAll({
        where: where,
        //logging: true
    });

    const estadoList = await Datos.findAll({
        attributes: ['estado'],
        group: 'estado',
    });
    const generoList = await Datos.findAll({
        attributes: ['sexo'],
        group: 'sexo',
    });
    const ciudadList = await Datos.findAll({
        attributes: ['ciudad_municipio_nom'],
        group: 'ciudad_municipio_nom',
    });
    res.render('index', { datos, estadoList, generoList, ciudadList, param });
});

module.exports = routes;
