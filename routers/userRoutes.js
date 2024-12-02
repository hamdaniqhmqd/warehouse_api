const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Endpoint untuk mendapatkan semua user
router.get('/user', userController.getAllUsers);

// Endpoint untuk mendapatkan user berdasarkan ID
router.get('/user/:id', userController.getUserById);

// Endpoint untuk menambahkan user baru
router.post('/user', userController.createUser);

// Endpoint untuk memperbarui user
router.put('/user/:id', userController.updateUser);

// Endpoint untuk menghapus user
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
