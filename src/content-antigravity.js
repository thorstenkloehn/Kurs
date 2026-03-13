// Google Antigravity Content Definition – Agent-First AI IDE

export const lernpfad = {
    title: '📍 Lernpfad – Google Antigravity IDE',
    intro: 'Willkommen in der Zukunft der Softwareentwicklung. Antigravity ist keine einfache IDE, sondern ein Ökosystem aus autonomen KI-Agenten, die deine Projekte steuern.',
    steps: [
        {
            num: 1, title: 'Installation & Setup',
            desc: 'Lade die Antigravity IDE herunter und verbinde deinen Google-Account für den Zugriff auf Gemini 3 Pro.',
            code: '# Antigravity ist eine Desktop-App (Windows, macOS, Linux)\n# Nach der Installation:\n# 1. Öffne Antigravity\n# 2. Gehe zu Mission Control\n# 3. Verbinde deinen Google Cloud Account',
            lang: 'text',
            chips: [
                { label: 'Download IDE', url: 'https://antigravity.google/' },
                { label: 'Cloud Setup', url: 'https://console.cloud.google.com/' }
            ]
        },
        {
            num: 2, title: 'Mission Control & Workspaces',
            desc: 'In Mission Control verwaltest du deine Agenten. Erstelle deinen ersten Workspace für ein bestehendes oder neues Projekt.',
            code: '// In der UI:\n// Datei > Neuer Workspace > Lokalen Ordner wählen\n// Der Agent beginnt sofort mit der Indizierung deiner Codebase.',
            lang: 'text'
        },
        {
            num: 3, title: 'Der erste Agent-Task',
            desc: 'Weise dem Agenten eine komplexe Aufgabe zu. Er wird einen Plan erstellen, den du reviewen kannst.',
            code: '// Prompt in der Agent-Leiste:\n// "Migriere das gesamte Projekt von Webpack zu Vite und fix alle daraus resultierenden Fehler."',
            lang: 'text'
        }
    ]
};

export const module = {
    title: '📦 Antigravity Konzepte',
    intro: 'Verstehe, wie die agent-first Architektur funktioniert.',
    groups: [
        {
            title: '🤖 Die Agent-Architektur',
            items: [
                {
                    title: 'Agent-First Paradigm',
                    icon: '🧠',
                    content: 'Im Gegensatz zu Copilots, die Vorschläge machen, arbeiten Antigravity Agenten autonom über Datei-, Terminal- und Browser-Grenzen hinweg.',
                    tips: [
                        'Agenten können Aufgaben planen und selbst verifizieren',
                        'Nutze den Mission Control Tab zur Überwachung',
                        'Delegiere komplexe Refactorings'
                    ]
                },
                {
                    title: 'Mission Control (Dashboard)',
                    icon: '🚀',
                    content: 'Das zentrale Dashboard zur Orchestrierung mehrerer Agenten, die parallel an verschiedenen Aufgaben arbeiten.',
                    code: 'In Mission Control siehst du:\n- Aktive Tasks\n- Generierte Artifacts\n- Browser-Recording der Agenten-Aktionen',
                    lang: 'text'
                }
            ]
        },
        {
            title: '📄 Artifacts & Planung',
            items: [
                {
                    title: 'Implementation Plans (Blueprints)',
                    icon: '🗺️',
                    content: 'Bevor ein Agent Code schreibt, erstellt er einen detaillierten Plan. Du kannst diesen Plan kommentieren oder anpassen.',
                    code: '1. Analyse der package.json\n2. Installation von Vite\n3. Konfiguration der vite.config.ts\n4. Validierung der Imports',
                    lang: 'text'
                },
                {
                    title: 'Artifacts & Verification',
                    icon: '✅',
                    content: 'Agenten liefern greifbare Artifacts (Pläne, Testberichte, Screenshots). Sie nutzen den integrierten Browser, um Web-UIs zu verifizieren.',
                    tips: [
                        'Reviewe Pläne vor der Ausführung',
                        'Prüfe Screenshots bei UI-Änderungen',
                        'Nutze die Rewind-Funktion bei Fehlern'
                    ]
                }
            ]
        },
        {
            title: '🛠️ Erweiterungen',
            items: [
                {
                    title: 'Agent Skills (SKILL.md)',
                    icon: '⚡',
                    content: 'Erweitere die Fähigkeiten deiner Agenten durch Skills. Diese werden on-demand geladen, um das Kontextfenster zu schonen.',
                    code: '# SKILL.md\ndescription: API-Integration-Spezialist\n---\nFokus auf REST/GraphQL Patterns...',
                    lang: 'markdown'
                }
            ]
        }
    ]
};

export const kurse = {
    title: '🎓 Antigravity Masterclass',
    intro: 'Werde zum Agenten-Orchestrator.',
    items: [
        {
            id: 'ag-master', badge: 'Experte', icon: '🏆',
            title: 'Autonome Feature-Entwicklung',
            duration: '45 Min',
            description: 'Lerne, wie du eine komplette End-to-End Funktion nur durch Agenten-Steuerung bauen lässt.',
            lernziele: ['Agent-Briefing optimieren', 'Multi-Step Pläne reviewen', 'Self-Healing Prozesse steuern'],
            content: [
                {
                    step: 'Briefing & Planung',
                    code: '"Baue ein User-Dashboard mit Auth-Integration und Unit-Tests."',
                    lang: 'text'
                },
                {
                    step: 'Review & Ausführung',
                    code: 'Prüfe den generierten Blueprint und klicke auf "Apply Plan".',
                    lang: 'text'
                }
            ]
        }
    ]
};

export const codelabs = {
    title: '🧪 Antigravity Labs',
    intro: 'Interaktive Experimente in der IDE.',
    items: [
        {
            id: 'lab-ag-ui', badge: 'Fortgeschritten', icon: '🌐', duration: '30 Min',
            title: 'Visual Regression Lab',
            goal: 'Lasse den Agenten ein CSS-Refactoring durchführen und die UI mittels Browser-Verification testen.',
            steps: [
                { title: 'CSS Refactor Task', code: '"Mache die UI responsive und nutze CSS Variables."', lang: 'text' },
                { title: 'Browser Verification', code: 'Der Agent öffnet den integrierten Browser und prüft Breakpoints.', lang: 'text' }
            ]
        }
    ]
};

export const tutorials = {
    title: '📖 Dokumentation',
    intro: 'Alles über die Konfiguration von Antigravity.',
    groups: [
        {
            title: 'Konfiguration',
            items: [
                {
                    title: 'Agent Rules (.agent/rules)',
                    icon: '📜',
                    content: 'Definiere projektweite Regeln, an die sich alle Agenten halten müssen (z.B. Codestil).',
                    code: '# .agent/rules/style.md\n- Nutze immer Early Returns\n- Dokumentiere public Methoden in JSDoc',
                    lang: 'markdown'
                }
            ]
        }
    ]
};

export const codewiki = {
    title: '📚 Antigravity Wiki',
    intro: 'Wichtige Begriffe der Agent-IDE.',
    categories: [
        {
            name: 'IDE Konzepte',
            items: [
                { term: 'Mission Control', definition: 'Das Dashboard zur Agenten-Verwaltung.' },
                { term: 'Artifact', definition: 'Strukturiertes Output-Dokument eines Agenten.' },
                { term: 'Agent Skill', definition: 'Modulare Fähigkeit, die on-demand geladen wird.' },
                { term: 'Self-Healing', definition: 'KI-Prozess zur automatischen Fehlerkorrektur.' }
            ]
        }
    ]
};
