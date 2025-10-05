const express = require('express');
const router = express.Router(); [cite: 108]
const userController = require('../controllers/userController'); [cite: 109]

// GET và POST đã có
router.get('/users', userController.getUsers); [cite: 110]
router.post('/users', userController.createUser); [cite: 111]

// Thêm PUT (Cập nhật)
router.put('/users/:id', userController.updateUser); [cite: 112, 113]

// Thêm DELETE (Xóa)
router.delete('/users/:id', userController.deleteUser); [cite: 113]

module.exports = router; [cite: 114]