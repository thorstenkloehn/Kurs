// GitHub Copilot Content Definition
export const lernpfad = {
  title: "GitHub Copilot Lernpfad",
  description: "Meistere KI-gestützte Entwicklung von den Basics bis zu fortgeschrittenen Extensions und Agents.",
  steps: [
    { id: 1, title: "Copilot in VS Code einrichten", status: "completed" },
    { id: 2, title: "Effektives Prompting & Context", status: "not-started" },
    { id: 3, title: "Copilot Chat & Slash Commands", status: "not-started" },
    { id: 4, title: "Unit Tests & Refactoring mit KI", status: "not-started" },
    { id: 5, title: "Copilot Extensions & Custom Agents", status: "not-started" }
  ]
};

export const module = [
  {
    id: "m1",
    title: "Einstieg & Konfiguration",
    courses: [
      { id: "c101", title: "Installation & Authentifizierung", type: "course" },
      { id: "c102", title: "Die wichtigsten Shortcuts im Editor", type: "course" },
      { id: "c103", title: "Datenschutz & Telemetrie-Einstellungen", type: "course" }
    ]
  },
  {
    id: "m2",
    title: "Copilot Chat & Interaktion",
    courses: [
      { id: "c201", title: "Slash Commands: /fix, /tests, /explain", type: "course" },
      { id: "c202", title: "@workspace: Projektweites Verständnis", type: "course" },
      { id: "c203", title: "Inline Chat vs. Sidepanel", type: "course" }
    ]
  },
  {
    id: "m3",
    title: "Fortgeschrittene Workflows",
    courses: [
      { id: "c301", title: "Automatisierte Dokumentation", type: "course" },
      { id: "c302", title: "Legacy Code Refactoring", type: "course" },
      { id: "c303", title: "Copilot in der CLI nutzen", type: "course" }
    ]
  }
];

export const kurse = [
  { id: "k1", title: "Copilot for Power Users", level: "Intermediate" },
  { id: "k2", title: "AI-Driven Architecture", level: "Advanced" }
];

export const codelabs = [
  { id: "cl1", title: "Test-Driven Development mit Copilot", topic: "Testing", duration: "30 min" },
  { id: "cl2", title: "Regex & Algorithmen generieren", topic: "Logic", duration: "15 min" },
  { id: "cl3", title: "Migration von JS zu TypeScript", topic: "Migration", duration: "45 min" }
];

export const tutorials = [
  { id: "t1", title: "Copilot mit JetBrains IDEs nutzen", category: "IDE" },
  { id: "t2", title: "GitHub Copilot Enterprise Features", category: "Enterprise" },
  { id: "t3", title: "Custom Instructions für Copilot", category: "Customization" }
];

export const codewiki = [
  { term: "Copilot Chat", definition: "Ein interaktives Chat-Interface direkt in der IDE für komplexe Fragen und Refactorings." },
  { term: "Ghost Text", definition: "Die hellgrauen Code-Vorschläge, die Copilot während des Tippens direkt im Editor anzeigt." },
  { term: "Slash Commands", definition: "Kurzbefehle wie /fix oder /explain, um gezielte KI-Aktionen im Chat auszulösen." },
  { term: "@workspace", definition: "Ein Agent im Chat, der Zugriff auf das gesamte Projekt hat, um kontextrelevante Antworten zu geben." },
  { term: "@terminal", definition: "Ein Agent, der hilft, passende Shell-Commands für das aktuelle Betriebssystem zu finden." },
  { term: "Prompt Engineering", definition: "Die Kunst, Anweisungen so zu formulieren, dass die KI das präziseste Ergebnis liefert." },
  { term: "Context Window", definition: "Die Menge an Code und Informationen, die Copilot gleichzeitig 'betrachten' kann." }
];
