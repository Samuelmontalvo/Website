import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.samuelmontalvo.com"),
  title: {
    default: "Samuel Montalvo, PhD | Personalized Exercise Medicine",
    template: "%s | Samuel Montalvo, PhD",
  },
  description:
    "Research across MoTrPAC, sports performance, CPET, ECG, clinical exercise physiology, and AI-enabled tools.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  keywords: [
    "personalized exercise medicine",
    "exercise physiology",
    "multi-omics",
    "biomechanics",
    "MoTrPAC",
    "CPET",
    "ECG",
    "sports performance",
    "AI research tools",
    "Stanford",
    "Samuel Montalvo",
  ],
  authors: [{ name: "Samuel Montalvo, PhD" }],
  openGraph: {
    type: "website",
    title: "Samuel Montalvo, PhD | Personalized Exercise Medicine",
    description:
      "Research across MoTrPAC, sports performance, CPET, ECG, clinical exercise physiology, and AI-enabled tools.",
    url: "https://www.samuelmontalvo.com",
    siteName: "Samuel Montalvo, PhD",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Samuel Montalvo personal research website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Montalvo, PhD | Personalized Exercise Medicine",
    description:
      "Research across MoTrPAC, sports performance, CPET, ECG, clinical exercise physiology, and AI-enabled tools.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
