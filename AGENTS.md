# Project — Personal Portfolio (hsnx999.github.io)

Single-page portfolio for **Hassan Muhammad Sharif** (hsnx999), an AI/LLM engineer.  
Dark-themed, IBM Plex fonts, hosted on GitHub Pages.

## File ownership

| File | Agent | Responsibility |
|---|---|---|
| `index.html` | `html-agent` | Structure, meta/OG tags, semantic HTML, favicon, accessibility |
| `style.css` | `css-agent` | All styling — theme, layout, responsive, animations |
| `script.js` | `js-agent` | All JS — IntersectionObserver, active nav, scroll behavior |

## Delegation rules

- Route file-specific work to the owning agent.
- Handle cross-file changes (e.g. adding a new section that touches HTML + CSS + JS) myself.
- Always commit and push after all agents finish their work.
- Verify no agent modified a file outside its ownership.

## Conventions

- Single-page, scrollable, max-width ~900px centered layout.
- Color palette: `#0d0d0d` bg, `#141414` surface, `#222` border, `#7cfc8a` accent, `#e8e8e8` text, `#666` muted.
- Fonts: IBM Plex Mono (headings/code), IBM Plex Sans (body) — loaded via Google Fonts.
- Responsive breakpoints: 768px, 480px, 380px.
- Build tools: none. Direct HTML/CSS/JS on GitHub Pages.
