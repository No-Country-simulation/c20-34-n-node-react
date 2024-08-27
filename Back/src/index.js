const app = require("./app");
const conexionDB = require("./database/conexionDB");
require("dotenv").config();
const port = process.env.PORT;

const server = async () => {
  try {
    await conexionDB.sync();
    console.log("Conexion a la DB con exito");

    app.listen(port);
    console.log(`Servidor en el puerto: ${port}`);
  } catch (error) {
    console.log(`ERROR AL LEVANTAR EL SERVIDOR: ${error}`);
  }
};

server();

/*
EN EL ARCHIVO CONEXIONDB, USAS .ENV O PONES ENTRE COMILLAS EL USUARIO, CONTRASEÑA Y NOMBRE DE LA DB QUE CREASTE PARA TU COMPUTADORA

!PRIMERO IRTE A MYSQL, CREATE DATABASE NOMBRE DE LA DB QUE QUIERAS¡

LUEGO PONES LOS DATOS PARA QUE SE CONECTE, Y FUNCIONA EL SERVER

*/
