const { DataTypes } = require("sequelize");
const conexionDB = require("../../database/conexionDB");

const Assets = conexionDB.define(
  "assets",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    animacion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fotos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    planos: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    videoPresentacion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    vista360: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Assets;
