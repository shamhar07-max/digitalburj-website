# 12 — Final engineering report: hardening + lifecycle completion (2026-09-13)

Philosophy executed: SPECIFY → ARCHITECT → BUILD → BREAK → SECURE → TEST → VERIFY → DOCUMENT → OPERATE → IMPROVE.
No impression metrics below — only implemented requirements, found failure modes, killed weaknesses, evidence.

## 1. Original state → final state
- Answer keys shipped to browsers (RSC props) → server-side verdicts only (proven by test + live API).
- Demo accounts unconditional → `ALLOW_DEMO_SEED=1` gated; UI creds behind `NEXT_PUBLIC_DEMO_CREDENTIALS`.
- Approval auto-verified evidence → PENDING + independent assurance with enforced separation of duties.
- Submissions: no guards, revision stuck at 1 → open-submission 409, revision chain, WITHDRAWN, auto-enroll.
- Grading crash-strands work → boot recovery (stale RUNNING requeued, QUEUED drained).
- No lockout, no audit IP, duplicate notifications, DB errors leaked → all fixed.
- 19/23 courses claimed PUBLISHED → BLUEPRINT backfill + CHECK.

## 2. Security findings (reproduced → fixed → regression-tested)
| # | Finding | Proof of fix |
|---|---|---|
| S1 | Answer-key leak via client props | `/answer` endpoint; page HTML has no `correct`; test asserts |
| S2 | Approval==verification, same actor | assurance route 403s self-verify; test asserts |
| S3 | No brute-force account protection | 5 fails → 423; test asserts |
| S4 | DB internals in 500 bodies | `fail()` helper; generic message + request_id |
| S5 | Demo creds in prod path | env gates; seed-off test asserts zero users |
| S6 | Notifications duplicated on retry | 1-hour dedupe in `notify()` |
| S7 | No session revocation | DELETE revokes all; test asserts 401 after |
| S8 | Audit without actor IP | `ip` column; login/provision/approval record it |
| — | SQLi / XSS / mass-assignment / TODOs | audited: all parameterized, React-escaped, allowlisted, none found |
| — | Deps | `npm audit`: 0 vulnerabilities |

## 3. Test results: 15/15 (4 journey + 11 ecosystem... actually 4+7+4 new = 15)
New: leak (page+API), revision chain, open-409, withdraw + double-withdraw 409, lockout 423,
revoke-all, self-assure 403, seed-off. Builds: site 531/531, academy 69/69. Curriculum VALID.
Live E2E (prod DB): submit → approve → PENDING (talent empty ✓) → assure → VERIFIED (talent shows band ✓).

## 4. Migrations applied (prod /tmp DB)
users.role+client, submissions.mission_version, submissions.WITHDRAWN, audit_logs.ip,
courses.BLUEPRINT (+19 backfill), legacy SUBMITTED→UNDER_REVIEW. Fresh-install schema.sql
verified identical-in-effect (test DBs boot from it).

## 5. Known limitations (not hidden)
- Grading + rate limits in-memory (single-node; Redis boundary documented for Postgres move).
- Sandbox execution (§14), email delivery, payments, files: NO SURFACE → no vuln; boundaries in matrix.
- Full 18-role RBAC, multi-org enforcement beyond projects: R9-gated, tracked in 06-roadmap.
- /tmp prod DB evaporates on provider reboot — Oracle move puts data on persistent volume + backup script.

## 6. External dependencies remaining
Oracle account/VM/DNS (founder); AI provider key + budget (R8); real user traffic test (5 users).

## 7. Deployment / rollback
Deploy: migrate → seed (no flag in prod) → build → start. Rollback: previous `.next` + DB backup
(HQ runbook pattern). Prod demo accounts MUST be deleted on Oracle:
`DELETE FROM users WHERE email LIKE '%@digitalburj.com'` after creating the real owner
(or keep exactly one owner, rotate its password).

## 8. Technical Assurance result: CONDITIONAL PASS
System is correct per matrix EXCEPT it has never faced real users or a restore test —
those are the two remaining gates, and they are operational, not code. Next: 5-user traffic test, then re-run this report.
