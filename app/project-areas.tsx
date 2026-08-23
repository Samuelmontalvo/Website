type Locale = "en" | "es";

const projectAreas = {
  en: [
    {
      label: "NIH consortium",
      title: "MoTrPAC",
      body: "A bout of exercise triggers different molecular responses in blood, muscle, and adipose tissue. In MoTrPAC, I connect those measurements with clinical exercise tests.",
      tags: ["Multi-omics", "Clinical phenotyping"],
    },
    {
      label: "Athlete performance",
      title: "High-performance sport",
      body: "With Stanford Baseball and outside sports-science teams, I study how athletes adapt to training. Recent projects have tested resisted sprints and video-based jump assessment.",
      tags: ["Performance testing", "Athlete monitoring"],
    },
    {
      label: "Integrated physiology",
      title: "Cardiopulmonary exercise testing",
      body: "For the MoTrPAC CPET core lab, I work on data quality and threshold determination. I also build the software used to review test results.",
      tags: ["Quality control", "Thresholds"],
    },
    {
      label: "Sports cardiology",
      title: "ECG and sports cardiology",
      body: "Large digital ECG datasets let us test screening criteria in female and male athletes from different racial groups. At Stanford, I study repolarization and sex-specific thresholds.",
      tags: ["Athlete ECG", "Screening criteria"],
    },
    {
      label: "Clinical exercise physiology",
      title: "Clinical populations",
      body: "In neuromuscular disease and limited mobility, recovery measurements can be more informative than peak-exercise values. A separate project measures carotid blood flow and shear stress, vascular signals relevant to stroke risk.",
      tags: ["Neuromuscular disease", "Exercise recovery"],
    },
    {
      label: "Digital research",
      title: "AI agents and apps",
      body: "I build research agents and teaching apps when a recurring problem needs its own tool. Current collaborations include video-based movement assessment and language-model coaching for physical activity.",
      tags: ["Research agents", "Digital health"],
    },
  ],
  es: [
    {
      label: "Consorcio de los NIH",
      title: "MoTrPAC",
      body: "Una sesión de ejercicio desencadena respuestas moleculares distintas en sangre, músculo y tejido adiposo. En MoTrPAC, relaciono esas mediciones con pruebas clínicas de ejercicio.",
      tags: ["Multiómica", "Fenotipado clínico"],
    },
    {
      label: "Rendimiento deportivo",
      title: "Alto rendimiento deportivo",
      body: "Con Stanford Baseball y equipos externos de ciencias del deporte, estudio cómo se adaptan los atletas al entrenamiento. Algunos proyectos recientes evaluaron sprints con resistencia y saltos mediante video.",
      tags: ["Pruebas de rendimiento", "Monitoreo de atletas"],
    },
    {
      label: "Fisiología integrada",
      title: "Prueba cardiopulmonar de ejercicio",
      body: "En el laboratorio central de CPET de MoTrPAC trabajo en el control de calidad de los datos y la determinación de umbrales. También desarrollo el software utilizado para revisar los resultados.",
      tags: ["Control de calidad", "Umbrales"],
    },
    {
      label: "Electrocardiografía",
      title: "ECG y cardiología deportiva",
      body: "Las bases de datos digitales de ECG permiten evaluar los criterios de detección en deportistas de diferentes sexos y grupos raciales. En Stanford estudio la repolarización y los umbrales específicos por sexo.",
      tags: ["ECG de atletas", "Criterios de detección"],
    },
    {
      label: "Fisiología clínica del ejercicio",
      title: "Poblaciones clínicas",
      body: "En personas con enfermedades neuromusculares o movilidad limitada, las mediciones durante la recuperación pueden ser más informativas que los valores de esfuerzo máximo. Otro proyecto mide el flujo sanguíneo carotídeo y el estrés de cizallamiento, señales vasculares relacionadas con el riesgo de accidente cerebrovascular.",
      tags: ["Enfermedad neuromuscular", "Recuperación del ejercicio"],
    },
    {
      label: "Investigación digital",
      title: "Agentes de IA y aplicaciones",
      body: "Desarrollo agentes de investigación y aplicaciones docentes cuando un problema recurrente necesita su propia herramienta. Mis colaboraciones actuales incluyen análisis del movimiento por video y orientación para la actividad física con modelos de lenguaje.",
      tags: ["Agentes de investigación", "Salud digital"],
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
