# Alpro C++ Vault 🚀
> **Blog & Portal Repositori Studi Kasus Algoritma dan Pemrograman (C++)**  
> Dibuat dengan **HTML5, CSS3, Bootstrap 5.3, dan JavaScript (ES6)**.

---

## 📌 Ringkasan Proyek

**Alpro C++ Vault** adalah aplikasi web interaktif yang berfungsi sebagai blog, dokumentasi, dan repositori studi kasus mata kuliah **Algoritma dan Pemrograman**. Web ini dirancang khusus untuk menyimpan berbagai variasi permasalahan logika komputasi menggunakan bahasa **C++ Modern (ISO C++17/C++20)**, lengkap dengan deskripsi masalah, analisis Input-Proses-Output (I-P-O), pseudocode algoritma, implementasi source code dengan penyorotan sintaks (*syntax highlighting*), simulasi output konsol terminal, dan penjelasan konsep mendalam.

---

## ✨ Fitur-Fitur Utama

1. **8 Studi Kasus Bawaan Terlengkap**:
   - 🛒 **Sistem Kasir Swalayan**: Percabangan `if-else` bertingkat, perhitungan diskon berjenjang, dan validasi uang kembalian.
   - 🏧 **Simulasi Mesin ATM**: Perulangan `do-while`, pemilihan menu `switch-case`, keamanan batas input PIN, dan saldo minimal mengendap.
   - 📊 **Manajemen Nilai Mahasiswa**: Array 1D, fungsi modular pencari nilai rata-rata, nilai tertinggi & terendah, serta konversi indeks huruf mutu (Grade A-E).
   - 🔍 **Sorting & Searching**: Implementasi algoritma pengurutan **Bubble Sort** dan pencarian cepat **Binary Search** ($O(\log N)$).
   - 💎 **Generator Pola Bintang (Nested Loop)**: Perulangan bersarang 2D untuk membentuk piramida dan simetri belah ketupat (*diamond pattern*).
   - 🚗 **Billing Karcis Parkir**: Tipe data komposit (`struct` Waktu & Kendaraan), perhitungan durasi menit dan pembulatan jam via `ceil()`.
   - 🧮 **Operasi Perkalian Matriks 2D**: Manipulasi array 2 dimensi dengan nested loop 3 lapis untuk perkalian ordo dinamis.
   - 🔁 **Faktorial & Fibonacci Rekursif**: Fungsi rekursi, pemahaman *base case*, dan pencegahan *stack overflow*.

2. **Pencarian Cepat & Filter Interaktif (Live Search)**:
   - Cari judul kasus, topik, atau kata kunci potongan kode program C++ secara langsung (*real-time*).
   - Filter berdasarkan topik: *Percabangan*, *Perulangan*, *Array*, *Fungsi & Rekursi*, *Sorting & Searching*, *Struct*.
   - Filter berdasarkan tingkat kesulitan: *Mudah*, *Sedang*, *Sulit*.

3. **Tampilan Kode & Konsol Terminal Modern**:
   - *Syntax Highlighting* C++ otomatis menggunakan **Highlight.js** (Atom One Dark theme).
   - Tombol **"Salin Kode"** satu klik dengan animasi konfirmasi.
   - Kotak output konsol bertema terminal bergaya macOS/Linux.

4. **CRUD Dinamis & LocalStorage**:
   - Tambah studi kasus baru buatan sendiri secara instan melalui modal form.
   - Edit dan Hapus studi kasus kapan saja.
   - Data otomatis tersimpan di memori browser (**LocalStorage**), sehingga data Anda tidak akan hilang saat halaman direfresh atau browser ditutup.

5. **Backup & Restore (Ekspor / Impor JSON)**:
   - Ekspor seluruh koleksi studi kasus Anda ke file `.json` untuk diarsipkan atau dikumpulkan kepada dosen.
   - Impor file JSON untuk memulihkan atau menggabungkan data dari rekan tim.
   - Tombol *Reset* ke setelan awal jika ingin memulihkan studi kasus default.

6. **Desain Modern & Responsif**:
   - Bootstrap 5.3 dengan kartu modern (*modern cards*), *glassmorphism*, dan tipografi rapi.
   - **Mode Gelap / Terang (Dark / Light Mode Toggle)** yang menyesuaikan kenyamanan membaca kode di malam hari.

---

## 📁 Struktur Berkas

```text
uts_alpro/
│
├── index.html          # Pengarah otomatis ke uts.html pada localhost
├── uts.html            # Halaman utama aplikasi blog & katalog studi kasus
├── README.md           # Dokumentasi lengkap proyek
│
├── css/
│   └── style.css       # Kustomisasi CSS, tema gelap/terang, dan terminal box
│
└── js/
    └── app.js          # Logika aplikasi, basis data studi kasus, filter, CRUD, dan localStorage
```

---

## 🚀 Cara Menjalankan Aplikasi

### Opsi 1: Menggunakan Web Server XAMPP (Direkomendasikan)
1. Buka aplikasi **XAMPP Control Panel**.
2. Klik tombol **Start** pada modul **Apache**.
3. Buka browser (Chrome, Edge, Firefox, dll.).
4. Kunjungi tautan berikut di bilah alamat:
   ```text
   http://localhost/uts_alpro/uts.html
   ```
   atau cukup:
   ```text
   http://localhost/uts_alpro/
   ```

### Opsi 2: Langsung Buka di Browser (Tanpa Server)
- Klik dua kali berkas [uts.html](file:///c:/Users/L%20e%20n%20o%20v%20o/Downloads/XAMPP/htdocs/uts_alpro/uts.html) di File Explorer Anda untuk langsung membukanya di browser.

---

## 🛠️ Panduan Menambah Kasus Baru

1. Klik tombol **"+ Tambah Kasus"** di navbar atas atau tombol bulat melayang (*Floating Action Button*) di pojok kanan bawah.
2. Isi formulir:
   - **Judul Studi Kasus**
   - **Kategori Topik** (Percabangan, Perulangan, Array, dll.)
   - **Tingkat Kesulitan** (Mudah / Sedang / Sulit)
   - **Deskripsi Masalah**
   - **Analisis Masalah** (Input, Proses, Output)
   - **Pseudocode**
   - **Source Code C++**
   - **Output Terminal**
   - **Penjelasan Konsep**
3. Klik **"Simpan Studi Kasus"**. Studi kasus baru akan langsung muncul di daftar terdepan dan otomatis tersimpan di LocalStorage!
