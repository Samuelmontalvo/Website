type Locale = "en" | "es";

const projectAreas = {
  en: [
    {
      label: "NIH consortium",
      title: "MoTrPAC",
      body: "Integrating plasma proteomics (189 proteins), metabolomics (448 metabolites), whole-blood transcriptomics (7,066 transcripts), and skeletal muscle and adipose assays across acute and chronic exercise interventions (N = 206 human cohort) with clinical exercise tests.",
      tags: ["Multi-omics", "Clinical phenotyping", "Cardioprotective metabolism"],
    },
    {
      label: "Athlete performance",
      title: "High-performance sport",
      body: "With Stanford Baseball and international sports-science teams, I study how athletes adapt to training through countermovement jump force-time kinetics, isometric mid-thigh pull, resisted sprints, and AI video-based jump assessment.",
      tags: ["Performance testing", "Athlete monitoring", "Force-time kinetics"],
    },
    {
      label: "Integrated physiology",
      title: "Cardiopulmonary exercise testing",
      body: "For the MoTrPAC CPET core lab, I lead multi-center gas-exchange quality control, automated ventilatory threshold (VT1/VT2) detection software, accelerometry-derived fitness modeling, and physiology-based FRIEND VO2peak equations.",
      tags: ["Quality control", "Thresholds", "FRIEND equations"],
    },
    {
      label: "Sports cardiology",
      title: "ECG and sports cardiology",
      body: "Large digital ECG datasets (N = 9,254 young athletes) let us evaluate screening criteria in female and male athletes across racial groups. At Stanford, I study repolarization, ST-segment plausibility, and sex-specific LVH thresholds.",
      tags: ["Athlete ECG", "Screening criteria", "Sex-specific thresholds"],
    },
    {
      label: "Clinical exercise physiology",
      title: "Clinical populations",
      body: "In spinal muscular atrophy (SMA) and neuromuscular disease with limited mobility, post-exercise recovery measurements can be more informative than peak-exercise values. A complementary line of work quantifies carotid blood flow and shear stress across eccentric and submaximal exercise modalities.",
      tags: ["Neuromuscular disease", "Exercise recovery", "Endothelial shear stress"],
    },
    {
      label: "Digital research",
      title: "AI agents and apps",
      body: "I build auditable multi-omic harmonization agents (RefMet), privacy-preserving computer-vision movement assessment tools, and bilingual language-model coaching for physical activity inside the My Heart Counts digital biobank trial (N = 15,000 target enrollment).",
      tags: ["Research agents", "Digital health", "Bilingual LLM coaching"],
    },
  ],
  es: [
    {
      label: "Consorcio de los NIH",
      title: "MoTrPAC",
      body: "Integro proteómica plasmática (189 proteínas), metabolómica (448 metabolitos), transcriptómica en sangre total (7,066 transcritos) y ensayos en músculo esquelético y tejido adiposo durante intervenciones de ejercicio agudo y crónico (cohorte humana N = 206) con pruebas clínicas de ejercicio.",
      tags: ["Multiómica", "Fenotipado clínico", "Metabolismo cardioprotector"],
    },
    {
      label: "Rendimiento deportivo",
      title: "Alto rendimiento deportivo",
      body: "Con Stanford Baseball y equipos internacionales de ciencias del deporte, estudio cómo se adaptan los atletas al entrenamiento mediante cinética fuerza-tiempo en salto con contramovimiento, tracción isométrica de medio muslo, sprints con resistencia y evaluación de saltos por video con IA.",
      tags: ["Pruebas de rendimiento", "Monitoreo de atletas", "Cinética fuerza-tiempo"],
    },
    {
      label: "Fisiología integrada",
      title: "Prueba cardiopulmonar de ejercicio",
      body: "En el laboratorio central de CPET de MoTrPAC trabajo en el control de calidad multicéntrico de intercambio gaseoso, software de detección automatizada de umbrales ventilatorios (VT1/VT2), predicción por acelerometría y ecuaciones pronósticas FRIEND de VO2peak.",
      tags: ["Control de calidad", "Umbrales", "Ecuaciones FRIEND"],
    },
    {
      label: "Electrocardiografía",
      title: "ECG y cardiología deportiva",
      body: "Las bases de datos digitales de ECG (N = 9,254 deportistas jóvenes) permiten evaluar criterios de detección en mujeres y hombres de distintos grupos raciales. En Stanford estudio la repolarización, el segmento ST y los umbrales de HVI específicos por sexo.",
      tags: ["ECG de atletas", "Criterios de detección", "Umbrales por sexo"],
    },
    {
      label: "Fisiología clínica del ejercicio",
      title: "Poblaciones clínicas",
      body: "En atrofia muscular espinal (SMA) y enfermedades neuromusculares con movilidad limitada, las mediciones durante la recuperación pueden ser más informativas que los valores de esfuerzo máximo. Otra línea cuantifica el flujo sanguíneo carotídeo y el estrés de cizallamiento endotelial en distintas modalidades de ejercicio.",
      tags: ["Enfermedad neuromuscular", "Recuperación del ejercicio", "Estrés de cizallamiento"],
    },
    {
      label: "Investigación digital",
      title: "Agentes de IA y aplicaciones",
      body: "Desarrollo agentes auditables de armonización multiómica (RefMet), herramientas de visión por computadora para análisis del movimiento y orientación bilingüe para la actividad física con modelos de lenguaje dentro del ensayo digital My Heart Counts (meta N = 15,000).",
      tags: ["Agentes de investigación", "Salud digital", "Orientación bilingüe con LLM"],
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
