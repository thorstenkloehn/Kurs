// Antigravity CLI Reference (ERWEITERT)
const cliData = [
  { group: "General", items: [
    { command: "antigravity help", desc: "Hilfe anzeigen" },
    { command: "antigravity version", desc: "Version anzeigen" },
    { command: "antigravity update", desc: "Tool auf neueste Version bringen" }
  ]},
  { group: "Setup & Auth", items: [
    { command: "antigravity init", desc: "Initialisiert Workspace im aktuellen Verzeichnis" },
    { command: "antigravity auth login", desc: "Authentifizierung über Google Account" },
    { command: "antigravity auth logout", desc: "Abmelden" },
    { command: "antigravity config set model [model-id]", desc: "Standardmodell festlegen" }
  ]},
  { group: "Agent Interaction", items: [
    { command: "antigravity chat [prompt]", desc: "Einen Chat direkt aus dem Terminal starten" },
    { command: "antigravity focus [path]", desc: "Bestimmtes Verzeichnis in den Fokus setzen" },
    { command: "antigravity review", desc: "Aktuelle Änderungen im Projekt analysieren" },
    { command: "antigravity status", desc: "Status des Agenten und des Kontextes anzeigen" }
  ]},
  { group: "Advanced Tools", items: [
    { command: "antigravity mcp list", desc: "Alle aktiven MCP Server anzeigen" },
    { command: "antigravity mcp add [url]", desc: "Neuen MCP Endpunkt hinzufügen" },
    { command: "antigravity skills list", desc: "Alle verfügbaren Skills auflisten" },
    { command: "antigravity logs", desc: "Logs für Debugging einsehen" }
  ]}
];
window.cliData = cliData;
