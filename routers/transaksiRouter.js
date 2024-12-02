// routers/transaksiRouter.js
const express = require('express');
const transaksiController = require('../controllers/transaksiController');

const router = express.Router();

// Rute untuk mendapatkan semua transaksi
router.get('/transaksi', transaksiController.getTransaksi);

// Rute untuk menambahkan transaksi baru
router.post('/transaksi', transaksiController.createTransaksi);

// Rute untuk mendapatkan transaksi berdasarkan ID
router.get('/transaksi/:id', transaksiController.getTransaksiById);

// Rute untuk memperbarui transaksi berdasarkan ID
router.put('/transaksi/:id', transaksiController.updateTransaksi);

// Rute untuk menghapus transaksi berdasarkan ID
router.delete('/transaksi/:id', transaksiController.deleteTransaksi);

module.exports = router;
