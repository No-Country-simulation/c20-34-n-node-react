const { DataTypes } = require("sequelize");
const conexionDB = require("../../database/conexionDB");

const Edificio = conexionDB.define("edificio", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: null,
  },
  pisos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  deptos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vendedor: {
    type: DataTypes.INTEGER,
    references: {
      model: "Vendedor",
      key: "id",
    },
    allowNull: false,
  },
  videoPresentacion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
// ubicacion agente precio tamaño === piso
module.exports = Edificio;
