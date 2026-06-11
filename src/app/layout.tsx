import { SessionProvider } from "@/components/SessionProvider"; // Custom wrapper
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import type { Metadata } from 'next'; 
import "./globals.css";

export const metadata: Metadata = {
  title: "239 | The Business Developer LLP",
  description: "Helping brands scale with strategy that moves the needle.",
  keywords: ['Business Development', 'Digital Marketing', 'Growth Strategy'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-[#050505] text-white overflow-x-hidden antialiased">
        {/* Wrap content in SessionProvider */}
        <SessionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster theme="dark" richColors />
        </SessionProvider>
      </body>
    </html>
  );
}