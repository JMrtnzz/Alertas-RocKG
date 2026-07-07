import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const kicksDir = path.join(__dirname, '..', 'botrix', 'kicks');
const root = path.join(kicksDir, 'variants');
const baseCss = fs.readFileSync(path.join(kicksDir, 'css.css'), 'utf8');

const tiers = [
  { id: 500, title: '¡500 KICKS!', badge: null, media: 110, img: 72, amount: 30, line1: 18, name: 26, glow: 26, accent: '#FF0000', accentSoft: 'rgba(255, 0, 0, 0.35)', accentStrong: 'rgba(255, 0, 0, 0.85)', goldAmount: false, frameMax: 560, border: 2, corner: 10, sparks: false, shake: false, epic: false },
  { id: 1000, title: '¡1,000 KICKS!', badge: 'HOT', media: 115, img: 76, amount: 32, line1: 19, name: 27, glow: 32, accent: '#FF3300', accentSoft: 'rgba(255, 60, 0, 0.4)', accentStrong: 'rgba(255, 80, 0, 0.9)', goldAmount: false, frameMax: 570, border: 2, corner: 11, sparks: false, shake: false, epic: false },
  { id: 2000, title: '¡2,000 KICKS!', badge: 'FIRE', media: 120, img: 80, amount: 36, line1: 20, name: 28, glow: 38, accent: '#FF6600', accentSoft: 'rgba(255, 100, 0, 0.42)', accentStrong: 'rgba(255, 120, 0, 0.9)', goldAmount: false, frameMax: 580, border: 3, corner: 12, sparks: false, shake: false, epic: false },
  { id: 5000, title: '¡5K KICKS!', badge: 'MEGA', media: 125, img: 84, amount: 40, line1: 21, name: 30, glow: 48, accent: '#FF9900', accentSoft: 'rgba(255, 160, 0, 0.45)', accentStrong: 'rgba(255, 180, 0, 0.92)', goldAmount: true, frameMax: 600, border: 3, corner: 13, sparks: true, shake: false, epic: false },
  { id: 10000, title: '¡10K KICKS!', badge: 'ULTRA', media: 132, img: 88, amount: 44, line1: 22, name: 32, glow: 60, accent: '#FFCC00', accentSoft: 'rgba(255, 200, 0, 0.48)', accentStrong: 'rgba(255, 215, 0, 0.95)', goldAmount: true, frameMax: 620, border: 3, corner: 14, sparks: true, shake: true, epic: false },
  { id: 50000, title: '¡50K KICKS!', badge: 'LEGENDARY', media: 140, img: 96, amount: 50, line1: 24, name: 34, glow: 80, accent: '#FFD700', accentSoft: 'rgba(255, 215, 0, 0.5)', accentStrong: 'rgba(255, 230, 80, 1)', goldAmount: true, frameMax: 640, border: 4, corner: 16, sparks: true, shake: true, epic: true },
];

const botrixHardeningCss = `
/* --- Reset panel Botrix --- */
.container.rockg-alert[class*="image"] .alert-media-container,
.container.rockg-alert[class*="image"] .alert-text-container,
.container.rockg-alert.image-left .alert-media-container,
.container.rockg-alert.image-left .alert-text-container {
  float: none !important;
  clear: none !important;
}

.container.rockg-alert .alert-text-container {
  flex: 1 1 auto !important;
  min-width: 0 !important;
  overflow: visible !important;
}

.container.rockg-alert .rockg-frame {
  flex-wrap: nowrap !important;
}

.container.rockg-alert .rockg-amount {
  clear: none !important;
  float: none !important;
  width: auto !important;
}

.container.rockg-alert #line1:not(.rockg-line1),
.container.rockg-alert #line2:not(.rockg-line2),
.container.rockg-alert .alert-media-container > :not(.alert-media):not(.rockg-media) {
  display: none !important;
}

.container.rockg-alert #alert-message h3.rockg-line1,
.container.rockg-alert #alert-message .rockg-line2,
.container.rockg-alert #alert-message .rockg-tag,
.container.rockg-alert #alert-message .rockg-tier-badge,
.container.rockg-alert #alert-message .rockg-amount {
  font-family: 'Montserrat', 'Arial Black', sans-serif !important;
  background: transparent !important;
  border: none !important;
  float: none !important;
  clear: none !important;
}

.container.rockg-alert .alert-media-container img,
.container.rockg-alert .alert-media img {
  float: none !important;
  position: static !important;
}
`;

function htmlFor(t) {
  const tierClass = `rockg-alert--kicks-${t.id}`;
  const badge = t.badge ? `          <span class="rockg-tier-badge">${t.badge}</span>\n` : '';
  const sparks = t.sparks ? '    <div class="rockg-sparks" aria-hidden="true"></div>\n' : '';
  return `<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,900&display=swap" rel="stylesheet">

<div class="container rockg-alert rockg-alert--kicks ${tierClass}">
  <div class="rockg-frame">
${sparks}    <div class="alert-media-container rockg-media">
      <div class="alert-media">{img}</div>
    </div>
    <div class="alert-text-container rockg-text-wrap">
      <div class="alert-text">
        <div id="alert-message">
          <span class="rockg-tag">RocKG</span>
${badge}          <h3 class="rockg-line1">${t.title}</h3>
          <span class="rockg-line2 {animation}">{name}</span>
          <div class="rockg-amount">
            <span class="rockg-amount-num">{amount}</span>
            <span class="rockg-amount-label">KICKS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

function tierOverridesCss(t) {
  const sel = `.container.rockg-alert--kicks-${t.id}`;
  const amountColor = t.goldAmount ? '#FFD700' : '#FFFFFF';
  const nameAnim = t.shake
    ? `rockgNameIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.42s both, rockgNameGlow 2s ease-in-out 1s infinite, rockgShake 0.55s ease-in-out 1.2s infinite`
    : `rockgNameIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.42s both, rockgNameGlow 2s ease-in-out 1s infinite`;
  const frameAnim = t.epic
    ? `rockgKicksFrameIn 0.75s cubic-bezier(0.22, 1, 0.36, 1) both, rockgBorderPulseTier${t.id} 1.6s ease-in-out 0.75s infinite`
    : `rockgKicksFrameIn 0.65s cubic-bezier(0.22, 1, 0.36, 1) both, rockgBorderPulseTier${t.id} 2s ease-in-out 0.65s infinite`;

  let css = `
/* --- Tier ${t.id} RocKG --- */
${sel} .rockg-frame {
  max-width: ${t.frameMax}px !important;
  border: ${t.border}px solid ${t.accent} !important;
  clip-path: polygon(0 0, calc(100% - ${t.corner}px) 0, 100% ${t.corner}px, 100% 100%, ${t.corner}px 100%, 0 calc(100% - ${t.corner}px)) !important;
  box-shadow: 0 0 ${t.glow}px ${t.accentSoft}, inset 0 0 30px rgba(255, 0, 0, 0.03) !important;
  animation: ${frameAnim} !important;
}
${sel} .rockg-frame::before {
  width: ${3 + t.border}px !important;
  background: linear-gradient(180deg, #FF0000, ${t.accent}) !important;
  box-shadow: 0 0 ${10 + t.glow * 0.25}px ${t.accentStrong} !important;
}
${sel} .rockg-frame::after {
  background: linear-gradient(105deg, transparent 0%, ${t.goldAmount ? 'rgba(255, 215, 0, 0.16)' : 'rgba(255, 0, 0, 0.12)'} 45%, transparent 90%) !important;
}
${sel} .rockg-media {
  width: ${t.media}px !important;
  height: ${t.media}px !important;
  min-width: ${t.media}px !important;
  max-width: ${t.media}px !important;
}
${sel} .alert-media {
  width: ${t.media}px !important;
  height: ${t.media}px !important;
  border-color: ${t.accent} !important;
  box-shadow: 0 0 ${12 + t.glow * 0.35}px ${t.accentSoft} !important;
}
${sel} .alert-media img,
${sel} .rockg-media img {
  width: ${t.img}px !important;
  height: ${t.img}px !important;
  min-width: ${t.img}px !important;
  min-height: ${t.img}px !important;
  max-width: ${t.img}px !important;
  max-height: ${t.img}px !important;
}
${sel} .rockg-tag { color: ${t.accent} !important; }
${sel} .rockg-line1 {
  font-size: ${t.line1}px !important;
  text-shadow: 0 0 ${10 + t.glow * 0.25}px rgba(255, 255, 255, 0.3) !important;
}
${sel} .rockg-line2 {
  font-size: ${t.name}px !important;
  color: ${t.accent} !important;
  text-shadow: 0 0 ${t.glow * 0.75}px ${t.accentStrong} !important;
  animation: ${nameAnim} !important;
}
${sel} .rockg-amount-num {
  font-size: ${t.amount}px !important;
  color: ${amountColor} !important;
  text-shadow: 0 0 ${14 + t.glow * 0.35}px ${t.accentStrong} !important;
}
${sel} .rockg-amount-label {
  font-size: ${12 + (t.goldAmount ? 4 : 0)}px !important;
  color: ${t.accent} !important;
}
@keyframes rockgBorderPulseTier${t.id} {
  0%, 100% { box-shadow: 0 0 ${t.glow * 0.7}px ${t.accentSoft}, inset 0 0 0 rgba(255, 0, 0, 0); }
  50%      { box-shadow: 0 0 ${t.glow * 1.4}px ${t.accentStrong}, inset 0 0 ${10 + t.border * 4}px rgba(255, 215, 0, 0.08); }
}
`;

  if (t.badge) {
    css += `
${sel} .rockg-tier-badge {
  display: inline-block !important;
  align-self: flex-start !important;
  margin: 0 0 2px 0 !important;
  padding: 2px 8px !important;
  font-size: 10px !important;
  font-weight: 900 !important;
  font-style: italic !important;
  letter-spacing: 1.5px !important;
  color: ${t.epic ? '#0A0A0A' : '#FFD700'} !important;
  background: ${t.epic ? 'linear-gradient(90deg, #FFD700, #fff5a0)' : 'rgba(255, 215, 0, 0.12)'} !important;
  border: 1px solid #FFD700 !important;
  border-radius: 2px !important;
  box-shadow: 0 0 ${8 + t.glow * 0.15}px rgba(255, 215, 0, 0.45) !important;
  animation: rockgTagIn 0.5s ease-out 0.15s both !important;
}
`;
  }

  if (t.sparks) {
    css += `
${sel} .rockg-sparks {
  position: absolute !important;
  inset: 0 !important;
  pointer-events: none !important;
  overflow: hidden !important;
  z-index: 2 !important;
}
${sel} .rockg-sparks::before,
${sel} .rockg-sparks::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #FFD700;
  box-shadow: 0 0 10px #FFD700;
  animation: rockgSparkFloat 2.2s ease-in-out infinite;
}
${sel} .rockg-sparks::before { top: 18%; right: 12%; }
${sel} .rockg-sparks::after { bottom: 22%; right: 28%; width: 4px; height: 4px; animation-delay: 0.9s; }
@keyframes rockgSparkFloat {
  0%, 100% { opacity: 0.3; transform: translateY(0); }
  50%      { opacity: 1; transform: translateY(-8px) scale(1.3); }
}
`;
  }

  if (t.epic) {
    css += `
${sel} .rockg-frame {
  background:
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 215, 0, 0.04) 2px, rgba(255, 215, 0, 0.04) 4px),
    radial-gradient(ellipse at 90% 20%, rgba(255, 215, 0, 0.12) 0%, transparent 55%),
    radial-gradient(ellipse at 10% 80%, rgba(255, 0, 0, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, #1a1410 0%, #0A0A0A 100%) !important;
}
${sel} .rockg-line1 {
  color: #FFD700 !important;
  text-shadow: 0 0 16px rgba(255, 215, 0, 0.65), 0 0 32px rgba(255, 0, 0, 0.35) !important;
}
`;
  }

  return css;
}

function cssFor(t) {
  return baseCss + botrixHardeningCss + tierOverridesCss(t);
}

function jsFor(t) {
  return `(function () {
  var MEDIA = ${t.media};
  var IMG = ${t.img};

  document.documentElement.style.background = 'transparent';
  document.body.style.background = 'transparent';

  function dedupeName() {
    var line1 = document.querySelector('.rockg-line1');
    var line2 = document.querySelector('.rockg-line2');
    if (!line1 || !line2) return;

    var name = line2.textContent.trim();
    if (!name) return;

    if (line2.textContent.trim() === name + name) {
      line2.textContent = name;
    }

    var headline = line1.textContent.trim();
    if (headline !== name && headline.indexOf(name) !== -1) {
      line1.textContent = headline.replace(name, '').replace(/\\s+/g, ' ').trim();
    }
  }

  function hideEmptyAmount() {
    var wrap = document.querySelector('.rockg-amount');
    var num = document.querySelector('.rockg-amount-num');
    if (!wrap || !num) return;
    var val = num.textContent.trim();
    if (!val || val === '0' || val === '{amount}') {
      wrap.style.display = 'none';
    } else {
      wrap.style.display = '';
    }
  }

  function enforceDom() {
    var root = document.querySelector('.container.rockg-alert');
    var frame = document.querySelector('.rockg-frame');
    var msg = document.getElementById('alert-message');
    if (!frame || !msg) return;

    ['.rockg-tag', '.rockg-tier-badge', '.rockg-line1', '.rockg-line2', '.rockg-amount'].forEach(function (sel) {
      var nodes = frame.querySelectorAll(sel);
      for (var i = 0; i < nodes.length; i++) {
        if (!msg.contains(nodes[i])) {
          msg.appendChild(nodes[i]);
        }
      }
    });

    var amounts = frame.querySelectorAll('.rockg-amount');
    for (var j = 1; j < amounts.length; j++) {
      amounts[j].style.display = 'none';
    }

    var media = frame.querySelector('.alert-media-container');
    if (media) {
      var junk = media.querySelectorAll(':not(.alert-media):not(.rockg-media)');
      for (var k = 0; k < junk.length; k++) {
        if (!junk[k].closest('.alert-media') && !junk[k].classList.contains('alert-media')) {
          junk[k].style.display = 'none';
        }
      }
    }

    var textBox = frame.querySelector('.alert-text-container');
    if (textBox) {
      var orphans = textBox.querySelectorAll('h3, h4, span, div, p');
      for (var n = 0; n < orphans.length; n++) {
        var el = orphans[n];
        if (msg.contains(el) || el === msg) continue;
        if (el.id === 'custom-message' || el.classList.contains('rockg-msg') || el.classList.contains('alert-text')) continue;
        el.style.display = 'none';
      }
    }

    var legacy1 = document.getElementById('line1');
    var legacy2 = document.getElementById('line2');
    if (legacy1 && !legacy1.classList.contains('rockg-line1')) legacy1.style.display = 'none';
    if (legacy2 && !legacy2.classList.contains('rockg-line2')) legacy2.style.display = 'none';

    if (root) {
      root.style.setProperty('float', 'none', 'important');
      root.style.setProperty('display', 'flex', 'important');
    }
  }

  function fixLayout() {
    var frame = document.querySelector('.rockg-frame');
    if (!frame) return;

    frame.style.setProperty('display', 'flex', 'important');
    frame.style.setProperty('flex-wrap', 'nowrap', 'important');
    frame.style.setProperty('float', 'none', 'important');

    var media = frame.querySelector('.alert-media-container');
    var alertMedia = frame.querySelector('.alert-media');
    var text = frame.querySelector('.alert-text-container');
    if (media) {
      media.style.setProperty('float', 'none', 'important');
      media.style.setProperty('clear', 'none', 'important');
      media.style.width = MEDIA + 'px';
      media.style.height = MEDIA + 'px';
      media.style.setProperty('flex-shrink', '0', 'important');
    }
    if (alertMedia) {
      alertMedia.style.setProperty('float', 'none', 'important');
      alertMedia.style.width = MEDIA + 'px';
      alertMedia.style.height = MEDIA + 'px';
    }
    if (text) {
      text.style.setProperty('float', 'none', 'important');
      text.style.setProperty('clear', 'none', 'important');
      text.style.setProperty('flex', '1 1 auto', 'important');
      text.style.width = 'auto';
    }

    var imgs = frame.querySelectorAll('.alert-media img, .rockg-media img');
    imgs.forEach(function (img) {
      img.removeAttribute('width');
      img.removeAttribute('height');
      img.style.setProperty('width', IMG + 'px', 'important');
      img.style.setProperty('height', IMG + 'px', 'important');
      img.style.setProperty('max-width', IMG + 'px', 'important');
      img.style.setProperty('max-height', IMG + 'px', 'important');
      img.style.setProperty('object-fit', 'contain', 'important');
      img.style.setProperty('object-position', 'center', 'important');
      img.style.setProperty('float', 'none', 'important');
    });

    enforceDom();
    dedupeName();
    hideEmptyAmount();
  }

  fixLayout();

  var observer = new MutationObserver(fixLayout);
  var root = document.querySelector('.container.rockg-alert');
  if (root) observer.observe(root, { childList: true, subtree: true, characterData: true, attributes: true });
})();
`;
}

function previewFor(t) {
  const tierClass = `rockg-alert--kicks-${t.id}`;
  const badge = t.badge ? `              <span class="rockg-tier-badge">${t.badge}</span>\n` : '';
  const sparks = t.sparks ? '        <div class="rockg-sparks" aria-hidden="true"></div>\n' : '';
  const displayAmount = t.id.toLocaleString('es');
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RocKG KICKs ${t.id} — Preview</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css.css">
  <link rel="stylesheet" href="../../../previews/preview-theme.css">
</head>
<body class="preview-page">
  <div class="preview-hud">
    <span class="preview-hud-tag">RocKG // PREVIEW</span>
    <span class="preview-hud-type">KICKs ≥ ${t.id}</span>
  </div>
  <div class="preview-stage">
    <div class="container rockg-alert rockg-alert--kicks ${tierClass}">
      <div class="rockg-frame">
${sparks}        <div class="alert-media-container rockg-media">
          <div class="alert-media"><span class="preview-emote">⚡</span></div>
        </div>
        <div class="alert-text-container rockg-text-wrap">
          <div class="alert-text">
            <div id="alert-message">
              <span class="rockg-tag">RocKG</span>
${badge}              <h3 class="rockg-line1">${t.title}</h3>
              <span class="rockg-line2">SuperFan</span>
              <div class="rockg-amount">
                <span class="rockg-amount-num">${displayAmount}</span>
                <span class="rockg-amount-label">KICKS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="preview-controls">
    <button class="replay-btn" type="button">↻ Reproducir</button>
    <span class="preview-note">Simulación Botrix · 800×200 · Variante ${t.id}</span>
  </div>
  <style>.preview-emote { font-size: 48px; line-height: 1; }</style>
  <script src="js.js"></script>
  <script src="../../../previews/preview-helper.js"></script>
</body>
</html>
`;
}

function botrixTxtFor(t) {
  return `RocKG — Variante KICKs ≥ ${t.id}
================================

Botrix → Settings → Alerts → KICKs → Variante

Condición: amount >= ${t.id}

IMPORTANTE (para que se vea igual que el preview):
  1. Html → pegar html.html COMPLETO (incluye <link> de fuente)
  2. CSS  → pegar css.css en el campo CSS (no en Html)
  3. JS   → pegar js.js en el campo JavaScript
  4. Campo de texto del panel → VACÍO o solo "-" (si pones "500 KICKS" sale debajo de la imagen)
  5. Acepta el aviso de seguridad del custom code antes de guardar
  6. NO importes/exportes JSON — edita solo Custom Code en cada variante

OBS Browser Source: 800×200 + obs-custom-css.txt

Preview local: preview.html
`;
}

for (const t of tiers) {
  const dir = path.join(root, String(t.id));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'html.html'), htmlFor(t));
  fs.writeFileSync(path.join(dir, 'css.css'), cssFor(t));
  fs.writeFileSync(path.join(dir, 'js.js'), jsFor(t));
  fs.writeFileSync(path.join(dir, 'preview.html'), previewFor(t));
  fs.writeFileSync(path.join(dir, 'BOTRIX.txt'), botrixTxtFor(t));
}

const readme = `# Variantes KICKs por tier — RocKG

Cada carpeta = una variante en Botrix con condición \`amount >= …\`.

## Checklist Botrix (si no se ve igual que el preview)

1. **Html** → pegar \`html.html\` entero (incluye \`<link>\` de Montserrat)
2. **CSS** → solo en el campo CSS, no mezclar con Html
3. **JavaScript** → \`js.js\` en su campo
4. Campo de texto del panel → **vacío** o \`-\`
5. Marca el aviso de seguridad del custom code
6. OBS: fuente **800×200** + \`obs-custom-css.txt\`
7. Orden variantes: 50000 → 10000 → 5000 → 2000 → 1000 → 500

| Carpeta | Condición |
|---------|-----------|
| [500/](500/) | amount >= 500 |
| [1000/](1000/) | amount >= 1000 |
| [2000/](2000/) | amount >= 2000 |
| [5000/](5000/) | amount >= 5000 |
| [10000/](10000/) | amount >= 10000 |
| [50000/](50000/) | amount >= 50000 |

Preview: [previews/kicks-tiers.html](../../../previews/kicks-tiers.html)
`;

fs.writeFileSync(path.join(root, 'README.md'), readme);

// Font link in base kicks html too
const baseHtmlPath = path.join(kicksDir, 'html.html');
const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');
if (!baseHtml.includes('fonts.googleapis.com')) {
  fs.writeFileSync(
    baseHtmlPath,
    `<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,900&display=swap" rel="stylesheet">\n\n${baseHtml}`
  );
}

console.log('Regenerated', tiers.length, 'Botrix-compatible kick tiers');
