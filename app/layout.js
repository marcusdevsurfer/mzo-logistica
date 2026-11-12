import localFont from "next/font/local";
import "./globals.css";
import Loader from "./Components/Loader";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

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

// Colors
// #86BFF9

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Loader />
        {children}
      </body>
    </html>
  );
}
