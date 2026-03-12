const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editor-hNmHkTZF.js","assets/editor-Dvl_Svmm.css"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const w="modulepreload",P=function(e){return"/"+e},b={},M=function(n,s,i){let t=Promise.resolve();if(s&&s.length>0){let I=function(a){return Promise.all(a.map(c=>Promise.resolve(c).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");t=I(s.map(a=>{if(a=P(a),a in b)return;b[a]=!0;const c=a.endsWith(".css"),g=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${g}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":w,c||(d.as="script"),d.crossOrigin="",d.href=a,l&&d.setAttribute("nonce",l),document.head.appendChild(d),c)return new Promise((y,z)=>{d.addEventListener("load",y),d.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${a}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return t.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return n().catch(r)})},A={title:"📍 Lernpfad – Gemini CLI",intro:"Dein strukturierter Weg von der Installation bis zum Profi-Einsatz.",steps:[{num:1,title:"Installation",desc:"Gemini CLI wird als globales npm-Paket installiert.",code:`npm install -g @google/gemini-cli

# Version prüfen:
gemini --version`,lang:"bash",chips:[{label:"Installationsdoku",url:"https://geminicli.com/docs/get-started/installation"}]},{num:2,title:"Authentifizierung",desc:"Verbinde deinen Google-Account oder nutze einen API-Key für Enterprise.",code:`# Standard: Google OAuth (Browser öffnet sich)
gemini

# Enterprise / API-Key:
export GEMINI_API_KEY="dein-key"
gemini`,lang:"bash",chips:[{label:"Auth-Docs",url:"https://geminicli.com/docs/get-started/authentication"}]},{num:3,title:"Erste Session",desc:"Starte Gemini CLI im Projektordner – es liest den Kontext automatisch.",code:`cd mein-projekt
gemini

# Tippe dann z.B.:
# "Was macht dieses Projekt?"
# "Schreibe Tests für src/utils.js"`,lang:"bash",chips:[{label:"Quickstart",url:"https://geminicli.com/docs/get-started"},{label:"Beispiele",url:"https://geminicli.com/docs/get-started/examples"}]},{num:4,title:"Slash-Befehle",desc:'Tippe "/" für eingebaute Befehle zum Steuern der Session.',code:`/help           # Alle Befehle
/memory         # Erinnerungen verwalten
/chat list      # Sessions anzeigen
/chat resume X  # Session X fortsetzen
/tools          # Verfügbare Tools
/stats          # Token-Verbrauch
/quit           # Beenden`,lang:"bash",chips:[{label:"Befehlsreferenz",url:"https://geminicli.com/docs/reference/commands"}]},{num:5,title:"GEMINI.md – Projektkontext",desc:"Lege eine GEMINI.md im Projektstamm an für dauerhaften Kontext.",code:`cat > GEMINI.md << EOF
# Projektname

## Tech-Stack
- Node.js + TypeScript
- Express + Prisma + PostgreSQL
- Jest für Tests

## Konventionen
- Async/Await bevorzugen
- Deutsche Kommentare
- Error-First Pattern
EOF`,lang:"bash",chips:[{label:"GEMINI.md Guide",url:"https://geminicli.com/docs/cli/gemini-md"}]},{num:6,title:"Memory Management",desc:"Speichere persistente Fakten damit Gemini sich sie session-übergreifend merkt.",code:`# Im interaktiven Modus:
/memory add "Ich nutze TypeScript, kein JavaScript"
/memory add "Unser Team nutzt GitFlow"
/memory list
/memory remove 2`,lang:"bash",chips:[{label:"Memory Tutorial",url:"https://geminicli.com/docs/cli/tutorials/memory-management"}]},{num:7,title:"Sessions & Checkpoints",desc:"Gemini CLI speichert Sessions automatisch. Setze Checkpoints für komplexe Workflows.",code:`# Session-Liste:
gemini --list-sessions

# Im Dialog:
/chat list
/chat resume mein-chat

# Checkpoint setzen:
/checkpoint save "vor-dem-refactoring"
/checkpoint list`,lang:"bash",chips:[{label:"Session Management",url:"https://geminicli.com/docs/cli/tutorials/session-management"}]},{num:8,title:"Rewind",desc:"Mache Änderungen rückgängig und springe zu früheren Zuständen zurück.",code:`# Zum letzten Checkpoint zurück:
/rewind

# Zu einem bestimmten Checkpoint:
/rewind list
/rewind restore "vor-dem-refactoring"

# Dateien werden dabei auch zurückgesetzt!`,lang:"bash",chips:[{label:"Rewind Docs",url:"https://geminicli.com/docs/cli/rewind"}]},{num:9,title:"Headless Mode & Scripting",desc:"Nutze Gemini CLI in Shell-Skripten und CI/CD-Pipelines ohne interaktiven Dialog.",code:`# Direkte Antwort:
gemini -p "Erstelle Release Notes aus: $(git log --oneline -5)"

# Script-Modus:
gemini --headless -p "Analysiere src/ auf Sicherheitsprobleme"

# JSON-Output:
gemini -p "Liste alle Funktionen in src/api.js" --output json`,lang:"bash",chips:[{label:"Headless Docs",url:"https://geminicli.com/docs/cli/headless"},{label:"Automation",url:"https://geminicli.com/docs/cli/tutorials/automation"}]},{num:10,title:"MCP Server & Extensions",desc:"Verbinde externe Dienste über das Model Context Protocol und schreibe eigene Extensions.",code:`// ~/.gemini/settings.json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/home/user"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_TOKEN": "ghp_..." }
    }
  }
}`,lang:"json",chips:[{label:"MCP Setup",url:"https://geminicli.com/docs/cli/tutorials/mcp-setup"},{label:"Extensions",url:"https://geminicli.com/docs/extensions"}]}]},x={title:"📦 Module",intro:"Alle wichtigen Themen rund um Gemini CLI – vertieft erklärt.",groups:[{title:"⚙️ Konfiguration",items:[{title:"settings.json – Die Hauptkonfiguration",icon:"🔧",content:"Alle Einstellungen landen in <code>~/.gemini/settings.json</code> (global) oder <code>.gemini/settings.json</code> (Projekt). Projekteinstellungen überschreiben globale.",code:`{
  "theme": "dark",
  "model": "gemini-2.5-pro",
  "sandbox": true,
  "autoSave": true,
  "contextWindowSizeMB": 10,
  "tokenCaching": true,
  "telemetry": false
}`,lang:"json"},{title:"Custom Commands",icon:"⚡",content:"Erstelle eigene Slash-Befehle in <code>.gemini/commands/</code>. Platzhalter wie <code>{{file}}</code> werden beim Aufruf ersetzt.",code:`# .gemini/commands/review.md
---
description: Code Review
---
Review {{file | "src/"}} auf:
1. Bugs und Logikfehler
2. Performance
3. Sicherheit
4. Testbarkeit
Sei direkt und konkret.`,lang:"markdown"},{title:".geminiignore – Dateien ausschließen",icon:"🚫",content:"Schließe Dateien aus dem Kontext aus. Identisches Format wie <code>.gitignore</code>.",code:`# .geminiignore
node_modules/
dist/
build/
.env*
*.log
*.lock
coverage/
*.min.js
*.map
*.png
*.jpg`,lang:"text"},{title:"Projekt-Kontext: GEMINI.md",icon:"📄",content:"GEMINI.md wird bei jeder Session automatisch als System-Kontext geladen. Es gibt eine Hierarchie: Global (<code>~/.gemini/GEMINI.md</code>) → Repo-Root → Unterordner.",code:`# GEMINI.md
## Über das Projekt
Dies ist ein E-Commerce Backend mit Node.js.

## Stack
- Express.js, Prisma, PostgreSQL
- Jest, Supertest

## Wichtige Regeln
- Niemals direkte SQL-Queries – immer Prisma
- Alle Routen durch AuthMiddleware
- Logging mit Winston`,lang:"markdown"},{title:"Themes",icon:"🎨",content:"Passe das visuelle Erscheinungsbild von Gemini CLI im Terminal an.",code:`# Im Dialog:
/theme list       # Alle Themes anzeigen
/theme dark       # Dark-Theme
/theme light      # Light-Theme
/theme monokai    # Monokai

# Oder in settings.json:
# { "theme": "monokai" }`,lang:"bash"},{title:"Model Configuration",icon:"🧪",content:"Passe Modell-Parameter wie Temperature und Thinking Budget an.",code:`// settings.json
{
  "model": "gemini-2.5-pro",
  "generationSettings": {
    "temperature": 0.7,
    "thinkingBudget": "medium",
    "topP": 0.95,
    "maxOutputTokens": 8192
  }
}`,lang:"json"},{title:"Enterprise Configuration",icon:"🏢",content:"Für Unternehmensumgebungen – zentrale Richtlinien, Proxy-Konfiguration, SSO.",code:`// enterprise-settings.json
{
  "auth": { "type": "service-account", "keyFile": "/etc/gemini/key.json" },
  "proxy": "https://proxy.firma.de:8080",
  "allowedModels": ["gemini-2.5-pro"],
  "dataResidency": "EU"
}`,lang:"json"},{title:"Trusted Folders",icon:"🔐",content:"Steuere, in welchen Verzeichnissen Gemini CLI Shell-Befehle ausführen darf.",code:`// settings.json
{
  "trustedFolders": [
    "/home/user/projekte/mein-app",
    "/tmp/sandbox"
  ]
}`,lang:"json"},{title:"System Prompt Override",icon:"🎯",content:"Überschreibe den Standard-System-Prompt für spezifische Anwendungsfälle.",code:`// settings.json
{
  "systemPrompt": "Du bist ein erfahrener TypeScript-Entwickler. Antworte immer auf Deutsch. Bevorzuge funktionale Patterns und unveränderliche Datenstrukturen."
}`,lang:"json"}]},{title:"✨ Features",items:[{title:"Agent Skills",icon:"🤖",content:"Agent Skills sind spezialisierte Agenten für bestimmte Aufgaben – z.B. Code-Review, Dokumentation oder Testing.",code:`# Im Dialog einen Skill aktivieren:
/skills list
/skills use code-review

# Eigenen Skill anlegen:
# .gemini/skills/testwriter.md
---
name: testwriter
description: Schreibt Unit-Tests
---
Analysiere die gegebene Funktion und schreibe
vollständige Jest Tests dafür.`,lang:"bash"},{title:"Checkpointing",icon:"💾",content:"Checkpoints sind automatische Snapshots deiner Session und des Dateisystems. Gemini setzt diese vor riskanten Operationen.",code:`# Manueller Checkpoint:
/checkpoint save "vor-großem-refactoring"

# Liste:
/checkpoint list

# Wiederherstellen:
/checkpoint restore "vor-großem-refactoring"

# Auto-Checkpointing in settings.json:
# { "autoCheckpoint": true }`,lang:"bash"},{title:"Plan Mode 🔬",icon:"📋",content:"Im Plan Mode plant Gemini CLI Änderungen im Read-Only Modus, bevor es sie ausführt. Ideal für komplexe Code-Transformationen.",code:`# Plan Mode aktivieren:
/plan on

# Jetzt Aufgaben stellen:
# "Refactore das gesamte Auth-System auf JWT"
# Gemini zeigt einen Plan – du musst explizit bestätigen!

# Plan Mode wieder aus:
/plan off`,lang:"bash"},{title:"Headless Mode",icon:"🖥️",content:"Nutze Gemini CLI ohne interaktiven Dialog – für Scripts, CI/CD und Automatisierung.",code:`# Einfachste Form:
gemini -p "Meine Frage"

# Mit Datei-Input:
gemini -p "Erkläre diese Funktion" < src/utils.js

# Output als JSON:
gemini -p "Liste Abhängigkeiten" --output json

# Timeout setzen:
gemini -p "Analyse" --timeout 60`,lang:"bash"},{title:"IDE Integration",icon:"💡",content:"Integriere Gemini CLI direkt in VS Code, JetBrains IDEs und andere Editoren.",code:`# VS Code Extension installieren:
code --install-extension google.gemini-cli-vscode

# Oder via Terminal aus dem IDE-Terminal:
# Gemini CLI liest den Editor-Kontext automatisch

# Keyboard Shortcut: Ctrl+Shift+G (Standard)`,lang:"bash"},{title:"Model Selection",icon:"🎯",content:"Wähle das passende Modell für deine Aufgabe.",table:[["Modell","Stärke","Empfohlen für"],["gemini-2.5-pro","Höchste Qualität, 1M Token Kontext","Große Codebasen, komplexe Analyse"],["gemini-2.5-flash","Schnell, günstig","Quick-Fixes, einfache Fragen"],["gemini-2.0-flash","Ausgewogen","Tägliche Entwicklung"]]},{title:"Model Routing",icon:"🔀",content:"Gemini CLI kann automatisch zwischen Modellen wechseln – z.B. bei Quota-Überschreitung.",code:`// settings.json
{
  "modelRouting": {
    "enabled": true,
    "fallbackModel": "gemini-2.5-flash",
    "retryOnQuotaExceeded": true
  }
}`,lang:"json"},{title:"Token Caching",icon:"⚡",content:"Token Caching spart bis zu 75% der Kosten bei wiederholten Anfragen mit ähnlichem Kontext.",code:`// settings.json
{
  "tokenCaching": true,
  "cacheStrategy": "aggressive"
}

# Statistiken anzeigen:
/stats
# → Zeigt: Tokens genutzt, gecacht, gespart`,lang:"json"},{title:"Rewind",icon:"⏪",content:"Gemini CLI kann Dateiänderungen rückgängig machen und die Session zu einem früheren Punkt zurückspulen.",code:`# Letzten Schritt rückgängig:
/rewind

# Zu benanntem Checkpoint:
/rewind restore "checkpoint-name"

# ⚠️ Vorsicht: Auch Dateiänderungen werden rückgesetzt!`,lang:"bash"},{title:"Sandboxing",icon:"🛡️",content:"Im Sandbox-Modus werden Shell-Befehle in einer isolierten Umgebung ausgeführt.",code:`// settings.json
{
  "sandbox": true,
  "sandboxConfig": {
    "allowNetwork": false,
    "allowedPaths": ["/home/user/projekt"],
    "maxCPU": "50%",
    "maxMemory": "512MB"
  }
}`,lang:"json"},{title:"Telemetry",icon:"📊",content:"Gemini CLI sammelt optional Usage-Metriken. Du kannst es vollständig deaktivieren.",code:`// Telemetry deaktivieren:
// settings.json
{
  "telemetry": false
}

// Oder via Umgebungsvariable:
export GEMINI_TELEMETRY=false`,lang:"json"},{title:"Subagents 🔬",icon:"🤝",content:"Subagents sind spezialisierte Instanzen die Gemini CLI für Teilaufgaben aufruft – z.B. einen Code-Analyse-Agenten.",code:`# Subagent direkt ansprechen:
/agent use code-analyzer

# In GEMINI.md konfigurieren:
## Subagents
- code-analyzer: für Sicherheitsanalysen
- doc-writer: für Dokumentation
- test-gen: for Test-Generierung`,lang:"bash"},{title:"Remote Subagents 🔬",icon:"🌐",content:"Verbinde externe KI-Agenten über MCP als Remote Subagents.",code:`// settings.json
{
  "remoteAgents": [
    {
      "name": "code-expert",
      "url": "https://mein-agent.beispiel.de/mcp",
      "apiKey": "ra_..."
    }
  ]
}`,lang:"json"}]},{title:"🔌 Extensions & MCP",items:[{title:"MCP Server einrichten",icon:"🌐",content:"MCP (Model Context Protocol) verbindet externe Dienste mit Gemini CLI. Viele Server sind als npm-Pakete verfügbar.",code:`// settings.json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_TOKEN": "ghp_..." }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/db"]
    }
  }
}`,lang:"json"},{title:"Eigene Extensions schreiben",icon:"🛠️",content:"Eine Extension ist ein npm-Paket das Tools für Gemini CLI bereitstellt.",code:`// meine-extension/index.js
export default {
  tools: [
    {
      name: "deploy_to_staging",
      description: "Deployed die App in die Staging-Umgebung",
      parameters: {
        branch: { type: "string", description: "Branch-Name" }
      },
      async execute({ branch }) {
        const { execSync } = await import("child_process");
        const result = execSync(\`git push staging \${branch}\`);
        return { success: true, output: result.toString() };
      }
    }
  ]
};`,lang:"javascript"},{title:"Hooks",icon:"🪝",content:"Hooks sind Skripte die Gemini CLI vor/nach bestimmten Ereignissen ausführt.",code:`// .gemini/hooks.json
{
  "beforeExecute": {
    "shell": "npm run lint 2>&1 || true"
  },
  "afterWrite": {
    "shell": "prettier --write {{file}}"
  },
  "afterSession": {
    "shell": "git add -p"
  }
}`,lang:"json"}]}]},T={title:"🎓 Kurse",intro:"Eigene Lerneinheiten zu allen wichtigen Gemini CLI Themen – in Deutsch.",items:[{id:"kurs-1",badge:"Anfänger",icon:"📁",duration:"~20 Min",title:"Dateimanagement mit Gemini CLI",description:"Lerne, wie du Dateien liest, analysierst, schreibst und umstrukturierst.",lernziele:["Dateien lesen und zusammenfassen lassen","Neuen Code generieren und in Dateien schreiben","Bulk-Operationen auf Verzeichnisse anwenden"],content:[{step:"Datei analysieren lassen",code:`# Im Gemini-Dialog:
# "Erkläre mir den Code in src/auth.js"
# "Fasse README.md auf Deutsch zusammen"
# "Welche Sicherheitsprobleme siehst du in api/routes.js?"`,lang:"bash"},{step:"Datei schreiben lassen",code:`# "Erstelle eine neue Datei src/helpers/validate.js
#  mit Validierungsfunktionen für:
#  - E-Mail Adressen
#  - Deutsche Postleitzahlen (5-stellig)
#  - Telefonnummern (internationales Format)"`,lang:"bash"},{step:"Bulk-Refactoring",code:`# "Benenne alle Dateien in src/components/ von .jsx nach .tsx um
#  und update die Import-Pfade in anderen Dateien entsprechend"

# "Füge in jede Funktion in src/api/ einen try/catch Block ein
#  der Fehler mit dem Logger loggt"`,lang:"bash"},{step:"Verzeichnis-Analyse",code:`# "Analysiere das gesamte src/-Verzeichnis und:
#  1. Erstelle ein Verzeichnis-Diagram
#  2. Identifiziere Duplikate
#  3. Schlage eine bessere Ordnerstruktur vor"`,lang:"bash"}]},{id:"kurs-2",badge:"Anfänger",icon:"🧠",duration:"~25 Min",title:"Context & Memory Management",description:"Gib Gemini CLI dauerhaften Kontext damit du nicht jedes Mal alles erklären musst.",lernziele:["GEMINI.md für Projektkontext erstellen","Persistente Erinnerungen setzen und verwalten","Kontext-Hierarchien verstehen"],content:[{step:"Memory-Befehle lernnen",code:`/memory add "Unser Projekt nutzt TypeScript strictmode"
/memory add "Tests heißen *.spec.ts, nicht *.test.ts"
/memory add "Datenbankmodelle sind in src/models/ definiert"
/memory list
/memory remove 2   # Eintrag 2 löschen`,lang:"bash"},{step:"Gute GEMINI.md schreiben",code:`# GEMINI.md
# [Projektname] – Tech Context

## Über das Projekt
Ein REST-API Backend für eine Lernplattform.

## Stack
- Runtime: Node.js 20, TypeScript 5
- Framework: Express.js mit Zod-Validierung
- DB: PostgreSQL 16 via Prisma ORM
- Tests: Jest + Supertest
- CI: GitHub Actions

## Codestil
- Async/Await (kein .then/.catch)
- Fehler per Error-Klassen (kein string throw)
- Logging via Winston-Logger (kein console.log)

## Verzeichnisstruktur
src/
  routes/     # Express-Router
  services/   # Business-Logik
  models/     # Prisma-Schemas
  middleware/ # Auth, Validation, Error
  utils/      # Hilfsfunktionen`,lang:"markdown"},{step:"Kontext testen",code:`# Starte Gemini CLI neu und stelle Fragen ohne zu erklären:
# "Erstelle einen neuen Endpunkt für User-Profile"
# Gemini liest GEMINI.md und nutz den vollen Kontext!`,lang:"bash"}]},{id:"kurs-3",badge:"Anfänger",icon:"🌐",duration:"~20 Min",title:"Web Search & Fetch",description:"Nutze Gemini CLI um Webseiten zu durchsuchen und Inhalte abzurufen.",lernziele:["Websuche in der CLI nutzen","Webseiten-Inhalte abrufen und analysieren","Recherche-Workflows automatisieren"],content:[{step:"Web-Suche starten",code:`# Gemini CLI hat eingebaute Web-Suche:
# "Suche nach der neuesten Version von Express.js und
#  welche Breaking Changes es in v5 gibt"

# "Welche npm-Pakete werden 2024 für JWT in Node.js empfohlen?"

# "Gibt es Sicherheitslücken in axios < 1.6.0?"`,lang:"bash"},{step:"URL-Inhalt abrufen",code:`# Webseite lesen und analysieren:
# "Rufe https://docs.prisma.io/concepts/components/prisma-client
#  ab und erkläre die wichtigsten Konzepte"

# Dokumentation zusammenfassen:
# "Fasse https://expressjs.com/de/guide/routing.html auf Deutsch zusammen"`,lang:"bash"},{step:"Recherche automatisieren",code:`#!/bin/bash
# dependency-check.sh
DEPS=$(cat package.json | grep -E '"[^"]+": "[^"]+"')
gemini -p "Prüfe diese npm-Abhängigkeiten auf bekannte
Sicherheitslücken und veraltete Versionen.\\n$DEPS"`,lang:"bash"}]},{id:"kurs-4",badge:"Anfänger",icon:"📋",duration:"~20 Min",title:"Task Planning mit Todos",description:"Nutze Gemini CLI um komplexe Aufgaben zu planen und strukturiert abzuarbeiten.",lernziele:["Todos für komplexe Workflows erstellen","Aufgaben priorisieren lassen","Fortschritt verfolgen"],content:[{step:"Todo-Liste erstellen lassen",code:`# Gemini erstellt automatisch Todos für komplexe Aufgaben:
# "Ich muss unser Auth-System von Sessions auf JWT umstellen.
#  Erstelle eine detaillierte Todo-Liste mit allen Schritten"

# Todos anzeigen:
/todos          # Aktuelle Todo-Liste
/todos done 3   # Todo 3 als erledigt markieren`,lang:"bash"},{step:"Aufgaben priorisieren",code:`# "Ich habe folgende Aufgaben auf meiner Backlog.
#  Priorisiere sie nach Business-Wert und technischer Dringlichkeit:
#  - Nutzer-Passwörter hashen (aktuell Plaintext!)
#  - Dark Mode implementieren
#  - Ladezeit von 4s auf 2s verbessern
#  - Admin-Dashboard erstellen"`,lang:"bash"},{step:"Plan Mode für Refactorings",code:`# Plan Mode aktivieren für sichere Planung:
/plan on

# "Refactore unsere MongoDb-Datenbankschicht auf PostgreSQL"
# Gemini erstellt einen vollständigen Plan ohne Änderungen!
# → Du bestätigst jeden Schritt einzeln

/plan off      # Plan Mode deaktivieren`,lang:"bash"}]},{id:"kurs-5",badge:"Fortgeschritten",icon:"🐚",duration:"~30 Min",title:"Shell Commands meistern",description:"Nutze Gemini CLI als intelligenten Shell-Assistenten für Systemaufgaben.",lernziele:["Shell-Befehle sicher ausführen","Komplexe Pipelines erstellen","Sandboxing konfigurieren"],content:[{step:"Befehle sicher ausführen",code:`# Gemini fragt vor jedem Shell-Befehl nach Erlaubnis!
# "Zeige alle Node-Prozesse die mehr als 500MB RAM nutzen"
# → Gemini generiert: ps aux | grep node | awk ...
# → Du siehst den Befehl VOR der Ausführung

# "Lösche alle .log Dateien älter als 7 Tage in /var/log/app"
# → find /var/log/app -name "*.log" -mtime +7 -delete`,lang:"bash"},{step:"Sandbox konfigurieren",code:`// settings.json – Maximale Sicherheit
{
  "sandbox": true,
  "trustedFolders": ["/home/user/projekt"],
  "sandboxConfig": {
    "allowNetwork": false,
    "blockedCommands": ["rm -rf /", "sudo", "chmod 777", "curl"]
  }
}`,lang:"json"},{step:"Nützliche Shell-Aufgaben",code:`# Git-Status zusammenfassen:
# "Erstelle einen Bericht über den aktuellen Git-Status:
#  welche Dateien geändert, welche neu, gibt es Konflikte?"

# Performance-Analyse:
# "Analysiere die Node.js App-Performance:
#  CPU, RAM, Event Loop Lag der letzten Stunde"

# Log-Analyse:
# "Analysiere /var/log/nginx/error.log und
#  zeige die häufigsten Fehler und mögliche Ursachen"`,lang:"bash"}]},{id:"kurs-6",badge:"Fortgeschritten",icon:"🔄",duration:"~25 Min",title:"Session Management & Rewind",description:"Verwalte Konversationen professionell und nutze Checkpoints für sichere Workflows.",lernziele:["Sessions speichern und fortsetzen","Checkpoints strategisch setzen","Rewind effektiv nutzen"],content:[{step:"Sessions verwalten",code:`# Sessions auflisten:
gemini --list-sessions
# → Zeigt alle gespeicherten Sessions mit Datum

# Im Dialog:
/chat list
/chat resume "feature-auth-refactoring"
/chat rename "neuer-name"
/chat delete "alte-session"`,lang:"bash"},{step:"Checkpoint Strategie",code:`# Checkpoint BEVOR du etwas Riskantes machst:
/checkpoint save "vor-db-migration"

# Komplexes Refactoring starten:
# "Migiere die Users-Tabelle von UUID zu ULID"
# Falls etwas schiefgeht:
/rewind restore "vor-db-migration"
# → Alle Dateiänderungen werden rückgängig gemacht!`,lang:"bash"},{step:"Auto-Checkpointing",code:`// settings.json
{
  "autoCheckpoint": true,
  "checkpointFrequency": "before-file-write"
  // Optionen: "before-file-write", "every-n-turns", "manual"
}`,lang:"json"}]},{id:"kurs-7",badge:"Fortgeschritten",icon:"🔌",duration:"~40 Min",title:"MCP Server einrichten",description:"Verbinde externe Dienste über das Model Context Protocol mit Gemini CLI.",lernziele:["Öffentliche MCP Server nutzen","Verbindung zu Datenbanken herstellen","GitHub-Integration einrichten"],content:[{step:"Verfügbare MCP Server",code:`# Beliebte öffentliche MCP Server:
npm install @modelcontextprotocol/server-filesystem
npm install @modelcontextprotocol/server-github
npm install @modelcontextprotocol/server-postgres
npm install @modelcontextprotocol/server-sqlite
npm install @modelcontextprotocol/server-brave-search`,lang:"bash"},{step:"Konfiguration in settings.json",code:`// ~/.gemini/settings.json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_dein_token_hier"
      }
    },
    "mydb": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://user:pass@localhost:5432/myapp"
      ]
    }
  }
}`,lang:"json"},{step:"MCP Verbindung nutzen",code:`# Nach dem Neustart von Gemini CLI:
/tools     # → Neue Tools von MCP Servern sichtbar!

# GitHub nutzen:
# "Liste alle offenen Issues in meinem Repo"
# "Was sind die letzten 5 Pull Requests?"
# "Erstelle ein neues Issue: Bug: Login schlägt fehl"

# Datenbank nutzen:
# "Welche Tabellen hat unsere Datenbank?"
# "Zeige die 5 neuesten User-Registrierungen"`,lang:"bash"}]},{id:"kurs-8",badge:"Experte",icon:"⚡",duration:"~45 Min",title:"Automatisierung & CI/CD",description:"Integriere Gemini CLI in Workflows, Makefiles, GitHub Actions und Deployment-Pipelines.",lernziele:["Headless-Mode in Skripten nutzen","GitHub Actions Integration","Makefile-Targets mit AI"],content:[{step:"Makefile mit AI-Targets",code:`# Makefile
ai-review:
	@echo "🤖 AI Code Review..."
	gemini -p "Führe einen vollständigen Code Review durch. Prüfe auf Bugs, Security-Issues und Performance. Verzeichnis: src/" 

ai-docs:
	@echo "📝 Generiere Dokumentation..."
	gemini -p "Generiere vollständige API-Dokumentation aus src/routes/ im Markdown-Format" > docs/API.md

ai-changelog:
	@echo "📋 Erstelle Changelog..."
	DIFF=$$(git log --oneline v$(PREV_VERSION)..HEAD); \\
	gemini -p "Erstelle einen CHANGELOG Eintrag für Version $(VERSION) basierend auf: $$DIFF" >> CHANGELOG.md`,lang:"makefile"},{step:"GitHub Actions Workflow",code:`name: AI Code Quality
on:
  pull_request:
    branches: [main, develop]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }
      
      - name: Install Gemini CLI
        run: npm install -g @google/gemini-cli
      
      - name: AI Review
        env:
          GEMINI_API_KEY: \${{ secrets.GEMINI_API_KEY }}
        run: |
          DIFF=$(git diff origin/\${{ github.base_ref }}...HEAD)
          REVIEW=$(gemini -p "Review diesen PR Diff.\\n\\n$DIFF")
          echo "$REVIEW" >> $GITHUB_STEP_SUMMARY`,lang:"yaml"},{step:"Rollout-Skript mit AI-Validierung",code:`#!/bin/bash
# deploy.sh
set -e

echo "🤖 AI Pre-Deploy Check..."
ISSUES=$(gemini -p "Analysiere src/ auf kritische Bugs und Security-Issues die einen Deploy blocken würden. Antworte nur mit YES oder NO gefolgt von einer Begründung.")

if [[ $ISSUES == NO* ]]; then
  echo "❌ Deploy geblockt:"
  echo "$ISSUES"
  exit 1
fi

echo "✅ AI Check bestanden – deploye..."
npm run build
npm run deploy`,lang:"bash"}]},{id:"kurs-9",badge:"Experte",icon:"🛠️",duration:"~50 Min",title:"Eigene Extensions bauen",description:"Erweitere Gemini CLI mit eigenen Tools – von einfachen Shells bis zu vollständigen API-Integrationen.",lernziele:["Extension-Struktur verstehen","Eigenes Tool implementieren","Extension in Gemini CLI registrieren"],content:[{step:"Extension Grundstruktur",code:`mkdir meine-extension
cd meine-extension
npm init -y

# package.json anpassen:
# { "main": "index.js", "type": "module" }`,lang:"bash"},{step:"Tool implementieren",code:`// meine-extension/index.js
export default {
  name: "meine-extension",
  version: "1.0.0",
  tools: [
    {
      name: "jira_create_issue",
      description: "Erstellt ein JIRA Issue",
      parameters: {
        title: { type: "string", description: "Issue-Titel", required: true },
        description: { type: "string", description: "Beschreibung" },
        priority: { type: "string", enum: ["low", "medium", "high"] }
      },
      async execute({ title, description, priority = "medium" }) {
        const response = await fetch(\`\${process.env.JIRA_URL}/rest/api/3/issue\`, {
          method: "POST",
          headers: {
            "Authorization": \`Bearer \${process.env.JIRA_TOKEN}\`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            fields: { summary: title, description: { type: "text", text: description }, priority: { name: priority } }
          })
        });
        const issue = await response.json();
        return { issueKey: issue.key, url: \`\${process.env.JIRA_URL}/browse/\${issue.key}\` };
      }
    }
  ]
};`,lang:"javascript"},{step:"Extension registrieren",code:`// settings.json
{
  "extensions": [
    "/pfad/zu/meine-extension"
  ]
}

# Oder als npm-Paket:
npm publish
# → In settings.json:
# { "extensions": ["meine-extension"] }`,lang:"json"}]}]},j={title:"🧪 Codelabs",intro:"Hands-on Workshops – führe die Schritte selbst durch und nutze den Code-Playground.",items:[{id:"lab-1",badge:"Anfänger",icon:"🚀",duration:"15 Min",title:"Codelab 1: Installation & erster Chat",goal:"Gemini CLI installieren und den ersten Befehl absetzen.",steps:[{title:"Node.js Version prüfen",code:`node --version  # Mindestens v18.0.0
npm --version   # Mindestens v9.0.0`,lang:"bash"},{title:"Gemini CLI installieren",code:`npm install -g @google/gemini-cli
gemini --version
# → Gemini CLI v1.x.x`,lang:"bash"},{title:"Ersten Chat starten",code:`# Terminal öffnen und eingeben:
gemini
# → Browser öffnet sich für Google-Login
# → Nach Login: Gemini CLI-Prompt erscheint

# Erste Nachricht:
# "Hallo! Erkläre mir kurz was du kannst."`,lang:"bash"},{title:"Einfache Aufgabe stellen",code:`# Im Gemini CLI Prompt:
# "Schreibe eine JavaScript Funktion die prüft
#  ob eine Zahl eine Primzahl ist. Mit Tests."`,lang:"bash"}]},{id:"lab-2",badge:"Anfänger",icon:"📝",duration:"20 Min",title:"Codelab 2: Projekt verstehen lassen",goal:"Gemini CLI analysiert ein bestehendes Projekt vollständig.",steps:[{title:"Testprojekt anlegen",code:`mkdir test-projekt && cd test-projekt
npm init -y && npm install express

cat > server.js << 'EOF'
const express = require("express");
const app = express();
app.use(express.json());

const users = [];

app.post("/users", (req, res) => {
  const user = { id: users.length + 1, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

app.get("/users", (req, res) => res.json(users));
app.listen(3000, () => console.log("Server läuft"));
EOF`,lang:"bash"},{title:"Gemini CLI starten",code:`gemini

# Im Gemini-Dialog:
# "Analysiere server.js:
#  1. Was macht der Code?
#  2. Welche Sicherheitsprobleme gibt es?
#  3. Was fehlt für Production-Reife?"`,lang:"bash"},{title:"Verbesserungen implementieren",code:`# "Verbessere server.js:
#  - Füge Input-Validierung hinzu
#  - Füge proper Error Handling hinzu
#  - Füge Helmet.js für Security-Headers hinzu
#  - Installiere benötigte Pakete"

# Gemini schreibt den verbesserten Code direkt!`,lang:"bash"},{title:"Tests generieren lassen",code:`# "Schreibe Jest + Supertest Tests für alle Endpunkte.
#  Installiere die Test-Dependencies auch."`,lang:"bash"}]},{id:"lab-3",badge:"Anfänger",icon:"🧠",duration:"20 Min",title:"Codelab 3: Memory & GEMINI.md",goal:"Richte dauerhaften Projektkontext ein damit du nie wieder alles erklären musst.",steps:[{title:"GEMINI.md erstellen",code:`cat > GEMINI.md << 'EOF'
# Mein Projekt

## Tech-Stack
- Node.js 20 + TypeScript
- Express.js + Zod (Validierung)
- Prisma ORM + PostgreSQL
- Jest + Supertest (Tests)

## Konventionen
- Async/Await, kein .then()
- Zod-Schemas für alle Inputs
- Alle Fehler mit custom Error-Klassen
- Kommentare auf Deutsch

## Verzeichnis
src/routes/ – Express Router
src/services/ – Business-Logik
src/models/ – Prisma-Models
EOF`,lang:"bash"},{title:"Memory befüllen",code:`gemini
# Im Dialog:
/memory add "Ich bevorzuge kurze, lesbare Funktionen (max 20 Zeilen)"
/memory add "Return early pattern bevorzugen"
/memory add "Keine Magic Numbers – immer Konstanten"
/memory list`,lang:"bash"},{title:"Kontext testen",code:`# Neues Terminal, Gemini neu starten:
gemini

# Ohne weitere Erklärung fragen:
# "Erstelle einen User-Service mit CRUD-Operationen"
# Gemini nutzt automatisch GEMINI.md + Memory!`,lang:"bash"}]},{id:"lab-4",badge:"Fortgeschritten",icon:"🔧",duration:"30 Min",title:"Codelab 4: Custom Commands",goal:"Erstelle eigene Slash-Befehle für deine häufigsten Aufgaben.",steps:[{title:"Commands-Verzeichnis anlegen",code:"mkdir -p .gemini/commands",lang:"bash"},{title:"Review-Command erstellen",code:`cat > .gemini/commands/review.md << 'EOF'
---
description: Führt einen vollständigen Code Review durch
---

Bitte reviewe {{file | "die aktuelle Datei"}} und gib Feedback zu:

## Bugs & Logik
Gibt es offensichtliche Fehler oder falsche Annahmen?

## Sicherheit
SQL-Injection, XSS, unsichere Deserialisierung, etc.?

## Performance
Unnötige Datenbankabfragen, fehlende Indizes, N+1 Probleme?

## Testbarkeit
Kann ich diese Funktion gut testen? Was fehlt?

Gib konkrete Code-Vorschläge.
EOF`,lang:"bash"},{title:"Weitere Commands erstellen",code:`cat > .gemini/commands/commit.md << 'EOF'
---
description: Generiert eine Commit-Message
---
Analysiere die aktuellen git-Änderungen (git diff --staged)
und schreibe eine Conventional Commit Message:

Format: <type>(<scope>): <description>
Types: feat, fix, refactor, docs, test, chore

Nur die Message, keine Erklärung.
EOF`,lang:"bash"},{title:"Commands nutzen",code:`gemini
# Im Dialog:
/review src/auth/login.ts
# → Vollständiger Review nach deinem Template!

/commit
# → Gemini liest git diff und schreibt Commit-Message`,lang:"bash"}]},{id:"lab-5",badge:"Fortgeschritten",icon:"🌐",duration:"35 Min",title:"Codelab 5: MCP Server verbinden",goal:"Verbinde GitHub und eine Datenbank via MCP mit Gemini CLI.",steps:[{title:"GitHub Token erstellen",code:`# GitHub → Settings → Developer Settings → Personal Access Tokens
# Berechtigungen: repo, read:user, read:org

# Token in Umgebungsvariable:
export GITHUB_TOKEN="ghp_dein_token_hier"
echo 'export GITHUB_TOKEN="ghp_..."'  >> ~/.bashrc`,lang:"bash"},{title:"MCP in settings.json konfigurieren",code:`// ~/.gemini/settings.json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "\${GITHUB_TOKEN}"
      }
    }
  }
}`,lang:"json"},{title:"GitHub-Integration testen",code:`# Gemini neu starten:
gemini

# Im Dialog:
/tools    # GitHub-Tools sollten erscheinen!

# "Zeige alle offenen Issues in meinem Repository"
# "Welche PRs warten auf meinen Review?"
# "Erstelle ein Issue: Performance-Problem in der Suche"`,lang:"bash"},{title:"GitHub-Workflow automatisieren",code:`# "Analysiere alle offenen Issues und:
#  1. Priorisiere sie nach Dringlichkeit
#  2. Weise passende Labels zu
#  3. Erstelle für jeden Bug ein Fix-Ticket"`,lang:"bash"}]},{id:"lab-6",badge:"Fortgeschritten",icon:"⏪",duration:"25 Min",title:"Codelab 6: Checkpoints & Rewind",goal:"Lerne Checkpoints zu nutzen um riskante Refactorings sicher durchzuführen.",steps:[{title:"Test-Codebase vorbereiten",code:`mkdir rewind-test && cd rewind-test
npm init -y

cat > app.js << 'EOF'
// Altes Datenbankmodell (soll migriert werden)
const db = require("./db-mongo");

async function getUsers() {
  return db.collection("users").find({}).toArray();
}

async function createUser(data) {
  return db.collection("users").insertOne(data);
}

module.exports = { getUsers, createUser };
EOF`,lang:"bash"},{title:"Checkpoint vor Refactoring",code:`gemini
/checkpoint save "vor-mongodb-zu-postgres-migration"
# → Snapshot erstellt!

# "Zeige mir alle Checkpoints"
/checkpoint list`,lang:"bash"},{title:"Riskantes Refactoring starten",code:`# Im Dialog:
# "Migriere app.js und alle anderen Dateien von MongoDB
#  zu PostgreSQL mit Prisma. Aktualisiere package.json
#  und erstelle ein Prisma-Schema."

# Gemini nimmt viele Änderungen vor...`,lang:"bash"},{title:"Rewind wenn nötig",code:`# Falls etwas schiefgelaufen ist:
/rewind restore "vor-mongodb-zu-postgres-migration"
# → ALLE Dateien auf den Snapshot-Zustand zurückgesetzt!

# Oder Schritt für Schritt:
/rewind    # Letzten Schritt rückgängig`,lang:"bash"}]},{id:"lab-7",badge:"Experte",icon:"⚡",duration:"40 Min",title:"Codelab 7: Headless Scripting",goal:"Baue mehrere nützliche Shell-Skripte die Gemini CLI im Headless-Modus nutzen.",steps:[{title:"Auto-Commit-Message",code:`#!/bin/bash
# git-ai-commit.sh
set -e

if git diff --cached --quiet; then
  echo "Keine gestagten Änderungen."
  exit 1
fi

DIFF=$(git diff --cached)
MSG=$(gemini -p "Schreibe eine präzise Conventional Commit Message.\\nFormat: <type>(<scope>): <kurze Beschreibung>\\nTypes: feat|fix|refactor|docs|test|chore\\nNur die Message, nichts anderes!\\n\\nDiff:\\n\${DIFF}")

echo "Commit-Message: $MSG"
read -p "Commit? [j/n]: " ok
[[ "$ok" == "j" ]] && git commit -m "$MSG"`,lang:"bash"},{title:"PR-Beschreibung generieren",code:`#!/bin/bash
# ai-pr.sh
BASE=\${1:-main}
DIFF=$(git diff origin/$BASE...HEAD)
GEMINI_OUTPUT=$(gemini -p "Schreibe eine GitHub PR-Beschreibung auf Deutsch.\\n## Was wurde geändert?\\n## Wie getestet?\\n## Screenshots (falls UI)\\n\\nBasierend auf diesem Diff:\\n$DIFF")

echo "$GEMINI_OUTPUT" | xclip -selection clipboard
echo "PR-Beschreibung in Zwischenablage kopiert!"`,lang:"bash"},{title:"Code-Quality-Report",code:`#!/bin/bash
# daily-report.sh
# Täglich per Cron ausführen

REPORT=$(gemini -p "Analysiere das gesamte src/-Verzeichnis und erstelle einen Code-Quality-Report:\\n- Kritische Bugs\\n- Security-Issues\\n- Technische Schulden\\n- Empfehlungen\\n\\nFormat: Markdown")

echo "$REPORT" > reports/$(date +%Y-%m-%d).md
echo "Report erstellt: reports/$(date +%Y-%m-%d).md"`,lang:"bash"},{title:"Skripte installieren",code:`chmod +x git-ai-commit.sh ai-pr.sh daily-report.sh

# Aliases setzen:
echo "alias gaic='./git-ai-commit.sh'" >> ~/.bashrc
echo "alias aipr='./ai-pr.sh'" >> ~/.bashrc
source ~/.bashrc

# Cron für täglichen Report:
crontab -e
# → 0 9 * * * cd /pfad/zum/projekt && ./daily-report.sh`,lang:"bash"}]},{id:"lab-8",badge:"Experte",icon:"🏗️",duration:"60 Min",title:"Codelab 8: Eigene Extension bauen",goal:"Schreibe eine vollständige Gemini CLI Extension die mit einer externen API kommuniziert.",steps:[{title:"Extension-Projekt anlegen",code:`mkdir gemini-extension-jira
cd gemini-extension-jira
npm init -y
npm install node-fetch

# package.json – type: module hinzufügen:
node -e "const p=require('./package.json'); p.type='module'; require('fs').writeFileSync('package.json',JSON.stringify(p,null,2))"`,lang:"bash"},{title:"Tools implementieren",code:`// index.js
export default {
  name: "jira-extension",
  version: "1.0.0",
  tools: [
    {
      name: "list_issues",
      description: "Listet offene JIRA Issues auf",
      parameters: {
        project: { type: "string", description: "Projekt-Key z.B. MYAPP" },
        maxResults: { type: "number", description: "Max Anzahl (default 10)" }
      },
      async execute({ project, maxResults = 10 }) {
        const res = await fetch(
          \`\${process.env.JIRA_URL}/rest/api/3/search?jql=project=\${project}+AND+status!=Done&maxResults=\${maxResults}\`,
          { headers: { Authorization: \`Bearer \${process.env.JIRA_TOKEN}\` }}
        );
        const data = await res.json();
        return data.issues.map(i => ({ key: i.key, summary: i.fields.summary, status: i.fields.status.name }));
      }
    }
  ]
};`,lang:"javascript"},{title:"Extension registrieren & testen",code:`// ~/.gemini/settings.json
{
  "extensions": [
    "/pfad/zu/gemini-extension-jira"
  ]
}

# Gemini neu starten:
gemini
/tools    # → list_issues sollte erscheinen!

# Nutzung:
# "Liste alle offenen Issues im MYAPP Projekt"`,lang:"json"}]}]},D={title:"📖 Tutorials & Referenz",intro:"Technische Hintergründe, vollständige Referenz und Entwickler-Ressourcen.",groups:[{title:"🧠 Modell & KI",items:[{title:"Das richtige Modell wählen",icon:"🎯",content:"Gemini CLI unterstützt mehrere Modelle. Wähle je nach Aufgabe und Budget:",table:[["Modell","Kontextfenster","Stärke","Wann nutzen?"],["gemini-2.5-pro","1.000.000 Token","Höchste Qualität, Reasoning","Große Codebasen, komplexe Analyse, Architektur"],["gemini-2.5-flash","1.000.000 Token","Schnell & günstig","Quick-Fixes, einfache Fragen, hohe Anfragerate"],["gemini-2.0-flash","128.000 Token","Ausgewogen","Standard Entwicklungsaufgaben"]]},{title:"Prompt Engineering für Entwickler",icon:"✍️",content:"So formulierst du Anfragen für maximale Qualität:",tips:['Sei spezifisch: "Refactore Funktion X in src/utils.js zeile 42-80" statt "verbessere den Code"','Gib Kontext: "Wir nutzen Express 5, TypeScript strict, Prisma ORM"','Definiere das Ergebnis: "Antwort als JSON-Objekt" oder "nur der Code, keine Erklärung"',"Nutze GEMINI.md für projektweite Regeln – dann sparst du dir Kontext in jeder Anfrage",'Iteriere: Starte grob, verfeinere dann: "Mach es noch kürzer / füge Error Handling hinzu"','Zeige Beispiele: "Mache es wie in src/services/userService.ts"']},{title:"Token-Verbrauch verstehen",icon:"📊",content:"Tokens sind die Grundeinheit der Abrechnung. 1 Token ≈ 0.75 Wörter auf Deutsch.",code:`# Token-Statistiken anzeigen:
/stats
# → Input Tokens: 12.450
# → Output Tokens: 3.210
# → Gecachte Tokens: 8.000 (64% gespart!)
# → Gesamtkosten dieser Session: ~$0.02

# Kosten reduzieren:
# 1. Token Caching aktivieren (settings.json: tokenCaching: true)
# 2. .geminiignore für node_modules/, dist/ etc.
# 3. Kontext-Fenster begrenzen: contextWindowSizeMB: 5`,lang:"bash"}]},{title:"📚 Command Reference",items:[{title:"Alle Slash-Befehle",icon:"⌨️",content:"Vollständige Referenz aller eingebauten Slash-Befehle:",table:[["Befehl","Beschreibung"],["/help","Alle Befehle anzeigen"],['/memory add "text"',"Persistente Erinnerung hinzufügen"],["/memory list","Alle Erinnerungen anzeigen"],["/memory remove N","Erinnerung N löschen"],["/chat list","Alle Sessions anzeigen"],["/chat resume NAME","Session NAME fortsetzen"],["/chat rename NAME","Aktuelle Session umbenennen"],["/tools","Alle verfügbaren Tools anzeigen"],["/stats","Token-Verbrauch anzeigen"],["/plan on|off","Plan Mode ein/ausschalten"],["/checkpoint save NAME","Checkpoint erstellen"],["/checkpoint list","Checkpoints anzeigen"],["/checkpoint restore NAME","Checkpoint wiederherstellen"],["/rewind","Letzten Schritt rückgängig machen"],["/theme NAME","Theme wechseln"],["/model NAME","Modell für diese Session wechseln"],["/compress","Konversationskontext komprimieren"],["/quit","Gemini CLI beenden"]]},{title:"Keyboard Shortcuts",icon:"⚡",content:"Produktivitätstipps im interaktiven Modus:",table:[["Shortcut","Aktion"],["Ctrl+C","Aktuelle Anfrage abbrechen"],["Ctrl+D","Gemini CLI beenden"],["↑ / ↓","In der Eingabe-Historie navigieren"],["Tab","Auto-Vervollständigung für Slash-Befehle"],["Ctrl+L","Terminal leeren"],["Ctrl+R","Eingabe-Historie durchsuchen"],["Shift+Enter","Neue Zeile ohne Absenden"],["Alt+Enter","Multiline-Eingabe"],["Ctrl+K","Eingabe löschen"]]},{title:"CLI Flags & Optionen",icon:"🚩",content:"Alle Kommandozeilen-Optionen für Gemini CLI:",code:`# Hilfe:
gemini --help

# Prompt direkt übergeben (Headless):
gemini -p "Deine Anfrage"
gemini --prompt "Deine Anfrage"

# Bestimmtes Modell nutzen:
gemini --model gemini-2.5-flash

# Konfigurationsdatei angeben:
gemini --config /pfad/settings.json

# Sessions:
gemini --list-sessions
gemini --resume SESSION-NAME

# Output-Format:
gemini -p "Frage" --output json
gemini -p "Frage" --output markdown

# Debug-Modus:
gemini --debug
DEBUG="gemini:*" gemini`,lang:"bash"}]},{title:"🔧 Configuration Reference",items:[{title:"Vollständige settings.json Referenz",icon:"📋",content:"Alle verfügbaren Einstellungsoptionen mit Beschreibung:",code:`// ~/.gemini/settings.json
{
  // Modell-Einstellungen
  "model": "gemini-2.5-pro",
  "generationSettings": {
    "temperature": 0.7,        // 0.0–2.0
    "topP": 0.95,              // 0.0–1.0
    "thinkingBudget": "medium", // low|medium|high|max
    "maxOutputTokens": 8192
  },

  // UI
  "theme": "dark",             // dark|light|monokai|...

  // Performance
  "tokenCaching": true,
  "cacheStrategy": "aggressive", // conservative|aggressive
  "contextWindowSizeMB": 10,

  // Sicherheit
  "sandbox": true,
  "trustedFolders": ["/pfad/zum/projekt"],

  // Session
  "autoSave": true,
  "autoCheckpoint": true,
  "checkpointFrequency": "before-file-write",

  // Telemetry
  "telemetry": false,

  // MCP Server
  "mcpServers": { /* ... */ },

  // Extensions
  "extensions": [],

  // Custom System Prompt
  "systemPrompt": ""
}`,lang:"json"},{title:"Umgebungsvariablen",icon:"🌍",content:"Alle unterstützten Umgebungsvariablen:",table:[["Variable","Beschreibung","Beispiel"],["GEMINI_API_KEY","API-Key für direkte Auth","AIza..."],["GEMINI_MODEL","Standard-Modell überschreiben","gemini-2.5-flash"],["GEMINI_SANDBOX","Sandbox aktivieren","true"],["GEMINI_TELEMETRY","Telemetry ein/ausschalten","false"],["GEMINI_CONFIG","Pfad zur settings.json","/etc/gemini/settings.json"],["GOOGLE_APPLICATION_CREDENTIALS","Service-Account für Enterprise","/pfad/key.json"],["DEBUG","Debug-Logging","gemini:*"],["HTTP_PROXY / HTTPS_PROXY","Proxy-Konfiguration","http://proxy:8080"]]},{title:"Memory Import Processor",icon:"🗄️",content:"Gemini CLI kann Memories aus verschiedenen Formaten importieren – z.B. aus alten Chat-Exports oder Dokumenten.",code:`# Memory aus Datei importieren:
# Die Datei muss Markdown-Format haben:
cat > my-memories.md << EOF
# Meine Entwickler-Präferenzen

- Ich verwende VS Code
- Ich bevorzuge Linux
- Sprache: Deutsch
- Framework: Next.js 15
EOF

# Import:
/memory import my-memories.md

# Alle Memories:
/memory list`,lang:"bash"}]},{title:"🔐 Sicherheit & Policy Engine",items:[{title:"Policy Engine",icon:"⚖️",content:"Die Policy Engine erlaubt feinkörnige Kontrolle über welche Aktionen Gemini CLI ausführen darf.",code:`// settings.json – Granulare Policy-Konfiguration
{
  "policyEngine": {
    "tools": {
      "shell": {
        "allowed": true,
        "requireConfirmation": true,
        "blockedPatterns": ["rm -rf", "sudo", "chmod 777", "> /dev/null 2>&1 &"]
      },
      "writeFile": {
        "allowed": true,
        "requireConfirmation": false,
        "allowedExtensions": [".js", ".ts", ".json", ".md"]
      },
      "network": {
        "allowed": false
      },
      "readFile": {
        "allowed": true
      }
    }
  }
}`,lang:"json"},{title:"Sicherheits-Best-Practices",icon:"✅",content:"Empfehlungen für sicheren Produktiveinsatz:",tips:["Sandbox immer aktiviert in Produktionsumgebungen","API-Keys nur via Umgebungsvariablen – nie in Settings-Dateien einchecken",".geminiignore pflegen: .env*, secrets/, credentials/ ausschließen","Trusted Folders minimal halten – nur aktive Projektverzeichnisse","Policy Engine für Shell-Befehle konfigurieren (blockedPatterns)","Telemetry in sensiblen Umgebungen deaktivieren","Regelmäßig API-Keys rotieren und Nutzung im Google Cloud Console prüfen"]},{title:"Enterprise Setup",icon:"🏢",content:"Gemini CLI in Unternehmensumgebungen absichern und zentral verwalten.",code:`// /etc/gemini/enterprise-policy.json (zentrale Policy)
{
  "auth": {
    "type": "service-account",
    "keyFile": "/etc/gemini/sa-key.json"
  },
  "allowedModels": ["gemini-2.5-pro"],
  "mandatorySettings": {
    "sandbox": true,
    "telemetry": false
  },
  "dataResidency": "EU",
  "proxy": "https://proxy.firma.de:8080",
  "auditLog": "/var/log/gemini-audit.log"
}`,lang:"json"}]},{title:"📊 Tools Reference",items:[{title:"Eingebaute Tools",icon:"🛠️",content:"Gemini CLI hat folgende eingebaute Tools die es nutzen kann:",table:[["Tool","Beschreibung","Beispiel-Aufruf"],["read_file","Dateiinhalt lesen",'"Zeige mir src/auth.js"'],["write_file","Datei schreiben/überschreiben",'"Erstelle src/utils.ts"'],["edit_file","Datei bearbeiten (Diff)",'"Ändere Zeile 42 in..."'],["shell","Shell-Befehl ausführen",'"Starte den Test-Server"'],["web_search","Google-Suche durchführen",'"Neueste Express.js Docs"'],["web_fetch","URL abrufen",'"Lies https://docs.example.com"'],["list_files","Verzeichnis auflisten",'"Zeige alle .ts Dateien in src/"'],["create_directory","Verzeichnis erstellen",'"Erstelle src/services/"'],["move_file","Datei verschieben",'"Benenne auth.js um zu auth.ts"'],["delete_file","Datei löschen",'"Lösche die alte utils.js"']]},{title:"Tools konfigurieren",icon:"⚙️",content:"Kontrolliere welche eingebauten Tools Gemini CLI nutzen darf.",code:`// settings.json
{
  "tools": {
    "enabled": ["read_file", "write_file", "web_search"],
    "disabled": ["shell", "delete_file"],
    "confirmBeforeUse": ["write_file", "edit_file"]
  }
}

# Tools in der Session anzeigen:
/tools`,lang:"json"}]},{title:"❓ Ressourcen & Support",items:[{title:"FAQ – Häufige Fragen",icon:"❓",content:"",table:[["Frage","Antwort"],["Ist Gemini CLI kostenlos?","Ja, mit Google-Account für persönliche Nutzung. Enterprise-Nutzung über API-Key ist kostenpflichtig."],["Welche Node.js Version brauche ich?","Mindestens Node.js 18.0.0"],["Werden meine Daten gespeichert?","Sessions lokal in ~/.gemini/. Anfragen gehen an Google Server. Telemetry kann deaktiviert werden."],["Funktioniert es Offline?","Nein, Gemini CLI benötigt eine Internetverbindung für das Modell."],["Wie groß darf mein Projekt sein?","Bis zu 1 Million Tokens Kontext. Mit .geminiignore und contextWindowSizeMB kontrollierbar."],["Kann ich mehrere Modelle nutzen?","Ja, per /model MODELL-NAME in der Session oder per Model Routing in settings.json."]]},{title:"Troubleshooting",icon:"🔍",content:"Häufige Probleme und ihre Lösungen:",table:[["Problem","Ursache","Lösung"],["gemini: command not found","Globale npm-Pakete nicht im PATH","npm config get prefix → Pfad zu $PATH hinzufügen"],["Authentication failed","Session abgelaufen oder falscher Account","gemini --logout; gemini --login"],["Quota exceeded","Zu viele Anfragen","Model Routing aktivieren oder API-Key mit höherem Limit nutzen"],["Context window full","Zu viele Dateien im Kontext",".geminiignore erweitern; /compress nutzen"],["MCP server not connecting","Falscher Pfad oder fehlende Berechtigungen","/tools prüfen; debug: DEBUG=gemini:* gemini"],["Editor öffnet sich beim Start","Kein $EDITOR gesetzt","export EDITOR=nano oder export EDITOR=code"]]},{title:"Uninstall",icon:"🗑️",content:"Gemini CLI vollständig deinstallieren:",code:`# CLI deinstallieren:
npm uninstall -g @google/gemini-cli

# Lokale Daten löschen (Sessions, Settings, Memory):
rm -rf ~/.gemini

# Projektspezifische Daten:
rm -rf .gemini GEMINI.md .geminiignore

# Umgebungsvariablen aus .bashrc/.zshrc entfernen:
# GEMINI_API_KEY, GEMINI_MODEL, etc.`,lang:"bash"}]},{title:"🛠️ Development & Contributing",items:[{title:"Lokale Entwicklungsumgebung",icon:"💻",content:"Richte eine lokale Entwicklungsumgebung für Gemini CLI Contributions ein.",code:`# Repository klonen:
git clone https://github.com/google/gemini-cli
cd gemini-cli

# Dependencies installieren:
npm install

# Build erstellen:
npm run build

# Lokal testen:
node packages/cli/dist/index.js

# Tests ausführen:
npm test
npm run test:integration

# Watch Mode für Entwicklung:
npm run dev`,lang:"bash"},{title:"NPM Package Struktur",icon:"📦",content:"Gemini CLI ist als Monorepo aufgebaut:",table:[["Paket","Beschreibung"],["packages/cli","Hauptpaket – CLI-Interface und User-Experience"],["packages/core","Kernlogik – Model-Communication, Session Management"],["packages/tools","Eingebaute Tools (read_file, shell, web_search, etc.)"],["packages/extensions","Extension-System für Drittanbieter-Tools"],["packages/mcp","Model Context Protocol Client-Implementierung"]]},{title:"Contribution Guide",icon:"🤝",content:"So trägst du zu Gemini CLI bei:",tips:["Issue auf GitHub eröffnen und diskutieren bevor du einen großen PR erstellst","Tests schreiben für jede neue Feature (Coverage > 80%)","Conventional Commits nutzen: feat:, fix:, docs:, test:","TypeScript strict mode – keine any Types ohne Begründung","Dokumentation in docs/ aktualisieren bei neuen Features","Breaking Changes in BREAKING-CHANGES.md dokumentieren","PR-Template vollständig ausfüllen"]},{title:"Integration Testing",icon:"🧪",content:"So führst du Integrationstests durch:",code:`# Integrationstests erfordern einen echten API-Key:
export GEMINI_API_KEY="dein-test-key"

# Alle Integrationstests:
npm run test:integration

# Bestimmte Test-Suite:
npm run test:integration -- --grep "MCP"
npm run test:integration -- --grep "file management"

# Mit detailliertem Output:
npm run test:integration -- --verbose

# E2E-Tests:
npm run test:e2e`,lang:"bash"}]}]},G={title:"🧠 CodeWiki – Gemini CLI Referenz",intro:"Das ultimative Glossar für alle Befehle, Konzepte und Konfigurationen von Gemini CLI.",categories:[{name:"Grundlagen",items:[{term:"CLI",definition:"Command Line Interface – Die textbasierte Schnittstelle zur Kommunikation mit Gemini."},{term:"Interactive Mode",definition:"Der Standard-Modus von Gemini CLI, in dem ein Dialog geführt wird."},{term:"Headless Mode",definition:"Ausführung ohne Dialog, ideal für Scripts und CI/CD (--headless oder -p)."},{term:"Sandbox",definition:"Eine isolierte Umgebung zur sicheren Ausführung von Shell-Befehlen."},{term:"Token",definition:"Die kleinste Einheit der Textverarbeitung. Ein Wort besteht oft aus mehreren Tokens."}]},{name:"Konfiguration",items:[{term:"settings.json",definition:"Die zentrale Konfigurationsdatei (~/.gemini/settings.json)."},{term:"GEMINI.md",definition:"Projektspezifischer Kontext, der automatisch geladen wird."},{term:".geminiignore",definition:"Dateien/Ordner, die vom Kontext ausgeschlossen werden sollen."},{term:"trustedFolders",definition:"Verzeichnisse, in denen Gemini uneingeschränkt Shell-Befehle ausführen darf."},{term:"thinkingBudget",definition:'Parameter, der steuert, wie viel Zeit sich das Modell zum "Nachdenken" nimmt.'}]},{name:"Features & Begriffe",items:[{term:"MCP",definition:"Model Context Protocol – Standard zur Anbindung externer Datenquellen (Tools)."},{term:"Memory",definition:"Persistente Fakten, die sich Gemini über Sessions hinweg merkt (/memory)."},{term:"Checkpoint",definition:"Ein Snapshot des aktuellen Zustands und des Dateisystems (/checkpoint)."},{term:"Rewind",definition:"Rückgängigmachen von Änderungen und Zurückspringen in der Historie (/rewind)."},{term:"Subagent",definition:"Spezialisierte KI-Instanzen für Teilaufgaben (Code-Review, Tests)."},{term:"Context Window",definition:"Der maximale Textanteil (Tokens), den Gemini gleichzeitig verarbeiten kann (bis zu 1M)."}]},{name:"Wichtige Commands",items:[{term:"/help",definition:"Zeigt alle verfügbaren Slash-Befehle an."},{term:"/tools",definition:"Listet alle aktiven Werkzeuge (Filesystem, Web, MCP) auf."},{term:"/plan",definition:"Schaltet den Plan-Modus ein/aus für sicherere Refactorings."},{term:"/stats",definition:"Zeigt Token-Verbrauch und geschätzte Kosten an."},{term:"/compress",definition:"Komprimiert den bisherigen Chatverlauf um Token zu sparen."}]}]},L={title:"📍 Lernpfad – Claude Code",intro:"Ihr strukturierter Weg vom ersten Befehl bis zur vollständigen KI-nativen Entwicklung.",steps:[{num:1,title:"Installation & Umgebung",desc:"Claude Code lässt sich auf allen Plattformen installieren. Optimieren Sie Ihre Shell für beste Ergebnisse.",code:`curl -fsSL https://claude.ai/install.sh | bash

# macOS mit Homebrew:
brew install --cask claude-code

# Windows mit WinGet:
winget install Anthropic.ClaudeCode`,lang:"bash",chips:[{label:"Installation",url:"https://code.claude.com/docs/de/quickstart"}]},{num:2,title:"Anmelden & Authentifizierung",desc:"Starten Sie Claude Code und verbinden Sie Ihren Anthropic-Account.",code:`claude

# Oder direkt anmelden:
/login

# Anmeldeoptionen:
# - Claude Pro/Max/Teams
# - Claude Console (API-Key)
# - Bedrock / Vertex AI`,lang:"bash",chips:[{label:"Auth-Doku",url:"https://code.claude.com/docs/de/authentication"}]},{num:3,title:"Erste Session starten",desc:"Navigieren Sie zu Ihrem Projekt und starten Sie die interaktive REPL.",code:`cd /pfad/zu/ihrem/projekt
claude

# Erste Fragen:
"What does this codebase do?"
"Explain the project architecture"`,lang:"bash",chips:[{label:"Quickstart",url:"https://code.claude.com/docs/de/quickstart"}]},{num:4,title:"Slash-Befehle & Navigation",desc:'Tippe "/" für eingebaute Befehle zur Steuerung der Session.',code:`/help           # Alle Befehle
/clear          # Kontext leeren
/compact        # Kontext zusammenfassen
/memory         # Projekt-Erinnerungen
/mcp            # MCP-Verbindungen
/bug            # Problem melden
/exit           # Beenden`,lang:"bash",chips:[{label:"Referenz",url:"https://code.claude.com/docs/de/cli-reference"}]},{num:5,title:"CLAUDE.md – Projektgedächtnis",desc:"Dauerhafte Anweisungen für Ihr Projekt hinterlegen.",code:`cat > CLAUDE.md << EOF
## Projekt: MeinProjekt

## Tech-Stack
- Node.js 20 + TypeScript 5
- React 18 + Vite

## Coding-Regeln
- Immer TypeScript, kein 'any'
- Konventionelle Commits (feat:, fix:)
- Deutsche Kommentare bevorzugt
EOF`,lang:"markdown",chips:[{label:"Memory Guide",url:"https://code.claude.com/docs/de/memory"}]},{num:6,title:"Code-Bearbeitung & Iteration",desc:"Beauftragen Sie Claude mit Änderungen und reviewen Sie die Diffs.",code:`# Interaktiv:
"Add a new API endpoint for user registration"
"Refactor the authentication logic to use JWT"

# Claude zeigt Diffs an:
# → [y] Approve
# → [n] Reject
# → [s] Skip`,lang:"bash",chips:[{label:"Coding Workflow",url:"https://code.claude.com/docs/de/common-workflows#coding"}]},{num:7,title:"Git-Automatisierung",desc:"Commits, Branches und PR-Beschreibungen automatisch generieren.",code:`claude commit
# Generiert eine semantische Commit-Message basierend auf Diffs

claude "create a PR for my changes"
# Erstellt einen PR mit Beschreibung`,lang:"bash",chips:[{label:"Git Docs",url:"https://code.claude.com/docs/de/common-workflows#git"}]},{num:8,title:"MCP-Ecosystem meistern",desc:"Verbinde externe Tools (GitHub, DB, Slack) über das Model Context Protocol.",code:`# GitHub verbinden:
claude mcp add github -e GITHUB_TOKEN=$GITHUB_TOKEN -- \\
  npx -y @modelcontextprotocol/server-github

# PostgreSQL verbinden:
claude mcp add postgres -e DATABASE_URL=$DB_URL -- \\
  npx -y @modelcontextprotocol/server-postgres`,lang:"bash",chips:[{label:"MCP Setup",url:"https://code.claude.com/docs/de/mcp"}]},{num:9,title:"Hooks & Automatisierung",desc:"Event-basierte Hooks konfigurieren für CI/CD und lokale Skripte.",code:`// settings.json
{
  "hooks": {
    "Stop": [{
      "hooks": [{
        "type": "command",
        "command": "notify-send 'Claude' 'Aufgabe abgeschlossen'"
      }]
    }]
  }
}`,lang:"json",chips:[{label:"Hooks Docs",url:"https://code.claude.com/docs/de/hooks"}]},{num:10,title:"Expertise: Skills & Agents",desc:"Eigene Slash-Befehle als Skills erstellen und parallele Agents nutzen.",code:`# .claude/skills/review.md
---
description: "Führt einen Code-Review durch"
---
Reviewe die aktuellen Änderungen in {{ $1 || "." }} auf:
1. Security-Issues
2. Performance-Flaschenhälse
3. Code-Style nach CLAUDE.md`,lang:"markdown",chips:[{label:"Skills & Agents",url:"https://code.claude.com/docs/de/skills"}]}]},B={title:"📦 Module – Claude Code",intro:"Vertiefende Einheiten zu allen wichtigen Claude Code-Themen.",groups:[{title:"⚙️ Konfiguration & Setup",items:[{title:"settings.json Referenz",icon:"🔧",content:"Globale (~/.claude/settings.json) und projektbezogene (.claude/settings.json) Einstellungen.",code:`{
  "permissions": {
    "defaultMode": "default" // default, plan, power
  },
  "model": "claude-sonnet-3-5",
  "autoMemory": true,
  "theme": "dark"
}`,lang:"json"},{title:"Berechtigungs-Modi",icon:"🔐",content:"Steuern Sie die Sicherheit durch verschiedene Berechtigungsstufen.",table:[["Modus","Bedeutung","Verwendung"],["default","Fragt bei riskanten Aktionen","Standard Entwicklung"],["plan","Nur Analyse, kein Schreibzugriff","Architektur-Review"],["power","Reduzierte Nachfragen (Vorsicht!)","Erfahrene Nutzer"]],code:"claude --permission-mode plan"},{title:"Shell-Optimierung",icon:"🐚",content:"Tipps für die Integration in Zsh, Bash oder Fish.",code:`# Alias für schnellen Start
alias c="claude"

# Letzte Sitzung fortsetzen
alias cr="claude -c"`,lang:"bash"}]},{title:"✨ Kern-Features",items:[{title:"Thinking Mode 🧠",icon:"🧠",content:"Extended Thinking ermöglicht es Claude, komplexe Probleme tiefer zu durchdenken (Extended Thinking).",code:`claude --betas interleaved-thinking

# In settings.json aktivieren:
{ "thinkingMode": true }`,lang:"bash"},{title:"Auto-Memory 💾",icon:"💾",content:"Claude speichert Erkenntnisse über Ihre Präferenzen und das Projekt automatisch in einem lokalen Speicher.",code:`/memory list   # Alle gespeicherten Erkenntnisse anzeigen
/memory clear  # Speicher leeren`,lang:"bash"},{title:"Sitzungs-Management 🔄",icon:"🔄",content:"Verwalten Sie mehrere Sitzungen und setzen Sie diese jederzeit fort.",code:`claude --list-sessions
claude --resume "feature-auth"
claude --rename "refactoring-db"`,lang:"bash"}]},{title:"🔌 MCP & Integrationen",items:[{title:"MCP Server Basics",icon:"🔌",content:"Model Context Protocol Server erweitern Claudes Fähigkeiten um externe Tools.",code:`claude mcp list
claude mcp status my-server`,lang:"bash"},{title:"Eigene MCP Server",icon:"🛠️",content:"Entwickeln Sie eigene MCP-Server mit dem offiziellen SDK.",chips:[{label:"MCP SDK",url:"https://github.com/modelcontextprotocol"}]}]}]},R={title:"🎓 Kurse – Claude Code",intro:"Strukturierte Lerneinheiten für den professionellen Einsatz von Claude Code.",items:[{id:"kurs-1",badge:"Anfänger",icon:"⚡",duration:"45 Min",title:"Claude Code Schnellstart",description:"In 10 Schritten von der Installation zur ersten produktiven Sitzung.",lernziele:["Installation & Auth meistern","REPL-Navigation verstehen","Erste Codeänderungen mit Diffs durchführen","Git-Integration nutzen"],content:[{step:"Installation",code:"curl -fsSL https://claude.ai/install.sh | bash",lang:"bash"},{step:"Authentifizierung",code:"claude /login",lang:"bash"},{step:"Projekt-Analyse",code:'claude "Explain the main entry point and dependencies"',lang:"bash"},{step:"Feature-Implementierung",code:'claude "Add a hello world endpoint"',lang:"bash"},{step:"Diff-Approval",code:"# [y] drücken zum Bestätigen",lang:"text"},{step:"Commit erstellen",code:"claude commit",lang:"bash"}]},{id:"kurs-2",badge:"Fortgeschritten",icon:"🔌",duration:"60 Min",title:"Mastering MCP – Tools verbinden",description:"Claude Code mit Datenbanken, APIs und Cloud-Services verbinden.",lernziele:["MCP-Konzept verstehen","GitHub & PostgreSQL integrieren","Security-Policies für MCP konfigurieren"],content:[{step:"GitHub MCP Setup",code:"claude mcp add github ...",lang:"bash"},{step:"Queries via Claude",code:'claude "List all open PRs waiting for my review"',lang:"bash"},{step:"Postgres MCP Setup",code:"claude mcp add postgres ...",lang:"bash"},{step:"DB-Analyse",code:'claude "Find the slow queries in our database"',lang:"bash"}]},{id:"kurs-3",badge:"Experte",icon:"🤖",duration:"90 Min",title:"Agentic Workflows & Automation",description:"Bauen Sie automatisierte Pipelines und eigene Skills für Ihr Team.",lernziele:["Custom Skills entwickeln","Hooks für CI/CD nutzen","Parallele Agents orchestrieren"],content:[{step:"Custom Skill Erstellung",code:`# .claude/skills/audit.md
---
description: "Security Audit"
---
Prüfe {{ $1 }} auf Vulnerabilities.`,lang:"markdown"},{step:"CI Hook Setup",code:`// settings.json
"hooks": { "SessionStart": [...] }`,lang:"json"},{step:"Parallel Agent Task",code:'claude "Use parallel agents to implement Feature A and B"',lang:"bash"}]}]},$={title:"🧪 Codelabs – Claude Code",intro:"Interaktive Praxis-Übungen direkt im Browser-Editor.",items:[{id:"lab-1",badge:"Anfänger",icon:"🎯",duration:"30 Min",title:"Codelab: Mein erster Claude-Edit",goal:"Lerne wie Claude Code Dateien liest, Änderungen vorschlägt und diese nach deiner Freigabe schreibt.",steps:[{title:"Datei erstellen",code:'echo "function add(a, b) { return a + b; }" > math.js',lang:"bash"},{title:"Claude beauftragen",code:'claude "Add documentation and input validation to math.js"',lang:"bash"},{title:"Resultat prüfen",code:"cat math.js",lang:"bash"}]},{id:"lab-2",badge:"Fortgeschritten",icon:"🔧",duration:"45 Min",title:"Codelab: Refactoring Legacy Code",goal:"Nutze Claude Code um ein altes Modul zu modernisieren und Tests hinzuzufügen.",steps:[{title:"Analyse",code:'claude "Explain the logic in legacy-module.js"',lang:"bash"},{title:"Modernisierung",code:'claude "Refactor legacy-module.js to use TypeScript and ES Modules"',lang:"bash"},{title:"Testing",code:'claude "Write unit tests for the refactored module and run them"',lang:"bash"}]}]},N={title:"📖 Tutorials – Claude Code",intro:"Best Practices, Tipps und vollständige Befehlsreferenz.",groups:[{title:"🧠 Mentale Modelle",items:[{title:"Vom Coder zum Architekten",icon:"🤝",content:"Betrachten Sie Claude Code als einen extrem schnellen Junior-Entwickler. Sie geben die Richtung vor, Claude führt aus.",tips:["Seien Sie spezifisch bei Anweisungen","Reviewen Sie jeden Diff sorgfältig","Nutzen Sie CLAUDE.md für dauerhafte Regeln"]}]},{title:"⌨️ CLI Referenz",items:[{title:"Alle Befehle auf einen Blick",icon:"⌨️",content:"Die wichtigsten Kommandozeilen-Befehle und ihre Wirkung.",table:[["Befehl","Beschreibung"],["claude","Interaktive REPL starten"],['claude -p "Prompt"',"Einmalige Antwort (Headless)"],["claude -c","Letzte Sitzung fortsetzen"],["claude commit","Geführter Commit-Dialog"],["claude mcp add","Neuen MCP Server hinzufügen"],["claude skill add","Neuen Skill hinzufügen"]]},{title:"Keyboard Shortcuts",icon:"⚡",content:"Produktivitäts-Shortcuts in der REPL.",table:[["Shortcut","Aktion"],["Ctrl+C","Abbrechen / Leeren"],["Ctrl+D","Beenden"],["Shift+Tab","Thinking Mode umschalten"],["↑ / ↓","Befehls-Historie"]]}]}]},F={title:"🧠 CodeWiki – Claude Code",intro:"Das ultimative Glossar für alle Begriffe rund um Claude Code.",categories:[{name:"Grundlagen",items:[{term:"Agentic Coding",definition:"Die Fähigkeit der KI, aktiv Code zu schreiben, Tests auszuführen und Shell-Befehle zu nutzen, um ein Ziel zu erreichen."},{term:"REPL",definition:"Read-Eval-Print-Loop: Die interaktive Kommandozeilen-Schnittstelle von Claude Code."},{term:"Diff",definition:"Der Unterschied zwischen dem aktuellen Code und der von Claude vorgeschlagenen Änderung."}]},{name:"Konzepte & Files",items:[{term:"CLAUDE.md",definition:"Die zentrale Konfigurationsdatei für projektweite Anweisungen, Coding-Styles und Architektur-Regeln."},{term:"settings.json",definition:"Globale Konfigurationsdatei für Benutzerpräferenzen wie Themes, Modelle und Berechtigungen."},{term:"MCP",definition:"Model Context Protocol – Ein offener Standard zur Anbindung externer Tools an KI-Modelle."}]},{name:"Security & Control",items:[{term:"Permission Mode",definition:"Sicherheitsstufen (default, plan, power), die festlegen, wie oft Claude nach Erlaubnis fragen muss."},{term:"Sandbox",definition:"Eine isolierte Umgebung, in der Claude riskante Befehle sicher ausführen kann."}]}]};let u=localStorage.getItem("topic")||"gemini";const h={gemini:{title:"Gemini CLI",install:"npm install -g @google/gemini-cli",content:{lernpfad:A,module:x,kurse:T,codelabs:j,tutorials:D,codewiki:G}},"claude-spa":{title:"Claude Code (Basic)",install:"curl -fsSL https://claude.ai/install.sh | bash",content:{lernpfad:L,module:B,kurse:R,codelabs:$,tutorials:N,codewiki:F}}};window.switchTopic=function(e){if(e==="antigravity"){window.location.href="/Antigravity/index.html";return}u=e,localStorage.setItem("topic",e),document.body.setAttribute("data-topic",e),document.getElementById("sidebar-title").textContent=h[e].title,document.title=`${h[e].title} Learning Portal`,window.location.hash="home",f()};document.body.setAttribute("data-topic",u);window.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("topic-select");e&&(e.value=u),document.getElementById("sidebar-title").textContent=h[u].title});function m(){return h[u].content}function p(e,n="bash"){return`<div class="code-block">
        <div class="code-header">
            <span class="code-lang">${n}</span>
            <div class="code-actions">
                <button class="try-btn" onclick="injectToEditor(this)">⚡ Probieren</button>
                <button class="copy-btn" onclick="copyCode(this)">📋 Kopieren</button>
            </div>
        </div>
        <pre><code class="lang-${n}">${K(e)}</code></pre>
    </div>`}function K(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function O(e=[]){return e.map(n=>`<a class="chip" href="${n.url}" target="_blank" rel="noopener">${n.label}</a>`).join("")}function k(e=[]){return`<ul class="tip-list">${e.map(n=>`<li>✅ ${n}</li>`).join("")}</ul>`}function v(e=[]){const[n,...s]=e,i=n.map(r=>`<th>${r}</th>`).join(""),t=s.map(r=>`<tr>${r.map(o=>`<td>${o}</td>`).join("")}</tr>`).join("");return`<table class="info-table"><thead><tr>${i}</tr></thead><tbody>${t}</tbody></table>`}function _(){const e=m().lernpfad,n=e.steps.map(s=>`
        <div class="path-step">
            <div class="step-num">${s.num}</div>
            <div class="step-body">
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
                ${s.code?p(s.code,s.lang):""}
                ${O(s.chips)}
            </div>
        </div>`).join("");return`<section class="animate-fade">
        <h1>${e.title}</h1>
        <p class="section-desc">${e.intro}</p>
        <div class="path-list">${n}</div>
    </section>`}function H(){const e=m().module,n=e.groups.map(s=>{const i=s.items.map(t=>`
            <div class="module-card">
                <div class="module-icon">${t.icon}</div>
                <div class="module-body">
                    <h3>${t.title}</h3>
                    <p>${t.content}</p>
                    ${t.code?p(t.code,t.lang):""}
                    ${t.tips?k(t.tips):""}
                    ${t.table?v(t.table):""}
                </div>
            </div>`).join("");return`<h2>${s.title}</h2><div class="module-list">${i}</div>`}).join("");return`<section class="animate-fade">
        <h1>${e.title}</h1>
        <p class="section-desc">${e.intro}</p>
        ${n}
    </section>`}function S(e=null){const n=m().kurse;if(e){const i=n.items.find(r=>r.id===e);if(!i)return S();const t=i.content.map(r=>`
            <div class="tutorial-step">
                <div class="step-label">Schritt</div>
                <div class="step-content-body">
                    <h4>${r.step}</h4>
                    ${p(r.code,r.lang)}
                </div>
            </div>`).join("");return`<section class="animate-fade">
            <button class="back-btn" onclick="navigate('kurse')">← Zurück zu Kursen</button>
            <div class="kurs-badge-row"><span class="badge">${i.badge}</span><span class="duration">⏱️ ${i.duration}</span></div>
            <h1>${i.icon} ${i.title}</h1>
            <p class="section-desc">${i.description}</p>
            <div class="lernziele">
                <h3>🎯 Lernziele</h3>
                <ul>${i.lernziele.map(r=>`<li>${r}</li>`).join("")}</ul>
            </div>
            <h3 style="margin-top:2rem;">📋 Schritt für Schritt</h3>
            <div class="tutorial-steps">${t}</div>
            ${C("kurse",e,n.items)}
        </section>`}const s=n.items.map(i=>`
        <div class="card kurs-card" onclick="navigate('kurse', '${i.id}')">
            <span class="badge">${i.badge}</span>
            <div class="kurs-card-icon">${i.icon}</div>
            <h3>${i.title}</h3>
            <p>${i.description}</p>
            <span class="duration">⏱️ ${i.duration}</span>
        </div>`).join("");return`<section class="animate-fade">
        <h1>${n.title}</h1>
        <p class="section-desc">${n.intro}</p>
        <div class="content-grid">${s}</div>
    </section>`}function C(e,n,s){const i=s.findIndex(o=>o.id===n),t=s[i-1],r=s[i+1];return`<div class="step-nav">
        ${t?`<button class="nav-btn prev" onclick="navigate('${e}', '${t.id}')">← ${t.title}</button>`:"<div></div>"}
        ${r?`<button class="nav-btn next" onclick="navigate('${e}', '${r.id}')">${r.title} →</button>`:"<div></div>"}
    </div>`}function E(e=null){const n=m().codelabs;if(e){const i=n.items.find(r=>r.id===e);if(!i)return E();const t=i.steps.map((r,o)=>`
            <div class="lab-step">
                <div class="lab-step-num">${o+1}</div>
                <div class="lab-step-body">
                    <h4>${r.title}</h4>
                    ${p(r.code,r.lang)}
                </div>
            </div>`).join("");return`<section class="animate-fade">
            <button class="back-btn" onclick="navigate('codelabs')">← Zurück zu Codelabs</button>
            <div class="kurs-badge-row"><span class="badge">${i.badge}</span><span class="duration">⏱️ ${i.duration}</span></div>
            <h1>${i.icon} ${i.title}</h1>
            <div class="goal-box">🎯 <strong>Ziel:</strong> ${i.goal}</div>
            <div class="lab-steps">${t}</div>
            <div id="editor-wrapper" style="margin-top:3rem;">
                <h2>🖥️ Playground – Probier es aus</h2>
                <div id="editor-container"></div>
            </div>
            ${C("codelabs",e,n.items)}
        </section>`}const s=n.items.map(i=>`
        <div class="card" onclick="navigate('codelabs', '${i.id}')">
            <span class="badge">${i.badge}</span>
            <div class="kurs-card-icon">${i.icon}</div>
            <h3>${i.title}</h3>
            <p style="color:var(--text-secondary);margin-top:.5rem;">${i.goal}</p>
            <span class="duration">⏱️ ${i.duration}</span>
        </div>`).join("");return`<section class="animate-fade">
        <h1>${n.title}</h1>
        <p class="section-desc">${n.intro}</p>
        <div class="content-grid">${s}</div>
    </section>`}function U(){const e=m().tutorials,n=e.groups.map(s=>{const i=s.items.map(t=>`
            <div class="module-card">
                <div class="module-icon">${t.icon}</div>
                <div class="module-body">
                    <h3>${t.title}</h3>
                    <p>${t.content}</p>
                    ${t.table?v(t.table):""}
                    ${t.tips?k(t.tips):""}
                    ${t.code?p(t.code,t.lang):""}
                </div>
            </div>`).join("");return`<h2>${s.title}</h2><div class="module-list">${i}</div>`}).join("");return`<section class="animate-fade">
        <h1>${e.title}</h1>
        <p class="section-desc">${e.intro}</p>
        ${n}
    </section>`}function V(){const e=m().codewiki,n=e.categories.map(s=>{const i=s.items.map(t=>`
            <div class="wiki-item">
                <div class="wiki-term">${t.term}</div>
                <div class="wiki-def">${t.definition}</div>
            </div>`).join("");return`<div class="wiki-cat">
            <h3>${s.name}</h3>
            <div class="wiki-grid">${i}</div>
        </div>`}).join("");return`<section class="animate-fade">
        <div class="hero-badge">Enzyklopädie</div>
        <h1>${e.title}</h1>
        <p class="section-desc">${e.intro}</p>
        <div class="wiki-list">${n}</div>
    </section>`}function W(){const e=h[u];return`<section class="hero animate-fade">
        <div class="hero-badge">${e.title} Lernportal</div>
        <h1>Entfessele ${e.title.split(" ")[0]}<br>in deiner Konsole.</h1>
        <p>Meistere ${e.title} – von der Installation bis zu fertigen KI-Agenten. Mit eigenen Kursen, interaktiven Codelabs und einem Code-Editor direkt im Browser.</p>
        <div class="hero-install"><code>${e.install}</code></div>
        <div class="home-grid">
            <div class="home-card" onclick="navigate('lernpfad')">
                <div class="home-icon">📍</div>
                <h3>Lernpfad</h3>
                <p>Schritt für Schritt Anleitung</p>
            </div>
            <div class="home-card" onclick="navigate('module')">
                <div class="home-icon">📦</div>
                <h3>Module</h3>
                <p>Vertiefende Themen</p>
            </div>
            <div class="home-card" onclick="navigate('kurse')">
                <div class="home-icon">🎓</div>
                <h3>Kurse</h3>
                <p>Strukturierte Lerneinheiten</p>
            </div>
            <div class="home-card" onclick="navigate('codelabs')">
                <div class="home-icon">🧪</div>
                <h3>Codelabs</h3>
                <p>Hands-on Praxis</p>
            </div>
            <div class="home-card" onclick="navigate('tutorials')">
                <div class="home-icon">📖</div>
                <h3>Tutorials</h3>
                <p>Referenz & Best Practices</p>
            </div>
        </div>
        <div id="editor-wrapper" style="margin-top:4rem;">
            <h2>🖥️ Playground – Probier es aus</h2>
            <div id="editor-container"></div>
        </div>
    </section>`}window.navigate=function(e,n=null){window.location.hash=n?`${e}/${n}`:e};window.copyCode=function(e){const n=e.closest(".code-block").querySelector("code").innerText;navigator.clipboard.writeText(n).then(()=>{e.textContent="✅ Kopiert!",setTimeout(()=>e.textContent="📋 Kopieren",2e3)})};window.injectToEditor=function(e){const n=e.closest(".code-block").querySelector("code").innerText;if(window.editorInstance){window.editorInstance.setValue(n);const s=document.getElementById("editor-wrapper");s&&s.scrollIntoView({behavior:"smooth"})}else alert("Editor lädt noch...")};function Z(){const e=window.location.hash.substring(1)||"home",[n,s]=e.split("/");return{section:n,subId:s||null}}function q(e,n){switch(e){case"lernpfad":return _();case"module":return H();case"kurse":return S(n);case"codelabs":return E(n);case"tutorials":return U();case"codewiki":return V();default:return W()}}function f(){const{section:e,subId:n}=Z(),s=document.getElementById("app");s&&(s.innerHTML=q(e,n),window.scrollTo(0,0),document.querySelectorAll(".nav-links a").forEach(i=>{const t=i.getAttribute("href").replace("#","");i.classList.toggle("active",t===e)}),document.getElementById("editor-container")&&J())}window.addEventListener("hashchange",f);window.addEventListener("load",f);async function J(){const e=document.getElementById("editor-container");if(e){e.innerHTML='<div style="padding:20px;color:#94a3b8;">Lädt Editor...</div>';try{const{init:n}=await M(async()=>{const{init:s}=await import("./editor-hNmHkTZF.js").then(i=>i.b);return{init:s}},__vite__mapDeps([0,1]));n(e)}catch(n){console.error("Editor Fehler:",n)}}}export{M as _};
