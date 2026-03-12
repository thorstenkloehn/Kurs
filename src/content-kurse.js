// content-kurse.js – Kurse + Codelabs

export const kurse = {
    title: '🎓 Kurse',
    intro: 'Eigene Lerneinheiten zu allen wichtigen Gemini CLI Themen – in Deutsch.',
    items: [
        {
            id: 'kurs-1', badge: 'Anfänger', icon: '📁', duration: '~20 Min',
            title: 'Dateimanagement mit Gemini CLI',
            description: 'Lerne, wie du Dateien liest, analysierst, schreibst und umstrukturierst.',
            lernziele: ['Dateien lesen und zusammenfassen lassen', 'Neuen Code generieren und in Dateien schreiben', 'Bulk-Operationen auf Verzeichnisse anwenden'],
            content: [
                { step: 'Datei analysieren lassen', code: '# Im Gemini-Dialog:\n# "Erkläre mir den Code in src/auth.js"\n# "Fasse README.md auf Deutsch zusammen"\n# "Welche Sicherheitsprobleme siehst du in api/routes.js?"', lang: 'bash' },
                { step: 'Datei schreiben lassen', code: '# "Erstelle eine neue Datei src/helpers/validate.js\n#  mit Validierungsfunktionen für:\n#  - E-Mail Adressen\n#  - Deutsche Postleitzahlen (5-stellig)\n#  - Telefonnummern (internationales Format)"', lang: 'bash' },
                { step: 'Bulk-Refactoring', code: '# "Benenne alle Dateien in src/components/ von .jsx nach .tsx um\n#  und update die Import-Pfade in anderen Dateien entsprechend"\n\n# "Füge in jede Funktion in src/api/ einen try/catch Block ein\n#  der Fehler mit dem Logger loggt"', lang: 'bash' },
                { step: 'Verzeichnis-Analyse', code: '# "Analysiere das gesamte src/-Verzeichnis und:\n#  1. Erstelle ein Verzeichnis-Diagram\n#  2. Identifiziere Duplikate\n#  3. Schlage eine bessere Ordnerstruktur vor"', lang: 'bash' }
            ]
        },
        {
            id: 'kurs-2', badge: 'Anfänger', icon: '🧠', duration: '~25 Min',
            title: 'Context & Memory Management',
            description: 'Gib Gemini CLI dauerhaften Kontext damit du nicht jedes Mal alles erklären musst.',
            lernziele: ['GEMINI.md für Projektkontext erstellen', 'Persistente Erinnerungen setzen und verwalten', 'Kontext-Hierarchien verstehen'],
            content: [
                { step: 'Memory-Befehle lernnen', code: '/memory add "Unser Projekt nutzt TypeScript strictmode"\n/memory add "Tests heißen *.spec.ts, nicht *.test.ts"\n/memory add "Datenbankmodelle sind in src/models/ definiert"\n/memory list\n/memory remove 2   # Eintrag 2 löschen', lang: 'bash' },
                { step: 'Gute GEMINI.md schreiben', code: '# GEMINI.md\n# [Projektname] – Tech Context\n\n## Über das Projekt\nEin REST-API Backend für eine Lernplattform.\n\n## Stack\n- Runtime: Node.js 20, TypeScript 5\n- Framework: Express.js mit Zod-Validierung\n- DB: PostgreSQL 16 via Prisma ORM\n- Tests: Jest + Supertest\n- CI: GitHub Actions\n\n## Codestil\n- Async/Await (kein .then/.catch)\n- Fehler per Error-Klassen (kein string throw)\n- Logging via Winston-Logger (kein console.log)\n\n## Verzeichnisstruktur\nsrc/\n  routes/     # Express-Router\n  services/   # Business-Logik\n  models/     # Prisma-Schemas\n  middleware/ # Auth, Validation, Error\n  utils/      # Hilfsfunktionen', lang: 'markdown' },
                { step: 'Kontext testen', code: '# Starte Gemini CLI neu und stelle Fragen ohne zu erklären:\n# "Erstelle einen neuen Endpunkt für User-Profile"\n# Gemini liest GEMINI.md und nutz den vollen Kontext!', lang: 'bash' }
            ]
        },
        {
            id: 'kurs-3', badge: 'Anfänger', icon: '🌐', duration: '~20 Min',
            title: 'Web Search & Fetch',
            description: 'Nutze Gemini CLI um Webseiten zu durchsuchen und Inhalte abzurufen.',
            lernziele: ['Websuche in der CLI nutzen', 'Webseiten-Inhalte abrufen und analysieren', 'Recherche-Workflows automatisieren'],
            content: [
                { step: 'Web-Suche starten', code: '# Gemini CLI hat eingebaute Web-Suche:\n# "Suche nach der neuesten Version von Express.js und\n#  welche Breaking Changes es in v5 gibt"\n\n# "Welche npm-Pakete werden 2024 für JWT in Node.js empfohlen?"\n\n# "Gibt es Sicherheitslücken in axios < 1.6.0?"', lang: 'bash' },
                { step: 'URL-Inhalt abrufen', code: '# Webseite lesen und analysieren:\n# "Rufe https://docs.prisma.io/concepts/components/prisma-client\n#  ab und erkläre die wichtigsten Konzepte"\n\n# Dokumentation zusammenfassen:\n# "Fasse https://expressjs.com/de/guide/routing.html auf Deutsch zusammen"', lang: 'bash' },
                { step: 'Recherche automatisieren', code: '#!/bin/bash\n# dependency-check.sh\nDEPS=$(cat package.json | grep -E \'"[^"]+": "[^"]+"\')\ngemini -p "Prüfe diese npm-Abhängigkeiten auf bekannte\nSicherheitslücken und veraltete Versionen.\\n$DEPS"', lang: 'bash' }
            ]
        },
        {
            id: 'kurs-4', badge: 'Anfänger', icon: '📋', duration: '~20 Min',
            title: 'Task Planning mit Todos',
            description: 'Nutze Gemini CLI um komplexe Aufgaben zu planen und strukturiert abzuarbeiten.',
            lernziele: ['Todos für komplexe Workflows erstellen', 'Aufgaben priorisieren lassen', 'Fortschritt verfolgen'],
            content: [
                { step: 'Todo-Liste erstellen lassen', code: '# Gemini erstellt automatisch Todos für komplexe Aufgaben:\n# "Ich muss unser Auth-System von Sessions auf JWT umstellen.\n#  Erstelle eine detaillierte Todo-Liste mit allen Schritten"\n\n# Todos anzeigen:\n/todos          # Aktuelle Todo-Liste\n/todos done 3   # Todo 3 als erledigt markieren', lang: 'bash' },
                { step: 'Aufgaben priorisieren', code: '# "Ich habe folgende Aufgaben auf meiner Backlog.\n#  Priorisiere sie nach Business-Wert und technischer Dringlichkeit:\n#  - Nutzer-Passwörter hashen (aktuell Plaintext!)\n#  - Dark Mode implementieren\n#  - Ladezeit von 4s auf 2s verbessern\n#  - Admin-Dashboard erstellen"', lang: 'bash' },
                { step: 'Plan Mode für Refactorings', code: '# Plan Mode aktivieren für sichere Planung:\n/plan on\n\n# "Refactore unsere MongoDb-Datenbankschicht auf PostgreSQL"\n# Gemini erstellt einen vollständigen Plan ohne Änderungen!\n# → Du bestätigst jeden Schritt einzeln\n\n/plan off      # Plan Mode deaktivieren', lang: 'bash' }
            ]
        },
        {
            id: 'kurs-5', badge: 'Fortgeschritten', icon: '🐚', duration: '~30 Min',
            title: 'Shell Commands meistern',
            description: 'Nutze Gemini CLI als intelligenten Shell-Assistenten für Systemaufgaben.',
            lernziele: ['Shell-Befehle sicher ausführen', 'Komplexe Pipelines erstellen', 'Sandboxing konfigurieren'],
            content: [
                { step: 'Befehle sicher ausführen', code: '# Gemini fragt vor jedem Shell-Befehl nach Erlaubnis!\n# "Zeige alle Node-Prozesse die mehr als 500MB RAM nutzen"\n# → Gemini generiert: ps aux | grep node | awk ...\n# → Du siehst den Befehl VOR der Ausführung\n\n# "Lösche alle .log Dateien älter als 7 Tage in /var/log/app"\n# → find /var/log/app -name "*.log" -mtime +7 -delete', lang: 'bash' },
                { step: 'Sandbox konfigurieren', code: '// settings.json – Maximale Sicherheit\n{\n  "sandbox": true,\n  "trustedFolders": ["/home/user/projekt"],\n  "sandboxConfig": {\n    "allowNetwork": false,\n    "blockedCommands": ["rm -rf /", "sudo", "chmod 777", "curl"]\n  }\n}', lang: 'json' },
                { step: 'Nützliche Shell-Aufgaben', code: '# Git-Status zusammenfassen:\n# "Erstelle einen Bericht über den aktuellen Git-Status:\n#  welche Dateien geändert, welche neu, gibt es Konflikte?"\n\n# Performance-Analyse:\n# "Analysiere die Node.js App-Performance:\n#  CPU, RAM, Event Loop Lag der letzten Stunde"\n\n# Log-Analyse:\n# "Analysiere /var/log/nginx/error.log und\n#  zeige die häufigsten Fehler und mögliche Ursachen"', lang: 'bash' }
            ]
        },
        {
            id: 'kurs-6', badge: 'Fortgeschritten', icon: '🔄', duration: '~25 Min',
            title: 'Session Management & Rewind',
            description: 'Verwalte Konversationen professionell und nutze Checkpoints für sichere Workflows.',
            lernziele: ['Sessions speichern und fortsetzen', 'Checkpoints strategisch setzen', 'Rewind effektiv nutzen'],
            content: [
                { step: 'Sessions verwalten', code: '# Sessions auflisten:\ngemini --list-sessions\n# → Zeigt alle gespeicherten Sessions mit Datum\n\n# Im Dialog:\n/chat list\n/chat resume "feature-auth-refactoring"\n/chat rename "neuer-name"\n/chat delete "alte-session"', lang: 'bash' },
                { step: 'Checkpoint Strategie', code: '# Checkpoint BEVOR du etwas Riskantes machst:\n/checkpoint save "vor-db-migration"\n\n# Komplexes Refactoring starten:\n# "Migiere die Users-Tabelle von UUID zu ULID"\n# Falls etwas schiefgeht:\n/rewind restore "vor-db-migration"\n# → Alle Dateiänderungen werden rückgängig gemacht!', lang: 'bash' },
                { step: 'Auto-Checkpointing', code: '// settings.json\n{\n  "autoCheckpoint": true,\n  "checkpointFrequency": "before-file-write"\n  // Optionen: "before-file-write", "every-n-turns", "manual"\n}', lang: 'json' }
            ]
        },
        {
            id: 'kurs-7', badge: 'Fortgeschritten', icon: '🔌', duration: '~40 Min',
            title: 'MCP Server einrichten',
            description: 'Verbinde externe Dienste über das Model Context Protocol mit Gemini CLI.',
            lernziele: ['Öffentliche MCP Server nutzen', 'Verbindung zu Datenbanken herstellen', 'GitHub-Integration einrichten'],
            content: [
                { step: 'Verfügbare MCP Server', code: '# Beliebte öffentliche MCP Server:\nnpm install @modelcontextprotocol/server-filesystem\nnpm install @modelcontextprotocol/server-github\nnpm install @modelcontextprotocol/server-postgres\nnpm install @modelcontextprotocol/server-sqlite\nnpm install @modelcontextprotocol/server-brave-search', lang: 'bash' },
                { step: 'Konfiguration in settings.json', code: '// ~/.gemini/settings.json\n{\n  "mcpServers": {\n    "github": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-github"],\n      "env": {\n        "GITHUB_TOKEN": "ghp_dein_token_hier"\n      }\n    },\n    "mydb": {\n      "command": "npx",\n      "args": [\n        "-y",\n        "@modelcontextprotocol/server-postgres",\n        "postgresql://user:pass@localhost:5432/myapp"\n      ]\n    }\n  }\n}', lang: 'json' },
                { step: 'MCP Verbindung nutzen', code: '# Nach dem Neustart von Gemini CLI:\n/tools     # → Neue Tools von MCP Servern sichtbar!\n\n# GitHub nutzen:\n# "Liste alle offenen Issues in meinem Repo"\n# "Was sind die letzten 5 Pull Requests?"\n# "Erstelle ein neues Issue: Bug: Login schlägt fehl"\n\n# Datenbank nutzen:\n# "Welche Tabellen hat unsere Datenbank?"\n# "Zeige die 5 neuesten User-Registrierungen"', lang: 'bash' }
            ]
        },
        {
            id: 'kurs-8', badge: 'Experte', icon: '⚡', duration: '~45 Min',
            title: 'Automatisierung & CI/CD',
            description: 'Integriere Gemini CLI in Workflows, Makefiles, GitHub Actions und Deployment-Pipelines.',
            lernziele: ['Headless-Mode in Skripten nutzen', 'GitHub Actions Integration', 'Makefile-Targets mit AI'],
            content: [
                { step: 'Makefile mit AI-Targets', code: '# Makefile\nai-review:\n\t@echo "🤖 AI Code Review..."\n\tgemini -p "Führe einen vollständigen Code Review durch. Prüfe auf Bugs, Security-Issues und Performance. Verzeichnis: src/" \n\nai-docs:\n\t@echo "📝 Generiere Dokumentation..."\n\tgemini -p "Generiere vollständige API-Dokumentation aus src/routes/ im Markdown-Format" > docs/API.md\n\nai-changelog:\n\t@echo "📋 Erstelle Changelog..."\n\tDIFF=$$(git log --oneline v$(PREV_VERSION)..HEAD); \\\n\tgemini -p "Erstelle einen CHANGELOG Eintrag für Version $(VERSION) basierend auf: $$DIFF" >> CHANGELOG.md', lang: 'makefile' },
                { step: 'GitHub Actions Workflow', code: 'name: AI Code Quality\non:\n  pull_request:\n    branches: [main, develop]\n\njobs:\n  ai-review:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with: { fetch-depth: 0 }\n      \n      - name: Install Gemini CLI\n        run: npm install -g @google/gemini-cli\n      \n      - name: AI Review\n        env:\n          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}\n        run: |\n          DIFF=$(git diff origin/${{ github.base_ref }}...HEAD)\n          REVIEW=$(gemini -p "Review diesen PR Diff.\\n\\n$DIFF")\n          echo "$REVIEW" >> $GITHUB_STEP_SUMMARY', lang: 'yaml' },
                { step: 'Rollout-Skript mit AI-Validierung', code: '#!/bin/bash\n# deploy.sh\nset -e\n\necho "🤖 AI Pre-Deploy Check..."\nISSUES=$(gemini -p "Analysiere src/ auf kritische Bugs und Security-Issues die einen Deploy blocken würden. Antworte nur mit YES oder NO gefolgt von einer Begründung.")\n\nif [[ $ISSUES == NO* ]]; then\n  echo "❌ Deploy geblockt:"\n  echo "$ISSUES"\n  exit 1\nfi\n\necho "✅ AI Check bestanden – deploye..."\nnpm run build\nnpm run deploy', lang: 'bash' }
            ]
        },
        {
            id: 'kurs-9', badge: 'Experte', icon: '🛠️', duration: '~50 Min',
            title: 'Eigene Extensions bauen',
            description: 'Erweitere Gemini CLI mit eigenen Tools – von einfachen Shells bis zu vollständigen API-Integrationen.',
            lernziele: ['Extension-Struktur verstehen', 'Eigenes Tool implementieren', 'Extension in Gemini CLI registrieren'],
            content: [
                { step: 'Extension Grundstruktur', code: 'mkdir meine-extension\ncd meine-extension\nnpm init -y\n\n# package.json anpassen:\n# { "main": "index.js", "type": "module" }', lang: 'bash' },
                { step: 'Tool implementieren', code: '// meine-extension/index.js\nexport default {\n  name: "meine-extension",\n  version: "1.0.0",\n  tools: [\n    {\n      name: "jira_create_issue",\n      description: "Erstellt ein JIRA Issue",\n      parameters: {\n        title: { type: "string", description: "Issue-Titel", required: true },\n        description: { type: "string", description: "Beschreibung" },\n        priority: { type: "string", enum: ["low", "medium", "high"] }\n      },\n      async execute({ title, description, priority = "medium" }) {\n        const response = await fetch(`${process.env.JIRA_URL}/rest/api/3/issue`, {\n          method: "POST",\n          headers: {\n            "Authorization": `Bearer ${process.env.JIRA_TOKEN}`,\n            "Content-Type": "application/json"\n          },\n          body: JSON.stringify({\n            fields: { summary: title, description: { type: "text", text: description }, priority: { name: priority } }\n          })\n        });\n        const issue = await response.json();\n        return { issueKey: issue.key, url: `${process.env.JIRA_URL}/browse/${issue.key}` };\n      }\n    }\n  ]\n};', lang: 'javascript' },
                { step: 'Extension registrieren', code: '// settings.json\n{\n  "extensions": [\n    "/pfad/zu/meine-extension"\n  ]\n}\n\n# Oder als npm-Paket:\nnpm publish\n# → In settings.json:\n# { "extensions": ["meine-extension"] }', lang: 'json' }
            ]
        }
    ]
};

export const codelabs = {
    title: '🧪 Codelabs',
    intro: 'Hands-on Workshops – führe die Schritte selbst durch und nutze den Code-Playground.',
    items: [
        {
            id: 'lab-1', badge: 'Anfänger', icon: '🚀', duration: '15 Min',
            title: 'Codelab 1: Installation & erster Chat',
            goal: 'Gemini CLI installieren und den ersten Befehl absetzen.',
            steps: [
                { title: 'Node.js Version prüfen', code: 'node --version  # Mindestens v18.0.0\nnpm --version   # Mindestens v9.0.0', lang: 'bash' },
                { title: 'Gemini CLI installieren', code: 'npm install -g @google/gemini-cli\ngemini --version\n# → Gemini CLI v1.x.x', lang: 'bash' },
                { title: 'Ersten Chat starten', code: '# Terminal öffnen und eingeben:\ngemini\n# → Browser öffnet sich für Google-Login\n# → Nach Login: Gemini CLI-Prompt erscheint\n\n# Erste Nachricht:\n# "Hallo! Erkläre mir kurz was du kannst."', lang: 'bash' },
                { title: 'Einfache Aufgabe stellen', code: '# Im Gemini CLI Prompt:\n# "Schreibe eine JavaScript Funktion die prüft\n#  ob eine Zahl eine Primzahl ist. Mit Tests."', lang: 'bash' }
            ]
        },
        {
            id: 'lab-2', badge: 'Anfänger', icon: '📝', duration: '20 Min',
            title: 'Codelab 2: Projekt verstehen lassen',
            goal: 'Gemini CLI analysiert ein bestehendes Projekt vollständig.',
            steps: [
                { title: 'Testprojekt anlegen', code: 'mkdir test-projekt && cd test-projekt\nnpm init -y && npm install express\n\ncat > server.js << \'EOF\'\nconst express = require("express");\nconst app = express();\napp.use(express.json());\n\nconst users = [];\n\napp.post("/users", (req, res) => {\n  const user = { id: users.length + 1, ...req.body };\n  users.push(user);\n  res.status(201).json(user);\n});\n\napp.get("/users", (req, res) => res.json(users));\napp.listen(3000, () => console.log("Server läuft"));\nEOF', lang: 'bash' },
                { title: 'Gemini CLI starten', code: 'gemini\n\n# Im Gemini-Dialog:\n# "Analysiere server.js:\n#  1. Was macht der Code?\n#  2. Welche Sicherheitsprobleme gibt es?\n#  3. Was fehlt für Production-Reife?"', lang: 'bash' },
                { title: 'Verbesserungen implementieren', code: '# "Verbessere server.js:\n#  - Füge Input-Validierung hinzu\n#  - Füge proper Error Handling hinzu\n#  - Füge Helmet.js für Security-Headers hinzu\n#  - Installiere benötigte Pakete"\n\n# Gemini schreibt den verbesserten Code direkt!', lang: 'bash' },
                { title: 'Tests generieren lassen', code: '# "Schreibe Jest + Supertest Tests für alle Endpunkte.\n#  Installiere die Test-Dependencies auch."', lang: 'bash' }
            ]
        },
        {
            id: 'lab-3', badge: 'Anfänger', icon: '🧠', duration: '20 Min',
            title: 'Codelab 3: Memory & GEMINI.md',
            goal: 'Richte dauerhaften Projektkontext ein damit du nie wieder alles erklären musst.',
            steps: [
                { title: 'GEMINI.md erstellen', code: 'cat > GEMINI.md << \'EOF\'\n# Mein Projekt\n\n## Tech-Stack\n- Node.js 20 + TypeScript\n- Express.js + Zod (Validierung)\n- Prisma ORM + PostgreSQL\n- Jest + Supertest (Tests)\n\n## Konventionen\n- Async/Await, kein .then()\n- Zod-Schemas für alle Inputs\n- Alle Fehler mit custom Error-Klassen\n- Kommentare auf Deutsch\n\n## Verzeichnis\nsrc/routes/ – Express Router\nsrc/services/ – Business-Logik\nsrc/models/ – Prisma-Models\nEOF', lang: 'bash' },
                { title: 'Memory befüllen', code: 'gemini\n# Im Dialog:\n/memory add "Ich bevorzuge kurze, lesbare Funktionen (max 20 Zeilen)"\n/memory add "Return early pattern bevorzugen"\n/memory add "Keine Magic Numbers – immer Konstanten"\n/memory list', lang: 'bash' },
                { title: 'Kontext testen', code: '# Neues Terminal, Gemini neu starten:\ngemini\n\n# Ohne weitere Erklärung fragen:\n# "Erstelle einen User-Service mit CRUD-Operationen"\n# Gemini nutzt automatisch GEMINI.md + Memory!', lang: 'bash' }
            ]
        },
        {
            id: 'lab-4', badge: 'Fortgeschritten', icon: '🔧', duration: '30 Min',
            title: 'Codelab 4: Custom Commands',
            goal: 'Erstelle eigene Slash-Befehle für deine häufigsten Aufgaben.',
            steps: [
                { title: 'Commands-Verzeichnis anlegen', code: 'mkdir -p .gemini/commands', lang: 'bash' },
                { title: 'Review-Command erstellen', code: 'cat > .gemini/commands/review.md << \'EOF\'\n---\ndescription: Führt einen vollständigen Code Review durch\n---\n\nBitte reviewe {{file | "die aktuelle Datei"}} und gib Feedback zu:\n\n## Bugs & Logik\nGibt es offensichtliche Fehler oder falsche Annahmen?\n\n## Sicherheit\nSQL-Injection, XSS, unsichere Deserialisierung, etc.?\n\n## Performance\nUnnötige Datenbankabfragen, fehlende Indizes, N+1 Probleme?\n\n## Testbarkeit\nKann ich diese Funktion gut testen? Was fehlt?\n\nGib konkrete Code-Vorschläge.\nEOF', lang: 'bash' },
                { title: 'Weitere Commands erstellen', code: 'cat > .gemini/commands/commit.md << \'EOF\'\n---\ndescription: Generiert eine Commit-Message\n---\nAnalysiere die aktuellen git-Änderungen (git diff --staged)\nund schreibe eine Conventional Commit Message:\n\nFormat: <type>(<scope>): <description>\nTypes: feat, fix, refactor, docs, test, chore\n\nNur die Message, keine Erklärung.\nEOF', lang: 'bash' },
                { title: 'Commands nutzen', code: 'gemini\n# Im Dialog:\n/review src/auth/login.ts\n# → Vollständiger Review nach deinem Template!\n\n/commit\n# → Gemini liest git diff und schreibt Commit-Message', lang: 'bash' }
            ]
        },
        {
            id: 'lab-5', badge: 'Fortgeschritten', icon: '🌐', duration: '35 Min',
            title: 'Codelab 5: MCP Server verbinden',
            goal: 'Verbinde GitHub und eine Datenbank via MCP mit Gemini CLI.',
            steps: [
                { title: 'GitHub Token erstellen', code: '# GitHub → Settings → Developer Settings → Personal Access Tokens\n# Berechtigungen: repo, read:user, read:org\n\n# Token in Umgebungsvariable:\nexport GITHUB_TOKEN="ghp_dein_token_hier"\necho \'export GITHUB_TOKEN="ghp_..."\'  >> ~/.bashrc', lang: 'bash' },
                { title: 'MCP in settings.json konfigurieren', code: '// ~/.gemini/settings.json\n{\n  "mcpServers": {\n    "github": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-github"],\n      "env": {\n        "GITHUB_TOKEN": "${GITHUB_TOKEN}"\n      }\n    }\n  }\n}', lang: 'json' },
                { title: 'GitHub-Integration testen', code: '# Gemini neu starten:\ngemini\n\n# Im Dialog:\n/tools    # GitHub-Tools sollten erscheinen!\n\n# "Zeige alle offenen Issues in meinem Repository"\n# "Welche PRs warten auf meinen Review?"\n# "Erstelle ein Issue: Performance-Problem in der Suche"', lang: 'bash' },
                { title: 'GitHub-Workflow automatisieren', code: '# "Analysiere alle offenen Issues und:\n#  1. Priorisiere sie nach Dringlichkeit\n#  2. Weise passende Labels zu\n#  3. Erstelle für jeden Bug ein Fix-Ticket"', lang: 'bash' }
            ]
        },
        {
            id: 'lab-6', badge: 'Fortgeschritten', icon: '⏪', duration: '25 Min',
            title: 'Codelab 6: Checkpoints & Rewind',
            goal: 'Lerne Checkpoints zu nutzen um riskante Refactorings sicher durchzuführen.',
            steps: [
                { title: 'Test-Codebase vorbereiten', code: 'mkdir rewind-test && cd rewind-test\nnpm init -y\n\ncat > app.js << \'EOF\'\n// Altes Datenbankmodell (soll migriert werden)\nconst db = require("./db-mongo");\n\nasync function getUsers() {\n  return db.collection("users").find({}).toArray();\n}\n\nasync function createUser(data) {\n  return db.collection("users").insertOne(data);\n}\n\nmodule.exports = { getUsers, createUser };\nEOF', lang: 'bash' },
                { title: 'Checkpoint vor Refactoring', code: 'gemini\n/checkpoint save "vor-mongodb-zu-postgres-migration"\n# → Snapshot erstellt!\n\n# "Zeige mir alle Checkpoints"\n/checkpoint list', lang: 'bash' },
                { title: 'Riskantes Refactoring starten', code: '# Im Dialog:\n# "Migriere app.js und alle anderen Dateien von MongoDB\n#  zu PostgreSQL mit Prisma. Aktualisiere package.json\n#  und erstelle ein Prisma-Schema."\n\n# Gemini nimmt viele Änderungen vor...', lang: 'bash' },
                { title: 'Rewind wenn nötig', code: '# Falls etwas schiefgelaufen ist:\n/rewind restore "vor-mongodb-zu-postgres-migration"\n# → ALLE Dateien auf den Snapshot-Zustand zurückgesetzt!\n\n# Oder Schritt für Schritt:\n/rewind    # Letzten Schritt rückgängig', lang: 'bash' }
            ]
        },
        {
            id: 'lab-7', badge: 'Experte', icon: '⚡', duration: '40 Min',
            title: 'Codelab 7: Headless Scripting',
            goal: 'Baue mehrere nützliche Shell-Skripte die Gemini CLI im Headless-Modus nutzen.',
            steps: [
                { title: 'Auto-Commit-Message', code: '#!/bin/bash\n# git-ai-commit.sh\nset -e\n\nif git diff --cached --quiet; then\n  echo "Keine gestagten Änderungen."\n  exit 1\nfi\n\nDIFF=$(git diff --cached)\nMSG=$(gemini -p "Schreibe eine präzise Conventional Commit Message.\\nFormat: <type>(<scope>): <kurze Beschreibung>\\nTypes: feat|fix|refactor|docs|test|chore\\nNur die Message, nichts anderes!\\n\\nDiff:\\n${DIFF}")\n\necho "Commit-Message: $MSG"\nread -p "Commit? [j/n]: " ok\n[[ "$ok" == "j" ]] && git commit -m "$MSG"', lang: 'bash' },
                { title: 'PR-Beschreibung generieren', code: '#!/bin/bash\n# ai-pr.sh\nBASE=${1:-main}\nDIFF=$(git diff origin/$BASE...HEAD)\nGEMINI_OUTPUT=$(gemini -p "Schreibe eine GitHub PR-Beschreibung auf Deutsch.\\n## Was wurde geändert?\\n## Wie getestet?\\n## Screenshots (falls UI)\\n\\nBasierend auf diesem Diff:\\n$DIFF")\n\necho "$GEMINI_OUTPUT" | xclip -selection clipboard\necho "PR-Beschreibung in Zwischenablage kopiert!"', lang: 'bash' },
                { title: 'Code-Quality-Report', code: '#!/bin/bash\n# daily-report.sh\n# Täglich per Cron ausführen\n\nREPORT=$(gemini -p "Analysiere das gesamte src/-Verzeichnis und erstelle einen Code-Quality-Report:\\n- Kritische Bugs\\n- Security-Issues\\n- Technische Schulden\\n- Empfehlungen\\n\\nFormat: Markdown")\n\necho "$REPORT" > reports/$(date +%Y-%m-%d).md\necho "Report erstellt: reports/$(date +%Y-%m-%d).md"', lang: 'bash' },
                { title: 'Skripte installieren', code: 'chmod +x git-ai-commit.sh ai-pr.sh daily-report.sh\n\n# Aliases setzen:\necho "alias gaic=\'./git-ai-commit.sh\'" >> ~/.bashrc\necho "alias aipr=\'./ai-pr.sh\'" >> ~/.bashrc\nsource ~/.bashrc\n\n# Cron für täglichen Report:\ncrontab -e\n# → 0 9 * * * cd /pfad/zum/projekt && ./daily-report.sh', lang: 'bash' }
            ]
        },
        {
            id: 'lab-8', badge: 'Experte', icon: '🏗️', duration: '60 Min',
            title: 'Codelab 8: Eigene Extension bauen',
            goal: 'Schreibe eine vollständige Gemini CLI Extension die mit einer externen API kommuniziert.',
            steps: [
                { title: 'Extension-Projekt anlegen', code: 'mkdir gemini-extension-jira\ncd gemini-extension-jira\nnpm init -y\nnpm install node-fetch\n\n# package.json – type: module hinzufügen:\nnode -e "const p=require(\'./package.json\'); p.type=\'module\'; require(\'fs\').writeFileSync(\'package.json\',JSON.stringify(p,null,2))"', lang: 'bash' },
                { title: 'Tools implementieren', code: '// index.js\nexport default {\n  name: "jira-extension",\n  version: "1.0.0",\n  tools: [\n    {\n      name: "list_issues",\n      description: "Listet offene JIRA Issues auf",\n      parameters: {\n        project: { type: "string", description: "Projekt-Key z.B. MYAPP" },\n        maxResults: { type: "number", description: "Max Anzahl (default 10)" }\n      },\n      async execute({ project, maxResults = 10 }) {\n        const res = await fetch(\n          `${process.env.JIRA_URL}/rest/api/3/search?jql=project=${project}+AND+status!=Done&maxResults=${maxResults}`,\n          { headers: { Authorization: `Bearer ${process.env.JIRA_TOKEN}` }}\n        );\n        const data = await res.json();\n        return data.issues.map(i => ({ key: i.key, summary: i.fields.summary, status: i.fields.status.name }));\n      }\n    }\n  ]\n};', lang: 'javascript' },
                { title: 'Extension registrieren & testen', code: '// ~/.gemini/settings.json\n{\n  "extensions": [\n    "/pfad/zu/gemini-extension-jira"\n  ]\n}\n\n# Gemini neu starten:\ngemini\n/tools    # → list_issues sollte erscheinen!\n\n# Nutzung:\n# "Liste alle offenen Issues im MYAPP Projekt"', lang: 'json' }
            ]
        }
    ]
};
