const db = require('../data/connection'); // Sesuaikan dengan konfigurasi database Anda

// Fungsi untuk mendapatkan semua data pengguna
const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Fungsi untuk menambahkan pengguna baru
const insertUser = (userData) => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO users (username, password, adminName, profileImagePath) 
      VALUES (?, ?, ?, ?)
    `;
    const { username, password, adminName, profileImagePath } = userData;
    db.query(query, [username, password, adminName, profileImagePath], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Fungsi untuk mendapatkan pengguna berdasarkan ID
const getUserById = async (userId) => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT 
        * 
      FROM users WHERE id = ?
    `;
    db.execute(query, [userId], (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        reject(err);
      } else {
        resolve(results[0] || null); // Mengembalikan objek transaksi pertama atau null jika tidak ada
      }
    });
  });
};

// Fungsi untuk memperbarui data pengguna
const updateUser = (userId, userData) => {
  return new Promise((resolve, reject) => {
    const query = `
      UPDATE users 
      SET username = ?, password = ?, adminName = ?, profileImagePath = ?
      WHERE id = ?
    `;
    const { username, password, adminName, profileImagePath } = userData;
    db.query(query, [username, password, adminName, profileImagePath, userId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Fungsi untuk menghapus pengguna berdasarkan ID
const deleteUser = (userId) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [userId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getAllUsers,
  insertUser,
  getUserById,
  updateUser,
  deleteUser
};
