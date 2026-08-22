import type { Metadata } from "next";
import { PortfolioPage } from "../page";

export const metadata: Metadata = {
  title: {
    absolute: "Samuel Montalvo, PhD | Medicina del ejercicio personalizada",
  },
  description:
    "Investigación en MoTrPAC, rendimiento deportivo, CPET, ECG, fisiología clínica del ejercicio y herramientas con IA.",
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
      "Investigación en MoTrPAC, rendimiento deportivo, CPET, ECG, fisiología clínica del ejercicio y herramientas con IA.",
    url: "https://www.samuelmontalvo.com/es",
  },
  twitter: {
    title: "Samuel Montalvo, PhD | Medicina del ejercicio personalizada",
    description:
      "Investigación en MoTrPAC, rendimiento deportivo, CPET, ECG, fisiología clínica del ejercicio y herramientas con IA.",
  },
};

export default function SpanishHome() {
  return <PortfolioPage locale="es" />;
}
