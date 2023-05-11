const { DataTypes } = require("sequelize")
const connection = require("../db/connection.js") // import and run the connection files
const Book = connection.define("Book", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, // column called title. title fields must be a strong and must be present for each book in the table, along with each title being different from one another
    author: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    }
}) // creates the structure for a table called Books in our database

module.exports = Book; // exports the model for use outside of this file