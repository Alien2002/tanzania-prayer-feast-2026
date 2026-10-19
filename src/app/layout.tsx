import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import "./globals.css";
const headingFont = localFont({
  src: [
    { path: "./fonts/cormorant-500.ttf", weight: "500" },
    { path: "./fonts/cormorant-600.ttf", weight: "600" },
    { path: "./fonts/cormorant-700.ttf", weight: "700" },
  ],
  variable: "--font-heading",
  display: "swap",
});
const bodyFont = localFont({
  src: [
    { path: "./fonts/montserrat-400.ttf", weight: "400" },
    { path: "./fonts/montserrat-500.ttf", weight: "500" },
    { path: "./fonts/montserrat-600.ttf", weight: "600" },
  ],
  variable: "--font-body",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "Prayer Feast 2026 · TYPA",
    template: "%s · Prayer Feast 2026 · TYPA",
  },
  description:
    "Join Tanzania Youth Prayer Assembly on 9 December 2026 in Dar es Salaam for a day of prayer, worship and teaching. Territorial Transformation.",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#14102b",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
