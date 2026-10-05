# Production Checklist

This document explicitly separates the working prototype from production work.

## Application and backend

- [ ] Secure backend API
- [ ] PostgreSQL or equivalent production database
- [ ] Server-side authorization on every tenant-scoped query
- [ ] Multi-tenancy model and isolation tests
- [ ] RBAC for sales, bid manager, technical, legal, security and executive roles
- [ ] Audit log for response edits, approvals, submissions and outcomes
- [ ] Background job processing for long RFPs

## AI

- [ ] Select provider: OpenAI, Anthropic, Gemini, private model or customer-owned model
- [ ] Server-side API keys and secret manager
- [ ] Prompt/version management
- [ ] Token/cost controls
- [ ] Retrieval/evidence grounding
- [ ] Human approval gates
- [ ] Model output safety and data handling policy
- [ ] Evaluation set for extraction and compliance accuracy

## Documents

- [ ] PDF/DOCX/XLSX parsing
- [ ] OCR for scanned documents
- [ ] Section/page citation preservation
- [ ] Malware scanning
- [ ] Encrypted object storage
- [ ] Signed/authorized download URLs
- [ ] Server-side PDF proposal generation

## Integrations

- [ ] Transactional email
- [ ] Slack/Teams notifications if required
- [ ] CRM integration
- [ ] Procurement portal integrations where commercially viable
- [ ] SSO/SAML/OIDC for enterprise customers

## Security and privacy

- [ ] TLS everywhere
- [ ] Encryption at rest
- [ ] Secrets management
- [ ] Rate limiting
- [ ] CSRF/XSS protections
- [ ] Dependency and container scanning
- [ ] Backup and restore tests
- [ ] Privacy policy and DPA
- [ ] Data retention/deletion controls
- [ ] Vendor/security review

## Commercial

- [ ] Billing provider
- [ ] Subscription/seat model
- [ ] Usage metering for AI
- [ ] Terms of service
- [ ] Procurement/security package
- [ ] Support process
- [ ] Monitoring and incident response

## Deployment

- [ ] Production environment
- [ ] CI/CD with tests
- [ ] Preview environments
- [ ] Error monitoring
- [ ] Metrics and tracing
- [ ] Database migrations
- [ ] Disaster recovery

## Explicit non-claims

The current prototype does **not** claim real authentication, real AI processing, real document parsing, validated compliance scoring, production security, live procurement submission, billing, or enterprise SLA.
