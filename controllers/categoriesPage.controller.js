const Todo = require('../models/Todo')

exports.getCategoriesPage = async (req, res) => {
try{
    await Todo.findAll({raw: true}, {where: {Date}})
    .then(data => {
            res.render('categories', {
                isCategories: true,
                homes: data
            })
        })
} catch(e) {
    console.log(e)
}
}

exports.getWorkCategory = async (req, res) => {
    try{
        await Todo.findAll({where: {category: 'work'}})
        .then(data => {
                res.render('work_category', {
                    isCategories: true,
                    titles: data
                })
            })
    } catch(e) {
        console.log(e)
    }
}

exports.getHomeCategory = async (req, res) => {
    try{
        await Todo.findAll({where: {category: 'home'}})
        .then(data => {
                res.render('home_category', {
                    isCategories: true,
                    titles: data
                })
            })
    } catch(e) {
        console.log(e)
    }
}

exports.getNoneCategory = async (req, res) => {
    try{
        await Todo.findAll({where: {category: 'none'}})
        .then(data => {
                res.render('none_category', {
                    isCategories: true,
                    titles: data
                })
            })
    } catch(e) {
        console.log(e)
    }
}