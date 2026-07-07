# Alertas RockG — Botrix + KICK

Pack de alertas personalizadas para **xRockGx**, basadas en la identidad visual de `E:\Imagenes\RockG`.

## Identidad visual detectada

| Elemento | Valor |
|----------|-------|
| Color principal | Rojo `#FF0000` |
| Fondo | Negro `#0A0A0A` con textura grain |
| Texto | Blanco `#FFFFFF`, bold italic |
| Acento sub/GG | Dorado `#FFD700` |
| Formas | Rayos angulares 3D (como banner Offline y Kick) |
| Logo | Monograma RG circular con anillo rojo |
| Mascota | Chibi con gafas, pelo rojo oscuro, camisa roja |
| Tipografía | Montserrat Black Italic (similar al banner) |

## Estructura del proyecto

```
alertas-rockg/
├── assets/          → Emotes e imágenes copiadas para referencia
├── botrix/          → Código separado por pestaña de Botrix
│   ├── follow/  → Seguidores
│   ├── sub/     → Suscripción
│   ├── gift/    → Sub regalada
│   ├── host/    → Host
│   ├── tip/     → Propina
│   └── kicks/   → KICKs
└── previews/
    └── todas-las-alertas.html   → Abrir en navegador para ver el diseño
```

## Mapa pestaña Botrix → carpeta

| Pestaña Botrix | Carpeta | Imagen sugerida | Título en alerta |
|----------------|---------|-----------------|------------------|
| **Seguidores** | `botrix/follow/` | `RockLove.png` | ¡NUEVO SEGUIDOR! |
| **Suscripción** | `botrix/sub/` | `RockGG.png` | ¡NUEVA SUB! |
| **Sub regalada** | `botrix/gift/` | `RockGallo.png` | ¡REGALÓ SUBS! |
| **Host** | `botrix/host/` | `LogoPNG.png` | ¡NUEVO HOST! |
| **Propina** | `botrix/tip/` | `LogoPNG.png` | ¡DONACIÓN! |
| **KICKs** | `botrix/kicks/` | `RockGG.png` | ¡KICKS RECIBIDOS! |

Imágenes originales en: `E:\Imagenes\RockG\Comisiones Rock\` y `E:\Imagenes\RockG\Logo\`

## Cómo instalar en Botrix (pestañas separadas)

1. Entra en [botrix.live](https://botrix.live) → Login with Kick
2. Asegúrate de que **botrixlive** sea moderador en tu canal Kick
3. Ve a **Settings** → tu canal Kick → **Alerts** → elige la pestaña (Seguidores, Suscripción, etc.)
4. Sube la imagen (`RockLove.png`) con el botón verde de upload
5. En el panel de Botrix, **deja el campo de texto vacío** o con un guión `-` (el título ya va fijo en el HTML). **No uses `{name}` en el texto del panel** — el nombre sale solo del HTML.
6. Abre **Custom Code** y pega en cada pestaña:

| Pestaña Botrix | Archivo a copiar |
|----------------|------------------|
| **Html** | `botrix/follow/html.html` |
| **CSS** | `botrix/follow/css.css` |
| **JavaScript** | `botrix/follow/js.js` |
| **Campos personalizados** | no tocar |

7. Pulsa **Exportar esta Alerta** y usa **Test Alert** para probar
8. Copia la **Widget URL** → OBS → Browser Source (800×250 px)

Repite los pasos 3–8 para **Suscripción**, **Sub regalada**, **Host**, **Propina** y **KICKs** usando su carpeta del mapa de arriba.

### Variables de Botrix (usar exactamente así)

```
{name}     → nombre del viewer
{text}     → texto principal
{message}  → mensaje extra
{amount}   → cantidad (subs regalados, propina, espectadores en host, KICKs)
{img}      → imagen/GIF (usa {img} dentro de .alert-media, NO {image})
{sound}    → sonido (se configura en el panel)
{animation} → animación del nombre (en #line2)
{disposition} → layout (en .container)
{transition}  → transición (en .container)
```

## Configuración en Botrix (importante)

Con custom code activo, ajusta el panel así para evitar conflictos:

| Ajuste | Valor recomendado |
|--------|-------------------|
| **Provisión / Disposición** | Imagen a la izquierda, texto a la derecha |
| **Animación de entrada** | Fade o Slide (no Zoom si se ve raro) |
| **Duración** | 6 segundos |
| **Fuente / color del panel** | Da igual — el CSS custom lo sobreescribe |
| **Imagen** | Sube RockLove.png (Botrix la inserta vía `{img}`) |

## Configuración OBS (importante)

| Campo | Valor |
|-------|-------|
| Ancho | **800** |
| Alto | **200** |
| FPS | 30 |
| ✓ Actualizar navegador cuando la escena esté activa | Activado |
| **CSS personalizado** | Pegar contenido de `obs-custom-css.txt` |

Después de cambiar código en Botrix: clic derecho en la fuente OBS → **Actualizar**.

## Si se ve distinto / mal

1. **Vuelve a pegar** html.html, css.css y js.js (están corregidos para Botrix)
2. Usa **`{img}`** no `{image}` en el HTML
3. Pulsa **Exportar esta Alerta** en Botrix después de pegar
4. En OBS añade el **CSS personalizado** de `obs-custom-css.txt`
5. Tamaño OBS mínimo **800×200** (si es muy pequeño se recorta)
6. **Test Alert** en Botrix primero — si ahí se ve bien pero en OBS no, el problema es OBS
7. Si hay **doble imagen o texto**, desactiva estilos del panel y usa solo custom code
8. Si el **nombre sale repetido**, vacía el campo de texto del panel de Botrix (no pongas `{name}` ahí) y vuelve a pegar html + js

## Ver preview local

Abre en tu navegador:

```
alertas-rockg/previews/todas-las-alertas.html
```

## Configuración OBS recomendada

| Fuente | Tamaño | Posición |
|--------|--------|----------|
| Alertas (todas las pestañas) | 800 × 250 | Centro-superior del overlay |
| Una sola URL por tipo | — | Una Browser Source por alerta |

## Sonidos sugeridos

Puedes subir un sonido propio en Botrix. Ideas según tu estilo:
- Follow: impacto corto + whoosh (como transición `TransicionRock.mov`)
- Sub: fanfare corto o "GG" sound
- Gift: celebración / confetti
- Tip: cash register o campana
- Host: whoosh + impacto (entrada de audiencia)
- KICKs: sonido corto de moneda o fanfare

## Notas

- Las variables Botrix `{name}`, `{text}`, `{message}`, `{amount}`, `{img}` se reemplazan automáticamente en stream
- No uses rutas locales (`E:\...`) en el código; las imágenes se suben desde el panel de Botrix
- Si el custom code no carga la fuente Google, Botrix usará Arial Black como fallback (similar)
