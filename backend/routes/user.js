const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route GET /users
router.get('/users', userController.getUsers); // [cite: 55]

// Route POST /users
router.post('/users', userController.createUser); // [cite: 56]

module.exports = router;