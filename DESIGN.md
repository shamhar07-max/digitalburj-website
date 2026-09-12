# DIGITAL BURJ — Design Direction v3 “Verdant Cinematic”

Art-director lock. Everything below is binding; deviations need a written reason.

## 1. Concept — “The Greenhouse Mainframe”

A sunlit engineering greenhouse fused with a mainframe console: warm paper,
living green, copper infrastructural accents, instrument precision. The brand
feels grown AND engineered — nothing neon-for-neon, nothing-startup-beige.

## 2. Palette (roles, not swatches)

| Token | Value | Role — where it may appear |
|---|---|---|
| Paper `#FAF6EE` | canvas | page background only |
| Pine `#12332A` | authority | header CTA, footer bands, stamp disc, final text |
| Emerald `#0B6B4F` | growth/success | primary actions, verified states, active nav |
| Terracotta `#D9481C` | energy/alert | one accent per viewport max (CTA shadow, markers) |
| Ember `#E8721C` | warmth | ticket headers, stamps, small badges |
| Teal `#0E7C6B` | system | orbits, console lines, info |
| Leaf `#4C8C2B` | quiet success | secondary confirmations |
| Gold-deep `#8A4A06` | editorial italic | serif accents only |

Banned: purple/violet gradients, cyan glow-on-dark, glassmorphism washes,
pure black backgrounds (pine is the darkest surface).

## 3. Typography

- Display: Sora ExtraBold, tight tracking (-0.02em), sentence case for
  headlines (SHOUTING reserved for the home H1 + footer wordmark).
- Editorial italic: Plex Serif italic, gold-deep, used once per viewport.
- Data: Plex Mono 11–12px, uppercase, wide tracking — labels, never body.
- Body: Inter/system, 15–18px, 1.6–1.75 line height.
- Numbers that prove things are tabular (`tabular-nums`).

## 4. 3D aesthetic — “paper diorama”

Depth comes from layered paper planes, never blur-heavy glass:
tilted card stacks (2–3°), hard offset shadows (4–8px pine), tape strips,
perforated edges, barcode artifacts. Interactive 3D is limited to:
hero console tilt (max 8°, pointer:fine only), magnetic primary CTAs (±6px),
constellation parallax (±14px). All frozen under reduced-motion.

## 5. Lighting & atmosphere

Sunlit paper: warm radial wash top-left on heroes, vignette on dark bands,
film grain at 4–6% opacity over cinematic sections only, blueprint dot-grid
at 10% ink. Constellation canvas: 90 nodes, pine lines, ember/teal nodes,
twinkle by sine — rAF paused offscreen, DPR-capped at 2.

## 6. Motion language

- Ambient only: float (6–7s), stamp spin (18s), marquee (30s), pulse dots.
- Interaction: 200–250ms lifts, shine sweeps, sliding arrows.
- Signature (rare, once per page max): SVG line-draw on the proof flow,
  letterbox intro sequence (first visit only).
- Forbidden: scroll-reveal cascades, parallax backgrounds, layout-shifting
  entrances, autoplay video, cursor followers.

## 7. Signature moments (exactly four)

1. First-visit title sequence (logo wipe → chapters → doors).
2. Hero evidence diorama: layered parallax + cursor light + tilting console
   (see DESIGN-3D.md) under a drifting constellation.
3. Rotating EVIDENCE FIRST stamp + perforated specimen ticket.
4. Ticker band + magnetic primary CTAs.

## 8. Composition rules

Alternating rhythms: broadsheet hero → index table → tinted band → card grid
→ pine band → note → FAQ. Never two card grids in a row. One CTA panel per
viewport. Numbers prove; adjectives don't. Every claim ships with its limit.
