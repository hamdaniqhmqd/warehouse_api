const express = require('express');
const barangController = require('../controllers/barangController');

const router = express.Router();

router.get('/barang', barangController.getBarang);
router.get('/barang/:id', barangController.getBarangById);
router.post('/barang', barangController.createBarang);
router.put('/barang/:id', barangController.updateBarang);
router.delete('/barang/:id', barangController.deleteBarang);

module.exports = router;
