const { Sequelize } = require("sequelize");
const { Depto, Edificio } = require("../../models/indexModel");

const edificioDisponibleController = async () => {
  try {
    const disponible = await Edificio.findAll({
      include: {
        model: Depto,
        as: "departamentos",
        attributes: [], // No seleccionamos columnas de 'Depto' para evitar el problema con GROUP BY
        where: { disponibilidad: "disponible" },
        required: false,
      },
      attributes: {
        include: [
          [
            Sequelize.fn("COUNT", Sequelize.col("departamentos.id")),
            "numDeptosDisponibles",
          ],
        ],
      },
      group: ["Edificio.id"],
      order: [[Sequelize.literal("numDeptosDisponibles"), "DESC"]],
    });

    return disponible;
  } catch (error) {
    console.log(`ÈRROR EN EL CONTROLLER: ${error}`);
  }
};

module.exports = edificioDisponibleController;
