const Asset = require("./asset/assets.model");
const Edificio = require("./edificacion/edificio.models");
const Depto = require("./edificacion/depto.model");
const Vendedor = require("./personas/vendedor.model");

// ASOCIACIONES
// EDIFICIO DEPTO MUCHOS A MUCHOS
Edificio.belongsToMany(Depto, { through: "edificio-depto" });
Depto.belongsToMany(Edificio, { through: "edificio-depto" });

Depto.belongsToMany(Asset, { through: "depto-assets" });
Asset.belongsToMany(Depto, { through: "depto-assets" });

Vendedor.hasMany(Depto, { through: "depto-vendedor" });
Depto.belongsTo(Vendedor, { through: "depto-vendedor" });

module.exports = { Asset, Edificio, Depto, Vendedor };
