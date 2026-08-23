import type { Metadata } from "next";
import { PortfolioPage } from "../page";

export const metadata: Metadata = {
  title: {
    absolute: "Samuel Montalvo, PhD | Medicina del ejercicio personalizada",
  },
  description:
    "Investigación en MoTrPAC, rendimiento deportivo, CPET, ECG, fisiología clínica del ejercicio y herramientas con IA.",
  keywords: [
    "medicina personalizada del ejercicio",
    "fisiología clínica del ejercicio",
    "multiómica",
    "biomecánica",
    "MoTrPAC",
    "prueba cardiopulmonar de ejercicio",
    "electrocardiografía",
    "cardiología deportiva",
    "rendimiento deportivo",
    "agentes de IA",
    "aplicaciones de investigación",
    "Stanford",
    "Samuel Montalvo",
  ],
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    alternateLocale: ["en_US"],
    title: "Samuel Montalvo, PhD | Medicina del ejercicio personalizada",
    description:
      "Investigación en MoTrPAC, rendimiento deportivo, CPET, ECG, fisiología clínica del ejercicio y herramientas con IA.",
    url: "https://www.samuelmontalvo.com/es",
    siteName: "Samuel Montalvo, PhD",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Vista previa del sitio de investigación de Samuel Montalvo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Montalvo, PhD | Medicina del ejercicio personalizada",
    description:
      "Investigación en MoTrPAC, rendimiento deportivo, CPET, ECG, fisiología clínica del ejercicio y herramientas con IA.",
    images: ["/og.png"],
  },
};

export default function SpanishHome() {
  return <PortfolioPage locale="es" />;
}
