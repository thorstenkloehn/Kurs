// ASP.NET Core Content Definition
export const lernpfad = {
  title: "ASP.NET Core Web Developer Lernpfad",
  description: "Entwickle moderne, hochperformante Web-Applikationen und APIs mit dem .NET Framework.",
  steps: [
    { id: 1, title: "ASP.NET Core Fundamentals & Middleware", status: "completed" },
    { id: 2, title: "Dependency Injection (DI) & Services", status: "not-started" },
    { id: 3, title: "Entity Framework Core & Datenbanken", status: "not-started" },
    { id: 4, title: "RESTful APIs mit ASP.NET Core", status: "not-started" },
    { id: 5, title: "Modernes Frontend: Blazor vs. Razor Pages", status: "not-started" }
  ]
};

export const module = [
  {
    id: "m1",
    title: "Web App Architecture",
    courses: [
      { id: "c101", title: "Das Startup-System: Program.cs", type: "course" },
      { id: "c102", title: "Die Middleware-Pipeline verstehen", type: "course" },
      { id: "c103", title: "Dependency Injection Design Patterns", type: "course" }
    ]
  },
  {
    id: "m2",
    title: "Data & Persistence",
    courses: [
      { id: "c201", title: "EF Core: Migrations & DbContext", type: "course" },
      { id: "c202", title: "Repository & Unit of Work Pattern", type: "course" },
      { id: "c203", title: "Performance-Tuning in SQL Abfragen", type: "course" }
    ]
  }
];

export const kurse = [
  { id: "k1", title: "Clean Architecture in .NET", level: "Advanced" },
  { id: "k2", title: "Securing ASP.NET Core Apps", level: "Intermediate" }
];

export const codelabs = [
  { id: "cl1", title: "Eigene Middleware für Logging", topic: "Pipeline", duration: "15 min" },
  { id: "cl2", title: "Web API mit JWT Auth", topic: "Security", duration: "45 min" }
];

export const tutorials = [
  { id: "t1", title: "Deployment auf Azure App Service", category: "DevOps" },
  { id: "t2", title: "Dockerizing .NET Applications", category: "Containers" }
];

export const codewiki = [
  { term: "Kestrel", definition: "Der plattformunabhängige Webserver für ASP.NET Core." },
  { term: "Middleware", definition: "Softwarekomponenten, die in der App-Pipeline zur Verarbeitung von Requests und Responses eingesetzt werden." },
  { term: "Dependency Injection", definition: "Ein Standard-Mechanismus in ASP.NET Core zur Entkopplung von Komponenten." },
  { term: "Razor", definition: "Eine Markup-Syntax zur serverseitigen Generierung von HTML-Code." }
];
