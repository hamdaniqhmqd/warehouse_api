const db = require('../data/connection');

// Fungsi untuk mendapatkan semua transaksi
const getAllTransaksi = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM transaksis', (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

// Fungsi untuk menambahkan transaksi baru
const insertTransaksi = (transaksi) => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO transaksis (
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
        statusAkhir) 
      VALUES ( 
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ?,
        ?, 
        ?, 
        ?)
    `;


    const values = [
      transaksi.barang_id,
      transaksi.barang_nama,
      transaksi.kategori_barang,
      transaksi.harga_barang,
      transaksi.stok_barang,
      transaksi.ukuran_barang,
      transaksi.jumlah_barang,
      transaksi.total_harga_barang,
      transaksi.user_id,
      transaksi.usernama,
      transaksi.supplier_id,
      transaksi.supplier_nama,
      transaksi.bulan,
      transaksi.tanggal,
      transaksi.tanggalAkhir,
      transaksi.status,
      transaksi.statusAkhir
    ];

    db.query(query, values, (err, results) => {
      if (err) {
        return reject(err); // Menangani error jika query gagal
      }
      resolve(results); // Mengembalikan hasil query yang berisi ID transaksi baru
    });
  });
};

const getTransaksiById = async (transaksiId) => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT 
          *
      FROM transaksis
      WHERE id_transaksi = ?;
    `;

    db.execute(query, [transaksiId], (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        reject(err);
      } else {
        resolve(results[0] || null); // Mengembalikan objek transaksi pertama atau null jika tidak ada
      }
    });
  });
};

const updateTransaksi = async (transaksiId, data) => {
  return new Promise((resolve, reject) => {
    const query = `
      UPDATE transaksis
      SET 
          barang_nama = ?, 
          kategori_barang = ?, 
          harga_barang = ?, 
          stok_barang = ?, 
          ukuran_barang = ?, 
          jumlah_barang = ?, 
          total_harga_barang = ?, 
          user_id = ?, 
          supplier_id = ?, 
          bulan = ?, 
          tanggal = ?, 
          tanggalAkhir = ?, 
          status = ?, 
          statusAkhir = ?
      WHERE id_transaksi = ?;
    `;

    const values = [
      data.barang_nama,
      data.kategori_barang,
      data.harga_barang,
      data.stok_barang,
      data.ukuran_barang,
      data.jumlah_barang,
      data.total_harga_barang,
      data.user_id,
      data.supplier_id,
      data.bulan,
      data.tanggal,
      data.tanggalAkhir,
      data.status,
      data.statusAkhir,
      transaksiId,
    ];

    db.execute(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const deleteTransaksi = async (transaksiId) => {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM transaksis WHERE id_transaksi = ?`;

    db.execute(query, [transaksiId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getAllTransaksi,
  insertTransaksi,
  getTransaksiById,
  updateTransaksi,
  deleteTransaksi
};
