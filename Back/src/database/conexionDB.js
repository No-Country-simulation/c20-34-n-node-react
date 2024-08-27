const { Sequelize } = require("sequelize");
require("dotenv").config();
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

const conexionDB = new Sequelize("c2034nodereact", user, pass, {
  host: "localhost",
  dialect: "mysql",
});
module.exports = conexionDB;
