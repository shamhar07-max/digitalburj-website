# 02 — Gap analysis (target spec → current → delta)

| Spec part | Target | Current | Delta |
|---|---|---|---|
| Pt 3 nav | HOME SOLUTIONS CAPABILITIES INDUSTRIES WORK PROCESS ACADEMY STUDIO ABOUT INSIGHTS | Solutions▾/Work/Journal/About/Ecosystem▾ | ADD `/industries`, `/process`; Capabilities≡Solutions; Insights≡Journal (accepted deviation, keep URLs) |
| Pt 3 CTA | START A PROJECT qualified intake | mailto + form, no qualification | ADD staged intake (problem/budget/timeline) before calendar link |
| Pt 5 HQ | AFFiNE+MM+Jitsi+GH | AFFiNE+Matrix+Jitsi+GH running locally | AMEND spec to Matrix; TODO Oracle move |
| Pt 6 OS entities | ~40 entities | Academy 15 tables; rest in Notion | Build only on proven workflows; Notion→SOP pipeline, not big-bang |
| Pt 7 identity | shared ID/RBAC | 2 silos (Academy, Matrix) | UNIFY at Platform Core phase, not before |
| Pt 8 delivery | lifecycle + DoD + states | Concept only | ADD `/process` page (external promise) before internal tooling |
| Pt 9 assurance | independent verdicts | None | Process: builder→reviewer rule now; system later |
| Pt 11 core | shared primitives | None | DEFER until 2+ apps need the same primitive |
| Pt 12 security | baseline list | Academy: scrypt/sessions/guards/audit; site: static | ADD rate-limit + headers on Academy; rest phased |
| Pt 13 AI | gateway, scoped agents | None (existing API keys only) | DEFER; first AI = Academy tutor behind review queue |
| Pt 16 studio | validation lifecycle | Marketing page | Page → intake form → manual process first |
| Pt 17 academy | full loop + AI + versioning | ~70% (no AI, no versioning) | ADD versioning; AI tutor later |
| Pt 18/19 talent/jobs | evidence capability → work | Export JSON only | Manual placement first; DB later |
| Pt 20 business | client dashboard | Marketing page | DEFER until 3+ retainer clients |
| Pt 24 loadbyton | control center + case file | Independent app + `/work` page | Keep independent; link evidence, don't merge |
| Pt 32/33 observability | health/logs/backups | HQ backup script exists; apps lack both | ADD `/api/health` + backup verify per app now (cheap) |

Rule: close external-promise gaps (nav, process page, intake) before internal-system gaps.
