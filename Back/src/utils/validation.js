validation = (nombre, apellido, email, password, res) => {
  let isType = true; //variable que indica si estan correctos los campos
  //validando campos vacios
  if (!nombre || !apellido || !email || !password) {
    return {
      isType: false,
      message: "Los campos estan incompletos.",
    };
  }

  //expresion regular para validar email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //validacion de nombre
  if (typeof nombre !== "string") {
    return {
      isType: false,
      message: "Tipo de dato no valido, el nombre debe de ser texto.",
    };
  }

  //validacion de apellido
  if (typeof apellido !== "string") {
    return {
      isType: false,
      message: "Tipo de dato no valido, el apellido debe de ser texto.",
    };
  }

  //validacion de email
  if (regex.test(email) !== true) {
    return {
      isType: false,
      message: "Tipo de dato no valido, el email tiene un formato no valido.",
    };
  }

  //validacion de password
  if (password.length < 6) {
    return {
      isType: false,
      message:
        "Tipo de dato no valido, la contraseña debe tener un minimo de 6 caracteres.",
    };
  }

  return isType;
};

module.exports = {
  validation,
};
