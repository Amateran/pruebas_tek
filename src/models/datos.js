module.exports = (sequelize, type) => {
    return sequelize.define('datos', {
        iddatos: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_reporte_web: type.DATE,
        id_de_caso: type.INTEGER,
        fecha_de_notificaci_n: type.DATE,
        departamento: type.INTEGER,
        departamento_nom: type.STRING,
        ciudad_municipio: type.INTEGER,
        ciudad_municipio_nom: type.STRING,
        edad: type.INTEGER,
        unidad_medida: type.INTEGER,
        sexo: type.STRING,
        fuente_tipo_contagio: type.STRING,
        ubicacion: type.STRING,
        estado: type.STRING,
        pais_viajo_1_cod: type.INTEGER,
        pais_viajo_1_nom: type.STRING,
        recuperado: type.STRING, 
        fecha_inicio_sintomas: type.DATE,
        fecha_diagnostico: type.DATE,
        fecha_recuperado: type.DATE,
        tipo_recuperacion: type.STRING,
        per_etn_: type.STRING,
        createdAt: type.DATE,
        updatedAt: type.DATE,

    })
}
