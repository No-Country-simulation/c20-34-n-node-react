const { edificioController } = require("../../controller/index.controller");

const edificioHandler = async (req, res) => {
  try {
    const { ubicacion, pisos, deptos, vendedorId, videoPresentacion } =
      req.body;
    const edificio = await edificioController({
      ubicacion,
      pisos,
      deptos,
      vendedorId,
      videoPresentacion,
    });

    !edificio
      ? res.status(404).json({ message: `No se pudo guardar ${edificio}` })
      : res.status(200).json(edificio);
  } catch (error) {
    res.status(500).json({ message: `ERROR HANDLER: ${error}` });
  }
};

module.exports = edificioHandler;
