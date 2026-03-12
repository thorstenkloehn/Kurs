// Google AI Studio Content Definition - Erweitert
export const lernpfad = {
    title: '📍 Lernpfad – Google AI Studio',
    intro: 'Der schnellste Weg von der Idee zum ersten Gemini-API Call. Lerne, wie du Prompts perfektionierst und in Code verwandelst.',
    steps: [
        {
            num: 1, title: 'Einstieg & Interface',
            desc: 'Melde dich mit deinem Google-Konto an und erkunde das Interface. Erfahre, wo du Modelle wählst und Einstellungen vornimmst.',
            youtube: '9xE2DTxGvTY', // Platzhalter
            code: '# Öffne im Browser:\nhttps://aistudio.google.com/',
            lang: 'text',
            chips: [{ label: 'AI Studio Home', url: 'https://aistudio.google.com/' }]
        },
        {
            num: 2, title: 'Dein erster Chat-Prompt',
            desc: 'Interagiere direkt mit Gemini 1.5 Pro. Nutze System Instructions, um das Verhalten der KI festzulegen.',
            code: 'System Instruction: "Du bist ein erfahrener Cloud-Architekt."\nPrompt: "Entwirf eine skalierbare Architektur für eine E-Commerce App."',
            lang: 'text'
        },
        {
            num: 3, title: 'Strukturierte Daten & JSON',
            desc: 'Lerne, wie du Gemini dazu bringst, Daten in einem exakten JSON-Format zurückzugeben.',
            code: 'Response MIME type: application/json\nPrompt: "Extrahiere Name und Preis aus diesem Text: Das iPhone 15 kostet 999 Euro."',
            lang: 'text'
        },
        {
            num: 4, title: 'Multimodalität nutzen',
            desc: 'Lade Bilder, PDFs oder Videos hoch und stelle Fragen dazu. Gemini analysiert den visuellen Kontext.',
            code: '# Beispiel: Lade ein Diagramm hoch\nPrompt: "Erkläre den Datenfluss in diesem Diagramm."',
            lang: 'text'
        },
        {
            num: 5, title: 'Vom Prompt zum Code',
            desc: 'Exportiere deinen fertigen Prompt als Python, JavaScript oder cURL Code-Snippet.',
            code: '// Beispiel Node.js Export\nconst genAI = new GoogleGenerativeAI(process.env.API_KEY);\nconst model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });',
            lang: 'javascript'
        }
    ]
};

export const module = {
    title: '📦 Module – Google AI Studio',
    intro: 'Tiefe Einblicke in die Funktionen von AI Studio.',
    groups: [
        {
            title: '⚙️ Core Features',
            items: [
                {
                    title: 'System Instructions',
                    icon: '🎭',
                    content: 'Lege fest, wer Gemini ist. System Instructions geben den Ton und die Regeln für die gesamte Konversation vor.',
                    tips: ['Sei spezifisch', 'Definiere das Ziel', 'Gib Formatvorgaben']
                },
                {
                    title: 'Model Settings',
                    icon: '🌡️',
                    content: 'Temperature steuert die Kreativität. 0.0 ist ideal für Fakten, 1.0 für kreatives Schreiben.',
                    table: [
                        ['Parameter', 'Bereich', 'Effekt'],
                        ['Temperature', '0.0 - 2.0', 'Höher = Kreativer'],
                        ['Top-P', '0.0 - 1.0', 'Wahrscheinlichkeitsfilter'],
                        ['Top-K', '1 - 40', 'Anzahl der Wortkandidaten']
                    ]
                }
            ]
        },
        {
            title: '🚀 Fortgeschritten',
            items: [
                {
                    title: 'Agent Skills & Workflows',
                    icon: '🤖',
                    content: 'Nutze spezialisierte Agenten und automatisierte Workflows, um komplexe Aufgaben effizient zu lösen.',
                    youtube: 'STRApeg2pcA',
                    tips: ['Definiere klare Rollen', 'Nutze iterative Prompts', 'Automatisiere Routineaufgaben']
                },
                {
                    title: 'Tuned Models',
                    icon: '🎯',
                    content: 'Trainiere Gemini auf deinen eigenen Daten (CSV/Google Sheets), um spezifische Stile oder Fachwissen zu erlernen.',
                    code: '# Erfordert Datensatz mit Input/Output Paaren',
                    lang: 'text'
                },
                {
                    title: 'Safety Settings',
                    icon: '🛡️',
                    content: 'Konfiguriere Filter für Hassrede, Belästigung und sexuell explizite Inhalte.',
                    tips: ['Block None', 'Block Few', 'Block Some', 'Block Most']
                }
            ]
        }
    ]
};

export const kurse = {
    title: '🎓 Kurse – AI Studio Mastery',
    intro: 'Lerne in strukturierten Einheiten.',
    items: [
        {
            id: 'intro-aistudio',
            title: 'AI Studio Quickstart',
            icon: '✨',
            badge: 'Anfänger',
            duration: '15 min',
            description: 'Der perfekte Einstieg in die Welt von Google AI Studio.',
            lernziele: ['Interface verstehen', 'Ersten API Key generieren', 'Chat-Modus nutzen'],
            content: [
                { step: 'Login auf aistudio.google.com', code: 'Nutze dein Google Konto.' },
                { step: 'Erstelle einen "New Prompt"', code: 'Klicke auf Create New -> Chat Prompt.' }
            ]
        },
        {
            id: 'json-mode',
            title: 'JSON Masterclass',
            icon: '📊',
            badge: 'Fortgeschritten',
            duration: '30 min',
            description: 'Extrahiere strukturierte Daten mit 100% Zuverlässigkeit.',
            lernziele: ['JSON Schema definieren', 'MIME-Types nutzen', 'Fehlerbehandlung'],
            content: [
                { step: 'MIME Type umstellen', code: 'Wähle im rechten Panel application/json.' },
                { step: 'Schema vorgeben', code: 'Nutze Few-Shot Beispiele für das Format.' }
            ]
        }
    ]
};

export const codelabs = {
    title: '🧪 Codelabs – Hands-on Praxis',
    intro: 'Baue echte Projekte mit AI Studio.',
    items: [
        {
            id: 'image-analyzer',
            title: 'Bild-Analysator App',
            icon: '📸',
            badge: 'Praxis',
            duration: '20 min',
            goal: 'Eine App bauen, die Objekte in Bildern erkennt und beschreibt.',
            steps: [
                { title: 'Modell wählen', code: 'Nutze Gemini 1.5 Flash für schnelle Bildanalyse.', lang: 'text' },
                { title: 'Prompt testen', code: 'Prompt: "Was siehst du auf diesem Bild? Antworte kurz."', lang: 'text' },
                { title: 'Code exportieren', code: 'Klicke auf "Get Code" und kopiere das JS-Snippet.', lang: 'javascript' }
            ]
        }
    ]
};

export const tutorials = {
    title: '📖 Tutorials & Referenz',
    intro: 'Best Practices für die tägliche Arbeit.',
    groups: [
        {
            title: 'API Management',
            items: [
                {
                    title: 'API Keys generieren',
                    icon: '🔑',
                    content: 'So erstellst du einen Key für deine Projekte.',
                    tips: ['Keys niemals in GitHub pushen', 'Nutze .env Dateien']
                }
            ]
        }
    ]
};

export const codewiki = {
    title: '📚 CodeWiki – AI Studio Begriffe',
    intro: 'Alle wichtigen Fachbegriffe erklärt.',
    categories: [
        {
            name: 'Grundlagen',
            items: [
                { term: 'System Instruction', definition: 'Grundlegende Verhaltensregeln für das Modell.' },
                { term: 'Token', definition: 'Die kleinste Einheit der Textverarbeitung.' },
                { term: 'API Key', definition: 'Dein persönlicher Zugangsschlüssel für die Gemini API.' }
            ]
        }
    ]
};
