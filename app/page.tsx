import { ProjectAreas } from "./project-areas";
import { publicationGroups, totalPublicationCount } from "./publications-data";
import { SelectedPapers } from "./selected-papers";

const externalIcon = (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M5 11 11 5M6 5h5v5" />
  </svg>
);

const arrowIcon = (
  <svg viewBox="0 0 18 18" aria-hidden="true">
    <path d="M3 9h11M10 5l4 4-4 4" />
  </svg>
);

export type Locale = "en" | "es";

const pageCopy = {
  en: {
    skip: "Skip to content",
    mainNav: "Main navigation",
    homeLabel: "Samuel Montalvo home",
    nav: {
      research: "Projects",
      tools: "Agents & apps",
      publications: "Publications",
      education: "Education",
      about: "About",
      contact: "Contact me",
    },
    language: { label: "ES", aria: "View site in Spanish", href: "/es" },
    hero: {
      kicker: "Stanford Medicine · Cardiovascular Medicine",
      title: "I study why people respond",
      titleAccent: "differently to exercise.",
      intro:
        "My work spans MoTrPAC multi-omics, high-performance sport, CPET, ECG, clinical exercise research, and AI agents and apps. Across these projects, I use physiology, biomechanics, molecular data, and software to study how people respond to exercise.",
      primary: "View my projects",
      secondary: "View agents & apps",
      domainsLabel: "Project areas",
      domains: [
        "MoTrPAC",
        "High performance",
        "CPET",
        "ECG",
        "Clinical research",
        "AI agents + apps",
      ],
      roles: "Clinical exercise physiologist · Sport scientist · Biomechanist",
      profile: "Stanford profile",
    },
    research: {
      eyebrow: "Current projects",
      title: "My projects span molecular, clinical, and performance research.",
      intro:
        "At Stanford and with external collaborators, I work across six connected areas. Each uses exercise to study health, adaptation, or performance.",
      profileNote:
        "Appointments, awards, and additional research details are available on my Stanford profile.",
      profileAction: "View Stanford profile",
    },
    tools: {
      eyebrow: "AI agents and research apps",
      title: "Software for research, teaching, and analysis.",
      intro:
        "I build agents and apps for specific needs in my research and teaching: reviewing evidence, analyzing movement and physiology, organizing data, and preparing for certification exams.",
    },
    question: {
      eyebrow: "The question behind my work",
      quote:
        "How can we move beyond an average exercise recommendation and choose an intervention that fits the person?",
      stepsLabel: "Research translation steps",
      steps: [
        {
          title: "Measure",
          body: "Collect clinical tests, movement data, wearable data, diet records, and molecular profiles.",
        },
        {
          title: "Connect",
          body: "Study how these measurements change across tissues, time points, and types of exercise.",
        },
        {
          title: "Translate",
          body: "Use those differences to develop personalized strategies that can be tested.",
        },
      ],
    },
    publications: {
      eyebrow: "Publication record · Updated August 2026",
      title: `${totalPublicationCount} papers, preprints, and abstracts.`,
      intro:
        "I compiled this list from my CV and checked each item against PubMed, my Stanford profile, and publisher records. PubMed-indexed items link to PubMed; the others link to a journal page, DOI, repository, or Google Scholar.",
      totalsLabel: "Publication totals",
      groups: {
        "peer-reviewed": "Peer-reviewed publications",
        preprints: "Preprints",
        abstracts: "Published abstracts & proceedings",
      },
      sources: {
        PubMed: "PubMed",
        DOI: "DOI",
        Repository: "Repository",
        "Google Scholar": "Google Scholar",
      },
    },
    education: {
      eyebrow: "Education and training",
      title: "Training in exercise physiology, biomechanics, and bioinformatics.",
      intro:
        "I trained in kinesiology, clinical exercise physiology, and biomechanics at the University of Texas at El Paso. At Stanford, my postdoctoral work has focused on human performance, myocardial biology, and bioinformatics.",
    },
    about: {
      eyebrow: "About",
      title: "I study exercise in clinical, laboratory, and performance settings.",
      lead:
        "I am a Postdoctoral Scholar in Cardiovascular Medicine at Stanford University. I also work with the Stanford Bioinformatics Core and the Wu Tsai Human Performance Alliance.",
      body:
        "In MoTrPAC, an NIH-funded consortium, I analyze clinical and molecular data from multiple tissues, exercise modes, and species. My other work includes high-performance sport, CPET, sports cardiology and ECG, neuromuscular disease, vascular physiology related to stroke risk, and AI-enabled research tools.",
      heritage:
        "Inclusive mentorship is part of my work as a first-generation Mexican American scientist with Indigenous heritage. I also build practical tools to make rigorous exercise science easier to learn and use.",
      imageAlt:
        "Samuel Montalvo, clinical exercise physiologist and sport scientist",
      cv: "View my CV",
      github: "GitHub",
    },
    contact: {
      eyebrow: "Contact",
      title: "Interested in working together?",
      body:
        "I am open to collaborations in MoTrPAC and multi-omics, high-performance sport, CPET, ECG, clinical exercise physiology, and research software.",
      consulting: "Ask about consulting",
    },
    footer: {
      profilesLabel: "Professional profiles",
      stanford: "Stanford Profile",
      back: "Back to top ↑",
    },
  },
  es: {
    skip: "Ir al contenido",
    mainNav: "Navegación principal",
    homeLabel: "Inicio de Samuel Montalvo",
    nav: {
      research: "Proyectos",
      tools: "Agentes y apps",
      publications: "Publicaciones",
      education: "Formación",
      about: "Sobre mí",
      contact: "Contacto",
    },
    language: { label: "EN", aria: "Ver sitio en inglés", href: "/" },
    hero: {
      kicker: "Stanford Medicine · Medicina Cardiovascular",
      title: "Estudio por qué cada persona responde",
      titleAccent: "de manera distinta al ejercicio.",
      intro:
        "Mi trabajo abarca la multiómica de MoTrPAC, el alto rendimiento deportivo, CPET, ECG, la investigación clínica del ejercicio y agentes y aplicaciones de IA. En estos proyectos uso fisiología, biomecánica, datos moleculares y software para estudiar cómo responden las personas al ejercicio.",
      primary: "Ver mis proyectos",
      secondary: "Ver agentes y apps",
      domainsLabel: "Áreas de proyectos",
      domains: [
        "MoTrPAC",
        "Alto rendimiento",
        "CPET",
        "ECG",
        "Investigación clínica",
        "Agentes de IA + apps",
      ],
      roles: "Fisiólogo clínico del ejercicio · Científico del deporte · Biomecánico",
      profile: "Perfil de Stanford",
    },
    research: {
      eyebrow: "Proyectos actuales",
      title: "Mis proyectos abarcan investigación molecular, clínica y de rendimiento.",
      intro:
        "En Stanford y con colaboradores externos, trabajo en seis áreas conectadas. En todas utilizo el ejercicio para estudiar la salud, la adaptación o el rendimiento.",
      profileNote:
        "Mi perfil de Stanford incluye mis nombramientos, premios y otros detalles de investigación.",
      profileAction: "Ver perfil de Stanford",
    },
    tools: {
      eyebrow: "Agentes de IA y aplicaciones de investigación",
      title: "Software para investigación, docencia y análisis.",
      intro:
        "Desarrollo agentes y aplicaciones para necesidades concretas de mi investigación y docencia: revisar evidencia, analizar el movimiento y la fisiología, organizar datos y prepararse para exámenes de certificación.",
    },
    question: {
      eyebrow: "La pregunta detrás de mi trabajo",
      quote:
        "¿Cómo podemos ir más allá de una recomendación de ejercicio basada en promedios y elegir una intervención adecuada para cada persona?",
      stepsLabel: "Etapas de la investigación aplicada",
      steps: [
        {
          title: "Medir",
          body: "Recopilar pruebas clínicas, datos de movimiento, datos de dispositivos portátiles, registros de alimentación y perfiles moleculares.",
        },
        {
          title: "Relacionar",
          body: "Estudiar cómo cambian estas mediciones entre tejidos, momentos y tipos de ejercicio.",
        },
        {
          title: "Aplicar",
          body: "Usar esas diferencias para desarrollar estrategias personalizadas que se puedan evaluar.",
        },
      ],
    },
    publications: {
      eyebrow: "Registro de publicaciones · Actualizado en agosto de 2026",
      title: `${totalPublicationCount} artículos, preprints y resúmenes.`,
      intro:
        "Preparé esta lista a partir de mi CV y verifiqué cada registro en PubMed, mi perfil de Stanford y las fuentes editoriales. Los trabajos indexados enlazan a PubMed; los demás llevan a la revista, el DOI, un repositorio o Google Scholar.",
      totalsLabel: "Totales de publicaciones",
      groups: {
        "peer-reviewed": "Publicaciones revisadas por pares",
        preprints: "Preprints",
        abstracts: "Resúmenes y actas de congresos",
      },
      sources: {
        PubMed: "PubMed",
        DOI: "DOI",
        Repository: "Repositorio",
        "Google Scholar": "Google Scholar",
      },
    },
    education: {
      eyebrow: "Formación académica y posdoctoral",
      title: "Formación en fisiología del ejercicio, biomecánica y bioinformática.",
      intro:
        "Me formé en kinesiología, fisiología clínica del ejercicio y biomecánica en la University of Texas at El Paso. En Stanford, mi trabajo posdoctoral se ha centrado en rendimiento humano, biología del miocardio y bioinformática.",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Estudio el ejercicio en entornos clínicos, de laboratorio y de rendimiento.",
      lead:
        "Soy investigador posdoctoral en Medicina Cardiovascular de Stanford University. También colaboro con el Stanford Bioinformatics Core y la Wu Tsai Human Performance Alliance.",
      body:
        "En MoTrPAC, un consorcio financiado por los NIH, analizo datos clínicos y moleculares de varios tejidos, modalidades de ejercicio y especies. Mi trabajo también incluye alto rendimiento deportivo, CPET, cardiología deportiva y ECG, enfermedades neuromusculares, fisiología vascular relacionada con el riesgo de accidente cerebrovascular y herramientas de investigación con IA.",
      heritage:
        "La mentoría inclusiva forma parte de mi trabajo como científico mexicoamericano de primera generación con raíces indígenas. También desarrollo herramientas prácticas para que la ciencia rigurosa del ejercicio sea más fácil de aprender y utilizar.",
      imageAlt:
        "Samuel Montalvo, fisiólogo clínico del ejercicio y científico del deporte",
      cv: "Ver mi CV",
      github: "GitHub",
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Le interesa trabajar conmigo?",
      body:
        "Estoy abierto a colaboraciones en MoTrPAC y multiómica, alto rendimiento deportivo, CPET, ECG, fisiología clínica del ejercicio y software de investigación.",
      consulting: "Consultoría",
    },
    footer: {
      profilesLabel: "Perfiles profesionales",
      stanford: "Perfil de Stanford",
      back: "Volver arriba ↑",
    },
  },
} as const;

const tools = [
  {
    number: "01",
    status: "Evidence atlas · release 0.6",
    title: "Vertical Jump Atlas",
    subtitle: "Published vertical-jump data, organized by protocol",
    body: "Compare published cohorts by jump protocol and review reference values from compatible studies. The pooled estimates are exploratory and are not intended for diagnosis or talent selection.",
    tags: ["51 PubMed records", "74 reference estimates", "Grouped by protocol"],
    href: "https://takeoff-jump-atlas.samuelmontalvo.chatgpt.site/#sport-norms",
    action: "Open the atlas",
    theme: "atlas",
    visual: (locale: Locale) => (
      <div className="tool-visual atlas-visual" aria-hidden="true">
        <span className="atlas-grid" />
        <span className="atlas-kicker">
          {locale === "es"
            ? "Valores de referencia por protocolo de salto"
            : "Reference values by jump protocol"}
        </span>
        <span className="atlas-scale scale-zero">0</span>
        <span className="atlas-scale scale-thirty">30</span>
        <span className="atlas-scale scale-sixty">60 cm</span>
        <span className="atlas-bar atlas-bar-a"><i>CMJ</i><b>44.3</b></span>
        <span className="atlas-bar atlas-bar-b">
          <i>{locale === "es" ? "CMJ + brazos" : "CMJ + arms"}</i><b>48.1</b>
        </span>
        <span className="atlas-bar atlas-bar-c"><i>SJ</i><b>35.7</b></span>
        <span className="atlas-marker">
          <i>{locale === "es" ? "Tu salto" : "Your jump"}</i><b>30 cm</b>
        </span>
        <span className="atlas-source">
          {locale === "es"
            ? "Cohortes en PubMed · filtros por protocolo · medias compatibles"
            : "PubMed-indexed cohorts · protocol filters · compatible means"}
        </span>
      </div>
    ),
  },
  {
    number: "02",
    status: "In development",
    title: "Metabo-Diet",
    subtitle: "Harmonization training with synthetic data",
    body: "I am developing this training module to teach how diet, exercise, clinical, and metabolomics datasets can be compared without losing study context or provenance.",
    tags: ["Synthetic data", "Multi-omics", "Data harmonization"],
    href: "mailto:smontal@stanford.edu?subject=Metabo-Diet collaboration",
    action: "Ask about the project",
    theme: "clay",
    visual: (locale: Locale) => (
      <div className="tool-visual metabo-visual" aria-hidden="true">
        <span className="ring ring-one" />
        <span className="ring ring-two" />
        <span className="ring ring-three" />
        <span className="micro-dot dot-one" />
        <span className="micro-dot dot-two" />
        <span className="micro-dot dot-three" />
        <span className="micro-label label-one">
          {locale === "es" ? "alimentación" : "diet"}
        </span>
        <span className="micro-label label-two">
          {locale === "es" ? "ómicas" : "omics"}
        </span>
        <span className="micro-label label-three">
          {locale === "es" ? "fenotipo" : "phenotype"}
        </span>
      </div>
    ),
  },
  {
    number: "03",
    status: "Public beta",
    title: "FlightLab EDU",
    subtitle: "Video-based jump analysis for teaching",
    body: "Students can review countermovement- and squat-jump videos without uploading them. The app suggests takeoff and landing events on the device, lets users correct those events, calculates height from flight time, flags quality issues, and exports results locally.",
    tags: ["Performance + education", "On-device AI", "No video uploads"],
    href: "https://flightlab-edu.netlify.app/",
    action: "Launch FlightLab EDU",
    theme: "moss",
    visual: (locale: Locale) => (
      <div className="tool-visual jump-visual" aria-hidden="true">
        <span className="jump-axis" />
        <span className="jump-person">
          <i className="person-head" />
          <i className="person-torso" />
          <i className="person-arm arm-left" />
          <i className="person-arm arm-right" />
          <i className="person-leg leg-left" />
          <i className="person-leg leg-right" />
        </span>
        <span className="jump-mark mark-top">
          {locale === "es" ? "vuelo" : "flight"}
        </span>
        <span className="jump-mark mark-bottom">
          {locale === "es" ? "aterrizaje" : "landing"}
        </span>
        <span className="jump-curve" />
      </div>
    ),
  },
  {
    number: "04",
    status: "Private research software",
    title: "Stanford CPET App",
    subtitle: "Quality control and analysis for CPET data",
    body: "I use this private software to parse cardiopulmonary exercise test files, check data quality, visualize the results, and prepare research exports.",
    tags: ["CPET", "Physiology", "Reproducible workflows"],
    href: "mailto:smontal@stanford.edu?subject=CPET research software collaboration",
    action: "Ask about the software",
    theme: "teal",
    visual: (locale: Locale) => (
      <div
        className="tool-visual cpet-visual"
        aria-hidden="true"
        data-locale={locale}
      >
        <span className="plot-grid" />
        <span className="plot-line line-a" />
        <span className="plot-line line-b" />
        <span className="plot-label plot-vo2">VO₂</span>
        <span className="plot-label plot-vco2">VCO₂</span>
      </div>
    ),
  },
  {
    number: "05",
    status: "Live learning tool",
    title: "Exercise Science Practice Lab",
    subtitle: "Practice questions for exercise science certifications",
    body: "I built this independent multilingual study tool for ACSM-CEP, NSCA-CPSS, and NSCA-CSCS preparation. It uses original question banks and tracks weak areas for targeted review.",
    tags: ["Education", "3,000 questions", "English · Español · 中文"],
    href: "https://exercise-science-exam-prep.netlify.app/",
    action: "Open Practice Lab",
    theme: "plum",
    visual: (locale: Locale) => (
      <div className="tool-visual study-visual" aria-hidden="true">
        <span className="study-score">82<span>%</span></span>
        <span className="study-bar bar-a" />
        <span className="study-bar bar-b" />
        <span className="study-bar bar-c" />
        <span className="study-label">
          {locale === "es" ? "dominio por área" : "domain mastery"}
        </span>
      </div>
    ),
  },
];

const spanishToolCopy: Record<
  string,
  {
    status: string;
    subtitle: string;
    body: string;
    tags: string[];
    action: string;
  }
> = {
  "Vertical Jump Atlas": {
    status: "Atlas de evidencia · versión 0.6",
    subtitle: "Datos publicados de salto vertical, organizados por protocolo",
    body: "Compare cohortes publicadas por protocolo de salto y consulte valores de referencia de estudios compatibles. Las estimaciones combinadas son exploratorias y no están diseñadas para diagnóstico ni selección de talento.",
    tags: ["51 registros en PubMed", "74 valores de referencia", "Agrupados por protocolo"],
    action: "Abrir el atlas",
  },
  "Metabo-Diet": {
    status: "En desarrollo",
    subtitle: "Formación en armonización con datos sintéticos",
    body: "Estoy desarrollando este módulo para enseñar a comparar datos de alimentación, ejercicio, salud clínica y metabolómica sin perder el contexto ni la procedencia de cada estudio.",
    tags: ["Datos sintéticos", "Multiómica", "Armonización de datos"],
    action: "Consultar sobre el proyecto",
  },
  "FlightLab EDU": {
    status: "Beta pública",
    subtitle: "Análisis de saltos en video para la enseñanza",
    body: "Los estudiantes pueden revisar videos de salto con contramovimiento y salto desde sentadilla sin subirlos a un servidor. La aplicación sugiere los eventos de despegue y aterrizaje en el dispositivo, permite corregirlos, calcula la altura a partir del tiempo de vuelo, señala problemas de calidad y exporta los resultados localmente.",
    tags: ["Rendimiento + educación", "IA en el dispositivo", "Los videos no se suben"],
    action: "Abrir FlightLab EDU",
  },
  "Stanford CPET App": {
    status: "Software privado de investigación",
    subtitle: "Control de calidad y análisis de datos de CPET",
    body: "Uso este software privado para importar archivos de pruebas de ejercicio cardiopulmonar, revisar la calidad de los datos, visualizar los resultados y preparar exportaciones para investigación.",
    tags: ["CPET", "Fisiología", "Flujos reproducibles"],
    action: "Consultar sobre el software",
  },
  "Exercise Science Practice Lab": {
    status: "Herramienta educativa disponible",
    subtitle: "Preguntas de práctica para certificaciones en ciencias del ejercicio",
    body: "Desarrollé esta herramienta multilingüe e independiente para preparar las certificaciones ACSM-CEP, NSCA-CPSS y NSCA-CSCS. Incluye bancos de preguntas originales y registra las áreas que requieren más repaso.",
    tags: ["Educación", "3,000 preguntas", "English · Español · 中文"],
    action: "Abrir Practice Lab",
  },
};

const educationByLocale = {
  en: [
    {
      type: "Postdoctoral training",
      title: "Myocardial biology and bioinformatics",
      institution: "Stanford University",
      period: "Aug 2024 — Present",
    },
    {
      type: "Postdoctoral fellowship",
      title: "Human performance and clinical exercise physiology",
      institution: "Stanford University",
      period: "Aug 2022 — Aug 2024",
    },
    {
      type: "PhD",
      title: "Interdisciplinary Health Science",
      institution: "Exercise Physiology · Biomechanics · University of Texas at El Paso",
      period: "Aug 2016 — May 2021",
    },
    {
      type: "MS",
      title: "Kinesiology",
      institution: "Clinical Exercise Physiology · University of Texas at El Paso",
      period: "Aug 2011 — Aug 2015",
    },
    {
      type: "BS",
      title: "Kinesiology",
      institution: "Physical Education · University of Texas at El Paso",
      period: "Aug 2007 — Aug 2011",
    },
  ],
  es: [
    {
      type: "Formación posdoctoral",
      title: "Biología del miocardio y bioinformática",
      institution: "Stanford University",
      period: "Ago. 2024 — Actualidad",
    },
    {
      type: "Beca posdoctoral",
      title: "Rendimiento humano y fisiología clínica del ejercicio",
      institution: "Stanford University",
      period: "Ago. 2022 — Ago. 2024",
    },
    {
      type: "Doctorado",
      title: "Ciencias interdisciplinarias de la salud",
      institution: "Fisiología del ejercicio · Biomecánica · University of Texas at El Paso",
      period: "Ago. 2016 — Mayo 2021",
    },
    {
      type: "Maestría",
      title: "Kinesiología",
      institution: "Fisiología clínica del ejercicio · University of Texas at El Paso",
      period: "Ago. 2011 — Ago. 2015",
    },
    {
      type: "Licenciatura",
      title: "Kinesiología",
      institution: "Educación física · University of Texas at El Paso",
      period: "Ago. 2007 — Ago. 2011",
    },
  ],
} as const;

const footerLinks = [
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Samuel-Montalvo",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samuel-montalvo-ph-d-a4872282",
  },
  {
    label: "Stanford Profile",
    href: "https://profiles.stanford.edu/samuel-montalvo-hernandez",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=whonnOUAAAAJ&hl=en",
  },
];

function PublicationCitation({ citation }: { citation: string }) {
  const parts = citation.split(/(Montalvo(?: Hernandez)?, S\.)/g);

  return (
    <>
      {parts.map((part, index) =>
        /^Montalvo(?: Hernandez)?, S\.$/.test(part) ? (
          <strong key={`${part}-${index}`}>{part}</strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

export function PortfolioPage({ locale }: { locale: Locale }) {
  const copy = pageCopy[locale];
  const education = educationByLocale[locale];

  return (
    <main lang={locale}>
      <a className="skip-link" href="#main-content">
        {copy.skip}
      </a>

      <nav className="topbar" aria-label={copy.mainNav}>
        <a className="wordmark" href="#top" aria-label={copy.homeLabel}>
          <span>SM</span>
          <strong>Samuel Montalvo, PhD</strong>
        </a>
        <div className="nav-links">
          <a href="#projects">{copy.nav.research}</a>
          <a href="#tools">{copy.nav.tools}</a>
          <a href="#publications">{copy.nav.publications}</a>
          <a href="#education">{copy.nav.education}</a>
          <a href="#about">{copy.nav.about}</a>
        </div>
        <div className="nav-actions">
          <a
            className="language-switch"
            href={copy.language.href}
            hrefLang={locale === "en" ? "es" : "en"}
            lang={locale === "en" ? "es" : "en"}
            aria-label={copy.language.aria}
          >
            {copy.language.label}
          </a>
          <a className="nav-contact" href="mailto:smontal@stanford.edu">
            {copy.nav.contact} {arrowIcon}
          </a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit orbit-three" />
        </div>
        <div className="hero-copy" id="main-content">
          <div className="hero-kicker">
            <span className="kicker-dot" />
            {copy.hero.kicker}
          </div>
          <h1>
            {copy.hero.title}
            <span>{copy.hero.titleAccent}</span>
          </h1>
          <p className="hero-intro">{copy.hero.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {copy.hero.primary} {arrowIcon}
            </a>
            <a className="button button-secondary" href="#tools">
              {copy.hero.secondary}
            </a>
          </div>
          <div className="hero-domains" aria-label={copy.hero.domainsLabel}>
            {copy.hero.domains.map((domain) => (
              <span key={domain}>{domain}</span>
            ))}
          </div>
        </div>
        <aside
          className="profile-card"
          aria-label={locale === "es" ? "Perfil de Samuel Montalvo" : "Samuel Montalvo profile"}
        >
          <div className="portrait-frame">
            <img
              src="/samuel-montalvo.jpg"
              alt={locale === "es" ? "Retrato de Samuel Montalvo" : "Portrait of Samuel Montalvo"}
              width="620"
              height="620"
            />
            <span className="portrait-accent" />
          </div>
          <div className="profile-details">
            <div>
              <span>Samuel Montalvo, PhD</span>
              <p>{copy.hero.roles}</p>
            </div>
            <a
              href="https://profiles.stanford.edu/samuel-montalvo-hernandez"
              target="_blank"
              rel="noreferrer"
            >
              {copy.hero.profile} {externalIcon}
            </a>
          </div>
        </aside>
      </header>

      <section className="research-section section-shell" id="projects">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">{copy.research.eyebrow}</span>
            <h2>{copy.research.title}</h2>
          </div>
          <p>{copy.research.intro}</p>
        </div>
        <ProjectAreas locale={locale} />
        <div className="project-profile-note">
          <span>{copy.research.profileNote}</span>
          <a
            href="https://profiles.stanford.edu/samuel-montalvo-hernandez"
            target="_blank"
            rel="noreferrer"
          >
            {copy.research.profileAction} {externalIcon}
          </a>
        </div>
      </section>

      <section className="tools-section" id="tools">
        <div className="section-shell">
          <div className="section-heading tools-heading">
            <div>
              <span className="eyebrow light">{copy.tools.eyebrow}</span>
              <h2>{copy.tools.title}</h2>
            </div>
            <p>{copy.tools.intro}</p>
          </div>

          <div className="tools-grid">
            {tools.map((tool) => {
              const text = locale === "es" ? spanishToolCopy[tool.title] : tool;

              return (
                <article className={`tool-card tool-${tool.theme}`} key={tool.title}>
                  <div className="tool-topline">
                    <span>{tool.number}</span>
                    <span className="status-pill">{text.status}</span>
                  </div>
                  {tool.visual(locale)}
                  <div className="tool-copy">
                    <p>{text.subtitle}</p>
                    <h3>{tool.title}</h3>
                    <div className="tool-description">{text.body}</div>
                    <div className="tag-row">
                      {text.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <a href={tool.href} target="_blank" rel="noreferrer">
                    {text.action} {externalIcon}
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="translation-section section-shell">
        <div className="translation-quote">
          <span className="eyebrow">{copy.question.eyebrow}</span>
          <blockquote>{copy.question.quote}</blockquote>
        </div>
        <div className="translation-steps" aria-label={copy.question.stepsLabel}>
          {copy.question.steps.map((step, index) => (
            <div key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step.title}</strong>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="publications-section" id="publications">
        <div className="section-shell">
          <SelectedPapers locale={locale} />
        </div>
        <div
          className="section-shell publication-layout publication-archive"
          id="complete-publication-record"
        >
          <div className="publication-intro">
            <span className="eyebrow">{copy.publications.eyebrow}</span>
            <h2>{copy.publications.title}</h2>
            <p>{copy.publications.intro}</p>
            <div
              className="publication-counts"
              aria-label={copy.publications.totalsLabel}
            >
              {publicationGroups.map((group) => (
                <div key={group.id}>
                  <strong>{group.items.length}</strong>
                  <span>{copy.publications.groups[group.id]}</span>
                </div>
              ))}
            </div>
            <div className="profile-links">
              <a
                href="https://scholar.google.com/citations?user=whonnOUAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar {externalIcon}
              </a>
              <a
                href="https://orcid.org/0000-0003-3104-3428"
                target="_blank"
                rel="noreferrer"
              >
                ORCID {externalIcon}
              </a>
            </div>
          </div>
          <div className="publication-groups">
            {publicationGroups.map((group) => (
              <details
                className="publication-group"
                open={group.initiallyOpen}
                key={group.id}
              >
                <summary>
                  <span>{copy.publications.groups[group.id]}</span>
                  <span>{group.items.length}</span>
                </summary>
                <div className="publication-list">
                  {group.items.map((publication) => (
                    <a
                      className="publication-row"
                      href={publication.href}
                      target="_blank"
                      rel="noreferrer"
                      key={publication.id}
                    >
                      <span className="publication-year">{publication.year}</span>
                      <div>
                        <span>{copy.publications.sources[publication.label]}</span>
                        <p className="publication-citation">
                          <PublicationCitation citation={publication.citation} />
                        </p>
                      </div>
                      {arrowIcon}
                    </a>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="education-section section-shell" id="education">
        <div className="section-heading split-heading education-heading">
          <div>
            <span className="eyebrow">{copy.education.eyebrow}</span>
            <h2>{copy.education.title}</h2>
          </div>
          <p>{copy.education.intro}</p>
        </div>
        <div className="education-list">
          {education.map((item, index) => (
            <article className="education-row" key={`${item.type}-${item.period}`}>
              <span className="education-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
              </div>
              <time>{item.period}</time>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="about-image">
          <img
            src="/samuel-montalvo.jpg"
            alt={copy.about.imageAlt}
            width="620"
            height="620"
            loading="lazy"
          />
          <div className="about-badge">
            <span>CPSS</span>
            <span>CSCS,*D</span>
          </div>
        </div>
        <div className="about-copy">
          <span className="eyebrow">{copy.about.eyebrow}</span>
          <h2>{copy.about.title}</h2>
          <p className="about-lead">{copy.about.lead}</p>
          <p>{copy.about.body}</p>
          <p>{copy.about.heritage}</p>
          <div className="about-links">
            <a
              href="/samuel-montalvo-cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {copy.about.cv} {externalIcon}
            </a>
            <a href="https://github.com/Samuelmontalvo" target="_blank" rel="noreferrer">
              {copy.about.github} {externalIcon}
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-shell contact-inner">
          <span className="eyebrow light">{copy.contact.eyebrow}</span>
          <h2>{copy.contact.title}</h2>
          <p>{copy.contact.body}</p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:smontal@stanford.edu">
              smontal@stanford.edu {arrowIcon}
            </a>
            <a className="button button-ghost" href="mailto:drsamuelmontalvo@gmail.com">
              {copy.contact.consulting}
            </a>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <div className="wordmark footer-mark">
          <span>SM</span>
          <strong>Samuel Montalvo, PhD</strong>
        </div>
        <nav className="footer-links" aria-label={copy.footer.profilesLabel}>
          {footerLinks.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
              {link.label === "Stanford Profile" ? copy.footer.stanford : link.label}
            </a>
          ))}
        </nav>
        <div className="footer-top">
          <a href="#top">{copy.footer.back}</a>
        </div>
      </footer>
    </main>
  );
}

export default function Home() {
  return <PortfolioPage locale="en" />;
}
