# 09 — Brand unity (one identity everywhere)

Source of truth: `digitalburj-website/public/brand/` (never redraw, never recolor).
- Emblem/tile: pine `#12332A` · cream `#FAF6EE` · terracotta `#D9481C` / ember `#E8721C`
- Wordmark: ink `#17251F` + deep gold `#8A4A06` on light; cream on pine tile only
- Descriptor: `LEARN · BUILD · WORK · GROW` — the only tagline; invent none
- Fonts: display Space Grotesk, body Inter, mono JetBrains Mono — identical families on
  site AND Academy (same next/font loaders, same CSS var names)

## Where the real assets live now
- Site: `public/brand/*` — header renders `db-lockup-blend.svg` (h-10/11); favicon `db-icon-neo.svg`
- Academy: same `db-lockup-blend.svg` in TopBar at identical size; favicon = neo icon
- HQ chat: Element `brand: "DigitalBurj HQ"`; AFFiNE workspace named “Digital Burj HQ”
- Rule: any new surface reuses these files. A new logo variant = ADR + founder sign-off.

## Cross-links (interlink map)
- Site → Academy app: runtime-host `:3100` locally, `NEXT_PUBLIC_ACADEMY_URL` in prod
  (studio intake, talent/jobs boards). Site → HQ chat/docs: same mechanism when Oracle lands.
- Academy → Site: TopBar “Site ↗” (`NEXT_PUBLIC_SITE_URL`, default digitalburj.com).
- Academy → HQ: add `NEXT_PUBLIC_CHAT_URL`/`NEXT_PUBLIC_DOCS_URL` links in TopBar once R2 lands.
