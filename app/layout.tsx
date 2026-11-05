import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.scss";

const body = Inter({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const display = Unbounded({ subsets: ["latin", "cyrillic"], weight: ["300", "400", "500"], variable: "--font-display", display: "swap" });

const title = "IV-терапія в естетичній та anti-age медицині — EstyDerm IV Course";
const description = "Від біохімічних механізмів до персоналізованих рішень у клінічній практиці. Онлайн-курс для лікарів: 8+ годин, теорія та практика, доступ на 1 рік.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { type: "website", siteName: "EstyDerm · IV Course", title, description, locale: "uk_UA" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" className={`${body.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
