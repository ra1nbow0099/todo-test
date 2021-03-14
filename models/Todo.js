const Sequelize = require('sequelize')
const sequelize = require('../utils/db')


const Todo = sequelize.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: { args: true, msg: "You must enter a name" }
        }
    },
    category: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }
})
module.exports = Todo
