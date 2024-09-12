const edificioController = require("./Edificio/edificio.controller");
const allEdificio = require("./Edificio/getAllEdificio.controller");
const edificioDisponibleController = require("./Edificio/edificioDisponible.controller");
//DEPARTAMENTOS
const deptoIdController = require("./Depto/deptoId.controller");
const crearDeptoConAssets = require("./Depto/depto.controller");

module.exports = {
  edificioController,
  allEdificio,
  edificioDisponibleController,
  crearDeptoConAssets,
  deptoIdController,
};
