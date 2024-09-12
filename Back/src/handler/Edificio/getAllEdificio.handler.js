const { allEdificio } = require("../../controller/index.controller");

const allEdificioHandler = async (req, res) => {
  try {
    const edificio = await allEdificio();
    res.status(200).json(edificio);
  } catch (error) {
    res.status(500).json({ message: `ERROR EN EL HANDLER: ${error}` });
  }
};

module.exports = allEdificioHandler;
