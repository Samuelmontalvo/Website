import type { Locale } from "./page";

const externalIcon = (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M5 11 11 5M6 5h5v5" />
  </svg>
);

type LocalizedText = Record<Locale, string>;

type SelectedPaper = {
  id: string;
  year: string;
  title: string;
  journal: string;
  href: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  figureHref?: string;
  figureLabel?: LocalizedText;
  figureCredit: string;
  license?: string;
  licenseHref?: string;
  originalVisual?: "digital" | "ecg";
  focus: LocalizedText;
  summary: LocalizedText;
  imageAlt: LocalizedText;
};

const selectedPapers: SelectedPaper[] = [
  {
    id: "motrpac-acute-multi-omics",
    year: "2026",
    title:
      "Multi-Omic, Multi-Tissue Responses to Acute Exercise in Sedentary Adults: Findings from the Molecular Transducers of Physical Activity Consortium",
    journal: "bioRxiv · MoTrPAC Study Group; Katz et al.",
    href: "https://pubmed.ncbi.nlm.nih.gov/42164870/",
    image: "/selected-papers/motrpac-multi-omic-figure-2.jpg",
    imageWidth: 738,
    imageHeight: 900,
    figureHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13184684/#F2",
    figureLabel: { en: "Figure 2", es: "Figura 2" },
    figureCredit: "MoTrPAC Study Group; Katz et al., bioRxiv (2026)",
    license: "CC BY 4.0",
    licenseHref: "https://creativecommons.org/licenses/by/4.0/",
    focus: {
      en: "MoTrPAC · Acute exercise multi-omics · Preprint",
      es: "MoTrPAC · Multiómica del ejercicio agudo · Preprint",
    },
    summary: {
      en: "This preprint maps acute molecular responses in blood, skeletal muscle, and adipose tissue after endurance and resistance exercise.",
      es: "Este preprint describe respuestas moleculares agudas en sangre, músculo esquelético y tejido adiposo después de ejercicio de resistencia y fuerza.",
    },
    imageAlt: {
      en: "Heatmaps and plots showing exercise-induced molecular changes across blood, skeletal muscle, and adipose tissue.",
      es: "Mapas de calor y gráficas de los cambios moleculares inducidos por el ejercicio en sangre, músculo esquelético y tejido adiposo.",
    },
  },
  {
    id: "resisted-sprint-training",
    year: "2025",
    title:
      "Resisted Sprint Training Improves Overground Sprint, Jump, and Isometric Mid-Thigh Pull Kinetics and Kinematics in Male Youth Ice Hockey Players",
    journal: "Journal of Human Kinetics · Dietze-Hermosa et al.",
    href: "https://pubmed.ncbi.nlm.nih.gov/40837520/",
    image: "/selected-papers/resisted-sprint-figure-1.jpg",
    imageWidth: 516,
    imageHeight: 369,
    figureHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12360930/#F1",
    figureLabel: { en: "Figure 1", es: "Figura 1" },
    figureCredit: "Dietze-Hermosa et al., Journal of Human Kinetics (2025)",
    license: "CC BY 4.0",
    licenseHref: "https://creativecommons.org/licenses/by/4.0/",
    focus: {
      en: "High performance · Resisted sprint training",
      es: "Rendimiento deportivo · Sprint con resistencia",
    },
    summary: {
      en: "Resisted sprint training improved overground sprinting, jump performance, and force-time measures in male youth hockey players.",
      es: "El entrenamiento de sprint con resistencia mejoró la carrera en superficie, el salto y las medidas de fuerza-tiempo en jugadores juveniles de hockey.",
    },
    imageAlt: {
      en: "Before-and-after plots for jump height, peak force, peak power, and broad jump distance in three youth hockey training groups.",
      es: "Gráficas antes y después de la altura de salto, fuerza máxima, potencia máxima y salto horizontal en tres grupos de hockey juvenil.",
    },
  },
  {
    id: "nmd-cpet-recovery",
    year: "2025",
    title:
      "Cardiopulmonary Recovery After Maximal Exercise in Individuals with Neuromuscular Disease and Limited Mobility",
    journal: "Journal of Clinical Medicine · Blumberg et al.",
    href: "https://pubmed.ncbi.nlm.nih.gov/40565934/",
    image: "/selected-papers/nmd-cpet-recovery-figure-1.jpg",
    imageWidth: 696,
    imageHeight: 543,
    figureHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12194694/#jcm-14-04190-f001",
    figureLabel: { en: "Figure 1", es: "Figura 1" },
    figureCredit: "Blumberg et al., Journal of Clinical Medicine (2025)",
    license: "CC BY 4.0",
    licenseHref: "https://creativecommons.org/licenses/by/4.0/",
    focus: {
      en: "CPET · Neuromuscular disease",
      es: "CPET · Enfermedad neuromuscular",
    },
    summary: {
      en: "In this clinical study, recovery after CPET revealed differences that peak exercise values alone may miss.",
      es: "En este estudio clínico, la recuperación después de la CPET mostró diferencias que no se observan al considerar solo los valores máximos.",
    },
    imageAlt: {
      en: "Recovery curves for oxygen uptake, heart rate, ventilation, carbon dioxide production, and oxygen pulse after maximal exercise.",
      es: "Curvas de recuperación del consumo de oxígeno, frecuencia cardiaca, ventilación, producción de dióxido de carbono y pulso de oxígeno.",
    },
  },
  {
    id: "athlete-ecg-lvh",
    year: "2026",
    title:
      "Sex-Specific Electrocardiographic Criteria for Left Ventricular Hypertrophy in Young Athletes",
    journal: "Heart Rhythm · Montalvo et al.",
    href: "https://pubmed.ncbi.nlm.nih.gov/40358569/",
    figureCredit: "Montalvo et al., Heart Rhythm (2026)",
    originalVisual: "ecg",
    focus: {
      en: "ECG · Sex-specific LVH screening",
      es: "ECG · Detección de HVI específica por sexo",
    },
    summary: {
      en: "In 9,254 young athletes, sex was the strongest practical modifier of QRS voltage; the study proposes separate screening thresholds for women and men.",
      es: "En 9,254 deportistas jóvenes, el sexo fue el modificador práctico más importante del voltaje QRS; el estudio propone umbrales distintos para mujeres y hombres.",
    },
    imageAlt: {
      en: "Visual summary of proposed sex-specific Sokolow-Lyon and limb-lead QRS voltage thresholds for left ventricular hypertrophy screening in young athletes.",
      es: "Resumen visual de los umbrales QRS de Sokolow-Lyon y derivaciones de miembros, específicos por sexo, propuestos para detectar hipertrofia ventricular izquierda en deportistas jóvenes.",
    },
  },
  {
    id: "my-heart-counts",
    year: "2026",
    title:
      "Design and Rationale of the My Heart Counts Cardiovascular Health Study: A Large-Scale, Fully Digital Biobank, and Randomized Trial of Large Language Model-Driven Coaching of Physical Activity",
    journal: "American Journal of Preventive Cardiology · Schmiedmayer et al.",
    href: "https://pubmed.ncbi.nlm.nih.gov/42395096/",
    figureCredit:
      "Schmiedmayer et al., American Journal of Preventive Cardiology (2026)",
    originalVisual: "digital",
    focus: {
      en: "Digital health · Language-model coaching",
      es: "Salud digital · Orientación con modelos de lenguaje",
    },
    summary: {
      en: "The protocol tests language-model coaching for physical activity inside a fully digital cardiovascular biobank and randomized trial.",
      es: "El protocolo evalúa la orientación con modelos de lenguaje para la actividad física dentro de un biobanco cardiovascular y ensayo aleatorizado completamente digitales.",
    },
    imageAlt: {
      en: "Diagram of the My Heart Counts app linking autonomous trials, language-model coaching, health dashboards, a digital biobank, and bilingual access.",
      es: "Diagrama de la app My Heart Counts que integra ensayos autónomos, orientación con modelos de lenguaje, paneles de salud, un biobanco digital y acceso bilingüe.",
    },
  },
  {
    id: "carotid-shear-stress",
    year: "2022",
    title:
      "Differences in Blood Flow Patterns and Endothelial Shear Stress at the Carotid Artery Using Different Exercise Modalities and Intensities",
    journal: "Frontiers in Physiology · Montalvo et al.",
    href: "https://pubmed.ncbi.nlm.nih.gov/35620608/",
    image: "/selected-papers/carotid-shear-stress-figure-3.jpg",
    imageWidth: 700,
    imageHeight: 445,
    figureHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9127153/#F3",
    figureLabel: { en: "Figure 3", es: "Figura 3" },
    figureCredit: "Montalvo et al., Frontiers in Physiology (2022)",
    license: "CC BY 4.0",
    licenseHref: "https://creativecommons.org/licenses/by/4.0/",
    focus: {
      en: "Vascular physiology · Carotid shear stress",
      es: "Fisiología vascular · Estrés de cizallamiento carotídeo",
    },
    summary: {
      en: "Exercise mode and intensity produced distinct carotid blood-flow and endothelial shear-stress patterns in this first-author study.",
      es: "En este estudio como primer autor, la modalidad y la intensidad del ejercicio produjeron patrones distintos de flujo carotídeo y estrés de cizallamiento endotelial.",
    },
    imageAlt: {
      en: "Boxplots comparing carotid endothelial shear stress at rest and at three intensities across six exercise modalities.",
      es: "Diagramas de caja que comparan el estrés de cizallamiento endotelial carotídeo en reposo y a tres intensidades en seis modalidades de ejercicio.",
    },
  },
];

const selectedCopy = {
  en: {
    eyebrow: "Selected papers",
    title: "Papers that show the direction of my work.",
    intro:
      "I chose these studies because each marks a change in the questions I asked, the populations I worked with, or the scale of the data.",
    figureAction: "Open the full figure",
    reproduced: "reproduced from",
    original: "Original visual summary based on",
    licenseConnector: "under",
    paperAction: "View paper",
    newTab: "opens in a new tab",
    archiveAction: "Browse the complete publication record",
  },
  es: {
    eyebrow: "Trabajos seleccionados",
    title: "Trabajos que muestran el rumbo de mi investigación.",
    intro:
      "Elegí estos estudios porque cada uno marca un cambio en las preguntas, las poblaciones o la escala de los datos de mi investigación.",
    figureAction: "Abrir la figura completa",
    reproduced: "reproducida de",
    original: "Resumen visual original basado en",
    licenseConnector: "bajo",
    paperAction: "Ver artículo",
    newTab: "se abre en una pestaña nueva",
    archiveAction: "Consultar el registro completo de publicaciones",
  },
} as const;

export function SelectedPapers({ locale }: { locale: Locale }) {
  const copy = selectedCopy[locale];

  return (
    <section className="selected-papers" aria-labelledby="selected-papers-title">
      <header className="selected-papers-heading">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 id="selected-papers-title">{copy.title}</h2>
        </div>
        <p>{copy.intro}</p>
      </header>

      <div className="selected-paper-grid">
        {selectedPapers.map((paper) => (
          <article className="selected-paper-card" key={paper.id}>
            <figure className="selected-paper-figure">
              {paper.originalVisual === "digital" ? (
                <div
                  className="selected-paper-original-visual"
                  role="img"
                  aria-label={paper.imageAlt[locale]}
                >
                  <div className="digital-inputs">
                    <span>{locale === "es" ? "Dispositivos" : "Wearables"}</span>
                    <span>{locale === "es" ? "Datos clínicos" : "Clinical data"}</span>
                    <span>{locale === "es" ? "Encuestas" : "Surveys"}</span>
                  </div>
                  <div className="digital-phone">
                    <small>My Heart Counts</small>
                    <strong>{locale === "es" ? "Biobanco digital" : "Digital biobank"}</strong>
                    <i aria-hidden="true" />
                  </div>
                  <div className="digital-outputs">
                    <span>{locale === "es" ? "Orientación con LLM" : "LLM coaching"}</span>
                    <span>{locale === "es" ? "Inglés + español" : "English + Spanish"}</span>
                  </div>
                </div>
              ) : paper.originalVisual === "ecg" ? (
                <div
                  className="selected-paper-ecg-visual"
                  role="img"
                  aria-label={paper.imageAlt[locale]}
                >
                  <div className="ecg-visual-intro">
                    <small>{locale === "es" ? "9,254 deportistas" : "9,254 athletes"}</small>
                    <strong>
                      {locale === "es" ? "Umbrales QRS por sexo" : "Sex-specific QRS thresholds"}
                    </strong>
                  </div>
                  <div className="ecg-threshold-group ecg-threshold-sl">
                    <span>Sokolow–Lyon</span>
                    <div>
                      <b>{locale === "es" ? "Hombres" : "Men"}</b><i /><em>&gt;6.8 mV</em>
                    </div>
                    <div>
                      <b>{locale === "es" ? "Mujeres" : "Women"}</b><i /><em>&gt;4.7 mV</em>
                    </div>
                  </div>
                  <div className="ecg-threshold-group ecg-threshold-limb">
                    <span>{locale === "es" ? "Derivaciones de miembros" : "Limb-lead score"}</span>
                    <div>
                      <b>{locale === "es" ? "Hombres" : "Men"}</b><i /><em>&gt;2.3 mV</em>
                    </div>
                    <div>
                      <b>{locale === "es" ? "Mujeres" : "Women"}</b><i /><em>&gt;1.9 mV</em>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={paper.figureHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${copy.figureAction}: ${paper.figureLabel?.[locale]} — ${paper.title}`}
                >
                  {/* These credited research figures are local, lazy-loaded assets with fixed dimensions. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={paper.image}
                    alt={paper.imageAlt[locale]}
                    width={paper.imageWidth}
                    height={paper.imageHeight}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              )}
              <figcaption>
                {paper.originalVisual ? (
                  <>
                    {copy.original}{" "}
                    <a href={paper.href} target="_blank" rel="noreferrer">
                      {paper.figureCredit}
                    </a>
                    .
                  </>
                ) : (
                  <>
                    <a href={paper.figureHref} target="_blank" rel="noreferrer">
                      {paper.figureLabel?.[locale]}
                    </a>{" "}
                    {copy.reproduced} {paper.figureCredit} {copy.licenseConnector}{" "}
                    <a href={paper.licenseHref} target="_blank" rel="noreferrer">
                      {paper.license}
                    </a>
                    .
                  </>
                )}
              </figcaption>
            </figure>

            <div className="selected-paper-body">
              <div className="selected-paper-meta">
                <span>{paper.focus[locale]}</span>
                <time dateTime={paper.year}>{paper.year}</time>
              </div>
              <h3>{paper.title}</h3>
              <p>{paper.summary[locale]}</p>
              <span className="selected-paper-journal">{paper.journal}</span>
              <a
                className="selected-paper-link"
                href={paper.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${copy.paperAction}: ${paper.title}`}
              >
                {copy.paperAction} {externalIcon}
                <span className="sr-only">({copy.newTab})</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <a className="selected-papers-jump" href="#complete-publication-record">
        {copy.archiveAction} <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
