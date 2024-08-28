const { DataTypes } = require("sequelize");
const conexionDB = require("../../database/conexionDB");

const Depto = conexionDB.define("depto", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  numeroDepto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dimensiones: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  ambientes: {
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
  videoPresentacion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  piso: {
    type: DataTypes.INTEGER,
    references: {
      model: "Edificio",
      key: "id",
    },
    allowNull: false,
  },
  edificioId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Edificio",
      key: "id",
    },
    allowNull: false,
  },
});
// dimensiones videos
module.exports = Depto;
