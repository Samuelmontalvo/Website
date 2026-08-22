type Locale = "en" | "es";

const projectAreas = {
  en: [
    {
      label: "NIH consortium",
      title: "MoTrPAC",
      body: "I contribute to analyses of clinical and multi-omic data across tissues, exercise modes, and species to identify mechanisms and biomarkers of exercise response.",
      tags: ["Multi-omics", "Clinical phenotyping", "Exercise adaptation"],
    },
    {
      label: "Athlete performance",
      title: "High-performance sport",
      body: "I use exercise physiology, biomechanics, and performance testing to study athlete monitoring and training, including collaborations with Stanford Baseball and external sports-science teams.",
      tags: ["Biomechanics", "Performance testing", "Athlete monitoring"],
    },
    {
      label: "Integrated physiology",
      title: "Cardiopulmonary exercise testing",
      body: "My CPET work includes quality control, threshold determination, physiological interpretation, and research tools for clinical and performance settings.",
      tags: ["CPET", "Quality control", "Thresholds"],
    },
    {
      label: "Sports cardiology",
      title: "ECG and sports cardiology",
      body: "I analyze large digital athlete ECG datasets to study repolarization patterns and strengthen the evidence used in screening and interpretation.",
      tags: ["ECG", "Athlete screening", "Digital signals"],
    },
    {
      label: "Clinical exercise physiology",
      title: "Clinical populations",
      body: "My clinical collaborations include neuromuscular disease and limited mobility, chronic heart failure, and other questions about exercise capacity and recovery. I also study vascular physiology related to stroke risk.",
      tags: ["Neuromuscular disease", "Stroke risk", "Recovery"],
    },
    {
      label: "Digital research",
      title: "AI agents and apps",
      body: "I build agents and apps for data analysis, literature review, teaching, and research workflows, and contribute to work on computer-vision assessment and LLM-guided physical-activity coaching.",
      tags: ["AI agents", "Research apps", "Digital health"],
    },
  ],
  es: [
    {
      label: "Consorcio de los NIH",
      title: "MoTrPAC",
      body: "Contribuyo al análisis de datos clínicos y multiómicos de distintos tejidos, modalidades de ejercicio y especies para identificar mecanismos y biomarcadores de la respuesta al ejercicio.",
      tags: ["Multiómica", "Fenotipado clínico", "Adaptación al ejercicio"],
    },
    {
      label: "Rendimiento deportivo",
      title: "Alto rendimiento deportivo",
      body: "Aplico fisiología del ejercicio, biomecánica y pruebas de rendimiento al monitoreo de atletas y al estudio del entrenamiento, incluidas colaboraciones con Stanford Baseball y equipos externos de ciencias del deporte.",
      tags: ["Biomecánica", "Pruebas de rendimiento", "Monitoreo de atletas"],
    },
    {
      label: "Fisiología integrada",
      title: "Prueba cardiopulmonar de ejercicio",
      body: "Mi trabajo con CPET incluye control de calidad, determinación de umbrales, interpretación fisiológica y herramientas de investigación para entornos clínicos y de rendimiento.",
      tags: ["CPET", "Control de calidad", "Umbrales"],
    },
    {
      label: "Electrocardiografía",
      title: "ECG y cardiología deportiva",
      body: "Analizo grandes conjuntos de ECG digitales de atletas para estudiar patrones de repolarización y fortalecer la evidencia utilizada en la evaluación y la interpretación.",
      tags: ["ECG", "Evaluación de atletas", "Señales digitales"],
    },
    {
      label: "Fisiología clínica del ejercicio",
      title: "Poblaciones clínicas",
      body: "Mis colaboraciones clínicas abarcan enfermedades neuromusculares y movilidad limitada, insuficiencia cardiaca crónica y otras preguntas sobre capacidad funcional y recuperación. También estudio la fisiología vascular relacionada con el riesgo de accidente cerebrovascular.",
      tags: ["Enfermedad neuromuscular", "Riesgo de accidente cerebrovascular", "Recuperación"],
    },
    {
      label: "Investigación digital",
      title: "Agentes de IA y aplicaciones",
      body: "Desarrollo agentes y aplicaciones para análisis de datos, revisión de literatura, docencia y flujos de investigación, y colaboro en trabajos sobre evaluación por visión artificial e intervenciones de actividad física guiadas por modelos de lenguaje.",
      tags: ["Agentes de IA", "Apps de investigación", "Salud digital"],
    },
  ],
} as const;

export function ProjectAreas({ locale = "en" }: { locale?: Locale }) {
  return (
    <div
      className="project-grid"
      aria-label={locale === "es" ? "Áreas de proyectos" : "Project areas"}
    >
      {projectAreas[locale].map((project, index) => (
        <article className="project-card" key={project.title}>
          <div className="project-card-head">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>{project.label}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.body}</p>
          <div
            className="project-tags"
            aria-label={`${project.title} ${locale === "es" ? "temas" : "topics"}`}
          >
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
