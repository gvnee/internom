const dbConfig = require("../config/db-config.js");
const Sequelize = require("sequelize");

//database connection
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect
    }
);

const db = {};

db.sequelize = sequelize;
db.models = {};

db.models.Customer = require("./customerModel")(sequelize, Sequelize.DataTypes);

module.exports = db;