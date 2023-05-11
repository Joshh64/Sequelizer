const { DataTypes } = require("sequelize")
const connection = require("../db/connection.js") // import and run the connection files
const Author = connection.define("Author", {
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Publisher: {
        type: DataTypes.STRING
    }
})

module.exports = Author;