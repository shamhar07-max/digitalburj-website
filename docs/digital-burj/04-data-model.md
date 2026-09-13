# 04 — Data model (as-built + direction)

## As-built: Academy (15 tables, SQLite, `digitalburj-academy/apps/web/src/server/schema.sql`)
users, sessions, courses, missions, enrollments, submissions, reviews, skills,
student_skills, evidence, certificates, notifications, grading_runs, companies, audit_logs.
Conventions worth keeping everywhere: UTC ISO timestamps, soft states, audit_logs on mutation.

## Direction (add only when a workflow proves it)
- Identity: users/memberships/roles/permissions shared at Platform Core; until then,
  Academy remains source of truth for students, Matrix for team. No sync hacks.
- Delivery: projects/milestones/requirements/deliverables/decisions/risks/change-requests
  start as AFFiNE databases; graduate to tables only with 2+ active projects.
- Talent: capability records = skill + level + evidence + reviewer + date (never “expert”
  without verified builds). Levels: FOUNDATIONAL/WORKING/INDEPENDENT/ADVANCED/EXPERT.
- Academy additions next: content versioning (courses.version → content snapshots;
  submissions pin content version, history stays auditable), INFRASTRUCTURE_ERROR
  distinct from FAILED in grading_runs.
- Finance (later, strict ACL from day one): quotes/contracts/invoices/payments/expenses.
- Evidence lifecycle everywhere: CANDIDATE→PENDING_REVIEW→VERIFIED(/REJECTED, /REVOKED+reason).
