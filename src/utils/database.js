const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database:"chatapi",
    port: 5432,
    host: "localhost",
    username: "postgres",
    password: "ruth",
    dialect:"postgres",
    logging: false
});

module.exports = db;