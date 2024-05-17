# Sistem Autentikasi

## Dependensi
- express: Framework web untuk Node.js
- body-parser: Middleware untuk mengurai body dari permintaan HTTP
- express-session: Middleware untuk mengelola sesi pengguna
- bcryptjs: Library untuk hashing password

## Alur Aplikasi
1. Registrasi: Pengguna dapat mendaftar dengan username dan password.
  - Endpoint: POST /auth/register
  - Body: { "username": "user", "password": "pass" }
  - Respon sukses: 201 Registrasi berhasil
  - Respon error: 400 Username sudah digunakan atau 500 Terjadi kesalahan saat melakukan registrasi

2. Login: Pengguna dapat login dengan username dan password yang sudah terdaftar.
  - Endpoint: POST /auth/login
  - Body: { "username": "user", "password": "pass" }
  - Respon sukses: 200 Login berhasil
  - Respon error: 401 Username atau password salah

3. Logout: Pengguna dapat logout dari sesi mereka.
  - Endpoint: GET /auth/logout
  - Respon sukses: 200 Logout berhasil

## Test Endpoint
1. Registrasi Pengguna
  - URL: http://localhost:3000/auth/register
  - Method: POST
  - Body:
    json
      {
        "username": "newuser",
        "password": "newpassword"
      }

  - Respon sukses:
    json
      {
        "message": "Registrasi berhasil"
      }
  - Respon error:
    json
    {
      "message": "Username sudah digunakan"
    }

  - Hasil Test Endpoint dengan Postman
    ![2024-05-17](https://github.com/rimbasudarmadi/sistem-autentikasi/assets/113418908/492541e6-8783-4d98-9b50-29dae1211b84)