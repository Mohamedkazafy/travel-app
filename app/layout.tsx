import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footerpart from "@/components/footerpart"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel ",
  description: "Travel for camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footerpart/>
        </body>
    </html>
  );
}
