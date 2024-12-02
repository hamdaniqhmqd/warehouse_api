const transaksiService = require('../services/transaksiService');

// Fungsi untuk mendapatkan semua transaksi
const getTransaksi = async (req, res) => {
  try {
    const transaksi = await transaksiService.getAllTransaksi();
    res.json(transaksi);
  } catch (err) {
    res.status(500).send('Error retrieving transaksi: ' + err.message);
  }
};

const createTransaksi = async (req, res) => {
  const { barang_id, barang_nama, kategori_barang, harga_barang, stok_barang, ukuran_barang, jumlah_barang, total_harga_barang, user_id, usernama, supplier_id, supplier_nama, bulan, tanggal, tanggalAkhir, status, statusAkhir } = req.body;

  try {
    // Memanggil service untuk memasukkan data transaksi
    const result = await transaksiService.insertTransaksi({
      barang_id,
      barang_nama,
      kategori_barang,
      harga_barang,
      stok_barang,
      ukuran_barang,
      jumlah_barang,
      total_harga_barang,
      user_id,
      usernama,
      supplier_id,
      supplier_nama,
      bulan,
      tanggal,
      tanggalAkhir,
      status,
      statusAkhir
    });

    // Mengembalikan response sukses dengan data hasil
    res.status(201).json({
      message: 'Transaksi created successfully',
      id: result.insertId // ID transaksi baru yang dimasukkan
    });
  } catch (err) {
    // Menangani error dan mengembalikan response 500 jika terjadi masalah
    res.status(500).json({
      error: err.message
    });
  }
};

const getTransaksiById = async (req, res) => {
  try {
    const transaksiId = parseInt(req.params.id, 10); // Konversi ID menjadi integer
    const transaksi = await transaksiService.getTransaksiById(transaksiId);
    if (transaksi) {
      res.json(transaksi);
    } else {
      res.status(404).json({ message: 'Transaksi not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateTransaksi = async (req, res) => {
  const transaksiId = parseInt(req.params.id);
  const data = req.body;
  try {
    const result = await transaksiService.updateTransaksi(transaksiId, data);
    if (result.affectedRows > 0) {
      res.json({ message: 'Transaksi updated successfully' });
    } else {
      res.status(404).json({ message: 'Transaksi not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteTransaksi = async (req, res) => {
  const transaksiId = parseInt(req.params.id);
  try {
    const result = await transaksiService.deleteTransaksi(transaksiId);
    if (result.affectedRows > 0) {
      res.json({ message: 'Transaksi deleted successfully' });
    } else {
      res.status(404).json({ message: 'Transaksi not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getTransaksi,
  createTransaksi,
  getTransaksiById,
  updateTransaksi,
  deleteTransaksi
};
