const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { routerDepto, routerEdificio } = require("./router/indexRouter");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/depto", routerDepto);
app.use("/edificio", routerEdificio);

module.exports = app;
