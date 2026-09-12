# DIGITAL BURJ — Motion System v1

Every animation answers: what changes for the visitor because this moves?

## 1. Principles

1. Motion explains: reveals show where content comes from; hovers confirm actions.
2. One voice: single easing `[0.22, 1, 0.36, 1]`, durations 200–600ms.
3. Ambient loops run forever but cost nothing (transform/opacity only).
4. One-shots fire once per visitor (intro) or once per element (reveals).
5. `prefers-reduced-motion` disables everything except color transitions.

## 2. Vocabulary

| Token | Use | Duration |
|---|---|---|
| `rise` | section entrances (16px, fade) | 500ms, once |
| `mask-line` | H1 + display titles (clipped rise) | 600ms on mount |
| `hero-in` | hero children stagger | 600ms, 80ms steps |
| `lift` | cards/buttons on hover (-3px) | 200–250ms |
| `shine` | primary CTA sweep | 550ms on hover |
| `slide-arrow` | link arrows nudge | 200ms on hover |
| `float` | collage cards | 6–7s loop |
| `spin-slow` | stamp seal | 18s loop |
| `marquee` | ticker band | 30s loop |
| `pulse-dot` | live/status dots | 2s loop |
| `count-up` | KPI numbers on first view | 1400ms, once |
| `tilt/parallax` | hero diorama (fine pointers) | rAF lerp |

## 3. Forbidden

Scroll cascades (staggering whole grids), parallax backgrounds, layout-
shifting entrances, autoplay video, cursor followers, page-transition
overlays (speed + SEO cost outweigh the cinema), bounce/spring easings.

## 4. Page-load choreography (home)

Intro overlay (first visit) → navbar settles → kicker → headline mask-lines
→ lede → CTAs → spec strip → collage floats in. Each step 80ms apart,
total under 1.2s, all skippable via SKIP.

## 5. Scroll behavior

Subtle `rise` per section block (once, 60px viewport margin). Counters run
when visible. Chapter rail dots track position. Nothing replays.

## 6. Implementation map

- `Reveal` — rise token. `decor.HeroMotion` — hero-in.
- `decor.MaskLine` — mask-line for display titles.
- `decor.Counter` — count-up (static fallback if reduced motion).
- `Stage.TiltStage/Magnetic`, `Diorama` — camera language.
- `globals.css` — ambient keyframes only.
