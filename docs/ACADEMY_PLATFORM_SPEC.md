# DigitalBurj Academy — Platform Build Spec (distilled)

Source: founder-approved Academy platform vision (Sept 2026). This doc preserves the
engineering decisions; the marketing site shows the learner-facing summary.

## 1. Product thesis

Not an LMS. A **learning + building + assessment platform** whose output is a
**verified capability record**, not a watch-history certificate.

Student loop: BRIEF → LEARN → INVESTIGATE → TRY → BUILD → BREAK → FIX → TEST →
EXPLAIN → DEFEND → SHIP → EVIDENCE.
Ecosystem loop: LEARN → BUILD → VERIFY → WORK → GROW.

## 2. Five engines

| Engine | Owns |
|---|---|
| Learning | Courses, modules, lessons, Decision Labs, missions |
| Build | Projects, sandboxes, code submission, test runs |
| Assessment | Quizzes, rubrics, teacher reviews, defenses, appeals |
| Evidence | Proof artifacts linked to skills |
| Capability | Verified record + certificates (VALID/REVOKED/SUPERSEDED) |

Cross-cutting: AI engine (tutor modes, never auto-solves graded work),
intervention engine (GREEN/AMBER/RED risk), notification engine.

## 3. Roles (RBAC)

PLATFORM_OWNER > ADMIN > ACADEMIC_DIRECTOR > TEACHER > REVIEWER > MENTOR >
CONTENT_AUTHOR > QA_ASSESSOR > SUPPORT > STUDENT.
Rules: frontend role is presentation only; backend verifies every request;
MFA mandatory for staff; impersonation logged with persistent banner.

## 4. Core state machines (every transition audited: who/when/before/after/why)

- Enrollment: PENDING → ACTIVE → PAUSED → COMPLETED / WITHDRAWN
- Submission: DRAFT → SUBMITTED → AUTOMATED_REVIEW → TEACHER_REVIEW → CHANGES_REQUESTED → RESUBMITTED → APPROVED (+ EVIDENCE_CREATED → SKILL_VERIFIED)
- Grading job: QUEUED → RUNNING → PASSED / FAILED / INFRASTRUCTURE_ERROR / TIMED_OUT (infra failure never reported as student failure)
- Content: DRAFT → REVIEW → PUBLISHED → ARCHIVED (versioned; history immutable)
- Evidence: CANDIDATE → PENDING_REVIEW → VERIFIED / REJECTED (+ REVOKED with reason)

## 5. Non-negotiable rules

1. Idempotent submissions (double-click safe).
2. Student code runs ONLY in isolated sandboxes (CPU/RAM/timeout/network limits, no prod secrets).
3. Answer keys never reach the frontend; AI tutor context separated from assessment context.
4. Server-authoritative progress, grades, scores (never trust POSTed completion).
5. Certificates verify via URL against the live record.
6. Uploads: allowlist, size caps, signed URLs, private-by-default projects.
7. UTC storage, local display; resumable uploads; server-persisted progress.
8. Every failure has a user message + diagnostic ID; every sensitive event audited.

## 6. Data model (condensed)

users, profiles, roles, cohorts, enrollments · paths, courses(+versions),
modules, lessons(+versions), activities, missions, decision_labs, break_labs,
incident_rooms · assignments, submissions(+revisions), projects, assessments,
questions(banked, versioned), attempts, rubrics(+versions), grades(+history),
feedback · skills, student_skills, evidence(+reviews), certificates(statused),
capability_records · discussions(+moderation), notifications(+prefs),
calendar_events · audit_logs · idempotency_keys, job_queue/job_runs,
webhook_events, file_assets(+access logs), rate_limits, consent_records,
data_exports, impersonation_sessions · plans, subscriptions, entitlements.

## 7. Free-first infra (verify terms before deploy)

Cloudflare (Pages/DNS) → Next.js frontend · Supabase Postgres + Auth + Storage/Realtime
· GitHub (code, Actions CI) · isolated grading workers · transactional email (free tier) ·
Sentry-equivalent + PostHog-equivalent free tiers. Provider abstraction for
email/AI/storage/compute/video so no single free tier can hold the product hostage.
Infra budget dashboard with 70/85/95% alerts from day one.

## 8. Build phases

1. Foundation: auth, dashboards, RBAC, courses, enrollment, progress, notifications.
2. Learning engine: quizzes, Decision Labs, missions, rubrics, feedback.
3. Builder: projects, submissions, sandbox tests, automated grading.
4. Capability: Evidence Wallet, skill engine, records, portfolio.
5. Advanced: Incident/Break/AI-Judgment labs, client simulation, copilot.
6. Network: DB-22 challenge, Talent + Jobs integration.

First vertical slice (must be bulletproof before anything else):
registration → onboarding → lesson → Decision Lab → mission → project →
submission → sandbox test → teacher review → revision → approval → evidence → skill.

## 9. 10/10 acceptance bar (condensed)

- Authorization: student A can never read student B; teacher scope enforced; tests for IDOR/escalation.
- Reliability: queues over collapse (50 concurrent submissions), retries + dead-letter, tested restores.
- Academic integrity: versioned content/rubrics/tests, appeal flow, plagiarism signals → human review.
- AI safety: rate limits, quotas, moderation, provider adapter, no graded auto-solve.
- UX: every screen has loading/empty/error/denied/offline states; mobile-usable learning.
- Accessibility: WCAG 2.2 AA target; keyboard, focus, contrast, captions, reduced motion.
- Observability: infra + application + LEARNING metrics (dropout, stuck lessons, failure clusters).
- Ops: staging→prod CI, migrations tested, rollback plan, Disaster Day rehearsal, runbooks.
- Go-live gate: the 50-student chaos scenario passes with zero lost legitimate work.

## 10. What NOT to build first

Browser IDE, AI tutor v1 beyond hints, mobile app, jobs/talent platforms,
custom video infrastructure. Attach them to the proven core later.
