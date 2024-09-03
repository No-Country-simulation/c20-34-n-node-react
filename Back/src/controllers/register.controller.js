const { Vendedor } = require("../models/personas/vendedor.model");
const bcrypt = require("bcrypt");
const { validation } = require("../utils/validation");

registroController = async (req, res) => {
  try {
    //capturando datos de la request
    const { nombre, apellido, email, password } = req.body;

    //validacion de datos
    //informacion sobre los errores de tipo de datos (validation.js)
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

    //envio de email para verificacion de registro

    //encriptado de password
    const hashedPass = await bcrypt.hash(password, 10);

    //creacion y guardado del usuario
    const newUser = await Vendedor.create({
      nombre: nombre,
      apellido: apellido,
      email: email,
      password: hashedPass,
    });

    //respuesta al guardar el usuario correctamente
    res
      .status(200)
      .json({
        register: true,
        message: "Registro de usuario exitoso",
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
