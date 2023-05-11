const { Sequelize } = require("sequelize") // imports sequelize
const connection = new Sequelize(process.env.MYSQL_URI) // initialise a new instance of the class sequelize

connection.authenticate() // checks the connection URI to make sure there is an existing database to connect to

console.log("DB connection is working")

module.exports = connection