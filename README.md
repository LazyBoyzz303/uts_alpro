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
<p class="course">SSI1144 | Algoritma dan Pengantar Pemrograman | Proyek UTS</p>
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
<p><strong>Penanggung jawab:</strong> <span class="todo">Steve Nathanael Intan</p>
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

<section id="modul-b">
<h2>Modul B: Rekapitulasi</h2>
<p><strong>Penanggung jawab:</strong> <span class="todo">[Nama Anggota 2]</span></p>
<h3>Algoritma deskriptif</h3>
<ol>
<li>Siapkan seluruh penghitung dan total dengan nilai 0; pemakaianTertinggi = 0, pelangganTertinggi = "-".</li>
<li>Untuk setiap pelanggan, tambahkan jumlahPelanggan; jika terlambat, tambahkan jumlahTerlambat.</li>
<li>Tambahkan pemakaian ke totalPemakaian; jika pemakaian &gt; 20, tambahkan jumlahDiAtas20.</li>
<li>Jika pemakaian &gt; pemakaianTertinggi, simpan pemakaian dan nama pelanggannya.</li>
<li>Tambahkan administrasi, denda, dan total tagihan ke total masing-masing.</li>
<li>Setelah perulangan selesai, hitung rata-rata jika jumlahPelanggan &gt; 0, lalu tampilkan rekapitulasi.</li>
</ol>
<h3>Pseudocode</h3>
<pre>jumlahPelanggan &larr; jumlahPelanggan + 1
JIKA terlambat MAKA jumlahTerlambat &larr; jumlahTerlambat + 1
totalPemakaian &larr; totalPemakaian + pemakaian
JIKA pemakaian &gt; 20 MAKA jumlahDiAtas20 &larr; jumlahDiAtas20 + 1
JIKA pemakaian &gt; pemakaianTertinggi MAKA
   pemakaianTertinggi &larr; pemakaian
   pelangganTertinggi &larr; namaPelanggan
totalAdmin &larr; totalAdmin + BIAYA_ADMIN
totalDenda &larr; totalDenda + denda
totalPendapatan &larr; totalPendapatan + totalTagihan
...
JIKA jumlahPelanggan &gt; 0 MAKA rataRata &larr; totalPemakaian / jumlahPelanggan
TAMPILKAN rekapitulasi</pre>
<h3>Flowchart</h3>
<pre class="mermaid">
flowchart TD
  A([Dari Modul A]) --> B[jumlahPelanggan + 1]
  B --> C{Terlambat?}
  C -- Ya --> D[jumlahTerlambat + 1]
  C -- Tidak --> E
  D --> E[totalPemakaian += pemakaian]
  E --> F{pemakaian > 20?}
  F -- Ya --> G[jumlahDiAtas20 + 1]
  F -- Tidak --> H
  G --> H{pemakaian > tertinggi?}
  H -- Ya --> I[simpan tertinggi dan nama]
  H -- Tidak --> J
  I --> J[totalAdmin, totalDenda, totalPendapatan += nilai]
  J --> K([Selesai Modul B])
</pre>
<h3>Source code dan penjelasan</h3>
<pre data-src="modul_b.cpp">Memuat modul_b.cpp ...</pre>
<p>Agar bisa diuji sendiri, Modul B menerima pemakaian dan biaya pemakaian secara manual. Pada program final, nilai ini otomatis berasal dari Modul A. Pengecekan <code>jumlahPelanggan &gt; 0</code> mencegah pembagian dengan nol.</p>
<h3>Hasil eksekusi dan pengujian</h3>
<div class="shot"><span class="todo">[Tempel tangkapan layar hasil eksekusi Modul B]</span></div>
</section>
 
<!-- ============ 5. INTEGRASI ============ -->
<section id="integrasi">
<h2>Program Terintegrasi</h2>
<h3>Proses integrasi</h3>
<p>Kode Modul A dan Modul B digabung dalam satu perulangan <code>while</code>. Di setiap putaran, Modul A menghitung tagihan, lalu Modul B langsung memperbarui rekapitulasi dengan nilai yang sama. Setelah itu program menanyakan apakah petugas ingin lanjut; jika tidak, rekapitulasi ditampilkan.</p>

<h3>Hasil eksekusi</h3>
<div class="shot"><span class="todo">[Tempel tangkapan layar program final: rincian tagihan dan rekapitulasi]</span></div>
 
<h3>Tabel pengujian</h3>
<div class="table-wrap"><table>
<tr><th>No.</th><th>Skenario</th><th>Data masukan</th><th>Hasil yang diharapkan</th><th>Hasil aktual</th><th>Status</th></tr>
<tr><td>1</td><td>Input normal</td><td>100 &rarr; 105, t</td><td>5 m³; total Rp20.000</td><td class="todo">...</td><td class="todo">...</td></tr>
<tr><td>2</td><td>Nilai nol</td><td>50 &rarr; 50, t</td><td>0 m³; total Rp7.500</td><td class="todo">...</td><td class="todo">...</td></tr>
<tr><td>3</td><td>Batas tingkat 1</td><td>0 &rarr; 10, t</td><td>Total Rp32.500</td><td class="todo">...</td><td class="todo">...</td></tr>
<tr><td>4</td><td>Awal tingkat 2</td><td>0 &rarr; 11, t</td><td>Total Rp36.500</td><td class="todo">...</td><td class="todo">...</td></tr>
<tr><td>5</td><td>Batas tingkat 2</td><td>0 &rarr; 20, t</td><td>Total Rp72.500</td><td class="todo">...</td><td class="todo">...</td></tr>
<tr><td>6</td><td>Awal tingkat 3</td><td>0 &rarr; 21, t</td><td>Total Rp78.500</td><td class="todo">...</td><td class="todo">...</td></tr>
<tr><td>7</td><td>Progresif + terlambat</td><td>0 &rarr; 25, y</td><td>Denda Rp4.750; total Rp107.250</td><td class="todo">...</td><td class="todo">...</td></tr>
<tr><td>8</td><td>Terlambat tingkat 2</td><td>10 &rarr; 25, y</td><td>Denda Rp2.250; total Rp54.750</td><td class="todo">...</td><td class="todo">...</td></tr>
<tr><td>9</td><td>Meter akhir &lt; awal</td><td>100 &rarr; 90</td><td>Ditolak, minta input ulang</td><td class="todo">...</td><td class="todo">...</td></tr>
<tr><td>10</td><td>Meter negatif</td><td>-5</td><td>Ditolak, minta input ulang</td><td class="todo">...</td><td class="todo">...</td></tr>
<tr><td>11</td><td>Input huruf</td><td>"abc"</td><td>Ditolak, program tidak berhenti</td><td class="todo">...</td><td class="todo">...</td></tr>
</table></div>
 
<h3>Trace table percabangan</h3>
<p>Data: pemakaian = 25, terlambat = y.</p>
<div class="table-wrap"><table>
<tr><th>Langkah</th><th>Kondisi</th><th>Hasil</th><th>Aksi</th><th>Nilai</th></tr>
<tr><td>1</td><td>25 &le; 10</td><td>Salah</td><td>lanjut</td><td>-</td></tr>
<tr><td>2</td><td>25 &le; 20</td><td>Salah</td><td>masuk else</td><td>-</td></tr>
<tr><td>3</td><td>-</td><td>-</td><td>biayaTingkat1 = 10 x 2500</td><td>25.000</td></tr>
<tr><td>4</td><td>-</td><td>-</td><td>biayaTingkat2 = 10 x 4000</td><td>40.000</td></tr>
<tr><td>5</td><td>-</td><td>-</td><td>biayaTingkat3 = 5 x 6000</td><td>30.000</td></tr>
<tr><td>6</td><td>-</td><td>-</td><td>biayaPemakaian</td><td>95.000</td></tr>
<tr><td>7</td><td>terlambat?</td><td>Benar</td><td>denda = 95.000 x 5/100</td><td>4.750</td></tr>
<tr><td>8</td><td>-</td><td>-</td><td>totalTagihan = 95.000 + 7.500 + 4.750</td><td>107.250</td></tr>
</table></div>
 
<h3>Trace table perulangan</h3>
<p>Data: A = 5 m³ tepat waktu, B = 25 m³ terlambat, C = 15 m³ tepat waktu.</p>
<div class="table-wrap"><table>
<tr><th>Iterasi</th><th>pemakaian</th><th>jumlahPelanggan</th><th>totalPemakaian</th><th>pemakaianTertinggi</th><th>jumlahTerlambat</th><th>jumlahDiAtas20</th><th>totalDenda</th><th>totalPendapatan</th><th>lanjut</th></tr>
<tr><td>Awal</td><td>-</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>y</td></tr>
<tr><td>1 (A)</td><td>5</td><td>1</td><td>5</td><td>5</td><td>0</td><td>0</td><td>0</td><td>20.000</td><td>y</td></tr>
<tr><td>2 (B)</td><td>25</td><td>2</td><td>30</td><td>25</td><td>1</td><td>1</td><td>4.750</td><td>127.250</td><td>y</td></tr>
<tr><td>3 (C)</td><td>15</td><td>3</td><td>45</td><td>25</td><td>1</td><td>1</td><td>4.750</td><td>179.750</td><td>t</td></tr>
</table></div>
<p>Rekap akhir: rata-rata 45 / 3 = 15,00 m³; total administrasi Rp22.500; pemakaian tertinggi 25 m³ (B).</p>
 
<h3>Daftar kesalahan dan perbaikan</h3>
<div class="table-wrap"><table>
<tr><th>No.</th><th>Kesalahan</th><th>Perbaikan</th></tr>
<tr><td>1</td><td>Tarif dikalikan ke seluruh pemakaian</td><td>Dihitung per tingkat dengan percabangan</td></tr>
<tr><td>2</td><td>Program macet saat input huruf</td><td>Menambah <code>cin.clear()</code> dan <code>cin.ignore()</code></td></tr>
<tr><td>3</td><td><code>getline</code> terlewat setelah <code>cin &gt;&gt;</code></td><td>Menambah <code>cin.ignore()</code></td></tr>
</td></tr>
</table></div>
</section>
 
<section id="ai">
<h2>Pernyataan Penggunaan AI</h2>
<p>Isi dengan jujur sesuai penggunaan kelompok. Bagian yang tidak dipahami tidak boleh dikumpulkan.</p>
<div class="table-wrap"><table>
<tr><th>Nama alat AI</th><td class="todo">Claude</td></tr>
<tr><th>Tujuan penggunaan</th><td class="todo">Membantu menyusun draf analisis masalah, algoritma, pseudocode, flowchart, source code C++, dan tabel pengujian untuk Studi Kasus 05, serta menyusun kerangka halaman GitHub Pages.</td></tr>
<tr><th>Prompt utama</th><td class="todo">dari pdf ini buatkan bagian study kasus 5. Meminta source code dipisah menjadi modul_a.cpp, modul_b.cpp, dan program_final.cpp. Meminta kode HTML untuk halaman GitHub Pages sesuai struktur di dokumen proyek. buatkan code htmlnya untuk analisis, pernyataan ai, integrasi, refleksi, dan flowchart</td></tr>
<tr><th>Bagian jawaban yang digunakan</th><td class="todo">code (modul a, modul b, program final, analisis, pernyataan ai, integrasi, refleksi, flowchart, template kerangka github, pseudocode)</td></tr>
<tr><th>Perubahan yang dilakukan mahasiswa</th><td class="todo">mengganti isi(kerangka halaman github, pernyataan ai, refleksi, analisis), menambah skenario uji.</td></tr>
<tr><th>Hasil verifikasi mahasiswa</th><td class="todo">menjalankan program dengan 3 skenario uji, mencocokkan hasil dengan hitungan manual, mencoba mengubah batas tarif dan menjalankan ulang.</td></tr>
</table></div>
</section>
 
</main>
<footer>Proyek UTS SSI1144 Algoritma dan Pengantar Pemrograman | Universitas Ma Chung</footer>
 
<script>
// Memuat file .cpp dari repository untuk setiap blok kode
document.querySelectorAll('pre[data-src]').forEach(function (el) {
  var file = el.getAttribute('data-src');
  fetch(file).then(function (r) {
    if (!r.ok) throw new Error(r.status);
    return r.text();
  }).then(function (t) { el.textContent = t; })
    .catch(function () {
      el.textContent = 'Gagal memuat ' + file + '. Pastikan file ada di folder yang sama dengan index.html.';
    });
});
</script>
<script src="https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js"></script>
<script>
if (window.mermaid) { mermaid.initialize({ startOnLoad: true, theme: 'default' }); }
</script>
</body>
</html>
 
