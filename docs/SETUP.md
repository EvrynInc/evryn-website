# Setup & Workflow Cheat Sheet

Your quick reference for working on the Evryn website.

---

## Machine Paths

You work from two machines with different usernames:

| Machine | Path |
|---------|------|
| Windows 10 (desktop) | `C:\Users\Justin\Evryn\Code\` |
| Windows 11 (laptop) | `C:\Users\jbmcg\Evryn\Code\` |

All documentation uses the W10 path. Adjust for W11 as needed.

---

## First-Time Setup (One-Time)

**✅ Steps 1-4 completed January 2025 on both machines.**

### 1. Install Node.js ✅
- Download from https://nodejs.org (LTS version)
- Run installer, accept defaults
- Restart your terminal
- Verify: `node --version`

### 2. Install Claude Code ✅
```bash
npm install -g @anthropic-ai/claude-code
```

### 3. Install VS Code ✅
- Download from https://code.visualstudio.com
- Just install, no configuration needed
- Used for viewing files while CC works

### 4. Clone the repo ✅
```bash
cd C:\Users\Justin\Evryn\Code
git clone https://github.com/EvrynInc/evryn-website.git
```

### 5. Install project dependencies
**This happens automatically when CC initializes the project.** You don't need to do anything.

If you ever need to do it manually:
```bash
cd C:\Users\Justin\Evryn\Code\evryn-website
npm install
```

### 6. Set up environment variables
The site needs Cloudflare Turnstile keys for the waitlist form captcha.

1. Copy the example file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and fill in the real keys:
   - `TURNSTILE_SECRET_KEY` - Get from Cloudflare dashboard
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - Get from Cloudflare dashboard

**Manage Turnstile keys:** https://dash.cloudflare.com/dfe0b79fbf3c449a6c692f4fa1742cd7/turnstile

*Note: `.env.local` is gitignored - your keys stay on your machine and aren't pushed to GitHub.*

---

## Daily Workflow

### Starting Work

1. **Open PowerShell**

2. **Navigate to your project:**
   ```bash
   cd C:\Users\Justin\Evryn\Code\evryn-website
   ```

3. **Pull latest changes** (in case you worked from another machine):
   ```bash
   git pull
   ```

4. **Start Claude Code:**
   ```bash
   claude
   ```
   CC reads CLAUDE.md automatically and knows the project context.

5. **Optionally, start the local dev server** (in a second PowerShell window):
   ```bash
   npm run dev
   ```
   Then open your browser to **http://localhost:3000** to see your site running locally.
   
   *What this does: Your computer runs a mini web server that shows your website. "localhost" means your own computer, "3000" is the port number. Changes you make appear instantly in the browser.*

6. **Open VS Code** to watch files change as CC works:
   - File → Open Folder → select `evryn-website`

### Making Changes

Just tell Claude Code what you want in plain English:
> "Make the headline bigger"
> "The button isn't centered"
> "Add a new section below the hero"

CC edits the files. If you have `npm run dev` running, your browser auto-refreshes to show changes.

### Saving Your Work

When you're happy with changes:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

This pushes to GitHub → Vercel auto-deploys.

### End of Session: #lock

Before closing your terminal, tell CC:

> **#lock**

This tells CC to update CLAUDE.md with anything important from the session - decisions made, context gained, work completed. That way the next session starts with full knowledge.

---

## Common Commands

| What you want | Command |
|---------------|---------|
| Start Claude Code | `claude` |
| Start local site | `npm run dev` |
| Stop local site | `Ctrl+C` in the terminal |
| See current status | `git status` |
| Save changes locally | `git add .` then `git commit -m "message"` |
| Push to GitHub | `git push` |
| Get latest from GitHub | `git pull` |

---

## Switching Machines (Desktop ↔ Laptop)

**Before leaving your current machine:**
```bash
git add .
git commit -m "Work in progress"
git push
```

**On the new machine:**
```bash
cd C:\Users\[USERNAME]\Evryn\Code\evryn-website
git pull
```
(Remember: `Justin` on W10, `jbmcg` on W11)

---

## Troubleshooting

### "command not found: node"
- Close and reopen PowerShell after installing Node.js

### "command not found: claude"
- Run `npm install -g @anthropic-ai/claude-code` again

### Site won't start / weird errors
```bash
rm -rf node_modules
npm install
npm run dev
```

### Merge conflicts
- Don't panic
- Tell Claude: "I have a merge conflict in [filename], help me resolve it"

### Need to undo everything and start fresh
```bash
git checkout .          # Discards all local changes
git clean -fd           # Removes untracked files
```

---

## Project Structure

```
Code/
├── _evryn-meta/              ← System-wide docs (separate repo)
│   └── docs/hub/roadmap.md    ← The Hub
├── evryn-prelaunch-landing/  ← Old site (archived, for reference)
├── evryn-team-agents/        ← AI agent system (new project)
└── evryn-website/            ← This repo
    ├── CLAUDE.md             ← CC reads this automatically
    ├── README.md
    ├── docs/
    │   ├── SETUP.md          ← You are here
    │   └── DECISIONS.md
    ├── app/                  ← Next.js pages
    ├── components/           ← Reusable UI pieces
    └── public/               ← Images, static files
```

---

## Key URLs

| What | URL |
|------|-----|
| Local dev | http://localhost:3000 |
| Production | https://evryn.ai |
| GitHub repo | https://github.com/EvrynInc/evryn-website |
| Vercel dashboard | https://vercel.com/evryn |
| HubSpot | https://app.hubspot.com |
| Cloudflare Turnstile | https://dash.cloudflare.com/dfe0b79fbf3c449a6c692f4fa1742cd7/turnstile |

---

## Glossary

| Term | Meaning |
|------|---------|
| **repo** | Repository — a folder of code tracked by Git |
| **clone** | Download a repo from GitHub to your machine |
| **commit** | Save a snapshot of your changes (locally) |
| **push** | Upload your commits to GitHub |
| **pull** | Download latest changes from GitHub |
| **localhost** | Your own computer running as a web server |
| **npm** | Node Package Manager — installs code libraries |
| **CC** | Claude Code |
