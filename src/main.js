import * as geminiLernpfad from './content-lernpfad.js';
import * as geminiKurse from './content-kurse.js';
import * as geminiTutorials from './content-tutorials.js';
import * as geminiWiki from './content-codewiki.js';

import * as claudeContent from './content-claude.js';
import * as antigravityContent from './content-antigravity.js';
import * as copilotContent from './content-copilot.js';
import * as javaContent from './content-java.js';
import * as jsContent from './content-javascript.js';
import * as csharpContent from './content-csharp.js';
import * as aspnetContent from './content-aspnetcore.js';
import * as springContent from './content-springboot.js';

let currentTopic = localStorage.getItem('topic') || 'gemini';

const topics = {
    gemini: {
        title: 'Gemini CLI',
        install: 'npm install -g @google/gemini-cli',
        content: {
            lernpfad: geminiLernpfad.lernpfad,
            module: geminiLernpfad.module,
            kurse: geminiKurse.kurse,
            codelabs: geminiKurse.codelabs,
            tutorials: geminiTutorials.tutorials,
            codewiki: geminiWiki.codewiki
        }
    },
    'claude-spa': {
        title: 'Claude Code (Basic)',
        install: 'curl -fsSL https://claude.ai/install.sh | bash',
        content: {
            lernpfad: claudeContent.lernpfad,
            module: claudeContent.module,
            kurse: claudeContent.kurse,
            codelabs: claudeContent.codelabs,
            tutorials: claudeContent.tutorials,
            codewiki: claudeContent.codewiki
        }
    },
    'antigravity': {
        title: 'Google Antigravity',
        install: 'https://antigravity.google/',
        content: {
            lernpfad: antigravityContent.lernpfad,
            module: antigravityContent.module,
            kurse: antigravityContent.kurse,
            codelabs: antigravityContent.codelabs,
            tutorials: antigravityContent.tutorials,
            codewiki: antigravityContent.codewiki
        }
    },
    'copilot': {
        title: 'GitHub Copilot',
        install: 'https://github.com/features/copilot',
        content: {
            lernpfad: copilotContent.lernpfad,
            module: copilotContent.module,
            kurse: copilotContent.kurse,
            codelabs: copilotContent.codelabs,
            tutorials: copilotContent.tutorials,
            codewiki: copilotContent.codewiki
        }
    },
    'java': {
        title: 'Java Development',
        install: 'https://www.oracle.com/java/technologies/downloads/',
        content: {
            lernpfad: javaContent.lernpfad,
            module: javaContent.module,
            kurse: javaContent.kurse,
            codelabs: javaContent.codelabs,
            tutorials: javaContent.tutorials,
            codewiki: javaContent.codewiki
        }
    },
    'javascript': {
        title: 'JavaScript Fullstack',
        install: 'https://nodejs.org/',
        content: {
            lernpfad: jsContent.lernpfad,
            module: jsContent.module,
            kurse: jsContent.kurse,
            codelabs: jsContent.codelabs,
            tutorials: jsContent.tutorials,
            codewiki: jsContent.codewiki
        }
    },
    'csharp': {
        title: 'C# Programming',
        install: 'https://dotnet.microsoft.com/download/csharp',
        content: {
            lernpfad: csharpContent.lernpfad,
            module: csharpContent.module,
            kurse: csharpContent.kurse,
            codelabs: csharpContent.codelabs,
            tutorials: csharpContent.tutorials,
            codewiki: csharpContent.codewiki
        }
    },
    'aspnetcore': {
        title: 'ASP.NET Core',
        install: 'dotnet new webapi',
        content: {
            lernpfad: aspnetContent.lernpfad,
            module: aspnetContent.module,
            kurse: aspnetContent.kurse,
            codelabs: aspnetContent.codelabs,
            tutorials: aspnetContent.tutorials,
            codewiki: aspnetContent.codewiki
        }
    },
    'springboot': {
        title: 'Spring Boot',
        install: 'https://start.spring.io/',
        content: {
            lernpfad: springContent.lernpfad,
            module: springContent.module,
            kurse: springContent.kurse,
            codelabs: springContent.codelabs,
            tutorials: springContent.tutorials,
            codewiki: springContent.codewiki
        }
    }
};

window.switchTopic = function(topic) {
    currentTopic = topic;
    localStorage.setItem('topic', topic);
    document.body.setAttribute('data-topic', topic);
    document.getElementById('sidebar-title').textContent = topics[topic].title;
    document.title = `${topics[topic].title} Learning Portal`;
    
    window.location.hash = 'home';
    doNavigate();
};

// Initial state
document.body.setAttribute('data-topic', currentTopic);
window.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('topic-select');
    if (select) select.value = currentTopic;
    document.getElementById('sidebar-title').textContent = topics[currentTopic].title;
});

function getContent() {
    return topics[currentTopic].content;
}

// ── RENDERERS ──────────────────────────────────────────────────

function renderCode(code, lang = 'bash') {
    return `<div class="code-block">
        <div class="code-header">
            <span class="code-lang">${lang}</span>
            <div class="code-actions">
                <button class="try-btn" onclick="injectToEditor(this)">⚡ Probieren</button>
                <button class="copy-btn" onclick="copyCode(this)">📋 Kopieren</button>
            </div>
        </div>
        <pre><code class="lang-${lang}">${escHtml(code)}</code></pre>
    </div>`;
}

function escHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function renderChips(chips = []) {
    return chips.map(c => `<a class="chip" href="${c.url}" target="_blank" rel="noopener">${c.label}</a>`).join('');
}

function renderTips(tips = []) {
    return `<ul class="tip-list">${tips.map(t => `<li>✅ ${t}</li>`).join('')}</ul>`;
}

function renderTable(rows = []) {
    const [head, ...body] = rows;
    const th = head.map(h => `<th>${h}</th>`).join('');
    const tr = body.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
    return `<table class="info-table"><thead><tr>${th}</tr></thead><tbody>${tr}</tbody></table>`;
}

// ── SECTION RENDERERS ──────────────────────────────────────────

function renderLernpfad() {
    const d = getContent().lernpfad;
    const steps = d.steps.map(s => `
        <div class="path-step">
            <div class="step-num">${s.num}</div>
            <div class="step-body">
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
                ${s.code ? renderCode(s.code, s.lang) : ''}
                ${renderChips(s.chips)}
            </div>
        </div>`).join('');
    return `<section class="animate-fade">
        <h1>${d.title}</h1>
        <p class="section-desc">${d.intro}</p>
        <div class="path-list">${steps}</div>
    </section>`;
}

function renderModule() {
    const d = getContent().module;
    const groups = d.groups.map(g => {
        const items = g.items.map(it => `
            <div class="module-card">
                <div class="module-icon">${it.icon}</div>
                <div class="module-body">
                    <h3>${it.title}</h3>
                    <p>${it.content}</p>
                    ${it.code ? renderCode(it.code, it.lang) : ''}
                    ${it.tips ? renderTips(it.tips) : ''}
                    ${it.table ? renderTable(it.table) : ''}
                </div>
            </div>`).join('');
        return `<h2>${g.title}</h2><div class="module-list">${items}</div>`;
    }).join('');
    return `<section class="animate-fade">
        <h1>${d.title}</h1>
        <p class="section-desc">${d.intro}</p>
        ${groups}
    </section>`;
}

function renderKurse(activeId = null) {
    const d = getContent().kurse;
    if (activeId) {
        const kurs = d.items.find(k => k.id === activeId);
        if (!kurs) return renderKurse();
        const steps = kurs.content.map(s => `
            <div class="tutorial-step">
                <div class="step-label">Schritt</div>
                <div class="step-content-body">
                    <h4>${s.step}</h4>
                    ${renderCode(s.code, s.lang)}
                </div>
            </div>`).join('');
        return `<section class="animate-fade">
            <button class="back-btn" onclick="navigate('kurse')">← Zurück zu Kursen</button>
            <div class="kurs-badge-row"><span class="badge">${kurs.badge}</span><span class="duration">⏱️ ${kurs.duration}</span></div>
            <h1>${kurs.icon} ${kurs.title}</h1>
            <p class="section-desc">${kurs.description}</p>
            <div class="lernziele">
                <h3>🎯 Lernziele</h3>
                <ul>${kurs.lernziele.map(l => `<li>${l}</li>`).join('')}</ul>
            </div>
            <h3 style="margin-top:2rem;">📋 Schritt für Schritt</h3>
            <div class="tutorial-steps">${steps}</div>
            ${renderNextPrevNav('kurse', activeId, d.items)}
        </section>`;
    }
    const cards = d.items.map(k => `
        <div class="card kurs-card" onclick="navigate('kurse', '${k.id}')">
            <span class="badge">${k.badge}</span>
            <div class="kurs-card-icon">${k.icon}</div>
            <h3>${k.title}</h3>
            <p>${k.description}</p>
            <span class="duration">⏱️ ${k.duration}</span>
        </div>`).join('');
    return `<section class="animate-fade">
        <h1>${d.title}</h1>
        <p class="section-desc">${d.intro}</p>
        <div class="content-grid">${cards}</div>
    </section>`;
}

function renderNextPrevNav(section, currentId, items) {
    const currentIndex = items.findIndex(it => it.id === currentId);
    const prev = items[currentIndex - 1];
    const next = items[currentIndex + 1];

    return `<div class="step-nav">
        ${prev ? `<button class="nav-btn prev" onclick="navigate('${section}', '${prev.id}')">← ${prev.title}</button>` : '<div></div>'}
        ${next ? `<button class="nav-btn next" onclick="navigate('${section}', '${next.id}')">${next.title} →</button>` : '<div></div>'}
    </div>`;
}

function renderCodelabs(activeId = null) {
    const d = getContent().codelabs;
    if (activeId) {
        const lab = d.items.find(l => l.id === activeId);
        if (!lab) return renderCodelabs();
        const steps = lab.steps.map((s, i) => `
            <div class="lab-step">
                <div class="lab-step-num">${i + 1}</div>
                <div class="lab-step-body">
                    <h4>${s.title}</h4>
                    ${renderCode(s.code, s.lang)}
                </div>
            </div>`).join('');
        return `<section class="animate-fade">
            <button class="back-btn" onclick="navigate('codelabs')">← Zurück zu Codelabs</button>
            <div class="kurs-badge-row"><span class="badge">${lab.badge}</span><span class="duration">⏱️ ${lab.duration}</span></div>
            <h1>${lab.icon} ${lab.title}</h1>
            <div class="goal-box">🎯 <strong>Ziel:</strong> ${lab.goal}</div>
            <div class="lab-steps">${steps}</div>
            <div id="editor-wrapper" style="margin-top:3rem;">
                <h2>🖥️ Playground – Probier es aus</h2>
                <div id="editor-container"></div>
            </div>
            ${renderNextPrevNav('codelabs', activeId, d.items)}
        </section>`;
    }
    const cards = d.items.map(l => `
        <div class="card" onclick="navigate('codelabs', '${l.id}')">
            <span class="badge">${l.badge}</span>
            <div class="kurs-card-icon">${l.icon}</div>
            <h3>${l.title}</h3>
            <p style="color:var(--text-secondary);margin-top:.5rem;">${l.goal}</p>
            <span class="duration">⏱️ ${l.duration}</span>
        </div>`).join('');
    return `<section class="animate-fade">
        <h1>${d.title}</h1>
        <p class="section-desc">${d.intro}</p>
        <div class="content-grid">${cards}</div>
    </section>`;
}

function renderTutorials() {
    const d = getContent().tutorials;
    const groups = d.groups.map(g => {
        const items = g.items.map(it => `
            <div class="module-card">
                <div class="module-icon">${it.icon}</div>
                <div class="module-body">
                    <h3>${it.title}</h3>
                    <p>${it.content}</p>
                    ${it.table ? renderTable(it.table) : ''}
                    ${it.tips ? renderTips(it.tips) : ''}
                    ${it.code ? renderCode(it.code, it.lang) : ''}
                </div>
            </div>`).join('');
        return `<h2>${g.title}</h2><div class="module-list">${items}</div>`;
    }).join('');
    return `<section class="animate-fade">
        <h1>${d.title}</h1>
        <p class="section-desc">${d.intro}</p>
        ${groups}
    </section>`;
}

function renderCodeWiki() {
    const d = getContent().codewiki;
    const cats = d.categories.map(c => {
        const items = c.items.map(it => `
            <div class="wiki-item">
                <div class="wiki-term">${it.term}</div>
                <div class="wiki-def">${it.definition}</div>
            </div>`).join('');
        return `<div class="wiki-cat">
            <h3>${c.name}</h3>
            <div class="wiki-grid">${items}</div>
        </div>`;
    }).join('');
    return `<section class="animate-fade">
        <div class="hero-badge">Enzyklopädie</div>
        <h1>${d.title}</h1>
        <p class="section-desc">${d.intro}</p>
        <div class="wiki-list">${cats}</div>
    </section>`;
}

function renderHome() {
    const topic = topics[currentTopic];
    return `<section class="hero animate-fade">
        <div class="hero-badge">${topic.title} Lernportal</div>
        <h1>Entfessele ${topic.title.split(' ')[0]}<br>in deiner Konsole.</h1>
        <p>Meistere ${topic.title} – von der Installation bis zu fertigen KI-Agenten. Mit eigenen Kursen, interaktiven Codelabs und einem Code-Editor direkt im Browser.</p>
        <div class="hero-install"><code>${topic.install}</code></div>
        <div class="home-grid">
            <div class="home-card" onclick="navigate('lernpfad')">
                <div class="home-icon">📍</div>
                <h3>Lernpfad</h3>
                <p>Schritt für Schritt Anleitung</p>
            </div>
            <div class="home-card" onclick="navigate('module')">
                <div class="home-icon">📦</div>
                <h3>Module</h3>
                <p>Vertiefende Themen</p>
            </div>
            <div class="home-card" onclick="navigate('kurse')">
                <div class="home-icon">🎓</div>
                <h3>Kurse</h3>
                <p>Strukturierte Lerneinheiten</p>
            </div>
            <div class="home-card" onclick="navigate('codelabs')">
                <div class="home-icon">🧪</div>
                <h3>Codelabs</h3>
                <p>Hands-on Praxis</p>
            </div>
            <div class="home-card" onclick="navigate('tutorials')">
                <div class="home-icon">📖</div>
                <h3>Tutorials</h3>
                <p>Referenz & Best Practices</p>
            </div>
        </div>
        <div id="editor-wrapper" style="margin-top:4rem;">
            <h2>🖥️ Playground – Probier es aus</h2>
            <div id="editor-container"></div>
        </div>
    </section>`;
}

// ── ROUTING ────────────────────────────────────────────────────

window.navigate = function(section, subId = null) {
    window.location.hash = subId ? `${section}/${subId}` : section;
};

window.copyCode = function(btn) {
    const code = btn.closest('.code-block').querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        btn.textContent = '✅ Kopiert!';
        setTimeout(() => btn.textContent = '📋 Kopieren', 2000);
    });
};

window.injectToEditor = function(btn) {
    const code = btn.closest('.code-block').querySelector('code').innerText;
    if (window.editorInstance) {
        window.editorInstance.setValue(code);
        // Scroll to editor if it exists
        const wrapper = document.getElementById('editor-wrapper');
        if (wrapper) wrapper.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Editor lädt noch...');
    }
};

function parseHash() {
    const raw = window.location.hash.substring(1) || 'home';
    const [section, subId] = raw.split('/');
    return { section, subId: subId || null };
}

function renderSection(section, subId) {
    switch (section) {
        case 'lernpfad':  return renderLernpfad();
        case 'module':    return renderModule();
        case 'kurse':     return renderKurse(subId);
        case 'codelabs':  return renderCodelabs(subId);
        case 'tutorials': return renderTutorials();
        case 'codewiki':  return renderCodeWiki();
        default:          return renderHome();
    }
}

function doNavigate() {
    const { section, subId } = parseHash();
    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = renderSection(section, subId);
    window.scrollTo(0, 0);

    // Update active nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        const target = link.getAttribute('href').replace('#', '');
        link.classList.toggle('active', target === section);
    });

    // Initialize editor if placeholder is present
    if (document.getElementById('editor-container')) {
        initEditor();
    }
}

window.addEventListener('hashchange', doNavigate);
window.addEventListener('load', doNavigate);

async function initEditor() {
    const container = document.getElementById('editor-container');
    if (!container) return;
    container.innerHTML = '<div style="padding:20px;color:#94a3b8;">Lädt Editor...</div>';
    try {
        const { init } = await import('./editor.js');
        init(container);
    } catch (e) {
        console.error('Editor Fehler:', e);
    }
}
