# Kurs-Plattform

Ein interaktives Learning Portal für Lernpfade, Module, Kurse, Codelabs und Tutorials, integriert mit dem Monaco Editor.

## 🚀 Installation & Setup

Befolgen Sie diese Schritte, um die Entwicklungsumgebung lokal einzurichten:

1. **Repository klonen:**
   ```bash
   git clone <repository-url>
   cd Kurs
   ```

2. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```
   Die Seite ist nun unter `http://localhost:5173` (oder dem in der Konsole angezeigten Port) erreichbar.

## 🤖 Bearbeiten mit Gemini CLI

Diese Plattform ist darauf optimiert, direkt mit **Gemini CLI** bearbeitet zu werden. Gemini CLI fungiert als Ihr KI-Pair-Programmer, der den Kontext des Projekts versteht.

### Grundprinzip
Sie müssen keine Dateien manuell suchen. Geben Sie Gemini CLI einfach Anweisungen in natürlicher Sprache.

### Beispiele für Befehle:
*   **Neues Modul hinzufügen:** `"Erstelle ein neues Lernmodul für Python-Grundlagen in src/content-python.js und füge es der Navigation hinzu."`
*   **Inhalt aktualisieren:** `"Aktualisiere den Text im Impressum in Benutzer/impressum.md."`
*   **Design anpassen:** `"Ändere die Primärfarbe in der style.css auf ein dunkleres Blau."`
*   **Funktionen erweitern:** `"Integriere eine Suchfunktion in die Hauptnavigation."`

### Der `GEMINI.md` Kontext
Die Datei `GEMINI.md` im Hauptverzeichnis enthält die "Spielregeln" und Architekturvorgaben für die KI. Wenn Sie globale Änderungen am Verhalten oder am Stil der Plattform wünschen, aktualisieren Sie diese Datei oder weisen Sie Gemini CLI an, dies zu tun.

## 📂 Projektstruktur

*   `index.html`: Der Einstiegspunkt der Anwendung.
*   `src/`: Enthält die Logik (`main.js`), das Styling (`style.css`) und die Modul-Inhalte (`content-*.js`).
*   `Benutzer/`: Enthält rechtliche Dokumente wie `impressum.md` und `datenschutz.md`.
*   `public/`: Statische Assets (Bilder, Icons).

## 🛠 Deployment

Um die Plattform auf GitHub Pages zu veröffentlichen (konfiguriert für `kurs.ahrensburg.city`):

```bash
npm run ver
```
Dieser Befehl führt automatisch `npm run build` aus und lädt den `dist`-Ordner in den `gh-pages` Branch hoch.

---
*Erstellt für die Arbeit mit Gemini CLI – Effizientes Programmieren durch KI-Unterstützung.*
