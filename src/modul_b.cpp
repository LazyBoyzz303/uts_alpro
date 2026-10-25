// ============================================================
// MODUL B - REKAPITULASI: Tagihan Air Rumah Tangga
// Untuk pengujian terpisah, data hasil Modul A (pemakaian dan
// biaya pemakaian) dimasukkan manual. Pada program final, data
// ini otomatis berasal dari Modul A.
// ============================================================
#include <iostream>
#include <string>
#include <iomanip>
#include <limits>
using namespace std;

int main() {
    const int BATAS_2 = 20;
    const int BIAYA_ADMIN = 7500;
    const int PERSEN_DENDA = 5;

    int jumlahPelanggan = 0, jumlahTerlambat = 0, jumlahDiAtas20 = 0;
    int totalPemakaian = 0, pemakaianTertinggi = 0;
    int totalAdmin = 0, totalDenda = 0, totalPendapatan = 0;
    string pelangganTertinggi = "-";
    double rataRata = 0;

    char lanjut = 'y';

    while (lanjut == 'y' || lanjut == 'Y') {
        string namaPelanggan;
        int pemakaian, biayaPemakaian;
        char terlambat;

        cout << "\n=== Input Data Hasil Modul A ===\n";
        cout << "Nama pelanggan  : ";
        getline(cin, namaPelanggan);

        do {
            cout << "Pemakaian (m3)  : ";
            cin >> pemakaian;
            if (cin.fail()) {
                cin.clear();
                cin.ignore(numeric_limits<streamsize>::max(), '\n');
                pemakaian = -1;
            }
            if (pemakaian < 0) cout << "  [!] Pemakaian tidak valid (harus angka >= 0).\n";
        } while (pemakaian < 0);

        do {
            cout << "Biaya pemakaian (Rp): ";
            cin >> biayaPemakaian;
            if (cin.fail()) {
                cin.clear();
                cin.ignore(numeric_limits<streamsize>::max(), '\n');
                biayaPemakaian = -1;
            }
            if (biayaPemakaian < 0) cout << "  [!] Biaya tidak valid (harus angka >= 0).\n";
        } while (biayaPemakaian < 0);

        do {
            cout << "Terlambat bayar? (y/t): ";
            cin >> terlambat;
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            if (terlambat != 'y' && terlambat != 'Y' && terlambat != 't' && terlambat != 'T')
                cout << "  [!] Masukkan y atau t.\n";
        } while (terlambat != 'y' && terlambat != 'Y' && terlambat != 't' && terlambat != 'T');

        bool statusTerlambat = (terlambat == 'y' || terlambat == 'Y');
        int denda = statusTerlambat ? biayaPemakaian * PERSEN_DENDA / 100 : 0;
        int totalTagihan = biayaPemakaian + BIAYA_ADMIN + denda;

        // ---------- Pembaruan rekapitulasi ----------
        jumlahPelanggan++;
        if (statusTerlambat) jumlahTerlambat++;
        totalPemakaian += pemakaian;
        if (pemakaian > BATAS_2) jumlahDiAtas20++;
        if (pemakaian > pemakaianTertinggi) {
            pemakaianTertinggi = pemakaian;
            pelangganTertinggi = namaPelanggan;
        }
        totalAdmin += BIAYA_ADMIN;
        totalDenda += denda;
        totalPendapatan += totalTagihan;

        do {
            cout << "\nTambah data pelanggan lain? (y/t): ";
            cin >> lanjut;
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            if (lanjut != 'y' && lanjut != 'Y' && lanjut != 't' && lanjut != 'T')
                cout << "  [!] Masukkan y atau t.\n";
        } while (lanjut != 'y' && lanjut != 'Y' && lanjut != 't' && lanjut != 'T');
    }

    if (jumlahPelanggan > 0) rataRata = (double)totalPemakaian / jumlahPelanggan;

    cout << "\n========== REKAPITULASI ==========\n";
    cout << "Jumlah pelanggan           : " << jumlahPelanggan << "\n";
    cout << "Pelanggan terlambat        : " << jumlahTerlambat << "\n";
    cout << "Total pemakaian            : " << totalPemakaian << " m3\n";
    cout << fixed << setprecision(2);
    cout << "Rata-rata pemakaian        : " << rataRata << " m3\n";
    cout << "Pelanggan pemakaian > 20 m3: " << jumlahDiAtas20 << "\n";
    cout << "Total administrasi         : Rp" << totalAdmin << "\n";
    cout << "Total denda                : Rp" << totalDenda << "\n";
    cout << "Total pendapatan           : Rp" << totalPendapatan << "\n";
    cout << "Pemakaian tertinggi        : " << pemakaianTertinggi
         << " m3 (" << pelangganTertinggi << ")\n";
    return 0;
}
