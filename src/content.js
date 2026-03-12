// =====================================================
// CONTENT DATABASE – Gemini CLI Learning Portal
// Eigene Inhalte auf Deutsch
// =====================================================

export const content = {

    // ── LERNPFAD ──────────────────────────────────────
    lernpfad: {
        title: '📍 Lernpfad – Gemini CLI',
        intro: 'Dein strukturierter Weg von der Installation bis zum Profi-Einsatz. Folge den Schritten der Reihe nach oder spring direkt zu einem Thema.',
        steps: [
            {
                num: 1, title: 'Installation & Masterclass Guide',
                desc: 'Gemini CLI wird als globales npm-Paket installiert. Schau dir zuerst die Video-Einführung an, um die wichtigsten Funktionen im Überblick zu sehen.',
                youtube: '9xE2DTxGvTY',
                code: 'npm install -g @google/gemini-cli\n\n# Danach testen:\ngemini --version',
                lang: 'bash',
                chips: [{ label: 'Offizielle Docs', url: 'https://geminicli.com/docs/get-started/installation' }]
            },
            {
                num: 2, title: 'Authentifizierung',
                desc: 'Beim ersten Start wirst du aufgefordert, dich mit deinem Google-Account anzumelden. Gemini CLI nutzt OAuth – keine API-Keys nötig.',
                code: '# Einfach gemini starten – der Login-Flow läuft automatisch:\ngemini\n\n# Für Enterprise / API-Key nutze:\nexport GEMINI_API_KEY="dein-api-key-hier"\ngemini',
                lang: 'bash',
                chips: [{ label: 'Auth-Dokumentation', url: 'https://geminicli.com/docs/get-started/authentication' }]
            },
            {
                num: 3, title: 'Erste Schritte',
                desc: 'Nach dem Login kannst du direkt loslegen. Gemini CLI liest automatisch den Kontext deines aktuellen Verzeichnisses.',
                code: '# In deinem Projektordner starten:\ncd mein-projekt\ngemini\n\n# Dann frei tippen, z.B.:\n# "Erkläre mir was in diesem Projekt passiert"\n# "Schreibe einen Unit-Test für src/utils.js"\n# "Was macht die Funktion processPayment?"',
                lang: 'bash',
                chips: [
                    { label: 'Quickstart Guide', url: 'https://geminicli.com/docs/get-started' },
                    { label: 'Beispiele', url: 'https://geminicli.com/docs/get-started/examples' }
                ]
            },
            {
                num: 4, title: 'Wichtige Slash-Befehle',
                desc: 'Im interaktiven Modus stehen dir viele eingebaute Befehle zur Verfügung. Tippe "/" um die Liste zu sehen.',
                code: '/help           # Alle Befehle anzeigen\n/memory         # Persistente Erinnerungen verwalten\n/chat list      # Alle Sessions anzeigen\n/chat resume X  # Session X fortsetzen\n/tools          # Verfügbare Tools anzeigen\n/stats          # Token-Verbrauch anzeigen\n/quit           # Beenden',
                lang: 'bash',
                chips: [{ label: 'Befehlsreferenz', url: 'https://geminicli.com/docs/reference/commands' }]
            },
            {
                num: 5, title: 'Projektkontext mit GEMINI.md',
                desc: 'Die Datei GEMINI.md in deinem Projekt gibt Gemini CLI dauerhaften Kontext: Wer du bist, wie das Projekt heißt, welche Regeln gelten.',
                code: '# GEMINI.md im Projektstamm anlegen:\ncat > GEMINI.md << EOF\n# Mein Projekt\n\nDies ist eine Node.js REST-API mit Express.js.\nDatenbank: PostgreSQL mit Prisma ORM.\nTestframework: Jest.\n\n## Codestil\n- Async/Await bevorzugen\n- Deutsche Kommentare\n- Keine console.log in Produktion\nEOF',
                lang: 'bash',
                chips: [{ label: 'GEMINI.md Docs', url: 'https://geminicli.com/docs/cli/gemini-md' }]
            },
            {
                num: 6, title: 'Automatisierung & Scripting',
                desc: 'Im Headless-Modus lässt sich Gemini CLI in Skripte, CI/CD-Pipelines und Makefiles integrieren.',
                code: '# Headless-Modus: Antwort direkt im Terminal\ngemini -p "Erstelle einen Release-Summary für die letzten 10 Commits"\n\n# In einem Shell-Skript:\n#!/bin/bash\nCOMMIT_MSG=$(git log --oneline -1)\ngemini -p "Ist dieser Commit klar beschrieben? $COMMIT_MSG"\n\n# Im Headless-Modus (kein interaktiver Dialog):\ngemini --headless -p "Analysiere src/ auf mögliche Memory Leaks"',
                lang: 'bash',
                chips: [
                    { label: 'Headless Mode', url: 'https://geminicli.com/docs/cli/headless' },
                    { label: 'Automation Tutorial', url: 'https://geminicli.com/docs/cli/tutorials/automation' }
                ]
            }
        ]
    },

    // ── MODULE ────────────────────────────────────────
    module: {
        title: '📦 Module',
        intro: 'Detaillierte Erklärungen zu jedem wichtigen Thema rund um Gemini CLI.',
        groups: [
            {
                title: '⚙️ Konfiguration',
                items: [
                    {
                        title: 'settings.json – Die Konfigurationsdatei',
                        icon: '🔧',
                        content: `Die Hauptkonfiguration liegt unter \`~/.gemini/settings.json\`. Hier steuerst du Modell, Sandboxing, Themes und mehr.`,
                        code: `// ~/.gemini/settings.json\n{\n  "theme": "dark",\n  "model": "gemini-2.5-pro",\n  "sandbox": true,\n  "autoSave": true,\n  "contextWindowSizeMB": 10\n}`,
                        lang: 'json'
                    },
                    {
                        title: 'Custom Commands',
                        icon: '⚡',
                        content: `Erstelle eigene Shortcuts für häufig genutzte Befehle. Lege sie in \`.gemini/commands/\` ab.`,
                        code: `# .gemini/commands/review.md\n---\ndescription: Code Review durchführen\n---\nBitte führe einen ausführlichen Code-Review der Datei {{arg1}} durch.\nAchte auf: Lesbarkeit, Performance, Sicherheit und Testbarkeit.\nGib konkrete Verbesserungsvorschläge.`,
                        lang: 'markdown'
                    },
                    {
                        title: 'Umgebungsvariablen',
                        icon: '🌍',
                        content: `Gemini CLI kann über Umgebungsvariablen konfiguriert werden – ideal für CI/CD.`,
                        code: `export GEMINI_API_KEY="..."         # API-Key\nexport GEMINI_MODEL="gemini-2.5-pro" # Modell\nexport GEMINI_SANDBOX=true           # Sandbox\nexport DEBUG="gemini:*"              # Debug-Logging`,
                        lang: 'bash'
                    }
                ]
            },
            {
                title: '🔌 Extensions & Tools',
                items: [
                    {
                        title: 'MCP Server einrichten',
                        icon: '🌐',
                        content: `MCP (Model Context Protocol) erlaubt es, externe Tools und Datenquellen mit Gemini CLI zu verbinden.`,
                        code: `// settings.json\n{\n  "mcpServers": {\n    "mein-server": {\n      "command": "npx",\n      "args": ["-y", "@mein-org/mcp-server"]\n    },\n    "filesystem": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/pfad"]\n    }\n  }\n}`,
                        lang: 'json'
                    },
                    {
                        title: 'Eigene Extensions schreiben',
                        icon: '🛠️',
                        content: `Erweitere Gemini CLI mit eigenen Tools. Eine Extension ist ein npm-Paket mit einer definierten Schnittstelle.`,
                        code: `// meine-extension/index.js\nexport default {\n  name: 'mein-tool',\n  description: 'Führt meine Aufgabe aus',\n  parameters: {\n    datei: { type: 'string', description: 'Dateipfad' }\n  },\n  async execute({ datei }) {\n    // Deine Logik hier\n    return { result: \`Verarbeitet: \${datei}\` };\n  }\n};`,
                        lang: 'javascript'
                    },
                    {
                        title: 'Hooks – Aktionen automatisch auslösen',
                        icon: '🪝',
                        content: `Hooks sind Skripte, die Gemini CLI vor oder nach bestimmten Ereignissen ausführt – z.B. nach jeder Dateiänderung.`,
                        code: `// .gemini/hooks.json\n{\n  "afterWrite": [\n    "npm run lint {{file}}",\n    "git add {{file}}"\n  ],\n  "beforeSession": [\n    "echo 'Kontext wird geladen...'"\n  ]\n}`,
                        lang: 'json'
                    }
                ]
            }
        ]
    },

    // ── KURSE ─────────────────────────────────────────
    kurse: {
        title: '🎓 Kurse',
        intro: 'Umfangreiche Lerneinheiten für spezifische Anwendungsszenarien.',
        items: [
            {
                id: 'kurs-1', badge: 'Anfänger', icon: '📁',
                title: 'Dateimanagement mit Gemini CLI',
                duration: '~20 Min',
                description: 'Lerne, wie du mit Gemini CLI Dateien liest, analysierst, schreibst und umstrukturierst.',
                lernziele: ['Dateien lesen und zusammenfassen', 'Code-Dateien analysieren und refactoren', 'Bulk-Operationen auf Verzeichnisse anwenden'],
                content: [
                    {
                        step: 'Datei lesen lassen',
                        code: '# Gemini CLI liest Dateien automatisch wenn du sie erwähnst:\n# "Erkläre mir den Code in src/auth.js"\n# "Fasse README.md auf Deutsch zusammen"\n# "Welche Dependencies nutzt package.json?"',
                        lang: 'bash'
                    },
                    {
                        step: 'Neue Datei erstellen lassen',
                        code: '# Im interaktiven Modus:\n# "Erstelle eine neue Datei src/helpers/validation.js\n#  mit Validierungsfunktionen für E-Mail, Telefonnummer und PLZ"\n\n# Gemini schreibt die Datei direkt – du wirst vorher gefragt!',
                        lang: 'bash'
                    },
                    {
                        step: 'Bulk-Umbenennung',
                        code: '# "Benenne alle Dateien in src/components/ von .jsx auf .tsx um\n#  und update die imports entsprechend"',
                        lang: 'bash'
                    }
                ]
            },
            {
                id: 'kurs-2', badge: 'Anfänger', icon: '🧠',
                title: 'Context & Memory Management',
                duration: '~25 Min',
                description: 'Lerne, wie du Gemini CLI dauerhafte Informationen gibst, damit du nicht jedes Mal von vorne erklärst.',
                lernziele: ['GEMINI.md für Projektkontex nutzen', 'Persistente Erinnerungen setzen', 'Kontext-Hierarchien verstehen'],
                content: [
                    {
                        step: 'Memory setzen',
                        code: '# Im interaktiven Modus:\n# "/memory add Ich bevorzuge TypeScript über JavaScript"\n# "/memory add Unser Team nutzt GitFlow-Branching"\n# "/memory list"   ← alle Erinnerungen anzeigen',
                        lang: 'bash'
                    },
                    {
                        step: 'GEMINI.md schreiben',
                        code: '# GEMINI.md\n# Projekt: E-Commerce Backend\n\n## Tech-Stack\n- Node.js 20 + TypeScript\n- Express.js + Prisma + PostgreSQL\n- Jest für Unit-Tests\n- Docker für Deployment\n\n## Konventionen\n- Klassen-Namen: PascalCase\n- Funktionen: camelCase, async/await\n- Fehlerbehandlung: immer try/catch + Logger\n- Keine direkten DB-Queries außerhalb von Services',
                        lang: 'markdown'
                    }
                ]
            },
            {
                id: 'kurs-3', badge: 'Fortgeschritten', icon: '🐚',
                title: 'Shell Commands & Scripting',
                duration: '~30 Min',
                description: 'Nutze Gemini CLI als intelligenten Shell-Assistenten für komplexe Systemaufgaben.',
                lernziele: ['Shell-Befehle sicher ausführen lassen', 'Komplexe Pipelines erstellen', 'Sicherheits-Sandboxing konfigurieren'],
                content: [
                    {
                        step: 'Befehle ausführen',
                        code: '# Gemini führt Shell-Befehle mit deiner Erlaubnis aus:\n# "Zeige mir alle laufenden Node-Prozesse"\n# "Lösche alle .log Dateien die älter als 7 Tage sind"\n# "Komprimiere src/ zu einem Archiv mit heutigem Datum"',
                        lang: 'bash'
                    },
                    {
                        step: 'Sandbox-Modus (Empfohlen)',
                        code: '// settings.json – Sandbox schützt dein System\n{\n  "sandbox": true,\n  "trustedFolders": [\n    "/home/user/projekte/mein-projekt"\n  ]\n}',
                        lang: 'json'
                    }
                ]
            },
            {
                id: 'kurs-4', badge: 'Fortgeschritten', icon: '🔄',
                title: 'Session Management & Rewind',
                duration: '~20 Min',
                description: 'Verwalte Konversationen, speichere Verläufe und mache Änderungen rückgängig.',
                lernziele: ['Sessions speichern und fortsetzen', 'Checkpoints nutzen', 'Rewind: zu früheren Zuständen zurückkehren'],
                content: [
                    {
                        step: 'Session fortsetzen',
                        code: '# Sessions auflisten:\ngemini --list-sessions\n\n# Im interaktiven Modus:\n/chat list              # Alle Chats\n/chat resume mein-chat  # Chat fortsetzen',
                        lang: 'bash'
                    },
                    {
                        step: 'Rewind nutzen',
                        code: '# Falls Gemini etwas falsch gemacht hat – einfach zurückspulen!\n/rewind        # Zum letzten Checkpoint zurück\n/rewind list   # Alle Checkpoints anzeigen',
                        lang: 'bash'
                    }
                ]
            },
            {
                id: 'kurs-5', badge: 'Experte', icon: '🤖',
                title: 'GitHub Actions + Gemini CLI',
                duration: '~45 Min',
                description: 'Integriere Gemini CLI in deine CI/CD-Pipeline für automatisierte Code-Reviews und Dokumentation.',
                lernziele: ['Headless-Mode in GitHub Actions nutzen', 'Automatische Code-Reviews bei PRs', 'Dokumentation automatisch aktualisieren'],
                content: [
                    {
                        step: 'GitHub Actions Workflow',
                        code: `# .github/workflows/ai-review.yml\nname: AI Code Review\non:\n  pull_request:\n    branches: [main]\n\njobs:\n  review:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      \n      - name: Install Gemini CLI\n        run: npm install -g @google/gemini-cli\n      \n      - name: Run AI Review\n        env:\n          GEMINI_API_KEY: \${{ secrets.GEMINI_API_KEY }}\n        run: |\n          DIFF=$(git diff origin/main...HEAD)\n          gemini -p "Review diesen Pull Request Diff und gib\n          Feedback auf Bugs, Code-Qualität und mögliche\n          Sicherheitsprobleme:\\n\\n$DIFF"`,
                        lang: 'yaml'
                    }
                ]
            }
        ]
    },

    // ── CODELABS ──────────────────────────────────────
    codelabs: {
        title: '🧪 Codelabs',
        intro: 'Hands-on Workshops – folge den Schritten und führe den Code direkt aus.',
        items: [
            {
                id: 'lab-1', badge: 'Anfänger', icon: '🚀', duration: '15 Min',
                title: 'Codelab 1: Erstes Gespräch mit Gemini CLI',
                goal: 'Du installierst Gemini CLI und führst deine erste Konversation durch.',
                steps: [
                    { title: 'Node.js prüfen', code: 'node --version  # Mindestens v18\nnpm --version', lang: 'bash' },
                    { title: 'Gemini CLI installieren', code: 'npm install -g @google/gemini-cli\ngemini --version', lang: 'bash' },
                    { title: 'Ersten Start durchführen', code: '# Gemini starten – Browser öffnet sich für Google-Login:\ngemini\n\n# Nach dem Login kannst du direkt tippen:\n# "Hallo! Wer bist du und was kannst du?"', lang: 'bash' },
                    { title: 'Erste Aufgabe stellen', code: '# Tippe im Gemini-Dialog:\n# "Schreibe ein Hello World in Python, JavaScript und Rust"\n# "Erkläre mir den Unterschied zwischen async/await und Promises"', lang: 'bash' }
                ]
            },
            {
                id: 'lab-2', badge: 'Anfänger', icon: '📝', duration: '20 Min',
                title: 'Codelab 2: Projekt analysieren',
                goal: 'Du lässt Gemini CLI ein bestehendes JavaScript-Projekt vollständig analysieren.',
                steps: [
                    { title: 'Beispielprojekt erstellen', code: 'mkdir mein-projekt && cd mein-projekt\nnpm init -y\nnpm install express\nmkdir src\n\ncat > src/server.js << EOF\nconst express = require("express");\nconst app = express();\n\napp.get("/", (req, res) => res.json({ status: "ok" }));\napp.get("/users", (req, res) => {\n  // TODO: Datenbank-Abfrage\n  res.json([{ id: 1, name: "Max" }]);\n});\n\napp.listen(3000);\nEOF', lang: 'bash' },
                    { title: 'Gemini starten und Projekt analysieren', code: 'gemini\n\n# In der Gemini-Session:\n# "Analysiere dieses Projekt. Was macht es?\n#  Welche Schwachstellen siehst du? Wie würdest du es verbessern?"', lang: 'bash' },
                    { title: 'Autom. Unit-Tests generieren lassen', code: '# "Schreibe Jest Unit-Tests für src/server.js.\n#  Installiere auch die nötigen Dev-Dependencies."', lang: 'bash' }
                ]
            },
            {
                id: 'lab-3', badge: 'Fortgeschritten', icon: '🔧', duration: '30 Min',
                title: 'Codelab 3: GEMINI.md & Custom Commands',
                goal: 'Du richtest eine persönliche Gemini CLI-Konfiguration für dein Projekt ein.',
                steps: [
                    { title: 'GEMINI.md erstellen', code: 'cat > GEMINI.md << EOF\n# Projektkontext\n\nDies ist ein Node.js REST-API Projekt.\n\n## Tech-Stack\n- Express.js\n- Jest für Tests\n- ESLint + Prettier\n\n## Konventionen  \n- Alle Kommentare auf Deutsch\n- Async/Await bevorzugen\n- Error-First Pattern nutzen\nEOF', lang: 'bash' },
                    { title: 'Custom Command anlegen', code: 'mkdir -p .gemini/commands\n\ncat > .gemini/commands/review.md << EOF\n---\ndescription: Führt Code-Review durch\n---\nBitte review die Datei {{file}} auf:\n1. Code-Qualität und Lesbarkeit\n2. Mögliche Bugs oder Fehler\n3. Performance-Probleme\n4. Sicherheitsprobleme\n\nGib konkrete, umsetzbare Verbesserungsvorschläge.\nEOF', lang: 'bash' },
                    { title: 'Custom Command nutzen', code: '# In der Gemini-Session:\n/review src/server.js\n\n# Gemini führt nun dein Review-Template aus!', lang: 'bash' }
                ]
            },
            {
                id: 'lab-4', badge: 'Experte', icon: '⚡', duration: '45 Min',
                title: 'Codelab 4: Headless-Scripting',
                goal: 'Du erstellst ein Shell-Skript, das Gemini CLI automatisiert einsetzt.',
                steps: [
                    { title: 'Commit-Message-Generator', code: "#!/bin/bash\n# auto-commit.sh – Generiert Commit-Messages automatisch\n\nif [ -z \"$(git status --porcelain)\" ]; then\n  echo \"Keine Änderungen zum Committen.\"\n  exit 0\nfi\n\n# Diff holen\nDIFF=$(git diff --cached)\n\nif [ -z \"$DIFF\" ]; then\n  git add -A\n  DIFF=$(git diff --cached)\nfi\n\n# Gemini generiert die Message\nMSG=$(gemini -p \"Schreibe eine präzise Git Commit Message für diesen Diff.\nFormat: <typ>: <kurze Beschreibung>\nTypen: feat, fix, refactor, docs, test, chore\n\nDiff:\n$DIFF\")\n\necho \"Generierte Commit-Message:\"\necho \"$MSG\"\nread -p \"Commit mit dieser Message? (j/n): \" confirm\n\nif [ \"$confirm\" = \"j\" ]; then\n  git commit -m \"$MSG\"\nfi", lang: 'bash' },
                    { title: 'Skript ausführbar machen', code: 'chmod +x auto-commit.sh\n\n# Alias setzen:\necho "alias gai=\'./auto-commit.sh\'" >> ~/.bashrc\nsource ~/.bashrc\n\n# Nutzen:\ngit add src/server.js\ngai  # Gemini generiert die Commit-Message!', lang: 'bash' }
                ]
            }
        ]
    },

    // ── TUTORIALS ─────────────────────────────────────
    tutorials: {
        title: '📖 Tutorials & Deep-Dives',
        intro: 'Technische Hintergründe und fortgeschrittene Themen.',
        groups: [
            {
                title: '🧠 Modell & KI',
                items: [
                    {
                        title: 'Das richtige Modell wählen',
                        icon: '🎯',
                        content: 'Gemini CLI unterstützt verschiedene Modelle. Wähle je nach Aufgabe:',
                        table: [
                            ['Modell', 'Stärke', 'Einsatz'],
                            ['gemini-2.5-pro', 'Höchste Qualität, langes Kontextfenster', 'Komplexe Code-Analyse, große Projekte'],
                            ['gemini-2.5-flash', 'Schnell & günstig', 'Quick-Fixes, einfache Fragen'],
                            ['gemini-2.0-flash', 'Ausgewogen', 'Tägliche Entwicklungsaufgaben']
                        ]
                    },
                    {
                        title: 'Prompt-Tipps für Entwickler',
                        icon: '✍️',
                        content: 'So bekommst du die besten Ergebnisse:',
                        tips: [
                            'Sei spezifisch: "Refactore die Funktion X in Datei Y" statt "verbessere den Code"',
                            'Gib Kontext: Tech-Stack, Constraints, gewünschtes Ergebnis',
                            'Nutze GEMINI.md für projektweite Regeln',
                            'Iteriere: Starte mit einer groben Anfrage und verfeinere'
                        ]
                    }
                ]
            },
            {
                title: '🔐 Sicherheit & Sandboxing',
                items: [
                    {
                        title: 'Sandbox-Modus konfigurieren',
                        icon: '🛡️',
                        content: 'Im Sandbox-Modus führt Gemini CLI Shell-Befehle in einer isolierten Umgebung aus. Dein echtes System bleibt geschützt.',
                        code: '// settings.json\n{\n  "sandbox": true,\n  "trustedFolders": [\n    "/home/user/projekte"\n  ],\n  "policyEngine": {\n    "allowedTools": ["read_file", "write_file", "search_files"],\n    "blockedCommands": ["rm -rf", "sudo", "chmod 777"]\n  }\n}',
                        lang: 'json'
                    },
                    {
                        title: 'Best Practices',
                        icon: '✅',
                        content: 'Sicherheitsempfehlungen für den Produktiveinsatz:',
                        tips: [
                            'Immer Sandbox aktivieren in Staging/Prod-Umgebungen',
                            'API-Keys nie ins Repository – immer Umgebungsvariablen nutzen',
                            '.geminiignore für sensible Dateien (secrets, .env) pflegen',
                            'Trusted Folders auf das Minimum beschränken'
                        ]
                    }
                ]
            },
            {
                title: '📊 Performance & Kosten',
                items: [
                    {
                        title: 'Token-Verbrauch im Blick behalten',
                        icon: '💰',
                        content: 'Jede Anfrage verbraucht Tokens. So behältst du die Kosten im Griff:',
                        code: '# Token-Statistiken anzeigen:\n/stats\n\n# Token-Caching aktivieren (spart bis zu 75%!):\n# settings.json\n# { "tokenCaching": true }',
                        lang: 'bash'
                    },
                    {
                        title: '.geminiignore richtig nutzen',
                        icon: '🚫',
                        content: 'Schließe große oder irrelevante Dateien aus um den Kontext klein und günstig zu halten:',
                        code: '# .geminiignore\nnode_modules/\ndist/\nbuild/\n*.log\n*.lock\ncoverage/\n.env*\n*.min.js\n*.map',
                        lang: 'text'
                    }
                ]
            }
        ]
    }
};
