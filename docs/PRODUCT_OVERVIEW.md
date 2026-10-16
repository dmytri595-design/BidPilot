# Product Overview

## Positioning

**BidPilot — requirement-first RFP response operations for B2B teams.**

BidPilot helps bid and proposal teams move from opportunity intake to requirements, evidence-backed drafting, human review, submission readiness and outcome tracking. The v2 Command Center adds operational follow-through: tasks, deadline radar, risk register and buyer clarification log.

## Target users
- Bid / proposal managers
- Sales and pre-sales teams
- Technical, security and legal reviewers
- Tender consultants and systems integrators

## Core workflow
Dashboard → Create Bid → Paste RFP text → Local heuristic requirement extraction → Response Workspace → Evidence suggestions → Human review → Command Center tasks/risks/clarifications → Final Review → HTML bid pack / CSV export → Outcome.

## v2 differentiators
- Requirement-first workspace rather than a generic chatbot
- Local extraction of requirement-like lines from pasted RFP text
- One operational control room for deadline risk, tasks, clarifications and mitigations
- Requirement matrix export and self-contained HTML bid pack
- Browser-local JSON backup and restore
- Modular adapter boundaries for a buyer to replace demo services

## Data and limitations
The prototype stores state in localStorage. Requirement extraction uses browser-side keyword heuristics, not an LLM or parser; it may miss requirements and can classify them incorrectly. AI drafting is deterministic demo text. No actual email, authentication, cloud collaboration, database, PDF/DOCX parsing, procurement portal submission or ERP sync is included. All seeded data is fictional.
