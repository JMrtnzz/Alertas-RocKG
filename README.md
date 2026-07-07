# Alertas RocKG — Ejemplo para Botrix + KICK

Pack de alertas personalizadas para streaming en **KICK**, usando [Botrix](https://botrix.live) con HTML, CSS y JavaScript custom. Este repositorio es un **ejemplo público** de cómo montar un set de alertas con identidad visual propia: marco angular, tipografía bold italic, paleta rojo/negro/dorado y animaciones listas para OBS.

Diseñado para el canal **xRockGx** (RocKG), pero pensado para que cualquiera pueda ver el código, previsualizarlo en el navegador y adaptarlo a su propio canal.

---

## Qué incluye

| Tipo de alerta | Carpeta | Título en pantalla |
|----------------|---------|-------------------|
| Seguidores | `botrix/follow/` | ¡NUEVO SEGUIDOR! |
| Suscripción | `botrix/sub/` | ¡NUEVA SUB! |
| Sub regalada | `botrix/gift/` | ¡REGALÓ SUBS! |
| Host | `botrix/host/` | ¡NUEVO HOST! |
| Propina | `botrix/tip/` | ¡DONACIÓN! |
| KICKs | `botrix/kicks/` | ¡KICKS RECIBIDOS! |

Cada alerta tiene tres archivos listos para pegar en Botrix:

- `html.html` — estructura y variables
- `css.css` — estilos (marco, colores, animaciones)
- `js.js` — lógica mínima de la alerta

También hay archivos `.html` combinados en `botrix/` (por si prefieres copiar todo de una vez) y **previews locales** para ver el diseño sin conectar Botrix.

---

## Identidad visual

| Elemento | Valor |
|----------|-------|
| Color principal | Rojo `#FF0000` |
| Fondo | Negro `#0A0A0A` con textura grain |
| Texto | Blanco `#FFFFFF`, bold italic |
| Acento sub/GG | Dorado `#FFD700` |
| Formas | Rayos angulares 3D |
| Tipografía | [Montserrat Black Italic](https://fonts.google.com/specimen/Montserrat) |

Las imágenes de cada alerta (emotes, logo, mascota) se suben desde el panel de Botrix; no van en el repositorio.

---

## Estructura del repositorio

```
Alertas-RocKG/
├── botrix/
│   ├── follow/          # Seguidores
│   ├── sub/             # Suscripción
│   ├── gift/            # Sub regalada
│   ├── host/            # Host
│   ├── tip/             # Propina
│   ├── kicks/           # KICKs
│   └── *.html           # Versión combinada por tipo (referencia)
├── previews/
│   ├── todas-las-alertas.html   # Galería con todas las alertas
│   ├── preview-theme.css
│   └── preview-helper.js
└── obs-custom-css.txt   # CSS para fuente Browser en OBS
```

---

## Preview local (sin Botrix)

Abre en tu navegador:

```
previews/todas-las-alertas.html
```

Verás las seis alertas con datos de ejemplo. Cada una también tiene su `preview.html` dentro de su carpeta (`botrix/follow/preview.html`, etc.).

---

## Instalación en Botrix

### Requisitos

1. Cuenta en [botrix.live](https://botrix.live) → **Login with Kick**
2. El bot **botrixlive** debe ser moderador en tu canal KICK

### Pasos (repetir por cada tipo de alerta)

1. **Settings** → tu canal → **Alerts** → elige la pestaña (Seguidores, Suscripción, etc.)
2. Sube la imagen que quieras mostrar (botón verde de upload en Botrix)
3. En el panel de texto, **déjalo vacío** o pon un guión `-`. El título ya va en el HTML; el nombre sale de `{name}`. **No pongas `{name}` en el campo de texto del panel** o se duplicará.
4. Abre **Custom Code** y pega el contenido de la carpeta correspondiente:

| Campo en Botrix | Archivo |
|-----------------|---------|
| Html | `html.html` |
| CSS | `css.css` |
| JavaScript | `js.js` |
| Campos personalizados | no tocar |

5. Pulsa **Exportar esta Alerta** y usa **Test Alert**
6. Copia la **Widget URL** → OBS → **Browser Source** (800×200 px recomendado)

### Variables de Botrix

Usar exactamente así en el HTML:

```
{name}        → nombre del viewer
{text}        → texto principal
{message}     → mensaje extra
{amount}      → cantidad (subs regalados, propina, host, KICKs)
{img}         → imagen/GIF (dentro de .alert-media; NO usar {image})
{sound}       → sonido (panel de Botrix)
{animation}   → animación del nombre (#line2 / .rockg-line2)
{disposition} → layout (.container)
{transition}  → transición (.container)
```

### Ajustes recomendados en el panel

| Ajuste | Valor |
|--------|-------|
| Disposición | Imagen a la izquierda, texto a la derecha |
| Animación de entrada | Fade o Slide |
| Duración | ~6 segundos |
| Fuente/color del panel | Da igual — el CSS custom lo sobreescribe |

---

## Configuración en OBS

| Campo | Valor |
|-------|-------|
| Ancho | **800** |
| Alto | **200** |
| FPS | 30 |
| Actualizar navegador cuando la escena esté activa | ✓ |
| CSS personalizado | Contenido de `obs-custom-css.txt` |

Tras cambiar código en Botrix: clic derecho en la fuente → **Actualizar**.

---

## Adaptar a tu canal

Este repo es un punto de partida. Para personalizarlo:

1. **Colores** — Edita las variables CSS en cada `css.css` (`--rock-red`, `--rock-black`, etc.)
2. **Textos** — Cambia los títulos en `html.html` (`.rockg-line1`, `.rockg-tag`)
3. **Imágenes** — Súbelas en Botrix; no hace falta tocar rutas en el código
4. **Animaciones** — Ajusta keyframes y duraciones en `css.css`
5. **Sonidos** — Configúralos en el panel de Botrix por alerta

Haz fork del repo, cambia lo que necesites y repite la instalación pestaña por pestaña.

---

## Solución de problemas

| Problema | Qué hacer |
|----------|-----------|
| Se ve distinto en OBS vs Botrix | Pega de nuevo html + css + js, exporta la alerta y añade `obs-custom-css.txt` en OBS |
| Doble imagen o texto | Vacía el campo de texto del panel; usa solo custom code |
| Nombre repetido | No uses `{name}` en el panel de Botrix, solo en el HTML |
| Imagen no carga | Usa `{img}`, no `{image}` |
| Recorte en OBS | Browser Source mínimo **800×200** |
| Fuente distinta | Si Google Fonts no carga en Botrix, el fallback es Arial Black |

Si **Test Alert** en Botrix se ve bien pero OBS no, el problema suele ser el tamaño de la fuente o el CSS personalizado de OBS.

---

## Licencia y uso

Proyecto de ejemplo publicado como referencia. Puedes estudiarlo, hacer fork y adaptarlo a tu stream. Si lo usas o lo modificas, un crédito al repo original se agradece, pero no es obligatorio.

---

## Créditos

- Canal de referencia: **xRockGx** / RocKG
- Plataforma de alertas: [Botrix](https://botrix.live)
- Streaming: [KICK](https://kick.com)
