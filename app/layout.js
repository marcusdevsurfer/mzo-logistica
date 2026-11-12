import localFont from "next/font/local";
import "./globals.css";
import Loader from "./Components/Loader";


const sourceSans3 = localFont({
  src: [
    { path: "/../public/fonts/source-sans/SourceSans3.ttf", weight: "400" },
  ],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata = {
  title: "Logística y Transporte ZLO",
  description: "Página web de Logística y Transporte ZLO",
};

// Colors
// #86BFF9

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sourceSans3.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Loader />
        {children}
      </body>
    </html>
  );
}
