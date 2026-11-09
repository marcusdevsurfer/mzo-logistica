import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Loader from "./Components/Loader";

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

const roboto = localFont({
  src: [
    { path: "../public/fonts/roboto/Roboto-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/roboto/Roboto-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/roboto/Roboto-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-roboto-local",
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
      className={`${builtTitling.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Loader />
        {children}
      </body>
    </html>
  );
}
