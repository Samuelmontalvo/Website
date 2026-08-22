import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://www.samuelmontalvo.com/", {
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
  assert.match(html, /Personalized exercise medicine/);
  assert.match(html, /from molecules to movement/);
  assert.match(html, /Metabo-Diet/);
  assert.match(html, /Vertical Jump Atlas/);
  assert.match(html, /Explore sport norms/);
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
  assert.match(html, /95(?:<!-- -->)? works across scales/);
  assert.match(html, /Peer-reviewed publications/);
  assert.match(html, /Published abstracts &amp; proceedings/);
  assert.match(html, /pubmed\.ncbi\.nlm\.nih\.gov\/42580351/);
  assert.match(html, /pubmed\.ncbi\.nlm\.nih\.gov\/40859825/);
  assert.match(html, /Myocardial Biology · Bioinformatics/);
  assert.match(html, /samuel-montalvo-cv\.pdf/);
  assert.match(html, /researchgate\.net\/profile\/Samuel-Montalvo/);
  assert.match(html, /linkedin\.com\/in\/samuel-montalvo-ph-d-a4872282/);
  assert.match(html, /profiles\.stanford\.edu\/samuel-montalvo-hernandez/);
  assert.match(html, /scholar\.google\.com\/citations\?user=whonnOUAAAAJ/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  assert.doesNotMatch(html, /github\.com\/Samuelmontalvo\/stanford-cpet-app/i);
  assert.doesNotMatch(html, /drive\.google\.com\/file\/d\/1TJOMkD6/);
});

test("ships site-specific metadata and accessible assets", async () => {
  const [layout, page, publicationData, styles] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/publications-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /metadataBase/);
  assert.match(layout, /\/og\.png/);
  assert.match(layout, /summary_large_image/);
  assert.match(page, /className="skip-link"/);
  assert.match(page, /alt="Portrait of Samuel Montalvo"/);
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
