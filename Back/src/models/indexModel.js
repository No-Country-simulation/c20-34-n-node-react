const Asset = require("./asset/assets.model");
const Edificio = require("./edificacion/edificio.models");
const Depto = require("./edificacion/depto.model");

const Vendedor = require("./personas/vendedor.model");

// ASOCIACIONES

Edificio.hasMany(Depto, { foreignKey: "edificioId", as: "departamentos" });

Depto.belongsTo(Edificio, { foreignKey: "edificioId", as: "edificio" });

Depto.belongsToMany(Asset, {
  through: "depto-assets",
  as: "assets",
  foreignKey: "deptoId",
});
Asset.belongsToMany(Depto, {
  through: "depto-assets",
  as: "departamentos",
  foreignKey: "assetId",
});

Vendedor.hasOne(Edificio, { foreignKey: "venedorId" });
Edificio.belongsTo(Vendedor, {
  foreignKey: "vendedorId",
  as: "vendedorAsociado",
});

module.exports = { Asset, Edificio, Depto, Vendedor };
