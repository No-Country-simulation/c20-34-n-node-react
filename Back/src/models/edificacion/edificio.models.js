const { DataTypes } = require("sequelize");
const conexionDB = require("../../database/conexionDB");

const Edificio = conexionDB.define(
  "edificio",
  {
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
    vendedorId: {
      type: DataTypes.INTEGER,
      references: {
        model: "vendedor",
        key: "id",
      },
      allowNull: false,
    },
    videoPresentacion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
// ubicacion agente precio tamaño === piso
module.exports = Edificio;
