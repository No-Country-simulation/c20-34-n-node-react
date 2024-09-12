const { DataTypes } = require("sequelize");
const conexionDB = require("../../database/conexionDB");

const Vendedor = conexionDB.define(
  "vendedor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contacto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    redSocial: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Vendedor;
