const Todo = require('../models/Todo')
const sequelize = require('sequelize')
const moment = require('moment')

//get all todos
exports.getAllTodos = async (req, res) => {
    try{
        await Todo.findAll({raw: true,
            attributes:
            ['id', 'title', 'category', 'description', 'date']
        })
        .then(data => {
                res.render('main', {
                    title: 'Todo list!',
                    isHome: true,
                    titles: data,
                })
            })
    } catch (e) {
        console.log(e)
    }
}

//add new todos
exports.addNewTodo = async (req, res) => {
    try{
        const title = req.body.title
        const category = req.body.category
        const description = req.body.description
        const date = req.body.date
        if (title.trim() === '') {
            res.redirect('/')
        } if(date.trim() === '') {
            res.redirect('/')
        } else {
            await Todo.create({title, category, description, date})
            res.redirect('/')
        }
    } catch(e) {
        console.log(e)
    }
}

//delete todo
exports.deleteTodo = async (req, res) => {
    try{
        const userId = req.params.id
        await Todo.destroy({where: {id: userId}})
        res.redirect('/')
    } catch (e){
        console.log(e)
    }
}

//edit todo view
exports.getTitleToEdit = async (req, res) => {
    const userid = req.params.id
    Todo.findAll({where: {id: userid}, raw: true})
    .then(data => {
        res.render('edit', {
            user: data[0]
        })
    })
    .catch(err => console.log(err))
}

// edit todo
exports.editTodo = async (req, res) => {
    try{
        const title = req.body.title
        const description = req.body.description
        const userId = req.body.id
        if (!title.trim()) {
            res.redirect('/')
        } else {
            await Todo.update({title: title, description: description}, {where: {id: userId}})
            res.redirect('/')
        }
    } catch (err) {
        console.log(err)
    }
}