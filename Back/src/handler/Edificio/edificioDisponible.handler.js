const {
  edificioDisponibleController,
} = require("../../controller/index.controller");

const edificioDisponibleHandler = async (req, res) => {
  try {
    const edificio = await edificioDisponibleController();
    res.status(200).json(edificio);
  } catch (error) {
    res.status(500).json({ message: `ERROR EN EL SERVIDOR: ${error}` });
  }
};

module.exports = edificioDisponibleHandler;
