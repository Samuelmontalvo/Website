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
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  assert.doesNotMatch(html, /github\.com\/Samuelmontalvo\/stanford-cpet-app/i);
});

test("ships site-specific metadata and accessible assets", async () => {
  const [layout, page, styles] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /metadataBase/);
  assert.match(layout, /\/og\.png/);
  assert.match(layout, /summary_large_image/);
  assert.match(page, /className="skip-link"/);
  assert.match(page, /alt="Portrait of Samuel Montalvo"/);
  assert.match(styles, /prefers-reduced-motion:\s*reduce/);

  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../public/samuel-montalvo.jpg", import.meta.url));
  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
});
