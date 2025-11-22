import type { Metadata } from "next";
import "../styles/index.css";
import { Providers } from "./providers";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "SadarSehat – AI Verifikasi Hoaks & Literasi Kesehatan Indonesia",
  description: "SadarSehat adalah platform AI untuk memverifikasi hoaks kesehatan, meningkatkan literasi publik, dan memperkuat ketahanan ekosistem kesehatan digital Indonesia.",
  openGraph: {
    title: "SadarSehat – AI yang Menjernihkan Informasi Kesehatan",
    description: "Melindungi masyarakat dari hoaks kesehatan. Verifikasi instan, penjelasan akurat, dan edukasi adaptif dengan Agentic AI.",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "SadarSehat",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
