# Variantes KICKs por tier — RocKG

Cada carpeta = una variante en Botrix con condición `amount >= …`.

## Checklist Botrix (si no se ve igual que el preview)

1. **Html** → pegar `html.html` entero (incluye `<link>` de Montserrat)
2. **CSS** → solo en el campo CSS, no mezclar con Html
3. **JavaScript** → `js.js` en su campo
4. Campo de texto del panel → **vacío** o `-`
5. Marca el aviso de seguridad del custom code
6. OBS: fuente **800×200** + `obs-custom-css.txt`
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
