const edificioHandler = require("./Edificio/edificio.handler");
const allEdificioHandler = require("./Edificio/getAllEdificio.handler");
const edificioDisponibleHandler = require("./Edificio/edificioDisponible.handler");

//DEPARTAMENTOS
const deptoHandler = require("./Depto/deptoHandler");
const deptoIdHanlder = require("./Depto/deptoIdHandler");

module.exports = {
  edificioHandler,
  allEdificioHandler,
  edificioDisponibleHandler,
  deptoHandler,
  deptoIdHanlder,
};
