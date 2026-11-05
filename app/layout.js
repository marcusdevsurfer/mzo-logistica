import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const builtTitling = localFont({
  src: "../public/built titling bd.otf",
  variable: "--font-built-titling",
  display: "swap",
});

export const metadata = {
  title: "Logistica y Transporte ZLO",
  description: "Pagina web de Logistica y Transporte ZLO",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${builtTitling.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
