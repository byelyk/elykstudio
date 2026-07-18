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
    id: 'hot-and-exclusive',
    title: 'Hot and Exclusive',
    client: 'Sephora',
    year: '2025',
    role: 'Social Strategy · Content',
    bgVideo: 'videos/hot-and-exclusive.mp4',
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: 'videos/hot-and-exclusive.mp4',
    overview: 'A social-first launch campaign built to make an exclusive product drop feel like the moment everyone had to be part of. We led creative, talent, and edit across TikTok and YouTube.',
    results: [
      { label: 'Views',      value: '12.4M' },
      { label: 'Engagement', value: '+340%' },
      { label: 'Reach',      value: '8.2M'  },
      { label: 'Saves',      value: '210K'  },
    ],
    youtube: ['YOUR_VIDEO_ID', 'YOUR_VIDEO_ID'],
    tiktoks: ['https://www.tiktok.com/@user/video/0000000000000000000'],
  },
  {
    id: 'mothers-day',
    title: "Mother's Day",
    client: 'Sephora',
    year: '2025',
    role: 'Concept · Production',
    bgVideo: 'videos/mothers-day.mp4',
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: 'videos/mothers-day.mp4',
    overview: 'A seasonal campaign turning a familiar holiday into shareable, emotionally-driven social moments. We handled concept through production and edit.',
    results: [
      { label: 'Views',      value: '9.1M'  },
      { label: 'Engagement', value: '+220%' },
      { label: 'Shares',     value: '540K'  },
      { label: 'CTR',        value: '6.8%'  },
    ],
    youtube: ['YOUR_VIDEO_ID'],
    tiktoks: ['https://www.tiktok.com/@user/video/0000000000000000000'],
  },
  {
    id: 'face-the-facts',
    title: 'Face the Facts',
    client: 'Sephora',
    year: '2024',
    role: 'Creative · Edit',
    bgVideo: 'videos/face-the-facts.mp4',
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: 'videos/face-the-facts.mp4',
    overview: 'An education-meets-entertainment series that made skincare facts feel native to the feed. Built for reach and saves.',
    results: [
      { label: 'Views',      value: '15.7M' },
      { label: 'Saves',      value: '380K'  },
      { label: 'Comments',   value: '92K'   },
      { label: 'Follows',    value: '+48K'  },
    ],
    youtube: ['YOUR_VIDEO_ID'],
    tiktoks: ['https://www.tiktok.com/@user/video/0000000000000000000'],
  },
  {
    id: 'quinn-on-the-street',
    title: 'Quinn on the Street',
    client: 'Quinn',
    year: '2024',
    role: 'Format · Series',
    bgVideo: 'videos/quinn-on-the-street.mp4',
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: 'videos/quinn-on-the-street.mp4',
    overview: 'A repeatable street-interview format designed to build a recognizable series brand and a loyal returning audience.',
    results: [
      { label: 'Views',      value: '22.3M' },
      { label: 'Avg. Watch', value: '41s'   },
      { label: 'Follows',    value: '+120K' },
      { label: 'Episodes',   value: '18'    },
    ],
    youtube: ['YOUR_VIDEO_ID', 'YOUR_VIDEO_ID'],
    tiktoks: ['https://www.tiktok.com/@user/video/0000000000000000000'],
  },
  {
    id: 'cute-at-work',
    title: 'Cute at Work',
    client: 'Quinn',
    year: '2024',
    role: 'Concept · Content',
    bgVideo: 'videos/cute-at-work.mp4',
    bgYouTube: '',
    heroYouTube: '',
    heroVideo: 'videos/cute-at-work.mp4',
    overview: 'A lighthearted, highly-relatable content series turning everyday work moments into a recognizable brand voice.',
    results: [
      { label: 'Views',      value: '6.5M'  },
      { label: 'Engagement', value: '+180%' },
      { label: 'Saves',      value: '140K'  },
      { label: 'Shares',     value: '76K'   },
    ],
    youtube: ['YOUR_VIDEO_ID'],
    tiktoks: ['https://www.tiktok.com/@user/video/0000000000000000000'],
  },
];

// Helper: look up a campaign by id
function getCampaign(id) {
  return CAMPAIGNS.find(c => c.id === id) || null;
}
