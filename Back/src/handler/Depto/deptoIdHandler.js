const { deptoIdController } = require("../../controller/index.controller");

const deptoIdHanlder = async (req, res) => {
  try {
    const { id } = req.params;
    const depto = await deptoIdController({ id });
    !depto
      ? res.status(404).json({ messasge: "NO HAY NINGUN DEPTO CON ASOCIADO" })
      : res.status(200).json(depto);
  } catch (error) {
    res.status(500).json({ message: `ERROR EN EL SERVIDOR: ${error}` });
  }
};

module.exports = deptoIdHanlder;
