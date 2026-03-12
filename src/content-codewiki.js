// content-codewiki.js – Glossary and Technical Reference

export const codewiki = {
    title: '🧠 CodeWiki – Gemini CLI Referenz',
    intro: 'Das ultimative Glossar für alle Befehle, Konzepte und Konfigurationen von Gemini CLI.',
    categories: [
        {
            name: 'Grundlagen',
            items: [
                { term: 'CLI', definition: 'Command Line Interface – Die textbasierte Schnittstelle zur Kommunikation mit Gemini.' },
                { term: 'Interactive Mode', definition: 'Der Standard-Modus von Gemini CLI, in dem ein Dialog geführt wird.' },
                { term: 'Headless Mode', definition: 'Ausführung ohne Dialog, ideal für Scripts und CI/CD (--headless oder -p).' },
                { term: 'Sandbox', definition: 'Eine isolierte Umgebung zur sicheren Ausführung von Shell-Befehlen.' },
                { term: 'Token', definition: 'Die kleinste Einheit der Textverarbeitung. Ein Wort besteht oft aus mehreren Tokens.' }
            ]
        },
        {
            name: 'Konfiguration',
            items: [
                { term: 'settings.json', definition: 'Die zentrale Konfigurationsdatei (~/.gemini/settings.json).' },
                { term: 'GEMINI.md', definition: 'Projektspezifischer Kontext, der automatisch geladen wird.' },
                { term: '.geminiignore', definition: 'Dateien/Ordner, die vom Kontext ausgeschlossen werden sollen.' },
                { term: 'trustedFolders', definition: 'Verzeichnisse, in denen Gemini uneingeschränkt Shell-Befehle ausführen darf.' },
                { term: 'thinkingBudget', definition: 'Parameter, der steuert, wie viel Zeit sich das Modell zum "Nachdenken" nimmt.' }
            ]
        },
        {
            name: 'Features & Begriffe',
            items: [
                { term: 'MCP', definition: 'Model Context Protocol – Standard zur Anbindung externer Datenquellen (Tools).' },
                { term: 'Memory', definition: 'Persistente Fakten, die sich Gemini über Sessions hinweg merkt (/memory).' },
                { term: 'Checkpoint', definition: 'Ein Snapshot des aktuellen Zustands und des Dateisystems (/checkpoint).' },
                { term: 'Rewind', definition: 'Rückgängigmachen von Änderungen und Zurückspringen in der Historie (/rewind).' },
                { term: 'Subagent', definition: 'Spezialisierte KI-Instanzen für Teilaufgaben (Code-Review, Tests).' },
                { term: 'Context Window', definition: 'Der maximale Textanteil (Tokens), den Gemini gleichzeitig verarbeiten kann (bis zu 1M).' }
            ]
        },
        {
            name: 'Wichtige Commands',
            items: [
                { term: '/help', definition: 'Zeigt alle verfügbaren Slash-Befehle an.' },
                { term: '/tools', definition: 'Listet alle aktiven Werkzeuge (Filesystem, Web, MCP) auf.' },
                { term: '/plan', definition: 'Schaltet den Plan-Modus ein/aus für sicherere Refactorings.' },
                { term: '/stats', definition: 'Zeigt Token-Verbrauch und geschätzte Kosten an.' },
                { term: '/compress', definition: 'Komprimiert den bisherigen Chatverlauf um Token zu sparen.' }
            ]
        }
    ]
};
