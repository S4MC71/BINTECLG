import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import NoticeTicker from "@/components/home/NoticeTicker";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "BITC — Bangladesh Institute of Technology & Commerce",
    template: "%s | BITC",
  },
  description:
    "Bangladesh Institute of Technology & Commerce (BITC) is a premier National University-affiliated institution offering BBA, CSE, LLB, MBA, and M.Ed programs.",
  keywords: [
    "BITC",
    "Bangladesh Institute of Technology Commerce",
    "National University college",
    "BBA college Bangladesh",
    "CSE college Bangladesh",
    "LLB college",
  ],
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "BITC — Bangladesh Institute of Technology & Commerce",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts — loaded via link tag for Tailwind v4 CSS pipeline compatibility */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Sticky Navbar */}
        <Navbar />

        {/* Notice Ticker — sticky below navbar, always visible */}
        <div className="sticky top-16 z-40">
          <NoticeTicker />
        </div>

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
