# BidPilot

AI-ready RFP / tender response workspace for B2B proposal teams.

BidPilot is a working SaaS prototype that connects the bid lifecycle from opportunity intake to requirements analysis, response drafting, review, compliance, submission readiness, outcomes, and analytics.

> Prototype disclosure: this repository contains a browser-first prototype. AI, storage, email, notifications, authentication, database, and export integrations are implemented as local/mock adapters. Compliance scores and AI-generated text are demo outputs and are not validated procurement or legal advice.

## What is included

- Enterprise-style dashboard and bid pipeline
- New Bid workflow with RFP text/source capture
- RFP analysis and requirements/compliance matrix
- Response workspace with requirement navigation, editor, review states, assignments, evidence, and Demo AI
- Knowledge base and reusable proposal templates
- Organizations and document library
- Final submission readiness checklist and outcome tracking
- Analytics calculated from persisted prototype data
- Search, filtering, JSON backup/restore, resilient localStorage persistence
- Modular ProductAdapters contracts ready for real AI/backend providers
- GitHub Pages deployment workflow
- Acquisition documentation and legal agreement templates

## Demo

The public demo is deployed from main using GitHub Actions and GitHub Pages once Pages is enabled for the repository.

Demo user: Jordan Smith
Role: Bid Manager
Login is simulated; no real authentication or password is used.

All seeded companies, contracts, case studies, and performance figures are fictional.

## Local run

This is a dependency-free static SPA.

~~~bash
python -m http.server 8080
~~~

Then open http://localhost:8080/.

No API keys or environment variables are required for the prototype.

## Architecture

~~~text
Browser SPA
   |
   +-- UI / hash routing
   |
   +-- Local store (localStorage + JSON backup)
   |
   +-- ProductAdapters
          |-- ai
          |-- storage
          |-- email
          |-- notifications
          |-- auth
          |-- db
          `-- export
~~~

The production target is:

~~~text
Browser
  -> Secure Backend API
  -> AI service
  -> PostgreSQL / database
  -> Object storage
  -> Email / notifications
  -> External procurement systems
~~~

See docs/API_CONTRACT.md, docs/DATA_MODEL.md, and docs/PRODUCTION_CHECKLIST.md.

## Acquisition package

This repository includes source code and UI assets, product and technical documentation, API and data model contracts, a production handoff checklist, acquisition notes, listing copy, software asset purchase agreement and IP assignment templates, and 800x500 SVG cover artwork.

Indicative asking price: USD 5,000 one-time.
Commercial/IP terms: see the agreement templates; they use placeholders and should be reviewed by counsel before signing.

## Implemented vs future

### Implemented in prototype
- End-to-end bid workflow
- Persisted demo state
- Mock/local AI adapter behavior
- Requirement drafting and editing
- Review/compliance UI
- Analytics
- JSON export/import
- Error boundaries and invalid-route handling
- GitHub Pages CI deployment configuration

### Future production work
- Secure authentication and RBAC
- Multi-tenancy
- Server-side database and object storage
- Real PDF/DOCX parsing and OCR
- Real LLM provider integration
- Server-side PDF generation
- Email/notification providers
- Audit logging
- Billing
- Monitoring, backups, rate limiting, encryption, privacy and compliance controls
- Enterprise procurement portal integrations

## Repository structure

index.html
styles.css
app.js
assets/
  cover.svg
  icon.svg
docs/
  API_CONTRACT.md
  DATA_MODEL.md
  PRODUCTION_CHECKLIST.md
  PRODUCT_OVERVIEW.md
  ACQUISITION_NOTES.md
  ACQUISITION_LISTING.md
legal/
  SOFTWARE_ASSET_PURCHASE_AGREEMENT.md
  IP_ASSIGNMENT_AGREEMENT.md
.github/workflows/
  pages.yml
404.html
LICENSE
NOTICE.md

## License

The repository uses a permissive software license for the prototype source. Third-party components, if any are added by a future buyer, remain subject to their own licenses. See NOTICE.md.

## Buyer handoff

A buyer can take the prototype as a product foundation, replace the mock adapters with secure backend services, connect a preferred AI provider, migrate state to a database, and apply new branding.

Project content is in English by design.