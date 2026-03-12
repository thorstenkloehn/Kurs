// Antigravity Lernpfad Inhalte - Fokus Google Antigravity
const lernpfadData = [
  {
    id: 1,
    title: "Modul 1: Grundlagen & SDK",
    description: "Installation und Authentifizierung über das Google SDK.",
    topics: [
      "Download & Installation: macOS, Windows, Linux",
      "Authentifizierung: gcloud auth login",
      "Antigravity Initialisierung: antigravity init"
    ]
  },
  {
    id: 2,
    title: "Modul 2: Der Agent-Workspace",
    description: "Wie der Agent den Code versteht und konfiguriert wird.",
    topics: [
      "Workspace Fokus: antigravity focus",
      "Model Management: Auswahl zwischen Gemini 1.5 Pro & Flash",
      "Regel-Definitionen für Google Antigravity"
    ]
  },
  {
    id: 3,
    title: "Modul 3: Integrationen (MCP)",
    description: "Erweiterung der Agenten-Fähigkeiten.",
    topics: [
      "Einleitung in das Model Context Protocol",
      "Anbindung von Google Cloud Storage & BigQuery",
      "Verwendung von Cloud Logging Skills"
    ]
  },
  {
    id: 4,
    title: "Modul 4: Sicherheit & Enterprise",
    description: "Sichere Nutzung im Team.",
    topics: [
      "Sandboxing: Isolation des Code-Ausführungskontexts",
      "Strict Mode: Berechtigungen & Sicherheitsprotokolle",
      "Team-Orchestrierung im Google Cloud Dashboard"
    ]
  }
];

window.lernpfadData = lernpfadData;
