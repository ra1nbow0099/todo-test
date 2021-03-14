const express = require('express')
const {
    getAllTodos,
    addNewTodo,
    deleteTodo,
    getTitleToEdit,
    editTodo
} = require('../controllers/main.controllers')
const router = express.Router()

//@route GET /
//@desc Get todos
router.get('/', getAllTodos)

//@route POST /
//@desc Add todos
router.post('/', addNewTodo)

//@route POST /
//@desc Delete todos
router.post('/delete/:id', deleteTodo)

//@route GET /edit/:id
//@desc Get todos to edit
router.get('/edit/:id', getTitleToEdit)

//@route POST /edit
//@desc Edit todos
router.post('/edit', editTodo)


module.exports = router