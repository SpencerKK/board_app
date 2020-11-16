const Sequelize = require("sequelize");

module.exports = new Sequelize("board_app", "root", "skk35!!!", {
    query: { raw: true },
    host: "localhost",
    dialect: "mysql"
})