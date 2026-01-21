# Evryn Website

The public-facing marketing website for Evryn — an AI who finds you *your* people.

**Live site:** https://evryn.ai

## Quick Start

```bash
# 1. Navigate to the project
cd C:\Users\Justin\Evryn\Code\evryn-website

# 2. Install dependencies (first time only)
npm install

# 3. Set up environment variables (first time only)
cp .env.example .env.local
# Then edit .env.local with your Turnstile keys

# 4. Start the local server
npm run dev

# 5. Open browser to http://localhost:3000
```

To stop the server: press `Ctrl+C` in the terminal.

## Environment Variables

The waitlist form uses Cloudflare Turnstile for captcha. You need two keys:

| Variable | Description |
|----------|-------------|
| `TURNSTILE_SECRET_KEY` | Server-side validation key |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Client-side widget key |

Get keys from: https://dash.cloudflare.com/dfe0b79fbf3c449a6c692f4fa1742cd7/turnstile

Copy `.env.example` to `.env.local` and fill in the values. The `.env.local` file is gitignored.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (auto-deploys from main branch)
- **Forms:** Custom form → HubSpot Forms API
- **Captcha:** Cloudflare Turnstile

## Deployment

Vercel auto-deploys when you push to `main`:

1. Make changes locally
2. `git add .` → `git commit -m "message"` → `git push`
3. Vercel builds and deploys automatically
4. Live at evryn.ai within a few minutes

**Note:** Environment variables must also be configured in the Vercel dashboard for production.

## Documentation

- `CLAUDE.md` — Context for Claude Code (read automatically)
- `docs/SETUP.md` — Developer setup and workflow guide
- `docs/DECISIONS.md` — Architecture decision log
- `../_evryn-meta/SYSTEM_OVERVIEW.md` — Big picture system architecture

## Contact

Justin — Founder & CEO
contact@evryn.ai
