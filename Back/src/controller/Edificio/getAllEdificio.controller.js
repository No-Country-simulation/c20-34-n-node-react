const { Depto, Edificio, Vendedor, Asset } = require("../../models/indexModel");

const allEdificio = async () => {
  try {
    const edificio = await Edificio.findAll({
      include: [
        { model: Depto, as: "departamentos" },
        { model: Vendedor, as: "vendedorAsociado" },
      ],
    });
    return edificio;
  } catch (error) {
    console.log(`ERROR EN EL CONTROLLER: ${error}`);
  }
};

module.exports = allEdificio;
