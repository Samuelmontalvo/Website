import { ProjectAreas } from "./project-areas";
import { publicationGroups, totalPublicationCount } from "./publications-data";
import { SelectedPapers } from "./selected-papers";

const peerReviewedCount =
  publicationGroups.find((group) => group.id === "peer-reviewed")?.items.length ?? 0;

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
    nav: {
      research: "Projects",
      tools: "Agents & apps",
      publications: "Publications",
      education: "Education",
      about: "About",
      contact: "Contact me",
    },
    language: { label: "ES", aria: "ES · View site in Spanish", href: "/es" },
    hero: {
      kicker: "Stanford Medicine · Division of Cardiovascular Medicine",
      title: "Mechanistic, physiological, and molecular determinants",
      titleAccent: "of why people respond differently to exercise.",
      intro:
        "Postdoctoral Scholar in Cardiovascular Medicine at Stanford University integrating cardiopulmonary exercise testing (CPET), neuromuscular biomechanics, digital health trials, and multi-tissue multi-omics within the NIH Molecular Transducers of Physical Activity Consortium (MoTrPAC).",
      primary: "View research program",
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
      roles: "Clinical exercise physiologist · Sport scientist · Biomechanist · CPSS, CSCS,*D, ACSM-CEP",
      profile: "Stanford profile",
    },
    research: {
      eyebrow: "Translational Research Program",
      title: "Six integrative pillars of precision exercise medicine.",
      intro:
        "My research program bridges multi-omic molecular profiling at Stanford Medicine with clinical cardiopulmonary testing and high-performance sport biomechanics.",
      credentialsEyebrow: "Extramural Support, Governance & Service",
      credentialsTitle: "Research funding, fellowships, honors, and editorial leadership.",
      credentials: [
        {
          meta: "NIH · NHLBI & Wu Tsai Alliance",
          title: "LRP-REACH award and TIMBS fellowship",
          body: "Supported by a two-year NIH/NHLBI LRP-REACH award (2026–2028), NIH T32 training in myocardial biology at Stanford (TIMBS, 2024–2026), and the Wu Tsai Human Performance Alliance Postdoctoral Fellowship (2022–2024).",
          href: "https://profiles.stanford.edu/samuel-montalvo-hernandez",
          action: "Stanford profile",
        },
        {
          meta: "CFDE · 2026",
          title: "Selected data-training proposal",
          body: "Cataloging MoTrPAC and Metabolomics Workbench Data was selected for $5,000 in support from the NIH Common Fund Data Ecosystem to build RefMet-standardized harmonization training workflows.",
        },
        {
          meta: "International honors & invited talks",
          title: "Henan University, UANL, and FEMECAD / CODEME",
          body: "Delivered invited lectures on The Molecular Elite Athlete at Henan University (2025) and From Molecules to High Performance in Exercise Science at UANL (2024 & 2025). Recipient of the FEMECAD/CODEME Scientific Research Recognition (2024) and the Confederación Deportiva Mexicana 'Luchador Olmeca' National Sports Award.",
        },
        {
          meta: "Editorial leadership & governance",
          title: "Senior Editor, Journal of Strength and Conditioning Research",
          body: "Also serves as Section Editor (Exercise Physiology & Biomechanics) for the Journal of Taiji Science, Financial Officer of the Stanford University Postdoctoral Association (SURPAS, 2026–Present), Postdoctoral Mentoring Coach (Stanford OPA), mentor for Stanford PRISM and CVI MAVERICs, and co-director of Pablo Tadeo Ríos Gallardo's UANL thesis on vertical-jump technology (2025).",
          href: "https://www.wtsf.org/ojs/index.php/jts/en/Editorial_Board",
          action: "Taiji editorial board",
          secondaryHref: "https://eprints.uanl.mx/31086/1/1080263196.pdf",
          secondaryAction: "UANL thesis",
        },
      ],
      profileAction: "View Stanford profile",
    },
    tools: {
      eyebrow: "AI agents and research apps",
      title: "Software for research, teaching, and analysis.",
      intro:
        "I build open-source computational tools and AI workflows for multi-omic harmonization, CPET threshold autodetection, computer-vision biomechanics, and multilingual certification training.",
    },
    publications: {
      eyebrow: "Publication record · Updated October 2026",
      title: `${peerReviewedCount} peer-reviewed papers.`,
      intro:
        `The complete record includes ${totalPublicationCount} papers, preprints, and published abstracts (523+ Google Scholar citations). Each record is verified against PubMed, my Stanford CAP profile, and publisher records.`,
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
      newTab: "opens in a new tab",
    },
    education: {
      eyebrow: "Education and academic training",
      title: "Training in exercise physiology, biomechanics, and bioinformatics.",
      intro:
        "I completed my BS, MS, and PhD in Interdisciplinary Health Sciences at The University of Texas at El Paso. At Stanford University School of Medicine, my postdoctoral training spans human performance, myocardial biology, and multi-omic bioinformatics.",
    },
    about: {
      eyebrow: "About & Academic Affiliations",
      title: "Integrating clinical exercise physiology, biomechanics, and multi-omics.",
      lead:
        "I trained at The University of Texas at El Paso from my bachelor's degree through a doctorate in interdisciplinary health sciences (strength & conditioning and biomechanics), where I also served as a Clinical Research Associate in the CaPH Lab and Instructor of Kinesiology at El Paso Community College.",
      body:
        "I joined Stanford University in 2022 as a Wu Tsai Human Performance Alliance Postdoctoral Fellow and transitioned to the Division of Cardiovascular Medicine in 2024. I am a member of the Stanford Cardiovascular Institute, the Wu Tsai Human Performance Alliance, and the Stanford Bioinformatics Core, and hold active memberships in the AHA, SACNAS, ACSM, and NSCA.",
      heritage:
        "As a first-generation college graduate and Mexican American scientist with Indigenous heritage, I am committed to inclusive mentorship as a Stanford OPA Postdoctoral Mentoring Coach and mentor for Stanford PRISM and CVI MAVERICs.",
      imageAlt:
        "Samuel Montalvo, clinical exercise physiologist and sport scientist",
      cv: "View my CV",
      github: "GitHub",
    },
    contact: {
      eyebrow: "Contact",
      title: "Interested in working together?",
      body:
        "If your project overlaps with my work, email me with a short description of the question and the collaboration you have in mind.",
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
    nav: {
      research: "Proyectos",
      tools: "Agentes y apps",
      publications: "Publicaciones",
      education: "Formación",
      about: "Sobre mí",
      contact: "Contacto",
    },
    language: { label: "EN", aria: "EN · Ver sitio en inglés", href: "/" },
    hero: {
      kicker: "Stanford Medicine · División de Medicina Cardiovascular",
      title: "Determinantes mecanísticos, fisiológicos y moleculares",
      titleAccent: "de por qué cada persona responde de manera distinta al ejercicio.",
      intro:
        "Investigador posdoctoral en Medicina Cardiovascular en Stanford University; integro pruebas cardiopulmonares de ejercicio (CPET), biomecánica neuromuscular, ensayos de salud digital y multiómica multitejido en el consorcio MoTrPAC de los NIH.",
      primary: "Ver programa de investigación",
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
      roles: "Fisiólogo clínico del ejercicio · Científico del deporte · Biomecánico · CPSS, CSCS,*D, ACSM-CEP",
      profile: "Perfil de Stanford",
    },
    research: {
      eyebrow: "Programa de Investigación Traslacional",
      title: "Seis pilares integrativos de medicina del ejercicio de precisión.",
      intro:
        "Mi programa de investigación conecta el perfilado molecular multiómico en Stanford Medicine con pruebas cardiopulmonares clínicas y biomecánica del alto rendimiento.",
      credentialsEyebrow: "Financiamiento, Gobernanza y Servicio",
      credentialsTitle: "Premios, becas, conferencias invitadas y liderazgo editorial.",
      credentials: [
        {
          meta: "NIH · NHLBI y Wu Tsai Alliance",
          title: "LRP-REACH y beca TIMBS",
          body: "Mi investigación cuenta con el apoyo de un premio NIH/NHLBI LRP-REACH de dos años (2026–2028), la formación posdoctoral T32 de los NIH en biología del miocardio en Stanford (TIMBS, 2024–2026) y la beca posdoctoral de la Wu Tsai Human Performance Alliance (2022–2024).",
          href: "https://profiles.stanford.edu/samuel-montalvo-hernandez",
          action: "Perfil de Stanford",
        },
        {
          meta: "CFDE · 2026",
          title: "Propuesta de formación seleccionada",
          body: "Cataloging MoTrPAC and Metabolomics Workbench Data recibió $5,000 del NIH Common Fund Data Ecosystem para desarrollar módulos de armonización multiómica con RefMet.",
        },
        {
          meta: "Distinciones y conferencias invitadas",
          title: "Henan University, UANL y FEMECAD / CODEME",
          body: "Presenté The Molecular Elite Athlete en Henan University (2025) y From Molecules to High Performance in Exercise Science en la UANL (2024 y 2025). Recibí el Reconocimiento a la Investigación Científica de FEMECAD/CODEME (2024) y el Premio Nacional 'Luchador Olmeca' de la CODEME.",
        },
        {
          meta: "Liderazgo editorial y gobernanza",
          title: "Editor sénior, Journal of Strength and Conditioning Research",
          body: "También soy editor de sección del Journal of Taiji Science, Oficial Financiero de la Asociación Posdoctoral de Stanford (SURPAS, 2026–Actualidad), coach de mentoría posdoctoral (Stanford OPA), mentor en Stanford PRISM y CVI MAVERICs, y codirector de la tesis de Pablo Tadeo Ríos Gallardo en la UANL (2025).",
          href: "https://www.wtsf.org/ojs/index.php/jts/en/Editorial_Board",
          action: "Comité editorial de Taiji",
          secondaryHref: "https://eprints.uanl.mx/31086/1/1080263196.pdf",
          secondaryAction: "Tesis de la UANL",
        },
      ],
      profileAction: "Ver perfil de Stanford",
    },
    tools: {
      eyebrow: "Agentes de IA y aplicaciones de investigación",
      title: "Software para investigación, docencia y análisis.",
      intro:
        "Desarrollo herramientas computacionales de código abierto y flujos con IA para armonización multiómica, detección de umbrales en CPET, biomecánica por visión artificial y formación multilingüe.",
    },
    publications: {
      eyebrow: "Registro de publicaciones · Actualizado en octubre de 2026",
      title: `${peerReviewedCount} artículos revisados por pares.`,
      intro:
        `El registro completo incluye ${totalPublicationCount} artículos, preprints y resúmenes publicados (523+ citas en Google Scholar). Verifiqué cada registro en PubMed, mi perfil CAP de Stanford y las fuentes editoriales.`,
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
      newTab: "se abre en una pestaña nueva",
    },
    education: {
      eyebrow: "Formación académica y posdoctoral",
      title: "Formación en fisiología del ejercicio, biomecánica y bioinformática.",
      intro:
        "Me formé en kinesiología, fisiología clínica del ejercicio y biomecánica en la University of Texas at El Paso. En Stanford, mi trabajo posdoctoral se ha centrado en rendimiento humano, biología del miocardio y bioinformática multiómica.",
    },
    about: {
      eyebrow: "Sobre mí y afiliaciones académicas",
      title: "Estudio el ejercicio en entornos clínicos, de laboratorio y de rendimiento.",
      lead:
        "Me formé en la University of Texas at El Paso desde la licenciatura hasta el doctorado en ciencias interdisciplinarias de la salud, donde también fui investigador clínico asociado en el laboratorio CaPH e instructor de kinesiología en El Paso Community College.",
      body:
        "Llegué a Stanford en 2022 a través de la Wu Tsai Human Performance Alliance y me incorporé a Medicina Cardiovascular en 2024. Soy miembro del Stanford Cardiovascular Institute, la Wu Tsai Human Performance Alliance y el Stanford Bioinformatics Core, y participo activamente en AHA, SACNAS, ACSM y NSCA.",
      heritage:
        "Como universitario de primera generación y científico mexicoamericano con raíces indígenas, impulso la mentoría inclusiva como coach de mentoría en Stanford OPA y mentor en los programas Stanford PRISM y CVI MAVERICs.",
      imageAlt:
        "Samuel Montalvo, fisiólogo clínico del ejercicio y científico del deporte",
      cv: "Ver mi CV",
      github: "GitHub",
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Le interesa trabajar conmigo?",
      body:
        "Si su proyecto coincide con alguna de mis líneas de trabajo, escríbame con una breve descripción de la pregunta y del tipo de colaboración que tiene en mente.",
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
    status: "Evidence atlas",
    title: "Vertical Jump Atlas",
    subtitle: "Published vertical-jump data, organized by protocol",
    body: "Compare published cohorts by jump protocol and review reference values from compatible studies. The pooled estimates are exploratory and are not intended for diagnosis or talent selection.",
    tags: ["PubMed-indexed studies", "Protocol-specific references", "Exploratory use"],
    href: "https://takeoff-jump-atlas.samuelmontalvo.chatgpt.site/#sport-norms",
    action: "Open the atlas",
    theme: "atlas",
    media: true,
    visual: (locale: Locale) => (
      <figure className="tool-product-figure tool-product-figure-atlas">
        <img
          src="/tools/vertical-jump-atlas.jpg"
          width="1280"
          height="720"
          loading="lazy"
          decoding="async"
          alt={locale === "es"
            ? "Interfaz de Vertical Jump Atlas con un diagrama de bosque filtrado y una estimación combinada para jugadores de voleibol"
            : "Vertical Jump Atlas interface with a filtered forest plot and pooled estimate for volleyball players"}
        />
        <figcaption>
          <span>{locale === "es" ? "Vista del producto" : "Product view"}</span>
          <strong>
            {locale === "es"
              ? "Diagrama de bosque y estimación combinada"
              : "Forest plot and pooled cohort estimate"}
          </strong>
        </figcaption>
      </figure>
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
    media: true,
    visual: (locale: Locale) => (
      <figure className="tool-product-figure tool-product-figure-metabo">
        <img
          src="/tools/metabo-diet-harmonization.jpg"
          width="1280"
          height="720"
          loading="lazy"
          decoding="async"
          alt={locale === "es"
            ? "Interfaz del curso Metabo-Diet en la lección sobre armonización de metabolitos y metadatos"
            : "Metabo-Diet course interface on the lesson about harmonizing metabolites and metadata"}
        />
        <figcaption>
          <span>{locale === "es" ? "Vista del curso" : "Course view"}</span>
          <strong>
            {locale === "es"
              ? "Armonización auditable con RefMet"
              : "Auditable harmonization with RefMet"}
          </strong>
        </figcaption>
      </figure>
    ),
  },
  {
    number: "03",
    status: "Public beta",
    title: "FlightLab EDU",
    subtitle: "Video-based jump analysis for teaching",
    body: "The app marks takeoff and landing, and students can correct those events before it calculates jump height. Videos stay on the device, and results export locally.",
    tags: ["Performance + education", "On-device AI", "No video uploads"],
    href: "https://flightlab-edu.netlify.app/",
    action: "Launch FlightLab EDU",
    theme: "moss",
    media: true,
    visual: (locale: Locale) => (
      <figure className="tool-product-figure tool-product-figure-flightlab">
        <img
          src="/tools/flightlab-evidence-review.jpg"
          width="1280"
          height="720"
          loading="lazy"
          decoding="async"
          alt={locale === "es"
            ? "Pantalla de revisión de evidencia de FlightLab EDU con una muestra de salto, una puntuación de calidad y revisión manual"
            : "FlightLab EDU evidence-review screen with a sample jump, quality score, and manual review step"}
        />
        <figcaption>
          <span>{locale === "es" ? "Vista del producto" : "Product view"}</span>
          <strong>
            {locale === "es"
              ? "Revisión de evidencia antes de guardar"
              : "Evidence review before saving"}
          </strong>
        </figcaption>
      </figure>
    ),
  },
  {
    number: "04",
    status: "Live learning tool",
    title: "Exercise Science Practice Lab",
    subtitle: "Practice questions for exercise science certifications",
    body: "I built this independent multilingual study tool for ACSM-CEP, NSCA-CPSS, and NSCA-CSCS preparation. It uses original question banks and tracks weak areas for targeted review.",
    tags: ["Education", "Original question banks", "English · Español · 中文"],
    href: "https://exercise-science-exam-prep.netlify.app/",
    action: "Open Practice Lab",
    theme: "plum",
    media: false,
    visual: (locale: Locale) => (
      <div className="tool-visual study-visual" aria-hidden="true">
        <span className="study-score">
          {locale === "es" ? "Repaso" : "Review"}
        </span>
        <span className="study-bar bar-a" />
        <span className="study-bar bar-b" />
        <span className="study-bar bar-c" />
        <span className="study-label">
          {locale === "es" ? "práctica por área" : "practice by domain"}
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
    status: "Atlas de evidencia",
    subtitle: "Datos publicados de salto vertical, organizados por protocolo",
    body: "Compare cohortes publicadas por protocolo de salto y consulte valores de referencia de estudios compatibles. Las estimaciones combinadas son exploratorias y no están diseñadas para diagnóstico ni selección de talento.",
    tags: ["Estudios indexados en PubMed", "Referencias por protocolo", "Uso exploratorio"],
    action: "Abrir el atlas",
  },
  "Metabo-Diet": {
    status: "En desarrollo",
    subtitle: "Formación en armonización con datos sintéticos",
    body: "Estoy desarrollando este módulo para enseñar a comparar datos dietéticos, de ejercicio, clínicos y metabolómicos sin perder el contexto ni la procedencia de cada estudio.",
    tags: ["Datos sintéticos", "Multiómica", "Armonización de datos"],
    action: "Consultar sobre el proyecto",
  },
  "FlightLab EDU": {
    status: "Beta pública",
    subtitle: "Análisis de saltos en video para la enseñanza",
    body: "La aplicación marca el despegue y el aterrizaje, y los estudiantes pueden corregir esos eventos antes de calcular la altura del salto. Los videos permanecen en el dispositivo y los resultados se exportan localmente.",
    tags: ["Rendimiento + educación", "IA en el dispositivo", "Los videos no se suben"],
    action: "Abrir FlightLab EDU",
  },
  "Exercise Science Practice Lab": {
    status: "Herramienta educativa disponible",
    subtitle: "Preguntas de práctica para certificaciones en ciencias del ejercicio",
    body: "Desarrollé esta herramienta multilingüe e independiente para preparar las certificaciones ACSM-CEP, NSCA-CPSS y NSCA-CSCS. Incluye bancos de preguntas originales y registra las áreas que requieren más repaso.",
    tags: ["Educación", "Bancos de preguntas originales", "English · Español · 中文"],
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

const recentUpdatesByLocale = {
  en: {
    eyebrow: "Recent updates · October 2026",
    title: "2026",
    items: [
      {
        date: "Sep 19",
        dateTime: "2026-09-19",
        text: "Our first-author MoTrPAC study mapping sedentary human fitness, clinical features, multi-omic baseline architecture, and acute exercise dynamics was published in Medicine & Science in Sports & Exercise.",
        href: "https://doi.org/10.1249/01.mss.0001263628.46584.b4",
        action: "DOI",
      },
      {
        date: "Sep 19",
        dateTime: "2026-09-19-msse",
        text: "Our MoTrPAC analysis demonstrating accelerometry as an independent predictor of cardiorespiratory fitness in sedentary adults was published in Medicine & Science in Sports & Exercise.",
        href: "https://doi.org/10.1249/01.mss.0001260292.05388.29",
        action: "DOI",
      },
      {
        date: "Aug 21",
        dateTime: "2026-08-21",
        text: "Our critical review of sleep and muscle hypertrophy was published online in Strength & Conditioning Journal.",
        href: "https://doi.org/10.1519/SSC.0000000000001000",
        action: "Read the paper",
      },
      {
        date: "Aug 11",
        dateTime: "2026-08-11",
        text: "A basketball study linking isometric shoulder strength with three-point accuracy was published online in JSCR.",
        href: "https://pubmed.ncbi.nlm.nih.gov/42580351/",
        action: "PubMed",
      },
      {
        date: "2026",
        dateTime: "2026",
        text: "I received a two-year NHLBI LRP-REACH award for research in precision exercise medicine and was appointed Senior Editor at JSCR and SURPAS Financial Officer.",
        href: "https://profiles.stanford.edu/samuel-montalvo-hernandez",
        action: "Stanford profile",
      },
    ],
  },
  es: {
    eyebrow: "Novedades · Octubre de 2026",
    title: "2026",
    items: [
      {
        date: "19 sep.",
        dateTime: "2026-09-19",
        text: "Nuestro estudio como primer autor en MoTrPAC sobre aptitud física, arquitectura multiómica basal y dinámica del ejercicio agudo se publicó en Medicine & Science in Sports & Exercise.",
        href: "https://doi.org/10.1249/01.mss.0001263628.46584.b4",
        action: "DOI",
      },
      {
        date: "19 sep.",
        dateTime: "2026-09-19-msse",
        text: "Nuestro análisis de MoTrPAC sobre acelerometría como predictor independiente de la aptitud cardiorrespiratoria en adultos sedentarios se publicó en Medicine & Science in Sports & Exercise.",
        href: "https://doi.org/10.1249/01.mss.0001260292.05388.29",
        action: "DOI",
      },
      {
        date: "21 ago.",
        dateTime: "2026-08-21",
        text: "Nuestra revisión crítica sobre el sueño y la hipertrofia muscular se publicó en línea en Strength & Conditioning Journal.",
        href: "https://doi.org/10.1519/SSC.0000000000001000",
        action: "Leer el artículo",
      },
      {
        date: "11 ago.",
        dateTime: "2026-08-11",
        text: "JSCR publicó en línea nuestro estudio sobre fuerza isométrica del hombro y precisión en tiros de tres puntos.",
        href: "https://pubmed.ncbi.nlm.nih.gov/42580351/",
        action: "PubMed",
      },
      {
        date: "2026",
        dateTime: "2026",
        text: "Recibí un premio NHLBI LRP-REACH de dos años para investigar medicina del ejercicio de precisión y fui nombrado Editor Sénior en JSCR y Oficial Financiero de SURPAS.",
        href: "https://profiles.stanford.edu/samuel-montalvo-hernandez",
        action: "Perfil de Stanford",
      },
    ],
  },
} as const;

const codeByLocale = {
  en: {
    eyebrow: "Open code",
    title: "Code and reproducible workflows.",
    intro: "Public repositories for tools and analyses I use in research.",
    items: [
      {
        title: "MetaboTyping Agentic Workbench",
        type: "Research agents",
        body: "An offline, human-reviewed workflow for finding metabolomics datasets and evaluating whether their variables and assays can be harmonized.",
        href: "https://github.com/Samuelmontalvo/metabotyping-agentic-workbench",
      },
      {
        title: "VT Web Autodetection",
        type: "CPET",
        body: "A Streamlit application for automated VT1 and VT2 detection.",
        href: "https://github.com/Samuelmontalvo/VT_Web_Autodetection",
      },
      {
        title: "Open S&C PASCO",
        type: "Performance testing",
        body: "An R Shiny workflow for processing countermovement-jump and isometric mid-thigh-pull data from PASCO platforms.",
        href: "https://github.com/Samuelmontalvo/Open_S-C_pasco",
      },
      {
        title: "ECG LVH",
        type: "Sports cardiology",
        body: "The analysis repository associated with my work on sex-specific ECG criteria for left ventricular hypertrophy in young athletes.",
        href: "https://github.com/Samuelmontalvo/ECG_lvh",
      },
    ],
    action: "View repository",
  },
  es: {
    eyebrow: "Código abierto",
    title: "Código y flujos de trabajo reproducibles.",
    intro: "Repositorios públicos de herramientas y análisis que utilizo en investigación.",
    items: [
      {
        title: "MetaboTyping Agentic Workbench",
        type: "Agentes de investigación",
        body: "Flujo de trabajo sin conexión y con revisión humana para localizar datos metabolómicos y evaluar si sus variables y ensayos pueden armonizarse.",
        href: "https://github.com/Samuelmontalvo/metabotyping-agentic-workbench",
      },
      {
        title: "VT Web Autodetection",
        type: "CPET",
        body: "Aplicación Streamlit para detectar VT1 y VT2 de forma automatizada.",
        href: "https://github.com/Samuelmontalvo/VT_Web_Autodetection",
      },
      {
        title: "Open S&C PASCO",
        type: "Evaluación del rendimiento",
        body: "Flujo en R Shiny para procesar datos de salto con contramovimiento y tracción isométrica de medio muslo de plataformas PASCO.",
        href: "https://github.com/Samuelmontalvo/Open_S-C_pasco",
      },
      {
        title: "ECG LVH",
        type: "Cardiología deportiva",
        body: "Repositorio de análisis asociado con mi trabajo sobre criterios electrocardiográficos específicos por sexo para hipertrofia ventricular izquierda en deportistas jóvenes.",
        href: "https://github.com/Samuelmontalvo/ECG_lvh",
      },
    ],
    action: "Ver repositorio",
  },
} as const;

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
  const recentUpdates = recentUpdatesByLocale[locale];
  const code = codeByLocale[locale];

  return (
    <main lang={locale}>
      <a className="skip-link" href="#main-content">
        {copy.skip}
      </a>

      <nav className="topbar" aria-label={copy.mainNav}>
        <a className="wordmark" href="#top">
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
              src="/samuel-montalvo-800.jpg"
              srcSet="/samuel-montalvo-480.jpg 480w, /samuel-montalvo-800.jpg 800w"
              sizes="(max-width: 600px) calc(100vw - 50px), (max-width: 850px) calc(100vw - 76px), 380px"
              alt={locale === "es" ? "Retrato de Samuel Montalvo" : "Portrait of Samuel Montalvo"}
              width="620"
              height="620"
              loading="lazy"
              decoding="async"
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
        <div className="credentials-block">
          <div className="credentials-heading">
            <span className="eyebrow">{copy.research.credentialsEyebrow}</span>
            <h3>{copy.research.credentialsTitle}</h3>
          </div>
          <div className="credentials-grid">
            {copy.research.credentials.map((item) => (
              <article className="credential-card" key={item.title}>
                <span>{item.meta}</span>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                {"href" in item && item.href ? (
                  <div className="credential-links">
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.action} {externalIcon}
                    </a>
                    {"secondaryHref" in item && item.secondaryHref ? (
                      <a href={item.secondaryHref} target="_blank" rel="noreferrer">
                        {item.secondaryAction} {externalIcon}
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
          <a
            className="credentials-profile-link"
            href="https://profiles.stanford.edu/samuel-montalvo-hernandez"
            target="_blank"
            rel="noreferrer"
          >
            {copy.research.profileAction} {externalIcon}
          </a>
        </div>
        <section className="recent-updates" aria-labelledby="recent-updates-title">
          <header>
            <span className="eyebrow">{recentUpdates.eyebrow}</span>
            <h3 id="recent-updates-title">{recentUpdates.title}</h3>
          </header>
          <ol>
            {recentUpdates.items.map((item) => (
              <li key={item.dateTime}>
                <time dateTime={item.dateTime}>{item.date}</time>
                <p>{item.text}</p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.action} {externalIcon}
                </a>
              </li>
            ))}
          </ol>
        </section>
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
                <article
                  className={`tool-card tool-${tool.theme}${tool.media ? " tool-card-media" : ""}`}
                  key={tool.title}
                >
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
          <section className="code-section" aria-labelledby="code-section-title">
            <header className="code-heading">
              <div>
                <span className="eyebrow light">{code.eyebrow}</span>
                <h3 id="code-section-title">{code.title}</h3>
              </div>
              <p>{code.intro}</p>
            </header>
            <div className="code-grid">
              {code.items.map((item) => (
                <article className="code-card" key={item.title}>
                  <span>{item.type}</span>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {code.action} {externalIcon}
                  </a>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="publications-section" id="publications">
        <div className="section-shell">
          <SelectedPapers locale={locale} />
        </div>
        <section
          className="section-shell publication-layout publication-archive"
          id="complete-publication-record"
          aria-labelledby="complete-publication-record-title"
        >
          <div className="publication-intro">
            <span className="eyebrow">{copy.publications.eyebrow}</span>
            <h2 id="complete-publication-record-title">{copy.publications.title}</h2>
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
              <details className="publication-group" key={group.id}>
                <summary>
                  <span>{copy.publications.groups[group.id]}</span>
                  <span>{group.items.length}</span>
                </summary>
                <div className="publication-list">
                  {group.items.map((publication) => {
                    const citationId = `${publication.id}-citation`;

                    return (
                      <article className="publication-row" key={publication.id}>
                        <span className="publication-year">{publication.year}</span>
                        <div>
                          <p className="publication-citation" id={citationId}>
                            <PublicationCitation citation={publication.citation} />
                          </p>
                          <a
                            className="publication-source"
                            href={publication.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-describedby={citationId}
                          >
                            {copy.publications.sources[publication.label]} {externalIcon}
                            <span className="sr-only">
                              ({copy.publications.newTab})
                            </span>
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </details>
            ))}
          </div>
        </section>
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
            src="/samuel-montalvo-800.jpg"
            srcSet="/samuel-montalvo-480.jpg 480w, /samuel-montalvo-800.jpg 800w"
            sizes="(max-width: 600px) calc(100vw - 50px), (max-width: 850px) 560px, 430px"
            alt={copy.about.imageAlt}
            width="620"
            height="620"
            loading="lazy"
          />
          <div className="about-badge">
            <span>CPSS</span>
            <span>CSCS,*D</span>
            <span>ACSM-CEP</span>
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
              href={
                locale === "es"
                  ? "/samuel-montalvo-cv-es.pdf"
                  : "/samuel-montalvo-cv.pdf"
              }
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
