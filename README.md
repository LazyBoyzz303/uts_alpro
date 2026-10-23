<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tagihan Air Rumah Tangga | Proyek UTS SSI1144</title>
</head>
<body>
<header class="top"><nav>
<a href="#beranda">Beranda</a><a href="#analisis">Analisis Masalah</a><a href="#modul-a">Modul A</a><a href="#modul-b">Modul B</a><a href="#integrasi">Program Terintegrasi</a><a href="#refleksi">Refleksi</a><a href="#ai">Pernyataan AI</a>
</nav></header>
<main>

<!-- ============ 1. BERANDA ============ -->
<section id="beranda" class="hero">
<p class="course">SSI1144 | Algoritma dan Pengantar Pemrograman | Proyek UTS: From Problem to Program</p>
<h1>Sistem Perhitungan Tagihan Air Rumah Tangga</h1>
<p class="case">Studi Kasus 05, Kelompok <span class="todo">nomor kelompok 5</span></p>
<div class="table-wrap"><table class="meta">
<tr><th>Anggota 1</th><td><span class="todo">Steve Nathanael Intan</span> / <span class="todo">322610012</span> penanggung jawab Modul A</td></tr>
<tr><th>Anggota 2</th><td><span class="todo">Tegar Putra Daniel</span> / <span class="todo">322610013</span> penanggung jawab Modul B</td></tr>
<tr><th>Program Studi</th><td>Sistem Informasi</td></tr>
<tr><th>Bahasa</th><td>C++</td></tr>
<tr><th>Repository</th><td><a href="https://github.com/LazyBoyzz303/uts_alpro"><span class="todo">https://github.com/LazyBoyzz303/uts_alpro</span></a></td></tr>
</table></div>
<p>Program ini membantu petugas perusahaan air menghitung tagihan beberapa pelanggan dengan tarif progresif, biaya administrasi, dan denda keterlambatan, lalu menampilkan rekapitulasi pendapatan dan pemakaian.</p>
</section>

<!-- ============ 2. ANALISIS ============ -->
<section id="analisis">
<h2>Analisis Masalah</h2>
<h3>Latar belakang dan rumusan masalah</h3>
<p>Perusahaan penyedia air perlu menghitung tagihan tiap pelanggan secara adil. Pemakaian yang lebih banyak dikenai tarif per m³ yang lebih tinggi, sehingga perhitungannya tidak boleh sekadar mengalikan seluruh pemakaian dengan satu tarif.</p>
<p><strong>Rumusan masalah:</strong> bagaimana menghitung tagihan dari selisih meter dengan tarif bertingkat, menambahkan biaya administrasi dan denda, serta merekap data banyak pelanggan dalam satu program?</p>
<h3>Ketentuan dan batasan</h3>
<ul>
<li>Tarif: 0-10 m³ Rp2.500; 11-20 m³ Rp4.000; di atas 20 m³ Rp6.000 (progresif).</li>
<li>Biaya administrasi Rp7.500; denda keterlambatan 5% dari biaya pemakaian.</li>
<li>Meter akhir tidak boleh lebih kecil dari meter awal; meter tidak boleh negatif.</li>
<li>Memakai variabel, konstanta, operator, percabangan, dan perulangan; tanpa array, function, class, atau library eksternal.</li>
<li>Program memproses banyak pelanggan dan menyediakan pilihan mengulang atau mengakhiri.</li>
</ul>


<h3>Input-Process-Output</h3>
<div class="table-wrap"><table>
<tr><th>Input</th><th>Proses</th><th>Output</th></tr>
<tr><td>Nomor dan nama pelanggan<br>Meter awal, meter akhir<br>Status terlambat (y/t)<br>Pilihan lanjut (y/t)</td>
<td>Validasi input<br>Pemakaian = akhir - awal<br>Biaya per tingkat tarif (percabangan)<br>Denda dan total tagihan<br>Perulangan per pelanggan<br>Akumulasi rekapitulasi</td>
<td>Rincian tagihan per pelanggan<br>Jumlah pelanggan dan pelanggan terlambat<br>Total dan rata-rata pemakaian<br>Jumlah pelanggan di atas 20 m³<br>Total administrasi, denda, pendapatan<br>Pemakaian tertinggi</td></tr>
</table></div>

<!-- ============ 3. MODUL A ============ -->
<section id="modul-a">
<h2>Modul A: Proses Utama</h2>
<p><strong>Penanggung jawab:</strong> <span class="todo">Steve Nathanael Intan<
/span></p>
<h3>Algoritma deskriptif</h3>
<ol>
<li>Mulai; terima nomor dan nama pelanggan.</li>
<li>Terima meter awal; ulangi sampai berupa angka dan tidak negatif.</li>
<li>Terima meter akhir; ulangi sampai berupa angka dan tidak lebih kecil dari meter awal.</li>
<li>Terima status terlambat; ulangi sampai berisi y atau t.</li>
<li>Hitung pemakaian = meter akhir - meter awal.</li>
<li>Jika pemakaian &le; 10, seluruhnya ditarif Rp2.500.</li>
<li>Jika 10 &lt; pemakaian &le; 20, 10 m³ pertama Rp2.500 dan sisanya Rp4.000.</li>
<li>Jika pemakaian &gt; 20, 10 m³ pertama Rp2.500, 10 m³ berikutnya Rp4.000, sisanya Rp6.000.</li>
<li>Jumlahkan menjadi biaya pemakaian.</li>
<li>Jika terlambat, denda = 5% x biaya pemakaian; jika tidak, denda = 0.</li>
<li>Total tagihan = biaya pemakaian + administrasi + denda; tampilkan rincian.</li>
</ol>
<h3>Pseudocode</h3>
<pre>SELAMA lanjut = 'y' LAKUKAN
   BACA nomorPelanggan, namaPelanggan
   ULANGI BACA meterAwal SAMPAI angka DAN meterAwal &gt;= 0
   ULANGI BACA meterAkhir SAMPAI angka DAN meterAkhir &gt;= meterAwal
   ULANGI BACA terlambat SAMPAI terlambat IN {y,t}
   pemakaian &larr; meterAkhir - meterAwal
   JIKA pemakaian &lt;= BATAS_1 MAKA
      biayaTingkat1 &larr; pemakaian x TARIF_1
   LAIN JIKA pemakaian &lt;= BATAS_2 MAKA
      biayaTingkat1 &larr; BATAS_1 x TARIF_1
      biayaTingkat2 &larr; (pemakaian - BATAS_1) x TARIF_2
   LAIN
      biayaTingkat1 &larr; BATAS_1 x TARIF_1
      biayaTingkat2 &larr; (BATAS_2 - BATAS_1) x TARIF_2
      biayaTingkat3 &larr; (pemakaian - BATAS_2) x TARIF_3
   biayaPemakaian &larr; biayaTingkat1 + biayaTingkat2 + biayaTingkat3
   JIKA terlambat MAKA denda &larr; biayaPemakaian x PERSEN_DENDA / 100
   LAIN denda &larr; 0
   totalTagihan &larr; biayaPemakaian + BIAYA_ADMIN + denda
   TAMPILKAN rincian tagihan
AKHIR SELAMA</pre>
<h3>Flowchart</h3>
<pre class="mermaid">
flowchart TD
  A([Mulai]) --> B[/Input nomor, nama/]
  B --> C[/Input meter awal/]
  C --> D{Angka dan >= 0?}
  D -- Tidak --> C
  D -- Ya --> E[/Input meter akhir/]
  E --> F{Angka dan >= meter awal?}
  F -- Tidak --> E
  F -- Ya --> G[/Input status terlambat/]
  G --> H{y atau t?}
  H -- Tidak --> G
  H -- Ya --> I[pemakaian = akhir - awal]
  I --> J{pemakaian <= 10?}
  J -- Ya --> K[tingkat1 = pemakaian x 2500]
  J -- Tidak --> L{pemakaian <= 20?}
  L -- Ya --> M[tingkat1 = 25000<br>tingkat2 = pemakaian-10 x 4000]
  L -- Tidak --> N[tingkat1 = 25000, tingkat2 = 40000<br>tingkat3 = pemakaian-20 x 6000]
  K --> O[biayaPemakaian = jumlah tingkat]
  M --> O
  N --> O
  O --> P{Terlambat?}
  P -- Ya --> Q[denda = 5% x biayaPemakaian]
  P -- Tidak --> R[denda = 0]
  Q --> S[total = biaya + admin + denda]
  R --> S
  S --> T[/Tampilkan rincian tagihan/]
  T --> U([Ke Modul B])
</pre>
<h3>Source code dan penjelasan</h3>
<pre data-src="modul_a.cpp">Memuat modul_a.cpp ...</pre>
<p>Percabangan <code>if / else if / else</code> membuat tarif progresif, sehingga pemakaian 25 m³ dihitung per tingkat. Perulangan <code>do-while</code> menahan program sampai input valid, dan <code>cin.clear()</code> bersama <code>cin.ignore()</code> mencegah program macet saat pengguna mengetik huruf.</p>
<h3>Hasil eksekusi dan pengujian</h3>
<div class="shot"><span class="todo">[Tempel tangkapan layar hasil eksekusi Modul A: &lt;img src="gambar/modul_a.png" alt="Hasil Modul A"&gt;]</span></div>
</section>

