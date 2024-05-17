# Sistem Autentikasi

## Dependensi
- express: Framework web untuk Node.js
- body-parser: Middleware untuk mengurai body dari permintaan HTTP
- express-session: Middleware untuk mengelola sesi pengguna
- bcryptjs: Library untuk hashing password

- install dependensi
  - npm install express body-parser express-session bcryptjs
 
## Struktur Direktori
  - models/users.js: Berisi fungsi untuk mengelola data pengguna.
  - routes/auth.js: Berisi rute untuk autentikasi pengguna.
  - index.js: File utama untuk menjalankan aplikasi Express.

## Alur Aplikasi
### 1. Registrasi: Pengguna dapat mendaftar dengan username dan password.
  - Endpoint: POST /auth/register
  - Body: { "username": "user", "password": "pass" }
  - Respon sukses: 201 Registrasi berhasil
  - Respon error: 400 Username sudah digunakan atau 500 Terjadi kesalahan saat melakukan registrasi

### 2. Login: Pengguna dapat login dengan username dan password yang sudah terdaftar.
  - Endpoint: POST /auth/login
  - Body: { "username": "user", "password": "pass" }
  - Respon sukses: 200 Login berhasil
  - Respon error: 401 Username atau password salah

### 3. Logout: Pengguna dapat logout dari sesi mereka.
  - Endpoint: GET /auth/logout
  - Respon sukses: 200 Logout berhasil

## Test Endpoint
### 1. Registrasi Pengguna
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
    ![2024-05-17](https://github.com/rimbasudarmadi/sistem-autentikasi/assets/113418908/2720e231-c174-45dc-809d-5ad873e2bcfd)
 

### 2. Login Pengguna
  - URL: http://localhost:3000/auth/login
  - Method: POST
  - Body:
    json
    {
      "username": "username",
      "password": "password"
    }
    
  - Respon sukses:
    json
    {
      "message": "Login berhasil"
    }
    
  - Respon error:
    json
    {
      "message": "Username atau password salah"
    }

  - Hasil Test Endpoint dengan Postman
      ![2024-05-17 (1)](https://github.com/rimbasudarmadi/sistem-autentikasi/assets/113418908/683c6b9e-7b96-482b-aa1d-2335e84c5134)

### 3. Logout Pengguna
  - URL: http://localhost:3000/auth/logout
  - Method: GET
  - Respon sukses:
    json
    {
      "message": "Logout berhasil"
    }

  - Hasil Test Endpoint dengan Postman
    ![2024-05-17 (2)](https://github.com/rimbasudarmadi/sistem-autentikasi/assets/113418908/a28ff22c-837e-4942-808e-aeed1adec86c)

    

