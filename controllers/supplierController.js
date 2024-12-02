const supplierService = require('../services/supplierService');

// Mendapatkan semua supplier
const getSupplier = async (req, res) => {
  try {
    const supplier = await supplierService.getAllSupplier();
    res.json(supplier);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mendapatkan supplier berdasarkan ID
const getSupplierById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const supplier = await supplierService.getSupplierById(id);
    if (supplier) {
      res.json(supplier);
    } else {
      res.status(404).json({ message: 'Supplier not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Menambahkan supplier baru
const createSupplier = async (req, res) => {
  try {
    const supplier = req.body;
    const result = await supplierService.insertSupplier(supplier);
    res.status(201).json({ message: 'Supplier created', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Memperbarui supplier
const updateSupplier = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const supplier = req.body;
    const result = await supplierService.updateSupplier(id, supplier);
    if (result.affectedRows > 0) {
      res.json({ message: 'Supplier updated successfully' });
    } else {
      res.status(404).json({ message: 'Supplier not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Menghapus supplier
const deleteSupplier = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await supplierService.deleteSupplier(id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Supplier deleted successfully' });
    } else {
      res.status(404).json({ message: 'Supplier not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getSupplier,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier
};
