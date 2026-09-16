// Arsitek Malang - Articles Data Store
const ARTICLES = {
  1: {
    title:    "Tren Desain Rumah 2026: Menyatukan Alam dan Teknologi",
    date:     "22 Agustus 2026",
    category: "Tren Desain",
    img:      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    cluster:   "desain",
    clusterName: "Tren & Konsep Desain Arsitektur",
    excerpt:  "Menyatukan konsep Biophilic Design, material alami, dan integrasi smart home pintar untuk hunian modern.",
    relatedClusterIds: [5, 9, 3],
    content: `
      <div class="summary-box mb-4 p-4 rounded-3" style="background:#f8fafc; border-left:4px solid var(--accent-color);">
        <h5 class="fw-800 text-dark mb-3"><i class="bi bi-bookmark-check-fill text-primary-custom me-2"></i>Ringkasan Inti</h5>
        <ul class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7;">
          <li>Konsep Biophilic Design menjadi standar baru dalam arsitektur hunian 2026 untuk efisiensi energi & kesehatan mental.</li>
          <li>Teknologi Smart Home terintegrasi secara tersembunyi (seamless) tanpa mengganggu estetika interior.</li>
          <li>Palet warna tahun ini didominasi oleh <em>earthy tones</em> hangat yang memberikan kesan alami & elegan.</li>
        </ul>
      </div>

      <div class="toc-box mb-4 p-4 rounded-3 border" style="background:#ffffff;">
        <div class="toc-header mb-2">
          <h5 class="fw-800 text-dark mb-2" style="font-size:1.1rem;"><i class="bi bi-list-nested text-primary-custom me-2"></i>Daftar Isi Artikel</h5>
        </div>
        <ol class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7; padding-left:1.2rem;">
          <li><a href="#sec-1" class="text-primary-custom text-decoration-none fw-600">1. Biophilic Design: Membawa Unsur Alam ke Dalam Rumah</a></li>
          <li><a href="#sec-2" class="text-primary-custom text-decoration-none fw-600">2. Integrasi Smart Home yang Seamless & Estetis</a></li>
          <li><a href="#sec-3" class="text-primary-custom text-decoration-none fw-600">3. Dominasi Palet Warna Earthy Tones & Material Alami</a></li>
          <li><a href="#sec-4" class="text-primary-custom text-decoration-none fw-600">4. Kesimpulan & Rekomendasi Arsitek</a></li>
        </ol>
      </div>

      <p class="lead" style="font-size:1.05rem; line-height:1.85; color:#0f172a; font-weight:500;">
        Tahun 2026 menjadi titik balik penting dalam evolusi arsitektur hunian modern. Pemilik rumah kini mengutamakan keseimbangan antara keasrian alam dan kenyamanan teknologi pintar.
      </p>

      <h3 id="sec-1" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">1. Biophilic Design: Membawa Unsur Alam ke Dalam Rumah</h3>
      <p>Penerapan material alami seperti batu alam, kayu ekspos bersertifikat, serta dinding tanaman hidup (living wall) kini bukan sekadar pemanis dekorasi, melainkan elemen struktural utama dalam perencanaan ruang.</p>
      <ul class="mb-3 extra-small text-muted d-flex flex-column gap-2" style="line-height:1.75;">
        <li><strong>Pengaplikasian Kayu & Bambu:</strong> Menggunakan struktur kisi-kisi kayu untuk pembiasan pencahayaan alami.</li>
        <li><strong>Jendela Panoramik:</strong> Bukaan kaca besar dari lantai ke plafon yang mengoptimalkan aliran sirkulasi udara silang (cross-ventilation).</li>
        <li><strong>Rooftop Garden:</strong> Meredam panas matahari secara alami dan menurunkan suhu ruangan hingga 3–5°C.</li>
      </ul>

      <div class="pro-tip-box p-4 my-4 rounded-3" style="background:#e0f5fa; border-left:4px solid var(--accent-color);">
        <h6 class="fw-800 text-dark mb-2" style="color:var(--accent-dark)!important;"><i class="bi bi-lightbulb-fill text-primary-custom me-2"></i>Catatan Arsitek Malang</h6>
        <p class="extra-small text-dark mb-0" style="line-height:1.7;">Pastikan ventilasi silang (cross-ventilation) dirancang sejajar dengan arah angin dominan di area Malang agar konsumsi AC dapat dikurangi hingga 40%.</p>
      </div>

      
      <div class="read-also-box p-3 my-4 rounded-3" style="background:#f1f5f9; border-left:4px solid var(--accent-color);">
        <div class="d-flex align-items-center gap-2 flex-wrap">
          <span class="badge text-white px-2.5 py-1.5 fw-700" style="background:var(--accent-color); font-size:0.75rem;">Baca Juga</span>
          <a href="blog-detail.html?id=5" onclick="if(typeof loadArticleDetail==='function'){loadArticleDetail('5');window.scrollTo({top:0,behavior:'smooth'});return false;}" class="fw-700 text-dark text-decoration-none hover-primary extra-small">
            Desain Rumah Tropis Modern yang Cocok untuk Iklim Malang <i class="bi bi-arrow-right ms-1 text-primary-custom"></i>
          </a>
        </div>
      </div>
      

      <h3 id="sec-2" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">2. Integrasi Smart Home yang Seamless & Estetis</h3>
      <p>Penggunaan otomasi rumah modern kini dirancang menyatu dengan elemen interior. Saklar otomatis tersembunyi di balik panel kayu dinding, speaker built-in plafon, serta sistem lampu LED pintar yang dapat menyesuaikan ritme sirkadian tubuh penghuni.</p>

      <h3 id="sec-3" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">3. Dominasi Palet Warna Earthy Tones & Material Alami</h3>
      <p>Earthy tones seperti <em>terracotta, sage green, warm beige</em> berpadu dengan aksen metalik matte. Warna putih polos kini digantikan oleh off-white dan cream yang menghadirkan suasana lebih tenang dan nyaman.</p>

      <h3 id="sec-4" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">4. Kesimpulan & Rekomendasi Arsitek</h3>
      <p>Mengintegrasikan tren 2026 memerlukan perencanaan matang sejak tahap konsep arsitektur awal agar efisiensi biaya dan fungsionalitas ruang dapat tercapai maksimal.</p>

      <div class="cta-box p-4 my-4 rounded-3 text-center border shadow-sm" style="background: linear-gradient(135deg, var(--accent-light) 0%, #ffffff 100%); border-color: var(--accent-color) !important;">
        <h4 class="fw-800 text-dark mb-2">Tertarik Menerapkan Tren Desain 2026?</h4>
        <p class="text-muted extra-small mb-3">Konsultasikan ide perencanaan rumah impian Anda bersama tim profesional Arsitek Malang hari ini.</p>
        <button class="btn btn-primary px-4 py-2 fw-700 rounded-pill" onclick="openWA('Konsultasi Tren Desain Rumah 2026')">
          <i class="bi bi-whatsapp me-2"></i> Konsultasi Gratis via WhatsApp
        </button>
      </div>

      <div class="author-bio-card d-flex align-items-center gap-3 p-3 rounded-3 mt-4 border" style="background:#f8fafc;">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Penulis Arsitek Malang" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
        <div>
          <h6 class="fw-800 mb-1" style="font-size:0.95rem;">Muhammad Musyaffa</h6>
          <p class="text-muted extra-small mb-0">Arsitek Principal &amp; Lead Structural Estimator berpengalaman 10+ tahun di Malang Raya, spesialis desain tropis modern, RAB presisi, dan legalitas PBG/SIMBG.</p>
        </div>
      </div>
    `
  },
  2: {
    title:    "Tips Renovasi Hemat Tanpa Mengorbankan Kualitas",
    date:     "22 Agustus 2026",
    category: "Tips Renovasi",
    img:      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    cluster:   "renovasi",
    clusterName: "Tips Renovasi & Penghematan Biaya",
    excerpt:  "Strategi cerdas mengelola anggaran renovasi rumah dengan pemilihan material lokal berkualitas.",
    relatedClusterIds: [6, 3, 4],
    content: `
      <div class="summary-box mb-4 p-4 rounded-3" style="background:#f8fafc; border-left:4px solid var(--accent-color);">
        <h5 class="fw-800 text-dark mb-3"><i class="bi bi-bookmark-check-fill text-primary-custom me-2"></i>Ringkasan Inti</h5>
        <ul class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7;">
          <li>Menerapkan prinsip Pareto 80/20 untuk memprioritaskan anggaran pada struktur utama bangunan.</li>
          <li>Panduan memilih material lokal berkualitas setara produk impor dengan harga 30-40% lebih terjangkau.</li>
          <li>Perencanaan alokasi waktu renovasi di luar musim hujan untuk efisiensi biaya ongkos tukang.</li>
        </ul>
      </div>

      <div class="toc-box mb-4 p-4 rounded-3 border" style="background:#ffffff;">
        <div class="toc-header mb-2">
          <h5 class="fw-800 text-dark mb-2" style="font-size:1.1rem;"><i class="bi bi-list-nested text-primary-custom me-2"></i>Daftar Isi Artikel</h5>
        </div>
        <ol class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7; padding-left:1.2rem;">
          <li><a href="#sec-1" class="text-primary-custom text-decoration-none fw-600">1. Penerapan Prinsip 80/20 Anggaran Renovasi</a></li>
          <li><a href="#sec-2" class="text-primary-custom text-decoration-none fw-600">2. Panduan Memilih Material Lokal Hemat & Berkualitas</a></li>
          <li><a href="#sec-3" class="text-primary-custom text-decoration-none fw-600">3. Manajemen Pelaksanaan & Pemilihan Waktu Renovasi</a></li>
          <li><a href="#sec-4" class="text-primary-custom text-decoration-none fw-600">4. Kesimpulan & Solusi Anggaran Hemat</a></li>
        </ol>
      </div>

      <p class="lead" style="font-size:1.05rem; line-height:1.85; color:#0f172a; font-weight:500;">
        Renovasi hunian tidak selalu harus menguras tabungan Anda. Dengan perencanaan komprehensif dan pemilihan alokasi anggaran yang tepat, hasil maksimal dapat terwujud dengan efisiensi biaya yang optimal.
      </p>

      <h3 id="sec-1" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">1. Penerapan Prinsip 80/20 Anggaran Renovasi</h3>
      <p>Alokasikan 80% dana anggaran untuk memperkuat dan memperbarui elemen struktural permanen seperti pondasi, kekuatan dinding, atap, serta instalasi perpipaan/kelistrikan.</p>

      
      <div class="read-also-box p-3 my-4 rounded-3" style="background:#f1f5f9; border-left:4px solid var(--accent-color);">
        <div class="d-flex align-items-center gap-2 flex-wrap">
          <span class="badge text-white px-2.5 py-1.5 fw-700" style="background:var(--accent-color); font-size:0.75rem;">Baca Juga</span>
          <a href="blog-detail.html?id=6" onclick="if(typeof loadArticleDetail==='function'){loadArticleDetail('6');window.scrollTo({top:0,behavior:'smooth'});return false;}" class="fw-700 text-dark text-decoration-none hover-primary extra-small">
            Cara Menghitung RAB Bangun Rumah Secara Akurat <i class="bi bi-arrow-right ms-1 text-primary-custom"></i>
          </a>
        </div>
      </div>
      

      <h3 id="sec-2" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">2. Panduan Memilih Material Lokal Hemat & Berkualitas</h3>
      <ul class="mb-3 extra-small text-muted d-flex flex-column gap-2" style="line-height:1.75;">
        <li><strong>Granit Tile vs Keramik KW1:</strong> Gunakan keramik anti-slip KW1 untuk area basah yang aman & tahan lama.</li>
        <li><strong>Kusen uPVC:</strong> Lebih tahan cuaca & rayap dibandingkan kayu olahan tanpa perawatan ulang rutin.</li>
        <li><strong>Pembelian Supplier Lokal:</strong> Membeli material langsung dari distributor resmi di Malang memotong biaya distribusi.</li>
      </ul>

      <div class="pro-tip-box p-4 my-4 rounded-3" style="background:#e0f5fa; border-left:4px solid var(--accent-color);">
        <h6 class="fw-800 text-dark mb-2" style="color:var(--accent-dark)!important;"><i class="bi bi-lightbulb-fill text-primary-custom me-2"></i>Catatan Arsitek Malang</h6>
        <p class="extra-small text-dark mb-0" style="line-height:1.7;">Gunakan RAB (Rencana Anggaran Biaya) terperinci dari awal sebelum memulai pembongkaran fisik agar tidak terjadi pemborosan dana pembengkakan material di pertengahan jalan.</p>
      </div>

      <h3 id="sec-3" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">3. Manajemen Pelaksanaan & Pemilihan Waktu Renovasi</h3>
      <p>Melakukan renovasi fisik pada musim kemarau meminimalisir keterlambatan proyek akibat cuaca serta mencegah kerusakan bahan semen dan kayu yang belum terpasang.</p>

      <h3 id="sec-4" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">4. Kesimpulan & Solusi Anggaran Hemat</h3>
      <p>Hemat bukan berarti asal murah, melainkan bijak memilih mana bagian yang wajib kualitas tinggi dan mana bagian yang bisa didekorasi bertahap.</p>

      <div class="cta-box p-4 my-4 rounded-3 text-center border shadow-sm" style="background: linear-gradient(135deg, var(--accent-light) 0%, #ffffff 100%); border-color: var(--accent-color) !important;">
        <h4 class="fw-800 text-dark mb-2">Ingin Renovasi Rumah Berkonsep Hemat & Presisi?</h4>
        <p class="text-muted extra-small mb-3">Dapatkan estimasi biaya transparan dan survey lokasi gratis bersama Arsitek Malang.</p>
        <button class="btn btn-primary px-4 py-2 fw-700 rounded-pill" onclick="openWA('Konsultasi Tips Renovasi Hemat')">
          <i class="bi bi-whatsapp me-2"></i> Konsultasi Gratis via WhatsApp
        </button>
      </div>

      <div class="author-bio-card d-flex align-items-center gap-3 p-3 rounded-3 mt-4 border" style="background:#f8fafc;">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Penulis Arsitek Malang" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
        <div>
          <h6 class="fw-800 mb-1" style="font-size:0.95rem;">Muhammad Musyaffa</h6>
          <p class="text-muted extra-small mb-0">Arsitek Principal &amp; Lead Structural Estimator berpengalaman 10+ tahun di Malang Raya, spesialis desain tropis modern, RAB presisi, dan legalitas PBG/SIMBG.</p>
        </div>
      </div>
    `
  },
  3: {
    title:    "Pentingnya Menggunakan Jasa Arsitek Profesional",
    date:     "21 Agustus 2026",
    category: "Tips Desain",
    img:      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    cluster:   "perencanaan",
    clusterName: "Perencanaan & Jasa Arsitek Profesional",
    excerpt:  "Pentingnya gambar kerja DED dan perhitungan struktur teknis resmi untuk keamanan investasi hunian.",
    relatedClusterIds: [7, 1, 6],
    content: `
      <div class="summary-box mb-4 p-4 rounded-3" style="background:#f8fafc; border-left:4px solid var(--accent-color);">
        <h5 class="fw-800 text-dark mb-3"><i class="bi bi-bookmark-check-fill text-primary-custom me-2"></i>Ringkasan Inti</h5>
        <ul class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7;">
          <li>Jasa arsitek memastikan perhitungan teknis struktur aman terhadap beban bangunan & kondisi tanah.</li>
          <li>Optimasi ruang efektif mencegah luas tanah terbuang sia-sia dan menghemat energi harian.</li>
          <li>Mengurangi risiko pembengkakan biaya (rework) yang biasa terjadi jika pembangunan tanpa gambar kerja.</li>
        </ul>
      </div>

      <div class="toc-box mb-4 p-4 rounded-3 border" style="background:#ffffff;">
        <div class="toc-header mb-2">
          <h5 class="fw-800 text-dark mb-2" style="font-size:1.1rem;"><i class="bi bi-list-nested text-primary-custom me-2"></i>Daftar Isi Artikel</h5>
        </div>
        <ol class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7; padding-left:1.2rem;">
          <li><a href="#sec-1" class="text-primary-custom text-decoration-none fw-600">1. Keamanan & Perhitungan Struktur Teknikal</a></li>
          <li><a href="#sec-2" class="text-primary-custom text-decoration-none fw-600">2. Maksimalisasi Fungsi & Tata Ruang Bangunan</a></li>
          <li><a href="#sec-3" class="text-primary-custom text-decoration-none fw-600">3. Penghematan Investasi Jangka Panjang</a></li>
          <li><a href="#sec-4" class="text-primary-custom text-decoration-none fw-600">4. Kesimpulan</a></li>
        </ol>
      </div>

      <p class="lead" style="font-size:1.05rem; line-height:1.85; color:#0f172a; font-weight:500;">
        Menggunakan jasa arsitek profesional adalah bentuk investasi berharga untuk menjamin keamanan, keindahan, dan ketahanan struktur hunian Anda dalam jangka panjang.
      </p>

      <h3 id="sec-1" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">1. Keamanan & Perhitungan Struktur Teknikal</h3>
      <p>Arsitek merancang bangunan berlandaskan perhitungan daya dukung tanah, spesifikasi besi beton, serta sistem pembuangan dan kelistrikan yang aman memenuhi standar SNI.</p>

      <h3 id="sec-2" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">2. Maksimalisasi Fungsi & Tata Ruang Bangunan</h3>
      <p>Desain arsitek profesional menjamin setiap meter persegi lahan dimanfaatkan efektif tanpa ruangan mati, serta sirkulasi pencahayaan dan udara alami mengalir sempurna.</p>

      <div class="pro-tip-box p-4 my-4 rounded-3" style="background:#e0f5fa; border-left:4px solid var(--accent-color);">
        <h6 class="fw-800 text-dark mb-2" style="color:var(--accent-dark)!important;"><i class="bi bi-lightbulb-fill text-primary-custom me-2"></i>Catatan Arsitek Malang</h6>
        <p class="extra-small text-dark mb-0" style="line-height:1.7;">Gambar kerja lengkap (DED & RAB) yang dibuat arsitek akan menjadi panduan mutlak bagi kontraktor sehingga terhindar dari perdebatan dan klaim biaya tambahan saat konstruksi berlangsung.</p>
      </div>

      <h3 id="sec-3" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">3. Penghematan Investasi Jangka Panjang</h3>
      <p>Menghindari pembongkaran akibat kesalahan posisi atau ukuran ruang dapat menghemat biaya konstruksi hingga 20-30% secara keseluruhan.</p>

      <h3 id="sec-4" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">4. Kesimpulan</h3>
      <p>Arsitek bukan biaya tambahan, melainkan mitra profesional yang melindungi investasi bangunan Anda.</p>

      <div class="cta-box p-4 my-4 rounded-3 text-center border shadow-sm" style="background: linear-gradient(135deg, var(--accent-light) 0%, #ffffff 100%); border-color: var(--accent-color) !important;">
        <h4 class="fw-800 text-dark mb-2">Siap Merencanakan Bangunan Bersama Arsitek Senior?</h4>
        <p class="text-muted extra-small mb-3">Konsultasikan kebutuhan perancangan denah 2D, 3D rendering, & DED komplit bersama Arsitek Malang.</p>
        <button class="btn btn-primary px-4 py-2 fw-700 rounded-pill" onclick="openWA('Konsultasi Jasa Arsitek Profesional')">
          <i class="bi bi-whatsapp me-2"></i> Konsultasi Gratis via WhatsApp
        </button>
      </div>

      <div class="author-bio-card d-flex align-items-center gap-3 p-3 rounded-3 mt-4 border" style="background:#f8fafc;">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Penulis Arsitek Malang" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
        <div>
          <h6 class="fw-800 mb-1" style="font-size:0.95rem;">Muhammad Musyaffa</h6>
          <p class="text-muted extra-small mb-0">Arsitek Principal &amp; Lead Structural Estimator berpengalaman 10+ tahun di Malang Raya, spesialis desain tropis modern, RAB presisi, dan legalitas PBG/SIMBG.</p>
        </div>
      </div>
    `
  },
  4: {
    title:    "Panduan Material Ramah Lingkungan untuk Konstruksi",
    date:     "21 Agustus 2026",
    category: "Material",
    img:      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    cluster:   "material",
    clusterName: "Material & Efisiensi Energi Bangunan",
    excerpt:  "Pilihan bahan eco-friendly untuk menurunkan suhu interior dan konsumsi listrik pendingin udara.",
    relatedClusterIds: [8, 5, 2],
    content: `
      <div class="summary-box mb-4 p-4 rounded-3" style="background:#f8fafc; border-left:4px solid var(--accent-color);">
        <h5 class="fw-800 text-dark mb-3"><i class="bi bi-bookmark-check-fill text-primary-custom me-2"></i>Ringkasan Inti</h5>
        <ul class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7;">
          <li>Mengenal pilihan material ramah lingkungan (green building materials) berkualitas tinggi.</li>
          <li>Manfaat penggunaan beton fly ash, bambu laminasi, dan batu daur ulang untuk daya tahan bangunan.</li>
          <li>Dampak positif insulasi termal terhadap penurunan biaya penggunaan pendingin udara (AC).</li>
        </ul>
      </div>

      <div class="toc-box mb-4 p-4 rounded-3 border" style="background:#ffffff;">
        <div class="toc-header mb-2">
          <h5 class="fw-800 text-dark mb-2" style="font-size:1.1rem;"><i class="bi bi-list-nested text-primary-custom me-2"></i>Daftar Isi Artikel</h5>
        </div>
        <ol class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7; padding-left:1.2rem;">
          <li><a href="#sec-1" class="text-primary-custom text-decoration-none fw-600">1. Pilihan Material Daur Ulang & Terbarukan</a></li>
          <li><a href="#sec-2" class="text-primary-custom text-decoration-none fw-600">2. Material Insulasi Thermal Efisiensi Energi</a></li>
          <li><a href="#sec-3" class="text-primary-custom text-decoration-none fw-600">3. Keuntungan Bangunan Berkonsep Green Building</a></li>
          <li><a href="#sec-4" class="text-primary-custom text-decoration-none fw-600">4. Kesimpulan</a></li>
        </ol>
      </div>

      <p class="lead" style="font-size:1.05rem; line-height:1.85; color:#0f172a; font-weight:500;">
        Konstruksi hijau kini menjadi tren utama dalam pembangunan masa depan. Penggunaan material eco-friendly mampu menciptakan bangunan tahan lama yang hemat energi sekaligus ramah terhadap alam.
      </p>

      <h3 id="sec-1" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">1. Pilihan Material Daur Ulang & Terbarukan</h3>
      <ul class="mb-3 extra-small text-muted d-flex flex-column gap-2" style="line-height:1.75;">
        <li><strong>Bata Daur Ulang:</strong> Menghasilkan estetika industrial alami sekaligus mengurangi limbah pabrik.</li>
        <li><strong>Bambu Engineered:</strong> Memiliki kekuatan tarik setara baja dengan nilai estetika kayu yang hangat.</li>
        <li><strong>Beton Fly-Ash:</strong> Memanfaatkan abu terbang industri untuk mengurangi jejak karbon semen hingga 30%.</li>
      </ul>

      <h3 id="sec-2" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">2. Material Insulasi Thermal Efisiensi Energi</h3>
      <p>Penggunaan peredam panas pada atap dan dinding kaca Low-E efektif menurunkan suhu interior rumah sehingga konsumsi listrik sistem pendingin berkurang signifikan.</p>

      <div class="pro-tip-box p-4 my-4 rounded-3" style="background:#e0f5fa; border-left:4px solid var(--accent-color);">
        <h6 class="fw-800 text-dark mb-2" style="color:var(--accent-dark)!important;"><i class="bi bi-lightbulb-fill text-primary-custom me-2"></i>Catatan Arsitek Malang</h6>
        <p class="extra-small text-dark mb-0" style="line-height:1.7;">Kombinasikan material ramah lingkungan dengan bukaan atap skylight untuk memaksimalkan penerangan cahaya alami sepanjang hari tanpa lampu.</p>
      </div>

      <h3 id="sec-3" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">3. Keuntungan Bangunan Berkonsep Green Building</h3>
      <p>Hunian berkonsep green building memiliki nilai jual properti 15-20% lebih tinggi serta biaya perawatan rutin harian yang jauh lebih ekonomis.</p>

      <h3 id="sec-4" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">4. Kesimpulan</h3>
      <p>Membangun dengan material ramah lingkungan adalah keputusan cerdas untuk masa depan keluarga Anda dan kelestarian alam.</p>

      <div class="cta-box p-4 my-4 rounded-3 text-center border shadow-sm" style="background: linear-gradient(135deg, var(--accent-light) 0%, #ffffff 100%); border-color: var(--accent-color) !important;">
        <h4 class="fw-800 text-dark mb-2">Ingin Rumah Hemat Energi & Ramah Lingkungan?</h4>
        <p class="text-muted extra-small mb-3">Konsultasikan spesifikasi material hijau untuk bangunan Anda bersama Arsitek Malang.</p>
        <button class="btn btn-primary px-4 py-2 fw-700 rounded-pill" onclick="openWA('Konsultasi Material Ramah Lingkungan')">
          <i class="bi bi-whatsapp me-2"></i> Konsultasi Gratis via WhatsApp
        </button>
      </div>

      <div class="author-bio-card d-flex align-items-center gap-3 p-3 rounded-3 mt-4 border" style="background:#f8fafc;">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Penulis Arsitek Malang" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
        <div>
          <h6 class="fw-800 mb-1" style="font-size:0.95rem;">Muhammad Musyaffa</h6>
          <p class="text-muted extra-small mb-0">Arsitek Principal &amp; Lead Structural Estimator berpengalaman 10+ tahun di Malang Raya, spesialis desain tropis modern, RAB presisi, dan legalitas PBG/SIMBG.</p>
        </div>
      </div>
    `
  },
  5: {
    title:    "Panduan Desain Rumah Tropis Modern Tahan Cuaca Dingin & Hujan Malang",
    date:     "20 Agustus 2026",
    category: "Desain Tropis",
    img:      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    cluster:   "desain",
    clusterName: "Arsitektur & Desain Tropis Modern",
    excerpt:  "Tips merancang hunian tropis modern yang nyaman, minim kelembapan, dan bebas bocor di iklim Malang.",
    relatedClusterIds: [1, 3, 4],
    content: `
      <div class="summary-box mb-4 p-4 rounded-3" style="background:#f8fafc; border-left:4px solid var(--accent-color);">
        <h5 class="fw-800 text-dark mb-3"><i class="bi bi-bookmark-check-fill text-primary-custom me-2"></i>Ringkasan Inti</h5>
        <ul class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7;">
          <li>Strategi atap miring (high pitch roof) untuk mengalirkan curah hujan tinggi di Malang.</li>
          <li>Penggunaan material insulasi penahan udara dingin malam hari dan ventilasi silang (cross-ventilation).</li>
          <li>Desain inner courtyard untuk menghadirkan pencahayaan alami tanpa mengorbankan privasi.</li>
        </ul>
      </div>

      <div class="toc-box mb-4 p-4 rounded-3 border" style="background:#ffffff;">
        <div class="toc-header mb-2">
          <h5 class="fw-800 text-dark mb-2" style="font-size:1.1rem;"><i class="bi bi-list-nested text-primary-custom me-2"></i>Daftar Isi Artikel</h5>
        </div>
        <ol class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7; padding-left:1.2rem;">
          <li><a href="#sec-1" class="text-primary-custom text-decoration-none fw-600">1. Karakteristik Iklim Malang & Tantangan Arsitektur</a></li>
          <li><a href="#sec-2" class="text-primary-custom text-decoration-none fw-600">2. Geometri Atap & Kemiringan Ideal Bebas Bocor</a></li>
          <li><a href="#sec-3" class="text-primary-custom text-decoration-none fw-600">3. Inner Courtyard & Penerangan Alami</a></li>
          <li><a href="#sec-4" class="text-primary-custom text-decoration-none fw-600">4. Kesimpulan & Solusi Desain Tropis</a></li>
        </ol>
      </div>

      <p class="lead" style="font-size:1.05rem; line-height:1.85; color:#0f172a; font-weight:500;">
        Malang dikenal dengan iklim pegunungan yang sejuk namun memiliki curah hujan cukup tinggi dan kelembapan udara yang perlu diantisipasi dalam perencanaan arsitektur hunian.
      </p>

      <h3 id="sec-1" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">1. Karakteristik Iklim Malang & Tantangan Arsitektur</h3>
      <p>Perbedaan suhu siang dan malam hari memerlukan pilihan dinding berdaya serap termal stabil serta ventilasi yang bisa diatur agar rumah tidak terasa lembap saat musim hujan.</p>

      <h3 id="sec-2" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">2. Geometri Atap & Kemiringan Ideal Bebas Bocor</h3>
      <p>Atap limasan atau pelana dengan kemiringan minimal 30–35 derajat dan teritisan lebar (overhang 1.2–1.5m) terbukti paling efektif melindungi dinding luar dari terpaan air hujan deras.</p>

      <div class="pro-tip-box p-4 my-4 rounded-3" style="background:#e0f5fa; border-left:4px solid var(--accent-color);">
        <h6 class="fw-800 text-dark mb-2" style="color:var(--accent-dark)!important;"><i class="bi bi-lightbulb-fill text-primary-custom me-2"></i>Catatan Arsitek Malang</h6>
        <p class="extra-small text-dark mb-0" style="line-height:1.7;">Gunakan talang air tersembunyi berbahan stainless steel atau uPVC berdiameter besar agar debit air hujan deras mengalir lancar tanpa meluap ke plafon.</p>
      </div>

      <h3 id="sec-3" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">3. Inner Courtyard & Penerangan Alami</h3>
      <p>Taman di dalam rumah (inner courtyard) tidak hanya mempercantik interior, namun juga menciptakan sirkulasi udara mikro yang menyegarkan seluruh ruangan tanpa memerlukan pendingin udara terus-menerus.</p>

      <h3 id="sec-4" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">4. Kesimpulan & Solusi Desain Tropis</h3>
      <p>Desain tropis modern yang tepat menyatukan kenyamanan estetika dan ketahanan bangunan terhadap iklim lokal Malang dalam jangka panjang.</p>

      <div class="cta-box p-4 my-4 rounded-3 text-center border shadow-sm" style="background: linear-gradient(135deg, var(--accent-light) 0%, #ffffff 100%); border-color: var(--accent-color) !important;">
        <h4 class="fw-800 text-dark mb-2">Ingin Membangun Rumah Tropis Bebas Bocor & Sejuk?</h4>
        <p class="text-muted extra-small mb-3">Konsultasikan perancangan hunian tropis modern Anda bersama Arsitek Malang.</p>
        <button class="btn btn-primary px-4 py-2 fw-700 rounded-pill" onclick="openWA('Konsultasi Rumah Tropis Modern')">
          <i class="bi bi-whatsapp me-2"></i> Konsultasi Gratis via WhatsApp
        </button>
      </div>

      <div class="author-bio-card d-flex align-items-center gap-3 p-3 rounded-3 mt-4 border" style="background:#f8fafc;">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Penulis Arsitek Malang" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
        <div>
          <h6 class="fw-800 mb-1" style="font-size:0.95rem;">Muhammad Musyaffa</h6>
          <p class="text-muted extra-small mb-0">Arsitek Principal &amp; Lead Structural Estimator berpengalaman 10+ tahun di Malang Raya, spesialis desain tropis modern, RAB presisi, dan legalitas PBG/SIMBG.</p>
        </div>
      </div>
    `
  },
  6: {
    title:    "Cara Menghitung RAB Bangun Rumah Type 36 & 45 di Malang",
    date:     "20 Agustus 2026",
    category: "Estimasi Biaya",
    img:      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    cluster:   "biaya",
    clusterName: "Tips Renovasi & Manajemen Anggaran (RAB)",
    excerpt:  "Simulasi perhitungan RAB komprehensif dari struktur hingga finishing untuk rumah minimalis di wilayah Malang Raya.",
    relatedClusterIds: [2, 3, 7],
    content: `
      <div class="summary-box mb-4 p-4 rounded-3" style="background:#f8fafc; border-left:4px solid var(--accent-color);">
        <h5 class="fw-800 text-dark mb-3"><i class="bi bi-bookmark-check-fill text-primary-custom me-2"></i>Ringkasan Inti</h5>
        <ul class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7;">
          <li>Panduan lengkap membuat Rencana Anggaran Biaya (RAB) transparan dan realistis.</li>
          <li>Rincian komponen biaya: Struktur (40%), Pasangan & Finishing (35%), MEP (15%), Dana Tak Terduga (10%).</li>
          <li>Estimasi acuan biaya per m² untuk wilayah Malang Kota dan Kabupaten Malang.</li>
        </ul>
      </div>

      <div class="toc-box mb-4 p-4 rounded-3 border" style="background:#ffffff;">
        <div class="toc-header mb-2">
          <h5 class="fw-800 text-dark mb-2" style="font-size:1.1rem;"><i class="bi bi-list-nested text-primary-custom me-2"></i>Daftar Isi Artikel</h5>
        </div>
        <ol class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7; padding-left:1.2rem;">
          <li><a href="#sec-1" class="text-primary-custom text-decoration-none fw-600">1. Komponen Utama Rencana Anggaran Biaya (RAB)</a></li>
          <li><a href="#sec-2" class="text-primary-custom text-decoration-none fw-600">2. Simulasi Perhitungan Biaya Bangun Rumah Type 36 & 45</a></li>
          <li><a href="#sec-3" class="text-primary-custom text-decoration-none fw-600">3. Mengantisipasi Pembengkakan Dana Proyek</a></li>
          <li><a href="#sec-4" class="text-primary-custom text-decoration-none fw-600">4. Kesimpulan & Konsultasi RAB Gratis</a></li>
        </ol>
      </div>

      <p class="lead" style="font-size:1.05rem; line-height:1.85; color:#0f172a; font-weight:500;">
        Perhitungan RAB yang cermat adalah kunci utama agar proses pembangunan rumah berjalan lancar tanpa terhenti di tengah jalan karena kehabisan anggaran.
      </p>

      <h3 id="sec-1" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">1. Komponen Utama Rencana Anggaran Biaya (RAB)</h3>
      <p>RAB mencakup harga satuan bahan bangunan, upah tenaga kerja (borongan/harian), alat pendukung, serta kontinjensi biaya tak terduga sekitar 5–10%.</p>

      <h3 id="sec-2" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">2. Simulasi Perhitungan Biaya Bangun Rumah Type 36 & 45</h3>
      <p>Di wilayah Malang, estimasi standar konstruksi rumah tinggal menengah berkisar antara Rp 3.500.000 hingga Rp 4.500.000 per meter persegi tergantung spesifikasi material finishing yang dipilih.</p>

      <div class="pro-tip-box p-4 my-4 rounded-3" style="background:#e0f5fa; border-left:4px solid var(--accent-color);">
        <h6 class="fw-800 text-dark mb-2" style="color:var(--accent-dark)!important;"><i class="bi bi-lightbulb-fill text-primary-custom me-2"></i>Catatan Arsitek Malang</h6>
        <p class="extra-small text-dark mb-0" style="line-height:1.7;">Gunakan kontrak borongan penuh dengan RAB mengikat agar harga material yang naik tidak dibebankan secara sepihak di tengah proyek pembangunan.</p>
      </div>

      <h3 id="sec-3" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">3. Mengantisipasi Pembengkakan Dana Proyek</h3>
      <p>Hindari perubahan desain spontan saat proses pembangunan berlangsung karena perubahan posisi tembok atau titik pipa dapat menambah biaya hingga 15-20%.</p>

      <h3 id="sec-4" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">4. Kesimpulan & Konsultasi RAB Gratis</h3>
      <p>Tim Arsitek Malang menyediakan estimasi RAB awal transparan sebelum pelaksanaan konstruksi dimulai.</p>

      <div class="cta-box p-4 my-4 rounded-3 text-center border shadow-sm" style="background: linear-gradient(135deg, var(--accent-light) 0%, #ffffff 100%); border-color: var(--accent-color) !important;">
        <h4 class="fw-800 text-dark mb-2">Butuh Bantuan Menghitung RAB Rumah Anda?</h4>
        <p class="text-muted extra-small mb-3">Dapatkan hitungan RAB rinci dan konsultasi anggaran transparan bersama Arsitek Malang.</p>
        <button class="btn btn-primary px-4 py-2 fw-700 rounded-pill" onclick="openWA('Konsultasi Perhitungan RAB Rumah')">
          <i class="bi bi-whatsapp me-2"></i> Hitung RAB Gratis via WhatsApp
        </button>
      </div>

      <div class="author-bio-card d-flex align-items-center gap-3 p-3 rounded-3 mt-4 border" style="background:#f8fafc;">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Penulis Arsitek Malang" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
        <div>
          <h6 class="fw-800 mb-1" style="font-size:0.95rem;">Muhammad Musyaffa</h6>
          <p class="text-muted extra-small mb-0">Arsitek Principal &amp; Lead Structural Estimator berpengalaman 10+ tahun di Malang Raya, spesialis desain tropis modern, RAB presisi, dan legalitas PBG/SIMBG.</p>
        </div>
      </div>
    `
  },
  7: {
    title:    "Panduan Mengurus PBG (Persetujuan Bangunan Gedung) & IMB di Malang",
    date:     "19 Agustus 2026",
    category: "Perizinan & Legal",
    img:      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    cluster:   "perencanaan",
    clusterName: "Perencanaan & Jasa Arsitek Profesional",
    excerpt:  "Langkah hukum resmi mengurus izin PBG di Pemkot Malang & Pemkab Malang tanpa kendala birokrasi.",
    relatedClusterIds: [3, 6, 1],
    content: `
      <div class="summary-box mb-4 p-4 rounded-3" style="background:#f8fafc; border-left:4px solid var(--accent-color);">
        <h5 class="fw-800 text-dark mb-3"><i class="bi bi-bookmark-check-fill text-primary-custom me-2"></i>Ringkasan Inti</h5>
        <ul class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7;">
          <li>Perubahan aturan IMB menjadi PBG (Persetujuan Bangunan Gedung) berdasarkan UU Cipta Kerja.</li>
          <li>Syarat dokumen teknis arsitektur, struktur, dan MEP yang wajib disiapkan.</li>
          <li>Peran penting arsitek berlisensi (STRA) dalam mempercepat persetujuan PBG melalui SIMBG.</li>
        </ul>
      </div>

      <div class="toc-box mb-4 p-4 rounded-3 border" style="background:#ffffff;">
        <div class="toc-header mb-2">
          <h5 class="fw-800 text-dark mb-2" style="font-size:1.1rem;"><i class="bi bi-list-nested text-primary-custom me-2"></i>Daftar Isi Artikel</h5>
        </div>
        <ol class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7; padding-left:1.2rem;">
          <li><a href="#sec-1" class="text-primary-custom text-decoration-none fw-600">1. Pengertian PBG & Perbedaannya dengan IMB</a></li>
          <li><a href="#sec-2" class="text-primary-custom text-decoration-none fw-600">2. Persyaratan Dokumen Administrasi & Teknis</a></li>
          <li><a href="#sec-3" class="text-primary-custom text-decoration-none fw-600">3. Alur Pengurusan PBG Online via SIMBG di Malang</a></li>
          <li><a href="#sec-4" class="text-primary-custom text-decoration-none fw-600">4. Kesimpulan & Layanan Pendampingan Izin</a></li>
        </ol>
      </div>

      <p class="lead" style="font-size:1.05rem; line-height:1.85; color:#0f172a; font-weight:500;">
        Memiliki PBG resmi sebelum pembangunan dimulai melindungi aset properti Anda dari sanksi administratif atau penyegelan oleh pihak berwenang.
      </p>

      <h3 id="sec-1" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">1. Pengertian PBG & Perbedaannya dengan IMB</h3>
      <p>PBG adalah perizinan yang diberikan kepada pemilik bangunan gedung untuk membangun baru, mengubah, memperluas, merawat, atau mengurangi bangunan gedung sesuai standar teknis.</p>

      <h3 id="sec-2" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">2. Persyaratan Dokumen Administrasi & Teknis</h3>
      <p>Dokumen teknis meliputi Gambar Rencana Arsitektur, Gambar Perhitungan Struktur, serta Rencana Utilitas (MEP) yang disetujui oleh tenaga ahli arsitektur.</p>

      <div class="pro-tip-box p-4 my-4 rounded-3" style="background:#e0f5fa; border-left:4px solid var(--accent-color);">
        <h6 class="fw-800 text-dark mb-2" style="color:var(--accent-dark)!important;"><i class="bi bi-lightbulb-fill text-primary-custom me-2"></i>Catatan Arsitek Malang</h6>
        <p class="extra-small text-dark mb-0" style="line-height:1.7;">Arsitek Malang menyertakan kelengkapan gambar teknis standar SIMBG pada setiap paket desain arsitektur kami sehingga mempermudah pengajuan PBG Anda.</p>
      </div>

      <h3 id="sec-3" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">3. Alur Pengurusan PBG Online via SIMBG di Malang</h3>
      <p>Proses dilakukan secara online melalui portal SIMBG KemenPUPR, dilanjutkan verifikasi oleh Tim Profesi Ahli (TPA) Pemkot/Pemkab Malang hingga penerbitan retribusi PBG.</p>

      <h3 id="sec-4" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">4. Kesimpulan & Layanan Pendampingan Izin</h3>
      <p>Pastikan proyek Anda legal dan aman secara hukum dengan pendampingan tim ahli arsitek profesional.</p>

      <div class="cta-box p-4 my-4 rounded-3 text-center border shadow-sm" style="background: linear-gradient(135deg, var(--accent-light) 0%, #ffffff 100%); border-color: var(--accent-color) !important;">
        <h4 class="fw-800 text-dark mb-2">Ingin Didampingi Pengurusan Izin PBG/IMB?</h4>
        <p class="text-muted extra-small mb-3">Tim Arsitek Malang siap menyusun dokumen gambar teknis sesuai standar SIMBG Pemkot & Pemkab Malang.</p>
        <button class="btn btn-primary px-4 py-2 fw-700 rounded-pill" onclick="openWA('Pendampingan Izin PBG Malang')">
          <i class="bi bi-whatsapp me-2"></i> Konsultasi Izin via WhatsApp
        </button>
      </div>

      <div class="author-bio-card d-flex align-items-center gap-3 p-3 rounded-3 mt-4 border" style="background:#f8fafc;">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Penulis Arsitek Malang" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
        <div>
          <h6 class="fw-800 mb-1" style="font-size:0.95rem;">Muhammad Musyaffa</h6>
          <p class="text-muted extra-small mb-0">Arsitek Principal &amp; Lead Structural Estimator berpengalaman 10+ tahun di Malang Raya, spesialis desain tropis modern, RAB presisi, dan legalitas PBG/SIMBG.</p>
        </div>
      </div>
    `
  },
  8: {
    title:    "Rahasia Pondasi Rumah Tahan Gempa di Perbukitan Malang & Batu",
    date:     "19 Agustus 2026",
    category: "Teknik Konstruksi",
    img:      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
    cluster:   "material",
    clusterName: "Material & Efisiensi Energi Bangunan",
    excerpt:  "Solusi teknik sipil pondasi cakar ayam & bored pile untuk kontur tanah miring agar struktur aman jangka panjang.",
    relatedClusterIds: [4, 2, 5],
    content: `
      <div class="summary-box mb-4 p-4 rounded-3" style="background:#f8fafc; border-left:4px solid var(--accent-color);">
        <h5 class="fw-800 text-dark mb-3"><i class="bi bi-bookmark-check-fill text-primary-custom me-2"></i>Ringkasan Inti</h5>
        <ul class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7;">
          <li>Analisis kontur tanah berbukit di area Malang & Batu yang membutuhkan perlakuan khusus.</li>
          <li>Kombinasi pondasi footplat (cakar ayam), bored pile, dan retaining wall (dinding penahan tanah).</li>
          <li>Prinsip penyambungan pembesian balok elastis tahan getaran gempa bumi.</li>
        </ul>
      </div>

      <div class="toc-box mb-4 p-4 rounded-3 border" style="background:#ffffff;">
        <div class="toc-header mb-2">
          <h5 class="fw-800 text-dark mb-2" style="font-size:1.1rem;"><i class="bi bi-list-nested text-primary-custom me-2"></i>Daftar Isi Artikel</h5>
        </div>
        <ol class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7; padding-left:1.2rem;">
          <li><a href="#sec-1" class="text-primary-custom text-decoration-none fw-600">1. Karakteristik Tanah Lereng & Perbukitan Malang</a></li>
          <li><a href="#sec-2" class="text-primary-custom text-decoration-none fw-600">2. Jenis Pondasi Terbaik untuk Lahan Miring</a></li>
          <li><a href="#sec-3" class="text-primary-custom text-decoration-none fw-600">3. Dinding Penahan Tanah (Retaining Wall) & Drainase</a></li>
          <li><a href="#sec-4" class="text-primary-custom text-decoration-none fw-600">4. Kesimpulan & Garansi Struktur Bangunan</a></li>
        </ol>
      </div>

      <p class="lead" style="font-size:1.05rem; line-height:1.85; color:#0f172a; font-weight:500;">
        Membangun rumah di area perbukitan Malang dan Batu memberikan pemandangan indah, namun memerlukan pondasi kokoh untuk mengantisipasi risiko pergeseran tanah.
      </p>

      <h3 id="sec-1" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">1. Karakteristik Tanah Lereng & Perbukitan Malang</h3>
      <p>Kondisi tanah vulkanik gembur di lereng bukit memerlukan pengujian daya dukung tanah (soil test) sebelum merencanakan kedalaman pondasi utama.</p>

      <h3 id="sec-2" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">2. Jenis Pondasi Terbaik untuk Lahan Miring</h3>
      <p>Penggunaan pondasi bored pile yang menancap hingga kedalaman tanah keras dikombinasikan dengan struktur sloof pembesian ikat (tie beam) sangat efektif meredam getaran gempa.</p>

      <div class="pro-tip-box p-4 my-4 rounded-3" style="background:#e0f5fa; border-left:4px solid var(--accent-color);">
        <h6 class="fw-800 text-dark mb-2" style="color:var(--accent-dark)!important;"><i class="bi bi-lightbulb-fill text-primary-custom me-2"></i>Catatan Arsitek Malang</h6>
        <p class="extra-small text-dark mb-0" style="line-height:1.7;">Pastikan balok sloof terikat menyatu pada setiap sudut pondasi agar struktur bergerak bersama (monolit) saat terjadi guncangan tanpa menyebabkan dinding retak struktur.</p>
      </div>

      <h3 id="sec-3" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">3. Dinding Penahan Tanah (Retaining Wall) & Drainase</h3>
      <p>Pembuatan retaining wall berbahan beton bertulang dilengkapi lubang serapan air (weep holes) sangat penting mencegah tekanan hidrostatis air tanah yang bisa memicu longsor.</p>

      <h3 id="sec-4" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">4. Kesimpulan & Garansi Struktur Bangunan</h3>
      <p>Arsitek Malang menerapkan standar teknis ketat dan memberikan garansi pemeliharaan struktur untuk setiap hunian yang kami bangun.</p>

      <div class="cta-box p-4 my-4 rounded-3 text-center border shadow-sm" style="background: linear-gradient(135deg, var(--accent-light) 0%, #ffffff 100%); border-color: var(--accent-color) !important;">
        <h4 class="fw-800 text-dark mb-2">Ingin Bangun Rumah di Lahan Perbukitan/Miring?</h4>
        <p class="text-muted extra-small mb-3">Konsultasikan pengujian tanah, perhitungan pondasi tahan gempa, & garansi struktur bersama Arsitek Malang.</p>
        <button class="btn btn-primary px-4 py-2 fw-700 rounded-pill" onclick="openWA('Konsultasi Pondasi Tahan Gempa')">
          <i class="bi bi-whatsapp me-2"></i> Konsultasi Gratis via WhatsApp
        </button>
      </div>

      <div class="author-bio-card d-flex align-items-center gap-3 p-3 rounded-3 mt-4 border" style="background:#f8fafc;">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Penulis Arsitek Malang" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
        <div>
          <h6 class="fw-800 mb-1" style="font-size:0.95rem;">Muhammad Musyaffa</h6>
          <p class="text-muted extra-small mb-0">Arsitek Principal &amp; Lead Structural Estimator berpengalaman 10+ tahun di Malang Raya, spesialis desain tropis modern, RAB presisi, dan legalitas PBG/SIMBG.</p>
        </div>
      </div>
    `
  },
  9: {
    title:    "Jasa Desain Villa Kontemporer: Integrasi Lanskap dan Material Alami",
    date:     "18 Agustus 2026",
    category: "Desain Villa & Lanskap",
    img:      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    cluster:   "desain",
    clusterName: "Desain Arsitektur & Perancangan Villa",
    excerpt:  "Penggabungan bentuk bangunan modern dengan material alami dan integrasi lanskap miring untuk villa berhawa sejuk di dataran tinggi Malang Raya.",
    relatedClusterIds: [1, 3, 8],
    content: `
      <div class="summary-box mb-4 p-4 rounded-3" style="background:#f8fafc; border-left:4px solid var(--accent-color);">
        <h5 class="fw-800 text-dark mb-3"><i class="bi bi-bookmark-check-fill text-primary-custom me-2"></i>Ringkasan Inti</h5>
        <ul class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7;">
          <li>Villa kontemporer mengutamakan material alami seperti kayu, batu, dan kaca untuk menyatu dengan lingkungan.</li>
          <li>Integrasi lanskap dan kontur lahan menjadi pertimbangan utama sejak tahap konsep desain.</li>
          <li>Ventilasi silang dan bukaan lebar dimanfaatkan untuk efisiensi energi di kawasan berhawa sejuk.</li>
          <li>Estimasi biaya desain mengikuti standar per meter persegi atau persentase RAB sesuai kompleksitas proyek.</li>
        </ul>
      </div>

      <div class="toc-box mb-4 p-4 rounded-3 border" style="background:#ffffff;">
        <div class="toc-header mb-2">
          <h5 class="fw-800 text-dark mb-2" style="font-size:1.1rem;"><i class="bi bi-list-nested text-primary-custom me-2"></i>Daftar Isi Artikel</h5>
        </div>
        <ol class="mb-0 text-muted extra-small d-flex flex-column gap-2" style="line-height:1.7; padding-left:1.2rem;">
          <li><a href="#sec-1" class="text-primary-custom text-decoration-none fw-600">1. Integrasi Lanskap: Menyesuaikan Desain dengan Kontur Lahan</a></li>
          <li><a href="#sec-2" class="text-primary-custom text-decoration-none fw-600">2. Material Alami: Kayu, Batu, dan Kaca sebagai Elemen Utama</a></li>
          <li><a href="#sec-3" class="text-primary-custom text-decoration-none fw-600">3. Bagaimana Villa Kontemporer Mengatur Ventilasi dan Sirkulasi Udara?</a></li>
          <li><a href="#sec-4" class="text-primary-custom text-decoration-none fw-600">4. Konsultasikan Desain Villa Anda di Malang Raya</a></li>
        </ol>
      </div>

      <p class="lead" style="font-size:1.05rem; line-height:1.85; color:#0f172a; font-weight:500;">
        Jasa desain villa kontemporer menggabungkan bentuk bangunan modern dengan material alami dan integrasi lanskap agar villa menyatu dengan kontur lahan, khususnya di kawasan dataran tinggi. Pendekatan ini memprioritaskan bukaan lebar, ventilasi silang, dan orientasi pemandangan. Cocok untuk homeowner maupun investor yang ingin membangun villa dengan nilai estetika sekaligus nilai investasi jangka panjang.
      </p>

      <h3 id="sec-1" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">1. Integrasi Lanskap: Menyesuaikan Desain dengan Kontur Lahan</h3>
      <p>Desain villa kontemporer yang baik memanfaatkan kontur lahan sebagai bagian dari konsep, bukan menganggapnya sebagai hambatan yang harus diratakan seluruhnya. Pendekatan ini menekan biaya <em>cut and fill</em> sekaligus mempertahankan karakter alami lahan.</p>
      <p>Pertimbangan integrasi lanskap yang umum dibahas:</p>
      <ul class="mb-3 extra-small text-muted d-flex flex-column gap-2" style="line-height:1.75;">
        <li><strong>Penempatan bangunan:</strong> mengikuti level kontur untuk meminimalkan pekerjaan tanah.</li>
        <li><strong>Area terbuka:</strong> seperti teras atau kolam renang ditempatkan pada titik dengan pemandangan (view) terbaik.</li>
        <li><strong>Jalur sirkulasi luar ruangan:</strong> dirancang menyatu dengan taman atau vegetasi eksisting.</li>
        <li><strong>Sistem drainase:</strong> disesuaikan dengan kemiringan lahan asli untuk mencegah erosi.</li>
      </ul>

      <div class="pro-tip-box p-4 my-4 rounded-3" style="background:#e0f5fa; border-left:4px solid var(--accent-color);">
        <h6 class="fw-800 text-dark mb-2" style="color:var(--accent-dark)!important;"><i class="bi bi-lightbulb-fill text-primary-custom me-2"></i>Catatan Arsitek Malang</h6>
        <p class="extra-small text-dark mb-0" style="line-height:1.7;">Perencanaan ini membutuhkan survey lahan langsung agar konsep desain sesuai kondisi aktual di lapangan, bukan sekadar asumsi di atas kertas.</p>
      </div>

      <h3 id="sec-2" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">2. Material Alami: Kayu, Batu, dan Kaca sebagai Elemen Utama</h3>
      <p>Material alami dipilih bukan hanya untuk estetika, tetapi juga karena kemampuannya menyatu dengan iklim dan lingkungan sekitar villa. Kombinasi material ini memengaruhi kenyamanan termal ruangan.</p>
      <p>Elemen material yang umum digunakan pada villa kontemporer:</p>
      <ul class="mb-3 extra-small text-muted d-flex flex-column gap-2" style="line-height:1.75;">
        <li><strong>Kayu:</strong> untuk elemen struktur ringan seperti pergola, decking kolam, dan langit-langit ceiling.</li>
        <li><strong>Batu alam:</strong> pada dinding eksterior untuk kesan kokoh dan menyatu dengan lanskap tebing/taman.</li>
        <li><strong>Kaca panel besar:</strong> untuk memaksimalkan pemandangan lanskap sekaligus pencahayaan alami.</li>
        <li><strong>Atap:</strong> dengan kemiringan yang disesuaikan curah hujan kawasan dataran tinggi (Malang & Batu).</li>
      </ul>
      <p>Pemilihan kombinasi material perlu dibahas bersama arsitek sejak tahap awal agar sesuai anggaran dan ketersediaan material lokal.</p>

      <h3 id="sec-3" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">3. Bagaimana Villa Kontemporer Mengatur Ventilasi dan Sirkulasi Udara?</h3>
      <p>Ventilasi silang menjadi elemen krusial pada desain villa kontemporer untuk menjaga sirkulasi udara alami tanpa bergantung penuh pada pendingin ruangan (AC).</p>
      <p>Strategi penataan ventilasi yang umum diterapkan:</p>
      <ul class="mb-3 extra-small text-muted d-flex flex-column gap-2" style="line-height:1.75;">
        <li><strong>Bukaan berhadapan:</strong> pada dua sisi ruangan untuk mendorong aliran udara silang (cross-ventilation).</li>
        <li><strong>Void tengah bangunan:</strong> sebagai jalur sirkulasi udara vertikal (stack effect).</li>
        <li><strong>Jendela tinggi (clerestory):</strong> untuk melepas udara panas ke atas secara alami.</li>
        <li><strong>Overhang atap:</strong> yang cukup lebar untuk melindungi bukaan dari tampias hujan langsung.</li>
      </ul>
      <p>Penataan ini penting terutama untuk villa di kawasan dataran tinggi dengan kelembapan udara tinggi agar ruangan tetap sejuk dan tidak lembap sepanjang tahun.</p>

      <h3 id="sec-4" class="fw-800 mt-4 mb-3" style="font-size:1.35rem; color:#0f172a;">4. Konsultasikan Desain Villa Anda di Malang Raya</h3>
      <p>Setiap lahan villa memiliki karakter kontur dan iklim mikro yang berbeda, sehingga pendekatan desain perlu disesuaikan lewat survey langsung. Tim <strong>Arsitek Malang</strong> berpengalaman merancang villa kontemporer yang menyatu dengan lanskap kawasan Malang Raya dan Batu.</p>
      <p>Hubungi layanan resmi kami melalui portal <a href="https://arsitekmalang.web.id" target="_blank" class="fw-700 text-primary-custom">arsitekmalang.web.id</a> atau konsultasikan langsung kebutuhan perancangan Anda.</p>

      <div class="cta-box p-4 my-4 rounded-3 text-center border shadow-sm" style="background: linear-gradient(135deg, var(--accent-light) 0%, #ffffff 100%); border-color: var(--accent-color) !important;">
        <h4 class="fw-800 text-dark mb-2">Siap Wujudkan Villa Impian Anda?</h4>
        <p class="text-muted extra-small mb-3">Konsultasikan kebutuhan perancangan villa, analisis kontur lahan, dan estimasi biaya secara gratis hari ini.</p>
        <button class="btn btn-primary px-4 py-2 fw-700 rounded-pill" onclick="openWA('Konsultasi Desain Villa Kontemporer')">
          <i class="bi bi-whatsapp me-2"></i> Konsultasi Gratis via WhatsApp
        </button>
      </div>

      <div class="author-bio-card d-flex align-items-center gap-3 p-3 rounded-3 mt-4 border" style="background:#f8fafc;">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Penulis Arsitek Malang" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
        <div>
          <h6 class="fw-800 mb-1" style="font-size:0.95rem;">Muhammad Musyaffa</h6>
          <p class="text-muted extra-small mb-0">Arsitek Principal &amp; Lead Structural Estimator berpengalaman 10+ tahun di Malang Raya, spesialis desain tropis modern, RAB presisi, dan legalitas PBG/SIMBG.</p>
        </div>
      </div>
    `
  }
};

ARTICLES['jasa-desain-villa-kontemporer'] = ARTICLES[9];
if (typeof window !== 'undefined') window.ARTICLES = ARTICLES;
