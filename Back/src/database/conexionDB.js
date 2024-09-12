const { Sequelize } = require("sequelize");
require("dotenv").config();
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

const conexionDB = new Sequelize("c2034nodereact", "root", "mysql", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = conexionDB;
