const { Router } = require("express");
const { registroController } = require("../controllers/register.controller");

const router = Router();

//ruta para el registro de usuario
router.post("/register", registroController);

module.exports = router;
