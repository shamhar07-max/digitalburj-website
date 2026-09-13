# 01 — Current-state audit (2026-09-12, evidence-based)

## digitalburj-website (public site)
- Next.js 16.3.4 / React 19 / TS5, static export, 529 pages (`npm run build` green).
- 16 top-level routes: `/` `/about` `/academy` `/business-ai` `/community` `/contact`
  `/global-careers` `/jobs` `/journal` (500 posts, 2019→2026) `/legal` `/projects`
  `/services/[slug]` (7: transform/build/intelligence/automate/grow/operate/business-systems)
  `/skills` `/studio` `/talent` `/work` (Loadbyton case study).
- Nav: Solutions▾ (7 services) + Work/Journal/About + Ecosystem▾
  (Academy/Studio/Business/Talent/Jobs/Journal) + CTA “Start a project” → `/contact`.
- No backend, no auth, lead intake = mailto + contact form. No test suite (`lint` only).
- Design system: Verdant Corporate light (paper `#FAF6EE`, pine, emerald, terracotta);
  real logo lockups in `public/brand/`; JSON-LD + sitemap + robots present.

## digitalburj-academy (Academy app)
- Next.js 16.3.4, `apps/web`, node:sqlite (Postgres-compatible intent), scrypt sessions.
- 15 tables: users/sessions/courses/missions/enrollments/submissions/reviews/skills/
  student_skills/evidence/certificates/notifications/grading_runs/companies/audit_logs.
- RBAC: student/teacher/admin; idempotent submits; teacher review with 409-on-stale;
  grading worker; talent export; passport; language pref. 8 API groups.
- Tests: `tests/journey.test.mjs` 4/4 + `curriculum:validate` (23 courses/73 modules).
- Gap vs spec Pt 17: no AI tutor/assessor, no content versioning, no FAILURE_PASSPORT,
  SQLite single-node (fine for now).

## digitalburj-hq (Virtual Head Office, local-verified)
- `bootstrap.sh` + compose: Caddy + AFFiNE (+pgvector/redis) + Matrix Synapse (+postgres)
  + Element Web. Running in `/opt/db-hq`, all endpoints verified (see HQ cross-check).
- Deliberate substitution: **Matrix, not Mattermost** (official MM image is AMD64-only;
  Oracle free tier is ARM). Jitsi via free hosted rooms, no self-host.
- Oracle migration pending (needs founder: account → A1 VM → DNS).

## Loadbyton (product)
- Independent repo (`Project-Loadbyton`): ~35k LOC, 52-table schema, escrow/ledger,
  own Dockerfiles. Must stay architecturally independent (spec Pt 24 agrees).
- Only integration today: `/work` case study on the public site. No shared auth/DB.

## Cross-cutting gaps
- Identity lives in 2 places (Academy sessions, Matrix accounts), no shared ID.
- No Platform Core, no Assurance system, no CRM/sales pipeline, no client portal.
- Studio/Business/Talent/Jobs = marketing pages, no applications (correct per phasing).
- Zero fake claims observed; proof assets are real (Loadbyton metrics, journal corpus).
