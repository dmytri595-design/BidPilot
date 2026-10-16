# BidPilot

**AI-ready RFP & tender response workspace for B2B proposal teams.**

BidPilot connects bid intake, requirement mapping, response drafting, evidence reuse, human review, submission readiness and outcome tracking in one browser-first workspace.

> **Prototype disclosure:** BidPilot is a functional local-first product prototype. AI generation is a deterministic demo adapter; it does not call an external model. Persistence is browser localStorage. Authentication, team collaboration, email delivery, cloud database, real PDF/DOCX parsing, ERP/procurement portal submission and production audit storage are not implemented. Demo data and compliance indicators are fictional and are not legal or procurement advice.

## v2 Command Center release

- **Command Center** with deadline radar, open task queue, risks, clarification log and recent activity.
- Create tasks with owner, due date, priority and linked bid; complete/reopen them.
- Risk register with severity, owner and mitigation.
- Clarification log with linked bid, question, owner and status.
- Local heuristic RFP requirement extraction from pasted text, with category guesses and mandatory keyword detection; review and correct extracted requirements.
- Self-contained HTML bid pack export including requirements, responses, evidence, blockers, risk notes and clarifications.
- Requirements matrix CSV export.
- Full JSON workspace backup and restore with file validation and confirmation.
- Dynamic deadline metrics and collision-resistant sequential bid IDs.
- Existing pipeline, response editor, demo AI drafting, evidence suggestions, templates, knowledge base, organizations, document inventory, final review, outcomes, analytics and adapter contracts.
- Browser smoke tests gate the GitHub Pages deployment.

## Core workflow

Dashboard → New Bid → local requirement extraction → Response Workspace → Evidence & Review → Command Center actions → Final Review → HTML bid pack / CSV export → Outcome tracking.

## Live demo

https://dmytri595-design.github.io/BidPilot/

Demo profile: Jordan Smith, Bid Manager. Login is simulated; no password is required.

All seeded organizations, opportunities and performance figures are fictional. Do not upload confidential procurement documents to this prototype.

## Run locally

Dependency-free static application:

~~~bash
python -m http.server 8080
~~~

Open http://localhost:8080/.

## Data and privacy

- Workspace state is stored in the current browser profile via localStorage.
- JSON backup/restore is available under Settings.
- CSV and HTML exports are generated client-side.
- No backend receives data in the prototype.
- Clearing browser storage removes the local workspace unless a backup exists.

## Architecture

~~~text
Browser SPA
  ├─ UI / hash routing
  ├─ localStorage workspace + JSON backup
  ├─ heuristic requirement extraction
  ├─ ProductAdapters
  │   ├─ ai (demo/local)
  │   ├─ storage (demo/local)
  │   ├─ email / notifications (not delivered)
  │   ├─ auth / db (demo/local)
  │   └─ export (browser generated)
  └─ HTML / CSV / JSON downloads
~~~

Production target: secure backend API, PostgreSQL, tenant isolation, RBAC, encrypted object storage, real AI provider, document parsing/OCR, transactional email, server-side audit log, billing and procurement integrations.

## Acquisition package

Repository includes source code, UI assets, product/technical docs, API contract, data model, production checklist, acquisition listing, and software asset purchase / IP assignment templates. Legal templates contain placeholders and should be reviewed by qualified counsel.

Indicative asking price: **USD 5,000 one-time**. Pre-launch / pre-revenue; no customer or revenue claims.

## License

See LICENSE and NOTICE.md. Third-party components added by a future buyer remain subject to their own licenses.
