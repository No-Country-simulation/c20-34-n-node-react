const { Depto } = require("../../models/indexModel");

const deptoIdController = async ({ id }) => {
  try {
    const depto = await Depto.findByPk(id);
    return depto;
  } catch (error) {
    console.log(`ERROR EN EL CONTROLLER: ${error}`);
    throw new Error(`ERROR EN EL CONTROLLER: ${error}`);
  }
};

module.exports = deptoIdController;
