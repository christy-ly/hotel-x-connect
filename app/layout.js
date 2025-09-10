import { Geist, Geist_Mono } from "next/font/google";
import "./_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hotel X",
  description: "Hotel X Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-gray-800 min-h-screen text-white flex flex-col `}
      >
        <Header />
        <div className="flex-1 px-8 py-12 ">
          <main className="max-w-7xl mx-auto"> {children}</main>
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
