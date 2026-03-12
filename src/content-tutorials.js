// content-tutorials.js – Tutorials, Referenz, Ressourcen, Development

export const tutorials = {
    title: '📖 Tutorials & Referenz',
    intro: 'Technische Hintergründe, vollständige Referenz und Entwickler-Ressourcen.',
    groups: [
        {
            title: '🧠 Modell & KI',
            items: [
                {
                    title: 'Das richtige Modell wählen',
                    icon: '🎯',
                    content: 'Gemini CLI unterstützt mehrere Modelle. Wähle je nach Aufgabe und Budget:',
                    table: [
                        ['Modell', 'Kontextfenster', 'Stärke', 'Wann nutzen?'],
                        ['gemini-2.5-pro', '1.000.000 Token', 'Höchste Qualität, Reasoning', 'Große Codebasen, komplexe Analyse, Architektur'],
                        ['gemini-2.5-flash', '1.000.000 Token', 'Schnell & günstig', 'Quick-Fixes, einfache Fragen, hohe Anfragerate'],
                        ['gemini-2.0-flash', '128.000 Token', 'Ausgewogen', 'Standard Entwicklungsaufgaben']
                    ]
                },
                {
                    title: 'Prompt Engineering für Entwickler',
                    icon: '✍️',
                    content: 'So formulierst du Anfragen für maximale Qualität:',
                    tips: [
                        'Sei spezifisch: "Refactore Funktion X in src/utils.js zeile 42-80" statt "verbessere den Code"',
                        'Gib Kontext: "Wir nutzen Express 5, TypeScript strict, Prisma ORM"',
                        'Definiere das Ergebnis: "Antwort als JSON-Objekt" oder "nur der Code, keine Erklärung"',
                        'Nutze GEMINI.md für projektweite Regeln – dann sparst du dir Kontext in jeder Anfrage',
                        'Iteriere: Starte grob, verfeinere dann: "Mach es noch kürzer / füge Error Handling hinzu"',
                        'Zeige Beispiele: "Mache es wie in src/services/userService.ts"'
                    ]
                },
                {
                    title: 'Token-Verbrauch verstehen',
                    icon: '📊',
                    content: 'Tokens sind die Grundeinheit der Abrechnung. 1 Token ≈ 0.75 Wörter auf Deutsch.',
                    code: '# Token-Statistiken anzeigen:\n/stats\n# → Input Tokens: 12.450\n# → Output Tokens: 3.210\n# → Gecachte Tokens: 8.000 (64% gespart!)\n# → Gesamtkosten dieser Session: ~$0.02\n\n# Kosten reduzieren:\n# 1. Token Caching aktivieren (settings.json: tokenCaching: true)\n# 2. .geminiignore für node_modules/, dist/ etc.\n# 3. Kontext-Fenster begrenzen: contextWindowSizeMB: 5',
                    lang: 'bash'
                }
            ]
        },
        {
            title: '📚 Command Reference',
            items: [
                {
                    title: 'Alle Slash-Befehle',
                    icon: '⌨️',
                    content: 'Vollständige Referenz aller eingebauten Slash-Befehle:',
                    table: [
                        ['Befehl', 'Beschreibung'],
                        ['/help', 'Alle Befehle anzeigen'],
                        ['/memory add "text"', 'Persistente Erinnerung hinzufügen'],
                        ['/memory list', 'Alle Erinnerungen anzeigen'],
                        ['/memory remove N', 'Erinnerung N löschen'],
                        ['/chat list', 'Alle Sessions anzeigen'],
                        ['/chat resume NAME', 'Session NAME fortsetzen'],
                        ['/chat rename NAME', 'Aktuelle Session umbenennen'],
                        ['/tools', 'Alle verfügbaren Tools anzeigen'],
                        ['/stats', 'Token-Verbrauch anzeigen'],
                        ['/plan on|off', 'Plan Mode ein/ausschalten'],
                        ['/checkpoint save NAME', 'Checkpoint erstellen'],
                        ['/checkpoint list', 'Checkpoints anzeigen'],
                        ['/checkpoint restore NAME', 'Checkpoint wiederherstellen'],
                        ['/rewind', 'Letzten Schritt rückgängig machen'],
                        ['/theme NAME', 'Theme wechseln'],
                        ['/model NAME', 'Modell für diese Session wechseln'],
                        ['/compress', 'Konversationskontext komprimieren'],
                        ['/quit', 'Gemini CLI beenden']
                    ]
                },
                {
                    title: 'Keyboard Shortcuts',
                    icon: '⚡',
                    content: 'Produktivitätstipps im interaktiven Modus:',
                    table: [
                        ['Shortcut', 'Aktion'],
                        ['Ctrl+C', 'Aktuelle Anfrage abbrechen'],
                        ['Ctrl+D', 'Gemini CLI beenden'],
                        ['↑ / ↓', 'In der Eingabe-Historie navigieren'],
                        ['Tab', 'Auto-Vervollständigung für Slash-Befehle'],
                        ['Ctrl+L', 'Terminal leeren'],
                        ['Ctrl+R', 'Eingabe-Historie durchsuchen'],
                        ['Shift+Enter', 'Neue Zeile ohne Absenden'],
                        ['Alt+Enter', 'Multiline-Eingabe'],
                        ['Ctrl+K', 'Eingabe löschen']
                    ]
                },
                {
                    title: 'CLI Flags & Optionen',
                    icon: '🚩',
                    content: 'Alle Kommandozeilen-Optionen für Gemini CLI:',
                    code: '# Hilfe:\ngemini --help\n\n# Prompt direkt übergeben (Headless):\ngemini -p "Deine Anfrage"\ngemini --prompt "Deine Anfrage"\n\n# Bestimmtes Modell nutzen:\ngemini --model gemini-2.5-flash\n\n# Konfigurationsdatei angeben:\ngemini --config /pfad/settings.json\n\n# Sessions:\ngemini --list-sessions\ngemini --resume SESSION-NAME\n\n# Output-Format:\ngemini -p "Frage" --output json\ngemini -p "Frage" --output markdown\n\n# Debug-Modus:\ngemini --debug\nDEBUG="gemini:*" gemini',
                    lang: 'bash'
                }
            ]
        },
        {
            title: '🔧 Configuration Reference',
            items: [
                {
                    title: 'Vollständige settings.json Referenz',
                    icon: '📋',
                    content: 'Alle verfügbaren Einstellungsoptionen mit Beschreibung:',
                    code: '// ~/.gemini/settings.json\n{\n  // Modell-Einstellungen\n  "model": "gemini-2.5-pro",\n  "generationSettings": {\n    "temperature": 0.7,        // 0.0–2.0\n    "topP": 0.95,              // 0.0–1.0\n    "thinkingBudget": "medium", // low|medium|high|max\n    "maxOutputTokens": 8192\n  },\n\n  // UI\n  "theme": "dark",             // dark|light|monokai|...\n\n  // Performance\n  "tokenCaching": true,\n  "cacheStrategy": "aggressive", // conservative|aggressive\n  "contextWindowSizeMB": 10,\n\n  // Sicherheit\n  "sandbox": true,\n  "trustedFolders": ["/pfad/zum/projekt"],\n\n  // Session\n  "autoSave": true,\n  "autoCheckpoint": true,\n  "checkpointFrequency": "before-file-write",\n\n  // Telemetry\n  "telemetry": false,\n\n  // MCP Server\n  "mcpServers": { /* ... */ },\n\n  // Extensions\n  "extensions": [],\n\n  // Custom System Prompt\n  "systemPrompt": ""\n}',
                    lang: 'json'
                },
                {
                    title: 'Umgebungsvariablen',
                    icon: '🌍',
                    content: 'Alle unterstützten Umgebungsvariablen:',
                    table: [
                        ['Variable', 'Beschreibung', 'Beispiel'],
                        ['GEMINI_API_KEY', 'API-Key für direkte Auth', 'AIza...'],
                        ['GEMINI_MODEL', 'Standard-Modell überschreiben', 'gemini-2.5-flash'],
                        ['GEMINI_SANDBOX', 'Sandbox aktivieren', 'true'],
                        ['GEMINI_TELEMETRY', 'Telemetry ein/ausschalten', 'false'],
                        ['GEMINI_CONFIG', 'Pfad zur settings.json', '/etc/gemini/settings.json'],
                        ['GOOGLE_APPLICATION_CREDENTIALS', 'Service-Account für Enterprise', '/pfad/key.json'],
                        ['DEBUG', 'Debug-Logging', 'gemini:*'],
                        ['HTTP_PROXY / HTTPS_PROXY', 'Proxy-Konfiguration', 'http://proxy:8080']
                    ]
                },
                {
                    title: 'Memory Import Processor',
                    icon: '🗄️',
                    content: 'Gemini CLI kann Memories aus verschiedenen Formaten importieren – z.B. aus alten Chat-Exports oder Dokumenten.',
                    code: '# Memory aus Datei importieren:\n# Die Datei muss Markdown-Format haben:\ncat > my-memories.md << EOF\n# Meine Entwickler-Präferenzen\n\n- Ich verwende VS Code\n- Ich bevorzuge Linux\n- Sprache: Deutsch\n- Framework: Next.js 15\nEOF\n\n# Import:\n/memory import my-memories.md\n\n# Alle Memories:\n/memory list',
                    lang: 'bash'
                }
            ]
        },
        {
            title: '🔐 Sicherheit & Policy Engine',
            items: [
                {
                    title: 'Policy Engine',
                    icon: '⚖️',
                    content: 'Die Policy Engine erlaubt feinkörnige Kontrolle über welche Aktionen Gemini CLI ausführen darf.',
                    code: '// settings.json – Granulare Policy-Konfiguration\n{\n  "policyEngine": {\n    "tools": {\n      "shell": {\n        "allowed": true,\n        "requireConfirmation": true,\n        "blockedPatterns": ["rm -rf", "sudo", "chmod 777", "> /dev/null 2>&1 &"]\n      },\n      "writeFile": {\n        "allowed": true,\n        "requireConfirmation": false,\n        "allowedExtensions": [".js", ".ts", ".json", ".md"]\n      },\n      "network": {\n        "allowed": false\n      },\n      "readFile": {\n        "allowed": true\n      }\n    }\n  }\n}',
                    lang: 'json'
                },
                {
                    title: 'Sicherheits-Best-Practices',
                    icon: '✅',
                    content: 'Empfehlungen für sicheren Produktiveinsatz:',
                    tips: [
                        'Sandbox immer aktiviert in Produktionsumgebungen',
                        'API-Keys nur via Umgebungsvariablen – nie in Settings-Dateien einchecken',
                        '.geminiignore pflegen: .env*, secrets/, credentials/ ausschließen',
                        'Trusted Folders minimal halten – nur aktive Projektverzeichnisse',
                        'Policy Engine für Shell-Befehle konfigurieren (blockedPatterns)',
                        'Telemetry in sensiblen Umgebungen deaktivieren',
                        'Regelmäßig API-Keys rotieren und Nutzung im Google Cloud Console prüfen'
                    ]
                },
                {
                    title: 'Enterprise Setup',
                    icon: '🏢',
                    content: 'Gemini CLI in Unternehmensumgebungen absichern und zentral verwalten.',
                    code: '// /etc/gemini/enterprise-policy.json (zentrale Policy)\n{\n  "auth": {\n    "type": "service-account",\n    "keyFile": "/etc/gemini/sa-key.json"\n  },\n  "allowedModels": ["gemini-2.5-pro"],\n  "mandatorySettings": {\n    "sandbox": true,\n    "telemetry": false\n  },\n  "dataResidency": "EU",\n  "proxy": "https://proxy.firma.de:8080",\n  "auditLog": "/var/log/gemini-audit.log"\n}',
                    lang: 'json'
                }
            ]
        },
        {
            title: '📊 Tools Reference',
            items: [
                {
                    title: 'Eingebaute Tools',
                    icon: '🛠️',
                    content: 'Gemini CLI hat folgende eingebaute Tools die es nutzen kann:',
                    table: [
                        ['Tool', 'Beschreibung', 'Beispiel-Aufruf'],
                        ['read_file', 'Dateiinhalt lesen', '"Zeige mir src/auth.js"'],
                        ['write_file', 'Datei schreiben/überschreiben', '"Erstelle src/utils.ts"'],
                        ['edit_file', 'Datei bearbeiten (Diff)', '"Ändere Zeile 42 in..."'],
                        ['shell', 'Shell-Befehl ausführen', '"Starte den Test-Server"'],
                        ['web_search', 'Google-Suche durchführen', '"Neueste Express.js Docs"'],
                        ['web_fetch', 'URL abrufen', '"Lies https://docs.example.com"'],
                        ['list_files', 'Verzeichnis auflisten', '"Zeige alle .ts Dateien in src/"'],
                        ['create_directory', 'Verzeichnis erstellen', '"Erstelle src/services/"'],
                        ['move_file', 'Datei verschieben', '"Benenne auth.js um zu auth.ts"'],
                        ['delete_file', 'Datei löschen', '"Lösche die alte utils.js"']
                    ]
                },
                {
                    title: 'Tools konfigurieren',
                    icon: '⚙️',
                    content: 'Kontrolliere welche eingebauten Tools Gemini CLI nutzen darf.',
                    code: '// settings.json\n{\n  "tools": {\n    "enabled": ["read_file", "write_file", "web_search"],\n    "disabled": ["shell", "delete_file"],\n    "confirmBeforeUse": ["write_file", "edit_file"]\n  }\n}\n\n# Tools in der Session anzeigen:\n/tools',
                    lang: 'json'
                }
            ]
        },
        {
            title: '❓ Ressourcen & Support',
            items: [
                {
                    title: 'FAQ – Häufige Fragen',
                    icon: '❓',
                    content: '',
                    table: [
                        ['Frage', 'Antwort'],
                        ['Ist Gemini CLI kostenlos?', 'Ja, mit Google-Account für persönliche Nutzung. Enterprise-Nutzung über API-Key ist kostenpflichtig.'],
                        ['Welche Node.js Version brauche ich?', 'Mindestens Node.js 18.0.0'],
                        ['Werden meine Daten gespeichert?', 'Sessions lokal in ~/.gemini/. Anfragen gehen an Google Server. Telemetry kann deaktiviert werden.'],
                        ['Funktioniert es Offline?', 'Nein, Gemini CLI benötigt eine Internetverbindung für das Modell.'],
                        ['Wie groß darf mein Projekt sein?', 'Bis zu 1 Million Tokens Kontext. Mit .geminiignore und contextWindowSizeMB kontrollierbar.'],
                        ['Kann ich mehrere Modelle nutzen?', 'Ja, per /model MODELL-NAME in der Session oder per Model Routing in settings.json.']
                    ]
                },
                {
                    title: 'Troubleshooting',
                    icon: '🔍',
                    content: 'Häufige Probleme und ihre Lösungen:',
                    table: [
                        ['Problem', 'Ursache', 'Lösung'],
                        ['gemini: command not found', 'Globale npm-Pakete nicht im PATH', 'npm config get prefix → Pfad zu $PATH hinzufügen'],
                        ['Authentication failed', 'Session abgelaufen oder falscher Account', 'gemini --logout; gemini --login'],
                        ['Quota exceeded', 'Zu viele Anfragen', 'Model Routing aktivieren oder API-Key mit höherem Limit nutzen'],
                        ['Context window full', 'Zu viele Dateien im Kontext', '.geminiignore erweitern; /compress nutzen'],
                        ['MCP server not connecting', 'Falscher Pfad oder fehlende Berechtigungen', '/tools prüfen; debug: DEBUG=gemini:* gemini'],
                        ['Editor öffnet sich beim Start', 'Kein $EDITOR gesetzt', 'export EDITOR=nano oder export EDITOR=code']
                    ]
                },
                {
                    title: 'Uninstall',
                    icon: '🗑️',
                    content: 'Gemini CLI vollständig deinstallieren:',
                    code: '# CLI deinstallieren:\nnpm uninstall -g @google/gemini-cli\n\n# Lokale Daten löschen (Sessions, Settings, Memory):\nrm -rf ~/.gemini\n\n# Projektspezifische Daten:\nrm -rf .gemini GEMINI.md .geminiignore\n\n# Umgebungsvariablen aus .bashrc/.zshrc entfernen:\n# GEMINI_API_KEY, GEMINI_MODEL, etc.',
                    lang: 'bash'
                }
            ]
        },
        {
            title: '🛠️ Development & Contributing',
            items: [
                {
                    title: 'Lokale Entwicklungsumgebung',
                    icon: '💻',
                    content: 'Richte eine lokale Entwicklungsumgebung für Gemini CLI Contributions ein.',
                    code: '# Repository klonen:\ngit clone https://github.com/google/gemini-cli\ncd gemini-cli\n\n# Dependencies installieren:\nnpm install\n\n# Build erstellen:\nnpm run build\n\n# Lokal testen:\nnode packages/cli/dist/index.js\n\n# Tests ausführen:\nnpm test\nnpm run test:integration\n\n# Watch Mode für Entwicklung:\nnpm run dev',
                    lang: 'bash'
                },
                {
                    title: 'NPM Package Struktur',
                    icon: '📦',
                    content: 'Gemini CLI ist als Monorepo aufgebaut:',
                    table: [
                        ['Paket', 'Beschreibung'],
                        ['packages/cli', 'Hauptpaket – CLI-Interface und User-Experience'],
                        ['packages/core', 'Kernlogik – Model-Communication, Session Management'],
                        ['packages/tools', 'Eingebaute Tools (read_file, shell, web_search, etc.)'],
                        ['packages/extensions', 'Extension-System für Drittanbieter-Tools'],
                        ['packages/mcp', 'Model Context Protocol Client-Implementierung']
                    ]
                },
                {
                    title: 'Contribution Guide',
                    icon: '🤝',
                    content: 'So trägst du zu Gemini CLI bei:',
                    tips: [
                        'Issue auf GitHub eröffnen und diskutieren bevor du einen großen PR erstellst',
                        'Tests schreiben für jede neue Feature (Coverage > 80%)',
                        'Conventional Commits nutzen: feat:, fix:, docs:, test:',
                        'TypeScript strict mode – keine any Types ohne Begründung',
                        'Dokumentation in docs/ aktualisieren bei neuen Features',
                        'Breaking Changes in BREAKING-CHANGES.md dokumentieren',
                        'PR-Template vollständig ausfüllen'
                    ]
                },
                {
                    title: 'Integration Testing',
                    icon: '🧪',
                    content: 'So führst du Integrationstests durch:',
                    code: '# Integrationstests erfordern einen echten API-Key:\nexport GEMINI_API_KEY="dein-test-key"\n\n# Alle Integrationstests:\nnpm run test:integration\n\n# Bestimmte Test-Suite:\nnpm run test:integration -- --grep "MCP"\nnpm run test:integration -- --grep "file management"\n\n# Mit detailliertem Output:\nnpm run test:integration -- --verbose\n\n# E2E-Tests:\nnpm run test:e2e',
                    lang: 'bash'
                }
            ]
        }
    ]
};
