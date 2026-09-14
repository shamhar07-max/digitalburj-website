# 13 — Master gap matrix (mandate GATE 0)

Status on entry: DONE (verified) · OPEN (to build) · EXTERNAL (needs outside dependency) · ACCEPTED (documented limitation).

## P0 — integrity/security blockers
| Gap | State | Fix |
|---|---|---|
| Multi-record flows not atomic (approve/assure/provision) | OPEN | `db.transaction()` + wrap; concurrency tests |
| Raw 500 bodies in some routes | OPEN | `fail()` everywhere |
| Concurrent double-approve / double-apply races | OPEN | 409 tests firing simultaneous requests |
| Contact leads depend on mailto only | OPEN | leads table + API + admin; site posts with mailto fallback |
| Website presents all products as equal | OPEN | maturity badges (BETA/PUBLIC/MATURE) on doors |

## P1 — production-critical
| Gap | State |
|---|---|
| No CI pipeline | OPEN → `.github/workflows/ci.yml` (lint/typecheck/test/build/audit) |
| Backup never restore-tested | OPEN → script + performed restore test |
| Rate limits in-memory | ACCEPTED (single-node; Redis boundary for PG move) |
| Grading crash window (submit→setImmediate) | OPEN → durable QUEUED insert at submit |
| Postgres path unproven | OPEN → schema-pg.sql + incompatibility audit (no fake cutover) |
| Object storage | EXTERNAL (needs S3/R2) → interface contract documented |
| Email delivery | EXTERNAL → channel column + boundary documented |
| Sandbox execution | EXTERNAL (needs isolated runner infra) → job interface + refusal default |

## P2 — architecture
| Gap | State |
|---|---|
| Orgs unenforced (projects not org-scoped) | OPEN → org_id + membership check |
| Roles too coarse (no employer/reviewer split) | OPEN → employer role; reviewer≠approver already enforced |
| AI no cost/privacy controls | OPEN → token/cost columns + budget cap + classification |
| Company sim shallow | OPEN → company_events feed (stateful consequences) |
| No tasks/change-requests on projects | OPEN → tables + flows |
| No feature flags | OPEN → flags table; registration_open enforced |
| Talent matching absent | OPEN → ?skill= filter + employer application view |

## P3 — hardening/ops
Metrics endpoint, structured security events, threat-model doc, docs sync (README/DEPLOY/ENV),
a11y pass, bundle/latency measurement, notification dedupe (DONE), session revoke (DONE).

## Resolved in prior passes (evidence in 12-final-report.md)
Answer-key containment, demo-seed gating, revision lifecycle, assurance separation,
lockout, audit IP, error hygiene for login, BLUEPRINT honesty, capability bands,
boot recovery, single-origin, mobile nav, auto-enroll, null-prototype boundary.
