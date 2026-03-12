// Antigravity Content Definition
export const lernpfad = {
  title: "Google Antigravity Lernpfad",
  description: "Vom ersten Setup bis zur fortgeschrittenen Agent-Orchestrierung in der Google Cloud.",
  steps: [
    { id: 1, title: "Google Cloud & SDK Setup", status: "completed" },
    { id: 2, title: "Antigravity Agent Konzepte", status: "not-started" },
    { id: 3, title: "Erweiterte Tools & Browser-Agent", status: "not-started" },
    { id: 4, title: "MCP & Externe Integrationen", status: "not-started" },
    { id: 5, title: "Sicherheit, Sandboxing & Enterprise", status: "not-started" }
  ]
};

export const module = [
  {
    id: "m1",
    title: "Foundations & Setup",
    courses: [
      { id: "c101", title: "Installation des Google Cloud SDK", type: "course" },
      { id: "c102", title: "Navigation im Agent Manager", type: "course" },
      { id: "c103", title: "Authentifizierung & Rollen (IAM)", type: "course" }
    ]
  },
  {
    id: "m2",
    title: "Agent Kernkonzepte",
    courses: [
      { id: "c201", title: "Agent Konfiguration: Vertex AI vs Gemini", type: "course" },
      { id: "c202", title: "Workspaces & Agent-Fokus", type: "course" },
      { id: "c203", title: "Agenten-Modi: Architekt vs. Implementierer", type: "course" }
    ]
  },
  {
    id: "m3",
    title: "Automatisierung & Workflows",
    courses: [
      { id: "c301", title: "Eigene Rulesets definieren", type: "course" },
      { id: "c302", title: "Workflow-Orchestrierung mit Task Groups", type: "course" },
      { id: "c303", title: "Batch-Processing mit Antigravity CLI", type: "course" }
    ]
  }
];

export const kurse = [
  { id: "k1", title: "Antigravity Fundamentals", level: "Beginner" },
  { id: "k2", title: "Advanced Orchestration", level: "Advanced" }
];

export const codelabs = [
  { id: "cl1", title: "Workspace Setup", topic: "Google Antigravity Init", duration: "10 min" },
  { id: "cl2", title: "Automatisierte Code-Reviews", topic: "Agent Skills", duration: "25 min" },
  { id: "cl3", title: "Browser-Recording & Automation", topic: "Testing", duration: "40 min" },
  { id: "cl4", title: "Eigener MCP Server mit Go/Python", topic: "Integration", duration: "60 min" }
];

export const tutorials = [
  { id: "t1", title: "Installation unter Windows/macOS", category: "Installation" },
  { id: "t2", title: "MCP Server in Google Cloud nutzen", category: "Advanced" },
  { id: "t3", title: "Sicherheits-Checkups & Strict Mode", category: "Security" },
  { id: "t4", title: "Debugging von Agenten-Output", category: "Quality" }
];

export const codewiki = [
  { term: "Agent", definition: "Die Kern-KI-Entität, die Aufgaben im Workspace plant und ausführt." },
  { term: "Agent Manager", definition: "Die grafische Oberfläche zur Verwaltung mehrerer Workspaces und Agenten-Instanzen." },
  { term: "Artifacts", definition: "Spezielle Dokumententypen wie Implementierungspläne oder Walkthroughs, die vom Agenten generiert werden." },
  { term: "Browser Subagent", definition: "Ein spezialisierter Agent, der Webbrowsing, Dokumentationsrecherche und UI-Tests durchführen kann." },
  { term: "Context", definition: "Die Menge an Dateien und Informationen, die der Agent aktuell 'sieht' und für seine Entscheidungen nutzt." },
  { term: "Focus", definition: "Der Prozess, dem Agenten mitzuteilen, welche Teile des Code-Repositories für die aktuelle Aufgabe relevant sind." },
  { term: "MCP (Model Context Protocol)", definition: "Ein offener Standard, der es Agenten ermöglicht, sicher auf externe Datenquellen und Tools zuzugreifen." },
  { term: "Rules", definition: "Benutzerdefinierte Anweisungen (oft in einer .rules-Datei), die das Verhalten und den Coding-Stil des Agenten steuern." },
  { term: "Sandboxing", definition: "Die Ausführung von Code in einer isolierten Umgebung zum Schutz des Host-Systems." },
  { term: "Strict Mode", definition: "Ein Sicherheitsmodus, der explizite Berechtigungen für jede Dateimanipulation oder Shell-Aktion erfordert." },
  { term: "Task Group", definition: "Eine logische Gruppierung verwandter Aufgaben innerhalb eines Workspaces." }
];
