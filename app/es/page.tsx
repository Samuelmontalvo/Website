import type { Metadata } from "next";
import { PortfolioPage } from "../page";

export const metadata: Metadata = {
  title: {
    absolute: "Samuel Montalvo, PhD | Medicina del ejercicio personalizada",
  },
  description:
    "Investigación sobre las respuestas individuales al ejercicio y herramientas para fisiología, biomecánica y multiómica.",
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    title: "Samuel Montalvo, PhD | Medicina del ejercicio personalizada",
    description:
      "Investigación sobre las respuestas individuales al ejercicio y herramientas para fisiología, biomecánica y multiómica.",
    url: "https://www.samuelmontalvo.com/es",
  },
  twitter: {
    title: "Samuel Montalvo, PhD | Medicina del ejercicio personalizada",
    description:
      "Investigación sobre las respuestas individuales al ejercicio y herramientas para fisiología, biomecánica y multiómica.",
  },
};

export default function SpanishHome() {
  return <PortfolioPage locale="es" />;
}
