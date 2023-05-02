const Sequelize = require("sequelize");
const config = require("../config");
const mysql = config.mysql;
const db = {};

const sequelize = new Sequelize(
  mysql.database,
  mysql.username,
  mysql.password,
  {
    host: mysql.host,
    dialect: mysql.dialect,
    dialectOptions: mysql.dialectOptions,
  }
);

sequelize.authenticate();

db.users = require("./users")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
