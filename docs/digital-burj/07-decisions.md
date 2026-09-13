# 07 — Architecture Decision Records

## ADR-001 — Matrix over Mattermost (2026-09-12, accepted)
Context: HQ chat on Oracle free ARM. Official Mattermost image is AMD64-only.
Decision: Matrix Synapse + Element. Consequence: slightly less Slack-like UX;
gains: official ARM images, E2E encryption, open standard. Revisit if x86 infra exists.

## ADR-002 — Jitsi hosted, not self-hosted (2026-09-12, accepted)
Self-host needs ~4 GB RAM alone. `meet.jit.si` rooms are free without accounts.
Revisit only for compliance-recorded meetings.

## ADR-003 — Modular monolith, no microservices (2026-09-12, accepted)
One Next.js app per domain max; shared packages on duplication. Extract a service only
for scaling/isolation/security/reliability with written justification.

## ADR-004 — SQLite now, Postgres at R3 (2026-09-12, accepted)
Academy ships node:sqlite; schema kept Postgres-compatible. Migrate on paying
cohort or multi-instance need — not before.

## ADR-005 — Loadbyton stays independent (2026-09-12, accepted)
No shared DB/auth with ecosystem. Integration = case study + evidence links.

## ADR-006 — Journal URL preserved (2026-09-12, accepted)
Spec nav says INSIGHTS; 500 indexed `/journal` URLs stay. Nav may label Insights later;
URLs never break for taxonomy fashion.

## ADR-007 — No cinematic intro (2026-09-12, accepted)
Built, reviewed, removed per founder verdict. Homepage loads directly. Do not re-add
without explicit request.

## ADR-008 — Docs stay trimmed (2026-09-12, accepted)
8 living docs in `docs/digital-burj/` + this ADR log. No 18-file essay sets; reasoning
lives here or it didn't happen.
