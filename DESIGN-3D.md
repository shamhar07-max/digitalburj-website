# DIGITAL BURJ — 3D Visual System v1 (“Evidence Diorama”)

Companion to DESIGN.md. Rules here override where they conflict.

## 1. Hero object — the Evidence Diorama

A five-plane paper diorama, not a 3D scene graph. No WebGL anywhere.

| Plane | Content | Depth | Behavior |
|---|---|---|---|
| P0 Backdrop | dot-grid + warm wash + grain | fixed | static |
| P1 Atmosphere | Shared SVG orbit motif (`OrbitLines`) — rings, nodes, center seal | static, one language everywhere |
| P2 Halo | orbit ring + glow orbs | ±12px | follows cursor slowly |
| P3 Subject | evidence stack (ticket/orbit/chip) | tilt ≤8° | pointer tilt, desktop only |
| P4 Seal | rotating stamp | +18px lift | floats above subject |
| P5 Light | cursor radial wash | 1:1 | follows cursor, 120ms lag |

## 2. Materials & textures

- Paper matte `#FFFFFF` on `#FAF6EE`, 1.5px ink borders, 18px radius.
- Tape: translucent ember strips at corners, always -6° or +3°.
- Foil: gold-deep serif italic, never body text.
- Perforation: dashed hairline dividers on tickets.
- Barcode: CSS repeating gradient, currentColor.
- Grain: 5% SVG turbulence over cinematic sections only.

## 3. Lighting rig

- Key: warm radial wash top-left (static CSS).
- Practical: cursor light — 320px radial, pine at 8% opacity, lerped follow.
- Accents: ember node glows on constellation (shadowBlur capped), gold stamp ring.
- No bloom stacks, no multi-shadow piles (max one shadow per card).

## 4. Camera

Perspective 1200–1400px on hero stage. Default: straight-on (no tilt) so the
page reads perfectly static. Tilt engages only while the cursor moves over
the stage and eases back on leave. Touch devices: no camera motion at all.

## 5. Depth map (translateZ, px)

Backdrop 0 · atmosphere 20 · halo 45 · subject 60–90 (stacked children) ·
seal 120 · light overlay (2D, pointer-events none).

## 6. Particles & camera motion

Retired WebGL variant in favor of a shared SVG orbit system: zero runtime
cost, identical motif on home hero and every subpage hero, no hydration or
GPU risk on low-end devices. Depth comes from layered paper planes, tilt,
parallax and light — never from a scene graph on a content site.

## 7. Movement budget

- Ambient: float 6–7s, stamp 18s, marquee 30s, pulse 2s.
- Interaction: tilt ≤8°, magnetic ±6–8px, lifts -3px, 200–250ms easings.
- One-shots: intro sequence (first visit), no scroll cascades.
- Frame rule: transform + opacity only, never layout/background-position.

## 8. Interaction matrix

| Input | Hero response |
|---|---|
| Mouse move (fine pointer) | parallax layers + cursor light + tilt |
| Mouse leave | ease back to rest pose |
| Touch / pen | static diorama, tap states only |
| Keyboard | focus rings, no motion dependency |
| Reduced motion | all ambient + interactive motion off |

## 9. Performance contract

- Zero 3D libraries (framer-motion already present, used sparingly).
- Zero images for depth (SVG + CSS only).
- Fonts unchanged (self-hosted, display=swap).
- Static export: orbit motif renders inline; content never waits on JS.
- Failure mode: any JS error leaves a clean static hero (progressive enhancement).
