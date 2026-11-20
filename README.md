# Klikkenyang.id

Versi struktur terpisah dari prototype HTML yang diberikan. Markup, teks, data mock, dan logika JavaScript dipertahankan; kode aplikasi hanya dipindahkan ke file terpisah.

## Struktur

```text
klikkenyang-final/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        ├── data.js
        └── app.js
```

## Menjalankan lokal

Buka folder ini di VS Code, lalu jalankan `index.html` menggunakan Live Server atau server statis lokal. Koneksi internet diperlukan untuk CDN Tailwind, Google Fonts, dan Font Awesome.

## Deploy tanpa Git

Instal Node.js, lalu di terminal pada folder project jalankan:

```bash
npm install -g vercel
vercel
```

Ikuti login dan pilihan project. Untuk deployment production berikutnya jalankan:

```bash
vercel --prod
```

Vercel akan memberikan URL `*.vercel.app`. Deployment dilakukan dari komputer lokal melalui Vercel CLI, bukan Git push.

## Catatan

Data warung/menu dan status stok masih mock data lokal sesuai prototype; belum ada backend/database atau sinkronisasi real-time.
