# 08 — Risks, assumptions, open questions

## Risks
1. **Oracle free-tier friction** (capacity, idle reclamation, silent limit cuts as in Jun 2026)
   → mitigation: backup script + host-portable compose; can move to any VPS in an evening.
2. **Building internal tools instead of selling** → mitigation: revenue gates (06-roadmap); any
   ungated platform work needs a written override here.
3. **Single-operator bus factor** (founder + AI) → mitigation: runbooks (HQ README), ADRs,
   quarterly restore tests; add a second admin on HQ day one.
4. **AI output treated as verified** → mitigation: Pt-35 workflow (generate→inspect→break→verify)
   enforced in reviews; INFRASTRUCTURE_ERROR≠FAILED.
5. **Scope creep via Studio ideas** → mitigation: validation lifecycle; evidence gates progression.

## Assumptions
- Team stays ≤5 until R7; all sizing decisions assume that.
- `digitalburj.com` DNS remains founder-controlled (needed for R2 subdomains).
- Academy SQLite suffices until first paying cohort (ADR-004).
- No regulated-client data (health/finance) before R7 security pass.

## Open questions
1. Academy pricing model (cohort fee vs subscription) — decides R3 auth/billing shape.
2. First Studio intake channel (site form vs warm intros) — decides R5 effort.
3. Talent placement: fee, %, or free-for-evidence? — decides R6 data model.
4. Which 3rd retainer triggers R7 — name them when close, don't build early.
