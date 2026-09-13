# 11 — Implementation matrix (DOCUMENTED vs IMPLEMENTED vs TESTED vs SAFE)

Scale: A complete+verified · B implemented unverified · C partial · D prototype · E mock ·
F missing · G unsafe · H architecturally insufficient.

## Academy security (fix FIRST)
| Subsystem | Class | Evidence |
|---|---|---|
| Answer-key containment | **G** | `missions/[id]/page` passes `correct`+`consequence` into client `DecisionLab`; Schiff: existing leak test covers API only, not RSC props |
| Demo credentials | **G** | `seed.js` always creates `*@digitalburj.com/demo1234`; AuthForm+footer print them; no env gate |
| Submission lifecycle | **C** | States exist but: no open-submission guard, `revision` never increments, no WITHDRAWN, no enrollment check |
| Evidence verification | **G** | `reviews` APPROVE inserts `VERIFIED` directly + skill bump — approval==verification by same actor |
| Grading error states | **B** | INFRASTRUCTURE_ERROR exists + tested, but stale RUNNING never recovered (in-process queue) |
| Brute force | **C** | IP rate-limit only; no per-account lockout |
| Audit trail | **B** | No actor IP; 500s leak DB messages to clients |
| Notifications | **C** | No dedupe — retries double-notify |
| CSRF | **B** | SameSite=Lax (sound) but undocumented/untested rationale |
| Course honesty | **C** | UI labels blueprints honestly; DB seeds all catalog rows as PUBLISHED |

## Platform / ecosystem
| Subsystem | Class |
|---|---|
| Identity (scrypt/sessions/guards) | B (needs lockout + revoke-all + IP) |
| RBAC server-side | A (walls tested) |
| Organizations/memberships | C (tables+admin, no enforcement yet) → enforce on projects |
| Capability model (0-100) | C (no bands, auto-bump only) → add bands |
| Talent/Jobs/Portal/AI gateway | B (built, tested; needs lifecycle evidence — this pass) |
| Files/uploads, payments, email delivery | F by design (no surface → no vuln; boundary documented) |
| Multi-tenancy enforcement | C → enforce org check on projects now; rest at R9 |
| Observability/backups | C (HQ backup exists; apps need health — done — + restore test: OPEN) |

## Out of scope this pass (marked, not faked)
Sandboxed code execution (§14), full 18-role RBAC (§7 beyond 4 roles), email delivery,
payments, Kubernetes/multi-region — each gets a NOT-IMPLEMENTED boundary + reason in the report.
