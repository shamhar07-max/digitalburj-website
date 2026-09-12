# Digital Burj — Master Architecture (from the live codebase)

Principle: evolve, don't rebuild. `www` is the headquarters; subdomains become
real products only when the application underneath deserves them.

## 1. Current route inventory (this repo)

| Route | Kind today | Future home |
|---|---|---|
| `/`, `/about`, `/work`, `/journal/*`, `/contact`, `/legal` | Corporate | stays on `www` |
| `/services`, `/services/[slug]` | Commercial content | → `business.` (portal later) |
| `/business-ai` | Commercial content | → `business./ai` |
| `/projects` | Method content | stays (methodology) |
| `/academy` | Marketing doorway | doorway stays; platform is separate repo |
| `/studio` | Marketing doorway | doorway stays; workspace later |
| `/talent`, `/jobs`, `/global-careers` | Marketing doorway | doorways stay; boards later |
| `/skills` | Index | folds into Talent capabilities view later |
| `/community` | Content | folds into Academy community later |

## 2. Target URL architecture

`www` (HQ) · `business.` (client portal) · `studio.` (founder workspace) ·
`academy.` (learning platform — repo `digitalburj-academy`, live) ·
`talent.` (proof layer, consumes Academy evidence) · `jobs.` (consumes Talent) ·
`admin.` + `app.`/`id` (Digital Burj ID: one account, roles per property).

No other top-level subdomains until demand forces them (lab/research last).

## 3. Shared core (when splitting repos)

`digitalburj-core`: auth/session, Digital Burj ID, organizations, RBAC matrix,
notifications, audit log, shared UI primitives, API contracts, file handling.
Rule: no microservices until a boundary earns it — modular monoliths first.

## 4. Migration path (no breakage)

1. Keep all current routes rendering (they are the fallback forever).
2. Ship each property as its own app behind its subdomain (Academy first —
   deepest spec, repo exists with auth/missions/review/evidence).
3. Cross-link doorways → apps (Academy page already funnels to platform).
4. Talent reads Academy evidence exports (shape is the contract — do not build
   a second evidence DB).
5. Jobs reads Talent capability (same rule).
6. Retire a `www` doorway only when its subdomain replacement is live.

## 5. Dashboard hierarchy (target)

- Academy: Today → journey/courses → build (projects, labs) → reality
  (missions, incidents, simulations) → prove (assessments, evidence, passport,
  capability) → community → account. Teacher: cohorts, queue, interventions.
  Admin: health, users, content, audit.
- Studio: pipeline Idea→Launch per project; Talent lookup by verified skill.
- Business: client portal (projects, approvals, docs, reports, billing).
- Talent/Jobs: profiles from evidence; employer search on capability graph.

## 6. Sequencing (firm)

Academy → Studio → Business → Talent → Jobs. One property at a time.
Never build two platforms simultaneously. Marketing site keeps selling
throughout; proof (Loadbyton case study) stays on `www/work`.
