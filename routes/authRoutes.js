// filepath: /D:/Desktop/todo-list-api/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);

// New endpoint
router.get('/logout', authController.logout);

module.exports = router;
