# Lakshya Kumar — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Static site, no backend.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build && npm start
```

## Deploy

Push to GitHub, then import at [vercel.com/new](https://vercel.com/new). Zero config.

## Design system

Technical-blueprint direction: graph-paper grid background, amber accent, Space Grotesk (UI) + IBM Plex Mono (labels, metadata, links).

Palette lives as CSS variables in `src/app/globals.css`:

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#f2f4f7` | `#0b0f14` |
| `--panel` | `#ffffff` | `#10151c` |
| `--ink` | `#0b0f14` | `#e7ecf2` |
| `--muted` | `#5a6675` | `#8792a0` |
| `--accent` | `#a9640d` | `#e8a33d` |

The accent is darkened in light mode so it stays legible on paper-white — it is not the same hex flipped.

## Structure

```
src/
  app/
    layout.tsx        fonts + metadata
    page.tsx          sidebar + main grid
    globals.css       theme tokens, grid background, caret
  components/
    providers.tsx     theme + motion-preference + cursor
    theme-toggle.tsx  dark/light switch
    sections/
      sidebar.tsx     identity, section tracker, contact
      log-line.tsx    typing terminal line
      stack.tsx       01 — what i work with
      work.tsx        02 — selected work
      approach.tsx    03 — how i work
      contact.tsx     04 — get in touch
    ui/
      custom-cursor.tsx      state-aware cursor
      magnetic.tsx           hover pull effect
      motion-preferences.tsx reduced-motion + cursor context
      reveal.tsx             scroll reveal wrapper
      section-head.tsx       numbered section label
      scroll-progress.tsx    top reading-progress bar
  lib/
    motion-system.ts       spring + transition tokens
    use-active-section.ts  tracks the section in view
```

## Interaction details

- **Custom cursor** replaces the native pointer on mouse devices and changes shape by context (pill on links, rounded square on buttons, caret on inputs). Auto-disabled on touch devices and when the OS requests reduced motion.
- **Magnetic hover** on nav links, project links, and the theme toggle.
- **Terminal log line** types out on load; skips straight to the final state under reduced motion.
- **Scroll reveals** fire once, staggered per item.
- **Scroll progress bar** across the top of the viewport, spring-smoothed.
- **Section tracker** in the sidebar marks the section currently in view with an accent rule and dot.

Every motion path respects `prefers-reduced-motion` — the reduced branch renders static markup rather than a zero-duration animation.

## Editing content

- Name, role, contact links → `sections/sidebar.tsx`
- Stack cards → `STACK` array in `sections/stack.tsx`
- Projects → `MINOR_PROJECTS` array + the featured block in `sections/work.tsx`
- Approach cards → `APPROACH` array in `sections/approach.tsx` **(placeholder copy — rewrite in your own words)**
- Contact cards → `CHANNELS` array in `sections/contact.tsx`
- Boot messages → `MESSAGES` array in `sections/log-line.tsx`
- Section order and nav labels → `NAV` in `sections/sidebar.tsx` (ids must match the `id` on each `<section>`)

To promote a project to featured, move its content into the panel block at the top of `work.tsx` and drop it from `MINOR_PROJECTS`.
