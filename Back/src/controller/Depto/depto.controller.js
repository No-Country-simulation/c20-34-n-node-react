const { Depto, Asset } = require("../../models/indexModel");
const conexionDB = require("../../database/conexionDB");

const crearDeptoConAssets = async ({
  numeroDepto,
  precio,
  dimensiones,
  ambientes,
  habitaciones,
  baños,
  disponibilidad,
  videoPresentacion, // Esta es una lista de objetos de assets
  piso,
  edificioId,
}) => {
  const transaction = await conexionDB.transaction();

  try {
    // 1. Crear el nuevo departamento
    const newDepto = await Depto.create(
      {
        numeroDepto,
        precio,
        dimensiones,
        ambientes,
        habitaciones,
        baños,
        disponibilidad,
        piso,
        edificioId,
      },
      { transaction }
    );

    // 2. Crear los assets asociados
    const createdAssets = await Promise.all(
      videoPresentacion.map((asset) => Asset.create(asset, { transaction }))
    );

    // 3. Asociar los assets con el nuevo departamento
    await newDepto.addVideoPresentacion(createdAssets, { transaction });

    // 4. Confirmar la transacción
    await transaction.commit();

    return newDepto;
  } catch (error) {
    // Revertir la transacción en caso de error
    await transaction.rollback();
    console.log(`ERROR EN EL CONTROLLER: ${error}`);
    throw error; // Lanza el error para que pueda ser manejado por el llamador
  }
};

module.exports = crearDeptoConAssets;
