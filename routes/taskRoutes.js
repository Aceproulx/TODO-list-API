// filepath: /D:/Desktop/todo-list-api/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');

router.get('/', auth, taskController.getAllTasks);
router.post('/', auth, taskController.createTask);
router.get('/:id', auth, taskController.getTaskById);
router.put('/:id', auth, taskController.updateTask);
router.patch('/:id', auth, taskController.partialUpdateTask);
router.delete('/:id', auth, taskController.deleteTask);

module.exports = router;
