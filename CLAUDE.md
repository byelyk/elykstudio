# CLAUDE.md — project guide for Claude Code

This file gives Claude Code context when working in this repo.

## What this is

ELYK STUDIO — a static marketing site for a social-first creative agency.
Plain HTML + CSS + vanilla JS. **No framework, no build step, no dependencies.**
Do not introduce a bundler, npm packages, or a framework unless explicitly asked.

## Architecture

- Every page is a standalone `.html` file that shares `css/style.css` and `js/main.js`.
- `js/main.js` is page-aware: it checks for elements/`body` classes and only runs the
  logic relevant to the current page (home grid, work index, or campaign detail).
- **Content is data-driven.** All campaign copy, stats, and video references live in
  `js/campaigns.js` as an array of objects. `work.html` builds its list from it, and
  `campaign.html` renders a case study from `?id=` by looking it up. Never hardcode
  campaign content into the HTML — edit `campaigns.js`.

## Design system (in css/style.css `:root`)

- `--bg: #000` (true black), `--white`, `--orange: #FF4D00` (single accent — change once, cascades)
- Fonts: Inter (body/UI), Playfair Display (serif display), loaded from Google Fonts
- Custom orange dot cursor on pointer devices; native cursor restored on touch

## Conventions

- Keep it dependency-free and framework-free.
- Keep the four nav links (Home / Work / About / Contact) in sync across all 5 pages;
  each page marks its own link `class="active"`.
- Mobile: breakpoints at 1024 / 768 / 640 / 380px. Test any layout change at 390px wide.
- Validate before finishing: `node --check js/main.js && node --check js/campaigns.js`,
  and confirm `css/style.css` braces balance.

## Common tasks

- **Add a campaign** → append an object to `CAMPAIGNS` in `js/campaigns.js`.
- **Recolor** → change `--orange` in `css/style.css`.
- **Add real videos** → drop `.mp4` in `videos/`, set `bgVideo`/`heroVideo`, or paste a
  YouTube ID into `bgYouTube`/`heroYouTube` and the `youtube[]` array.
