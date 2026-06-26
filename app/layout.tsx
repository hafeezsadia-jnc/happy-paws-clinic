import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Happy Paws Veterinary Clinic — Compassionate Pet Care",
    template: "%s | Happy Paws Veterinary Clinic",
  },
  description:
    "Modern veterinary clinic offering wellness exams, vaccinations, dental care, surgery and 24/7 emergency care. Book your appointment online in minutes.",
  keywords: [
    "veterinary clinic",
    "pet care",
    "vet appointment",
    "animal hospital",
    "emergency vet",
  ],
  openGraph: {
    title: "Happy Paws Veterinary Clinic",
    description: "Compassionate care for every paw. Book online today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <WhatsAppButton />
      </body>
    </html>
  );
}
