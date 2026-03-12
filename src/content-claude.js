// content-claude.js – Unified content for Claude Code

export const lernpfad = {
    title: '📍 Lernpfad – Claude Code',
    intro: 'Ihr strukturierter Weg vom ersten Befehl bis zur vollständigen KI-nativen Entwicklung.',
    steps: [
        {
            num: 1, title: 'Installation & Umgebung',
            desc: 'Claude Code lässt sich auf allen Plattformen installieren. Optimieren Sie Ihre Shell für beste Ergebnisse.',
            code: 'curl -fsSL https://claude.ai/install.sh | bash\n\n# macOS mit Homebrew:\nbrew install --cask claude-code\n\n# Windows mit WinGet:\nwinget install Anthropic.ClaudeCode',
            lang: 'bash',
            chips: [{ label: 'Installation', url: 'https://code.claude.com/docs/de/quickstart' }]
        },
        {
            num: 2, title: 'Anmelden & Authentifizierung',
            desc: 'Starten Sie Claude Code und verbinden Sie Ihren Anthropic-Account.',
            code: 'claude\n\n# Oder direkt anmelden:\n/login\n\n# Anmeldeoptionen:\n# - Claude Pro/Max/Teams\n# - Claude Console (API-Key)\n# - Bedrock / Vertex AI',
            lang: 'bash',
            chips: [{ label: 'Auth-Doku', url: 'https://code.claude.com/docs/de/authentication' }]
        },
        {
            num: 3, title: 'Erste Session starten',
            desc: 'Navigieren Sie zu Ihrem Projekt und starten Sie die interaktive REPL.',
            code: 'cd /pfad/zu/ihrem/projekt\nclaude\n\n# Erste Fragen:\n"What does this codebase do?"\n"Explain the project architecture"',
            lang: 'bash',
            chips: [{ label: 'Quickstart', url: 'https://code.claude.com/docs/de/quickstart' }]
        },
        {
            num: 4, title: 'Slash-Befehle & Navigation',
            desc: 'Tippe "/" für eingebaute Befehle zur Steuerung der Session.',
            code: '/help           # Alle Befehle\n/clear          # Kontext leeren\n/compact        # Kontext zusammenfassen\n/memory         # Projekt-Erinnerungen\n/mcp            # MCP-Verbindungen\n/bug            # Problem melden\n/exit           # Beenden',
            lang: 'bash',
            chips: [{ label: 'Referenz', url: 'https://code.claude.com/docs/de/cli-reference' }]
        },
        {
            num: 5, title: 'CLAUDE.md – Projektgedächtnis',
            desc: 'Dauerhafte Anweisungen für Ihr Projekt hinterlegen.',
            code: 'cat > CLAUDE.md << EOF\n## Projekt: MeinProjekt\n\n## Tech-Stack\n- Node.js 20 + TypeScript 5\n- React 18 + Vite\n\n## Coding-Regeln\n- Immer TypeScript, kein \'any\'\n- Konventionelle Commits (feat:, fix:)\n- Deutsche Kommentare bevorzugt\nEOF',
            lang: 'markdown',
            chips: [{ label: 'Memory Guide', url: 'https://code.claude.com/docs/de/memory' }]
        },
        {
            num: 6, title: 'Code-Bearbeitung & Iteration',
            desc: 'Beauftragen Sie Claude mit Änderungen und reviewen Sie die Diffs.',
            code: '# Interaktiv:\n"Add a new API endpoint for user registration"\n"Refactor the authentication logic to use JWT"\n\n# Claude zeigt Diffs an:\n# → [y] Approve\n# → [n] Reject\n# → [s] Skip',
            lang: 'bash',
            chips: [{ label: 'Coding Workflow', url: 'https://code.claude.com/docs/de/common-workflows#coding' }]
        },
        {
            num: 7, title: 'Git-Automatisierung',
            desc: 'Commits, Branches und PR-Beschreibungen automatisch generieren.',
            code: 'claude commit\n# Generiert eine semantische Commit-Message basierend auf Diffs\n\nclaude "create a PR for my changes"\n# Erstellt einen PR mit Beschreibung',
            lang: 'bash',
            chips: [{ label: 'Git Docs', url: 'https://code.claude.com/docs/de/common-workflows#git' }]
        },
        {
            num: 8, title: 'MCP-Ecosystem meistern',
            desc: 'Verbinde externe Tools (GitHub, DB, Slack) über das Model Context Protocol.',
            code: '# GitHub verbinden:\nclaude mcp add github -e GITHUB_TOKEN=$GITHUB_TOKEN -- \\\n  npx -y @modelcontextprotocol/server-github\n\n# PostgreSQL verbinden:\nclaude mcp add postgres -e DATABASE_URL=$DB_URL -- \\\n  npx -y @modelcontextprotocol/server-postgres',
            lang: 'bash',
            chips: [{ label: 'MCP Setup', url: 'https://code.claude.com/docs/de/mcp' }]
        },
        {
            num: 9, title: 'Hooks & Automatisierung',
            desc: 'Event-basierte Hooks konfigurieren für CI/CD und lokale Skripte.',
            code: '// settings.json\n{\n  "hooks": {\n    "Stop": [{\n      "hooks": [{\n        "type": "command",\n        "command": "notify-send \'Claude\' \'Aufgabe abgeschlossen\'"\n      }]\n    }]\n  }\n}',
            lang: 'json',
            chips: [{ label: 'Hooks Docs', url: 'https://code.claude.com/docs/de/hooks' }]
        },
        {
            num: 10, title: 'Expertise: Skills & Agents',
            desc: 'Eigene Slash-Befehle als Skills erstellen und parallele Agents nutzen.',
            youtube: 'STRApeg2pcA',
            code: '# .claude/skills/review.md\n---\ndescription: "Führt einen Code-Review durch"\n---\nReviewe die aktuellen Änderungen in {{ $1 || "." }} auf:\n1. Security-Issues\n2. Performance-Flaschenhälse\n3. Code-Style nach CLAUDE.md',
            lang: 'markdown',
            chips: [{ label: 'Skills & Agents', url: 'https://code.claude.com/docs/de/skills' }]
        }
    ]
};

export const module = {
    title: '📦 Module – Claude Code',
    intro: 'Vertiefende Einheiten zu allen wichtigen Claude Code-Themen.',
    groups: [
        {
            title: '⚙️ Konfiguration & Setup',
            items: [
                {
                    title: 'settings.json Referenz',
                    icon: '🔧',
                    content: 'Globale (~/.claude/settings.json) und projektbezogene (.claude/settings.json) Einstellungen.',
                    code: '{\n  "permissions": {\n    "defaultMode": "default" // default, plan, power\n  },\n  "model": "claude-sonnet-3-5",\n  "autoMemory": true,\n  "theme": "dark"\n}',
                    lang: 'json'
                },
                {
                    title: 'Berechtigungs-Modi',
                    icon: '🔐',
                    content: 'Steuern Sie die Sicherheit durch verschiedene Berechtigungsstufen.',
                    table: [
                        ['Modus', 'Bedeutung', 'Verwendung'],
                        ['default', 'Fragt bei riskanten Aktionen', 'Standard Entwicklung'],
                        ['plan', 'Nur Analyse, kein Schreibzugriff', 'Architektur-Review'],
                        ['power', 'Reduzierte Nachfragen (Vorsicht!)', 'Erfahrene Nutzer']
                    ],
                    code: 'claude --permission-mode plan'
                },
                {
                    title: 'Shell-Optimierung',
                    icon: '🐚',
                    content: 'Tipps für die Integration in Zsh, Bash oder Fish.',
                    code: '# Alias für schnellen Start\nalias c="claude"\n\n# Letzte Sitzung fortsetzen\nalias cr="claude -c"',
                    lang: 'bash'
                }
            ]
        },
        {
            title: '✨ Kern-Features',
            items: [
                {
                    title: 'Thinking Mode 🧠',
                    icon: '🧠',
                    content: 'Extended Thinking ermöglicht es Claude, komplexe Probleme tiefer zu durchdenken (Extended Thinking).',
                    code: 'claude --betas interleaved-thinking\n\n# In settings.json aktivieren:\n{ "thinkingMode": true }',
                    lang: 'bash'
                },
                {
                    title: 'Auto-Memory 💾',
                    icon: '💾',
                    content: 'Claude speichert Erkenntnisse über Ihre Präferenzen und das Projekt automatisch in einem lokalen Speicher.',
                    code: '/memory list   # Alle gespeicherten Erkenntnisse anzeigen\n/memory clear  # Speicher leeren',
                    lang: 'bash'
                },
                {
                    title: 'Sitzungs-Management 🔄',
                    icon: '🔄',
                    content: 'Verwalten Sie mehrere Sitzungen und setzen Sie diese jederzeit fort.',
                    code: 'claude --list-sessions\nclaude --resume "feature-auth"\nclaude --rename "refactoring-db"',
                    lang: 'bash'
                }
            ]
        },
        {
            title: '🔌 MCP & Integrationen',
            items: [
                {
                    title: 'MCP Server Basics',
                    icon: '🔌',
                    content: 'Model Context Protocol Server erweitern Claudes Fähigkeiten um externe Tools.',
                    code: 'claude mcp list\nclaude mcp status my-server',
                    lang: 'bash'
                },
                {
                    title: 'Eigene MCP Server',
                    icon: '🛠️',
                    content: 'Entwickeln Sie eigene MCP-Server mit dem offiziellen SDK.',
                    chips: [{ label: 'MCP SDK', url: 'https://github.com/modelcontextprotocol' }]
                }
            ]
        }
    ]
};

export const kurse = {
    title: '🎓 Kurse – Claude Code',
    intro: 'Strukturierte Lerneinheiten für den professionellen Einsatz von Claude Code.',
    items: [
        {
            id: 'kurs-1', badge: 'Anfänger', icon: '⚡', duration: '45 Min',
            title: 'Claude Code Schnellstart',
            description: 'In 10 Schritten von der Installation zur ersten produktiven Sitzung.',
            lernziele: ['Installation & Auth meistern', 'REPL-Navigation verstehen', 'Erste Codeänderungen mit Diffs durchführen', 'Git-Integration nutzen'],
            content: [
                { step: 'Installation', code: 'curl -fsSL https://claude.ai/install.sh | bash', lang: 'bash' },
                { step: 'Authentifizierung', code: 'claude /login', lang: 'bash' },
                { step: 'Projekt-Analyse', code: 'claude "Explain the main entry point and dependencies"', lang: 'bash' },
                { step: 'Feature-Implementierung', code: 'claude "Add a hello world endpoint"', lang: 'bash' },
                { step: 'Diff-Approval', code: '# [y] drücken zum Bestätigen', lang: 'text' },
                { step: 'Commit erstellen', code: 'claude commit', lang: 'bash' }
            ]
        },
        {
            id: 'kurs-2', badge: 'Fortgeschritten', icon: '🔌', duration: '60 Min',
            title: 'Mastering MCP – Tools verbinden',
            description: 'Claude Code mit Datenbanken, APIs und Cloud-Services verbinden.',
            lernziele: ['MCP-Konzept verstehen', 'GitHub & PostgreSQL integrieren', 'Security-Policies für MCP konfigurieren'],
            content: [
                { step: 'GitHub MCP Setup', code: 'claude mcp add github ...', lang: 'bash' },
                { step: 'Queries via Claude', code: 'claude "List all open PRs waiting for my review"', lang: 'bash' },
                { step: 'Postgres MCP Setup', code: 'claude mcp add postgres ...', lang: 'bash' },
                { step: 'DB-Analyse', code: 'claude "Find the slow queries in our database"', lang: 'bash' }
            ]
        },
        {
            id: 'kurs-3', badge: 'Experte', icon: '🤖', duration: '90 Min',
            title: 'Agentic Workflows & Automation',
            description: 'Bauen Sie automatisierte Pipelines und eigene Skills für Ihr Team.',
            lernziele: ['Custom Skills entwickeln', 'Hooks für CI/CD nutzen', 'Parallele Agents orchestrieren'],
            content: [
                { step: 'Custom Skill Erstellung', code: '# .claude/skills/audit.md\n---\ndescription: "Security Audit"\n---\nPrüfe {{ $1 }} auf Vulnerabilities.', lang: 'markdown' },
                { step: 'CI Hook Setup', code: '// settings.json\n"hooks": { "SessionStart": [...] }', lang: 'json' },
                { step: 'Parallel Agent Task', code: 'claude "Use parallel agents to implement Feature A and B"', lang: 'bash' }
            ]
        }
    ]
};

export const codelabs = {
    title: '🧪 Codelabs – Claude Code',
    intro: 'Interaktive Praxis-Übungen direkt im Browser-Editor.',
    items: [
        {
            id: 'lab-1', badge: 'Anfänger', icon: '🎯', duration: '30 Min',
            title: 'Codelab: Mein erster Claude-Edit',
            goal: 'Lerne wie Claude Code Dateien liest, Änderungen vorschlägt und diese nach deiner Freigabe schreibt.',
            steps: [
                { title: 'Datei erstellen', code: 'echo "function add(a, b) { return a + b; }" > math.js', lang: 'bash' },
                { title: 'Claude beauftragen', code: 'claude "Add documentation and input validation to math.js"', lang: 'bash' },
                { title: 'Resultat prüfen', code: 'cat math.js', lang: 'bash' }
            ]
        },
        {
            id: 'lab-2', badge: 'Fortgeschritten', icon: '🔧', duration: '45 Min',
            title: 'Codelab: Refactoring Legacy Code',
            goal: 'Nutze Claude Code um ein altes Modul zu modernisieren und Tests hinzuzufügen.',
            steps: [
                { title: 'Analyse', code: 'claude "Explain the logic in legacy-module.js"', lang: 'bash' },
                { title: 'Modernisierung', code: 'claude "Refactor legacy-module.js to use TypeScript and ES Modules"', lang: 'bash' },
                { title: 'Testing', code: 'claude "Write unit tests for the refactored module and run them"', lang: 'bash' }
            ]
        }
    ]
};

export const tutorials = {
    title: '📖 Tutorials – Claude Code',
    intro: 'Best Practices, Tipps und vollständige Befehlsreferenz.',
    groups: [
        {
            title: '🧠 Mentale Modelle',
            items: [
                {
                    title: 'Vom Coder zum Architekten',
                    icon: '🤝',
                    content: 'Betrachten Sie Claude Code als einen extrem schnellen Junior-Entwickler. Sie geben die Richtung vor, Claude führt aus.',
                    tips: [
                        'Seien Sie spezifisch bei Anweisungen',
                        'Reviewen Sie jeden Diff sorgfältig',
                        'Nutzen Sie CLAUDE.md für dauerhafte Regeln'
                    ]
                }
            ]
        },
        {
            title: '⌨️ CLI Referenz',
            items: [
                {
                    title: 'Alle Befehle auf einen Blick',
                    icon: '⌨️',
                    content: 'Die wichtigsten Kommandozeilen-Befehle und ihre Wirkung.',
                    table: [
                        ['Befehl', 'Beschreibung'],
                        ['claude', 'Interaktive REPL starten'],
                        ['claude -p "Prompt"', 'Einmalige Antwort (Headless)'],
                        ['claude -c', 'Letzte Sitzung fortsetzen'],
                        ['claude commit', 'Geführter Commit-Dialog'],
                        ['claude mcp add', 'Neuen MCP Server hinzufügen'],
                        ['claude skill add', 'Neuen Skill hinzufügen']
                    ]
                },
                {
                    title: 'Keyboard Shortcuts',
                    icon: '⚡',
                    content: 'Produktivitäts-Shortcuts in der REPL.',
                    table: [
                        ['Shortcut', 'Aktion'],
                        ['Ctrl+C', 'Abbrechen / Leeren'],
                        ['Ctrl+D', 'Beenden'],
                        ['Shift+Tab', 'Thinking Mode umschalten'],
                        ['↑ / ↓', 'Befehls-Historie']
                    ]
                }
            ]
        }
    ]
};

export const codewiki = {
    title: '🧠 CodeWiki – Claude Code',
    intro: 'Das ultimative Glossar für alle Begriffe rund um Claude Code.',
    categories: [
        {
            name: 'Grundlagen',
            items: [
                { term: 'Agentic Coding', definition: 'Die Fähigkeit der KI, aktiv Code zu schreiben, Tests auszuführen und Shell-Befehle zu nutzen, um ein Ziel zu erreichen.' },
                { term: 'REPL', definition: 'Read-Eval-Print-Loop: Die interaktive Kommandozeilen-Schnittstelle von Claude Code.' },
                { term: 'Diff', definition: 'Der Unterschied zwischen dem aktuellen Code und der von Claude vorgeschlagenen Änderung.' }
            ]
        },
        {
            name: 'Konzepte & Files',
            items: [
                { term: 'CLAUDE.md', definition: 'Die zentrale Konfigurationsdatei für projektweite Anweisungen, Coding-Styles und Architektur-Regeln.' },
                { term: 'settings.json', definition: 'Globale Konfigurationsdatei für Benutzerpräferenzen wie Themes, Modelle und Berechtigungen.' },
                { term: 'MCP', definition: 'Model Context Protocol – Ein offener Standard zur Anbindung externer Tools an KI-Modelle.' }
            ]
        },
        {
            name: 'Security & Control',
            items: [
                { term: 'Permission Mode', definition: 'Sicherheitsstufen (default, plan, power), die festlegen, wie oft Claude nach Erlaubnis fragen muss.' },
                { term: 'Sandbox', definition: 'Eine isolierte Umgebung, in der Claude riskante Befehle sicher ausführen kann.' }
            ]
        }
    ]
};
