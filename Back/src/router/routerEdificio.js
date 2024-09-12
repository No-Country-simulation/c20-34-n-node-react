const { Router } = require("express");
const {
  edificioHandler,
  allEdificioHandler,
  edificioDisponibleHandler,
} = require("../handler/index.handler");

const routerEdificio = Router();

routerEdificio.post("/", edificioHandler);
routerEdificio.get("/", allEdificioHandler);
routerEdificio.get("/disponible", edificioDisponibleHandler);

module.exports = routerEdificio;
