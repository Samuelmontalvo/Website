import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "https://www.samuelmontalvo.com"), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished research profile", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Samuel Montalvo, PhD \| Personalized Exercise Medicine<\/title>/i,
  );
  assert.match(html, /<html lang="en">/);
  assert.match(html, /I study why people respond/);
  assert.match(html, /differently to exercise/);
  assert.match(html, /MoTrPAC/);
  assert.match(html, /High-performance sport/);
  assert.match(html, /Cardiopulmonary exercise testing/);
  assert.match(html, /ECG and sports cardiology/);
  assert.match(html, /Clinical populations/);
  assert.match(html, /AI agents and apps/);
  assert.match(html, /Stanford Baseball/);
  assert.match(html, /carotid blood flow and shear stress/);
  assert.match(html, /LRP-REACH award and TIMBS fellowship/);
  assert.match(html, /Cataloging MoTrPAC and Metabolomics Workbench Data/);
  assert.match(html, /The Molecular Elite Athlete/);
  assert.match(html, /Pablo Tadeo Ríos Gallardo/);
  assert.match(html, /Journal of Taiji Science/);
  assert.match(html, /eprints\.uanl\.mx\/31086/);
  assert.match(html, /Our critical review of sleep and muscle hypertrophy/);
  assert.match(html, /Code and reproducible workflows/);
  assert.match(html, /github\.com\/Samuelmontalvo\/metabotyping-agentic-workbench/);
  assert.match(html, /github\.com\/Samuelmontalvo\/VT_Web_Autodetection/);
  assert.match(html, /github\.com\/Samuelmontalvo\/Open_S-C_pasco/);
  assert.match(html, /github\.com\/Samuelmontalvo\/ECG_lvh/);
  assert.match(html, /Metabo-Diet/);
  assert.match(html, /Vertical Jump Atlas/);
  assert.match(html, /Open the atlas/);
  assert.match(
    html,
    /takeoff-jump-atlas\.samuelmontalvo\.chatgpt\.site\/#sport-norms/,
  );
  assert.match(html, /FlightLab EDU/);
  assert.match(html, /Exercise Science Practice Lab/);
  assert.match(html, /flightlab-edu\.netlify\.app/);
  assert.match(html, /exercise-science-exam-prep\.netlify\.app/);
  assert.match(html, /mailto:smontal@stanford\.edu/);
  assert.match(html, /49(?:<!-- -->)? peer-reviewed papers/);
  assert.match(html, /complete record includes (?:<!-- -->)?95/);
  assert.match(html, /Selected papers/);
  assert.match(html, /Papers that show the direction of my work/);
  assert.match(html, /Sex-Specific Electrocardiographic Criteria for Left Ventricular Hypertrophy/);
  assert.match(html, /9,254 athletes/);
  assert.equal((html.match(/class="selected-paper-card"/g) ?? []).length, 6);
  assert.equal((html.match(/<figcaption>/g) ?? []).length, 6);
  assert.match(html, /id="complete-publication-record"/);
  assert.match(html, /pubmed\.ncbi\.nlm\.nih\.gov\/42164870/);
  assert.match(html, /pubmed\.ncbi\.nlm\.nih\.gov\/40837520/);
  assert.match(html, /pubmed\.ncbi\.nlm\.nih\.gov\/40565934/);
  assert.match(html, /pubmed\.ncbi\.nlm\.nih\.gov\/40358569/);
  assert.match(html, /pubmed\.ncbi\.nlm\.nih\.gov\/42395096/);
  assert.match(html, /pubmed\.ncbi\.nlm\.nih\.gov\/35620608/);
  assert.match(html, /Peer-reviewed publications/);
  assert.match(html, /Published abstracts &amp; proceedings/);
  assert.equal((html.match(/class="publication-source"/g) ?? []).length, 95);
  assert.doesNotMatch(html, /<details[^>]+open/);
  assert.match(html, /pubmed\.ncbi\.nlm\.nih\.gov\/42580351/);
  assert.match(html, /pubmed\.ncbi\.nlm\.nih\.gov\/40859825/);
  assert.match(html, /Myocardial biology and bioinformatics/);
  assert.match(html, /samuel-montalvo-cv\.pdf/);
  assert.match(html, /researchgate\.net\/profile\/Samuel-Montalvo/);
  assert.match(html, /linkedin\.com\/in\/samuel-montalvo-ph-d-a4872282/);
  assert.match(html, /profiles\.stanford\.edu\/samuel-montalvo-hernandez/);
  assert.match(html, /scholar\.google\.com\/citations\?user=whonnOUAAAAJ/);
  assert.match(html, /href="\/es"[^>]+aria-label="ES · View site in Spanish"/);
  assert.doesNotMatch(html, /One person\. Many signals\. One connected picture\./);
  assert.doesNotMatch(html, /Research you can use\./);
  assert.doesNotMatch(html, /MetaboDiet|JumpLab|OpenCPET/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  assert.doesNotMatch(html, /github\.com\/Samuelmontalvo\/stanford-cpet-app/i);
  assert.doesNotMatch(html, /drive\.google\.com\/file\/d\/1TJOMkD6/);
  assert.doesNotMatch(html, /drsamuelmontalvo@gmail\.com/);
  assert.doesNotMatch(html, /July 10|10 de julio/);
  assert.doesNotMatch(html, /Stanford CPET App/);
  assert.doesNotMatch(
    html,
    /The question behind my work|class="translation-section"|class="translation-step/,
  );
  assert.doesNotMatch(html, /release 0\.6|51 PubMed records|74 reference estimates|3,000 questions|82%/);
  assert.doesNotMatch(html, /\/Users\/|file:\/\//);
  assert.match(html, /property="og:locale" content="en_US"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /name="twitter:image"/);
});

test("serves a complete Spanish translation with an English switch", async () => {
  const response = await render("/es");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(
    html,
    /<title>Samuel Montalvo, PhD \| Medicina del ejercicio personalizada<\/title>/i,
  );
  assert.match(html, /<html lang="es">/);
  assert.match(html, /<main lang="es">/);
  assert.match(html, /Estudio por qué cada persona responde/);
  assert.match(html, /de manera distinta al ejercicio/);
  assert.match(html, /Alto rendimiento deportivo/);
  assert.match(html, /Prueba cardiopulmonar de ejercicio/);
  assert.match(html, /ECG y cardiología deportiva/);
  assert.match(html, /Poblaciones clínicas/);
  assert.match(html, /Agentes de IA y aplicaciones/);
  assert.match(html, /Software para investigación, docencia y análisis/);
  assert.match(html, /Publicaciones revisadas por pares/);
  assert.match(html, /Trabajos seleccionados/);
  assert.match(html, /Rendimiento deportivo · Sprint con resistencia/);
  assert.match(html, /Consultar el registro completo de publicaciones/);
  assert.match(html, /Formación académica y posdoctoral/);
  assert.match(html, /samuel-montalvo-cv-es\.pdf/);
  assert.match(html, /LRP-REACH y beca TIMBS/);
  assert.match(html, /Propuesta de formación seleccionada/);
  assert.match(html, /Editor de sección y codirector de tesis/);
  assert.match(html, /Nuestra revisión crítica sobre el sueño y la hipertrofia muscular/);
  assert.match(html, /Código y flujos de trabajo reproducibles/);
  assert.match(html, /href="\/"[^>]+aria-label="EN · Ver sitio en inglés"/);
  assert.match(html, /pubmed\.ncbi\.nlm\.nih\.gov\/42580351/);
  assert.match(html, /rel="alternate" hrefLang="es" href="https:\/\/www\.samuelmontalvo\.com\/es"/i);
  assert.match(html, /hrefLang="x-default"/i);
  assert.match(html, /medicina personalizada del ejercicio/);
  assert.match(html, /property="og:locale" content="es_US"/);
  assert.match(html, /property="og:image"/);
  assert.match(html, /property="og:type" content="website"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /name="twitter:image"/);
  assert.doesNotMatch(html, /La pregunta detrás de mi trabajo|Medir|Relacionar|Aplicar/);
  assert.doesNotMatch(html, /\/Users\/|file:\/\//);
});

test("ships site-specific metadata and accessible assets", async () => {
  const [layout, page, spanishPage, publicationData, styles] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/es/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/publications-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /metadataBase/);
  assert.match(layout, /\/og\.png/);
  assert.match(layout, /summary_large_image/);
  assert.match(layout, /languages:/);
  assert.doesNotMatch(layout, /next\/font/);
  assert.match(page, /className="skip-link"/);
  assert.match(page, /Portrait of Samuel Montalvo/);
  assert.match(page, /className="language-switch"/);
  assert.match(spanishPage, /PortfolioPage locale="es"/);
  assert.equal((publicationData.match(/"citation":/g) ?? []).length, 95);
  assert.equal((publicationData.match(/"href":/g) ?? []).length, 95);
  assert.equal((publicationData.match(/"label": "PubMed"/g) ?? []).length, 38);
  assert.match(styles, /prefers-reduced-motion:\s*reduce/);
  assert.doesNotMatch(styles, /\.translation-section|\.translation-steps/);
  assert.match(styles, /\.publication-source/);

  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../public/samuel-montalvo-800.jpg", import.meta.url));
  await access(new URL("../public/samuel-montalvo-480.jpg", import.meta.url));
  await access(new URL("../public/samuel-montalvo-cv.pdf", import.meta.url));
  await access(new URL("../public/samuel-montalvo-cv-es.pdf", import.meta.url));
  await Promise.all(
    [
      "motrpac-multi-omic-figure-2.jpg",
      "resisted-sprint-figure-1.jpg",
      "nmd-cpet-recovery-figure-1.jpg",
      "athlete-ecg-central-illustration.jpg",
      "carotid-shear-stress-figure-3.jpg",
    ].map((filename) =>
      access(new URL(`../public/selected-papers/${filename}`, import.meta.url)),
    ),
  );
  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
});
