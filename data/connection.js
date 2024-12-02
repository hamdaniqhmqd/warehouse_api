const mysql = require('mysql2');

// Konfigurasi koneksi untuk XAMPP MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Default user untuk XAMPP
  password: '', // Password kosong untuk default XAMPP
  database: 'api_gudang_pakaian' // Ganti dengan nama database Anda
});

// Cek koneksi
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    return;
  }
  console.log('Connected to MySQL database!');
});

module.exports = db;
