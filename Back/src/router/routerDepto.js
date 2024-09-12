const { Router } = require("express");
const { deptoHandler, deptoIdHanlder } = require("../handler/index.handler");

const routerDepto = Router();

routerDepto.get("/:id", deptoIdHanlder);
routerDepto.post("/", deptoHandler);

module.exports = routerDepto;
