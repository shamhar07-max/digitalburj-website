# 10 — Full review: technical · architectural · business · execution (GStack pass, 2026-09-12)

Roles: CEO (demand) → Eng (architecture) → Reviewer (risks) → QA (verification) → Ship (release).
Question asked: “Academy is very difficult to enter — what must be done for 100% success?”

## CEO verdict — the entry problem was real, and it was 4 problems
1. **Port-origin split.** Users don't do `:3100`; links break behind any proxy. FIXED: single origin.
2. **No mobile navigation.** Academy nav was `md:flex`-only; phone users were stranded. FIXED: hamburger menu.
3. **Empty start.** New registrants landed in a vacuum. FIXED: auto-enroll DB-00 on register.
4. **Two doors, one promise.** “One login” is now literally true inside the Academy; site↔app
   identity unification waits for Platform Core (R9) — do NOT fake SSO before then.

## Eng verdict — single-origin architecture (shipped)
- Academy `basePath: "/platform"`; site rewrites `/platform/:path*` → Academy upstream
  (`ACADEMY_UPSTREAM`, default 127.0.0.1:3100). Same origin → shared cookies, no CORS, no ports.
- All absolute refs (9 fetch sites, logo img, logout form) prefixed; `redirect()` auto-prefixed by Next.
- Rollback: remove the rewrite + revert basePath; Academy runs standalone identically.
- Prod mapping: `academy.digitalburj.com` MAY stay a direct origin later, but the blessed
  path is `digitalburj.com/platform/*` — one domain to remember, one TLS cert, one analytics.

## Reviewer verdict — risks that remain
1. RAM: 6 GB local box runs site+academy+HQ+cashpilot hot (~1 GB free). Oracle 12 GB resolves it;
   until then, no more resident services on this box.
2. SQLite single-writer: fine ≤5 staff + cohorts of tens; migrate at first lock contention (ADR-004).
3. AI gateway has no key: 503-honest by design, but tutor demand will force the spend decision (see R8).
4. Matrix/AFFiNE identities still separate from Academy — acceptable, documented, never papered over.

## QA verdict — evidence (all green 2026-09-12)
- 11/11 integration tests (4 journey + 7 ecosystem incl. 403 walls, 409 replays, 503 honesty).
- Builds: site 531/531, academy 68/68. Live: register→cookie→missions→dashboard through
  `:3000/platform`, auto-enroll verified in DB, message loop verified earlier.

## Ship verdict — released locally; Oracle checklist unchanged
Founder still owns: account → A1 VM → DNS (`chat`, `docs`, + `platform`→ either Caddy or the
Academy origin). `bootstrap.sh` + this repo deploy identically there.

## What 100% success actually requires (ordered)
1. **Traffic test with 5 real users** (not us): register → DB-00 → first mission → review.
   Watch where they stall; fix only what stalls. (CEO gate for R3 spend.)
2. **First paying cohort** → unlocks R3 hardening budget + Postgres move decision.
3. **Second paying project** → R4 delivery verdicts become habit, not theater.
4. **Tutor demand in writing** (teachers asking, not us imagining) → R8 key + budget.
5. **Duplication pain** (same user table needed twice) → R9 Platform Core. Not before.
6. **Never**: fake metrics, fake logos, guaranteed outcomes, back-dated experience. The brand
   premium IS the honesty; discount it nowhere.
