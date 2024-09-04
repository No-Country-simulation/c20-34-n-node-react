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

    //Verificacion existencia de usuario en la base de datos
    const usuario = await Vendedor.findAll({
      where: {
        email: email,
      },
    });

    if (usuario.length !== 0) {
      //respuesta al existir un usuario con ese email en la BD
      return res.status(409).json({
        register: false,
        message: "El usuario ya existe, intenta iniciar sesion",
        usuarioEncontrado: usuario,
        urlRedirectFront: "/login",
      });
    }

    //encriptado de password
    const hashedPass = await bcrypt.hash(password, 10);

    //generacion de token
    const tokenVerificacion = jsonwebtoken.sign(
      { email: email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    );

    //envio de email para verificacion de registro
    const mail = await enviarMailVerificacion(
      (direccion = email),
      (token = tokenVerificacion)
    );

    //mensaje al ocurrir algun error al mandar el email de verificacion
    if (mail.accepted === 0) {
      return res.status(500).json({
        verication: false,
        message: "Error al mandar el email de verificación",
      });
    }

    //creacion y guardado del usuario en BD
    const newUser = await Vendedor.create({
      nombre: nombre,
      apellido: apellido,
      email: email,
      password: hashedPass,
      rol: rol,
      verificado: false,
    });

    //respuesta al guardar el usuario, pero sin haber sido validado
    res.status(201).json({
      register: true,
      cuenta: "Cuenta sin verificar almacenada en la base de datos.",
      message:
        "Se envió un correo al email ingresado, da click sobre el enlace para validar tu cuenta",
      usuarioGuardado: newUser,
      urlRedirectFront: "/register",
    });
  } catch (err) {
    //Respuesta de algun error en el servidor al crear usuario
    res.status(500).json({
      error: "Error al registrar al usuario",
      urlRedirectFront: "/register",
    });
  }
};

verificarCuenta = async (req, res) => {
  try {
    //en caso de que no se traiga el token del link enviado al email
    if (!req.params.token) {
      return res
        .status(500)
        .json({ message: "Error, no se recibio ningun token" });
    }

    //se decodifica el token obtenido para comparar con la clave secreta y verificar que es un token valido
    const decodificarToken = jsonwebtoken.verify(
      req.params.token,
      process.env.JWT_SECRET
    );

    //error al recibir un token incompleto
    if (!decodificarToken || !decodificarToken.email) {
      return res
        .status(500)
        .json({ message: "Error, el token recibido tiene algun error" });
    }

    //se actualiza el estado de "verificado" del usuario
    await Vendedor.update(
      {
        verificado: true,
      },
      {
        where: {
          email: decodificarToken.email,
        },
      }
    );

    //respuesta de exito
    res.status(200).json({
      message:
        "Email verificado exitosamente!!, ya puede iniciar sesion con su nueva cuenta",
      urlRedirectFront: "/login",
    });
  } catch (error) {
    //respuesta de error
    res
      .status(500)
      .json({ message: "Error al verificar la cuenta", error: error });
  }
};

module.exports = {
  registroController,
  verificarCuenta,
};
