# ELYK STUDIO

A social-first creative agency website. Static site — pure HTML, CSS, and vanilla JavaScript, no build step.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — full-bleed video grid with the ELYK STUDIO wordmark |
| `work.html` | Work — clickable campaign index with background video behind the active title |
| `campaign.html` | Campaign case study — renders from `?id=` (e.g. `campaign.html?id=hot-and-exclusive`) |
| `about.html` | About — agency philosophy + services |
| `contact.html` | Contact — email, socials, location |

## Project structure

```
elyk-studio/
├── index.html
├── work.html
├── campaign.html
├── about.html
├── contact.html
├── css/
│   └── style.css        # entire design system (black + orange + white)
├── js/
│   ├── campaigns.js     # ← all campaign content lives here
│   └── main.js          # cursor, grid, work index, campaign rendering
└── videos/              # drop your .mp4 clips here
```

## Editing content

**Campaigns** — everything about the Work list and each case-study page comes from
`js/campaigns.js`. Each campaign is one object with its title, client, background video,
overview, results, YouTube IDs, and TikTok URLs. Add or edit a block there and both the
Work index and its detail page update automatically.

**Colors** — one token controls the accent. In `css/style.css`, change
`--orange: #FF4D00;` and it cascades across the whole site.

**Videos** — put `.mp4` files in `videos/` and point the `src` at them. For YouTube,
paste the video ID into the iframe `src`. See `videos/README.txt`.

## Running locally

No build needed. Any static server works:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve
```

Then open http://localhost:8000

## Deploying

Works as-is on any static host — GitHub Pages, Netlify, Vercel, Cloudflare Pages.
Just point the host at this folder; there is no build command.
