/**
 * Alpro C++ Case Studies Blog
 * JavaScript Engine for Filtering, Searching, CRUD, LocalStorage & Syntax Highlighting
 */

// Initial Dataset: 8 Comprehensive C++ Case Studies
const defaultCaseStudies = [
  {
    id: "kasus-1",
    title: "Sistem Kasir & Perhitungan Diskon Swalayan",
    category: "Percabangan",
    difficulty: "Mudah",
    summary: "Menghitung total tagihan belanja kasir dengan skema diskon berjenjang dan mencetak struk transaksi rapi.",
    description: "Sebuah minimarket memberikan diskon kepada pelanggan berdasarkan total belanja:\n- Belanja >= Rp 500.000: Diskon 20%\n- Belanja >= Rp 250.000: Diskon 10%\n- Belanja >= Rp 100.000: Diskon 5%\n- Belanja < Rp 100.000: Tidak ada diskon\n\nProgram membaca total belanja dan uang yang dibayarkan pembeli, lalu menghitung potongan diskon, total akhir yang harus dibayar, serta uang kembalian.",
    analysis: "• Input : Total harga belanjaan (double), Uang pembayaran (double)\n• Proses : Menentukan persentase diskon dengan if-else if, menghitung nominal diskon dan kembalian\n• Output : Rincian struk (Total Belanja, Diskon %, Potongan Rp, Total Bayar, Uang Bayar, Kembalian)",
    pseudocode: `Deklarasi:
    totalBelanja, diskonPersen, jumlahDiskon, totalBayar, bayar, kembalian : Real

Algoritma:
    Input totalBelanja
    IF totalBelanja >= 500000 THEN
        diskonPersen = 0.20
    ELSE IF totalBelanja >= 250000 THEN
        diskonPersen = 0.10
    ELSE IF totalBelanja >= 100000 THEN
        diskonPersen = 0.05
    ELSE
        diskonPersen = 0.0
    ENDIF

    jumlahDiskon = totalBelanja * diskonPersen
    totalBayar = totalBelanja - jumlahDiskon

    Input bayar
    kembalian = bayar - totalBayar

    Output rincian struk belanja`,
    code: `#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    double totalBelanja, diskonPersen = 0.0;
    double jumlahDiskon, totalBayar, bayar, kembalian;

    cout << "========================================" << endl;
    cout << "       PROGRAM KASIR MINIMARKET        " << endl;
    cout << "========================================" << endl;

    cout << "Masukkan total belanja (Rp): ";
    cin >> totalBelanja;

    // Evaluasi diskon berjenjang
    if (totalBelanja >= 500000) {
        diskonPersen = 0.20; // 20%
    } else if (totalBelanja >= 250000) {
        diskonPersen = 0.10; // 10%
    } else if (totalBelanja >= 100000) {
        diskonPersen = 0.05; // 5%
    } else {
        diskonPersen = 0.0;
    }

    jumlahDiskon = totalBelanja * diskonPersen;
    totalBayar = totalBelanja - jumlahDiskon;

    cout << fixed << setprecision(2);
    cout << "\\n--- RINCIAN PEMBAYARAN ---" << endl;
    cout << "Total Belanja   : Rp " << totalBelanja << endl;
    cout << "Diskon (" << (diskonPersen * 100) << "%)   : Rp " << jumlahDiskon << endl;
    cout << "Total Tagihan   : Rp " << totalBayar << endl;
    cout << "----------------------------------------" << endl;

    do {
        cout << "Nominal Bayar   : Rp ";
        cin >> bayar;
        if (bayar < totalBayar) {
            cout << ">> Uang Anda kurang Rp " << (totalBayar - bayar) << "! Silakan masukkan uang yang cukup.\\n";
        }
    } while (bayar < totalBayar);

    kembalian = bayar - totalBayar;
    cout << "Kembalian       : Rp " << kembalian << endl;
    cout << "========================================" << endl;
    cout << "  Terima kasih telah berbelanja di sini!  " << endl;

    return 0;
}`,
    output: `========================================
       PROGRAM KASIR MINIMARKET        
========================================
Masukkan total belanja (Rp): 350000

--- RINCIAN PEMBAYARAN ---
Total Belanja   : Rp 350000.00
Diskon (10.00%) : Rp 35000.00
Total Tagihan   : Rp 315000.00
----------------------------------------
Nominal Bayar   : Rp 300000
>> Uang Anda kurang Rp 15000.00! Silakan masukkan uang yang cukup.
Nominal Bayar   : Rp 350000
Kembalian       : Rp 35000.00
========================================
  Terima kasih telah berbelanja di sini!`,
    explanation: "1. Menggunakan library `<iomanip>` dengan `setprecision` untuk merapikan angka desimal mata uang.\n2. Struktur percabangan `if - else if` mengevaluasi kondisi batas diskon dari nilai terbesar ke terkecil.\n3. Dilengkapi validasi loop `do-while` agar pembeli tidak bisa membayar kurang dari total tagihan."
  },
  {
    id: "kasus-2",
    title: "Simulasi Menu Mesin ATM & Manajemen Saldo",
    category: "Perulangan",
    difficulty: "Sedang",
    summary: "Aplikasi konsol transaksi ATM dengan fitur autentikasi PIN, cek saldo, setor tunai, dan penarikan bersyarat.",
    description: "Membuat simulasi mesin ATM bank dengan keamanan PIN (maksimal 3 kali percobaan salah). Jika PIN valid, pengguna disuguhkan menu interaktif berulang:\n1. Cek Saldo\n2. Setor Uang Tunai\n3. Tarik Uang Tunai (dengan batas saldo minimal Rp 50.000)\n4. Keluar Sistem.",
    analysis: "• Input : PIN nasabah (int), Pilihan menu (int), Jumlah setor/tarik (double)\n• Proses : Validasi PIN max 3 kali, switch-case pemilihan fitur, perulangan do-while sampai memilih keluar\n• Output : Saldo terkini, pesan status transaksi berhasil/gagal",
    pseudocode: `Inisialisasi:
    PIN_BENAR = 123456
    saldo = 500000
    kesempatan = 3

Perulangan PIN:
    WHILE kesempatan > 0
        Input pin
        IF pin == PIN_BENAR THEN break
        kesempatan = kesempatan - 1
    ENDWHILE

Perulangan Menu (do - while):
    Tampilkan Menu (1. Cek, 2. Setor, 3. Tarik, 4. Keluar)
    Input pilihan
    SWITCH pilihan:
        CASE 1: Tampilkan saldo
        CASE 2: Input nominal, saldo = saldo + nominal
        CASE 3: Input nominal, jika (saldo - nominal) >= 50000 kurangi saldo, else tolak
        CASE 4: Keluar
    UNTIL pilihan == 4`,
    code: `#include <iostream>
using namespace std;

int main() {
    const int PIN_BENAR = 123456;
    const double SALDO_MINIMAL = 50000;
    int pinInput, percobaan = 0;
    bool loginBerhasil = false;
    double saldo = 500000; // Saldo awal Rp 500.000
    int menu;

    cout << "========================================" << endl;
    cout << "          BANK SENTRAL INDONESIA        " << endl;
    cout << "========================================" << endl;

    // Autentikasi PIN
    while (percobaan < 3) {
        cout << "Masukkan 6 digit PIN Anda: ";
        cin >> pinInput;

        if (pinInput == PIN_BENAR) {
            loginBerhasil = true;
            break;
        } else {
            percobaan++;
            cout << "PIN Salah! Sisa percobaan: " << (3 - percobaan) << endl;
        }
    }

    if (!loginBerhasil) {
        cout << "\\n[PERINGATAN] Rekening Anda diblokir demi keamanan." << endl;
        return 0;
    }

    // Menu Transaksi
    do {
        cout << "\\n========= MENU TRANSAKSI ATM =========" << endl;
        cout << "1. Cek Saldo" << endl;
        cout << "2. Setor Tunai" << endl;
        cout << "3. Tarik Tunai" << endl;
        cout << "4. Keluar" << endl;
        cout << "Pilih opsi [1-4]: ";
        cin >> menu;

        switch (menu) {
            case 1:
                cout << "\\n[INFO] Saldo Anda saat ini: Rp " << saldo << endl;
                break;
            case 2: {
                double setor;
                cout << "\\nMasukkan nominal setor tunai: Rp ";
                cin >> setor;
                if (setor > 0) {
                    saldo += setor;
                    cout << "[SUKSES] Setoran berhasil. Saldo baru: Rp " << saldo << endl;
                } else {
                    cout << "[GAGAL] Jumlah setoran tidak valid!" << endl;
                }
                break;
            }
            case 3: {
                double tarik;
                cout << "\\nMasukkan nominal penarikan: Rp ";
                cin >> tarik;
                if (tarik <= 0) {
                    cout << "[GAGAL] Nominal tidak valid!" << endl;
                } else if ((saldo - tarik) < SALDO_MINIMAL) {
                    cout << "[GAGAL] Saldo tidak mencukupi! Minimal saldo mengendap adalah Rp " << SALDO_MINIMAL << endl;
                } else {
                    saldo -= tarik;
                    cout << "[SUKSES] Silakan ambil uang Anda. Sisa saldo: Rp " << saldo << endl;
                }
                break;
            }
            case 4:
                cout << "\\nTerima kasih telah menggunakan layanan ATM kami. Jangan lupa ambil kartu Anda!\\n";
                break;
            default:
                cout << "\\n[ERROR] Pilihan menu tidak ditemukan!" << endl;
        }
    } while (menu != 4);

    return 0;
}`,
    output: `========================================
          BANK SENTRAL INDONESIA        
========================================
Masukkan 6 digit PIN Anda: 123456

========= MENU TRANSAKSI ATM =========
1. Cek Saldo
2. Setor Tunai
3. Tarik Tunai
4. Keluar
Pilih opsi [1-4]: 1

[INFO] Saldo Anda saat ini: Rp 500000

========= MENU TRANSAKSI ATM =========
1. Cek Saldo
2. Setor Tunai
3. Tarik Tunai
4. Keluar
Pilih opsi [1-4]: 3

Masukkan nominal penarikan: Rp 470000
[GAGAL] Saldo tidak mencukupi! Minimal saldo mengendap adalah Rp 50000

========= MENU TRANSAKSI ATM =========
1. Cek Saldo
2. Setor Tunai
3. Tarik Tunai
4. Keluar
Pilih opsi [1-4]: 4

Terima kasih telah menggunakan layanan ATM kami. Jangan lupa ambil kartu Anda!`,
    explanation: "1. Keamanan berbasis loop: Membatasi input PIN hingga maksimal 3 kali menggunakan while-loop.\n2. State Management: Nilai saldo diperbarui secara dinamis di dalam scope perulangan `do-while`.\n3. Aturan Bisnis: Memastikan batasan saldo mengendap (`SALDO_MINIMAL`) tidak dilanggar."
  },
  {
    id: "kasus-3",
    title: "Pengolahan Nilai Mahasiswa, Grade & Statistika",
    category: "Array",
    difficulty: "Sedang",
    summary: "Input array nilai mahasiswa berukuran dinamis, menghitung rata-rata kelas, mencari nilai tertinggi & terendah, serta konversi huruf mutu.",
    description: "Dosen membutuhkan program untuk mengolah kumpulan nilai ujian mata kuliah Algoritma dan Pemrograman. Program mampu menerima banyak data nilai mahasiswa (N), menampungnya dalam array satu dimensi, menghitung nilai rata-rata, mencari nilai maksimum & minimum, serta memetakan grade A, B, C, D, dan E.",
    analysis: "• Input : Jumlah mahasiswa N, deretan N nilai ujian (float)\n• Proses : Penjumlahan elemen array, pembagian rata-rata, algoritma min-max traversal, mapping grade\n• Output : Tabel nilai mahasiswa, rata-rata kelas, nilai tertinggi & terendah, persentase kelulusan",
    pseudocode: `Input N
Deklarasikan array nilai[N]

total = 0
FOR i = 0 TO N-1 DO:
    Input nilai[i]
    total = total + nilai[i]
ENDFOR

rataRata = total / N
maxNilai = nilai[0], minNilai = nilai[0]

FOR i = 1 TO N-1 DO:
    IF nilai[i] > maxNilai THEN maxNilai = nilai[i]
    IF nilai[i] < minNilai THEN minNilai = nilai[i]
ENDFOR

Cetak rekap nilai, rata-rata, max, dan min.`,
    code: `#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

// Fungsi untuk menentukan grade
char hitungGrade(float n) {
    if (n >= 85) return 'A';
    if (n >= 75) return 'B';
    if (n >= 65) return 'C';
    if (n >= 50) return 'D';
    return 'E';
}

int main() {
    int n;
    cout << "========================================" << endl;
    cout << "     SISTEM PENGOLAHAN NILAI KELAS      " << endl;
    cout << "========================================" << endl;

    cout << "Masukkan jumlah mahasiswa: ";
    cin >> n;

    if (n <= 0) {
        cout << "Jumlah mahasiswa harus lebih dari 0!" << endl;
        return 0;
    }

    string nama[n];
    float nilai[n];
    float total = 0;

    for (int i = 0; i < n; i++) {
        cout << "\\nMahasiswa ke-" << (i + 1) << ":" << endl;
        cout << "Nama           : ";
        cin.ignore();
        getline(cin, nama[i]);
        cout << "Nilai Ujian    : ";
        cin >> nilai[i];

        total += nilai[i];
    }

    float rataRata = total / n;
    float maxNilai = nilai[0];
    float minNilai = nilai[0];
    string mhsTertinggi = nama[0];
    string mhsTerendah = nama[0];

    for (int i = 1; i < n; i++) {
        if (nilai[i] > maxNilai) {
            maxNilai = nilai[i];
            mhsTertinggi = nama[i];
        }
        if (nilai[i] < minNilai) {
            minNilai = nilai[i];
            mhsTerendah = nama[i];
        }
    }

    // Tampilkan tabel rekap
    cout << "\\n==================================================" << endl;
    cout << left << setw(5) << "No" 
         << setw(20) << "Nama" 
         << setw(12) << "Nilai" 
         << setw(8) << "Grade" << endl;
    cout << "==================================================" << endl;

    for (int i = 0; i < n; i++) {
        cout << left << setw(5) << (i + 1)
             << setw(20) << nama[i]
             << fixed << setprecision(2) << setw(12) << nilai[i]
             << setw(8) << hitungGrade(nilai[i]) << endl;
    }
    cout << "==================================================" << endl;

    cout << "\\n--- STATISTIK KELAS ---" << endl;
    cout << "Rata-rata Kelas : " << fixed << setprecision(2) << rataRata << endl;
    cout << "Nilai Tertinggi : " << maxNilai << " (" << mhsTertinggi << ")" << endl;
    cout << "Nilai Terendah  : " << minNilai << " (" << mhsTerendah << ")" << endl;

    return 0;
}`,
    output: `========================================
     SISTEM PENGOLAHAN NILAI KELAS      
========================================
Masukkan jumlah mahasiswa: 3

Mahasiswa ke-1:
Nama           : Budi Santoso
Nilai Ujian    : 88.5

Mahasiswa ke-2:
Nama           : Siti Nurhaliza
Nilai Ujian    : 92.0

Mahasiswa ke-3:
Nama           : Ahmad Fauzi
Nilai Ujian    : 64.0

==================================================
No   Nama                Nilai       Grade   
==================================================
1    Budi Santoso        88.50       A       
2    Siti Nurhaliza      92.00       A       
3    Ahmad Fauzi         64.00       D       
==================================================

--- STATISTIK KELAS ---
Rata-rata Kelas : 81.50
Nilai Tertinggi : 92.00 (Siti Nurhaliza)
Nilai Terendah  : 64.00 (Ahmad Fauzi)`,
    explanation: "1. Penggunaan array 1 dimensi paralel untuk menampung data nama (`string`) dan nilai (`float`).\n2. Algoritma single-pass traversal linear untuk mencari nilai maksimum dan minimum secara efisien (O(N)).\n3. Penggunaan fungsi modular `hitungGrade()` untuk memisahkan logika konversi nilai angka ke huruf mutu."
  },
  {
    id: "kasus-4",
    title: "Pengurutan (Bubble Sort) & Pencarian Biner (Binary Search)",
    category: "Sorting & Searching",
    difficulty: "Sedang",
    summary: "Implementasi algoritma Bubble Sort untuk mengurutkan kumpulan angka acak, dilanjutkan pencarian posisi data via Binary Search.",
    description: "Seringkali data yang belum berurutan sulit untuk dicari dengan cepat. Kasus ini mendemonstrasikan proses pengurutan kumpulan data integer secara Ascending (menaik) dengan algoritma Bubble Sort, kemudian melakukan pencarian target nilai menggunakan Binary Search (pencarian biner O(log N)).",
    analysis: "• Input : Jumlah elemen data, elemen array integer tak berurut, angka yang dicari (key)\n• Proses : Bubble sort dengan double loop dan swap, Binary search dengan pointer left, right, mid\n• Output : Kondisi array sebelum diurutkan, setelah diurutkan, dan indeks ditemukannya data",
    pseudocode: `Algoritma BubbleSort(A, n):
    FOR i = 0 TO n-2 DO
        FOR j = 0 TO n-i-2 DO
            IF A[j] > A[j+1] THEN
                SWAP(A[j], A[j+1])
            ENDIF
        ENDFOR
    ENDFOR

Algoritma BinarySearch(A, left, right, key):
    WHILE left <= right DO
        mid = (left + right) / 2
        IF A[mid] == key THEN RETURN mid
        IF A[mid] < key THEN left = mid + 1
        ELSE right = mid - 1
    ENDWHILE
    RETURN -1 (tidak ditemukan)`,
    code: `#include <iostream>
using namespace std;

// Fungsi Bubble Sort
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        bool adaTukar = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Tukar elemen
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                adaTukar = true;
            }
        }
        // Optimalisasi: jika putaran ini tidak ada pertukaran, array sudah rapi
        if (!adaTukar) break;
    }
}

// Fungsi Binary Search
int binarySearch(int arr[], int n, int target) {
    int kiri = 0, kanan = n - 1;
    while (kiri <= kanan) {
        int tengah = kiri + (kanan - kiri) / 2;

        if (arr[tengah] == target) {
            return tengah; // Ditemukan di indeks tengah
        }
        if (arr[tengah] < target) {
            kiri = tengah + 1; // Cari ke paruh kanan
        } else {
            kanan = tengah - 1; // Cari ke paruh kiri
        }
    }
    return -1; // Tidak ditemukan
}

void cetakArray(int arr[], int n) {
    cout << "[ ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << "]" << endl;
}

int main() {
    int n;
    cout << "========================================" << endl;
    cout << "     BUBBLE SORT & BINARY SEARCH        " << endl;
    cout << "========================================" << endl;

    cout << "Masukkan jumlah elemen: ";
    cin >> n;

    int data[n];
    cout << "Masukkan " << n << " angka acak: ";
    for (int i = 0; i < n; i++) {
        cin >> data[i];
    }

    cout << "\\nArray Awal           : ";
    cetakArray(data, n);

    // Proses Sorting
    bubbleSort(data, n);
    cout << "Array Terurut (Asc)  : ";
    cetakArray(data, n);

    // Proses Searching
    int cari;
    cout << "\\nMasukkan angka yang ingin dicari: ";
    cin >> cari;

    int hasil = binarySearch(data, n, cari);
    if (hasil != -1) {
        cout << ">> SUKSES: Angka " << cari << " ditemukan pada indeks ke-" << hasil << " (posisi ke-" << (hasil + 1) << ")." << endl;
    } else {
        cout << ">> GAGAL: Angka " << cari << " tidak ada di dalam kumpulan data." << endl;
    }

    return 0;
}`,
    output: `========================================
     BUBBLE SORT & BINARY SEARCH        
========================================
Masukkan jumlah elemen: 6
Masukkan 6 angka acak: 45 12 89 23 7 30

Array Awal           : [ 45 12 89 23 7 30 ]
Array Terurut (Asc)  : [ 7 12 23 30 45 89 ]

Masukkan angka yang ingin dicari: 23
>> SUKSES: Angka 23 ditemukan pada indeks ke-2 (posisi ke-3).`,
    explanation: "1. Bubble Sort mengapungkan elemen terbesar ke posisi akhir pada tiap iterasi. Dilengkapi flag `adaTukar` untuk optimalisasi jika array sudah terurut (Best case O(N)).\n2. Binary Search membutuhkan data dalam kondisi terurut (Sorted), membagi ruang pencarian menjadi setengah pada setiap langkah (O(log N))."
  },
  {
    id: "kasus-5",
    title: "Generator Pola Piramida & Berlian Bintang (Nested Loop)",
    category: "Perulangan",
    difficulty: "Mudah",
    summary: "Eksplorasi perulangan bersarang (nested loop) untuk membentuk piramida simetris, segitiga siku-siku, dan pola berlian bintang.",
    description: "Melatih logika ruang dua dimensi dan perulangan bersarang (nested for loop). Program meminta tinggi baris n dari pengguna, lalu secara matematis mengatur pencetakan spasi dan karakter bintang '*' untuk membentuk piramida penuh serta belah ketupat (diamond).",
    analysis: "• Input : Tinggi setengah pola n (integer positif)\n• Proses : Loop luar (baris i dari 1..n), Loop dalam 1 (spasi = n-i), Loop dalam 2 (bintang = 2*i - 1), kemudian loop pembalik untuk bagian bawah berlian\n• Output : Pola geometri bintang di konsol terminal",
    pseudocode: `Input n
// Bagian Atas Piramida:
FOR i = 1 TO n DO
    FOR spasi = 1 TO (n - i) DO
        Cetak " "
    ENDFOR
    FOR bintang = 1 TO (2 * i - 1) DO
        Cetak "*"
    ENDFOR
    Pindah baris (endl)
ENDFOR

// Bagian Bawah Piramida Terbalik:
FOR i = n - 1 DOWNTO 1 DO
    FOR spasi = 1 TO (n - i) DO
        Cetak " "
    ENDFOR
    FOR bintang = 1 TO (2 * i - 1) DO
        Cetak "*"
    ENDFOR
    Pindah baris (endl)
ENDFOR`,
    code: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "========================================" << endl;
    cout << "     GENERATOR POLA BERLIAN BINTANG     " << endl;
    cout << "========================================" << endl;

    cout << "Masukkan tinggi piramida (n): ";
    cin >> n;

    if (n < 1) {
        cout << "Tinggi harus minimal 1!" << endl;
        return 0;
    }

    cout << "\\nHasil Pola Berlian (" << n << " tingkat):\\n" << endl;

    // 1. Bagian Atas (Piramida Tegak)
    for (int i = 1; i <= n; i++) {
        // Cetak spasi depan
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        // Cetak bintang ganjil: (2 * i - 1)
        for (int k = 1; k <= (2 * i - 1); k++) {
            cout << "*";
        }
        cout << endl;
    }

    // 2. Bagian Bawah (Piramida Terbalik)
    for (int i = n - 1; i >= 1; i--) {
        // Cetak spasi depan
        for (int j = 1; j <= n - i; j++) {
            cout << " ";
        }
        // Cetak bintang ganjil
        for (int k = 1; k <= (2 * i - 1); k++) {
            cout << "*";
        }
        cout << endl;
    }

    return 0;
}`,
    output: `========================================
     GENERATOR POLA BERLIAN BINTANG     
========================================
Masukkan tinggi piramida (n): 5

Hasil Pola Berlian (5 tingkat):

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *`,
    explanation: "1. Formula jumlah spasi adalah `(n - i)`, berkurang seiring bertambahnya nomor baris.\n2. Formula jumlah bintang pada setiap baris adalah bilangan ganjil: `(2 * i - 1)`.\n3. Bagian bawah memanfaatkan perulangan mundur `i--` dari `n-1` ke `1` untuk menciptakan efek simetri sempurna."
  },
  {
    id: "kasus-6",
    title: "Sistem Billing & Tiket Parkir Kendaraan (Struct)",
    category: "Struct",
    difficulty: "Sedang",
    summary: "Menghitung durasi parkir dan tarif biaya berdasarkan jenis kendaraan menggunakan Record / Struct dan modular function.",
    description: "Sistem kasir tiket parkir modern menggunakan tipe data bentukan (struct) untuk menyimpan jam & menit masuk serta keluar, plat nomor kendaraan, dan tipe kendaraan (Motor / Mobil). Program menghitung selisih durasi dalam jam (dibulatkan ke atas) dan total biaya berdasarkan tarif per jam.",
    analysis: "• Input : No Plat (string), Jenis (1. Motor, 2. Mobil), Waktu Masuk (jam:menit), Waktu Keluar (jam:menit)\n• Proses : Konversi waktu ke total menit, hitung selisih, konversi ke pembulatan jam, hitung tarif\n• Output : Karcis struk parkir dengan durasi dan total biaya",
    pseudocode: `Struktur Waktu:
    jam, menit : Integer

Struktur Parkir:
    platNomor : String
    jenis : Integer (1=Motor, 2=Mobil)
    masuk, keluar : Waktu

Proses Hitung:
    totalMenitMasuk = (masuk.jam * 60) + masuk.menit
    totalMenitKeluar = (keluar.jam * 60) + keluar.menit
    durasiMenit = totalMenitKeluar - totalMenitMasuk
    durasiJam = ceil(durasiMenit / 60.0)
    
    Biaya = tarifAwal + ((durasiJam - 1) * tarifLanjutan)`,
    code: `#include <iostream>
#include <string>
#include <cmath>
#include <iomanip>

using namespace std;

// Definisi Struct Waktu
struct Waktu {
    int jam;
    int menit;
};

// Definisi Struct Data Kendaraan
struct DataParkir {
    string platNomor;
    int jenisKendaraan; // 1: Motor, 2: Mobil
    Waktu masuk;
    Waktu keluar;
};

int main() {
    DataParkir parkir;

    cout << "==========================================" << endl;
    cout << "      SISTEM BILLING PARKIR MALL          " << endl;
    cout << "==========================================" << endl;

    cout << "Nomor Plat Kendaraan : ";
    cin >> parkir.platNomor;

    cout << "Jenis Kendaraan (1 = Motor, 2 = Mobil): ";
    cin >> parkir.jenisKendaraan;

    cout << "Jam Masuk (Format Jam Menit, misal: 08 30) : ";
    cin >> parkir.masuk.jam >> parkir.masuk.menit;

    cout << "Jam Keluar (Format Jam Menit, misal: 11 15): ";
    cin >> parkir.keluar.jam >> parkir.keluar.menit;

    // Perhitungan total menit
    int totalMenitMasuk = (parkir.masuk.jam * 60) + parkir.masuk.menit;
    int totalMenitKeluar = (parkir.keluar.jam * 60) + parkir.keluar.menit;

    // Antisipasi parkir lintas tengah malam
    if (totalMenitKeluar < totalMenitMasuk) {
        totalMenitKeluar += (24 * 60);
    }

    int selisihMenit = totalMenitKeluar - totalMenitMasuk;
    // Pembulatan ke atas setiap menit yang berjalan
    int durasiJam = ceil((double)selisihMenit / 60.0);
    if (durasiJam == 0) durasiJam = 1;

    // Hitung tarif
    long biaya = 0;
    string jenisNama = "";

    if (parkir.jenisKendaraan == 1) {
        jenisNama = "Sepeda Motor";
        // Tarif: Jam pertama Rp 2.000, berikutnya Rp 1.000/jam
        biaya = 2000 + (durasiJam - 1) * 1000;
    } else {
        jenisNama = "Mobil / Roda Empat";
        // Tarif: Jam pertama Rp 5.000, berikutnya Rp 3.000/jam
        biaya = 5000 + (durasiJam - 1) * 3000;
    }

    // Struk Bukti Parkir
    cout << "\\n==========================================" << endl;
    cout << "           STRUK PARKIR KENDARAAN         " << endl;
    cout << "==========================================" << endl;
    cout << "No Plat      : " << parkir.platNomor << endl;
    cout << "Jenis        : " << jenisNama << endl;
    cout << "Masuk        : " << setfill('0') << setw(2) << parkir.masuk.jam << ":" 
         << setw(2) << parkir.masuk.menit << endl;
    cout << "Keluar       : " << setfill('0') << setw(2) << parkir.keluar.jam << ":" 
         << setw(2) << parkir.keluar.menit << endl;
    cout << "Total Durasi : " << (selisihMenit / 60) << " Jam " << (selisihMenit % 60) 
         << " Menit (Dihitung " << durasiJam << " jam)" << endl;
    cout << "------------------------------------------" << endl;
    cout << "TOTAL BIAYA  : Rp " << biaya << endl;
    cout << "==========================================" << endl;

    return 0;
}`,
    output: `==========================================
      SISTEM BILLING PARKIR MALL          
==========================================
Nomor Plat Kendaraan : B1234XYZ
Jenis Kendaraan (1 = Motor, 2 = Mobil): 2
Jam Masuk (Format Jam Menit, misal: 08 30) : 09 15
Jam Keluar (Format Jam Menit, misal: 11 15): 12 40

==========================================
           STRUK PARKIR KENDARAAN         
==========================================
No Plat      : B1234XYZ
Jenis        : Mobil / Roda Empat
Masuk        : 09:15
Keluar       : 12:40
Total Durasi : 3 Jam 25 Menit (Dihitung 4 jam)
------------------------------------------
TOTAL BIAYA  : Rp 14000
==========================================`,
    explanation: "1. Konsep Struct: Memodelkan tipe data komposit untuk entitas jam-menit dan entitas kendaraan.\n2. Fungsi matematis `ceil()` dari library `<cmath>` untuk membulatkan durasi ke atas jika ada kelebihan menit.\n3. Logika selisih waktu dapat menangani transisi jika parkir melewati pergantian hari."
  },
  {
    id: "kasus-7",
    title: "Operasi Penjumlahan & Perkalian Matriks 2 Dimensi",
    category: "Array",
    difficulty: "Sulit",
    summary: "Memanipulasi array multidimensi 2D untuk melakukan operasi aljabar linier: penjumlahan dan perkalian matriks ordo m x n.",
    description: "Operasi matriks merupakan salah satu dasar pemrograman grafika dan pengolahan citra. Pada studi kasus ini, pengguna memasukkan ordo serta elemen matriks A dan matriks B, kemudian program melakukan validasi syarat perkalian (Kolom A == Baris B) dan menghitung hasil perkalian matriks menggunakan 3 tingkat loop perulangan.",
    analysis: "• Input : Ordo Matriks A (r1 x c1), elemen matriks A, Ordo Matriks B (r2 x c2), elemen matriks B\n• Proses : Validasi perkalian (c1 == r2). Perkalian C[i][j] = sum(A[i][k] * B[k][j]) untuk k=0..c1-1\n• Output : Matriks hasil dalam bentuk kisi persegi (grid)",
    pseudocode: `IF c1 != r2 THEN
    Cetak "Perkalian tidak dapat dilakukan!"
    Exit
ENDIF

Inisialisasi C[r1][c2] = 0
FOR i = 0 TO r1-1 DO
    FOR j = 0 TO c2-1 DO
        FOR k = 0 TO c1-1 DO
            C[i][j] = C[i][j] + (A[i][k] * B[k][j])
        ENDFOR
    ENDFOR
ENDFOR
Cetak Matriks C`,
    code: `#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int r1, c1, r2, c2;

    cout << "==========================================" << endl;
    cout << "       PERKALIAN MATRIKS 2 DIMENSI        " << endl;
    cout << "==========================================" << endl;

    cout << "Masukkan Baris dan Kolom Matriks A (misal: 2 3): ";
    cin >> r1 >> c1;

    cout << "Masukkan Baris dan Kolom Matriks B (misal: 3 2): ";
    cin >> r2 >> c2;

    // Syarat perkalian matriks: Kolom A harus sama dengan Baris B
    if (c1 != r2) {
        cout << "\\n[ERROR] Matriks tidak dapat dikalikan! Syarat: Kolom A (" 
             << c1 << ") harus sama dengan Baris B (" << r2 << ").\\n";
        return 0;
    }

    int A[r1][c1], B[r2][c2], C[r1][c2];

    cout << "\\n--- Input Elemen Matriks A (" << r1 << "x" << c1 << ") ---\\n";
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c1; j++) {
            cout << "A[" << i << "][" << j << "]: ";
            cin >> A[i][j];
        }
    }

    cout << "\\n--- Input Elemen Matriks B (" << r2 << "x" << c2 << ") ---\\n";
    for (int i = 0; i < r2; i++) {
        for (int j = 0; j < c2; j++) {
            cout << "B[" << i << "][" << j << "]: ";
            cin >> B[i][j];
        }
    }

    // Inisialisasi Matriks Hasil C dengan 0
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            C[i][j] = 0;
        }
    }

    // Proses Perkalian Matriks (O(r1 * c2 * c1))
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            for (int k = 0; k < c1; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    // Menampilkan Matriks Hasil
    cout << "\\n==========================================" << endl;
    cout << " HASIL PERKALIAN MATRIKS C (" << r1 << "x" << c2 << ")" << endl;
    cout << "==========================================" << endl;
    for (int i = 0; i < r1; i++) {
        cout << "| ";
        for (int j = 0; j < c2; j++) {
            cout << setw(5) << C[i][j] << " ";
        }
        cout << " |" << endl;
    }
    cout << "==========================================" << endl;

    return 0;
}`,
    output: `==========================================
       PERKALIAN MATRIKS 2 DIMENSI        
==========================================
Masukkan Baris dan Kolom Matriks A (misal: 2 3): 2 2
Masukkan Baris dan Kolom Matriks B (misal: 3 2): 2 2

--- Input Elemen Matriks A (2x2) ---
A[0][0]: 1
A[0][1]: 2
A[1][0]: 3
A[1][1]: 4

--- Input Elemen Matriks B (2x2) ---
B[0][0]: 5
B[0][1]: 6
B[1][0]: 7
B[1][1]: 8

==========================================
 HASIL PERKALIAN MATRIKS C (2x2)
==========================================
|    19    22  |
|    43    50  |
==========================================`,
    explanation: "1. Perkalian matriks membutuhkan 3 lapisan loop bersarang (3D nested loops).\n2. Menggunakan manipulasi ordo dinamis yang dicek pada saat runtime.\n3. Formatter `setw()` menjaga jarak angka agar tampilan matriks konsol tetap lurus dan rapi."
  },
  {
    id: "kasus-8",
    title: "Kalkulator Faktorial & Deret Fibonacci (Fungsi Rekursif)",
    category: "Fungsi & Rekursi",
    difficulty: "Mudah",
    summary: "Memahami konsep rekursi (pemanggilan fungsi oleh dirinya sendiri), base case, dan call stack untuk faktorial dan deret Fibonacci.",
    description: "Fungsi rekursif adalah paradigma penting dalam ilmu komputer. Program ini menyajikan dua contoh klasik implementasi rekursi:\n1. Faktorial bilangan bulat n! = n * (n-1)!\n2. Penghasil deret Fibonacci hingga suku ke-N: F(n) = F(n-1) + F(n-2).",
    analysis: "• Input : Bilangan n (integer)\n• Proses : Menentukan Base Case (kondisi berhenti rekursi) dan Recursive Step\n• Output : Nilai n! dan deret barisan angka Fibonacci",
    pseudocode: `Fungsi Faktorial(n):
    IF n <= 1 THEN RETURN 1
    ELSE RETURN n * Faktorial(n - 1)

Fungsi Fibonacci(n):
    IF n <= 0 THEN RETURN 0
    ELSE IF n == 1 THEN RETURN 1
    ELSE RETURN Fibonacci(n - 1) + Fibonacci(n - 2)`,
    code: `#include <iostream>
using namespace std;

// Fungsi Rekursif Faktorial
long long hitungFaktorial(int n) {
    // Base Case (Kondisi Berhenti)
    if (n <= 1) {
        return 1;
    }
    // Recursive Step
    return n * hitungFaktorial(n - 1);
}

// Fungsi Rekursif Fibonacci
int fibonacci(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int pilihan, n;

    cout << "========================================" << endl;
    cout << "     PROGRAM REKURSI ALPRO C++         " << endl;
    cout << "========================================" << endl;
    cout << "1. Hitung Faktorial (n!)" << endl;
    cout << "2. Deret Fibonacci (Hingga suku ke-n)" << endl;
    cout << "Pilih opsi [1/2]: ";
    cin >> pilihan;

    if (pilihan == 1) {
        cout << "\\nMasukkan nilai n (0 - 20): ";
        cin >> n;
        if (n < 0) {
            cout << "Faktorial tidak terdefinisi untuk bilangan negatif!\\n";
        } else {
            cout << "Hasil: " << n << "! = " << hitungFaktorial(n) << endl;
        }
    } else if (pilihan == 2) {
        cout << "\\nMasukkan banyak suku Fibonacci: ";
        cin >> n;
        cout << "Deret Fibonacci: ";
        for (int i = 0; i < n; i++) {
            cout << fibonacci(i) << " ";
        }
        cout << endl;
    } else {
        cout << "Pilihan tidak valid!\\n";
    }

    return 0;
}`,
    output: `========================================
     PROGRAM REKURSI ALPRO C++         
========================================
1. Hitung Faktorial (n!)
2. Deret Fibonacci (Hingga suku ke-n)
Pilih opsi [1/2]: 1

Masukkan nilai n (0 - 20): 6
Hasil: 6! = 720`,
    explanation: "1. Base Case sangat krusial dalam rekursi untuk mencegah Infinite Recursion / Stack Overflow.\n2. Tipe data `long long` digunakan pada faktorial untuk menampung lonjakan nilai angka yang membesar secara eksponensial."
  }
];

// Local Storage Key
const STORAGE_KEY = "alpro_case_studies_db";
const THEME_KEY = "alpro_theme_preference";

// State
let caseStudies = [];
let currentCategory = "Semua";
let currentDifficulty = "Semua";
let searchQuery = "";
let editingId = null;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadData();
  renderCaseStudies();
  updateCategoryStats();
  setupEventListeners();
});

// Load Data from LocalStorage or default
function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      caseStudies = JSON.parse(saved);
    } catch (e) {
      console.error("Gagal membaca LocalStorage, memuat default.", e);
      caseStudies = [...defaultCaseStudies];
      saveData();
    }
  } else {
    caseStudies = [...defaultCaseStudies];
    saveData();
  }
}

// Save Data to LocalStorage
function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(caseStudies));
}

// Render Cards
function renderCaseStudies() {
  const container = document.getElementById("caseListContainer");
  const emptyState = document.getElementById("emptyState");
  const caseCountBadge = document.getElementById("caseCountBadge");

  // Filtering
  const filtered = caseStudies.filter((item) => {
    const matchCategory =
      currentCategory === "Semua" || item.category === currentCategory;
    const matchDifficulty =
      currentDifficulty === "Semua" || item.difficulty === currentDifficulty;
    const matchSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchDifficulty && matchSearch;
  });

  if (caseCountBadge) {
    caseCountBadge.textContent = `${filtered.length} Studi Kasus`;
  }

  if (filtered.length === 0) {
    container.innerHTML = "";
    emptyState.classList.remove("d-none");
    return;
  }

  emptyState.classList.add("d-none");

  container.innerHTML = filtered
    .map((item) => {
      let diffBadgeClass = "badge-mudah";
      if (item.difficulty === "Sedang") diffBadgeClass = "badge-sedang";
      if (item.difficulty === "Sulit") diffBadgeClass = "badge-sulit";

      return `
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="case-card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-1">
                <i class="bi bi-tag-fill me-1"></i>${escapeHtml(item.category)}
              </span>
              <span class="badge ${diffBadgeClass} rounded-pill px-2 py-1">
                ${escapeHtml(item.difficulty)}
              </span>
            </div>
            
            <h5 class="card-title text-truncate-2 mt-2">${escapeHtml(item.title)}</h5>
            <p class="card-text">${escapeHtml(item.summary)}</p>

            <div class="pt-3 mt-auto border-top d-flex gap-2">
              <button class="btn btn-primary btn-sm flex-grow-1" onclick="openDetailModal('${item.id}')">
                <i class="bi bi-code-slash me-1"></i> Pembahasan & Kode
              </button>
              <button class="btn btn-outline-secondary btn-sm" title="Edit Kasus" onclick="openEditModal('${item.id}')">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="btn btn-outline-danger btn-sm" title="Hapus Kasus" onclick="confirmDelete('${item.id}')">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

// Update Top Statistics
function updateCategoryStats() {
  document.getElementById("totalKasusStat").textContent = caseStudies.length;
  
  const cats = new Set(caseStudies.map((c) => c.category));
  document.getElementById("totalKategoriStat").textContent = cats.size;
  
  const mudahCount = caseStudies.filter(c => c.difficulty === "Mudah").length;
  const sedangCount = caseStudies.filter(c => c.difficulty === "Sedang").length;
  const sulitCount = caseStudies.filter(c => c.difficulty === "Sulit").length;

  if (document.getElementById("statMudah")) document.getElementById("statMudah").textContent = mudahCount;
  if (document.getElementById("statSedang")) document.getElementById("statSedang").textContent = sedangCount;
  if (document.getElementById("statSulit")) document.getElementById("statSulit").textContent = sulitCount;
}

// Open Detail Modal
function openDetailModal(id) {
  const item = caseStudies.find((c) => c.id === id);
  if (!item) return;

  document.getElementById("detailModalTitle").textContent = item.title;
  document.getElementById("detailCategoryBadge").textContent = item.category;
  
  const diffBadge = document.getElementById("detailDifficultyBadge");
  diffBadge.textContent = item.difficulty;
  diffBadge.className = `badge rounded-pill px-3 py-1 ${
    item.difficulty === "Mudah"
      ? "badge-mudah"
      : item.difficulty === "Sedang"
      ? "badge-sedang"
      : "badge-sulit"
  }`;

  document.getElementById("detailDescription").textContent = item.description;
  document.getElementById("detailAnalysis").textContent = item.analysis || "Tidak ada analisis khusus.";
  document.getElementById("detailPseudocode").textContent = item.pseudocode || "Pseudocode belum tersedia.";
  
  const codeElem = document.getElementById("detailCode");
  codeElem.textContent = item.code;
  // Apply highlight.js
  hljs.highlightElement(codeElem);

  document.getElementById("detailOutput").textContent = item.output || "[Program dijalankan tanpa output khusus]";
  document.getElementById("detailExplanation").textContent = item.explanation || "Pembahasan mendalam konsep algoritma terkait studi kasus.";

  // Store current code in copy button dataset
  document.getElementById("btnCopyCode").dataset.code = item.code;

  const modal = new bootstrap.Modal(document.getElementById("detailModal"));
  modal.show();
}

// Setup Event Listeners
function setupEventListeners() {
  // Category filter clicks
  document.querySelectorAll(".category-filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".category-filter-btn").forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      currentCategory = e.target.getAttribute("data-category");
      renderCaseStudies();
    });
  });

  // Difficulty filter clicks
  document.querySelectorAll(".difficulty-filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".difficulty-filter-btn").forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      currentDifficulty = e.target.getAttribute("data-difficulty");
      renderCaseStudies();
    });
  });

  // Search input
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderCaseStudies();
    });
  }

  // Copy Code Button
  const btnCopyCode = document.getElementById("btnCopyCode");
  if (btnCopyCode) {
    btnCopyCode.addEventListener("click", () => {
      const codeText = btnCopyCode.dataset.code || document.getElementById("detailCode").textContent;
      navigator.clipboard.writeText(codeText).then(() => {
        const originalHtml = btnCopyCode.innerHTML;
        btnCopyCode.innerHTML = `<i class="bi bi-check-lg text-success"></i> Berhasil Disalin!`;
        btnCopyCode.classList.add("btn-light");
        setTimeout(() => {
          btnCopyCode.innerHTML = originalHtml;
          btnCopyCode.classList.remove("btn-light");
        }, 2000);
      });
    });
  }

  // Save/Submit Form (Add / Edit)
  const caseForm = document.getElementById("caseForm");
  if (caseForm) {
    caseForm.addEventListener("submit", (e) => {
      e.preventDefault();
      saveCaseFromForm();
    });
  }

  // Theme Toggle Button
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Reset to Default button
  const btnResetData = document.getElementById("btnResetDefault");
  if (btnResetData) {
    btnResetData.addEventListener("click", () => {
      if (confirm("Apakah Anda yakin ingin mereset seluruh data kembali ke studi kasus bawaan? Data buatan Anda akan terhapus.")) {
        caseStudies = [...defaultCaseStudies];
        saveData();
        renderCaseStudies();
        updateCategoryStats();
        alert("Data berhasil direset ke setelan awal!");
      }
    });
  }

  // Export Data JSON
  const btnExportData = document.getElementById("btnExportData");
  if (btnExportData) {
    btnExportData.addEventListener("click", exportJSON);
  }

  // Import Data JSON
  const fileImport = document.getElementById("fileImport");
  if (fileImport) {
    fileImport.addEventListener("change", importJSON);
  }
}

// Add/Edit Save Logic
function saveCaseFromForm() {
  const title = document.getElementById("formTitle").value.trim();
  const category = document.getElementById("formCategory").value;
  const difficulty = document.getElementById("formDifficulty").value;
  const summary = document.getElementById("formSummary").value.trim();
  const description = document.getElementById("formDescription").value.trim();
  const analysis = document.getElementById("formAnalysis").value.trim();
  const pseudocode = document.getElementById("formPseudocode").value.trim();
  const code = document.getElementById("formCode").value.trim();
  const output = document.getElementById("formOutput").value.trim();
  const explanation = document.getElementById("formExplanation").value.trim();

  if (!title || !code) {
    alert("Harap isi Judul dan Kode C++ minimal!");
    return;
  }

  if (editingId) {
    // Edit Mode
    const index = caseStudies.findIndex((c) => c.id === editingId);
    if (index !== -1) {
      caseStudies[index] = {
        ...caseStudies[index],
        title,
        category,
        difficulty,
        summary: summary || title,
        description,
        analysis,
        pseudocode,
        code,
        output,
        explanation
      };
    }
  } else {
    // Add New Mode
    const newCase = {
      id: "kasus-" + Date.now(),
      title,
      category,
      difficulty,
      summary: summary || title,
      description,
      analysis,
      pseudocode,
      code,
      output,
      explanation
    };
    caseStudies.unshift(newCase);
  }

  saveData();
  renderCaseStudies();
  updateCategoryStats();

  const modalEl = document.getElementById("formModal");
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();

  alert(editingId ? "Studi kasus berhasil diperbarui!" : "Studi kasus baru berhasil ditambahkan!");
  editingId = null;
}

// Open Form for Adding New
function openAddModal() {
  editingId = null;
  document.getElementById("formModalTitle").innerHTML = `<i class="bi bi-plus-circle me-2"></i> Tambah Studi Kasus Baru`;
  document.getElementById("caseForm").reset();
  
  // Set default placeholder for code
  document.getElementById("formCode").value = `#include <iostream>
using namespace std;

int main() {
    // Tulis algoritma C++ di sini
    cout << "Hello, Alpro C++!" << endl;
    return 0;
}`;

  const modal = new bootstrap.Modal(document.getElementById("formModal"));
  modal.show();
}

// Open Form for Editing
function openEditModal(id) {
  const item = caseStudies.find((c) => c.id === id);
  if (!item) return;

  editingId = id;
  document.getElementById("formModalTitle").innerHTML = `<i class="bi bi-pencil-square me-2"></i> Edit Studi Kasus`;
  
  document.getElementById("formTitle").value = item.title;
  document.getElementById("formCategory").value = item.category;
  document.getElementById("formDifficulty").value = item.difficulty;
  document.getElementById("formSummary").value = item.summary;
  document.getElementById("formDescription").value = item.description;
  document.getElementById("formAnalysis").value = item.analysis;
  document.getElementById("formPseudocode").value = item.pseudocode;
  document.getElementById("formCode").value = item.code;
  document.getElementById("formOutput").value = item.output;
  document.getElementById("formExplanation").value = item.explanation;

  const modal = new bootstrap.Modal(document.getElementById("formModal"));
  modal.show();
}

// Delete Confirmation
function confirmDelete(id) {
  const item = caseStudies.find((c) => c.id === id);
  if (!item) return;

  if (confirm(`Apakah Anda yakin ingin menghapus studi kasus: "${item.title}"?`)) {
    caseStudies = caseStudies.filter((c) => c.id !== id);
    saveData();
    renderCaseStudies();
    updateCategoryStats();
  }
}

// Export Data to JSON File
function exportJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(caseStudies, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `studi_kasus_alpro_cpp_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// Import Data from JSON File
function importJSON(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const importedData = JSON.parse(event.target.result);
      if (Array.isArray(importedData)) {
        if (confirm(`Ditemukan ${importedData.length} studi kasus. Apakah Anda ingin mengimpor dan menggabungkannya?`)) {
          // Merge unique by title
          const existingTitles = new Set(caseStudies.map((c) => c.title.toLowerCase()));
          let addedCount = 0;

          importedData.forEach((item) => {
            if (!existingTitles.has(item.title.toLowerCase())) {
              caseStudies.push({
                ...item,
                id: item.id || "kasus-" + Date.now() + Math.random().toString(36).substr(2, 4)
              });
              addedCount++;
            }
          });

          saveData();
          renderCaseStudies();
          updateCategoryStats();
          alert(`Berhasil mengimpor ${addedCount} studi kasus baru!`);
        }
      } else {
        alert("Format berkas JSON tidak valid!");
      }
    } catch (err) {
      alert("Gagal membaca berkas JSON: " + err.message);
    }
  };
  reader.readAsText(file);
}

// Theme handling
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  document.documentElement.setAttribute("data-bs-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-bs-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-bs-theme", next);
  localStorage.setItem(THEME_KEY, next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (icon) {
    if (theme === "dark") {
      icon.className = "bi bi-sun-fill text-warning";
    } else {
      icon.className = "bi bi-moon-stars-fill text-secondary";
    }
  }
}

// Helper: Escape HTML string to avoid XSS
function escapeHtml(text) {
  if (!text) return "";
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return text.toString().replace(/[&<>"']/g, (m) => map[m]);
}
