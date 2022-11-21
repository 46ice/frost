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

module.exports = db;