// Spring Boot Content Definition
export const lernpfad = {
  title: "Spring Boot Developer Lernpfad",
  description: "Meistere das populärste Java-Framework für Cloud-Native und Microservices-Architekturen.",
  steps: [
    { id: 1, title: "Spring Core & Inversion of Control (IoC)", status: "completed" },
    { id: 2, title: "Spring Boot Auto-Konfiguration & Starters", status: "not-started" },
    { id: 3, title: "Datenzugriff mit Spring Data JPA", status: "not-started" },
    { id: 4, title: "RESTful Web Services mit Spring MVC", status: "not-started" },
    { id: 5, title: "Cloud-Ready: Spring Security & Microservices", status: "not-started" }
  ]
};

export const module = [
  {
    id: "m1",
    title: "Spring Core Concepts",
    courses: [
      { id: "c101", title: "Beans, Scopes & Dependency Injection", type: "course" },
      { id: "c102", title: "ApplicationContext & Profiles", type: "course" },
      { id: "c103", title: "Annotation-driven Configuration", type: "course" }
    ]
  },
  {
    id: "m2",
    title: "Web & Data",
    courses: [
      { id: "c201", title: "Spring Web: Controller & Request Mapping", type: "course" },
      { id: "c202", title: "Spring Data JPA: Repositories & Entities", type: "course" },
      { id: "c203", title: "Validation & Exception Handling", type: "course" }
    ]
  }
];

export const kurse = [
  { id: "k1", title: "Spring Cloud for Microservices", level: "Advanced" },
  { id: "k2", title: "Reactive Programming with Spring WebFlux", level: "Intermediate" }
];

export const codelabs = [
  { id: "cl1", title: "REST API mit H2 Database", topic: "Backend", duration: "30 min" },
  { id: "cl2", title: "Spring Boot Custom Actuator", topic: "Operations", duration: "20 min" }
];

export const tutorials = [
  { id: "t1", title: "Spring Initializr: Der perfekte Start", category: "Setup" },
  { id: "t2", title: "Spring Boot mit Docker & Kubernetes", category: "Cloud" }
];

export const codewiki = [
  { term: "IoC (Inversion of Control)", definition: "Das Entwurfsmuster, bei dem die Kontrolle über das Objektmanagement an das Framework delegiert wird." },
  { term: "Bean", definition: "Ein von Spring verwaltetes Objekt innerhalb des ApplicationContext." },
  { term: "Spring Boot Starter", definition: "Vorkonfigurierte Abhängigkeiten für gängige Anwendungsfälle (z.B. starter-web)." },
  { term: "Actuator", definition: "Ein Modul zur Überwachung und Verwaltung von Spring Boot Anwendungen (Health, Metrics)." }
];
