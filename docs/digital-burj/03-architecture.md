# 03 — Target architecture (merged business/product/domain/technical)

## The three Digital Burjs (never confuse them)
1. **Company** (what clients see): outcomes — understand/design/build/verify/operate/improve.
2. **Operating system** (how the team works): HQ (AFFiNE+Matrix+Jitsi) + Notion SOPs → proven workflows.
3. **Platform** (what we build): modular monolith, shared primitives, domain modules. Built last.

## External / platform / internal split
- `digitalburj.com` — sells + explains + captures qualified leads. Never hosts internal ops.
- Platform Core (future) — identity, orgs, RBAC, projects, files, notifications, audit, AI gateway.
- HQ (now) — operates the company on $0 infra until workflows demand custom builds.

## Domain map (architected now, built on revenue signal)
`business` (3+ retainers) → `academy` (live, extend) → `studio` (intake first) →
`talent/jobs` (manual first) → `assurance` (process now, system later) →
`intelligence` (AI gateway + tutor first).

## Technical stance
- Modular monolith (Next.js + TS + Postgres when SQLite limits hit). No microservices
  without a scaling/isolation/security reason written in an ADR first.
- Loadbyton stays an independent deploy; ecosystem links = case study + evidence, never shared DB.
- AI only behind a gateway abstraction with policy/context/audit; agents get least privilege;
  AI output is never evidence until human-verified.

## Company lifecycle (external) → delivery lifecycle (internal) → DoD
External: UNDERSTAND→DIAGNOSE→STRATEGIZE→DESIGN→BUILD→TRANSFORM→OPERATE→MEASURE→IMPROVE→SCALE.
Internal: QUALIFY→…→BUILD→BREAK→SECURE→TEST→VERIFY→CLIENT REVIEW→DEPLOY→…→RENEW (spec Pt 8).
Done = scope + acceptance + tests + security-appropriate review + verified deploy +
client acceptance + docs + credentials transferred + support + limitations + evidence + assurance verdict.
