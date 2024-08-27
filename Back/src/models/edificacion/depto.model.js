const { DataTypes } = require("sequelize");
const conexionDB = require("../../database/conexionDB");

const Depto = conexionDB.define("depto", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  hambientes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  habitaciones: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  baños: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  disponibilidad: {
    type: DataTypes.ENUM,
    value: ["Disponible", "Reservado", "Vendido"],
    allowNull: false,
  },
});
// dimensiones videos
module.exports = Depto;
