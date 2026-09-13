# 06 — Roadmap (revenue-gated; no phase starts without its gate)

- [x] **R0 HQ local** — AFFiNE+Matrix+Jitsi verified. Gate passed.
- [x] **R1 Public IA + single-origin entry** — `/industries`, `/process`, homepage doors,
  Academy at `/platform/*` (basePath+rewrite, shared cookies), mobile nav, auto-enroll DB-00.
- [x] **R3 Academy hardening** — headers, rate limits, `/api/health`, versioning pinned,
  INFRASTRUCTURE_ERROR distinct (11/11 tests green).
- [x] **R5 Studio intake** — site form → Academy review queue → admin triage. Live locally.
- [x] **R6 Talent/Jobs** — verified directory + board + one-application rule. Live locally.
- [x] **R7 Client portal slice** — clients/projects/updates/approvals + client role. Live locally.
- [x] **R8 AI stub** — gateway + scoped agents + audit; 503-honest without key. Provider later.
- [x] **R9 slice** — organizations/memberships tables + admin management. Full unification later.
- [ ] **R2 HQ → Oracle** — same script, `bootstrap.sh digitalburj.com`.
  Gate: founder provides account + VM + DNS. Cost: $0 + one evening.
- [ ] **R3 Academy hardening** — headers, rate limits, health, content versioning,
  INFRASTRUCTURE_ERROR≠FAILED. Gate: first paying cohort or client data. Cost: days.
- [ ] **R4 Delivery process live** — builder→reviewer rule, DoD checklist, verdicts
  (VERIFIED/WITH CONDITIONS/CHANGES REQUIRED/NOT VERIFIED) recorded in AFFiNE.
  Gate: 2nd paying project. Cost: process, not code.
- [ ] **R5 Studio intake** — validation-first form + manual review pipeline.
  Gate: 5+ founder inquiries. Cost: days.
- [ ] **R6 Talent/Jobs DB** — capability records + manual placement log.
  Gate: 10+ graduates with evidence. Cost: ~1 week.
- [ ] **R7 Business portal** — client dashboard (overview/projects/approvals/invoices).
  Gate: 3+ retainer clients asking “what's the status?”. Cost: weeks.
- [ ] **R8 AI layer** — gateway + Academy tutor (review-queued) first, never autonomous grading.
  Gate: tutor demand + R3 done. Cost: weeks + API budget.
- [ ] **R9 Platform Core** — unify identity/RBAC/audit when 2+ apps share a primitive.
  Gate: actual duplication pain. Cost: months. Not before R7.

Forbidden until gated: microservices, custom chat/video/storage/IdP/payments, multi-region,
Kubernetes, training own models (spec Pt 46 — adopted verbatim).
