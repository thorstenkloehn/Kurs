// Java Content Definition
export const lernpfad = {
  title: "Java Developer Lernpfad",
  description: "Vom ersten 'Hello World' bis zu komplexen Enterprise-Applikationen mit Java.",
  steps: [
    { id: 1, title: "JDK Setup & Syntax Basics", status: "completed" },
    { id: 2, title: "Objektorientierte Programmierung (OOP)", status: "not-started" },
    { id: 3, title: "Collections Framework & Generics", status: "not-started" },
    { id: 4, title: "Java Streams & Lambda Expressions", status: "not-started" },
    { id: 5, title: "Concurrency & Multithreading", status: "not-started" }
  ]
};

export const module = [
  {
    id: "m1",
    title: "Java Fundamentals",
    courses: [
      { id: "c101", title: "Variablen, Datentypen & Operatoren", type: "course" },
      { id: "c102", title: "Kontrollstrukturen (If, Switch, Loops)", type: "course" },
      { id: "c103", title: "Methoden & Parameter-Passing", type: "course" }
    ]
  },
  {
    id: "m2",
    title: "Object-Oriented Programming",
    courses: [
      { id: "c201", title: "Klassen, Objekte & Konstruktoren", type: "course" },
      { id: "c202", title: "Vererbung, Polymorphie & Interfaces", type: "course" },
      { id: "c203", title: "Abstrakte Klassen vs. Interfaces", type: "course" }
    ]
  }
];

export const kurse = [
  { id: "k1", title: "Modern Java (Java 17/21)", level: "Intermediate" },
  { id: "k2", title: "Design Patterns in Java", level: "Advanced" }
];

export const codelabs = [
  { id: "cl1", title: "Banking System (OOP Übung)", topic: "Logic", duration: "45 min" },
  { id: "cl2", title: "Datenverarbeitung mit Streams", topic: "Functional", duration: "30 min" }
];

export const tutorials = [
  { id: "t1", title: "Maven vs. Gradle Guide", category: "Build Tools" },
  { id: "t2", title: "Unit Testing mit JUnit 5", category: "Testing" }
];

export const codewiki = [
  { term: "JVM", definition: "Die Java Virtual Machine führt den kompilierten Bytecode plattformunabhängig aus." },
  { term: "Garbage Collector", definition: "Automatisches Speichermanagement, das nicht mehr benötigte Objekte löscht." },
  { term: "JDK", definition: "Das Java Development Kit enthält alle Tools zum Entwickeln (Compiler, JRE, Debugger)." },
  { term: "JRE", definition: "Die Java Runtime Environment wird benötigt, um Java-Programme auszuführen." }
];
