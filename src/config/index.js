const dotenv = require("dotenv");

dotenv.config();

const config = {
  mysql: {
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  },
};

module.exports = config;
