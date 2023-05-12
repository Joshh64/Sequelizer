const { DataTypes } = require("sequelize")
const connection = require("../db/connection.js") // import and run the connection files
const Author = connection.define("Author", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    publisher: {
        type: DataTypes.STRING
    }
})

module.exports = Author;