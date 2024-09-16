const { Router } = require("express");
const {
  registroController,
  verificarCuenta,
} = require("../controllers/register.controller");
const { loginController } = require("../controllers/login.controller");

const router = Router();

router.post("/api/register", registroController); //ruta para el registro de usuario
router.get("/verificar/:token", verificarCuenta); //ruta que se ejecuta al hacer click en el link de verificacion de email
router.post("/api/login", loginController); //ruta para inicio de sesion

module.exports = router;
