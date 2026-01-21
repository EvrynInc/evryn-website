# CLAUDE.md

This file provides context for Claude Code when working on this project.

## What is Evryn?

Evryn is an AI-powered relationship broker who finds you "your people" - the rare individuals who are just the right fit for you in any domain of life. The key differentiator: **Evryn only connects people she trusts.**

**Core philosophy:** "Stories over structures" - we capture the *feel* of a person through narrative-based profiles rather than checkboxes and filters.

**Tagline:** "Find *your* people."

**Company:** Evryn Inc., a Public Benefit Corporation

**Founder:** Justin - former Zen monk, 30-year film industry veteran, non-technical but building with AI tools.

## Machine Paths

Justin works from two machines with different usernames:

| Machine | Path |
|---------|------|
| Windows 10 (desktop) | `C:\Users\Justin\Evryn\Code\` |
| Windows 11 (laptop) | `C:\Users\jbmcg\Evryn\Code\` |

Adjust paths accordingly. When in doubt, ask which machine we're on.

## What is this repo?

This is the public marketing website (evryn.ai). A single-page landing page with:
- Hero section with Seed of Life logo and poetic value proposition
- "It's easy..." intro to three pillars
- Three pillars explaining what makes Evryn different
- "Our promise" section (payment model)
- Waitlist signup (custom form → HubSpot API, with Turnstile captcha)
- Privacy policy page
- Footer

This is NOT the main product/app - that will be built separately.

## Current Status

**As of 2025-01-20:** Landing page is functional. Justin may continue design tweaks in next session. The overall structure and copy are in good shape.

**TODO next session:**
- Test the waitlist form end-to-end (verify submissions land in HubSpot)
- Any remaining design tweaks

## Design Direction

**Feeling:** Calm, spacious, trustworthy. Like a wise friend, not a tech startup. Let the words breathe.

**Color palette:**
- Background: Solid teal `#6DBAC4`
- Text: White/light cream for contrast
- Form elements: White/10 with white/20 borders (translucent)

**Typography:**
- Font: Inter for everything
- "Evryn" wordmark: Inter with letter-spacing (`tracking-[0.2em]`) in header

**Key visual:** Seed of Life geometry as standalone SVG (`public/seed-of-life.svg`) - centered in hero, overlapping into header via negative margin

**Responsive:** Works on mobile and desktop. Pillars stack on mobile, side-by-side on desktop.

## Landing Page Structure

### Header
- "Evryn" wordmark (left)
- "Join waitlist" link (right, scrolls to form)

### Hero
Seed of Life SVG (large, overlaps header), then poetic copy broken into lines:

```
Imagine...
if every time you needed someone
for anything
you had a trusted friend
who really knew you
and she'd just...
find you the right person.

And not just the best fit for you
but also someone she trusted enough
to bring into your life.
```

Then: **Evryn finds you *your* people.**

### Pillars Section
Opens with "It's easy..." then three columns:

**1. You just talk to Evryn**
She listens, learns what you actually need, and continues to deepen her understanding of you. No searching. No swiping. No profiles to build.

**2. She finds your people**
Soulmate, cofounder, crew, hookup — even a plumber, or just someone to buy an old couch. Not *more* options. The *right* ones.

**3. She guards your gates**
No public profile and no open messaging means there's simply no way for pesterers, creeps, spammers, or scammers to even find you. Evryn only connects someone if she trusts them enough to connect them to you.

### Our Promise
No more subscriptions that don't deliver. You pay only when a connection genuinely works for you. Evryn's success and your success are always the same thing.

### Waitlist Section
Quote: "I can't wait to meet you." — Evryn

Form inside bordered container with "Join the Waitlist" heading:
- First name / Last name (side by side)
- Email
- "and/or" divider
- Phone number
- Cloudflare Turnstile (invisible unless challenged)
- Submit button (disabled until valid contact info + captcha)

Success message: "You're on the list. I'll be in touch soon."

### Footer
- "Find *your* people."
- contact@evryn.ai | Privacy Policy
- © 2025 Evryn, Inc.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (auto-deploys from main branch)
- **Forms:** Custom form → `/api/waitlist` route → HubSpot Forms API
- **Captcha:** Cloudflare Turnstile (invisible mode)

## Environment Variables

Stored in `.env.local` (not committed to git). See `.env.example` for template.

- `TURNSTILE_SECRET_KEY` - Cloudflare Turnstile secret key (server-side validation)
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - Cloudflare Turnstile site key (client-side widget)

**Manage Turnstile keys:** https://dash.cloudflare.com/dfe0b79fbf3c449a6c692f4fa1742cd7/turnstile

**Note:** When deploying to Vercel, these env vars need to be added in the Vercel dashboard.

## Key Files

- `app/page.tsx` - Main landing page
- `app/privacy-policy/page.tsx` - Privacy policy
- `app/api/waitlist/route.ts` - API route that validates Turnstile + submits to HubSpot
- `components/waitlist-form.tsx` - Custom waitlist form with validation
- `public/seed-of-life.svg` - Main logo graphic
- `public/favicon.svg` - Browser tab icon

## Reference Files

For deeper context:
- `../_evryn-meta/SYSTEM_OVERVIEW.md` - Big picture system architecture
- `docs/DECISIONS.md` - Architecture decision log
- `docs/SETUP.md` - Developer setup and workflow guide

## Working Style

Justin is non-technical but smart and thoughtful. When making changes:
- Explain what you're doing and why
- Keep code clean and readable
- Simple is better than clever
- Ask for clarification rather than guessing on design/copy decisions
- When in doubt about aesthetic choices, describe options and ask
- **Proactively flag risks:** If Justin asks for something that could break functionality, cause accessibility issues, create technical debt, or have unintended consequences, speak up. Justin wants what he wants, but defers to technical judgment - don't let his non-technical perspective lead to broken things

## End of Session: #lock

When Justin says **#lock**, update documentation to reflect this session:

1. **CLAUDE.md** — Refresh to reflect current state. Keep it a clean snapshot, not a log. Replace outdated info - only retain old info if it is *necessary* context - otherwise don't accumulate.

2. **docs/DECISIONS.md** — Add any new decisions made this session (use the template at the bottom of that file).

3. **../_evryn-meta/SYSTEM_OVERVIEW.md** — Update only if something system-level changed (new repos, architecture shifts, services added/removed).

4. **Other docs** — If something else needs updating, ask first.
