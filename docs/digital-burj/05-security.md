# 05 — Security baseline (as-built + required next)

## As-built
- Academy: scrypt passwords, opaque session tokens (httpOnly cookie), server-side
  role guards, idempotency keys, audit_logs. SQLite file perms on host.
- Site: fully static, no secrets in client. Brand assets local.
- HQ: closed Matrix registration (admin-created users), AFFiNE behind admin setup,
  Caddy automatic HTTPS, secrets in 0600 `.env`, generated passwords.

## Required next (cheap, do now)
1. Security headers on Academy (CSP, frame-ancestors, HSTS behind proxy).
2. Rate limits: login + submit + register endpoints.
3. `/api/health` per app (liveness + DB check, no secrets).
4. Backup-restore TESTED quarterly (a backup never restored is not recovery).
5. Dependency + secret scanning in CI before any client data lands in Academy.

## Non-negotiables (any new build)
Server-side authorization on every sensitive query (never frontend-only filtering);
tenant/org checks from day one of multi-org; least-privilege roles (never universal admin);
no secrets in browser bundles; AI tools get scoped credentials + audit trail.
