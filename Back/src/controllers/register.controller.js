const { Vendedor } = require("../models/personas/vendedor.model");

registroController = async (req, res) => {
  try {
    //Verificacion existencia de usuario
    const { email } = req.body;
    const usuario = await Vendedor.findAll({
      where: {
        email: email,
      },
    });
    if (usuario === undefined) {
      //Creacion de usuario
      const { nombre, apellido, email, password } = req.body;
      const newUser = await Vendedor.create({
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
      });
      res
        .status(200)
        .json({ auth: true, message: "Registro exitoso", newUser });
      return newUser;
    } else {
      //respuesta al existir el usuario en la BD
      res.status(202).json({
        auth: true,
        message:
          "El email ingresado ya tiene una cuenta asociada, intenta iniciar sesion",
        usuario,
      });
    }
  } catch (error) {
    //Respuesta error al crear usuario
    res.status(500).json({ message: "Error en el registro" });
  }
};
module.exports = {
  registroController,
};
