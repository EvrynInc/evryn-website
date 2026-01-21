# Architecture Decisions

A running log of key decisions and the reasoning behind them.

---

## 2025-01-21: Form & Workflow Decisions

### Context
Site went live at evryn.ai. Debugged Turnstile issues, finalized form requirements, established development workflow practices.

### Decisions Made

#### 13. Email Required, Phone Optional for Waitlist

**Decision:** Email is required for waitlist signup. Phone is optional.

**Previous approach:** Either email or phone was sufficient ("and/or").

**Why we changed:**
- HubSpot uses email as the unique identifier for contacts
- Waitlist communication will primarily be via email (mass texting requires different infrastructure, costs money, has legal requirements)
- Even text-preferring users expect waitlist announcements via email — it's the norm
- Phone field kept as optional for future text notifications when infrastructure supports it

**Implementation:** Updated validation in `waitlist-form.tsx`. Phone placeholder now says "Phone (optional)".

---

#### 14. Phone Maps to HubSpot `mobilephone` Field

**Decision:** Phone numbers submitted via the waitlist form map to HubSpot's `mobilephone` property, not `phone`.

**Why:** Virtually everyone entering a phone number will enter their cell. `mobilephone` is more accurate and useful if we eventually text users.

**Implementation:** API route sends `{ name: "mobilephone", value: phone }` to HubSpot.

---

#### 15. Git Workflow: Branches for Bigger Changes

**Decision:** Use feature branches for larger or risky changes; push directly to main for small, safe changes.

**Why:**
- Vercel auto-creates preview URLs for non-main branches — free staging environment
- Small tweaks (copy, styling) are safe to push directly to production
- Bigger features or risky changes should be tested on preview URL first

**Default behavior:** Use judgment. If unsure, ask Justin whether to branch.

**Implementation:** Documented in CLAUDE.md under "Git Workflow: Branches vs Main".

---

#### 16. Context Checkpoints

**Decision:** Proactively check in with Justin periodically to save progress via #lock.

**Cadence:**
- After completing significant features or fixes
- After important decisions worth documenting
- Every ~45-60 minutes during longer sessions
- Before risky operations

**Why:** Power outages happen. Context gets lost. Better to save incrementally than lose a session's worth of decisions and context.

**Implementation:** Documented in CLAUDE.md under "Context Checkpoints".

---

#### 17. Vercel Analytics (Not Google Analytics)

**Decision:** Use Vercel Analytics for visitor tracking rather than Google Analytics.

**Why:**
- One-click setup, built into Vercel dashboard
- Privacy-friendly (no cookie consent banner needed for most cases)
- Sufficient for a waitlist landing page (visitors, referrers, page views)
- Free tier adequate for pre-launch traffic

**Revisit when:** Traffic exceeds free tier limits or need more detailed analytics.

---

#### 18. SEO & Social Sharing Setup

**Decision:** Implement comprehensive SEO and social sharing from day one.

**What we added:**
- Full meta tags (title, description, keywords, canonical URL)
- Open Graph images (auto-generated via Next.js ImageResponse)
- Twitter card images
- sitemap.xml (auto-generated)
- robots.txt pointing to sitemap
- Google Search Console setup with sitemap submitted

**Why:**
- "Evryn" as a brand name should dominate search quickly once Google knows we exist
- Removes friction when people search after hearing about us
- Social sharing looks professional with OG images

---

#### 19. LinkedIn Banner Generator

**Decision:** Create a dynamic banner generator at `/banner` route rather than static image files.

**Why:**
- Easy to tweak if branding changes (just edit code, regenerate)
- Keeps branded assets consistent with site colors/fonts
- Lives in codebase, version controlled

**Implementation:** `app/banner/route.tsx` generates 1584x396 LinkedIn banner. Access locally at http://localhost:3000/banner, right-click to save.

---

## 2025-01-20: Website Implementation Decisions

### Context
Building out the landing page. Made decisions about visual approach, form handling, and captcha.

### Decisions Made

#### 10. Solid Background + SVG Logo (Not Background Image)

**Decision:** Use solid teal (#6DBAC4) background with Seed of Life as a separate SVG element, rather than using the original background image.

**Why:**
- Original image was tall/narrow and didn't adapt well to different screen widths
- Logo would overlap text when image was scaled to cover screen
- SVG gives full control over logo size and position
- SVG is crisp at any size
- Solid color is simpler and loads faster

**Implementation:** `public/seed-of-life.svg` positioned with negative margin to overlap into header.

---

#### 11. Custom Waitlist Form (Not HubSpot Embed)

**Decision:** Build custom form component that submits to HubSpot via their Forms API, rather than embedding HubSpot's form widget.

**Why:**
- Full control over styling (matches site aesthetic perfectly)
- Custom validation (email and/or phone required)
- Better UX (no HubSpot branding, custom success message)
- Can integrate server-side captcha validation

**Implementation:**
- `components/waitlist-form.tsx` - React form with validation
- `app/api/waitlist/route.ts` - API route that validates Turnstile then submits to HubSpot

---

#### 12. Cloudflare Turnstile for Captcha

**Decision:** Use Cloudflare Turnstile (invisible mode) rather than Google reCAPTCHA.

**Why:**
- Privacy-friendly (aligns with Evryn's trust-focused brand)
- Better UX - invisible for most users, only shows challenge when needed
- Free
- Robust protection backed by Cloudflare's traffic data

**Implementation:**
- Client-side: Turnstile widget with `appearance: "interaction-only"`
- Server-side: API route validates token before submitting to HubSpot
- Keys stored in `.env.local` (see `.env.example` for template)

**Manage keys:** https://dash.cloudflare.com/dfe0b79fbf3c449a6c692f4fa1742cd7/turnstile

---

## 2025-01-20: Backend Architecture & Documentation Decisions

### Context
Continued buildout planning. Reconsidered n8n vs code-based backend. Established documentation structure.

### Decisions Made

#### 7. Backend: Code-Based, Not n8n

**Decision:** Claude Code will build all backend/agent functionality directly in code. n8n is out of the picture.

**Previous decision:** Keep n8n for Mark's triage MVP.

**Why we changed:**
- With CC, Justin can say what he needs and let it build - no more copy-paste workflow
- CC can see, debug, and fix everything in the codebase
- n8n required constant "chimp in the middle" - copying errors, pasting code
- Eventually would need to rebuild n8n workflows in code anyway
- One less tool to manage

**What this means:**
- Mark's email triage will be built as code, not n8n workflows
- All future agent/automation work happens in the codebase
- CC can build admin dashboards to visualize flows (replacing n8n's visual interface)

**Trade-off accepted:** If CC can't figure out a bug, Justin is more stuck than with n8n's visual interface. Mitigated by CC's debugging abilities and adding logging.

---

#### 8. System-Wide Docs: _evryn-meta Repo

**Decision:** Create a separate `_evryn-meta` repo for documentation that spans multiple projects.

**Structure:**
```
Code/
├── _evryn-meta/              ← System-wide docs (its own repo)
│   └── SYSTEM_OVERVIEW.md
├── evryn-website/
└── evryn-app/                ← future
```

**Why:**
- One source of truth for system architecture
- Backed up to GitHub (unlike a loose file in Code/)
- CC can access from any repo via `../_evryn-meta/`
- CC can modify it when system-level decisions change
- Underscore prefix sorts it to top and visually separates it

**Alternative rejected:** Putting system docs in each repo (creates drift) or in a parent folder (not backed up).

---

#### 9. Lovable Decision Deferred

**Previous decision:** Evaluate Lovable for member chat interface.

**Updated decision:** Revisit when building the member-facing app. With n8n out of the picture, the calculus changes - CC may build the whole thing.

---

### Open Questions Updated

1. **Verification provider:** Still planning iDenfy, not yet integrated
2. ~~Where to host central architecture docs~~ → Resolved: `_evryn-meta` repo
3. ~~When to migrate n8n to code~~ → Resolved: No migration needed, building in code from start

---

## 2025-01-16: Initial Architecture & Tooling Decisions

### Context
Justin (founder, non-technical) is building Evryn with AI assistance. Previously built workflows in n8n, had a frontend developer create a landing page. Now taking over development directly using AI coding tools.

### Decisions Made

#### 1. Development Tool: Claude Code (not Cursor)

**Decision:** Use Claude Code for development work.

**Alternatives considered:**
- **Cursor:** Visual IDE with AI built in, but uses GPT-4 by default. Adding Claude requires API key setup and separate billing.
- **Lovable/Bolt:** Good for non-technical founders building from scratch, but Justin already has a codebase.

**Why Claude Code:**
- Justin has Claude Max subscription which includes Claude Code at no extra cost
- Already comfortable with Claude's communication style from chat
- Cursor would require API billing on top of Max subscription
- Direct filesystem access means faster iteration

**Trade-off accepted:** Terminal-only interface (no visual IDE). Mitigated by using VS Code alongside for viewing files.

---

#### 2. ~~Keep n8n for Mark's Triage MVP~~ SUPERSEDED

**See Decision #7 above.** n8n is out; CC builds everything in code.

---

#### 3. Separate Repos (Not Monorepo)

**Decision:** Use separate repositories for different concerns.

**Current structure:**
- `_evryn-meta` — System-wide documentation
- `evryn-website` — Marketing site (this repo)
- `evryn-prelaunch-landing` — Archived old site (reference only)
- `evryn-app` — Member-facing product (future)
- `evryn-backend` — API/backend logic (future)

**Why separate:**
- Different deployment needs
- Easier to reason about each piece independently
- Future CTO can reorganize if preferred
- Standard practice for startups

---

#### 4. Archive Old Repo, Start Fresh

**Decision:** Archive `evryn-prelaunch-landing` and create new `evryn-website` repo.

**What to preserve from old repo:**
- `components/hubspot-form.tsx` (working HubSpot integration)
- `app/privacy-policy/` (legal content)

---

#### 5. ~~Lovable for Future Chat Interface~~ DEFERRED

**See Decision #9 above.**

---

#### 6. Website Design Direction

**Decision:** Radical simplification with new visual identity.

**Visual direction:**
- Aqua/teal gradient background (from Evryn_ext_swoosh.png)
- Seed of Life sacred geometry centered
- Inter font (with letterspacing for "Evryn" wordmark)
- White/cream text
- Calm, spacious, trustworthy vibe
- No animations or scroll effects

**Page structure:**
- Hero with value prop copy
- Three pillars (You just talk to Evryn / She finds your people / Evryn guards your gates)
- "Our Promise" section (pay only when it works)
- Waitlist form (HubSpot)
- Minimal footer

**Rationale:** The design embodies the product's values — trust, calm, human connection. "Medium is the message."

---

## Template for Future Decisions

```
## YYYY-MM-DD: [Decision Title]

### Context
What situation prompted this decision?

### Decision
What did we decide?

### Alternatives Considered
What other options did we evaluate?

### Rationale
Why did we choose this option?

### Trade-offs Accepted
What are the implications? What downsides are we accepting?

### Revisit When
Under what conditions should we reconsider this decision?
```
