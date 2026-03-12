// JavaScript Content Definition
export const lernpfad = {
  title: "Fullstack JavaScript Lernpfad",
  description: "Vom ersten Script im Browser bis zu komplexen NodeJS-Backends und modernen Frontend-Frameworks.",
  steps: [
    { id: 1, title: "Modern ES6+ Syntax", status: "completed" },
    { id: 2, title: "Asynchrone Programmierung (Promises & Async/Await)", status: "not-started" },
    { id: 3, title: "DOM-Manipulation & Browser-APIs", status: "not-started" },
    { id: 4, title: "Node.js & Express Fundamentals", status: "not-started" },
    { id: 5, title: "Einstieg in Frameworks (React/Vue/Angular)", status: "not-started" }
  ]
};

export const module = [
  {
    id: "m1",
    title: "ES6 & Modern Syntax",
    courses: [
      { id: "c101", title: "Let/Const, Arrow Functions, Template Literals", type: "course" },
      { id: "c102", title: "Destructuring, Spread & Rest-Operatoren", type: "course" },
      { id: "c103", title: "JS Modules (ESM vs CJS)", type: "course" }
    ]
  },
  {
    id: "m2",
    title: "Asynchronität & APIs",
    courses: [
      { id: "c201", title: "Promises & Callbacks", type: "course" },
      { id: "c202", title: "Fetch API & Error Handling", type: "course" },
      { id: "c203", title: "Top-Level Await in modernen Browsern", type: "course" }
    ]
  }
];

export const kurse = [
  { id: "k1", title: "Mastering Node.js Backend", level: "Advanced" },
  { id: "k2", title: "TypeScript for JavaScript Developers", level: "Intermediate" }
];

export const codelabs = [
  { id: "cl1", title: "Wetter-App mit Fetch API", topic: "Integration", duration: "20 min" },
  { id: "cl2", title: "Build your own Todo SPA", topic: "DOM", duration: "30 min" }
];

export const tutorials = [
  { id: "t1", title: "NPM vs. PNPM vs. Bun", category: "Package Manager" },
  { id: "t2", title: "Vite: Der moderne Build-Toolchain", category: "Build Tools" }
];

export const codewiki = [
  { term: "Hoisting", definition: "Variablen- und Funktionsdeklarationen werden während des Compiling-Prozesses nach oben verschoben." },
  { term: "Closure", definition: "Eine Funktion, die Zugriff auf Variablen in ihrem äußeren Gültigkeitsbereich behält, auch wenn dieser verlassen wurde." },
  { term: "Prototype", definition: "Der Mechanismus, über den JavaScript-Objekte Eigenschaften voneinander erben." },
  { term: "Event Loop", definition: "Das Herzstück von JS, das für die Verwaltung von asynchronen Callbacks verantwortlich ist." }
];
