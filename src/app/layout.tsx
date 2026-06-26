import { SessionProvider } from "@/components/SessionProvider";
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
      {/* Changed background to white and text to black */}
      <body className="min-h-screen bg-white text-black overflow-x-hidden antialiased">
        <SessionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          {/* Changed theme to light to match your new site aesthetic */}
          <Toaster theme="light" richColors />
        </SessionProvider>
      </body>
    </html>
  );
}