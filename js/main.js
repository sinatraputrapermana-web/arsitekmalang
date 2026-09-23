/**
 * Arsitek Malang - Main JavaScript (v2 – Redesign)
 * WA: 088989643555 → +6288989643555
 */

const WA_NUMBER = "6288989643555";

/* ================================================
   WhatsApp Handler
================================================ */
function openWA(serviceName = "") {
  const base = "Halo Arsitek Malang, saya ingin konsultasi mengenai ";
  const msg  = serviceName
    ? base + `layanan *${serviceName}*. Mohon informasinya.`
    : base + "jasa arsitek dan konstruksi bangunan.";
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ================================================
   Preloader
================================================ */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  preloader.classList.add('loaded');
}

/* ================================================
   Header – Scroll Aware
================================================ */
/* ================================================
   Unified Passive Scroll Handler (Zero Reflow)
================================================ */
let scrollTicking = false;
function initScrollHandlers() {
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scroll-top');

  const onScroll = () => {
    const top = window.scrollY;
    if (header) {
      if (top > 60) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    if (scrollTopBtn) {
      if (top > 400) scrollTopBtn.classList.add('active');
      else scrollTopBtn.classList.remove('active');
    }
    scrollTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(onScroll);
      scrollTicking = true;
    }
  }, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Only check scroll state if page was reloaded when already scrolled down
  if (window.pageYOffset > 0) {
    setTimeout(onScroll, 200);
  }
}

/* ================================================
   Mobile Nav Toggle
================================================ */
function initMobileNav() {
  const toggle  = document.getElementById('mobileNavToggle');
  const navmenu = document.getElementById('navmenu');
  if (!toggle || !navmenu) return;

  function closeMenu() {
    navmenu.classList.remove('active');
    toggle.classList.add('bi-list');
    toggle.classList.remove('bi-x');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('mobile-nav-active');
  }

  function openMenu() {
    navmenu.classList.add('active');
    toggle.classList.remove('bi-list');
    toggle.classList.add('bi-x');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('mobile-nav-active');
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navmenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Mobile dropdown accordion toggle
  navmenu.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
    dropdownLink.addEventListener('click', (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        e.stopPropagation();
        dropdownLink.parentElement.classList.toggle('dropdown-active');
      }
    });
  });

  // Close on nav link click (except parent dropdown link on mobile)
  navmenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 991 && link.parentElement.classList.contains('dropdown')) {
        return;
      }
      closeMenu();
    });
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (navmenu.classList.contains('active') && !navmenu.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navmenu.classList.contains('active')) {
      closeMenu();
    }
  });
}

/* ================================================
   AOS – Animate on Scroll (Mobile Optimized)
================================================ */
function initAOS() {
  if (typeof AOS === 'undefined') return;
  const isMobile = window.innerWidth < 768;
  if (isMobile) return;
  AOS.init({
    duration: 400,
    easing:   'ease-out-cubic',
    once:     true,
    mirror:   false,
    offset:   20,
  });
}

/* ================================================
   Swiper – Testimonials
================================================ */
function initSwipers() {
  const testimonialEl = document.querySelector('.testimonial-swiper');
  const genericSwipers = document.querySelectorAll('.swiper.init-swiper');
  if (!testimonialEl && !genericSwipers.length) return;

  function doInit() {
    if (typeof Swiper === 'undefined') return;
    if (testimonialEl && !testimonialEl.classList.contains('swiper-initialized')) {
      new Swiper('.testimonial-swiper', {
        loop:      true,
        speed:     600,
        autoplay:  { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: {
          320:  { slidesPerView: 1, spaceBetween: 20 },
          768:  { slidesPerView: 2, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 24 },
        },
      });
    }

    genericSwipers.forEach(el => {
      if (el.classList.contains('swiper-initialized')) return;
      const configEl = el.querySelector('.swiper-config');
      if (!configEl) return;
      try {
        const config = JSON.parse(configEl.textContent);
        new Swiper(el, config);
      } catch (e) {
        console.warn('Swiper config parse error', e);
      }
    });
  }

  if (typeof Swiper === 'undefined') {
    const triggerEl = testimonialEl || (genericSwipers.length ? genericSwipers[0] : null);
    if ('IntersectionObserver' in window && triggerEl) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadSwiperScript(doInit);
          observer.disconnect();
        }
      }, { rootMargin: '300px' });
      observer.observe(triggerEl);
    } else {
      loadSwiperScript(doInit);
    }
  } else {
    doInit();
  }
}

function loadSwiperScript(callback) {
  if (typeof Swiper !== 'undefined') {
    callback();
    return;
  }
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
  s.onload = callback;
  document.body.appendChild(s);
}

/* ================================================
   FAQ Accordion
================================================ */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item     = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('active');
        const qBtn = el.querySelector('.faq-question');
        if (qBtn) qBtn.setAttribute('aria-expanded', 'false');
      });

      // Open this if it was closed
      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ================================================
   Gallery Filter
================================================ */
function initGalleryFilter() {
  const pills = document.querySelectorAll('.filter-pill');
  const items = document.querySelectorAll('.gallery-item');
  if (!pills.length || !items.length) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.dataset.filter;

      items.forEach(item => {
        const match = cat === 'all' || item.dataset.category === cat;
        item.style.transition = 'opacity 0.25s, transform 0.25s';
        if (match) {
          item.style.display = 'block';
          requestAnimationFrame(() => {
            item.style.opacity   = '1';
            item.style.transform = 'scale(1)';
          });
        } else {
          item.style.opacity   = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => { item.style.display = 'none'; }, 260);
        }
      });
    });
  });
}

/* ================================================
   Blog Detail (Data loaded on-demand via articles-data.js)
================================================ */
const ARTICLES = (typeof window !== 'undefined' && window.ARTICLES) ? window.ARTICLES : {};

function openBlogDetail(id) {
  const article = ARTICLES[id];
  if (!article) return;

  const overlay = document.getElementById('blogDetailOverlay');
  if (!overlay) return;

  document.getElementById('detailImg').src             = article.img;
  document.getElementById('detailImg').alt             = article.title;
  document.getElementById('detailTitle').textContent   = article.title;
  document.getElementById('detailDate').textContent    = article.date;
  document.getElementById('detailCat').textContent     = article.category;
  document.getElementById('detailContent').innerHTML   = article.content;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBlogDetail() {
  const overlay = document.getElementById('blogDetailOverlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ================================================
   Blog Detail Page — load article + inject SEO
================================================ */
function loadArticleDetail(id) {
  const article = ARTICLES[id] || ARTICLES[1];
  const pageUrl = `https://arsitekmalang.web.id/blog-detail.html?id=${id}`;

  const titleEl = document.getElementById('pageTitle');
  if (titleEl) titleEl.textContent = article.title + ' – Arsitek Malang';

  const heroTitleEl = document.getElementById('pageHeroTitle');
  if (heroTitleEl) heroTitleEl.textContent = article.title;

  const breadcrumbEl = document.getElementById('breadcrumbTitle');
  if (breadcrumbEl) breadcrumbEl.textContent = article.title;

  const catEl = document.getElementById('articleCategory');
  if (catEl) catEl.textContent = article.category;

  const dateEl = document.getElementById('articleDate');
  if (dateEl) dateEl.textContent = article.date;

  const artTitleEl = document.getElementById('articleTitle');
  if (artTitleEl) artTitleEl.textContent = article.title;

  const imgEl = document.getElementById('articleImage');
  if (imgEl) {
    imgEl.src = article.img;
    imgEl.alt = article.title;
  }

  const bodyEl = document.getElementById('articleBody');
  if (bodyEl) bodyEl.innerHTML = article.content;

  const safeDesc = article.title + ' – Baca selengkapnya di Arsitek Malang, tim arsitek dan kontraktor profesional di Malang.';

  setMeta('metaDesc',    'content', safeDesc);
  setMeta('canonicalTag','href',    pageUrl);
  setMeta('ogTitle',     'content', article.title + ' – Arsitek Malang');
  setMeta('ogDesc',      'content', safeDesc);
  setMeta('ogUrl',       'content', pageUrl);
  setMeta('ogImage',     'content', article.img);
  setMeta('twTitle',     'content', article.title + ' – Arsitek Malang');
  setMeta('twDesc',      'content', safeDesc);
  setMeta('twImage',     'content', article.img);

  const ld = {
    "@context":  "https://schema.org",
    "@type":     "Article",
    "headline":  article.title,
    "image":     [article.img],
    "datePublished": article.date,
    "dateModified":  article.date,
    "author":    { "@type": "Organization", "name": "Arsitek Malang", "url": "https://arsitekmalang.web.id" },
    "publisher": {
      "@type": "Organization",
      "name":  "Arsitek Malang",
      "url":   "https://arsitekmalang.web.id",
      "logo":  { "@type": "ImageObject", "url": article.img }
    },
    "description":    safeDesc,
    "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl }
  };
  const ldScript = document.getElementById('jsonLdArticle');
  if (ldScript) ldScript.textContent = JSON.stringify(ld, null, 2);

  // Render Topical Authority recommendations
  renderTopicalClusterRecommendations(id);
  renderSidebarArticles(id);

  if (typeof AOS !== 'undefined') AOS.refresh();
}

/* ================================================
   Topical Authority Cluster Recommendations
================================================ */
function renderTopicalClusterRecommendations(currentId) {
  let numericId = Number(currentId);
  if (isNaN(numericId)) numericId = 9;

  const currentArt = ARTICLES[currentId] || ARTICLES[numericId] || ARTICLES[1];
  const container = document.getElementById('topicalClusterArticles');
  if (!container) return;

  const clusterTitleEl = document.getElementById('clusterNameTitle');
  if (clusterTitleEl && currentArt.clusterName) {
    clusterTitleEl.textContent = currentArt.clusterName;
  }

  // Extract only numeric keys from ARTICLES
  const validIds = Object.keys(ARTICLES)
    .filter(k => !isNaN(Number(k)))
    .map(Number)
    .filter(id => id !== numericId);

  let relatedIds = (currentArt.relatedClusterIds || []).filter(id => ARTICLES[id] && id !== numericId);
  if (relatedIds.length === 0) {
    relatedIds = validIds.slice(0, 3);
  }

  container.innerHTML = relatedIds.map(relId => {
    const relArt = ARTICLES[relId];
    if (!relArt) return '';
    return `
      <div class="col-md-4">
        <div class="card-custom p-3 h-100 d-flex flex-column" style="border:1px solid #e2e8f0; border-radius:12px; background:#fff;">
          <div class="position-relative overflow-hidden mb-2" style="border-radius:8px; height:120px;">
            <img src="${relArt.img}" alt="${relArt.title}" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <h6 class="fw-800 mb-2 lh-base" style="font-size:0.88rem; min-height: 2.6em;">
            <a href="blog-detail.html?id=${relId}" class="text-dark text-decoration-none hover-primary">${relArt.title}</a>
          </h6>
          <p class="text-muted extra-small mb-3 flex-grow-1" style="line-height:1.5; font-size:0.78rem;">
            ${relArt.excerpt || relArt.title}
          </p>
          <a href="blog-detail.html?id=${relId}" class="btn-outline-wa w-100 text-center py-2 mt-auto" style="font-size:0.75rem;">
            <i class="bi bi-book me-1"></i> Baca Artikel Terkait
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function renderSidebarArticles(currentId) {
  const sidebarContainer = document.getElementById('sidebarArticlesList');
  if (!sidebarContainer) return;

  let numericId = Number(currentId);
  if (isNaN(numericId)) numericId = 9;

  const currentArt = ARTICLES[currentId] || ARTICLES[numericId] || ARTICLES[1];
  const validIds = Object.keys(ARTICLES).filter(k => !isNaN(Number(k))).map(Number);
  
  // Sort: put articles in same cluster first
  const sortedIds = validIds
    .filter(id => id !== numericId)
    .sort((a, b) => {
      const artA = ARTICLES[a];
      const artB = ARTICLES[b];
      const matchA = artA && artA.cluster === currentArt.cluster ? 1 : 0;
      const matchB = artB && artB.cluster === currentArt.cluster ? 1 : 0;
      return matchB - matchA;
    })
    .slice(0, 5);

  sidebarContainer.innerHTML = sortedIds.map(relId => {
    const relArt = ARTICLES[relId];
    if (!relArt) return '';
    let imgSrc = relArt.img || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80';
    if (!imgSrc.startsWith('http') && imgSrc.startsWith('/')) {
      imgSrc = imgSrc.substring(1);
    }
    return `
      <div class="d-flex gap-3 align-items-start p-2 rounded hover-bg-light" style="cursor:pointer;" onclick="location.href='blog-detail.html?id=${relId}'">
        <img src="${imgSrc}" alt="${relArt.title}" style="width:60px; height:60px; border-radius:8px; object-fit:cover; flex-shrink:0;" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80';">
        <div>
          <p class="fw-700 extra-small mb-1 lh-sm text-dark" style="font-size:0.82rem;">${relArt.title}</p>
          <small class="text-muted" style="font-size:0.7rem;"><i class="bi bi-calendar3 me-1"></i>${relArt.date}</small>
        </div>
      </div>
    `;
  }).join('');
}

/* Social Share Functions */
function shareWA() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);
  window.open(`https://api.whatsapp.com/send?text=${title}%20${url}`, '_blank');
}

function shareFB() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareTW() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);
  window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`, '_blank');
}

function setMeta(id, attr, value) {
  const el = document.getElementById(id);
  if (el) el.setAttribute(attr, value);
}

/* Link Prefetching for Instant Navigation */
function initLinkPrefetch() {
  if (window.location.protocol === 'file:') return;
  const links = document.querySelectorAll('a[href$=".html"]');
  const prefetched = new Set();

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const url = link.getAttribute('href');
      if (url && !prefetched.has(url) && !url.startsWith('#') && !url.startsWith('javascript:')) {
        prefetched.add(url);
        const linkElem = document.createElement('link');
        linkElem.rel = 'prefetch';
        linkElem.href = url;
        document.head.appendChild(linkElem);
      }
    }, { passive: true });
  });
}

/* ================================================
   SERVICES DATA & DETAIL PAGE LOADER
=======================const SERVICES_DATA = {
  "jasa-arsitek": {
    title: "Jasa Arsitek & Desain 3D Fotorealistik",
    subtitle: "Pengembangan Konsep, Gambar Kerja DED, Denah 2D, & Visualisasi 3D Fotorealistik",
    category: "Perencanaan & Desain",
    rating: "4.9 (128 ulasan)",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Visualisasi 3D rendering fotorealistik resolusi tinggi",
      "Perancangan denah 2D & gambar kerja komplit (DED)",
      "Estimasi perhitungan Rencana Anggaran Biaya (RAB) presisi"
    ],
    whatWeDo: [
      { icon: "bi-vector-pen", title: "Konsep & Denah 2D", desc: "Perancangan tata letak ruang efisien, fungsional, dan sesuai dengan orientasi iklim lokal." },
      { icon: "bi-box", title: "3D Rendering Fotorealistik", desc: "Visualisasi 3 dimensi resolusi tinggi untuk gambaran nyata tekstur material dan pencahayaan." },
      { icon: "bi-journal-check", title: "Gambar Kerja DED Komplit", desc: "Cetak biru teknis lengkap arsitektur, struktur, & ME sebagai acuan tepat tukang dilapangan." },
      { icon: "bi-calculator", title: "Perhitungan RAB Presisi", desc: "Estimasi anggaran belanja material dan tenaga kerja yang rinci tanpa pembengkakan biaya." }
    ],
    advantages: [
      { icon: "bi-award", title: "Tim Arsitek Senior IAI", desc: "Ditangani oleh arsitek bersertifikat berpengalaman lebih dari 10 tahun di Malang Raya." },
      { icon: "bi-lightning-charge", title: "Desain Hemat Energi", desc: "Memaksimalkan pencahayaan alami & sirkulasi udara sejuk khas daerah tropis." },
      { icon: "bi-shield-check", title: "Bebas Revisi Konsep", desc: "Pendampingan fleksibel dan revisi konsep hingga tata letak ruang sesuai impian Anda." },
      { icon: "bi-cash-stack", title: "Efisiensi Biaya 20%", desc: "Mencegah kesalahan teknis dan bongkar pasang struktur saat pembangunan berjalan." }
    ],
    workflow: [
      { step: "01", title: "Konsultasi & Survey Tapak", desc: "Diskusi kebutuhan gaya hidup, pengukuran lahan presisi, dan analisis batas tapak." },
      { step: "02", title: "Pengembangan Konsep 2D", desc: "Penyusunan denah tata letak ruang dan sirkulasi utama untuk persetujuan klien." },
      { step: "03", title: "Modeling 3D & Finishing", desc: "Pembuatan visualisasi 3D exterior/interior serta penentuan material finishing." },
      { step: "04", title: "Cetak Gambar Kerja & RAB", desc: "Penyerahan dokumen DED teknis lengkap dan RAB rinci siap pakai untuk konstruksi." }
    ],
    faqs: [
      { q: "Berapa lama proses pembuatan desain arsitektur?", a: "Proses pembuatan konsep hingga gambar kerja DED lengkap biasanya memakan waktu 2 hingga 4 minggu tergantung skala proyek dan intensitas diskusi revisi." },
      { q: "Dokumen apa saja yang akan saya dapatkan?", a: "Anda akan menerima dokumen cetak biru komplit: Denah 2D, Gambar Kerja Teknis (DED Arsitektur, Struktur, ME), Visualisasi 3D Rendering HD, dan Rencana Anggaran Biaya (RAB) rinci." },
      { q: "Apakah ada jaminan garansi revisi desain?", a: "Ya, kami memberikan fasilitas bebas revisi pada tahap pengembangan denah 2D dan visualisasi 3D awal hingga tata letak ruang benar-benar sesuai keinginan Anda." },
      { q: "Apakah Arsitek Malang juga membantu pengurusan PBG / IMB?", a: "Tentu. Dokumen gambar kerja (DED) yang kami hasilkan sudah memenuhi syarat standar teknis Dinas PU untuk pengurusan Izin Bangunan (PBG/IMB) di Malang." }
    ]
  },
  "kontraktor-rumah": {
    title: "Jasa Kontraktor Rumah Premium Malang",
    subtitle: "Pembangunan Rumah Baru Dari Nol, Material SNI, & Garansi Struktur 12 Bulan",
    category: "Pembangunan Hunian",
    rating: "4.9 (142 ulasan)",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Pembangunan turnkey dari pondasi hingga penyerahan kunci",
      "Material struktur berstandar SNI dengan pengawasan ketat",
      "Garansi pemeliharaan & garansi struktur resmi 12 bulan"
    ],
    whatWeDo: [
      { icon: "bi-bricks", title: "Pekerjaan Struktur Utama", desc: "Galian tanah, pondasi batu kali, ceker ayam, dan cor struktur beton bertulang SNI." },
      { icon: "bi-house-heart", title: "Pekerjaan Arsitektural", desc: "Pemasangan dinding bata ringan, acian halus, keramik/granit tile, dan atap baja ringan." },
      { icon: "bi-plug", title: "Instalasi ME & Sanitari", desc: "Perpipaan air bersih/kotor Rucika, kabel kelistrikan Supreme, dan kloset TOTO/Grohe." },
      { icon: "bi-paint-bucket", title: "Finishing & Pengecatan", desc: "Pengecatan eksterior Weatherproof, pemasangan pintu jati, dan pembersihan akhir proyek." }
    ],
    advantages: [
      { icon: "bi-shield-shaded", title: "Garansi Struktur 12 Bulan", desc: "Jaminan kualitas purna jual dan perbaikan bebas biaya untuk ketenangan pemilik rumah." },
      { icon: "bi-person-check", title: "Supervisi Site Engineer", desc: "Pengawasan harian oleh insinyur sipil berpengalaman demi kepatuhan spesifikasi." },
      { icon: "bi-receipt", title: "Transparansi Biaya RAB", desc: "Sistem kontrak borongan pasti tanpa ada klaim biaya tersembunyi di tengah jalan." },
      { icon: "bi-graph-up-arrow", title: "Laporan Kurva-S Berfoto", desc: "Update berkala kemajuan fisik proyek yang transparan dan dapat dipantau dari jauh." }
    ],
    workflow: [
      { step: "01", title: "Survey & Pelajari Gambar", desc: "Pemeriksaan lokasi lahan, analisis gambar kerja DED, dan penyusunan Kontrak Kerja." },
      { step: "02", title: "Persiapan & Mobilisasi", desc: "Pembersihan lahan, pembuatan direksi keet, dan pemesanan material struktur awal." },
      { step: "03", title: "Pelaksanaan Pembangunan", desc: "Pengerjaan fisik dari struktur bawah hingga finishing dengan pengawasan berkala." },
      { step: "04", title: "Serah Terima & Garansi", desc: "Checklist akhir bersama pemilik, penyerahan kunci, dan masa garansi struktur resmi." }
    ],
    faqs: [
      { q: "Bagaimana sistem pembayaran proyek pembangunan rumah?", a: "Sistem pembayaran dilakukan secara bertahap (termin) sesuai dengan laporan pencapaian fisik progres pembangunan di lapangan (misal: DP 20%, Termin Pondasi 25%, Termin Struktur 30%, dst)." },
      { q: "Apakah material yang digunakan sudah standar SNI?", a: "Seluruh material struktur utama (besi beton, semen, bata ringan, kawat, & kayu) 100% menggunakan merek ternama berstandar resmi SNI." },
      { q: "Berapa lama garansi struktur rumah dari Arsitek Malang?", a: "Kami memberikan Garansi Struktur resmi selama 12 bulan dan Garansi Pemeliharaan Purna Jual selama 3 bulan setelah penyerahan kunci." },
      { q: "Bagaimana jika ada kenaikan harga material di tengah pembangunan?", a: "Harga dalam Kontrak Kerja Borongan bersifat mengikat (fixed price). Pemilik rumah terlindungi dari risiko kenaikan harga material di pasar." }
    ]
  },
  "kontraktor-bangunan": {
    title: "Jasa Kontraktor Bangunan & Gedung Komersial",
    subtitle: "Pembangunan Ruko, Perkantoran, Restoran, Café, & Gudang Skala Menengah",
    category: "Konstruksi Komersial",
    rating: "4.9 (88 ulasan)",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Konstruksi gedung bertingkat dengan struktur baja & beton heavy duty",
      "Penerapan standar Keselamatan Kerja (K3) dan Sertifikasi Manajemen",
      "Jadwal eksekusi presisi untuk percepatan operasional bisnis Anda"
    ],
    whatWeDo: [
      { icon: "bi-building-gear", title: "Konstruksi Gedung Bertingkat", desc: "Pembangunan ruko 2-4 lantai, gedung kantor, & resto dengan beton cor bondek." },
      { icon: "bi-building-add", title: "Struktur Baja & Wide Span", desc: "Perakitan konstruksi baja WF/H-Beam untuk fasilitas komersial & gudang." },
      { icon: "bi-window-stack", title: "Fasad Glass & ACP", desc: "Pemasangan Aluminum Composite Panel (ACP) dan dinding kaca tempered modern." },
      { icon: "bi-shield-exclamation", title: "MEP Komersial & Hydrant", desc: "Instalasi daya listrik besar, sistem jaringan LAN, plumbing, & keamanan pemadam." }
    ],
    advantages: [
      { icon: "bi-clock-history", title: "Tepat Waktu Operasional", desc: "Manajemen waktu disiplin agar gedung komersial siap disewa/digunakan sesuai rencana." },
      { icon: "bi-file-earmark-medical", title: "Kepatuhan K3 & Legalitas", desc: "Penerapan standar keselamatan kerja ketat dan kelengkapan dokumen teknis IMB/PBG." },
      { icon: "bi-tools", title: "Material Mutu Tinggi", desc: "Penggunaan beton readymix Jayamix dan material struktur bersertifikat SNI." },
      { icon: "bi-building-check", title: "Audit Struktur Berkelanjutan", desc: "Pengujian kelayakan beban dan uji tekan beton untuk keamanan jangka panjang." }
    ],
    workflow: [
      { step: "01", title: "Studi Kelayakan & RAB", desc: "Evaluasi kebutuhan bisnis, survey lahan komersial, dan kalkulasi investasi proyek." },
      { step: "02", title: "Finalisasi Desain & Izin", desc: "Penyelarasan gambar teknis arsitektur-sipil serta pendampingan pengurusan izin." },
      { step: "03", title: "Konstruksi & Manajemen K3", desc: "Pengerjaan fisik oleh tenaga ahli terlatih dengan protokol K3 ketat di lapangan." },
      { step: "04", title: "Testing & Handover", desc: "Commissioning test kelistrikan/plumbing dan penyerahan gedung siap pakai." }
    ],
    faqs: [
      { q: "Berapa lama estimasi konstruksi ruko / gedung 3 lantai?", a: "Pembangunan gedung komersial 2-4 lantai rata-rata memakan waktu 4 hingga 8 bulan, dipantau secara ketat dengan jadwal Manajemen Kurva-S." },
      { q: "Apakah tim menerapkan standar Keselamatan Kerja (K3)?", a: "Ya, tim lapangan kami terlatih dan dilengkapi APD K3 resmi untuk menjamin keselamatan kerja serta keamanan area sekitar proyek." },
      { q: "Bisakah menyesuaikan spesifikasi dengan anggaran perusahaan kami?", a: "Tentu. Tim insinyur kami siap melakukan value engineering untuk mengoptimalkan anggaran tanpa mengurangi kekuatan struktur utama." }
    ]
  },
  "renovasi-bangunan": {
    title: "Jasa Renovasi Bangunan & Gedung Malang",
    subtitle: "Modernisasi Fasad Depan, Penambahan Lantai, Redesain Ruko, & Perbaikan Atap",
    category: "Renovasi & Makeover",
    rating: "4.9 (96 ulasan)",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Perbaikan struktur & penambahan lantai dak cor bondek ringan",
      "Redesain fasad depan modern dengan material ACP & kisi-kisi besi",
      "Pengerjaan bersih tanpa mengganggu operasional gedung di sekitarnya"
    ],
    whatWeDo: [
      { icon: "bi-arrow-up-square", title: "Penambahan Lantai (Suntik)", desc: "Pekerjaan cor dak bondek & suntik kolom ceker ayam untuk penambahan tingkat." },
      { icon: "bi-front", title: "Makeover Fasad Depan", desc: "Penggantian tampak depan lama dengan ACP modern, louver alumunium, & lampu aksen." },
      { icon: "bi-roof-deck", title: "Renovasi Atap & Plumbing", desc: "Bongkar atap lapuk diganti rangka baja ringan kedap air dan perbaikan saluran air." },
      { icon: "bi-layout-split", title: "Penataan Sekat Ruangan", desc: "Pemasangan sekat partisi gipsum kedap suara untuk efisiensi fungsi ruangan baru." }
    ],
    advantages: [
      { icon: "bi-house-gear", title: "Solusi Tanpa Bongkar Total", desc: "Mengoptimalkan struktur lama untuk menghemat biaya renovasi secara signifikan." },
      { icon: "bi-shield-lock", title: "Audit Kekuatan Bangunan", desc: "Inspeksi daya dukung beton lama oleh tim sipil sebelum penambahan beban." },
      { icon: "bi-stars", title: "Tampilan Modern & Bernilai", desc: "Meningkatkan citra tempat usaha atau harga jual properti lama Anda." },
      { icon: "bi-brush", title: "Pengerjaan Rapi & Clean", desc: "Pengolahan puing dan kebersihan area sekitar proyek dijaga setiap hari." }
    ],
    workflow: [
      { step: "01", title: "Survey & Inspeksi Bangunan", desc: "Pemeriksaan kerusakan fisik bangunan lama dan analisis kebutuhan renovasi." },
      { step: "02", title: "Proposal Teknis & RAB", desc: "Penyusunan estimasi biaya perbaikan dan alternatif material yang efisien." },
      { step: "03", title: "Bongkar & Eksekusi", desc: "Pengerjaan renovasi terencana agar aktivitas sekitar tidak terganggu." },
      { step: "04", title: "Pembersihan & Purna Jual", desc: "Finishing cat bersih, pembersihan puing, & garansi kebocoran/perbaikan." }
    ],
    faqs: [
      { q: "Apakah rumah/gedung harus dikosongkan saat renovasi?", a: "Untuk renovasi skala kecil-menengah (seperti fasad/atap), gedung masih bisa dihuni/dipergunakan. Untuk penambahan lantai total, kami sarankan pengosongan area sementara." },
      { q: "Bagaimana menentukan apakah bangunan lama kuat ditambah lantai (dak cor)?", a: "Tim insinyur sipil kami akan melakukan inspeksi fisik & audit kekuatan struktur awal terlebih dahulu sebelum menyarankan penambahan kolom ceker ayam (suntik)." },
      { q: "Apakah ada garansi kebocoran untuk renovasi atap?", a: "Ya, setiap pengerjaan renovasi atap dan pemasangan waterproof dilengkapi garansi kebocoran resmi dari kami." }
    ]
  },
  "desain-interior": {
    title: "Jasa Desain Interior Bespoke Malang",
    subtitle: "Penataan Ruang Estetis, Custom Furniture Workshop Sendiri, & Finishing HPL/Duco",
    category: "Penataan Interior",
    rating: "4.9 (115 ulasan)",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Custom furniture buatan workshop sendiri dengan multipleks super",
      "Perencanaan tata cahaya (lighting mood) & aksen estetis",
      "Pemasangan rapi dan garansi engsel/hardware slow motion"
    ],
    whatWeDo: [
      { icon: "bi-cup-hot", title: "Custom Kitchen Set & Island", desc: "Pembuatan kitchen set ergonomis dengan top meja granit & engsel slow motion." },
      { icon: "bi-tv", title: "Backdrop TV & Wall Panel", desc: "Panel dinding dekoratif bermotif kayu/marmer dengan aksen lampu LED ambience." },
      { icon: "bi-door-closed", title: "Built-in Wardrobe & Bedframe", desc: "Lemari pakaian custom tinggi plafon & tempat tidur multifungsi hemat tempat." },
      { icon: "bi-lamp", title: "Tata Cahaya & Interior Office", desc: "Skema pencahayaan hangat, sekat kaca kantor, dan penataan ruang tamu estetis." }
    ],
    advantages: [
      { icon: "bi-shop", title: "Workshop Produksi Mandiri", desc: "Diproduksi di pabrik furnitur sendiri untuk jaminan harga kompetitif & presisi." },
      { icon: "bi-gem", title: "Material Multipleks Super 18mm", desc: "Bebas kayu serbuk (MDF murah), tahan kelembaban, & finishing HPL anti-gores." },
      { icon: "bi-magic", title: "Optimasi Ruang Menyimpan", desc: "Pemanfaatan sudut ruangan menjadi tempat penyimpanan rahasia yang rapi." },
      { icon: "bi-check-all", title: "Pemasangan Bersih & Garansi", desc: "Pemasangan cepat oleh tukang berpengalaman serta garansi hardware 6 bulan." }
    ],
    workflow: [
      { step: "01", title: "Survey & Pengukuran Ruang", desc: "Pengukuran dimensi 3D ruangan presisi dan diskusi konsep moodboard interior." },
      { step: "02", title: "Desain 3D & Pemilihan HPL", desc: "Visualisasi 3D ruangan beserta sampel fisik katalog material HPL & granit." },
      { step: "03", title: "Fabrikasi di Workshop", desc: "Pemotongan, perakitan, dan finishing furnitur di workshop Arsitek Malang." },
      { step: "04", title: "Instalasi Clean & Fitting", desc: "Pemasangan bersih di lokasi Anda, penyesuaian engsel, & siap digunakan." }
    ],
    faqs: [
      { q: "Apakah furnitur diproduksi sendiri atau beli jadi?", a: "Seluruh custom furniture (kitchen set, wardrobe, backdrop TV) diproduksi langsung di workshop furnitur milik Arsitek Malang dengan bahan multipleks super 18mm." },
      { q: "Berapa lama durasi produksi furnitur kustom?", a: "Proses fabrikasi di workshop memakan waktu sekitar 14-21 hari kerja, dan instalasi di lokasi Anda hanya butuh 2-3 hari." },
      { q: "Apakah engsel dan rel laci menggunakan fitur slow motion?", a: "Ya, standar kami menggunakan engsel dan rel laci soft-closing / slow motion bermerek (Blum / Hafele / Taco) dengan garansi hardware 6 bulan." }
    ]
  }
};

SERVICES_DATA['renovasi-gedung'] = SERVICES_DATA['renovasi-bangunan'];

function loadServiceDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id') || 'jasa-arsitek';
  const service = SERVICES_DATA[id] || SERVICES_DATA['jasa-arsitek'];

  const titleEl = document.getElementById('pageTitle');
  if (titleEl) titleEl.textContent = service.title + ' – Arsitek Malang';

  const heroTitleEl = document.getElementById('pageHeroTitle');
  if (heroTitleEl) heroTitleEl.textContent = service.title;

  const heroSubEl = document.getElementById('pageHeroSub');
  if (heroSubEl) heroSubEl.textContent = service.subtitle;

  const breadcrumbEl = document.getElementById('breadcrumbTitle');
  if (breadcrumbEl) breadcrumbEl.textContent = service.title;

  const catEl = document.getElementById('serviceCategory');
  if (catEl) catEl.textContent = service.category;

  const ratingEl = document.getElementById('serviceRating');
  if (ratingEl) ratingEl.textContent = service.rating;

  const mainTitleEl = document.getElementById('serviceTitle');
  if (mainTitleEl) mainTitleEl.textContent = service.title;

  const subtitleEl = document.getElementById('serviceSubtitle');
  if (subtitleEl) subtitleEl.textContent = service.subtitle;

  const imgEl = document.getElementById('serviceImage');
  if (imgEl) {
    imgEl.src = service.img;
    imgEl.alt = service.title;
  }

  const highlightsEl = document.getElementById('serviceHighlights');
  if (highlightsEl && service.highlights) {
    highlightsEl.innerHTML = service.highlights.map(h => `<div><i class="bi bi-check2 text-primary-custom me-2 fw-bold"></i>${h}</div>`).join('');
  }

  // Render Section 2: Apa yang Kami Kerjakan (Non-Card Minimalist Specification List)
  const whatWeDoEl = document.getElementById('whatWeDoGrid');
  if (whatWeDoEl && service.whatWeDo) {
    whatWeDoEl.innerHTML = `
      <div class="col-lg-10">
        <div class="d-flex flex-column gap-2">
          ${service.whatWeDo.map((item, idx) => `
            <div class="py-3 px-4 rounded-3 border-bottom d-flex align-items-start gap-4 scope-list-item" style="transition: all 0.25s ease;">
              <span class="fw-800 text-primary-custom" style="font-size:1.35rem; min-width:40px;">0${idx + 1}.</span>
              <div class="flex-grow-1">
                <h5 class="fw-800 mb-1" style="font-size:1.1rem; color:#0f172a;">${item.title}</h5>
                <p class="text-muted extra-small mb-0" style="line-height:1.75;">${item.desc}</p>
              </div>
              <div class="text-primary-custom fs-4 flex-shrink-0">
                <i class="bi ${item.icon}"></i>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Render Section 3: Keunggulan Jasa Ini (2 Large Horizontal Highlight Banners)
  const advantagesEl = document.getElementById('advantagesGrid');
  if (advantagesEl && service.advantages) {
    advantagesEl.innerHTML = service.advantages.map((item, idx) => `
      <div class="col-md-6">
        <div class="p-4 h-100 rounded-4 shadow-sm position-relative overflow-hidden" style="background:linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%); border:1px solid #cbd5e1;">
          <div class="mb-3 text-primary-custom" style="font-size:1.6rem;">
            <i class="bi ${item.icon}"></i>
          </div>
          <h5 class="fw-800 mb-2" style="font-size:1.15rem; color:#0f172a;">${item.title}</h5>
          <p class="text-muted extra-small mb-0" style="line-height:1.7;">${item.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Render Section 4: Alur Kerja (Connected Process Flow with top progress accent)
  const workflowEl = document.getElementById('workflowGrid');
  if (workflowEl && service.workflow) {
    workflowEl.innerHTML = service.workflow.map(item => `
      <div class="col-lg-3 col-md-6">
        <div class="p-4 h-100 rounded-3 border shadow-sm position-relative" style="background:#ffffff; border-top:3px solid var(--accent-color) !important;">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <span class="fw-900 text-primary-custom" style="font-size:1.8rem; line-height:1;">${item.step}</span>
            <span class="badge bg-secondary-subtle text-secondary rounded-pill extra-small">Tahap ${item.step}</span>
          </div>
          <h5 class="fw-800 mb-2" style="font-size:1.05rem; color:#0f172a;">${item.title}</h5>
          <p class="text-muted extra-small mb-0" style="line-height:1.6;">${item.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Render Section 5: FAQ Accordion
  const faqEl = document.getElementById('faqAccordion');
  if (faqEl && service.faqs) {
    faqEl.innerHTML = service.faqs.map((faq, index) => `
      <div class="accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm">
        <h2 class="accordion-header" id="headingFAQ${index}">
          <button class="accordion-button ${index === 0 ? '' : 'collapsed'} fw-700 text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFAQ${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapseFAQ${index}">
            <i class="bi bi-question-circle-fill text-primary-custom me-2"></i> ${faq.q}
          </button>
        </h2>
        <div id="collapseFAQ${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="headingFAQ${index}" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted extra-small" style="line-height:1.75; background:#fafafa;">
            ${faq.a}
          </div>
        </div>
      </div>
    `).join('');
  }

  const btnWATop = document.getElementById('btnWAServiceTop');
  if (btnWATop) {
    btnWATop.setAttribute('onclick', `openWA('Konsultasi ${service.title}')`);
  }

  // Dynamic Meta Description & OpenGraph Tags for SEO & GEO
  const metaDescEl = document.getElementById('metaDesc');
  if (metaDescEl) {
    metaDescEl.setAttribute('content', `${service.title} di Malang Raya. ${service.subtitle}. Layanan profesional oleh tim Arsitek Malang.`);
  }

  const ogTitleEl = document.getElementById('ogTitle');
  if (ogTitleEl) ogTitleEl.setAttribute('content', `${service.title} – Arsitek Malang`);

  const ogDescEl = document.getElementById('ogDesc');
  if (ogDescEl) ogDescEl.setAttribute('content', `${service.subtitle}. Konsultasikan proyek Anda bersama Arsitek Malang.`);

  const ogImgEl = document.getElementById('ogImage');
  if (ogImgEl) ogImgEl.setAttribute('content', service.img);

  // Dual Schema: Service + FAQPage for AI Engine / GEO Citations
  const ldGraph = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.title,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Arsitek Malang",
        "image": service.img,
        "telephone": "+6288989643555",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Soekarno Hatta No. 45, Lowokwaru",
          "addressLocality": "Malang",
          "addressRegion": "Jawa Timur",
          "postalCode": "65141",
          "addressCountry": "ID"
        }
      },
      "description": service.subtitle,
      "serviceType": service.category,
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Malang Raya"
      }
    }
  ];

  if (service.faqs && service.faqs.length > 0) {
    ldGraph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": service.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    });
  }

  const ldScript = document.getElementById('jsonLdService');
  if (ldScript) {
    ldScript.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": ldGraph }, null, 2);
  }
}

/* ================================================
   GALLERY DATA & DETAIL PAGE LOADER
================================================ */
const GALLERY_DATA = {
  "1": {
    title: "Menara Sinergi Nusantara",
    category: "Proyek Komersial",
    location: "Lowokwaru, Malang",
    year: "2026",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    desc: "Menara Sinergi Nusantara merupakan kompleks gedung perkantoran komersial 12 lantai dengan konsep fasad kaca hemat energi. Dirancang dengan mengutamakan pencahayaan alami dan struktur beton bertulang yang kokoh berstandar internasional.",
    highlights: [
      "Fasad kaca double-glazed hemat energi hingga 30%",
      "Struktur beton bertulang tahan gempa zona Malang",
      "Sistem kelistrikan terpadu & integrasi smart building"
    ]
  },
  "2": {
    title: "Residensi Dharmawangsa",
    category: "Proyek Hunian",
    location: "Batu, Malang",
    year: "2026",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    desc: "Residensi Dharmawangsa menyajikan arsitektur hunian tropis modern dengan mengusung kenyamanan bukaan ruang terbuka, infinity pool pribadi, serta perpaduan material kayu jati eksterior dan dinding batu alam.",
    highlights: [
      "Konsep hunian tropis modern dengan ventilasi silang optimal",
      "Kolam renang pribadi dengan pemandangan pegunungan Batu",
      "Finishing interior kustom dan tata ruang terbuka fleksibel"
    ]
  },
  "3": {
    title: "Nexus Tech Hub",
    category: "Desain Interior Workspace",
    location: "Bandung",
    year: "2023",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    desc: "Desain interior ruang kerja kolaboratif bergaya minimalis industrial. Dirancang untuk mendorong produktivitas tim startup dengan ruang pertemuan akustik dan area santai yang nyaman.",
    highlights: [
      "Pencahayaan LED ergonomis & peredam suara profesional",
      "Bespoke furniture modular yang mudah diatur ulang",
      "Area komunal hijau dengan tanaman pemurni udara"
    ]
  },
  "4": {
    title: "Urban Loft Retail",
    category: "Renovasi Komersial",
    location: "Surabaya",
    year: "2023",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    desc: "Proyek renovasi penataan ulang ruko tua 3 lantai menjadi ruang retail dan showroom modern dengan penambahan struktur mezzanine baja dan fasad ekspos kontemporer.",
    highlights: [
      "Struktur mezzanine baja ringan berkekuatan tinggi",
      "Pembaruan tata cahaya pencahayaan produk retail",
      "Fasad ekspos modern dengan kaca tempered lebar"
    ]
  },
  "5": {
    title: "Villa Lembang",
    category: "Proyek Hunian Tropis",
    location: "Lembang, Bandung",
    year: "2026",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    desc: "Villa istirahat keluarga di kawasan sejuk Lembang. Menyoroti arsitektur kayu alam, atap tinggi bersudut tajam untuk aliran udara, serta lanskap taman alami terintegrasi.",
    highlights: [
      "Material kayu bertreatment tahan cuaca lembab",
      "Tata letak ruangan bertingkat mengikut kontur tanah",
      "Bukaan jendela panoramik menghadap lanskap bukit"
    ]
  },
  "6": {
    title: "Ruko Kota Baru Malang",
    category: "Konstruksi Komersial",
    location: "Sukun, Malang",
    year: "2023",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    desc: "Pembangunan kawasan bisnis ruko 3 lantai serbaguna. Mengintegrasikan tempat usaha lantai bawah dengan ruang kantor modern di lantai atas.",
    highlights: [
      "Fasad modern dengan aksen kanopi almunium composite",
      "Akses parkir luas dan sistem keamanan terpadu",
      "Drainase tanah efisien bebas risiko genangan"
    ]
  },
  "7": {
    title: "Restoran Lantern Fine Dining",
    category: "Desain Interior Restoran",
    location: "Klojen, Malang",
    year: "2026",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    desc: "Perancangan interior tempat makan mewah dengan nuansa pencahayaan hangat. Mengombinasikan aksen kayu gelap, marmer sintetis, dan tata letak meja eksklusif.",
    highlights: [
      "Ambience lighting profesional dengan dimming pintar",
      "Bespoke booth seating & partisi ruang privat kayu",
      "Dapur komersial stainless steel berstandar higienis"
    ]
  },
  "8": {
    title: "Cluster Permata Batu",
    category: "Perumahan & Hunian",
    location: "Batu, Malang",
    year: "2026",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    desc: "Perencanaan dan pembangunan perumahan cluster eksklusif 20 unit di Batu. Desain fasad mengusung gaya tropis minimalis yang menyatu harmoni dengan alam pegunungan.",
    highlights: [
      "Masterplan kawasan terpadu dengan one-gate system",
      "Jalan lingkungan paving block premium lebar 7 meter",
      "Jaminan garansi struktur bangunan 12 bulan penuh"
    ]
  }
};

function initGalleryDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || '1';
  const item = GALLERY_DATA[id] || GALLERY_DATA['1'];

  const pageTitle = document.getElementById('pageTitle');
  if (pageTitle) pageTitle.textContent = item.title + ' – Detail Karya Arsitek Malang';

  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) heroTitle.textContent = item.title;

  const breadcrumbTitle = document.getElementById('breadcrumbTitle');
  if (breadcrumbTitle) breadcrumbTitle.textContent = item.title;

  const galleryTitle = document.getElementById('galleryTitle');
  if (galleryTitle) galleryTitle.textContent = item.title;

  const galleryCategory = document.getElementById('galleryCategory');
  if (galleryCategory) galleryCategory.textContent = item.category;

  const galleryLocation = document.getElementById('galleryLocation');
  if (galleryLocation) galleryLocation.innerHTML = `<i class="bi bi-geo-alt-fill text-danger me-1"></i>${item.location} • ${item.year}`;

  const galleryDesc = document.getElementById('galleryDesc');
  if (galleryDesc) galleryDesc.textContent = item.desc;

  const galleryDetailImg = document.getElementById('galleryDetailImg');
  if (galleryDetailImg) {
    galleryDetailImg.src = item.img;
    galleryDetailImg.alt = item.title;
  }

  const galleryHighlights = document.getElementById('galleryHighlights');
  if (galleryHighlights && item.highlights) {
    galleryHighlights.innerHTML = item.highlights.map(h => `<div><i class="bi bi-check2 text-primary-custom me-2 fw-bold"></i>${h}</div>`).join('');
  }

  const btnWAProject = document.getElementById('btnWAProject');
  if (btnWAProject) {
    btnWAProject.setAttribute('onclick', `openWA('Konsultasi Proyek ${item.title}')`);
  }
}

/* ================================================
   DOMContentLoaded – Init All (Performance Optimized)
================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initMobileNav();
  initScrollHandlers();
  initGalleryFilter();
  initFAQ();
  initArticleTracker();
  initPopularArticlesSort();

  if (document.getElementById('galleryDetailImg')) {
    initGalleryDetail();
  }
  if (document.getElementById('whatWeDoGrid') || document.getElementById('serviceTitle')) {
    loadServiceDetail();
  }
  if (document.getElementById('articleBody')) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;
    if (typeof loadArticleDetail === 'function') {
      loadArticleDetail(id);
    }
  }

  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      initAOS();
      initSwipers();
      initLinkPrefetch();
    });
  } else {
    setTimeout(() => {
      initAOS();
      initSwipers();
      initLinkPrefetch();
    }, 120);
  }
});

window.addEventListener('load', () => {
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
});

/* ================================================
   Article View Tracker & Popularity Ranker
================================================ */
function initArticleTracker() {
  try {
    const path = window.location.pathname.split('/').pop();
    if (path && path.endsWith('.html') && !['index.html', 'blog.html', 'services.html', 'about.html', 'gallery.html'].includes(path)) {
      const key = 'article_views_' + path;
      const views = parseInt(localStorage.getItem(key) || '0', 10) + 1;
      localStorage.setItem(key, views);
    }
  } catch (e) {
    console.warn('Tracker error:', e);
  }
}

function initPopularArticlesSort() {
  const popularContainer = document.getElementById('popularArticlesList');
  if (!popularContainer) return;

  const articlesData = [
    {
      url: 'arsitek-malang-terkenal.html',
      title: 'Rekomendasi Jasa Arsitek Malang Terkenal untuk Bangun Rumah Mewah & Komersial',
      date: '25 Agt 2026',
      img: 'assets/img/portofolio-arsitektur-malang.webp'
    },
    {
      url: 'desain-rumah-minimalis-arsitek-malang.html',
      title: 'Katalog Desain Rumah Minimalis Modern karya Arsitek Malang Terkenal',
      date: '25 Agt 2026',
      img: 'assets/img/katalog-rumah-minimalis-2-lantai.webp'
    },
    {
      url: 'paket-jasa-arsitek-malang.html',
      title: 'Spesifikasi Paket Jasa Desain Bangunan Arsitek Malang Terkenal',
      date: '25 Agt 2026',
      img: 'assets/img/rancang-bangun-terintegrasi.webp'
    },
    {
      url: 'jasa-desain-bangunan-komersial-dan-cafe-malang.html',
      title: 'Jasa Desain Bangunan Komersial dan Cafe dari Arsitek Malang',
      date: '23 Agt 2026',
      img: 'assets/img/jasa-desain-bangunan-komersial-cafe.webp'
    },
    {
      url: 'desain-rumah-minimalis-mewah-malang.html',
      title: 'Produk Desain Rumah Minimalis Mewah Karya Arsitek Malang',
      date: '23 Agt 2026',
      img: 'assets/img/desain-rumah-minimalis-mewah-malang.webp'
    },
    {
      url: 'arsitek-terbaik-di-malang.html',
      title: 'Arsitek Terbaik di Malang: Layanan Desain dan Bangun',
      date: '23 Agt 2026',
      img: 'assets/img/arsitek-terbaik-malang.webp'
    },
    {
      url: 'tren-desain-rumah-2026.html',
      title: 'Tren Desain Rumah 2026: Menyatukan Alam dan Teknologi',
      date: '22 Agt 2026',
      img: 'assets/img/tren-desain-rumah-2026.webp'
    },
    {
      url: 'panduan-memilih-arsitek-malang.html',
      title: 'Pentingnya Menggunakan Jasa Arsitek Profesional',
      date: '21 Agt 2026',
      img: 'assets/img/panduan-arsitek-profesional.webp'
    },
    {
      url: 'estimasi-biaya-bangun-rumah-malang.html',
      title: 'Panduan Material Ramah Lingkungan untuk Konstruksi',
      date: '21 Agt 2026',
      img: 'assets/img/material-ramah-lingkungan-konstruksi.webp'
    }
  ];

  try {
    articlesData.forEach(item => {
      const key = 'article_views_' + item.url;
      item.views = parseInt(localStorage.getItem(key) || '0', 10);
    });

    const sortedByViews = [...articlesData].sort((a, b) => b.views - a.views);
    const popularList = sortedByViews.slice(0, 4);

    popularContainer.innerHTML = popularList.map(item => {
      let imgSrc = item.img || '';
      if (!imgSrc.startsWith('http') && imgSrc.startsWith('/')) {
        imgSrc = imgSrc.substring(1);
      }
      return `
        <div class="d-flex gap-3 align-items-start" style="cursor:pointer;" onclick="location.href='${item.url}'">
          <img src="${imgSrc}" alt="${item.title}" style="width:64px; height:64px; border-radius:8px; object-fit:cover; flex-shrink:0;" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80';">
          <div>
            <p class="fw-700 extra-small mb-1 lh-sm">${item.title}</p>
            <small class="text-muted">${item.date}</small>
          </div>
        </div>
      `;
    }).join('');
  } catch (e) {
    console.warn('Popular sort error:', e);
  }
}
