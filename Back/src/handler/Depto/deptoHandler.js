// const { deptoController } = require("../../controller/index.controller");

// const deptoHandler = async (req, res) => {
//   try {
//     const {
//       numeroDepto,
//       precio,
//       dimensiones,
//       ambientes,
//       habitaciones,
//       baños,
//       disponibilidad,
//       videoPresentacion,
//       piso,
//       edificioId,
//     } = req.body;
//     const depto = await deptoController({
//       numeroDepto,
//       precio,
//       dimensiones,
//       ambientes,
//       habitaciones,
//       baños,
//       disponibilidad,
//       videoPresentacion,
//       piso,
//       edificioId,
//     });
//     res.status(200).json({ depto });
//   } catch (error) {
//     res.status(500).json({ message: `ERROR EN EL SERVIDOR: ${error}` });
//   }
// };

// module.exports = deptoHandler;

// handlers/deptoHandler.js

const { crearDeptoConAssets } = require("../../controller/index.controller");

const deptoHandler = async (req, res) => {
  try {
    const {
      numeroDepto,
      precio,
      dimensiones,
      ambientes,
      habitaciones,
      baños,
      disponibilidad,
      videoPresentacion,
      piso,
      edificioId,
    } = req.body;

    // Llamar a la función para crear el depto y asociar los assets
    const depto = await crearDeptoConAssets({
      numeroDepto,
      precio,
      dimensiones,
      ambientes,
      habitaciones,
      baños,
      disponibilidad,
      videoPresentacion,
      piso,
      edificioId,
    });

    // Enviar respuesta exitosa
    res.status(201).json({ depto });
  } catch (error) {
    // Enviar respuesta de error
    res.status(500).json({ message: `ERROR EN EL SERVIDOR: ${error.message}` });
  }
};

module.exports = deptoHandler;
