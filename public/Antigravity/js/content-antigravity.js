// Antigravity Content Definition - Google Spezifisch (ERWEITERT)
const antigravityContent = {
  lernpfad: {
    title: "Google Antigravity Lernpfad",
    description: "Vom ersten Setup bis zur fortgeschrittenen Agent-Orchestrierung in der Google Cloud.",
    steps: [
      { id: 1, title: "Google Cloud & SDK Setup", status: "completed" },
      { id: 2, title: "Antigravity Agent Konzepte", status: "not-started" },
      { id: 3, title: "Erweiterte Tools & Browser-Agent", status: "not-started" },
      { id: 4, title: "MCP & Externe Integrationen", status: "not-started" },
      { id: 5, title: "Sicherheit, Sandboxing & Enterprise", status: "not-started" }
    ]
  },
  module: [
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
    },
    {
      id: "m4",
      title: "Erweiterte Tools",
      courses: [
        { id: "c401", title: "Browser Subagent: Web-Recherche & Testing", type: "course" },
        { id: "c402", title: "Artifacts: Implementation Plans & Walkthroughs", type: "course" },
        { id: "c403", title: "Source Control & Review-Prozesse", type: "course" }
      ]
    }
  ],
  codelabs: [
    { id: "cl1", title: "Workspace Setup", topic: "Google Antigravity Init", duration: "10 min" },
    { id: "cl2", title: "Automatisierte Code-Reviews", topic: "Agent Skills", duration: "25 min" },
    { id: "cl3", title: "Browser-Recording & Automation", topic: "Testing", duration: "40 min" },
    { id: "cl4", title: "Eigener MCP Server mit Go/Python", topic: "Integration", duration: "60 min" }
  ],
  tutorials: [
    { id: "t1", title: "Installation unter Windows/macOS", category: "Installation" },
    { id: "t2", title: "MCP Server in Google Cloud nutzen", category: "Advanced" },
    { id: "t3", title: "Sicherheits-Checkups & Strict Mode", category: "Security" },
    { id: "t4", title: "Debugging von Agenten-Output", category: "Quality" }
  ]
};

window.antigravityContent = antigravityContent;
