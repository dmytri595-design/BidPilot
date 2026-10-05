# Live Deployment

## GitHub Pages

The repository contains a production-style GitHub Pages workflow.

One repository-level setting is required before the first successful Pages deployment:

**Repository → Settings → Pages → Build and deployment → Source → GitHub Actions**

After that, every push to `main` runs validation and deploys the static application.

Expected project-site URL:

`https://dmytri595-design.github.io/BidPilot/`

The workflow exposes the final URL through the deployment environment.

## Alternative: Vercel

The repository is also compatible with Vercel as a static deployment.

- Import `dmytri595-design/BidPilot`
- Framework preset: Other / Static
- Build command: none
- Output directory: `.`

A connected Vercel account can provide an independent production URL without changing the repository architecture.

## Deployment boundary

The current public build is still a prototype. Real AI provider credentials, customer data, authentication, database access, object storage, email, billing and procurement portal credentials must not be placed in the static frontend.
