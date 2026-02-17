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

**As of 2025-01-21:** Website is COMPLETE and LIVE at evryn.ai. Ready for traffic.

**What's working:**
- Landing page with waitlist form
- Form submits to HubSpot (first name, last name, email required, phone optional → mobilephone)
- Cloudflare Turnstile captcha (invisible mode)
- SEO meta tags, Open Graph images for social sharing
- Vercel Analytics tracking visitors
- Google Search Console set up, sitemap submitted
- Privacy policy page

**Production setup:**
- Vercel project: `evryn-website`
- Live URL: `https://evryn.ai`
- Preview URL: `evryn-website.vercel.app`
- Old project (`evryn-prelaunch`) still exists at `evryn-prelaunch.vercel.app` as rollback
- Domains whitelisted: Turnstile, HubSpot (both evryn.ai and evryn-website.vercel.app)

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

(Note: "anything", "just", "also", and "trusted" are italicized; "trusted" also has underline)

Then:
**Evryn is your personal AI**
**who finds you *your* people.**

### Pillars Section
Opens with "It's easy..." then three columns:

**1. You just talk to Evryn**
She listens, learns what you actually need, and continues to deepen her understanding of you. No searching. No swiping. No profiles to build.

**2. She finds *your* people**
Whoever you need: soulmate, cofounder, crew, someone fun — even that *just-right* tutor, or just someone to buy an old couch. Not *more* options. The *right* ones.

**3. She guards your gates**
No public profile and no open messaging means there's simply no way for pesterers, creeps, spammers, or scammers to even find you. Evryn only connects someone if she trusts them enough to connect them to you.

### Our Promise
No more subscriptions that don't deliver. You pay only when a connection genuinely works for you. Evryn's success and your success are always the same thing.

### Waitlist Section
Quote: "I can't wait to meet you." — Evryn

Form inside bordered container with "Join the Waitlist" heading:
- First name / Last name (side by side)
- Email (required)
- Phone (optional)
- Cloudflare Turnstile (invisible unless challenged)
- Submit button (disabled until valid email + captcha)

Success message: "You're on the list!" / "We look forward to talking soon."

**HubSpot integration:** Form submits to HubSpot via API. Email is the unique identifier — repeat submissions update the existing contact rather than creating duplicates. Phone maps to `mobilephone` field.

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
- `app/layout.tsx` - Root layout (fonts, metadata, analytics)
- `app/privacy-policy/page.tsx` - Privacy policy
- `app/api/waitlist/route.ts` - API route that validates Turnstile + submits to HubSpot
- `app/opengraph-image.tsx` - Auto-generated OG image for social sharing
- `app/twitter-image.tsx` - Auto-generated Twitter card image
- `app/sitemap.ts` - Auto-generated sitemap for SEO
- `app/robots.ts` - Robots.txt for search engines
- `app/banner/route.tsx` - LinkedIn banner generator (access at /banner locally, see file comments)
- `app/profile-image/route.tsx` - X/Twitter profile image generator (access at /profile-image locally)
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

## Git Workflow: Branches vs Main

**Use judgment on when to use feature branches vs pushing directly to main:**

**Push directly to main** (what we've been doing) for:
- Small, safe changes (copy tweaks, minor styling)
- Bug fixes that are straightforward
- Changes Justin has already reviewed/approved

**Use a feature branch** for:
- Larger features or refactors
- Risky changes that could break things
- Anything that needs testing before going live
- When Justin says "let's use a branch for this"

**How feature branches work:**
1. Create branch: `git checkout -b feature/description`
2. Make changes, commit, push: `git push -u origin feature/description`
3. Vercel auto-creates a preview URL for testing
4. When ready: merge to main → goes to production

**Default behavior:** Use judgment. If unsure, ask Justin: "This seems like a bigger change — want me to use a branch so you can test it first?"

## Context Checkpoints

**Power outages happen. Context gets lost. Proactively save progress.**

**Check in with Justin periodically:**
- After completing a significant feature or fix
- After making important decisions worth documenting
- Every ~45-60 minutes during longer sessions
- Before any risky operation

**What to say:** "Hey, we've covered a lot — want me to do a quick #lock to save our progress?"

This is a gentle nudge, not a hard rule. If Justin's in flow and doesn't want to stop, that's fine. But offer.

## Future Tasks (Non-Urgent)

Things to do when there's time, roughly in order of impact:

**SEO & Discoverability:**
- [ ] Create LinkedIn company page for Evryn Inc. (link to evryn.ai)
- [ ] Create Twitter/X account for Evryn (even if minimal posting)
- [ ] Create Crunchbase profile (startup directory + backlink)
- [ ] Create AngelList/Wellfound profile (same idea)
- [ ] Product Hunt launch (when ready for public attention)

**SEO Content (big needle-movers when ready):**
- [ ] FAQ section on landing page (helps Google understand what Evryn is; targets long-tail searches like "how does AI matchmaking work")
- [ ] Blog with longer-form content (builds topical authority, creates more indexable pages, targets keyword variations)
- [ ] These matter more than meta tags — on-page content is what Google actually ranks

**Already done:**
- [x] Justin's LinkedIn Contact Info links to evryn.ai
- [x] Google Search Console set up, sitemap submitted
- [x] Vercel Analytics enabled
- [x] SEO meta tags and Open Graph images
- [x] Organization structured data (JSON-LD) for brand recognition
- [x] Updated title to include "Evryn AI" to combat Google autocorrect to "Everlyn"

## End of Session: #lock

When Justin says **#lock**, update documentation to reflect this session:

1. **CLAUDE.md** — Refresh to reflect current state. Keep it a clean snapshot, not a log. Replace outdated info - only retain old info if it is *necessary* context - otherwise don't accumulate.

2. **docs/DECISIONS.md** — Add any new decisions made this session (use the template at the bottom of that file).

3. **../_evryn-meta/SYSTEM_OVERVIEW.md** — Update only if something system-level changed (new repos, architecture shifts, services added/removed).

4. **Other docs** — If something else needs updating, ask first.
