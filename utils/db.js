const Sequelize = require('sequelize')

const DB_NAME = 'todo'
const USERNAME = 'root'
const PASS = '12345678'

const sequelize = new Sequelize(DB_NAME, USERNAME, PASS, {
    dialect: "mysql",
    host: "localhost"
})

module.exports = sequelize