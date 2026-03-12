// Google AI Studio Content Definition
export const lernpfad = {
  title: "Google AI Studio Lernpfad",
  description: "Meistere das Prototyping-Tool für Gemini. Lerne Prompting, System-Instructions und wie du API-Keys für deine Apps generierst.",
  steps: [
    { id: 1, title: "Einführung in das AI Studio Interface", status: "completed" },
    { id: 2, title: "Chat-Prompts vs. Structured-Prompts", status: "not-started" },
    { id: 3, title: "System Instructions & Temperature", status: "not-started" },
    { id: 4, title: "Multimodale Prompts (Bilder & Videos)", status: "not-started" },
    { id: 5, title: "API-Integration & Code-Export", status: "not-started" }
  ]
};

export const module = [
  {
    id: "m1",
    title: "Prototyping Basics",
    courses: [
      { id: "c101", title: "Erste Schritte mit Gemini 1.5 Pro", type: "course" },
      { id: "c102", title: "Free Tier vs. Paid Tier Limits", type: "course" },
      { id: "c103", title: "API Keys sicher verwalten", type: "course" }
    ]
  },
  {
    id: "m2",
    title: "Advanced Prompting",
    courses: [
      { id: "c201", title: "Few-Shot Prompting Techniken", type: "course" },
      { id: "c202", title: "JSON-Output erzwingen (Schema)", type: "course" },
      { id: "c203", title: "Sicherheitseinstellungen (Safety Settings)", type: "course" }
    ]
  },
  {
    id: "m3",
    title: "Integration",
    courses: [
      { id: "c301", title: "Export nach Python & Node.js", type: "course" },
      { id: "c302", title: "Google AI SDK Overview", type: "course" },
      { id: "c303", title: "Deployment-Strategien für Gemini", type: "course" }
    ]
  }
];

export const kurse = [
  { id: "k1", title: "Gemini for Developers", level: "Beginner" },
  { id: "k2", title: "Building Multimodal Apps", level: "Advanced" }
];

export const codelabs = [
  { id: "cl1", title: "Eigene Rezepte-KI mit Bildern", topic: "Multimodal", duration: "20 min" },
  { id: "cl2", title: "Automatisierte Code-Reviews via API", topic: "Automation", duration: "30 min" },
  { id: "cl3", title: "JSON-Parser für unstrukturierte Daten", topic: "Data", duration: "15 min" }
];

export const tutorials = [
  { id: "t1", title: "Verbindung zu Google Colab", category: "Data Science" },
  { id: "t2", title: "Tuned Models: Eigene Modelle trainieren", category: "Advanced" },
  { id: "t3", title: "Vergleich: AI Studio vs. Vertex AI", category: "Architecture" }
];

export const codewiki = [
  { term: "Google AI Studio", definition: "Ein webbasiertes Tool zum schnellen Testen und Entwickeln von Prompts für die Gemini-Modellfamilie." },
  { term: "System Instructions", definition: "Anweisungen, die das grundlegende Verhalten und die Persönlichkeit der KI über den gesamten Chat hinweg festlegen." },
  { term: "Temperature", definition: "Ein Parameter, der die Kreativität bzw. Zufälligkeit der KI-Antworten steuert (0 = deterministisch, 1 = kreativ)." },
  { term: "Tokens", definition: "Die Grundeinheiten, in denen KI-Modelle Text verarbeiten. Gemini hat ein extrem großes Kontextfenster von bis zu 2 Mio. Tokens." },
  { term: "Multimodalität", definition: "Die Fähigkeit eines Modells, verschiedene Arten von Daten wie Text, Bilder, Audio und Video gleichzeitig zu verarbeiten." },
  { term: "Top-P / Top-K", definition: "Sampling-Parameter, die beeinflussen, aus welcher Menge an wahrscheinlichen Wörtern die KI wählt." },
  { term: "Safety Settings", definition: "Konfigurierbare Filter, um potenziell schädliche oder unangemessene Inhalte zu blockieren." }
];
