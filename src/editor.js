import * as monaco from 'monaco-editor';

export function init(container) {
    window.editorInstance = monaco.editor.create(container, {
        value: [
            '// Willkommen zum Gemini CLI Playground',
            '// Hier kannst du Code-Beispiele ausprobieren',
            '',
            'function helloGemini() {',
            '    console.log("Hallo von Gemini CLI!");',
            '}',
            '',
            'helloGemini();'
        ].join('\n'),
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: { enabled: false },
        fontSize: 14,
        lineNumbers: 'on',
        scrollBeyondLastLine: false,
        roundedSelection: true,
        padding: { top: 16, bottom: 16 }
    });
}
