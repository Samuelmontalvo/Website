import { ResearchNetwork } from "./research-network";
import { publicationGroups, totalPublicationCount } from "./publications-data";

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

const tools = [
  {
    number: "01",
    status: "Evidence atlas · release 0.6",
    title: "Vertical Jump Atlas",
    subtitle: "PubMed evidence by test protocol",
    body: "Compare published cohorts, explore protocol-specific reference values, and pool compatible means in an exploratory meta-analysis. A curated evidence map—not a diagnostic or talent-selection tool.",
    tags: ["51 PubMed records", "74 reference estimates", "Protocol-aware"],
    href: "https://takeoff-jump-atlas.samuelmontalvo.chatgpt.site/#sport-norms",
    action: "Explore sport norms",
    theme: "atlas",
    visual: (
      <div className="tool-visual atlas-visual" aria-hidden="true">
        <span className="atlas-grid" />
        <span className="atlas-kicker">Reference values by jump protocol</span>
        <span className="atlas-scale scale-zero">0</span>
        <span className="atlas-scale scale-thirty">30</span>
        <span className="atlas-scale scale-sixty">60 cm</span>
        <span className="atlas-bar atlas-bar-a"><i>CMJ</i><b>44.3</b></span>
        <span className="atlas-bar atlas-bar-b"><i>CMJ + arms</i><b>48.1</b></span>
        <span className="atlas-bar atlas-bar-c"><i>SJ</i><b>35.7</b></span>
        <span className="atlas-marker"><i>Your jump</i><b>30 cm</b></span>
        <span className="atlas-source">PubMed-indexed cohorts · protocol filters · compatible means</span>
      </div>
    ),
  },
  {
    number: "02",
    status: "In development",
    title: "Metabo-Diet",
    subtitle: "Harmonization training with synthetic data",
    body: "An interactive training module for comparing diet, exercise, clinical, and metabolomics datasets while preserving study context and provenance.",
    tags: ["Synthetic data", "Multi-omics", "Data harmonization"],
    href: "mailto:smontal@stanford.edu?subject=Metabo-Diet collaboration",
    action: "Ask about the project",
    theme: "clay",
    visual: (
      <div className="tool-visual metabo-visual" aria-hidden="true">
        <span className="ring ring-one" />
        <span className="ring ring-two" />
        <span className="ring ring-three" />
        <span className="micro-dot dot-one" />
        <span className="micro-dot dot-two" />
        <span className="micro-dot dot-three" />
        <span className="micro-label label-one">diet</span>
        <span className="micro-label label-two">omics</span>
        <span className="micro-label label-three">phenotype</span>
      </div>
    ),
  },
  {
    number: "03",
    status: "Public beta",
    title: "FlightLab EDU",
    subtitle: "Evidence-visible video analysis",
    body: "Review CMJ and squat-jump video with on-device pose suggestions, manual event correction, flight-time height, quality flags, and local export.",
    tags: ["Performance + education", "On-device AI", "No video uploads"],
    href: "https://flightlab-edu.netlify.app/",
    action: "Launch FlightLab EDU",
    theme: "moss",
    visual: (
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
        <span className="jump-mark mark-top">flight</span>
        <span className="jump-mark mark-bottom">landing</span>
        <span className="jump-curve" />
      </div>
    ),
  },
  {
    number: "04",
    status: "Private research software",
    title: "Stanford CPET App",
    subtitle: "From raw tests to review-ready physiology",
    body: "A quality-control and analysis environment for parsing, reviewing, visualizing, and exporting cardiopulmonary exercise-test data.",
    tags: ["CPET", "Physiology", "Reproducible workflows"],
    href: "mailto:smontal@stanford.edu?subject=CPET research software collaboration",
    action: "Discuss a collaboration",
    theme: "teal",
    visual: (
      <div className="tool-visual cpet-visual" aria-hidden="true">
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
    subtitle: "Certification study, built for retrieval",
    body: "An independent multilingual practice environment for ACSM-CEP, NSCA-CPSS, and NSCA-CSCS preparation with original question banks and weak-area review.",
    tags: ["Education", "3,000 questions", "English · Español · 中文"],
    href: "https://exercise-science-exam-prep.netlify.app/",
    action: "Open Practice Lab",
    theme: "plum",
    visual: (
      <div className="tool-visual study-visual" aria-hidden="true">
        <span className="study-score">82<span>%</span></span>
        <span className="study-bar bar-a" />
        <span className="study-bar bar-b" />
        <span className="study-bar bar-c" />
        <span className="study-label">domain mastery</span>
      </div>
    ),
  },
];

const education = [
  {
    type: "Postdoctoral training",
    title: "Myocardial Biology · Bioinformatics",
    institution: "Stanford University",
    period: "Aug 2024 — Present",
  },
  {
    type: "Postdoctoral fellowship",
    title: "Human Performance · Clinical Exercise Physiology",
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
];

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

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <nav className="topbar" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Samuel Montalvo home">
          <span>SM</span>
          <strong>Samuel Montalvo, PhD</strong>
        </a>
        <div className="nav-links">
          <a href="#research">Research</a>
          <a href="#tools">Tools</a>
          <a href="#publications">Publications</a>
          <a href="#education">Education</a>
          <a href="#about">About</a>
        </div>
        <a className="nav-contact" href="mailto:smontal@stanford.edu">
          Let&apos;s collaborate {arrowIcon}
        </a>
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
            Stanford Medicine · Cardiovascular Medicine
          </div>
          <h1>
            Personalized exercise medicine,
            <span>from molecules to movement.</span>
          </h1>
          <p className="hero-intro">
            I integrate exercise physiology, biomechanics, multi-omics, and
            digital tools to understand why people respond differently to
            physical activity—and translate that biology into better decisions.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#research">
              Explore the research {arrowIcon}
            </a>
            <a className="button button-secondary" href="#tools">
              Use the tools
            </a>
          </div>
          <div className="hero-domains" aria-label="Research domains">
            <span>Metabolism</span>
            <span>Biomechanics</span>
            <span>Multi-omics</span>
            <span>Digital health</span>
          </div>
        </div>
        <aside className="profile-card" aria-label="Samuel Montalvo profile">
          <div className="portrait-frame">
            <img
              src="/samuel-montalvo.jpg"
              alt="Portrait of Samuel Montalvo"
              width="620"
              height="620"
            />
            <span className="portrait-accent" />
          </div>
          <div className="profile-details">
            <div>
              <span>Samuel Montalvo, PhD</span>
              <p>Clinical exercise physiologist · Sport scientist · Biomechanist</p>
            </div>
            <a
              href="https://profiles.stanford.edu/samuel-montalvo-hernandez"
              target="_blank"
              rel="noreferrer"
            >
              Stanford profile {externalIcon}
            </a>
          </div>
        </aside>
      </header>

      <section className="research-section section-shell" id="research">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">Research framework</span>
            <h2>One person. Many signals. One connected picture.</h2>
          </div>
          <p>
            Exercise response is a network—not a single outcome. This framework
            connects what a person does, what we measure, and how the body adapts.
          </p>
        </div>
        <ResearchNetwork />
        <p className="framework-note">
          Conceptual research framework; connections indicate areas of inquiry,
          not established causal relationships.
        </p>
      </section>

      <section className="tools-section" id="tools">
        <div className="section-shell">
          <div className="section-heading tools-heading">
            <div>
              <span className="eyebrow light">Open tools</span>
              <h2>Research you can use.</h2>
            </div>
            <p>
              Practical software for studying metabolism, measuring movement,
              reviewing physiology, and training the next generation.
            </p>
          </div>

          <div className="tools-grid">
            {tools.map((tool) => (
              <article className={`tool-card tool-${tool.theme}`} key={tool.title}>
                <div className="tool-topline">
                  <span>{tool.number}</span>
                  <span className="status-pill">{tool.status}</span>
                </div>
                {tool.visual}
                <div className="tool-copy">
                  <p>{tool.subtitle}</p>
                  <h3>{tool.title}</h3>
                  <div className="tool-description">{tool.body}</div>
                  <div className="tag-row">
                    {tool.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <a href={tool.href} target="_blank" rel="noreferrer">
                  {tool.action} {externalIcon}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="translation-section section-shell">
        <div className="translation-quote">
          <span className="eyebrow">The scientific question</span>
          <blockquote>
            “How do we move from an average exercise recommendation to the right
            intervention for <em>this</em> person?”
          </blockquote>
        </div>
        <div className="translation-steps" aria-label="Research translation steps">
          <div>
            <span>01</span>
            <strong>Measure</strong>
            <p>Clinical tests, movement, wearables, diet, and molecular data.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Connect</strong>
            <p>Integrate signals across tissues, time, and exercise modalities.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Translate</strong>
            <p>Turn biological variation into testable, personalized strategies.</p>
          </div>
        </div>
      </section>

      <section className="publications-section" id="publications">
        <div className="section-shell publication-layout">
          <div className="publication-intro">
            <span className="eyebrow">Complete record · Updated Aug 2026</span>
            <h2>{totalPublicationCount} works across scales.</h2>
            <p>
              Peer-reviewed papers, active preprints, and published abstracts,
              reconciled against my CV, PubMed, Stanford profile, and publisher
              records. PubMed is the primary link whenever a record is indexed.
            </p>
            <div className="publication-counts" aria-label="Publication totals">
              {publicationGroups.map((group) => (
                <div key={group.id}>
                  <strong>{group.items.length}</strong>
                  <span>{group.label}</span>
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
                  <span>{group.label}</span>
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
                        <span>{publication.label}</span>
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
            <span className="eyebrow">Education & training</span>
            <h2>Built across physiology, biomechanics, and bioinformatics.</h2>
          </div>
          <p>
            A foundation in human performance now extended through myocardial
            biology, computational methods, and multi-omic exercise science.
          </p>
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
            alt="Samuel Montalvo, clinical exercise physiologist and sport scientist"
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
          <span className="eyebrow">About Samuel</span>
          <h2>Exercise science, built to travel between the lab and the field.</h2>
          <p className="about-lead">
            I am a Postdoctoral Scholar in Cardiovascular Medicine at Stanford
            University and a member of the Stanford Bioinformatics Core and Wu
            Tsai Human Performance Alliance.
          </p>
          <p>
            Through the NIH-funded Molecular Transducers of Physical Activity
            Consortium (MoTrPAC), I analyze clinical, multi-omic, multi-tissue,
            multi-modality, and multi-species data to identify mechanisms and
            biomarkers of exercise response. I also collaborate in sports
            cardiology, CPET, neuromuscular disease, and athlete performance.
          </p>
          <p>
            As a first-generation Mexican American scientist with Indigenous
            heritage, I am committed to inclusive mentorship and practical tools
            that broaden access to rigorous exercise science.
          </p>
          <div className="about-links">
            <a
              href="/samuel-montalvo-cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View current CV {externalIcon}
            </a>
            <a href="https://github.com/Samuelmontalvo" target="_blank" rel="noreferrer">
              GitHub {externalIcon}
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-shell contact-inner">
          <span className="eyebrow light">Collaborate</span>
          <h2>Let&apos;s build the next layer of personalized exercise medicine.</h2>
          <p>
            I welcome collaborations across multi-omics, clinical exercise
            physiology, sports science, digital health, and open research tools.
          </p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:smontal@stanford.edu">
              smontal@stanford.edu {arrowIcon}
            </a>
            <a className="button button-ghost" href="mailto:drsamuelmontalvo@gmail.com">
              Consulting inquiries
            </a>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <div className="wordmark footer-mark">
          <span>SM</span>
          <strong>Samuel Montalvo, PhD</strong>
        </div>
        <nav className="footer-links" aria-label="Professional profiles">
          {footerLinks.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-top">
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
