const { Edificio } = require("../../models/indexModel");

const edificioController = async ({
  ubicacion,
  pisos,
  deptos,
  vendedorId,
  videoPresentacion,
}) => {
  try {
    const edificio = await Edificio.create({
      ubicacion,
      pisos,
      deptos,
      vendedorId,
      videoPresentacion,
    });
    return edificio;
  } catch (error) {
    console.log(`ERROR EN EL CONTROLLER: ${error}`);
  }
};

module.exports = edificioController;
