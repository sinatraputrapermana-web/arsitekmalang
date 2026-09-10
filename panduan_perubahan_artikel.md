# SOP & PANDUAN KONVERSI ARTIKEL KE FILE MARKDOWN (.MD)
**ARSITEK MALANG (`https://arsitekmalang.web.id`)**

Dokumen ini adalah standar operasional prosedur (SOP) dan panduan teknis resmi untuk mengonversi artikel blog (dari format `.html` atau naskah asli) menjadi file Markdown (`.md`).

---

> [!CAUTION]
> ### ⚠️ ATURAN MUTLAK & TIDAK DAPAT DITAWAR
> **DILARANG KERAS MENGUBAH SELURUH ISI DARI ARTIKEL!**
> 
> Tujuan proses ini **HANYA MENGGANTI FORMAT DOKUMEN MENJADI FILE `.md` SAJA**.
> - ❌ **Dilarang keras memparafrase / menulis ulang** kalimat.
> - ❌ **Dilarang keras meringkas (merangkum)** paragraf atau menghapus bagian tertentu.
> - ❌ **Dilarang keras menambahkan opini, kalimat baru, atau halusinasi AI**.
> - ❌ **Dilarang keras mengubah kosakata, diksi, istilah teknis, nama orang/narasumber, angka, dan persentase**.
> - ❌ **Dilarang mengubah gaya bahasa (tone of voice)** dari penulis asli.
> - ✅ **Seluruh teks, kata demi kata, kalimat demi kalimat, paragraf demi paragraf WAJIB 100% IDENTIK (VERBATIM) dengan isi artikel aslinya**.

---

## 📌 1. TUJUAN KONVERSI

1. Menyimpan dan mendokumentasikan seluruh materi artikel web ke dalam format teks murni Markdown (`.md`) yang bersih, terstruktur, dan portabel.
2. Memisahkan konten murni artikel dan metadata SEO dari elemen layout HTML/CSS (seperti navbar, footer, script, styling bootstrap, atau container web).
3. Memastikan arsip artikel dapat digunakan kembali di masa depan dengan integritas teks yang 100% terjaga.

---

## 🗂️ 2. STRUKTUR STANDAR FILE `.md`

Setiap file `.md` hasil konversi wajib mengikuti struktur hierarki berikut (mengacu pada standar yang sudah ada seperti `kontrak-arsitek-malang.md` dan `jasa-arsitek-malang.md`):

```markdown
# [NAMA ARTIKEL: PILAR / CLUSTER / TOP LIST]

## BAGIAN 1: METADATA SEO
- **Meta Title Jurnalistik:** [Isi dari <title> atau og:title artikel asli]
- **Meta Description:** [Isi dari meta description artikel asli]
- **Saran Permalink:** arsitekmalang.web.id/[slug-artikel]
- **Primary Keyword:** [Kata kunci utama artikel]
- **Secondary Keyword:** [Kata kunci turunan / pendukung dari artikel]
- **Penulis:** [Nama Penulis (contoh: Naura Regyna Putri)]

---

[Paragraf Pembuka / Lead Paragraph persis kata per kata sesuai aslinya]

[Paragraf pengantar berikutnya persis sesuai aslinya]

## [Subjudul Tingkat 1 / H2]
[Teks isi artikel persis sesuai aslinya]

### [Sub-subjudul / H3]
[Teks isi artikel persis sesuai aslinya]

- [Poin list 1 persis sesuai aslinya]
- [Poin list 2 persis sesuai aslinya]

## [Subjudul berikutnya]
[Teks isi artikel persis sesuai aslinya...]

## Penutup
[Paragraf penutup persis sesuai aslinya]

## FAQ Seputar [Topik Artikel]

### [Pertanyaan 1 persis sesuai aslinya]
[Jawaban pertanyaan 1 persis sesuai aslinya]

### [Pertanyaan 2 persis sesuai aslinya]
[Jawaban pertanyaan 2 persis sesuai aslinya]

## BAGIAN 3: DAFTAR SUMBER TERBAIK (Jika ada di artikel aslinya)
- [Sumber 1]
- [Sumber 2]
```

---

## 🔄 3. PANDUAN MAPPING ELEMEN HTML KE MARKDOWN

Saat mengambil konten dari file `.html`, lakukan pemetaan sintaksis berikut **tanpa mengubah isi teksnya**:

| Komponen di File `.html` | Format di File `.md` | Keterangan & Ketentuan |
| :--- | :--- | :--- |
| Tag `<title>` / `<h1>` | `# [Judul Artikel]` | Gunakan judul artikel asli. |
| Tag `<meta name="description">` | `- **Meta Description:** ...` | Ambil isi atribut `content` tanpa disunting. |
| Tag `<meta name="keywords">` | `- **Primary Keyword:** ...`<br>`- **Secondary Keyword:** ...` | Pindahkan kata kunci yang relevan. |
| Tag `<link rel="canonical">` | `- **Saran Permalink:** ...` | Ambil URL slug artikelnya. |
| Tag `<p>` (Paragraf isi) | Teks biasa dengan pemisah satu baris kosong | Pindahkan teks asli 100% tanpa mengubah kata. |
| Tag `<h3>` atau `<h2>` (Subjudul artikel) | `## [Subjudul]` atau `### [Subjudul]` | Sesuaikan hierarki heading Markdown. |
| Tag `<ul>` dan `<li>` (Bullet list) | `- [Item list]` | Pertahankan seluruh butir poin asli. |
| Tag `<ol>` dan `<li>` (Numbered list) | `1. [Item list]` | Pertahankan penomoran asli. |
| Tag `<strong>` atau `<b>` | `**teks tebal**` | Pertahankan penekanan teks asli. |
| Tag `<em>` atau `<i>` | `*teks miring*` | Pertahankan penekanan teks asli. |
| Tag `<blockquote>` | `> [teks kutipan]` | Pertahankan kutipan asli. |
| Bagian FAQ (Accordion / Card) | `## FAQ Seputar ...`<br>`### [Pertanyaan]`<br>`[Jawaban]` | Format menjadi H3 untuk pertanyaan dan paragraf untuk jawaban. |
| Bagian Referensi / Sumber | `## BAGIAN 3: DAFTAR SUMBER TERBAIK`<br>`- [Nama] - [Link]` | Salin daftar rujukan jika ada di file asli. |

### 🚫 Elemen HTML yang TIDAK Perlu Dimasukkan ke `.md`:
Elemen pembungkus antarmuka web (UI template) yang tidak merupakan bagian dari artikel tidak boleh dimasukkan ke dalam `.md`, antara lain:
- Header web global, navbar menu navigasi (`<nav>`, `<header>`).
- Tombol aksi WhatsApp mengambang (`floating-whatsapp`).
- Form newsletter / widget sidebar formulir kontak.
- Footer website, copyright, script Google Analytics, script JS Bootstrap.
- Tag-tag HTML layout seperti `<div class="container">`, `<div class="row">`, `<section>`.

---

## 🚫 4. TABEL LARANGAN KERAS (RED LINES)

| ❌ DILARANG KERAS | Alasan Dilarang | ✅ TINDAKAN YANG BENAR |
| :--- | :--- | :--- |
| Mengganti kata / sinonim (misal: "bikin pusing" diubah jadi "menyebabkan kebingungan"). | Melanggar integritas naskah dan tone of voice artikel yang sudah disetujui. | Pertahankan kata asli: `"bikin pusing"`. |
| Meringkas 3 paragraf menjadi 1 paragraf pendek. | Menghilangkan bobot informasi dan keyword SEO yang sudah tertanam. | Pindahkan seluruh 3 paragraf secara utuh. |
| Menghapus nama narasumber, gelar, atau kutipan ahli. | Menghilangkan kredibilitas E-E-A-T artikel di mata pembaca dan mesin pencari. | Salin nama narasumber dan kutipannya persis 100%. |
| Menambahkan paragraf buatan AI sendiri yang tidak ada di artikel aslinya. | Mencemari keaslian konten yang sudah diverifikasi tim. | Hanya salin teks yang ada di artikel sumber. |
| Menghapus FAQ atau memotong jawaban FAQ. | Mengurangi kelengkapan konten artikel. | Tuliskan seluruh pertanyaan dan jawaban FAQ secara lengkap. |
| Mengubah angka, estimasi harga, persentase, atau durasi waktu. | Data teknis bisa menjadi tidak akurat atau menyesatkan calon klien. | Pertahankan seluruh angka dan satuan apa adanya. |

---

## 🛠️ 5. LANGKAH KERJA KONVERSI (STEP-BY-STEP WORKFLOW)

### Langkah 1: Buka File Sumber
- Buka file artikel yang akan dikonversi (misalnya `nama-artikel.html`).
- Cari area konten artikel utama (biasanya di dalam tag `<article>` atau `<div class="article-body">`).

### Langkah 2: Buat File `.md` Baru
- Berikan nama file baru yang persis sama dengan slug artikelnya:
  Contoh: jika file aslinya `kontrak-arsitek-malang.html`, maka file barunya adalah `kontrak-arsitek-malang.md`.
- Simpan file `.md` di lokasi folder root proyek yang sama dengan artikel lainnya.

### Langkah 3: Ekstrak Metadata SEO
- Salin `<title>` dan jadikan nilai `Meta Title Jurnalistik`.
- Salin isi `<meta name="description">` dan jadikan `Meta Description`.
- Tuliskan `Saran Permalink` sesuai slug.
- Masukkan `Primary Keyword` dan `Secondary Keyword`.
- Tambahkan pembatas `---`.

### Langkah 4: Salin & Konversi Teks Artikel (Wajib Verbatim)
- Salin teks paragraf pembuka (lead) apa adanya.
- Salin seluruh subjudul dan sesuaikan dengan `#`, `##`, atau `###`.
- Salin seluruh daftar poin list menjadi `- ...`.
- Pastikan tidak ada satu kata pun yang terlewat atau diubah.

### Langkah 5: Salin FAQ & Daftar Sumber
- Pindahkan seluruh pertanyaan dan jawaban dari bagian FAQ ke dalam format heading `### [Pertanyaan]` dan teks jawaban di bawahnya.
- Salin daftar sumber referensi (jika ada) di bagian akhir file.

### Langkah 6: Verifikasi Hasil (Quality Check)
- Lakukan pengecekan menyeluruh terhadap file `.md` yang baru dibuat dengan membandingkannya langsung terhadap file aslinya.

---

## 📋 6. CHECKLIST QUALITY ASSURANCE (QA)

Sebelum menganggap pekerjaan konversi selesai, wajib memeriksa checklist berikut:

- [ ] **Nama File Tepat:** Nama file berformat `[slug-artikel].md`.
- [ ] **Metadata Lengkap:** Memiliki Meta Title, Meta Description, Permalink, dan Keywords di Bagian 1.
- [ ] **Nol Parafrase (Zero Paraphrase):** Tidak ada satu pun kalimat yang diparafrase atau ditulis ulang dengan kata-kata lain.
- [ ] **Nol Pemotongan (Zero Deletion):** Tidak ada paragraf, kalimat, atau poin list yang terlewat atau dihapus.
- [ ] **Nol Penambahan (Zero Hallucination):** Tidak ada kalimat baru atau opini tambahan yang disisipkan.
- [ ] **Akurasi Data 100%:** Seluruh angka (biaya, persentase, luas m², durasi) dan nama orang/lembaga tetap sama persis.
- [ ] **FAQ Lengkap:** Seluruh butir FAQ dari naskah asli tersalin secara utuh.
- [ ] **Format Markdown Bersih:** Heading terstruktur rapi (`#`, `##`, `###`), list rapi, dan tidak ada tag HTML mentah yang tersisa tanpa tujuan.

---

## 💡 7. CONTOH IMPLEMENTASI (BEFORE & AFTER)

### Contoh Potongan File Sumber (`.html`):
```html
<h3 id="sec-1">1. Kenapa Kontrak Kerja Arsitek Itu Penting?</h3>
<p>
  Kontrak kerja bukan sekadar dokumen administratif, melainkan instrumen perlindungan hukum atas investasi properti Anda sekaligus mencegah sengketa di masa depan.
</p>
<ul>
  <li>Identitas lengkap klien dan pihak arsitek/biro</li>
  <li>Lokasi detail proyek pembangunan</li>
  <li>Nilai total imbalan jasa dan rincian perpajakan</li>
</ul>
```

### Hasil Konversi yang Benar pada File (`.md`):
```markdown
## Kenapa Kontrak Kerja Arsitek Itu Penting?

Kontrak kerja bukan sekadar dokumen administratif, melainkan instrumen perlindungan hukum atas investasi properti Anda sekaligus mencegah sengketa di masa depan.

Ada delapan komponen yang wajib ada dalam kontrak arsitek:
- Identitas lengkap klien dan pihak arsitek/biro
- Lokasi detail proyek pembangunan
- Nilai total imbalan jasa dan rincian perpajakan
```
*(Perhatikan bahwa kata-kata, susunan kalimat, dan makna teks 100% SAMA PERSIS tanpa modifikasi sedikit pun).*

---

**Diterbitkan oleh Tim Editorial Web Arsitek Malang**  
*Gunakan panduan ini sebagai acuan mutlak dalam setiap proses migrasi atau konversi artikel ke format Markdown (.md).*
