import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#050505] text-white overflow-x-hidden antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}