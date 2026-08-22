import { readFileSync, writeFileSync } from "node:fs";

const [cvPath, outputPath] = process.argv.slice(2);

if (!cvPath || !outputPath) {
  throw new Error(
    "Usage: node scripts/generate-publications-data.mjs <cv-markdown> <output-file>",
  );
}

const cv = readFileSync(cvPath, "utf8");
const publicationSection = cv
  .split("## Publications\n")[1]
  ?.split("\n## Teaching")[0];

if (!publicationSection) {
  throw new Error("The CV does not contain a Publications section.");
}

const rawGroups = {
  peerReviewed: [],
  preprints: [],
  abstracts: [],
};

let activeGroup = "";

for (const line of publicationSection.split("\n")) {
  if (line === "### Peer-Reviewed Publications") activeGroup = "peerReviewed";
  if (line === "### Preprints") activeGroup = "preprints";
  if (line === "### Published Abstracts") activeGroup = "abstracts";

  if (!/^\d+\. /.test(line) || !activeGroup) continue;

  let citation = line.replace(/^\d+\. /, "").replaceAll("**", "");
  const linkedSource = citation.match(/\s+(https?:\/\/\S+)$/);
  const sourceHref = linkedSource?.[1] ?? "";

  if (linkedSource?.index !== undefined) {
    citation = citation.slice(0, linkedSource.index).trim();
  }

  rawGroups[activeGroup].push({
    year: citation.match(/\((\d{4})\)/)?.[1] ?? "",
    citation,
    sourceHref,
  });
}

rawGroups.peerReviewed.unshift(
  {
    year: "2026",
    citation:
      "Edwards, A., Rowlett, M., Jerazano Mora, J. M., Schoenfeld, B. J., & Montalvo, S. (2026). Sleep: The Overlooked Pillar of Muscle Hypertrophy—A Critical Review of Mechanistic and Observational Evidence. Strength & Conditioning Journal. Advance online publication.",
    sourceHref: "https://doi.org/10.1519/SSC.0000000000001000",
  },
  {
    year: "2026",
    citation:
      "Cabarkapa, D., Yang, Y., Montalvo, S., Ríos-Gallardo, P. T., Camacho, A. A., & Munce, T. A. (2026). Relationships Between Isometric Shoulder Strength and Three-Point Shooting Accuracy in Male Basketball Players. Journal of Strength and Conditioning Research. Advance online publication.",
    sourceHref: "https://doi.org/10.1519/JSC.0000000000005616",
  },
);

const pubmedMatches = [
  ["Relationships Between Isometric Shoulder Strength", "42580351"],
  ["Design and rationale of the My Heart Counts", "42395096"],
  ["Longitudinal Changes in Countermovement Jump", "42155075"],
  ["Validity and Reliability of an AI-Based Jump Height App", "41875017"],
  ["Profiling Fireball Extreme Challenge", "41609441"],
  ["Race- and Sex-Associated Electrocardiographic Repolarization", "41351976"],
  ["Sex-specific electrocardiographic criteria", "40358569"],
  ["Endurance Training Enhances Sex-Specific", "40859825"],
  ["Resisted Sprint Training Improves Overground Sprint", "40837520"],
  ["Cardiopulmonary Recovery After Maximal Exercise", "40565934"],
  ["Manual resistance training and resistance training elicit", "40325759"],
  ["effects of eccentric cycling on vascular reactivity", "40177355"],
  ["Proposed enhanced recommendations", "40081638"],
  ["Effects of Different Stretching Modalities", "39446677"],
  ["Comparative kinematic analysis", "39320031"],
  ["Effects of Different Eccentric Cycling Intensities", "39302246"],
  ["outlier percentiles from norms", "39278304"],
  ["Measuring Vertical Jump Height With Artificial Intelligence", "38953840"],
  ["Carotid Arterial Compliance", "38893027"],
  ["Impact of an 8-Week Resisted Sprint", "38620058"],
  ["Digitized Electrocardiography Measurements", "38407231"],
  ["Should ECG criteria for Low QRS voltage", "38342392"],
  ["Assisted Six-Minute Cycling Test", "38137651"],
  ["Effects of manual resistance versus weight resistance", "37949578"],
  ["Commercial Smart Watches and Heart Rate Monitors", "36862131"],
  ["A Comparison of Morphological, Jump, and Sprint", "38288257"],
  ["Near Infrared Spectroscopy is not a Surrogate", "36582307"],
  ["Differences in Blood Flow Patterns and Endothelial", "35620608"],
  ["Association and Predictive Ability of Jump Performance", "34818989"],
  ["Effects of Augmented Eccentric Load Bench Press", "34027918"],
  ["Common Vertical Jump and Reactive Strength Index", "33629975"],
  ["Physical fitness in older adults", "33714507"],
  ["Sprint Training on a Treadmill vs. Overground", "30741862"],
  ["effect of different stretching protocols", "31933341"],
  ["Blood Biochemical Responses to Acute Exercise", "41835387"],
  ["Integrative Multi-omics Analysis of the Human Skeletal Muscle", "41867825"],
  ["Molecular Transducers of Physical Activity Consortium (MoTrPAC): Initial Insights", "41867848"],
  ["Multi-Omic, Multi-Tissue Responses to Acute Exercise", "42164870"],
];

const directSourceOverrides = [
  [
    "Advancing Strength and Conditioning Practices",
    "https://doi.org/10.1519/SSC.0000000000000922",
  ],
  [
    "Countermovement jump performance in Malaysian",
    "https://doi.org/10.18002/rama.v20i2.2514",
  ],
  [
    "Changes in vertical jump performance and body composition",
    "https://doi.org/10.14198/jhse.2023.181.18",
  ],
  [
    "Association Between the Modified Functional Movement Screen",
    "https://doi.org/10.1097/TGR.0000000000000306",
  ],
  [
    "Heart rate percentage as a method",
    "https://doi.org/10.7752/jpes.2021.05363",
  ],
  [
    "Association and predictive ability of vertical countermovement",
    "https://doi.org/10.7752/jpes.2020.s3280",
  ],
  [
    "Biomechanical Characteristics of the Carotid Artery",
    "https://doi.org/10.1249/01.mss.0000980164.85238.7a",
  ],
  [
    "The Effects of Overground and Treadmill Sprint Training on Body Composition",
    "https://doi.org/10.1519/JSC.0000000000002990",
  ],
  [
    "Effects of Treadmill and Overground Sprint Training Modes",
    "https://doi.org/10.1519/JSC.0000000000001586",
  ],
];

function resolvedSource(publication, groupKey) {
  const pubmed =
    groupKey === "abstracts"
      ? undefined
      : pubmedMatches.find(([needle]) =>
          publication.citation.toLowerCase().includes(needle.toLowerCase()),
        );

  if (pubmed) {
    return {
      href: `https://pubmed.ncbi.nlm.nih.gov/${pubmed[1]}/`,
      label: "PubMed",
    };
  }

  const override = directSourceOverrides.find(([needle]) =>
    publication.citation.toLowerCase().includes(needle.toLowerCase()),
  );
  const href = override?.[1] ?? publication.sourceHref;

  if (href) {
    return {
      href,
      label: href.includes("doi.org") ? "DOI" : "Repository",
    };
  }

  return {
    href: `https://scholar.google.com/scholar?q=${encodeURIComponent(publication.citation)}`,
    label: "Google Scholar",
  };
}

const groupMetadata = [
  ["peer-reviewed", "Peer-reviewed publications", "peerReviewed", true],
  ["preprints", "Preprints", "preprints", true],
  ["abstracts", "Published abstracts & proceedings", "abstracts", false],
];

const publicationGroups = groupMetadata.map(
  ([id, label, dataKey, initiallyOpen]) => ({
    id,
    label,
    initiallyOpen,
    items: rawGroups[dataKey].map((publication, index) => ({
      id: `${id}-${index + 1}`,
      year: publication.year,
      citation: publication.citation,
      ...resolvedSource(publication, dataKey),
    })),
  }),
);

const banner = `// Generated from the reconciled academic CV.\n// Refresh with: node scripts/generate-publications-data.mjs <cv-markdown> app/publications-data.ts\n\n`;
const output = `${banner}export const publicationGroups = ${JSON.stringify(publicationGroups, null, 2)} as const;\n\nexport const totalPublicationCount = publicationGroups.reduce(\n  (total, group) => total + group.items.length,\n  0,\n);\n`;

writeFileSync(outputPath, output);

console.log(
  `Generated ${publicationGroups.reduce((sum, group) => sum + group.items.length, 0)} publication records.`,
);
