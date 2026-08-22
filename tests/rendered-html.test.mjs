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
  assert.match(html, /I study why people respond/);
  assert.match(html, /differently to exercise/);
  assert.match(html, /Metabo-Diet/);
  assert.match(html, /Vertical Jump Atlas/);
  assert.match(html, /Open the atlas/);
  assert.match(
    html,
    /takeoff-jump-atlas\.samuelmontalvo\.chatgpt\.site\/#sport-norms/,
  );
  assert.match(html, /FlightLab EDU/);
  assert.match(html, /Stanford CPET App/);
  assert.match(html, /Exercise Science Practice Lab/);
  assert.match(html, /flightlab-edu\.netlify\.app/);
  assert.match(html, /exercise-science-exam-prep\.netlify\.app/);
  assert.match(html, /mailto:smontal@stanford\.edu/);
  assert.match(html, /95(?:<!-- -->)? papers, preprints, and abstracts/);
  assert.match(html, /Peer-reviewed publications/);
  assert.match(html, /Published abstracts &amp; proceedings/);
  assert.match(html, /pubmed\.ncbi\.nlm\.nih\.gov\/42580351/);
  assert.match(html, /pubmed\.ncbi\.nlm\.nih\.gov\/40859825/);
  assert.match(html, /Myocardial biology and bioinformatics/);
  assert.match(html, /samuel-montalvo-cv\.pdf/);
  assert.match(html, /researchgate\.net\/profile\/Samuel-Montalvo/);
  assert.match(html, /linkedin\.com\/in\/samuel-montalvo-ph-d-a4872282/);
  assert.match(html, /profiles\.stanford\.edu\/samuel-montalvo-hernandez/);
  assert.match(html, /scholar\.google\.com\/citations\?user=whonnOUAAAAJ/);
  assert.match(html, /href="\/es"[^>]+aria-label="View site in Spanish"/);
  assert.doesNotMatch(html, /One person\. Many signals\. One connected picture\./);
  assert.doesNotMatch(html, /Research you can use\./);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  assert.doesNotMatch(html, /github\.com\/Samuelmontalvo\/stanford-cpet-app/i);
  assert.doesNotMatch(html, /drive\.google\.com\/file\/d\/1TJOMkD6/);
});

test("serves a complete Spanish translation with an English switch", async () => {
  const response = await render("/es");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(
    html,
    /<title>Samuel Montalvo, PhD \| Medicina del ejercicio personalizada<\/title>/i,
  );
  assert.match(html, /<main lang="es">/);
  assert.match(html, /Estudio por qué cada persona responde/);
  assert.match(html, /de manera distinta al ejercicio/);
  assert.match(html, /Software para investigación y enseñanza/);
  assert.match(html, /Publicaciones revisadas por pares/);
  assert.match(html, /Formación académica y posdoctoral/);
  assert.match(html, /href="\/"[^>]+aria-label="Ver sitio en inglés"/);
  assert.match(html, /pubmed\.ncbi\.nlm\.nih\.gov\/42580351/);
  assert.match(html, /rel="alternate" hrefLang="es" href="https:\/\/www\.samuelmontalvo\.com\/es"/i);
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
  assert.match(page, /className="skip-link"/);
  assert.match(page, /Portrait of Samuel Montalvo/);
  assert.match(page, /className="language-switch"/);
  assert.match(spanishPage, /PortfolioPage locale="es"/);
  assert.equal((publicationData.match(/"citation":/g) ?? []).length, 95);
  assert.equal((publicationData.match(/"href":/g) ?? []).length, 95);
  assert.equal((publicationData.match(/"label": "PubMed"/g) ?? []).length, 38);
  assert.match(styles, /prefers-reduced-motion:\s*reduce/);

  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../public/samuel-montalvo.jpg", import.meta.url));
  await access(new URL("../public/samuel-montalvo-cv.pdf", import.meta.url));
  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
});
