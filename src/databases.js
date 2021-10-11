const Sequelize = require('sequelize');
const DatosModel = require('./models/datos');

const sequelize = new Sequelize('tek', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

const Datos = DatosModel(sequelize, Sequelize);

sequelize.sync({force:false});

module.exports = {
    Datos,
    Sequelize
}
