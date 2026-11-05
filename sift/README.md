# Sift Reader

Read PDFs, highlight what matters, and sort your highlights by hand on a sketchy whiteboard.

Everything runs in the browser. PDFs, highlights and boards are stored on your own device (IndexedDB) and are never uploaded anywhere. Use **⋯ → Backup & restore** now and then to save a backup file.

## Board shortcuts

| Key | Action |
| --- | --- |
| V | Select and move |
| H, or hold Space | Hand: move around the board |
| T | Note: click to write |
| R | Rectangle: drag to draw |
| A or Ctrl+A | Select everything |
| Shift + click | Add to or remove from the selection |
| Delete | Remove selected items (highlights go back to the tray) |
| Ctrl+Z / Ctrl+Shift+Z | Undo / redo |
| Arrow keys | Nudge selection (Shift for bigger steps) |
| Esc | Clear selection |

In the reader, select text and press 1–4 to highlight in a color.

## Hosting

This is a static site: `index.html` plus the `lib/` folder. It works on GitHub Pages, Netlify, Cloudflare Pages or any static host. No build step.

## Third-party parts

- [PDF.js](https://mozilla.github.io/pdf.js/) 3.11.174 by Mozilla, Apache License 2.0 — see `lib/PDFJS-LICENSE.txt`.
- The handwriting font is Virgil by Ellinor Rapp, released under the SIL Open Font License 1.1 — see `FONT-LICENSE.txt`. It is embedded in `index.html`.
- The interface font, Assistant, loads from Google Fonts.
