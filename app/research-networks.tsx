"use client";

import { useId, useState, type CSSProperties } from "react";
import "./research-networks.css";

type Locale = "en" | "es";
type NetworkKind = "research" | "workflow";

type NetworkNode = {
  id: string;
  label: string;
  category: string;
  description: string;
  href: string;
  action: string;
  x: number;
  y: number;
  hub?: boolean;
};

const researchNodes: Record<Locale, NetworkNode[]> = {
  en: [
    { id: "medicine", label: "Personalized exercise medicine", category: "Shared research question", description: "Understanding why people respond differently to exercise connects my work across molecular biology, clinical physiology, and human performance.", href: "#projects", action: "Explore the research areas", x: 50, y: 48, hub: true },
    { id: "omics", label: "MoTrPAC & multi-omics", category: "Molecular biology", description: "Molecular profiling across tissues helps connect exercise responses with clinical and physiological measurements in the MoTrPAC consortium.", href: "#publications", action: "Read selected research", x: 17, y: 18 },
    { id: "cpet", label: "Cardiopulmonary exercise testing", category: "Integrated physiology", description: "Gas-exchange measurements, ventilatory thresholds, and careful quality control describe how the heart, lungs, and muscles respond to exercise.", href: "https://github.com/Samuelmontalvo/VT_Web_Autodetection", action: "Explore threshold-detection code", x: 17, y: 48 },
    { id: "biomechanics", label: "Biomechanics & performance", category: "Human movement", description: "Force-time kinetics, jump assessment, and training studies connect movement mechanics with performance in athletes.", href: "https://github.com/Samuelmontalvo/Open_S-C_pasco", action: "Explore performance-testing code", x: 17, y: 78 },
    { id: "ecg", label: "ECG & sports cardiology", category: "Cardiovascular signals", description: "Digital electrocardiograms support research on athlete screening, repolarization, and sex-specific criteria for left ventricular hypertrophy.", href: "https://github.com/Samuelmontalvo/ECG_lvh", action: "Explore ECG research code", x: 83, y: 29 },
    { id: "clinical", label: "Clinical exercise research", category: "Health and recovery", description: "Studies in clinical populations examine exercise tolerance, recovery, and vascular responses, alongside digital approaches to physical activity.", href: "#projects", action: "Explore clinical research", x: 83, y: 68 },
  ],
  es: [
    { id: "medicine", label: "Medicina del ejercicio personalizada", category: "Una pregunta compartida", description: "Entender por qué cada persona responde de manera distinta al ejercicio conecta mi trabajo en biología molecular, fisiología clínica y rendimiento humano.", href: "#projects", action: "Explorar las áreas de investigación", x: 50, y: 48, hub: true },
    { id: "omics", label: "MoTrPAC y multiómica", category: "Biología molecular", description: "El perfil molecular de distintos tejidos ayuda a relacionar las respuestas al ejercicio con mediciones clínicas y fisiológicas en el consorcio MoTrPAC.", href: "#publications", action: "Consultar trabajos seleccionados", x: 17, y: 18 },
    { id: "cpet", label: "Prueba cardiopulmonar de ejercicio", category: "Fisiología integrada", description: "El intercambio gaseoso, los umbrales ventilatorios y el control de calidad describen cómo responden el corazón, los pulmones y los músculos al ejercicio.", href: "https://github.com/Samuelmontalvo/VT_Web_Autodetection", action: "Explorar el código de umbrales", x: 17, y: 48 },
    { id: "biomechanics", label: "Biomecánica y rendimiento", category: "Movimiento humano", description: "La cinética fuerza-tiempo, la evaluación del salto y los estudios de entrenamiento relacionan la mecánica del movimiento con el rendimiento deportivo.", href: "https://github.com/Samuelmontalvo/Open_S-C_pasco", action: "Explorar el código de rendimiento", x: 17, y: 78 },
    { id: "ecg", label: "ECG y cardiología deportiva", category: "Señales cardiovasculares", description: "Los electrocardiogramas digitales permiten investigar la detección en atletas, la repolarización y los criterios de hipertrofia ventricular izquierda específicos por sexo.", href: "https://github.com/Samuelmontalvo/ECG_lvh", action: "Explorar el código de ECG", x: 83, y: 29 },
    { id: "clinical", label: "Investigación clínica del ejercicio", category: "Salud y recuperación", description: "Los estudios en poblaciones clínicas examinan la tolerancia al ejercicio, la recuperación y las respuestas vasculares, junto con enfoques digitales para la actividad física.", href: "#projects", action: "Explorar la investigación clínica", x: 83, y: 68 },
  ],
};

const workflowNodes: Record<Locale, NetworkNode[]> = {
  en: [
    { id: "literature", label: "Literature", category: "Research input", description: "Published studies help define research questions, select methods, and place new findings in context.", href: "#publications", action: "Browse the publication record", x: 12, y: 20 },
    { id: "signals", label: "Exercise signals", category: "Research input", description: "Physiological and movement measurements include gas exchange, ECG, force-time data, and video-based assessments.", href: "#projects", action: "Explore measurement domains", x: 12, y: 50 },
    { id: "molecular", label: "Multi-omic data", category: "Research input", description: "Molecular datasets bring complementary views of the biological response to exercise across assays and tissues.", href: "#projects", action: "Explore MoTrPAC research", x: 12, y: 80 },
    { id: "harmonization", label: "Discovery & harmonization", category: "Research step", description: "Finding relevant datasets and aligning identifiers and metadata makes comparisons more interpretable. My public metabotyping workbench explores these tasks with agent-assisted workflows.", href: "https://github.com/Samuelmontalvo/metabotyping-agentic-workbench", action: "Open the metabotyping workbench", x: 38, y: 50, hub: true },
    { id: "analysis", label: "Analysis & quality control", category: "Research step", description: "Transparent processing, physiological checks, and reproducible analysis help turn measurements into results that can be examined and challenged.", href: "https://github.com/Samuelmontalvo/VT_Web_Autodetection", action: "Explore an analysis repository", x: 63, y: 27 },
    { id: "review", label: "Evidence review", category: "Research step", description: "Researcher review connects analytical results with the study design, relevant literature, and the limits of the available evidence.", href: "#publications", action: "Read the research", x: 63, y: 73 },
    { id: "outputs", label: "Papers, figures & apps", category: "Reproducible outputs", description: "Publications, documented code, and research applications communicate findings and make methods useful to other researchers and students.", href: "#tools", action: "Explore agents, apps, and code", x: 87, y: 50 },
  ],
  es: [
    { id: "literature", label: "Literatura", category: "Insumo de investigación", description: "Los estudios publicados ayudan a definir preguntas, seleccionar métodos y situar los nuevos hallazgos en su contexto.", href: "#publications", action: "Consultar el registro de publicaciones", x: 12, y: 20 },
    { id: "signals", label: "Señales del ejercicio", category: "Insumo de investigación", description: "Las mediciones fisiológicas y de movimiento incluyen intercambio gaseoso, ECG, datos fuerza-tiempo y evaluaciones por video.", href: "#projects", action: "Explorar las áreas de medición", x: 12, y: 50 },
    { id: "molecular", label: "Datos multiómicos", category: "Insumo de investigación", description: "Los datos moleculares aportan perspectivas complementarias de la respuesta biológica al ejercicio entre ensayos y tejidos.", href: "#projects", action: "Explorar la investigación MoTrPAC", x: 12, y: 80 },
    { id: "harmonization", label: "Descubrimiento y armonización", category: "Etapa de investigación", description: "Encontrar datos pertinentes y armonizar identificadores y metadatos facilita su comparación. Mi repositorio público de metabotyping explora estas tareas con flujos asistidos por agentes.", href: "https://github.com/Samuelmontalvo/metabotyping-agentic-workbench", action: "Abrir el repositorio de metabotyping", x: 38, y: 50, hub: true },
    { id: "analysis", label: "Análisis y control de calidad", category: "Etapa de investigación", description: "El procesamiento transparente, las comprobaciones fisiológicas y el análisis reproducible ayudan a obtener resultados que otras personas pueden examinar y cuestionar.", href: "https://github.com/Samuelmontalvo/VT_Web_Autodetection", action: "Explorar un repositorio de análisis", x: 63, y: 27 },
    { id: "review", label: "Revisión de evidencia", category: "Etapa de investigación", description: "La revisión del investigador relaciona los resultados con el diseño del estudio, la literatura y los límites de la evidencia disponible.", href: "#publications", action: "Consultar la investigación", x: 63, y: 73 },
    { id: "outputs", label: "Artículos, figuras y apps", category: "Resultados reproducibles", description: "Las publicaciones, el código documentado y las aplicaciones comunican hallazgos y acercan los métodos a investigadores y estudiantes.", href: "#tools", action: "Explorar agentes, apps y código", x: 87, y: 50 },
  ],
};

const copy = {
  en: {
    research: { eyebrow: "Research map", title: "Connected by one question.", body: "How do molecular, physiological, and movement responses shape the benefits of exercise? Select a field to explore its connection." },
    workflow: { eyebrow: "Workflow map", title: "From research questions to useful tools.", body: "A map of the inputs, research steps, and outputs that inform my work. Select a node to explore the methods and public projects." },
    hint: "Select a node to explore",
    diagram: "Interactive network diagram",
    selected: "Selected connection",
    inputs: "Inputs",
    steps: "Research steps",
    outputs: "Outputs",
    note: "This map describes research activities; individual projects use different combinations of these steps.",
  },
  es: {
    research: { eyebrow: "Mapa de investigación", title: "Una pregunta que conecta distintas áreas.", body: "¿Cómo influyen las respuestas moleculares, fisiológicas y del movimiento en los beneficios del ejercicio? Selecciona un área para explorar su conexión." },
    workflow: { eyebrow: "Mapa de trabajo", title: "De las preguntas a las herramientas.", body: "Un mapa de los insumos, las etapas y los resultados que orientan mi trabajo. Selecciona un nodo para explorar métodos y proyectos públicos." },
    hint: "Selecciona un nodo para explorar",
    diagram: "Diagrama interactivo de conexiones",
    selected: "Conexión seleccionada",
    inputs: "Insumos",
    steps: "Etapas de investigación",
    outputs: "Resultados",
    note: "El mapa describe actividades de investigación; cada proyecto combina estas etapas de forma distinta.",
  },
};

const edges = {
  research: [
    { from: "medicine", to: "omics", path: "M 50 48 C 38 48 30 18 17 18" },
    { from: "medicine", to: "cpet", path: "M 50 48 H 17" },
    { from: "medicine", to: "biomechanics", path: "M 50 48 C 38 48 30 78 17 78" },
    { from: "medicine", to: "ecg", path: "M 50 48 C 65 48 68 29 83 29" },
    { from: "medicine", to: "clinical", path: "M 50 48 C 65 48 68 68 83 68" },
  ],
  workflow: [
    { from: "literature", to: "harmonization", path: "M 12 20 C 26 20 24 50 38 50" },
    { from: "signals", to: "harmonization", path: "M 12 50 H 38" },
    { from: "molecular", to: "harmonization", path: "M 12 80 C 26 80 24 50 38 50" },
    { from: "harmonization", to: "analysis", path: "M 38 50 C 50 50 51 27 63 27" },
    { from: "analysis", to: "review", path: "M 63 27 V 73" },
    { from: "review", to: "outputs", path: "M 63 73 C 77 73 73 50 87 50" },
  ],
};

export function ResearchNetworks({ locale, kind }: { locale: Locale; kind: NetworkKind }) {
  const id = useId();
  const nodes = kind === "research" ? researchNodes[locale] : workflowNodes[locale];
  const [selectedId, setSelectedId] = useState(kind === "research" ? "medicine" : "harmonization");
  const selected = nodes.find((node) => node.id === selectedId) ?? nodes.find((node) => node.hub)!;
  const text = copy[locale];
  const heading = text[kind];
  const isExternal = selected.href.startsWith("https://");

  return (
    <section className={`rm-network rm-network--${kind}`} aria-labelledby={`${id}-title`}>
      <div className="rm-heading">
        <span className="rm-eyebrow">{heading.eyebrow}</span>
        <h3 id={`${id}-title`}>{heading.title}</h3>
        <p>{heading.body}</p>
      </div>
      <div className="rm-canvas">
        <div className="rm-canvas-topline">
          <span className="rm-map-key"><span aria-hidden="true" />{text.hint}</span>
          <span className="rm-map-index" aria-hidden="true">{kind === "research" ? "01" : "02"}</span>
        </div>
        {kind === "workflow" && (
          <div className="rm-stage-labels" aria-hidden="true">
            <span>{text.inputs}</span><span>{text.steps}</span><span>{text.outputs}</span>
          </div>
        )}
        <div className={`rm-diagram rm-diagram--${kind}`} role="group" aria-label={text.diagram}>
          <svg className="rm-connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            {edges[kind].map((edge) => (
              <path key={`${edge.from}-${edge.to}`} d={edge.path} className={edge.from === selected.id || edge.to === selected.id ? "rm-edge rm-edge--active" : "rm-edge"} />
            ))}
          </svg>
          {nodes.map((node) => (
            <button
              key={node.id}
              type="button"
              className={`rm-node${node.hub ? " rm-node--hub" : ""}${selected.id === node.id ? " rm-node--selected" : ""} rm-node--${node.id}`}
              style={{ "--node-x": `${node.x}%`, "--node-y": `${node.y}%` } as CSSProperties}
              onClick={() => setSelectedId(node.id)}
              aria-pressed={selected.id === node.id}
              aria-controls={`${id}-details`}
            >
              <span className="rm-node-dot" aria-hidden="true" />
              <span>{node.label}</span>
            </button>
          ))}
        </div>
        <div id={`${id}-details`} className="rm-detail" aria-live="polite" aria-atomic="true">
          <div className="rm-detail-heading">
            <span className="rm-eyebrow">{selected.category}</span>
            <h4>{selected.label}</h4>
          </div>
          <div className="rm-detail-copy">
            <p>{selected.description}</p>
            <a href={selected.href} {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}>
              {selected.action}<span aria-hidden="true">{isExternal ? "↗" : "→"}</span>
            </a>
          </div>
        </div>
      </div>
      {kind === "workflow" && <p className="rm-footnote">{text.note}</p>}
    </section>
  );
}
