import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.samuelmontalvo.com"),
  title: {
    default: "Samuel Montalvo, PhD | Personalized Exercise Medicine",
    template: "%s | Samuel Montalvo, PhD",
  },
  description:
    "Research in personalized exercise medicine through MoTrPAC, cardiopulmonary exercise testing, athlete ECG, and digital health.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      "x-default": "/",
    },
  },
  keywords: [
    "personalized exercise medicine",
    "exercise physiology",
    "multi-omics",
    "biomechanics",
    "MoTrPAC",
    "CPET",
    "cardiopulmonary exercise testing",
    "ECG",
    "electrocardiography",
    "sports cardiology",
    "clinical exercise physiology",
    "sports performance",
    "AI agents",
    "research apps",
    "Stanford",
    "Samuel Montalvo",
  ],
  authors: [{ name: "Samuel Montalvo, PhD" }],
  openGraph: {
    type: "website",
    title: "Samuel Montalvo, PhD | Personalized Exercise Medicine",
    description:
      "Research in personalized exercise medicine through MoTrPAC, cardiopulmonary exercise testing, athlete ECG, and digital health.",
    url: "https://www.samuelmontalvo.com",
    siteName: "Samuel Montalvo, PhD",
    locale: "en_US",
    alternateLocale: ["es_US"],
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
      "Research in personalized exercise medicine through MoTrPAC, cardiopulmonary exercise testing, athlete ECG, and digital health.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-site-locale") === "es" ? "es" : "en";

  return (
    <html lang={locale}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
