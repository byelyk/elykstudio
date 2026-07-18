# Opening this project in Claude Code

This is a complete, ready-to-run project. Follow these steps to continue building it
in Claude Code (Anthropic's terminal coding tool).

---

## 1. Unzip the project

Unzip `elyk-studio.zip` somewhere you keep your projects, e.g.:

```
~/Projects/elyk-studio
```

The folder already contains a git repository with an initial commit, so you don't need
to run `git init` — your history starts clean and ready.

## 2. Install Claude Code (if you haven't)

```bash
npm install -g @anthropic-ai/claude-code
```

(Requires Node.js. If you don't have it: https://nodejs.org)

## 3. Open the project in Claude Code

```bash
cd ~/Projects/elyk-studio
claude
```

Claude Code will automatically read `CLAUDE.md` in this folder, which tells it how the
project is structured and what conventions to follow.

## 4. Preview the site while you work

The site is static — no build step. In a second terminal tab:

```bash
cd ~/Projects/elyk-studio
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser. Refresh to see changes.

---

## What's in the project

```
elyk-studio/
├── index.html            Home — video grid + ELYK STUDIO wordmark
├── work.html             Work — clickable campaign index
├── campaign.html         Campaign case study (renders from ?id=)
├── about.html            About — philosophy + services
├── contact.html          Contact
├── css/
│   └── style.css         Whole design system (black + orange + white)
├── js/
│   ├── campaigns.js      ← ALL campaign content lives here
│   └── main.js           Cursor, home grid, work index, campaign rendering
├── videos/               Drop your .mp4 clips here (see videos/README.txt)
├── README.md             Project overview
├── CLAUDE.md             Guide Claude Code reads automatically
└── .gitignore
```

---

## Things you'll probably want to do next (and prompts to try)

Once you're in Claude Code, you can just describe what you want. Examples:

- **Add your real campaigns**
  > "In js/campaigns.js, replace the placeholder campaigns with my real ones. Here are the titles, clients, and stats: …"

- **Add your videos**
  > "I've added my clips to the videos/ folder. Wire clip-1.mp4 through clip-10.mp4 into the home grid, and set the hero videos for each campaign."

- **Change the accent color**
  > "Change the orange to a deeper burnt orange."

- **Build the featured-video backgrounds on the Work page**
  > "Use each campaign's bgVideo as the background behind its title on the work page."

- **Deploy it**
  > "Help me deploy this to Netlify."

---

## Deploying (no build needed)

This site works as-is on any static host:

- **GitHub Pages** — push to a repo, enable Pages on the `main` branch.
- **Netlify / Vercel / Cloudflare Pages** — drag the folder in, or connect the repo.
  No build command, publish directory is the project root.

---

## Sanity checks before committing

```bash
node --check js/main.js
node --check js/campaigns.js
```

Both should print nothing (that means they're valid).
