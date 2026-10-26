# BidPilot — Acquisition Brief

## One-line overview

BidPilot is a browser-first workspace for managing RFP and tender responses, from requirement intake through draft writing, evidence review, submission readiness, and outcome tracking.

## Why an existing software company might care

The product provides a concrete workflow and front-end foundation for a company that already serves B2B proposal teams, procurement consultants, or bid-management users. A buyer could use it as a starting point for an adjacent feature set or integrate parts of the workflow into an existing platform, rather than begin with a blank screen.

## What can be explored today

- Bid pipeline with opportunity details, lifecycle state, deadline, contract-value fields, and compliance placeholders.
- Paste-in RFP text and local keyword-based requirement extraction, with manual review.
- Requirement-level response editing and mock drafting, plus suggestions from a fictional knowledge base.
- Command Center with a deadline radar, task queue, risk register, clarification log, and recent activity.
- Final-review checklist, outcome tracking, analytics based on demo data, and browser-generated exports.
- Self-contained HTML bid-pack export, requirements CSV export, and JSON workspace backup/restore.
- One-click fictional sample RFP so a prospective buyer can follow the workflow without uploading confidential documents.
- Static deployment and browser smoke tests in GitHub Actions.

## Live assets

- **Demo:** https://dmytri595-design.github.io/BidPilot/
- **Source repository:** https://github.com/dmytri595-design/BidPilot
- **README and technical package:** https://github.com/dmytri595-design/BidPilot#readme
- **Architecture / integration contract:** docs/API_CONTRACT.md
- **Data model:** docs/DATA_MODEL.md
- **Production checklist:** docs/PRODUCTION_CHECKLIST.md

## Current stage — stated precisely

BidPilot is a working, local-first browser prototype. It is pre-launch and pre-revenue. No customers, users, or revenue are claimed.

The AI adapter returns deterministic demonstration text; it does not call an external model. Requirement extraction uses local keyword heuristics on pasted text. Workspace records persist in the browser's localStorage. The current prototype does not implement real PDF/DOCX parsing, cloud persistence, authentication, multi-user collaboration, outbound email, a production audit service, subscription billing, or procurement-portal submission. Demo organizations, contract values, evidence, and outcomes are fictional. Compliance scores are placeholders, not validated assessments or legal/procurement advice.

## Plausible production extension plan

1. **Discovery and evaluation:** agree a buyer's target users, supported tender formats, privacy requirements, and evaluation dataset.
2. **Core services:** add tenant-aware backend APIs and a production database, with server-side authorization and audit events.
3. **Grounded document workflow:** parse PDF/DOCX files, preserve page/section references, extract requirements, and connect drafting to approved evidence.
4. **AI and controls:** add a server-side model provider, cost limits, versioned prompts, review gates, and evaluation tests; keep provider keys out of the browser.
5. **Enterprise readiness:** add document storage, email/notifications, identity integration, monitoring, billing if needed, and customer-specific security review.

This is a proposed roadmap, not functionality included in the current build.

## Commercial context

The repository's existing acquisition-listing draft uses an initial seller asking price of **USD 5,000**, which is a negotiation position rather than an independently verified valuation. The appropriate deal scope and price should depend on buyer fit, technical diligence, and the rights that can actually be transferred.

## Licensing note for due diligence

The public repository currently contains an MIT license. Assume that recipients of previously published versions may continue using those versions under the license terms that applied to them. Do **not** promise an exclusive purchase of the already-published source code without qualified legal review. A written transaction should expressly define the scope of transferable assets, including the product name/brand, documentation, source contributions, deployment assets, and any future unpublished work, while accounting for the existing public license.

## Contact approach

The strongest buyer is likely a company with an existing B2B customer base in proposal operations, procurement technology, or professional services. The value proposition is an extensible workflow foundation, not proven market demand or guaranteed revenue.
