<p align="center"><img src="icons/og-image.png" alt="Sift — Read, highlight, sort." width="600"></p>

# Sift Reader

Live: https://ledtque.github.io/sift/

Read PDFs, highlight what matters, and sort your highlights by hand on a sketchy whiteboard.

Everything runs in the browser. PDFs, highlights and boards are stored on your own device (IndexedDB) and are never uploaded anywhere. Use **⋯ → Backup & restore** now and then to save a backup file.

## Keeping your library safe

PDFs are copied into the browser when you add them, so deleting the original file from your computer doesn't affect Sift.

- **Automatic backup (Chrome, Edge):** open Backup & restore (the "Turn on backup" button above the reader) and choose a folder. After every change Sift writes `sift-data.json`, a dated copy in `history/`, and each PDF in `pdfs/`. Pick a folder inside Google Drive, OneDrive, Dropbox or iCloud Drive to keep it in the cloud as well.
- **New computer or browser:** Backup & restore → *Restore from a backup folder*, and pick the same folder.
- **Any browser:** *Save full backup file* makes one file with everything, PDFs included.
- The site works offline once it has been opened, and can be installed as an app from the browser's address bar.

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
