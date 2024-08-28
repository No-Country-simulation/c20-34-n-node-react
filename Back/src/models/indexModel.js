const Asset = require("./asset/assets.model");
const Edificio = require("./edificacion/edificio.models");
const Depto = require("./edificacion/depto.model");

const Vendedor = require("./personas/vendedor.model");

// ASOCIACIONES
// EDIFICIO DEPTO MUCHOS A MUCHOS
Edificio.hasMany(Depto, { foreignKey: "edificioId", as: "departamentos" });

Depto.belongsTo(Edificio, { foreignKey: "edificioId", as: "edificio" });

Depto.belongsToMany(Asset, { through: "depto-assets" });
Asset.belongsToMany(Depto, { through: "depto-assets" });

Vendedor.hasOne(Edificio, { foreignKey: "venedorId" });
Edificio.belongsTo(Vendedor, { foreignKey: "vendedorId" });

module.exports = { Asset, Edificio, Depto, Vendedor };
