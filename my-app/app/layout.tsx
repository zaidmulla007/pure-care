import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ConsultationModal from "@/components/ConsultationModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pure Care Auto Accessories | Premium Car Care in Sharjah, UAE",
  description:
    "Pure Care Auto Accessories TR. L.L.C — Premium car tinting, wrapping, ceramic coating, PPF, car detailing, and auto accessories services in Sharjah, UAE. Contact: +971 58 636 8849",
  keywords:
    "car tinting sharjah, car wrapping UAE, ceramic coating sharjah, PPF sharjah, car detailing, auto accessories, pure care, car polish, graphene coating, seat covers sharjah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <FloatingActions />
        <ConsultationModal />
        <Footer />
      </body>
    </html>
  );
}
