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
  originalVisual?: boolean;
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
      en: "MoTrPAC · Acute exercise multi-omics",
      es: "MoTrPAC · Multiómica del ejercicio agudo",
    },
    summary: {
      en: "This MoTrPAC paper connects whole-body exercise testing with molecular responses measured across blood, muscle, and adipose tissue.",
      es: "Este trabajo de MoTrPAC conecta la evaluación integral del ejercicio con respuestas moleculares medidas en sangre, músculo y tejido adiposo.",
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
      en: "My performance research asks how specific training methods change speed, power, force, and jumping in athletes.",
      es: "Mi investigación en rendimiento estudia cómo métodos concretos de entrenamiento cambian la velocidad, la potencia, la fuerza y el salto.",
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
      es: "En este estudio clínico, la recuperación después de la CPET mostró diferencias que los valores máximos pueden pasar por alto.",
    },
    imageAlt: {
      en: "Recovery curves for oxygen uptake, heart rate, ventilation, carbon dioxide production, and oxygen pulse after maximal exercise.",
      es: "Curvas de recuperación del consumo de oxígeno, frecuencia cardiaca, ventilación, producción de dióxido de carbono y pulso de oxígeno.",
    },
  },
  {
    id: "athlete-ecg-repolarization",
    year: "2026",
    title:
      "Race- and Sex-Associated Electrocardiographic Repolarization Characteristics in Young American Athletes in the Digital Age",
    journal: "JACC: Advances · Tso et al.",
    href: "https://pubmed.ncbi.nlm.nih.gov/41351976/",
    image: "/selected-papers/athlete-ecg-central-illustration.jpg",
    imageWidth: 765,
    imageHeight: 545,
    figureHref: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12723155/#fig6",
    figureLabel: { en: "Central illustration", es: "Ilustración central" },
    figureCredit: "Tso et al., JACC: Advances (2026)",
    license: "CC BY 4.0",
    licenseHref: "https://creativecommons.org/licenses/by/4.0/",
    focus: {
      en: "ECG · Athlete interpretation",
      es: "ECG · Evaluación de deportistas",
    },
    summary: {
      en: "At Stanford, I use large digital ECG datasets to examine athlete findings with close attention to sex and race.",
      es: "En Stanford, uso grandes conjuntos de ECG digitales para estudiar hallazgos en deportistas con especial atención al sexo y la raza.",
    },
    imageAlt: {
      en: "Study summary showing that convex anterior T-wave inversion was rare and similarly prevalent across racial groups in 8,758 athletes.",
      es: "Resumen del estudio que muestra que la inversión anterior convexa de la onda T fue poco frecuente y similar entre grupos raciales en 8,758 deportistas.",
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
    originalVisual: true,
    focus: {
      en: "Digital health · Language-model coaching",
      es: "Salud digital · Orientación con modelos de lenguaje",
    },
    summary: {
      en: "My Heart Counts links my physiology background with a digital biobank and language-model coaching for physical activity.",
      es: "My Heart Counts conecta mi formación en fisiología con un biobanco digital y orientación mediante modelos de lenguaje para la actividad física.",
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
      en: "As first author, I studied how exercise mode and intensity change vascular responses, an approach I later carried into broader physiology studies.",
      es: "Como primer autor, estudié cómo la modalidad y la intensidad del ejercicio cambian la respuesta vascular, un enfoque que después llevé a estudios integrales de fisiología.",
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
    title: "Six papers that reflect the direction of my work.",
    intro:
      "I chose these papers because together they show the connections among my vascular and performance work, clinical testing, athlete ECG, digital health, and MoTrPAC multi-omics.",
    figureAction: "Open the full figure",
    reproduced: "reproduced from",
    original: "Original visual summary based on",
    licenseConnector: "under",
    paperAction: "View paper",
    archiveAction: "Browse the complete publication record",
  },
  es: {
    eyebrow: "Trabajos seleccionados",
    title: "Seis trabajos que reflejan el rumbo de mi investigación.",
    intro:
      "Estos artículos reúnen las líneas principales de mi investigación: fisiología vascular y del rendimiento, evaluación clínica, ECG en deportistas, salud digital y multiómica de MoTrPAC.",
    figureAction: "Abrir la figura completa",
    reproduced: "reproducida de",
    original: "Resumen visual original basado en",
    licenseConnector: "bajo",
    paperAction: "Ver artículo",
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
              {paper.originalVisual ? (
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
              ) : (
                <a
                  href={paper.figureHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${copy.figureAction}: ${paper.figureLabel?.[locale]}`}
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
