// main.js für Antigravity (ERWEITERT)
const navItems = [
  { id: 'home', label: 'Start', icon: '🏠' },
  { id: 'lernpfad', label: 'Lernpfad', icon: '🗺️' },
  { id: 'module', label: 'Module', icon: '📦' },
  { id: 'cli', label: 'CLI', icon: '⌨️' },
  { id: 'tutorials', label: 'Tutorials', icon: '🧪' },
  { id: 'wiki', label: 'Wiki', icon: '🌐' },
];

document.addEventListener('DOMContentLoaded', () => {
  renderNavigation();
  renderSidebar();
  showSection('home');
});

function renderNavigation() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  nav.innerHTML = navItems.map(item => `
    <a href="#" class="nav-item" onclick="event.preventDefault(); showSection('${item.id}')">${item.label}</a>
  `).join('');
}

function renderSidebar() {
  const sidebar = document.getElementById('sidebar-inner');
  if (!sidebar) return;
  sidebar.innerHTML = `
    <div class="sidebar-section-title">Navigation</div>
    ${navItems.map(item => `
      <button class="sidebar-item" onclick="showSection('${item.id}')">
        <span class="icon">${item.icon}</span> ${item.label}
      </button>
    `).join('')}
  `;
}

function renderHome() {
  const container = document.getElementById('section-home');
  if (!container) return;
  container.innerHTML = `
    <div class="cards-grid">
      <div class="card" onclick="showSection('lernpfad')">
        <div class="card-icon">🗺️</div>
        <h3>Lernpfad</h3>
        <p>Strukturierter Weg zum Google Antigravity Experten – in 5 Stufen.</p>
        <div class="badge">START HIER</div>
      </div>
      <div class="card" onclick="showSection('module')">
        <div class="card-icon">📦</div>
        <h3>Module</h3>
        <p>Vertiefende Themen wie MCP, Browser Subagent und Sandboxing.</p>
        <div class="badge">9 MODULE</div>
      </div>
      <div class="card" onclick="showSection('cli')">
        <div class="card-icon">⌨️</div>
        <h3>CLI Referenz</h3>
        <p>Vollständige Liste aller Befehle für Terminal-Profis.</p>
      </div>
      <div class="card" onclick="showSection('tutorials')">
        <div class="card-icon">🧪</div>
        <h3>Tutorials</h3>
        <p>Schritt-für-Schritt Anleitungen für reale Use-Cases.</p>
      </div>
      <div class="card" onclick="showSection('wiki')">
        <div class="card-icon">🌐</div>
        <h3>Wiki</h3>
        <p>Glossar und Konzepte von A bis Z.</p>
      </div>
    </div>
    
    <div style="margin-top: 3rem; background: rgba(66, 133, 244, 0.05); padding: 2rem; border-radius: 12px; border: 1px solid var(--border);">
      <h2>🚀 Schnellstart mit Google Antigravity</h2>
      <p>Kopieren Sie diesen Befehl, um Ihren ersten Workspace zu initialisieren:</p>
      <div class="code-block">
        <div class="code-block-header"><span>BASH</span></div>
        <pre><code>antigravity init --template web-app --focus .</code></pre>
      </div>
    </div>
  `;
}

function renderLernpfad() {
  const container = document.getElementById('section-lernpfad');
  if (!container) return;
  const data = window.lernpfadData || [];
  container.innerHTML = `
    <h2>Lernpfad</h2>
    <p>Folgen Sie diesen Schritten, um Antigravity vollständig zu beherrschen.</p>
    <div class="steps" style="margin-top: 2rem;">
      ${data.map((step, index) => `
        <div class="card" style="margin-bottom: 1.5rem; position: relative; padding-left: 4rem;">
          <div style="position: absolute; left: 1rem; top: 1.5rem; width: 2rem; height: 2rem; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800;">
            ${index + 1}
          </div>
          <h3>${step.title}</h3>
          <p>${step.description}</p>
          <ul style="margin-top: 1rem; color: var(--text-secondary); padding-left: 1.2rem;">
            ${step.topics.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
}

function renderModule() {
  const container = document.getElementById('section-module');
  if (!container) return;
  const data = window.antigravityContent.module || [];
  container.innerHTML = `
    <h2>Module</h2>
    <p>Themenspezifische Lernmodule für tieferes Verständnis.</p>
    <div class="cards-grid" style="margin-top: 2rem;">
      ${data.map(mod => `
        <div class="card">
          <div style="color: var(--primary); font-size: 0.75rem; font-weight: 800; margin-bottom: 0.5rem; letter-spacing: 0.1em;">${mod.id.toUpperCase()}</div>
          <h3>${mod.title}</h3>
          <ul style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.85rem; padding-left: 1rem;">
            ${mod.courses.map(c => `<li>${c.title}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
}

function renderCLI() {
  const container = document.getElementById('section-cli');
  if (!container) return;
  const data = window.cliData || [];
  
  container.innerHTML = `
    <h2>Antigravity CLI Referenz</h2>
    <p>Vollständige Übersicht der Befehle für das Antigravity Terminal Tool.</p>
    
    ${data.map(group => `
      <div style="margin-top: 2rem;">
        <h3 style="color: var(--primary); text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.1em; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; margin-bottom: 1rem;">
          ${group.group}
        </h3>
        <div class="cards-grid" style="grid-template-columns: 1fr;">
          ${group.items.map(item => `
            <div class="card" style="padding: 1rem; cursor: default; display: flex; align-items: center; justify-content: space-between;">
              <code style="color: var(--primary-light); font-weight: 700;">${item.command}</code>
              <span style="color: var(--text-secondary); font-size: 0.9rem;">${item.desc}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('')}
  `;
}

function renderTutorials() {
  const container = document.getElementById('section-tutorials');
  if (!container) return;
  const data = window.tutorialsData || [];
  container.innerHTML = `
    <h2>Tutorials</h2>
    <p>Praxisnahe Anleitungen für häufige Entwicklungsaufgaben.</p>
    <div class="cards-grid" style="margin-top: 2rem;">
      ${data.map(t => `
        <div class="card">
          <div class="badge" style="margin-bottom: 0.5rem;">${t.duration}</div>
          <h3>${t.title}</h3>
          <p style="margin-top: 0.5rem;">Lerne, wie du ${t.title.toLowerCase()} effektiv einsetzt.</p>
          <button class="btn btn-outline" style="margin-top: 1rem; width: 100%;" onclick="alert('Tutorial wird geladen...')">Starten</button>
        </div>
      `).join('')}
    </div>
  `;
}

function renderWiki() {
  const container = document.getElementById('section-wiki');
  if (!container) return;
  const data = window.wikiData || [];
  container.innerHTML = `
    <h2>Antigravity Wiki</h2>
    <p>Konzepte und Begriffe rund um Google Antigravity.</p>
    <div class="cards-grid" style="margin-top: 2rem;">
      ${data.map(w => `
        <div class="card">
          <h3 style="color: var(--primary);">${w.term}</h3>
          <p style="margin-top: 0.5rem; line-height: 1.6;">${w.definition}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function showSection(sectionId) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(`section-${sectionId}`);
  if (target) target.classList.add('active');
  
  const hero = document.getElementById('hero');
  if (hero) hero.style.display = sectionId === 'home' ? 'block' : 'none';
  
  // Render specific content
  if (sectionId === 'home') renderHome();
  if (sectionId === 'lernpfad') renderLernpfad();
  if (sectionId === 'module') renderModule();
  if (sectionId === 'cli') renderCLI();
  if (sectionId === 'tutorials') renderTutorials();
  if (sectionId === 'wiki') renderWiki();
}

window.showSection = showSection;
