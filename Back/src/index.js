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

/*{
  "numeroDepto": "101",
  "precio": 150000,
  "dimensiones": "80m²",
  "ambientes": 3,
  "habitaciones": 2,
  "baños": 1,
  "disponibilidad": "disponible",
  "videoPresentacion": [
    { "url": "http://localhost:3000/src/Assets/02 Spin 360/0-120.mp4", "tipo": "video" }
  ],
  "piso": 5,
  "edificioId": 1
}
 */

/*
EN EL ARCHIVO CONEXIONDB, USAS .ENV O PONES ENTRE COMILLAS EL USUARIO, CONTRASEÑA Y NOMBRE DE LA DB QUE CREASTE PARA TU COMPUTADORA

!PRIMERO IRTE A MYSQL, CREATE DATABASE NOMBRE DE LA DB QUE QUIERAS¡

LUEGO PONES LOS DATOS PARA QUE SE CONECTE, Y FUNCIONA EL SERVER

*/
