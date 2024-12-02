const userService = require('../services/userService');

// Fungsi untuk mendapatkan semua pengguna
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).send('Error retrieving users: ' + err.message);
  }
};

// Fungsi untuk membuat pengguna baru
const createUser = async (req, res) => {
  const { username, password, adminName, profileImagePath } = req.body;

  try {
    // Memanggil service untuk menambahkan data pengguna baru
    const result = await userService.insertUser({
      username,
      password,
      adminName,
      profileImagePath
    });

    // Mengembalikan response sukses dengan ID pengguna baru
    res.status(201).json({
      message: 'User created successfully',
      id: result.insertId // ID pengguna baru
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

// Fungsi untuk mendapatkan pengguna berdasarkan ID
const getUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10); // Konversi ID menjadi integer
    const user = await userService.getUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User tidak ada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Fungsi untuk memperbarui data pengguna
const updateUser = async (req, res) => {
  const userId = parseInt(req.params.id);
  const data = req.body;
  try {
    const result = await userService.updateUser(userId, data);
    if (result.affectedRows > 0) {
      res.json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Fungsi untuk menghapus pengguna
const deleteUser = async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    const result = await userService.deleteUser(userId);
    if (result.affectedRows > 0) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
};
