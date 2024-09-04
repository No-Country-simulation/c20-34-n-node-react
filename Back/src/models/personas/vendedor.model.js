const { DataTypes } = require("sequelize");
const conexionDB = require("../../database/conexionDB");

const Vendedor = conexionDB.define("vendedor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  verificado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = {
  Vendedor,
};
