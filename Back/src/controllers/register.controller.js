const { Vendedor } = require("../models/personas/vendedor.model");
const bcrypt = require("bcrypt");
const { validation } = require("../utils/validation");
const { enviarMailVerificacion } = require("../utils/mailToken");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

registroController = async (req, res) => {
  try {
    //capturando datos de la request
    const { nombre, apellido, email, password, rol } = req.body;

    //validacion de datos (validation.js)
    const { isType, message } = validation(nombre, apellido, email, password);
    //respuesta dinamica dependiedo del error
    if (isType === false) {
      return res.status(400).json({
        message: message,
      });
    }

    //Verificacion existencia de usuario
    const usuario = await Vendedor.findAll({
      where: {
        email: email,
      },
    });

    if (usuario.length !== 0) {
      //respuesta al existir un usuario con ese email en la BD
      return res.status(400).json({
        register: false,
        message:
          "El email ingresado ya tiene una cuenta asociada, intenta iniciar sesion",
        usuario,
      });
    }

    //encriptado de password
    const hashedPass = await bcrypt.hash(password, 10);

    //generacion de token
    const tokenVerificacion = jsonwebtoken.sign(
      { user: email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    );

    //envio de email para verificacion de registro
    const mail = await enviarMailVerificacion(
      (direccion = email),
      (token = tokenVerificacion)
    );
    //msg por si surge algun error al mandar el email de verificacion
    if (mail.accepted === 0) {
      return res.status(500).json({
        verication: false,
        message: "Error al mandar el email de verificación",
      });
    }

    //creacion y guardado del usuario
    const newUser = await Vendedor.create({
      nombre: nombre,
      apellido: apellido,
      email: email,
      password: hashedPass,
      rol: rol,
      verificado: false,
    });

    // res.status(200).json({
    //   register: true,
    //   message: "Registro realizado correctamente",
    //   newUser,
    // });

    //respuesta al guardar el usuario, pero sin haber sido validado
    res.status(200).json({
      register: true,
      message:
        "Se envió un correo al email ingresado, da click sobre el enlace para validar tu cuenta",
      newUser,
    });
  } catch (err) {
    //Respuesta de algun error en el servidor al crear usuario
    res
      .status(500)
      .json({ error: "Error al registrar al usuario", message: err.message });
  }
};

module.exports = {
  registroController,
};
