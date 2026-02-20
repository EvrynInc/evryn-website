# Architecture — evryn-website

> **How to use this file:** Reference doc for the Evryn marketing website (evryn.ai). Tech stack, design system, page structure, deployment, and backlog. Read this when building or modifying the site.
>
> **Edits require explicit approval from Justin.** Propose changes; don't make them directly.

---

## Current Status

**As of 2026-02-19:** Website is COMPLETE and LIVE at evryn.ai. Copy polish session completed.

**What's working:**
- Landing page with waitlist form (design refresh completed 2026-02-17)
- Form submits to HubSpot (first name, last name, email required, phone optional → mobilephone)
- Cloudflare Turnstile captcha (invisible mode)
- SEO: updated title, stronger descriptions, Organization JSON-LD structured data, expanded keywords
- Open Graph images and Twitter cards for social sharing
- Vercel Analytics tracking visitors
- Google Search Console set up, sitemap submitted
- Privacy policy page

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (auto-deploys from main branch)
- **Forms:** Custom form → `/api/waitlist` route → HubSpot Forms API
- **Captcha:** Cloudflare Turnstile (invisible mode)

**Production setup:**
- Vercel project: `evryn-website`
- Live URL: `https://evryn.ai`
- Preview URL: `evryn-website.vercel.app`
- Old project (`evryn-prelaunch`) still exists at `evryn-prelaunch.vercel.app` as rollback
- Domains whitelisted: Turnstile, HubSpot (both evryn.ai and evryn-website.vercel.app)

---

## Environment Variables

Stored in `.env.local` (not committed to git). See `.env.example` for template.

- `TURNSTILE_SECRET_KEY` - Cloudflare Turnstile secret key (server-side validation)
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - Cloudflare Turnstile site key (client-side widget)

**Manage Turnstile keys:** https://dash.cloudflare.com/dfe0b79fbf3c449a6c692f4fa1742cd7/turnstile

**Note:** When deploying to Vercel, these env vars need to be added in the Vercel dashboard.

---

## Design System

**Feeling:** Calm, spacious, trustworthy. Like a wise friend, not a tech startup. Let the words breathe.

**Color palette:**
- Background: Teal gradient `#6DBAC4` → `#5AABB8` (lagoon deepening effect)
- Text: All white — no accent color. Pure and clean. The words do the work.
- Dividers: `white/20` horizontal lines
- Form elements: White/10 with white/20 borders (translucent glass card)

**Typography:**
- Font: Karla (weights 300 light, 400 normal)
- Body: font-light (300)
- Structural anchors (Imagine, It's easy, I promise) and pillar headlines: font-normal (400)
- Hero tagline ("That's what Evryn does. / She finds you *your people*."): font-normal (400)
- "Evryn" wordmark: `tracking-[0.12em]` in header
- Ellipsis dots: `tracking-[0.1em]` for subtle spread

**Paper texture:** SVG noise filter overlay on body::before (fractalNoise, opacity 0.14, mix-blend-mode overlay)

**Key visual:** Seed of Life geometry as standalone SVG (`public/seed-of-life.svg`) - centered in hero, overlapping into header via negative margin. Logo z-20 slides UNDER sticky header z-30 (so header stays clean on mobile).

**Responsive:** Works on mobile and desktop. Pillars stack on mobile, 3-column grid on desktop. Line-height: `leading-relaxed` on mobile, `leading-[1.8]` on desktop for hero poem. Max-width `max-w-6xl` consistent across header, pillars, and footer.

---

## Page Structure

For exact copy and layout, read `app/page.tsx` — it's the source of truth. Below is just the structural intent and design rationale.

**Sections (top to bottom):** Header (sticky) → Hero (Seed of Life + poem) → Three Pillars → "I promise..." (Evryn's voice) → Waitlist form → Footer

**Design intent by section:**
- **Header:** Sticky with `bg-[#6DBAC4]` — separates naturally as page gradient darkens below. Logo z-20 slides under header z-30.
- **Hero poem:** Spacing between lines creates breathing pauses and a stanza break — these do structural work. "Imagine..." is optically centered with invisible counterweight dots. Tagline: "That's what Evryn does. / She finds you *your people*."
- **Pillars:** Three equal columns on desktop, stacked on mobile. Introduced by "It's easy..."
- **"I promise...":** Voice shifts from narrator to Evryn speaking directly. Italic, inset (`max-w-xl`), bordered top only — flows directly into waitlist as one continuous invitation.
- **Waitlist:** Glass card form → HubSpot API. Email is unique identifier (repeats update, not duplicate). Phone maps to `mobilephone`.
- **Footer:** Tagline, contact email, privacy policy link, copyright.

---

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

---

## Git Workflow

**Use judgment on when to use feature branches vs pushing directly to main:**

**Push directly to main** for:
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

---

## Backlog

Things to do when there's time, roughly in order of impact:

**Waiting on legal team:**
- [ ] New Terms of Service → create `/terms-of-service` page, add to sitemap
- [ ] Updated Privacy Policy → replace content on existing `/privacy-policy` page
- [ ] After both are live: re-request Google indexing for both pages via Search Console

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
- [x] Design refresh: Karla font, paper texture, gradient background, sticky header, "I promise..." section
- [x] Copy polish: all-white palette, revised tagline, reworked promise section, Turnstile theme to light
