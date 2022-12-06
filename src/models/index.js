const dbConfig = require("../server/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.models.js")(sequelize, Sequelize);
db.product = require("./product.models.js")(sequelize, Sequelize);
db.buys = require("./buys.models.js")(sequelize, Sequelize);
db.chest = require("./chest.models.js")(sequelize, Sequelize);
db.products_in_buy = require("./products_in_buy.models.js")(sequelize, Sequelize);
db.products_in_chest = require("./products_in_chest.models.js")(sequelize, Sequelize);


// db.product.belongsToMany(db.buys, {as: 'buys', through: { model: db.products_in_buy, unique: false }, foreignKey: 'buy_id' });
// db.buys.belongsToMany(db.product, {as: 'products', through: { model: db.products_in_buy, unique: false }, foreignKey: 'product_id' });

// db.product.belongsToMany(db.chest, { as: 'chests', through: { model: db.products_in_chest, unique: false }, foreignKey: 'chest_id' });
// db.chest.belongsToMany(db.product, { as: 'products', through: { model: db.products_in_chest, unique: false }, foreignKey: 'product_id' });

module.exports = db;