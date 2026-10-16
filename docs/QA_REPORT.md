# QA Report — BidPilot v2 Command Center

## Scope
Release adds operational follow-through beyond the existing bid pipeline: task queue, deadline radar, risk register, clarification log, local heuristic requirement extraction, HTML bid pack, requirements CSV, JSON backup/restore and browser smoke validation.

## Automated checks
- `node --check app.js` is a required CI step.
- `e2e/smoke.cjs` runs in Chromium against a local static server.
- Browser smoke covers dashboard load, Command Center routing, task creation/persistence, risk creation/persistence, clarification creation/persistence, requirements CSV download, HTML bid pack download, and JSON backup download.
- GitHub Pages deployment is gated on validation and browser smoke.

## Manual acceptance checklist
- [ ] Create a bid with pasted requirement-like text.
- [ ] Review the generated requirement list; edit classifications and mandatory flags if needed.
- [ ] Save response drafts and review states.
- [ ] Add and complete a task.
- [ ] Record a risk and mitigation.
- [ ] Add a buyer clarification question.
- [ ] Export the selected bid as an HTML working pack.
- [ ] Export all requirements as CSV.
- [ ] Export JSON backup and restore it from Settings.

## Known limits
Requirement extraction uses keyword heuristics, not a real LLM or document parser. AI drafting is demo/local. Persistence is browser localStorage. Real auth, multi-user collaboration, cloud DB, external email, PDF/DOCX parsing, portal submission and ERP sync are not implemented. Do not use the prototype for confidential procurement data or rely on demo compliance indicators as legal advice.
