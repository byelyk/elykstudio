/* =============================================
   ELYK STUDIO — Campaign Data
   ---------------------------------------------
   This is the single source of truth for the Work
   index (work.html) AND each detail page (campaign.html).

   TO ADD / EDIT A CAMPAIGN:
     Copy one block below and edit the fields.
     - id:        url-safe slug (used in campaign.html?id=...)
     - title:     shown big + italic in the list
     - client:    brand tag under the title
     - year, role:shown in the detail sidebar
     - bgVideo:   background video on the Work list (mp4 path)
     - bgYouTube: OR a YouTube ID for the list background (leave bgVideo empty)
     - heroYouTube / heroVideo: main video on the detail page
     - overview:  short case-study paragraph
     - results:   analytics tiles [{label, value}]
     - youtube:   array of YouTube IDs (landscape clips)
     - tiktoks:   array of TikTok video URLs (portrait clips)
   ============================================= */

const CAMPAIGNS = [
  {
    id: 'back-to-campus',
    group: 'Sponsorships',
    title: 'Back to Campus',
    client: 'Timberland',
    year: '2026',
    role: 'Concept · Production · Edit',
    // Cloudinary source is HEVC .mov (Safari-only) — delivered as .mp4/H.264 so it plays everywhere
    bgVideo: 'https://res.cloudinary.com/dmh01vpoz/video/upload/f_auto,q_auto/v1784443368/0715_2_egw2zx.mp4',
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: 'https://res.cloudinary.com/dmh01vpoz/video/upload/f_auto,q_auto/v1784443368/0715_2_egw2zx.mp4',
    overview: 'A short-form campaign built to put Timberland in the middle of move-in season. Two angles: an unboxing that let the product speak for itself, and a cinematic spot that made the boots read as part of the fit. Both cut natively for Shorts, Reels and TikTok and pushed across all three — 4M+ views in the first month, with the cinematic alone clearing 2.8M on YouTube Shorts.',
    results: [
      { label: 'Total Views',  value: '4M+'   },
      { label: 'Top Video',    value: '2.8M'  },
      { label: 'YouTube',      value: '3.5M'  },
      { label: 'IG + TikTok',  value: '509K'  },
    ],
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'day-in-the-life',
    group: 'Sponsorships',
    title: 'Day in the Life',
    client: 'Gauth',
    year: '2026',
    role: 'YouTube Integration · Short-Form · Paid Usage',
    // source is a HEVC .mov — delivered as H.264 .mp4 (and width-capped) so it plays everywhere
    bgVideo: 'https://res.cloudinary.com/dmh01vpoz/video/upload/f_auto,q_auto,w_1280,c_limit/v1784480866/0715_2_4_dbrotw.mp4',
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: 'https://res.cloudinary.com/dmh01vpoz/video/upload/f_auto,q_auto/v1784446743/save_time_for_what_really_matters_by_downloading_Gauth_official_gauth_gauthpartner_examprep_study_-_ELYK._1080p_drjmeo.mp4',
    overview: 'Two collaborations, one goal: get Gauth in front of students at the exact moment they feel the pressure. First a full integration inside a realistic study-vlog day in the life, then a standalone short-form spot Gauth licensed and ran as paid media. The short form is the story — it peaked four months after launch with 119K views in a single day, and 94% of its lifetime views landed in the last 90 days. The creative kept working long after the campaign was supposed to end.',
    results: [
      { label: 'Views',      value: '780K+'     },
      { label: 'Watch Time', value: '19.1K hrs' },
      { label: 'Peak Day',   value: '119K'      },
      { label: 'Thumb. CTR', value: '6.0%'      },
    ],
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'on-campus',
    group: 'Sponsorships',
    title: 'On Campus',
    client: 'Microsoft',
    year: '2026',
    role: 'Integration · Short-Form · Event Coverage',
    // 29MB source — delivered width-capped so the page stays fast
    bgVideo: 'https://res.cloudinary.com/dmh01vpoz/video/upload/f_auto,q_auto,w_1280,c_limit/v1789178641/0911_1_s0052w.mp4',
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: 'https://res.cloudinary.com/dmh01vpoz/video/upload/f_auto,q_auto,w_1280,c_limit/v1789178641/0911_1_s0052w.mp4',
    overview: 'A full-stack partnership rather than a one-off post. We delivered a long-form YouTube integration, a YouTube Short, and on-the-ground coverage from a Microsoft event we attended as media — then Microsoft reposted the work to their own channel. 110K views across YouTube, TikTok and Instagram, with the brand handle carrying it further.',
    results: [
      { label: 'Total Views', value: '110K' },
      { label: 'TikTok',      value: '60K'  },
      { label: 'Instagram',   value: '30K'  },
      { label: 'YouTube',     value: '20K'  },
    ],
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'sleepyhead',
    group: 'Sponsorships',
    title: 'The Dorm Essential',
    client: 'Sleepyhead',
    year: '2026',
    role: 'Concept · Short-Form',
    bgVideo: '',            // ← add a Cloudinary .mp4 URL
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',          // ← same URL works here
    overview: 'A move-in season campaign positioning Sleepyhead as the upgrade every dorm bed needs.',
    results: [],            // ← add { label, value } pairs when you have numbers
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'scholarshipowl',
    group: 'Sponsorships',
    title: 'How I Pay For School',
    client: 'ScholarshipOwl',
    year: '2026',
    role: 'Long-Form · Interviews',
    bgVideo: '',            // ← add a Cloudinary .mp4 URL
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',          // ← same URL works here
    overview: 'A YouTube sit-down and campus interviews on how students actually afford college, with ScholarshipOwl as the answer.',
    results: [],            // ← add { label, value } pairs when you have numbers
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'best-buy',
    group: 'Sponsorships',
    title: 'The Haul',
    client: 'Best Buy',
    year: '2026',
    role: 'Short-Form · Product',
    bgVideo: '',            // ← add a Cloudinary .mp4 URL
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',          // ← same URL works here
    overview: 'A product haul built around the tech students actually buy for the school year.',
    results: [],            // ← add { label, value } pairs when you have numbers
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'venmo',
    group: 'Sponsorships',
    title: 'Venmo',
    client: 'Venmo',
    year: '2026',
    role: 'Short-Form',
    bgVideo: '',            // ← add a Cloudinary .mp4 URL
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',          // ← same URL works here
    overview: 'Campaign details coming soon.',
    results: [],            // ← add { label, value } pairs when you have numbers
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'olipop',
    group: 'Campaigns &amp; UGC',
    title: 'Ambassador',
    client: 'Olipop',
    year: '2026',
    role: 'Ambassador · Ongoing',
    bgVideo: '',            // ← add a Cloudinary .mp4 URL
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',          // ← same URL works here
    overview: 'An ongoing ambassadorship bringing Olipop into everyday college content.',
    results: [],            // ← add { label, value } pairs when you have numbers
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'bloom-investments',
    group: 'Campaigns &amp; UGC',
    title: 'Bloom',
    client: 'Bloom Investments',
    year: '2026',
    role: 'UGC · Finance',
    bgVideo: '',            // ← add a Cloudinary .mp4 URL
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',          // ← same URL works here
    overview: 'Creator content made for Bloom to own and run across their own channels.',
    results: [],            // ← add { label, value } pairs when you have numbers
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'you-learn',
    group: 'Campaigns &amp; UGC',
    title: 'You Learn',
    client: 'You Learn',
    year: '2026',
    role: 'UGC · Education',
    bgVideo: '',            // ← add a Cloudinary .mp4 URL
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',          // ← same URL works here
    overview: 'UGC built for an education platform, cut natively for short-form.',
    results: [],            // ← add { label, value } pairs when you have numbers
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'michael-kors',
    group: 'Campaigns &amp; UGC',
    title: 'Michael Kors',
    client: 'Michael Kors',
    year: '2026',
    role: 'Fashion · Product',
    bgVideo: '',            // ← add a Cloudinary .mp4 URL
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',          // ← same URL works here
    overview: 'Campaign details coming soon.',
    results: [],            // ← add { label, value } pairs when you have numbers
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'la-roche-posay',
    group: 'Campaigns &amp; UGC',
    title: 'La Roche-Posay',
    client: 'La Roche-Posay',
    year: '2026',
    role: 'Beauty · Product',
    bgVideo: '',            // ← add a Cloudinary .mp4 URL
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',          // ← same URL works here
    overview: 'Campaign details coming soon.',
    results: [],            // ← add { label, value } pairs when you have numbers
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'razer',
    group: 'Campaigns &amp; UGC',
    title: 'Gear Up',
    client: 'Razer',
    year: '2026',
    role: 'Product · Store Event',
    bgVideo: '',            // ← add a Cloudinary .mp4 URL
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',          // ← same URL works here
    overview: 'A Razer partnership spanning product content and the RazerStore Student Gear Up Day.',
    results: [],            // ← add { label, value } pairs when you have numbers
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'aelfric-eden',
    group: 'Campaigns &amp; UGC',
    title: 'Aelfric Eden',
    client: 'Aelfric Eden',
    year: '2026',
    role: 'Fashion · Product',
    bgVideo: '',            // ← add a Cloudinary .mp4 URL
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',          // ← same URL works here
    overview: 'Campaign details coming soon.',
    results: [],            // ← add { label, value } pairs when you have numbers
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'tone',
    group: 'Campaigns &amp; UGC',
    title: 'Tone',
    client: 'Tone',
    year: '2026',
    role: 'Body Care · Product',
    bgVideo: '',            // ← add a Cloudinary .mp4 URL
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',          // ← same URL works here
    overview: 'Campaign details coming soon.',
    results: [],            // ← add { label, value } pairs when you have numbers
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'pgytech',
    group: 'Campaigns &amp; UGC',
    title: 'PGYTECH',
    client: 'PGYTECH',
    year: '2026',
    role: 'Tech · Product',
    bgVideo: '',            // ← add a Cloudinary .mp4 URL
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',          // ← same URL works here
    overview: 'Campaign details coming soon.',
    results: [],            // ← add { label, value } pairs when you have numbers
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'amazon-storefront',
    group: 'Campaigns &amp; UGC',
    title: "What's In My Bag",
    client: 'Amazon Influencer',
    year: '2026',
    role: 'Affiliate · Storefront · Short-Form',
    bgVideo: '',            // ← add the what's-in-my-bag clip here
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',
    overview: "A curated Amazon storefront paired with short-form content that sends viewers straight to it. The what's-in-my-bag video did 20K views and converted at 8% — roughly three times a typical affiliate benchmark. Proof that the audience doesn't just watch, they buy.",
    results: [
      { label: 'Views',      value: '20K' },
      { label: 'Conversion', value: '8%'  },
    ],
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'when-we-all-vote',
    group: 'Events',
    title: 'When We All Vote',
    client: 'The 50 Million',
    year: '2026',
    role: 'Event · Media',
    bgVideo: '',            // ← add a Cloudinary .mp4 URL
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',          // ← same URL works here
    overview: 'Invited as media to The 50 Million x When We All Vote event.',
    results: [],            // ← add { label, value } pairs when you have numbers
    youtube: [],
    tiktoks: [],
  },
  {
    id: 'microsoft-campus-tour',
    group: 'Events',
    title: 'Campus Tour',
    client: 'Microsoft',
    year: '2026',
    role: 'Event · Media',
    bgVideo: '',            // ← add a Cloudinary .mp4 URL
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: '',          // ← same URL works here
    overview: 'On-the-ground coverage from the Microsoft campus tour.',
    results: [],            // ← add { label, value } pairs when you have numbers
    youtube: [],
    tiktoks: [],
  },
];

// Helper: look up a campaign by id
function getCampaign(id) {
  return CAMPAIGNS.find(c => c.id === id) || null;
}

/* =============================================
   BRANDS — powers brands.html (grouped) AND the
   client marquee on work.html.

   Each brand is { name } or { name, note } — the note
   is a small line under the name (format, product, etc.).
   Order of groups here = order down the page.
   ============================================= */
const BRAND_GROUPS = [
  {
    label: 'Sponsorships',
    blurb: 'Paid partnerships — integrations, series and campaigns.',
    brands: [
      { name: 'Microsoft' },
      { name: 'Timberland' },
      { name: 'Gauth' },
      { name: 'Best Buy' },
      { name: 'Venmo' },
      { name: 'Sleepyhead' },
      { name: 'ScholarshipOwl' },
    ],
  },
  {
    label: 'Ambassador',
    blurb: 'Ongoing programs — long-term brand representation.',
    brands: [
      { name: 'Adobe' },
      { name: 'Olipop' },
      { name: 'Insta360' },
      { name: 'Scent Society' },
    ],
  },
  {
    label: 'UGC',
    blurb: 'Creator content produced for brands to own and run.',
    brands: [
      { name: 'Bloom Investments' },
      { name: 'Quizard' },
      { name: 'Traoh', note: '2 campaigns' },
      { name: 'You Learn' },
    ],
  },
  {
    label: 'PR & Product',
    blurb: 'Product partnerships, seeding and featured placements.',
    brands: [
      { name: 'Michael Kors' },
      { name: 'La Roche-Posay' },
      { name: 'Razer' },
      { name: 'Belkin' },
      { name: 'Aelfric Eden' },
      { name: 'Tone' },
      { name: 'PGYTECH' },
      { name: 'Ausom', note: 'L2 Max e-scooter' },
      { name: 'HAUOMS', note: 'Furniture · 2 items' },
      { name: 'SnapFig', note: 'Custom figurine' },
    ],
  },
  {
    label: 'Events',
    blurb: 'Invited as media and talent.',
    brands: [
      { name: 'The 50 Million', note: 'x When We All Vote' },
      { name: 'Microsoft', note: 'Campus Tour' },
      { name: 'RazerStore', note: 'Student Gear Up Day' },
    ],
  },
  {
    label: 'Features',
    blurb: 'Appearances beyond the feed.',
    brands: [
      { name: 'Camp College', note: 'TV series' },
    ],
  },
];

// Flat, de-duplicated brand list for the Work page marquee
const CLIENTS = [...new Map(
  BRAND_GROUPS.flatMap(g => g.brands).map(b => [b.name, { name: b.name }])
).values()];


/* =============================================
   CREATORS — powers creators.html

   One object per creator. Everything is optional except
   name — blank fields simply don't render, so a
   half-filled profile still looks intentional.

     name    : display name
     handle  : primary @handle
     niche   : what they cover ("College life · Comedy")
     photo   : headshot URL (Cloudinary or assets/…)
     stats   : [{ label, value }] — platform followers, avg views
     brands  : ['Timberland', 'Gauth'] — past partners
     videos  : [url, …] — vertical .mp4s, play inline on the page
     link    : profile URL (optional, makes the name clickable)
   ============================================= */
const CREATORS = [
  {
    name: 'Kyle Okoth',
    handle: '@byelyk',
    niche: 'College life · Vlogs · Tech',
    photo: '',
    stats: [],
    brands: ['Microsoft', 'Timberland', 'Gauth', 'Adobe'],
    videos: [],
    link: '',
  },
  {
    name: 'Eliana Ofori',
    handle: '',
    niche: '',
    photo: '',
    stats: [],
    brands: [],
    videos: [],
    link: '',
  },
  {
    name: 'Peace Gray',
    handle: '',
    niche: '',
    photo: '',
    stats: [],
    brands: [],
    videos: [],
    link: '',
  },
];
