const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos) //requested from auth controller after login or signup

router.post('/createTodo', todosController.createTodo) //requested from form on todos.ejs

router.put('/markComplete', todosController.markComplete) //Requested from client side main.js

router.put('/markIncomplete', todosController.markIncomplete) //Requested from client side main.js

router.put('/updateStatus', todosController.updateStatus) //Requested from client side main.js

router.delete('/deleteTodo', todosController.deleteTodo) //Requested from client side main.js

module.exports = router