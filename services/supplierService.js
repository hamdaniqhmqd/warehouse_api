const db = require('../data/connection');

// Mendapatkan semua supplier
const getAllSupplier = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM supplier', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

// Mendapatkan supplier berdasarkan ID
const getSupplierById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM supplier WHERE id_supplier = ?', [id], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

// Menambahkan supplier baru
const insertSupplier = (supplier) => {
  const { nama_supplier, nik_supplier, no_hp_supplier } = supplier;
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO supplier (nama_supplier, nik_supplier, no_hp_supplier) VALUES (?, ?, ?)',
      [nama_supplier, nik_supplier, no_hp_supplier],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

// Memperbarui supplier
const updateSupplier = (id, supplier) => {
  const { nama_supplier, nik_supplier, no_hp_supplier } = supplier;
  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE supplier SET nama_supplier = ?, nik_supplier = ?, no_hp_supplier = ? WHERE id_supplier = ?',
      [nama_supplier, nik_supplier, no_hp_supplier, id],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

// Menghapus supplier
const deleteSupplier = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM supplier WHERE id_supplier = ?', [id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

module.exports = {
  getAllSupplier,
  getSupplierById,
  insertSupplier,
  updateSupplier,
  deleteSupplier
};
