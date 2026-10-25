# Sistem Perhitungan Tagihan Air Rumah Tangga

**SSI1144 · Algoritma dan Pengantar Pemrograman** Studi Kasus 05 | Program Studi Sistem Informasi | Universitas Ma Chung

---

## Deskripsi

Program C++ untuk menghitung tagihan air pelanggan dengan tarif progresif, biaya administrasi, dan denda keterlambatan, lalu merekap pemakaian dan pendapatan. Program berjalan via console/terminal.

## Anggota Kelompok

| Nama | NIM | Modul |
|------|-----|-------|
| [Nama Anggota 1] | [NIM] | Modul A |
| [Nama Anggota 2] | [NIM] | Modul B |

## Struktur Repository

```
UTS_alpro_tagihan_air/
├── index.html              Beranda GitHub Pages
├── analisis.html           Analisis Masalah
├── modul-a.html            Modul A
├── modul-b.html            Modul B
├── integrasi.html          Program Terintegrasi
├── flowchart.html          Flowchart
├── refleksi.html           Refleksi
├── pernyataan-ai.html      Pernyataan Penggunaan AI
├── README.md
├── assets/
│   ├── css/style.css
│   ├── flowchart/
│   └── screenshot/
├── src/
│   ├── modul_a.cpp
│   ├── modul_b.cpp
│   └── program_final.cpp
└── docs/
    ├── pseudocode-modul-a.txt
    └── pseudocode-modul-b.txt
```

## Cara Menjalankan Program

```
# Modul A (Proses Utama)
g++ -o modul_a src/modul_a.cpp -std=c++17
./modul_a

# Modul B (Rekapitulasi)
g++ -o modul_b src/modul_b.cpp -std=c++17
./modul_b

# Program terintegrasi
g++ -o program_final src/program_final.cpp -std=c++17
./program_final
```

## GitHub Pages

> URL: `https://<username>.github.io/<repo>/`

## Ketentuan Tarif

| Pemakaian | Tarif per m³ |
|-----------|--------------|
| 0-10 m³ | Rp2.500 |
| 11-20 m³ | Rp4.000 |
| di atas 20 m³ | Rp6.000 |

Biaya administrasi Rp7.500 · Denda keterlambatan 5% dari biaya pemakaian (tanpa administrasi). Tarif dihitung progresif per tingkat.
