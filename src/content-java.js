// Java Content Definition – Optimized for Gemini CLI Learning Portal

export const lernpfad = {
    title: '📍 Lernpfad – Java Development',
    intro: 'Vom ersten "Hello World" bis zu komplexen Applikationen. Dieser Pfad führt dich durch die Grundlagen der Java-Programmierung.',
    steps: [
        {
            num: 1, title: 'JDK Setup & IDE',
            desc: 'Bevor du Java-Code schreiben kannst, benötigst du das Java Development Kit (JDK) und eine Entwicklungsumgebung (IDE).',
            code: '# Überprüfe, ob Java bereits installiert ist:\njava -version\njavac -version',
            lang: 'bash',
            chips: [
                { label: 'Oracle JDK Download', url: 'https://www.oracle.com/java/technologies/downloads/' },
                { label: 'IntelliJ IDEA', url: 'https://www.jetbrains.com/idea/' },
                { label: 'VS Code Java Pack', url: 'https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack' }
            ]
        },
        {
            num: 2, title: 'Schreiben, Kompilieren, Ausführen',
            desc: 'Verstehe den Workflow: Du schreibst Quellcode (.java), kompilierst ihn zu Bytecode (.class) und führst diesen in der JVM aus.',
            code: '// 1. Datei erstellen: Hello.java\npublic class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello Java!");\n    }\n}\n\n// 2. Kompilieren (Terminal):\n// javac Hello.java\n\n// 3. Ausführen (Terminal):\n// java Hello',
            lang: 'java'
        },
        {
            num: 3, title: 'Grundlegende Syntax',
            desc: 'Lerne Variablen, Datentypen und Operatoren kennen – die Bausteine jedes Programms.',
            code: 'int alter = 25;\ndouble preis = 19.99;\nboolean istAktiv = true;\nString name = "Gemini";\n\nint summe = 10 + 5;\nboolean vergleich = (alter > 18);',
            lang: 'java'
        }
    ]
};

export const module = {
    title: '📦 Java Module',
    intro: 'Detaillierte Module zu den Kernkonzepten von Java.',
    groups: [
        {
            title: '⚙️ Grundlagen & Setup',
            items: [
                {
                    title: 'JDK & IDE Installation',
                    icon: '🛠️',
                    content: 'Installiere das JDK (z.B. OpenJDK oder Oracle JDK) und wähle eine IDE wie IntelliJ IDEA, Eclipse oder VS Code für effizientes Arbeiten.',
                    tips: [
                        'Nutze SDKMAN! auf Linux/macOS zur JDK-Verwaltung',
                        'IntelliJ IDEA ist der Industriestandard für Java',
                        'Vergewissere dich, dass JAVA_HOME in den Umgebungsvariablen gesetzt ist'
                    ]
                },
                {
                    title: 'Der Java-Zyklus',
                    icon: '🔄',
                    content: 'Java ist eine kompilierte Sprache. Der Compiler `javac` erzeugt plattformunabhängigen Bytecode, den die Runtime `java` ausführt.',
                    code: 'javac MeinProgramm.java  // Erzeugt MeinProgramm.class\njava MeinProgramm        // Startet die JVM',
                    lang: 'bash'
                }
            ]
        },
        {
            title: '🔡 Daten & Operatoren',
            items: [
                {
                    title: 'Variablen & Datentypen',
                    icon: '📊',
                    content: 'Java unterscheidet zwischen primitiven Typen (int, double, boolean, etc.) und Referenztypen (Objekte, Strings, Arrays).',
                    code: '// Primitiv\nint zahl = 42;\nchar buchstabe = \'A\';\n\n// Referenz\nString text = "Hallo Java";\nInteger objektZahl = Integer.valueOf(100);\n\n// Konstanten\nfinal double PI = 3.14159;',
                    lang: 'java'
                },
                {
                    title: 'Operatoren',
                    icon: '➕',
                    content: 'Nutze arithmetische (+, -, *, /), relationale (==, !=, <, >) und logische (&&, ||, !) Operatoren für Berechnungen und Bedingungen.',
                    code: 'int a = 10, b = 3;\nint rest = a % b; // Modulo: 1\n\nboolean check = (a > 5) && (b < 5); // true',
                    lang: 'java'
                }
            ]
        },
        {
            title: '🛤️ Kontrollfluss',
            items: [
                {
                    title: 'Verzweigungen (if/switch)',
                    icon: '⚖️',
                    content: 'Steuere den Programmablauf basierend auf Bedingungen.',
                    code: 'if (score > 90) {\n    System.out.println("A");\n} else if (score > 80) {\n    System.out.println("B");\n} else {\n    System.out.println("C");\n}\n\nswitch(wochentag) {\n    case "MO": System.out.println("Montag"); break;\n    default: System.out.println("Anderer Tag");\n}',
                    lang: 'java'
                },
                {
                    title: 'Schleifen (Loops)',
                    icon: '🔁',
                    content: 'Wiederhole Aufgaben effizient mit for, while oder do-while Schleifen.',
                    code: '// For-Schleife (Zählschleife)\nfor (int i = 0; i < 5; i++) {\n    System.out.println("Iteration: " + i);\n}\n\n// While-Schleife (Bedingungsschleife)\nwhile (istAktiv) {\n    // ... mache etwas\n    istAktiv = checkStatus();\n}',
                    lang: 'java'
                }
            ]
        }
    ]
};

export const kurse = {
    title: '🎓 Java Kurse',
    intro: 'Interaktive Kurseinheiten für den schnellen Einstieg.',
    items: [
        {
            id: 'java-basics', badge: 'Anfänger', icon: '☕',
            title: 'Java Syntax Deep Dive',
            duration: '30 Min',
            description: 'Lerne die grundlegende Syntax von Java kennen, von der main-Methode bis zu komplexen Ausdrücken.',
            lernziele: ['Variablen deklarieren', 'Datentypen richtig wählen', 'Logische Bedingungen formulieren'],
            content: [
                {
                    step: 'Die Main-Methode',
                    code: 'public class Main {\n    public static void main(String[] args) {\n        // Hier beginnt alles\n    }\n}',
                    lang: 'java'
                },
                {
                    step: 'Arbeiten mit Variablen',
                    code: 'int x = 5;\nint y = 10;\nint ergebnis = x * y;\nSystem.out.println("Das Ergebnis ist: " + ergebnis);',
                    lang: 'java'
                }
            ]
        }
    ]
};

export const codelabs = {
    title: '🧪 Java Codelabs',
    intro: 'Praktische Übungen zum direkt Ausprobieren.',
    items: [
        {
            id: 'lab-java-1', badge: 'Anfänger', icon: '💻', duration: '20 Min',
            title: 'Übung: Der Taschenrechner',
            goal: 'Erstelle ein Programm, das zwei Zahlen einliest und ein Menü für die Grundrechenarten anbietet.',
            steps: [
                { title: 'Scanner initialisieren', code: 'import java.util.Scanner;\n\nScanner scanner = new Scanner(System.in);\nSystem.out.print("Zahl 1: ");\ndouble n1 = scanner.nextDouble();', lang: 'java' },
                { title: 'Switch für Operationen', code: 'System.out.print("Operation (+,-,*,/): ");\nchar op = scanner.next().charAt(0);\n\nswitch(op) {\n    case \'+\': System.out.println(n1 + n2); break;\n    // ... weitere Fälle\n}', lang: 'java' }
            ]
        },
        {
            id: 'lab-java-2', badge: 'Anfänger', icon: '🔢', duration: '15 Min',
            title: 'Übung: Schleifen & Logik',
            goal: 'Schreibe ein Programm, das alle geraden Zahlen von 1 bis 50 ausgibt, aber die Zahl 13 überspringt.',
            steps: [
                { title: 'For-Schleife nutzen', code: 'for (int i = 1; i <= 50; i++) {\n    if (i == 13) continue;\n    if (i % 2 == 0) {\n        System.out.println(i);\n    }\n}', lang: 'java' }
            ]
        }
    ]
};

export const tutorials = {
    title: '📖 Java Tutorials',
    intro: 'Vertiefendes Wissen für Java-Entwickler.',
    groups: [
        {
            title: 'Referenz & Best Practices',
            items: [
                {
                    title: 'Naming Conventions',
                    icon: '📝',
                    content: 'In Java nutzen wir PascalCase für Klassen und camelCase für Methoden und Variablen.',
                    tips: [
                        'Klassen: public class MyClass',
                        'Variablen: int myVariable',
                        'Methoden: void calculateTotal()',
                        'Konstanten: final int MAX_VALUE'
                    ]
                }
            ]
        }
    ]
};

export const codewiki = {
    title: '📚 Java Wiki',
    intro: 'Wichtige Begriffe kurz erklärt.',
    categories: [
        {
            name: 'Konzepte',
            items: [
                { term: 'JVM', definition: 'Java Virtual Machine – führt Bytecode aus.' },
                { term: 'JDK', definition: 'Java Development Kit – Werkzeuge zum Entwickeln.' },
                { term: 'JRE', definition: 'Java Runtime Environment – zum Ausführen von Java-Apps.' },
                { term: 'Bytecode', definition: 'Kompilierter Java-Code (.class Dateien).' }
            ]
        }
    ]
};
