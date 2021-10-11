const { soloJson } = require('../src/consumo');
const { Datos } = require('./databases');

async function sincronizador() {
    const solojson = await soloJson();
    var keys = Object.keys(solojson);
    for (var i = 0, length = keys.length; i < length; i++) {
        let objeto = solojson[keys[i]];
        Datos
            .findOrCreate({
                where: { id_de_caso: objeto.id_de_caso }, defaults: {
                    id_de_caso: objeto.id_de_caso,
                    fecha_reporte_web: objeto.fecha_reporte_web,
                    fecha_de_notificaci_n: objeto.fecha_de_notificaci_n,
                    departamento: objeto.departamento,
                    departamento_nom: objeto.departamento_nom,
                    ciudad_municipio: objeto.ciudad_municipio,
                    ciudad_municipio_nom: objeto.ciudad_municipio_nom,
                    edad: objeto.edad,
                    unidad_medida: objeto.unidad_medida,
                    sexo: objeto.sexo,
                    fuente_tipo_contagio: objeto.fuente_tipo_contagio,
                    ubicacion: objeto.ubicacion,
                    estado: objeto.estado,
                    pais_viajo_1_cod: objeto.pais_viajo_1_cod,
                    pais_viajo_1_nom: objeto.pais_viajo_1_nom,
                    recuperado: objeto.recuperado,
                    fecha_inicio_sintomas: objeto.fecha_inicio_sintomas,
                    fecha_diagnostico: objeto.fecha_diagnostico,
                    fecha_recuperado: objeto.fecha_recuperado,
                    tipo_recuperacion: objeto.tipo_recuperacion,
                    per_etn_: objeto.per_etn_
                }
            })
            .then(([user, created]) => {
            })
    }

}
module.exports = { sincronizador };