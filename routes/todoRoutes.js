// filepath: /D:/Desktop/todo-list-api/routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const todoController = require('../controllers/todoController');

router.get('/', auth, todoController.getAllTodos);
router.post('/', auth, todoController.createTodo);
router.put('/:id', auth, todoController.updateTodo);
router.delete('/:id', auth, todoController.deleteTodo);

module.exports = router;