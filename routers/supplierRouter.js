const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

router.get('/supplier', supplierController.getSupplier);
router.get('/supplier/:id', supplierController.getSupplierById);
router.post('/supplier', supplierController.createSupplier);
router.put('/supplier/:id', supplierController.updateSupplier);
router.delete('/supplier/:id', supplierController.deleteSupplier);

module.exports = router;
