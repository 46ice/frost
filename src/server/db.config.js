module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Sue@352.",
  DB: "frost",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};