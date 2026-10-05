# Data Model

## Core entities

| Entity | Purpose | Prototype |
|---|---|---|
| User | Identity and role | Seeded demo |
| Organization | Procuring/customer organization | Seeded demo |
| Bid | Opportunity and lifecycle | Implemented |
| Requirement | Extracted RFP requirement | Implemented |
| Response | Human-edited answer | Embedded in Requirement in prototype |
| KnowledgeItem | Approved reusable evidence | Implemented |
| Template | Reusable response section | Implemented |
| Document | RFP/proposal/reference inventory | Implemented |
| TeamMember | Assignment/reviewer identity | Demo values |
| Review | Approval state and comments | UI concept; local state can be extended |
| Comment | Collaboration trail | Future persistence model |
| Submission | Submission event and metadata | Demo status on Bid |
| BidOutcome | Won/Lost outcome | Seeded Won example |
| Notification | Deadline/review notification | Adapter boundary only |
| Settings | User/org settings | Prototype |
| AnalyticsEvent | Product analytics/audit event | Future server model |

## Bid

Required production fields:

- id
- organizationId
- name
- type
- industry
- location
- deadline
- estimatedContractValue
- currency
- ownerId
- teamIds
- submissionMethod
- status
- createdAt
- updatedAt

## Requirement

- id
- bidId
- externalReference
- question
- category
- importance
- mandatory
- status
- responsibleUserId
- sourceSection
- dueDate
- responseId
- complianceScore
- notes

Categories include Mandatory, Technical, Commercial, Legal, Security, Experience, Financial, Documentation.

## Response

- id
- requirementId
- body
- version
- status
- authorId
- reviewerId
- evidenceIds
- createdAt
- updatedAt
- approvedAt

## Multi-tenancy target

Every production record should carry an organization/tenant boundary. Authorization must be enforced server-side rather than by UI visibility.

## Data migration

The browser prototype is intentionally schema-light. A production migration should:

1. Freeze and export current demo state.
2. Map IDs to database UUIDs.
3. Separate Response from Requirement.
4. Normalize users, teams, reviews and documents.
5. Add organization/tenant IDs.
6. Add created/updated timestamps and audit events.
