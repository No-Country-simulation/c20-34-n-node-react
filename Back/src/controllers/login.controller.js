const { Vendedor } = require("../models/personas/vendedor.model");
const { validation } = require("../utils/validation");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

loginController = async (req, res) => {
  ///
  try {
    //capturando los datos mandados del formulario de login
    const { email, password } = req.body;

    //validacion de datos (validation.js)
    const { isType, message } = validation(
      "nombre",
      "apellido",
      email,
      password
    );
    //respuesta dinamica dependiedo del error
    if (isType === false) {
      return res.status(400).json({
        message: message,
      });
    }

    //Verificacion existencia de usuario en la base de datos
    const usuario = await Vendedor.findAll({
      where: {
        email: email,
      },
    });

    //respuesta al no encontrar usuario
    if (usuario.length === 0) {
      return res.status(400).json({ message: "Error durante el login" });
    }

    //comparacion de passwords
    const passwordEquals = await bcrypt.compare(password, usuario[0].password);

    //respuesta a una cuenta no verificada
    if (!usuario[0].verificado) {
      return res.status(403).json({
        message: "Usuario encontrado, pero falta verificar la cuenta",
      });
    }

    //respuesta a contraseña incorrecta
    if (!passwordEquals) {
      return res.status(401).json({
        message: "Contraseña y/o password incorrectos",
      });
    }

    //generacion de token
    const tokenVerificacion = jsonwebtoken.sign(
      { email: email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    );

    const cookieOption = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 100
      ),
      path: "/",
    };

    res.cookie("jwt", tokenVerificacion, cookieOption);

    //respuesta a email y password correctos
    res.status(200).json({
      message: "Login exitoso. Bienvenid@",
      redirect: "/",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error, ocurrio algo inesperado al intentar iniciar sesion",
    });
  }
};

module.exports = {
  loginController,
};
