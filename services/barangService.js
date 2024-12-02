const db = require('../data/connection');

// Mendapatkan semua barang
const getAllBarang = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM barang', (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

// Mendapatkan barang berdasarkan ID
const getBarangById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM barang WHERE id_barang = ?', [id], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

// Menambahkan barang baru
const insertBarang = (barang) => {
  const { barang_nama, kategori_barang, harga_barang, stok_barang, ukuran_barang } = barang;
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO barang (barang_nama, kategori_barang, harga_barang, stok_barang, ukuran_barang) VALUES (?, ?, ?, ?, ?)',
      [barang_nama, kategori_barang, harga_barang, stok_barang, ukuran_barang],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

// Memperbarui barang
const updateBarang = (id, barang) => {
  const { barang_nama, kategori_barang, harga_barang, stok_barang, ukuran_barang } = barang;
  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE barang SET barang_nama = ?, kategori_barang = ?, harga_barang = ?, stok_barang = ?, ukuran_barang = ? WHERE id_barang = ?',
      [barang_nama, kategori_barang, harga_barang, stok_barang, ukuran_barang, id],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

// Menghapus barang
const deleteBarang = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM barang WHERE id_barang = ?', [id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

module.exports = {
  getAllBarang,
  getBarangById,
  insertBarang,
  updateBarang,
  deleteBarang
};
