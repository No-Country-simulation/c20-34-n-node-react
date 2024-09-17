const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router/router");
const auth = require("./router/auth-router");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(router);
app.use(auth);
app.use(cookieParser());

module.exports = app;
