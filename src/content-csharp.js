// C# Content Definition
export const lernpfad = {
  title: "C# Developer Lernpfad",
  description: "Vom ersten Programm in der Konsole bis zur professionellen .NET-Software-Architektur.",
  steps: [
    { id: 1, title: "C# Syntax & .NET Core Basics", status: "completed" },
    { id: 2, title: "Objektorientierung in C#", status: "not-started" },
    { id: 3, title: "LINQ & Datenabfragen", status: "not-started" },
    { id: 4, title: "Asynchrone Programmierung (Async/Await)", status: "not-started" },
    { id: 5, title: "Advanced .NET: Generics & Reflection", status: "not-started" }
  ]
};

export const module = [
  {
    id: "m1",
    title: "Language Basics",
    courses: [
      { id: "c101", title: "Variablen, Datentypen & Structs", type: "course" },
      { id: "c102", title: "Kontrollstrukturen & Loops", type: "course" },
      { id: "c103", title: "Fehlerbehandlung mit Try-Catch", type: "course" }
    ]
  },
  {
    id: "m2",
    title: "OOP & LINQ",
    courses: [
      { id: "c201", title: "Klassen, Interfaces & Records", type: "course" },
      { id: "c202", title: "Einführung in LINQ: Where, Select, Join", type: "course" },
      { id: "c203", title: "Delegates & Events", type: "course" }
    ]
  }
];

export const kurse = [
  { id: "k1", title: "Mastering C# 12 & .NET 8", level: "Intermediate" },
  { id: "k2", title: "Architecture Patterns in .NET", level: "Advanced" }
];

export const codelabs = [
  { id: "cl1", title: "Eigene LINQ Extension Methods", topic: "Logic", duration: "25 min" },
  { id: "cl2", title: "Multithreading mit Tasks & PLINQ", topic: "Performance", duration: "40 min" }
];

export const tutorials = [
  { id: "t1", title: "NuGet Paketverwaltung Guide", category: "Tools" },
  { id: "t2", title: "Visual Studio vs. VS Code für .NET", category: "Setup" }
];

export const codewiki = [
  { term: "CLR (Common Language Runtime)", definition: "Die Laufzeitumgebung von .NET, die den Code ausführt und Dienste wie Speicherverwaltung anbietet." },
  { term: "MSIL (Intermediate Language)", definition: "C# wird zuerst in diese Zwischensprache kompiliert, die dann von der CLR in Maschinencode übersetzt wird." },
  { term: "LINQ", definition: "Language Integrated Query erlaubt typsichere Abfragen auf verschiedenen Datenquellen direkt in C#." },
  { term: "Async/Await", definition: "Schlüsselwörter zur Implementierung von asynchronem Code, ohne den UI-Thread zu blockieren." }
];
