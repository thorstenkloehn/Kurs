// content-lernpfad.js – Lernpfad + Module

export const lernpfad = {
    title: '📍 Lernpfad – Gemini CLI',
    intro: 'Dein strukturierter Weg von der Installation bis zum Profi-Einsatz.',
    steps: [
        {
            num: 1, title: 'Installation & Masterclass Video',
            desc: 'Gemini CLI wird als globales npm-Paket installiert. Schau dir zuerst dieses Video an, um alle Funktionen von Gemini CLI im Überblick zu sehen.',
            youtube: '9xE2DTxGvTY',
            code: 'npm install -g @google/gemini-cli\n\n# Version prüfen:\ngemini --version',
            lang: 'bash',
            chips: [{ label: 'Installationsdoku', url: 'https://geminicli.com/docs/get-started/installation' }]
        },
        {
            num: 2, title: 'Authentifizierung',
            desc: 'Verbinde deinen Google-Account oder nutze einen API-Key für Enterprise.',
            code: '# Standard: Google OAuth (Browser öffnet sich)\ngemini\n\n# Enterprise / API-Key:\nexport GEMINI_API_KEY="dein-key"\ngemini',
            lang: 'bash',
            chips: [{ label: 'Auth-Docs', url: 'https://geminicli.com/docs/get-started/authentication' }]
        },
        {
            num: 3, title: 'Erste Session',
            desc: 'Starte Gemini CLI im Projektordner – es liest den Kontext automatisch.',
            code: 'cd mein-projekt\ngemini\n\n# Tippe dann z.B.:\n# "Was macht dieses Projekt?"\n# "Schreibe Tests für src/utils.js"',
            lang: 'bash',
            chips: [
                { label: 'Quickstart', url: 'https://geminicli.com/docs/get-started' },
                { label: 'Beispiele', url: 'https://geminicli.com/docs/get-started/examples' }
            ]
        },
        {
            num: 4, title: 'Slash-Befehle',
            desc: 'Tippe "/" für eingebaute Befehle zum Steuern der Session.',
            code: '/help           # Alle Befehle\n/memory         # Erinnerungen verwalten\n/chat list      # Sessions anzeigen\n/chat resume X  # Session X fortsetzen\n/tools          # Verfügbare Tools\n/stats          # Token-Verbrauch\n/quit           # Beenden',
            lang: 'bash',
            chips: [{ label: 'Befehlsreferenz', url: 'https://geminicli.com/docs/reference/commands' }]
        },
        {
            num: 5, title: 'GEMINI.md – Projektkontext',
            desc: 'Lege eine GEMINI.md im Projektstamm an für dauerhaften Kontext.',
            code: 'cat > GEMINI.md << EOF\n# Projektname\n\n## Tech-Stack\n- Node.js + TypeScript\n- Express + Prisma + PostgreSQL\n- Jest für Tests\n\n## Konventionen\n- Async/Await bevorzugen\n- Deutsche Kommentare\n- Error-First Pattern\nEOF',
            lang: 'bash',
            chips: [{ label: 'GEMINI.md Guide', url: 'https://geminicli.com/docs/cli/gemini-md' }]
        },
        {
            num: 6, title: 'Memory Management',
            desc: 'Speichere persistente Fakten damit Gemini sich sie session-übergreifend merkt.',
            code: '# Im interaktiven Modus:\n/memory add "Ich nutze TypeScript, kein JavaScript"\n/memory add "Unser Team nutzt GitFlow"\n/memory list\n/memory remove 2',
            lang: 'bash',
            chips: [{ label: 'Memory Tutorial', url: 'https://geminicli.com/docs/cli/tutorials/memory-management' }]
        },
        {
            num: 7, title: 'Sessions & Checkpoints',
            desc: 'Gemini CLI speichert Sessions automatisch. Setze Checkpoints für komplexe Workflows.',
            code: '# Session-Liste:\ngemini --list-sessions\n\n# Im Dialog:\n/chat list\n/chat resume mein-chat\n\n# Checkpoint setzen:\n/checkpoint save "vor-dem-refactoring"\n/checkpoint list',
            lang: 'bash',
            chips: [{ label: 'Session Management', url: 'https://geminicli.com/docs/cli/tutorials/session-management' }]
        },
        {
            num: 8, title: 'Rewind',
            desc: 'Mache Änderungen rückgängig und springe zu früheren Zuständen zurück.',
            code: '# Zum letzten Checkpoint zurück:\n/rewind\n\n# Zu einem bestimmten Checkpoint:\n/rewind list\n/rewind restore "vor-dem-refactoring"\n\n# Dateien werden dabei auch zurückgesetzt!',
            lang: 'bash',
            chips: [{ label: 'Rewind Docs', url: 'https://geminicli.com/docs/cli/rewind' }]
        },
        {
            num: 9, title: 'Headless Mode & Scripting',
            desc: 'Nutze Gemini CLI in Shell-Skripten und CI/CD-Pipelines ohne interaktiven Dialog.',
            code: '# Direkte Antwort:\ngemini -p "Erstelle Release Notes aus: $(git log --oneline -5)"\n\n# Script-Modus:\ngemini --headless -p "Analysiere src/ auf Sicherheitsprobleme"\n\n# JSON-Output:\ngemini -p "Liste alle Funktionen in src/api.js" --output json',
            lang: 'bash',
            chips: [
                { label: 'Headless Docs', url: 'https://geminicli.com/docs/cli/headless' },
                { label: 'Automation', url: 'https://geminicli.com/docs/cli/tutorials/automation' }
            ]
        },
        {
            num: 10, title: 'MCP Server & Extensions',
            desc: 'Verbinde externe Dienste über das Model Context Protocol und schreibe eigene Extensions.',
            code: '// ~/.gemini/settings.json\n{\n  "mcpServers": {\n    "filesystem": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/home/user"]\n    },\n    "github": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-github"],\n      "env": { "GITHUB_TOKEN": "ghp_..." }\n    }\n  }\n}',
            lang: 'json',
            chips: [
                { label: 'MCP Setup', url: 'https://geminicli.com/docs/cli/tutorials/mcp-setup' },
                { label: 'Extensions', url: 'https://geminicli.com/docs/extensions' }
            ]
        }
    ]
};

export const module = {
    title: '📦 Module',
    intro: 'Alle wichtigen Themen rund um Gemini CLI – vertieft erklärt.',
    groups: [
        {
            title: '⚙️ Konfiguration',
            items: [
                {
                    title: 'settings.json – Die Hauptkonfiguration',
                    icon: '🔧',
                    content: 'Alle Einstellungen landen in <code>~/.gemini/settings.json</code> (global) oder <code>.gemini/settings.json</code> (Projekt). Projekteinstellungen überschreiben globale.',
                    code: '{\n  "theme": "dark",\n  "model": "gemini-2.5-pro",\n  "sandbox": true,\n  "autoSave": true,\n  "contextWindowSizeMB": 10,\n  "tokenCaching": true,\n  "telemetry": false\n}',
                    lang: 'json'
                },
                {
                    title: 'Custom Commands',
                    icon: '⚡',
                    content: 'Erstelle eigene Slash-Befehle in <code>.gemini/commands/</code>. Platzhalter wie <code>{{file}}</code> werden beim Aufruf ersetzt.',
                    code: '# .gemini/commands/review.md\n---\ndescription: Code Review\n---\nReview {{file | "src/"}} auf:\n1. Bugs und Logikfehler\n2. Performance\n3. Sicherheit\n4. Testbarkeit\nSei direkt und konkret.',
                    lang: 'markdown'
                },
                {
                    title: '.geminiignore – Dateien ausschließen',
                    icon: '🚫',
                    content: 'Schließe Dateien aus dem Kontext aus. Identisches Format wie <code>.gitignore</code>.',
                    code: '# .geminiignore\nnode_modules/\ndist/\nbuild/\n.env*\n*.log\n*.lock\ncoverage/\n*.min.js\n*.map\n*.png\n*.jpg',
                    lang: 'text'
                },
                {
                    title: 'Projekt-Kontext: GEMINI.md',
                    icon: '📄',
                    content: 'GEMINI.md wird bei jeder Session automatisch als System-Kontext geladen. Es gibt eine Hierarchie: Global (<code>~/.gemini/GEMINI.md</code>) → Repo-Root → Unterordner.',
                    code: '# GEMINI.md\n## Über das Projekt\nDies ist ein E-Commerce Backend mit Node.js.\n\n## Stack\n- Express.js, Prisma, PostgreSQL\n- Jest, Supertest\n\n## Wichtige Regeln\n- Niemals direkte SQL-Queries – immer Prisma\n- Alle Routen durch AuthMiddleware\n- Logging mit Winston',
                    lang: 'markdown'
                },
                {
                    title: 'Themes',
                    icon: '🎨',
                    content: 'Passe das visuelle Erscheinungsbild von Gemini CLI im Terminal an.',
                    code: '# Im Dialog:\n/theme list       # Alle Themes anzeigen\n/theme dark       # Dark-Theme\n/theme light      # Light-Theme\n/theme monokai    # Monokai\n\n# Oder in settings.json:\n# { "theme": "monokai" }',
                    lang: 'bash'
                },
                {
                    title: 'Model Configuration',
                    icon: '🧪',
                    content: 'Passe Modell-Parameter wie Temperature und Thinking Budget an.',
                    code: '// settings.json\n{\n  "model": "gemini-2.5-pro",\n  "generationSettings": {\n    "temperature": 0.7,\n    "thinkingBudget": "medium",\n    "topP": 0.95,\n    "maxOutputTokens": 8192\n  }\n}',
                    lang: 'json'
                },
                {
                    title: 'Enterprise Configuration',
                    icon: '🏢',
                    content: 'Für Unternehmensumgebungen – zentrale Richtlinien, Proxy-Konfiguration, SSO.',
                    code: '// enterprise-settings.json\n{\n  "auth": { "type": "service-account", "keyFile": "/etc/gemini/key.json" },\n  "proxy": "https://proxy.firma.de:8080",\n  "allowedModels": ["gemini-2.5-pro"],\n  "dataResidency": "EU"\n}',
                    lang: 'json'
                },
                {
                    title: 'Trusted Folders',
                    icon: '🔐',
                    content: 'Steuere, in welchen Verzeichnissen Gemini CLI Shell-Befehle ausführen darf.',
                    code: '// settings.json\n{\n  "trustedFolders": [\n    "/home/user/projekte/mein-app",\n    "/tmp/sandbox"\n  ]\n}',
                    lang: 'json'
                },
                {
                    title: 'System Prompt Override',
                    icon: '🎯',
                    content: 'Überschreibe den Standard-System-Prompt für spezifische Anwendungsfälle.',
                    code: '// settings.json\n{\n  "systemPrompt": "Du bist ein erfahrener TypeScript-Entwickler. Antworte immer auf Deutsch. Bevorzuge funktionale Patterns und unveränderliche Datenstrukturen."\n}',
                    lang: 'json'
                }
            ]
        },
        {
            title: '✨ Features',
            items: [
                {
                    title: 'Agent Skills',
                    icon: '🤖',
                    content: 'Agent Skills sind spezialisierte Agenten für bestimmte Aufgaben – z.B. Code-Review, Dokumentation oder Testing.',
                    code: '# Im Dialog einen Skill aktivieren:\n/skills list\n/skills use code-review\n\n# Eigenen Skill anlegen:\n# .gemini/skills/testwriter.md\n---\nname: testwriter\ndescription: Schreibt Unit-Tests\n---\nAnalysiere die gegebene Funktion und schreibe\nvollständige Jest Tests dafür.',
                    lang: 'bash'
                },
                {
                    title: 'Checkpointing',
                    icon: '💾',
                    content: 'Checkpoints sind automatische Snapshots deiner Session und des Dateisystems. Gemini setzt diese vor riskanten Operationen.',
                    code: '# Manueller Checkpoint:\n/checkpoint save "vor-großem-refactoring"\n\n# Liste:\n/checkpoint list\n\n# Wiederherstellen:\n/checkpoint restore "vor-großem-refactoring"\n\n# Auto-Checkpointing in settings.json:\n# { "autoCheckpoint": true }',
                    lang: 'bash'
                },
                {
                    title: 'Plan Mode 🔬',
                    icon: '📋',
                    content: 'Im Plan Mode plant Gemini CLI Änderungen im Read-Only Modus, bevor es sie ausführt. Ideal für komplexe Code-Transformationen.',
                    code: '# Plan Mode aktivieren:\n/plan on\n\n# Jetzt Aufgaben stellen:\n# "Refactore das gesamte Auth-System auf JWT"\n# Gemini zeigt einen Plan – du musst explizit bestätigen!\n\n# Plan Mode wieder aus:\n/plan off',
                    lang: 'bash'
                },
                {
                    title: 'Headless Mode',
                    icon: '🖥️',
                    content: 'Nutze Gemini CLI ohne interaktiven Dialog – für Scripts, CI/CD und Automatisierung.',
                    code: '# Einfachste Form:\ngemini -p "Meine Frage"\n\n# Mit Datei-Input:\ngemini -p "Erkläre diese Funktion" < src/utils.js\n\n# Output als JSON:\ngemini -p "Liste Abhängigkeiten" --output json\n\n# Timeout setzen:\ngemini -p "Analyse" --timeout 60',
                    lang: 'bash'
                },
                {
                    title: 'IDE Integration',
                    icon: '💡',
                    content: 'Integriere Gemini CLI direkt in VS Code, JetBrains IDEs und andere Editoren.',
                    code: '# VS Code Extension installieren:\ncode --install-extension google.gemini-cli-vscode\n\n# Oder via Terminal aus dem IDE-Terminal:\n# Gemini CLI liest den Editor-Kontext automatisch\n\n# Keyboard Shortcut: Ctrl+Shift+G (Standard)',
                    lang: 'bash'
                },
                {
                    title: 'Model Selection',
                    icon: '🎯',
                    content: 'Wähle das passende Modell für deine Aufgabe.',
                    table: [
                        ['Modell', 'Stärke', 'Empfohlen für'],
                        ['gemini-2.5-pro', 'Höchste Qualität, 1M Token Kontext', 'Große Codebasen, komplexe Analyse'],
                        ['gemini-2.5-flash', 'Schnell, günstig', 'Quick-Fixes, einfache Fragen'],
                        ['gemini-2.0-flash', 'Ausgewogen', 'Tägliche Entwicklung']
                    ]
                },
                {
                    title: 'Model Routing',
                    icon: '🔀',
                    content: 'Gemini CLI kann automatisch zwischen Modellen wechseln – z.B. bei Quota-Überschreitung.',
                    code: '// settings.json\n{\n  "modelRouting": {\n    "enabled": true,\n    "fallbackModel": "gemini-2.5-flash",\n    "retryOnQuotaExceeded": true\n  }\n}',
                    lang: 'json'
                },
                {
                    title: 'Token Caching',
                    icon: '⚡',
                    content: 'Token Caching spart bis zu 75% der Kosten bei wiederholten Anfragen mit ähnlichem Kontext.',
                    code: '// settings.json\n{\n  "tokenCaching": true,\n  "cacheStrategy": "aggressive"\n}\n\n# Statistiken anzeigen:\n/stats\n# → Zeigt: Tokens genutzt, gecacht, gespart',
                    lang: 'json'
                },
                {
                    title: 'Rewind',
                    icon: '⏪',
                    content: 'Gemini CLI kann Dateiänderungen rückgängig machen und die Session zu einem früheren Punkt zurückspulen.',
                    code: '# Letzten Schritt rückgängig:\n/rewind\n\n# Zu benanntem Checkpoint:\n/rewind restore "checkpoint-name"\n\n# ⚠️ Vorsicht: Auch Dateiänderungen werden rückgesetzt!',
                    lang: 'bash'
                },
                {
                    title: 'Sandboxing',
                    icon: '🛡️',
                    content: 'Im Sandbox-Modus werden Shell-Befehle in einer isolierten Umgebung ausgeführt.',
                    code: '// settings.json\n{\n  "sandbox": true,\n  "sandboxConfig": {\n    "allowNetwork": false,\n    "allowedPaths": ["/home/user/projekt"],\n    "maxCPU": "50%",\n    "maxMemory": "512MB"\n  }\n}',
                    lang: 'json'
                },
                {
                    title: 'Telemetry',
                    icon: '📊',
                    content: 'Gemini CLI sammelt optional Usage-Metriken. Du kannst es vollständig deaktivieren.',
                    code: '// Telemetry deaktivieren:\n// settings.json\n{\n  "telemetry": false\n}\n\n// Oder via Umgebungsvariable:\nexport GEMINI_TELEMETRY=false',
                    lang: 'json'
                },
                {
                    title: 'Subagents 🔬',
                    icon: '🤝',
                    content: 'Subagents sind spezialisierte Instanzen die Gemini CLI für Teilaufgaben aufruft – z.B. einen Code-Analyse-Agenten.',
                    code: '# Subagent direkt ansprechen:\n/agent use code-analyzer\n\n# In GEMINI.md konfigurieren:\n## Subagents\n- code-analyzer: für Sicherheitsanalysen\n- doc-writer: für Dokumentation\n- test-gen: for Test-Generierung',
                    lang: 'bash'
                },
                {
                    title: 'Remote Subagents 🔬',
                    icon: '🌐',
                    content: 'Verbinde externe KI-Agenten über MCP als Remote Subagents.',
                    code: '// settings.json\n{\n  "remoteAgents": [\n    {\n      "name": "code-expert",\n      "url": "https://mein-agent.beispiel.de/mcp",\n      "apiKey": "ra_..."\n    }\n  ]\n}',
                    lang: 'json'
                }
            ]
        },
        {
            title: '🔌 Extensions & MCP',
            items: [
                {
                    title: 'MCP Server einrichten',
                    icon: '🌐',
                    content: 'MCP (Model Context Protocol) verbindet externe Dienste mit Gemini CLI. Viele Server sind als npm-Pakete verfügbar.',
                    code: '// settings.json\n{\n  "mcpServers": {\n    "filesystem": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/"]\n    },\n    "github": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-github"],\n      "env": { "GITHUB_TOKEN": "ghp_..." }\n    },\n    "postgres": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/db"]\n    }\n  }\n}',
                    lang: 'json'
                },
                {
                    title: 'Eigene Extensions schreiben',
                    icon: '🛠️',
                    content: 'Eine Extension ist ein npm-Paket das Tools für Gemini CLI bereitstellt.',
                    code: '// meine-extension/index.js\nexport default {\n  tools: [\n    {\n      name: "deploy_to_staging",\n      description: "Deployed die App in die Staging-Umgebung",\n      parameters: {\n        branch: { type: "string", description: "Branch-Name" }\n      },\n      async execute({ branch }) {\n        const { execSync } = await import("child_process");\n        const result = execSync(`git push staging ${branch}`);\n        return { success: true, output: result.toString() };\n      }\n    }\n  ]\n};',
                    lang: 'javascript'
                },
                {
                    title: 'Hooks',
                    icon: '🪝',
                    content: 'Hooks sind Skripte die Gemini CLI vor/nach bestimmten Ereignissen ausführt.',
                    code: '// .gemini/hooks.json\n{\n  "beforeExecute": {\n    "shell": "npm run lint 2>&1 || true"\n  },\n  "afterWrite": {\n    "shell": "prettier --write {{file}}"\n  },\n  "afterSession": {\n    "shell": "git add -p"\n  }\n}',
                    lang: 'json'
                }
            ]
        }
    ]
};
