"use client";

import { useEffect, useRef, useState } from "react";

type PathwayKey = "metabolism" | "movement" | "systems";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  kind: "input" | "measure" | "core" | "outcome";
};

const nodes: Node[] = [
  { id: "diet", label: "Diet", x: 8, y: 18, kind: "input" },
  { id: "training", label: "Training dose", x: 8, y: 50, kind: "input" },
  { id: "wearables", label: "Wearables", x: 8, y: 82, kind: "input" },
  { id: "metabolome", label: "Metabolome", x: 34, y: 18, kind: "measure" },
  { id: "kinematics", label: "Kinematics", x: 34, y: 50, kind: "measure" },
  { id: "cpet", label: "CPET + ECG", x: 34, y: 82, kind: "measure" },
  { id: "medicine", label: "Personalized\nexercise medicine", x: 61, y: 50, kind: "core" },
  { id: "metabolic", label: "Metabolic response", x: 88, y: 18, kind: "outcome" },
  { id: "power", label: "Neuromuscular power", x: 88, y: 50, kind: "outcome" },
  { id: "fitness", label: "Cardiorespiratory fitness", x: 88, y: 82, kind: "outcome" },
];

const pathways: Record<
  PathwayKey,
  {
    eyebrow: string;
    label: string;
    summary: string;
    chain: string[];
    color: string;
  }
> = {
  metabolism: {
    eyebrow: "MetaboDiet",
    label: "Nutrition + multi-omics",
    summary:
      "Connect dietary patterns with clinical phenotypes and molecular responses to find biologically meaningful differences between people.",
    chain: ["diet", "metabolome", "medicine", "metabolic"],
    color: "#d06b3f",
  },
  movement: {
    eyebrow: "JumpLab",
    label: "Movement + performance",
    summary:
      "Translate accessible movement testing into quality-controlled measures of neuromuscular performance and training response.",
    chain: ["training", "kinematics", "medicine", "power"],
    color: "#8d9d37",
  },
  systems: {
    eyebrow: "OpenCPET",
    label: "Physiology + digital health",
    summary:
      "Unify physiological signals and exercise-test data to characterize cardiovascular fitness, recovery, and adaptation.",
    chain: ["wearables", "cpet", "medicine", "fitness"],
    color: "#2f7f7a",
  },
};

const allEdges: [string, string][] = [
  ["diet", "metabolome"],
  ["training", "kinematics"],
  ["wearables", "cpet"],
  ["metabolome", "medicine"],
  ["kinematics", "medicine"],
  ["cpet", "medicine"],
  ["medicine", "metabolic"],
  ["medicine", "power"],
  ["medicine", "fitness"],
  ["diet", "kinematics"],
  ["training", "cpet"],
  ["wearables", "kinematics"],
];

const nodeById = Object.fromEntries(nodes.map((node) => [node.id, node]));

function edgeKey(a: string, b: string) {
  return `${a}:${b}`;
}

export function ResearchNetwork() {
  const [active, setActive] = useState<PathwayKey>("metabolism");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const selected = pathways[active];

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let animationFrame = 0;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const activeEdges = new Set(
      selected.chain
        .slice(0, -1)
        .map((nodeId, index) => edgeKey(nodeId, selected.chain[index + 1])),
    );

    const pointFor = (id: string, width: number, height: number) => {
      const node = nodeById[id];
      return { x: (node.x / 100) * width, y: (node.y / 100) * height };
    };

    const draw = () => {
      const bounds = stage.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = bounds.width;
      const height = bounds.height;

      if (canvas.width !== Math.round(width * dpr)) {
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      }

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);

      for (let x = 18; x < width; x += 34) {
        for (let y = 18; y < height; y += 34) {
          const wave = 0.08 + 0.05 * Math.sin(x * 0.018 + y * 0.014 + frame * 0.012);
          context.fillStyle = `rgba(26, 54, 51, ${wave})`;
          context.beginPath();
          context.arc(x, y, 1.1, 0, Math.PI * 2);
          context.fill();
        }
      }

      for (const [from, to] of allEdges) {
        const a = pointFor(from, width, height);
        const b = pointFor(to, width, height);
        const isActive = activeEdges.has(edgeKey(from, to));
        const midX = a.x + (b.x - a.x) * 0.52;

        context.beginPath();
        context.moveTo(a.x, a.y);
        context.bezierCurveTo(midX, a.y, midX, b.y, b.x, b.y);
        context.strokeStyle = isActive ? selected.color : "rgba(24, 52, 48, 0.13)";
        context.lineWidth = isActive ? 2.2 : 1;
        context.stroke();

        if (isActive) {
          const progress = reducedMotion ? 0.6 : (frame * 0.005 + from.length * 0.07) % 1;
          const inverse = 1 - progress;
          const px =
            inverse ** 3 * a.x +
            3 * inverse ** 2 * progress * midX +
            3 * inverse * progress ** 2 * midX +
            progress ** 3 * b.x;
          const py =
            inverse ** 3 * a.y +
            3 * inverse ** 2 * progress * a.y +
            3 * inverse * progress ** 2 * b.y +
            progress ** 3 * b.y;

          const glow = context.createRadialGradient(px, py, 0, px, py, 10);
          glow.addColorStop(0, selected.color);
          glow.addColorStop(1, "transparent");
          context.fillStyle = glow;
          context.beginPath();
          context.arc(px, py, 10, 0, Math.PI * 2);
          context.fill();
        }
      }

      frame += 1;
      if (!reducedMotion) animationFrame = window.requestAnimationFrame(draw);
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(stage);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [selected]);

  const activeNodes = new Set(selected.chain);

  return (
    <div className="network-module">
      <div className="network-tabs" role="tablist" aria-label="Research pathways">
        {(Object.keys(pathways) as PathwayKey[]).map((key) => (
          <button
            className={key === active ? "network-tab active" : "network-tab"}
            key={key}
            onClick={() => setActive(key)}
            role="tab"
            aria-selected={key === active}
            style={{ "--path-color": pathways[key].color } as React.CSSProperties}
          >
            <span>{pathways[key].eyebrow}</span>
            {pathways[key].label}
          </button>
        ))}
      </div>

      <div className="network-desktop">
        <div className="network-stage" ref={stageRef}>
          <canvas ref={canvasRef} aria-hidden="true" />
          {nodes.map((node) => (
            <div
              className={`network-node node-${node.kind} ${
                activeNodes.has(node.id) ? "active" : ""
              }`}
              key={node.id}
              style={
                {
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  "--path-color": selected.color,
                } as React.CSSProperties
              }
            >
              {node.label.split("\n").map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          ))}
          <div className="network-caption" aria-live="polite">
            <span>{selected.eyebrow} pathway</span>
            <p>{selected.summary}</p>
          </div>
        </div>
      </div>

      <div className="network-mobile" aria-live="polite">
        <p>{selected.summary}</p>
        <ol>
          {selected.chain.map((id, index) => (
            <li key={id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {nodeById[id].label.replace("\n", " ")}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
