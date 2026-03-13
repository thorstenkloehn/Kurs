// Spring Boot Content Definition

export const lernpfad = {
    title: '🍃 Spring Boot Developer Lernpfad',
    intro: 'Meistere das populärste Java-Framework für Cloud-Native und Microservices-Architekturen.',
    steps: [
        {
            num: 1, title: 'Java & Spring Core Grundlagen',
            desc: 'Verstehe Dependency Injection und Inversion of Control (IoC) – das Herzstück von Spring.',
            code: '// Dependency Injection (DI) verstehen\n// Ein Objekt bekommt seine Abhängigkeiten von außen gereicht.',
            lang: 'java'
        },
        {
            num: 2, title: 'Spring Boot Auto-Konfiguration',
            desc: 'Lerne wie Spring Boot mit @SpringBootApplication und Starters die Konfiguration automatisiert.',
            code: '@SpringBootApplication\npublic class Application {\n  public static void main(String[] args) {\n    SpringApplication.run(Application.class, args);\n  }\n}',
            lang: 'java'
        },
        {
            num: 3, title: 'REST APIs mit Spring Web',
            desc: 'Erstelle Endpunkte mit @RestController und RequestMappings.',
            code: '@RestController\n@RequestMapping("/api")\npublic class MyController {\n  @GetMapping("/hello")\n  public String sayHello() { return "Hello World"; }\n}',
            lang: 'java'
        }
    ]
};

export const module = {
    title: '📦 Module',
    intro: 'Detaillierte Erklärungen zu Spring Boot Konzepten.',
    groups: [
        {
            title: '⚙️ Grundlagen: Abhängigkeits-Zuweisung',
            items: [
                {
                    title: 'Was ist das eigentlich?',
                    icon: '💡',
                    content: 'Die Abhängigkeits-Zuweisung ist eine Vorgehensweise, bei der ein Teil eines Programms die Dinge, die es zum Arbeiten braucht (seine Abhängigkeiten), von außen bekommt. Es baut sie sich nicht selbst zusammen. Das macht das Programm beweglicher und einfacher zu prüfen.',
                },
                {
                    title: '1. Zuweisung über den Konstruktor (Empfohlen)',
                    icon: '🏗️',
                    content: 'Das ist der beste Weg. Hierbei bekommt ein neues Objekt alles, was es braucht, direkt beim Erstellen übergeben. So ist es sofort bereit und die Teile können danach nicht mehr einfach ausgetauscht werden.',
                    code: '// Ein Bauteil, das wir brauchen\npublic class Motor {\n    public void starten() {\n        System.out.println("Der Motor läuft.");\n    }\n}\n\n// Die Klasse, die den Motor braucht\npublic class Auto {\n    private final Motor motor;\n\n    // Der Motor wird von außen übergeben\n    public Auto(Motor motor) {\n        this.motor = motor;\n    }\n\n    public void fahren() {\n        motor.starten();\n        System.out.println("Das Auto fährt los.");\n    }\n}\n\n// Hier wird alles zusammengefügt\npublic class Hauptprogramm {\n    public static void main(String[] args) {\n        Motor meinMotor = new Motor(); // Zuerst das Bauteil erstellen\n        Auto meinAuto = new Auto(meinMotor); // Dann das Bauteil dem Auto geben (Zuweisung)\n        meinAuto.fahren();\n    }\n}',
                    lang: 'java'
                },
                {
                    title: '2. Zuweisung über eine Setze-Methode (Setter)',
                    icon: '🔧',
                    content: 'Das ist nützlich, wenn ein Bauteil erst später hinzugefügt werden soll oder wenn man es während des Betriebs einmal austauschen möchte.',
                    code: 'public class AnzeigeDienst {\n    private NachrichtenSender sender;\n\n    // Das Bauteil wird über eine Methode "gesetzt"\n    public void setzeSender(NachrichtenSender sender) {\n        this.sender = sender;\n    }\n\n    public void nachrichtSchicken(String text) {\n        if (sender != null) {\n            sender.sende(text);\n        }\n    }\n}\n\npublic class NachrichtenSender {\n    public void sende(String text) {\n        System.out.println("Nachricht wird verschickt: " + text);\n    }\n}',
                    lang: 'java'
                },
                {
                    title: 'Zusammenfassung',
                    icon: '📊',
                    content: 'Hier siehst du die Unterschiede auf einen Blick:',
                    table: [
                        ['Weg', 'Wann nutzen?', 'Vorteile'],
                        ['Konstruktor', 'Für wichtige Teile', 'Sicher und fest verbaut'],
                        ['Setze-Methode', 'Für Wahlfreies', 'Kann man später ändern']
                    ]
                }
            ]
        },
        {
            title: '🌐 Web & Persistence',
            items: [
                {
                    title: 'Spring Data JPA',
                    icon: '💾',
                    content: 'Abstraktionsschicht für Datenbankzugriffe. Erstelle Repositories einfach per Interface.',
                    code: 'public interface UserRepository extends JpaRepository<User, Long> {\n  List<User> findByLastName(String name);\n}',
                    lang: 'java'
                }
            ]
        }
    ]
};

export const kurse = {
    title: '🎓 Kurse',
    intro: 'Strukturierte Lerneinheiten für Spring Boot.',
    items: [
        {
            id: 'spring-1', badge: 'Anfänger', icon: '🍃', duration: '30 Min',
            title: 'Spring Boot Quickstart',
            description: 'Erstelle deine erste "Hello World" Anwendung in 5 Minuten.',
            lernziele: ['Spring Initializr nutzen', 'Ersten Controller schreiben', 'Anwendung starten'],
            content: [
                { step: 'Projekt generieren', code: 'https://start.spring.io/\nDependencies: Spring Web, DevTools', lang: 'text' },
                { step: 'Controller erstellen', code: '@RestController\npublic class HelloController {\n  @GetMapping("/")\n  public String index() { return "Greetings from Spring Boot!"; }\n}', lang: 'java' }
            ]
        }
    ]
};

export const codelabs = {
    title: '🧪 Codelabs',
    intro: 'Praxis-Übungen für Spring Boot.',
    items: [
        {
            id: 'lab-sb-1', badge: 'Mittel', icon: '🛠️', duration: '45 Min',
            title: 'REST API mit H2 & JPA',
            goal: 'Baue ein komplettes Backend für eine ToDo-Liste.',
            steps: [
                { title: 'Entity definieren', code: '@Entity\npublic class Todo {\n  @Id @GeneratedValue Long id;\n  String task;\n  boolean done;\n}', lang: 'java' }
            ]
        }
    ]
};

export const tutorials = {
    title: '📖 Tutorials',
    intro: 'Deep-Dives in spezielle Spring Boot Themen.',
    groups: [
        {
            title: 'Security',
            items: [
                { title: 'Spring Security Basics', icon: '🔐', content: 'Sichere deine Endpunkte mit Form-Login oder JWT.' }
            ]
        }
    ]
};

export const codewiki = {
    title: '📚 CodeWiki',
    intro: 'Glossar für Spring Boot Fachbegriffe.',
    categories: [
        {
            name: 'Core',
            items: [
                { term: 'IoC Container', definition: 'Der Kern von Spring, der Objekte (Beans) instanziiert und verwaltet.' },
                { term: '@Autowired', definition: 'Annotation zur automatischen Injektion von Abhängigkeiten.' }
            ]
        }
    ]
};
