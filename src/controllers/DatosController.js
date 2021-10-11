const db = require("../databases");
const Datos = db.Datos;
const Op = db.Sequelize.Op;

async function index(req, res) {
    const { result } = req.query;

    const resultado = await Datos.findAll({
        where: {
            slug: {
                [Op.like]: '%' + result + '%',
            },
        },
    });

    return res.json(resultado);
}