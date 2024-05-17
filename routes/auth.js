const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const session = require('express-session');
const { addUser, findUser, checkUsernameExists } = require('../models/users');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (checkUsernameExists(username)) {
    return res.status(400).send('Username sudah digunakan');
  }

  try {
    await addUser(username, password);
    res.status(201).send('Registrasi berhasil');
  } catch (error) {
    console.log(error);
    res.status(500).send('Terjadi kesalahan saat melakukan registrasi');
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = findUser(username);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Username atau password salah');
  }

  req.session.isLoggedIn = true;
  req.session.username = username;
  res.send('Login berhasil');
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('Logout berhasil');
});

module.exports = router;
