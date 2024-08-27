const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router/router");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(router);

module.exports = app;
