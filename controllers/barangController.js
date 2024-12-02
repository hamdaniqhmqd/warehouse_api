const barangService = require('../services/barangService');

const getBarang = async (req, res) => {
  try {
    const barang = await barangService.getAllBarang();
    res.json(barang);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getBarangById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const barang = await barangService.getBarangById(id);
    if (barang) {
      res.json(barang);
    } else {
      res.status(404).json({ message: 'Barang not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createBarang = async (req, res) => {
  try {
    const barang = req.body;
    const result = await barangService.insertBarang(barang);
    res.status(201).json({ message: 'Barang created', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateBarang = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const barang = req.body;
    const result = await barangService.updateBarang(id, barang);
    if (result.affectedRows > 0) {
      res.json({ message: 'Barang updated successfully' });
    } else {
      res.status(404).json({ message: 'Barang not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteBarang = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await barangService.deleteBarang(id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Barang deleted successfully' });
    } else {
      res.status(404).json({ message: 'Barang not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getBarang,
  getBarangById,
  createBarang,
  updateBarang,
  deleteBarang
};
