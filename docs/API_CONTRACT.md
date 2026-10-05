# API Contract

## Purpose

BidPilot isolates external services behind explicit adapter contracts so the browser prototype can be upgraded without rewriting the product workflow.

## AI adapter

Implemented locally in `app.js` as `ProductAdapters.ai`.

### analyzeRfp

Request:

```json
{ "bid": { "id": "BID-1042", "name": "Example Bid" }, "sourceText": "..." }
```

Response:

```json
{ "summary": "string", "confidence": 0.91 }
```

### extractRequirements

Response shape:

```json
{
  "requirements": [
    {
      "id": "REQ-001",
      "q": "string",
      "cat": "Technical",
      "mandatory": true,
      "status": "Needs Response",
      "owner": "Technical Lead",
      "score": 94,
      "source": "Section 4.2",
      "response": "string",
      "evidence": ["Knowledge item"]
    }
  ],
  "demo": true
}
```

### generateResponse

Request:

```json
{ "requirement": { "id": "REQ-001", "q": "..." } }
```

Response:

```json
{ "text": "string", "sources": [], "model": "provider/model", "requestId": "id" }
```

The current prototype returns local mock text and does not call a model.

### improveResponse

Request:

```json
{ "requirement": {}, "response": "string", "mode": "concise|formal|evidence|compliance" }
```

### checkCompliance

Production response:

```json
{ "score": 0, "missing": [], "warnings": [], "requirementId": "REQ-001" }
```

The prototype's visible scores are demo placeholders.

### findEvidence

Production response:

```json
{ "items": [{ "id": "K-01", "title": "Company Overview", "confidence": 0.87 }] }
```

## Non-AI adapters

```text
ProductAdapters.storage.upload(file)
ProductAdapters.email.send(message)
ProductAdapters.notifications.send(notification)
ProductAdapters.auth.login(credentials)
ProductAdapters.db.query(request)
ProductAdapters.db.save(entity)
ProductAdapters.export.generateProposal(bidId)
```

## Production boundary

The browser must not contain provider API keys. The intended flow is:

```text
Browser -> Secure Backend API -> Adapter -> Provider
                     |
                     +-> authorization / tenant checks
                     +-> audit log
                     +-> rate limiting
```

## Error contract

Adapters should return typed errors with:

- `code`
- `message`
- `retryable`
- `requestId`
- safe user-facing detail

Never expose provider secrets, internal stack traces, or tenant data in browser errors.
