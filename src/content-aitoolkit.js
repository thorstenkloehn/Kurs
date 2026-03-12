// AI Toolkit for Visual Studio Code Content Definition
export const lernpfad = {
  title: "AI Toolkit Mastery Lernpfad",
  description: "Lerne, wie du lokale KI-Modelle (SLMs) direkt in VS Code ausführst, testest und in deine Projekte integrierst.",
  steps: [
    { id: 1, title: "AI Toolkit Installation & Setup", status: "completed" },
    { id: 2, title: "Model Catalog & Lokales Downloaden", status: "not-started" },
    { id: 3, title: "Model Playground: Prompts lokal testen", status: "not-started" },
    { id: 4, title: "Feintuning & Optimierung von Modellen", status: "not-started" },
    { id: 5, title: "Integration in Applikationen (REST API & SDKs)", status: "not-started" }
  ]
};

export const module = [
  {
    id: "m1",
    title: "Einstieg & Hardware",
    courses: [
      { id: "c101", title: "Installation der VS Code Extension", type: "course" },
      { id: "c102", title: "GPU-Beschleunigung einrichten (CUDA/DirectML)", type: "course" },
      { id: "c103", title: "Unterschiede: Cloud vs. Local LLMs", type: "course" }
    ]
  },
  {
    id: "m2",
    title: "Modell-Management",
    courses: [
      { id: "c201", title: "Einführung in Phi-3, Llama 3 & Mistral", type: "course" },
      { id: "c202", title: "Modelle finden im Hugging Face Hub", type: "course" },
      { id: "c203", title: "Quantisierung verstehen (Q4_K_M vs FP16)", type: "course" }
    ]
  },
  {
    id: "m3",
    title: "Entwicklung & Integration",
    courses: [
      { id: "c301", title: "Der lokale REST-Server des Toolkits", type: "course" },
      { id: "c302", title: "Nutzen von OpenAI-kompatiblen APIs", type: "course" },
      { id: "c303", title: "AI Toolkit in Python & C# nutzen", type: "course" }
    ]
  }
];

export const kurse = [
  { id: "k1", title: "SLM Deployment on Edge Devices", level: "Advanced" },
  { id: "k2", title: "Optimizing Prompts for Small Language Models", level: "Intermediate" }
];

export const codelabs = [
  { id: "cl1", title: "Chat-App mit lokalem Phi-3 Modell", topic: "Integration", duration: "25 min" },
  { id: "cl2", title: "Performance-Benchmarking verschiedener Modelle", topic: "Performance", duration: "20 min" },
  { id: "cl3", title: "RAG-System (Retrieval Augmented Generation) lokal", topic: "Architecture", duration: "50 min" }
];

export const tutorials = [
  { id: "t1", title: "Hardware-Anforderungen für lokale KI", category: "Hardware" },
  { id: "t2", title: "Sicherheit: KI ohne Internetverbindung", category: "Security" },
  { id: "t3", title: "Modell-Konvertierung nach ONNX", category: "Optimization" }
];

export const codewiki = [
  { term: "SLM (Small Language Model)", definition: "KI-Modelle mit weniger Parametern (z.B. Phi-3), die effizient auf lokaler Hardware laufen." },
  { term: "Quantisierung", definition: "Reduzierung der Genauigkeit von Modellgewichten (z.B. von 16-Bit auf 4-Bit), um Speicherplatz und Rechenpower zu sparen." },
  { term: "Hugging Face", definition: "Die größte Plattform für Open-Source KI-Modelle und Datensätze." },
  { term: "Local Inference", definition: "Das Ausführen von KI-Berechnungen direkt auf dem eigenen PC statt in der Cloud." },
  { term: "ONNX Runtime", definition: "Eine performante Engine von Microsoft zum Ausführen von optimierten KI-Modellen." },
  { term: "DirectML", definition: "Eine DirectX-basierte API zur Beschleunigung von KI auf Windows-Hardware." },
  { term: "Model Playground", definition: "Ein interaktives Interface im AI Toolkit zum schnellen Testen von Prompts und Modell-Parametern." }
];
