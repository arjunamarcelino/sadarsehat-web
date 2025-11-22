# SadarSehat Web

Platform AI untuk memverifikasi hoaks kesehatan, meningkatkan literasi publik, dan memperkuat ketahanan ekosistem kesehatan digital Indonesia.

## 📋 Tentang Proyek

SadarSehat adalah platform web yang didukung oleh Agentic AI untuk membantu masyarakat memverifikasi informasi kesehatan secara instan. Platform ini menyediakan berbagai fitur termasuk verifikasi hoaks, kuis edukatif, dan dashboard analitik untuk memetakan tren misinformasi kesehatan di Indonesia.

## ✨ Fitur Utama

### 1. **Verifikasi Hoaks** (`/verifikasi-hoaks`)
- Chatbot AI untuk verifikasi informasi kesehatan
- Mendukung input teks, link, dan file (gambar/PDF)
- Penjelasan edukatif dengan referensi terpercaya
- Hardcoded responses untuk topik kesehatan umum

### 2. **Kuis Hoaks atau Fakta** (`/kuis`)
- Bank soal dengan 10 pertanyaan kesehatan
- Pilihan layout tampilan (Mobile, Tablet, TV Interactive, Desktop)
- Soal acak dengan penjelasan singkat dan lengkap
- Simulasi tampilan perangkat yang dipilih

### 3. **Dashboard Analitik** (`/dashboard-analitik`)
- **Tren Hoaks Kesehatan Nasional**: Grafik tren harian/mingguan/bulanan
- **Peta Persebaran Hoaks**: Heatmap Indonesia
- **Skor Literasi Kesehatan Publik**: Berdasarkan hasil kuis
- **Insight Fasilitas Kesehatan**: Data dari puskesmas dan rumah sakit
- **Emerging Threat Detection**: Deteksi hoaks baru dengan AI
- **Library Insight**: Tren Myth-Fact dari library
- **Statistik Verifikasi AI**: Metrik umum dashboard
- **Rekomendasi Kebijakan Berbasis AI**: Saran berbasis data
- **Ekspor & Integrasi**: Fitur ekspor data dan integrasi API

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 15.4.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.23.24
- **Icons**: Lucide React
- **UI Components**: 
  - Radix UI (Tabs)
  - Material-UI Lab (Timeline)
- **Fonts**: Plus Jakarta Sans & Source Sans 3
- **Smooth Scroll**: Lenis

## 🚀 Getting Started

### Prerequisites

- Node.js 20 atau lebih baru
- npm, yarn, pnpm, atau bun

### Installation

1. Clone repository:
```bash
git clone <repository-url>
cd sadarsehat-web
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Jalankan development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

## 📁 Struktur Proyek

```
sadarsehat-web/
├── app/
│   ├── _components/          # Komponen reusable
│   │   ├── dashboard/       # Komponen dashboard
│   │   ├── hoax-verification/ # Komponen verifikasi hoaks
│   │   ├── home/            # Komponen halaman utama
│   │   ├── quiz/            # Komponen kuis
│   │   └── ui/              # Komponen UI dasar
│   ├── _hooks/              # Custom hooks
│   ├── _libs/               # Utilities
│   ├── _providers/          # Context providers
│   ├── (routes)/            # Route pages
│   │   ├── dashboard-analitik/
│   │   ├── kuis/
│   │   ├── verifikasi-hoaks/
│   │   └── page.tsx         # Home page
│   ├── layout.tsx           # Root layout
│   └── providers.tsx        # App providers
├── public/                  # Static assets
│   ├── fonts/              # Font files
│   ├── icons/              # SVG icons
│   └── images/             # Images
├── styles/                 # Global styles
│   ├── font.css            # Font definitions
│   ├── index.css           # Main styles
│   └── theme.css           # Theme variables
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: Emerald Health (`#0BB586`)
- **Secondary**: Teal Deep (`#006D77`)
- **Alert**: Alert Orange (`#FF914D`)
- **Background**: Warm Sand, Soft Mint
- **Text**: Teal Deep, Dark Medium

### Typography
- **Heading**: Plus Jakarta Sans (Bold, SemiBold, Medium)
- **Body**: Source Sans 3 (Regular, Medium, SemiBold, Bold)

## 📄 Available Routes

- `/` - Halaman utama dengan hero, fitur, dan CTA
- `/verifikasi-hoaks` - Halaman verifikasi hoaks dengan chatbot
- `/kuis` - Halaman kuis "Hoaks atau Fakta?"
- `/dashboard-analitik` - Dashboard analitik dengan 9 section

## 🧪 Development

### Build untuk Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Linting

```bash
npm run lint
```

## 🚢 Deployment

Aplikasi ini sudah di-deploy dan dapat diakses di:
- **🌐 Live URL**: [https://sadarsehat.vercel.app/](https://sadarsehat.vercel.app/)

### Platform Deployment

Aplikasi ini dapat di-deploy ke platform seperti:
- **Vercel** (Recommended untuk Next.js) ✅ *Currently deployed here*
- **Netlify**
- **AWS Amplify**
- Platform lainnya yang mendukung Next.js

### Deploy ke Vercel

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Vercel akan otomatis detect Next.js dan melakukan build
4. Setelah build berhasil, aplikasi akan tersedia di URL yang diberikan Vercel

## 📝 Notes

- Aplikasi menggunakan Turbopack untuk development (faster builds)
- Fonts di-load secara lokal dari `/public/fonts`
- Hardcoded responses untuk beberapa topik kesehatan umum (vaksin, hipertensi, TB, cacar air)
- Chart components menggunakan custom SVG untuk performa optimal

## 📄 License

Private project - All rights reserved

## 👥 Kontributor

SadarAI - 2025
