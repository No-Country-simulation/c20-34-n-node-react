const { DataTypes } = require("sequelize");
const conexionDB = require("../../database/conexionDB");

const Edificio = conexionDB.define("edificio", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pisos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  deptos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  espacioPublico: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  videoPresentacion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
// ubicacion agente precio tamaño === piso
module.exports = Edificio;
