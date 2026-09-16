/* =============================================
   ELYK STUDIO — Main JS
   Handles: custom cursor, home grid placeholders,
            and Work-page folder carousels.
   ============================================= */

// ─── Custom Cursor ────────────────────────────
const cursor = document.getElementById('cursor');
if (cursor) {
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function tick() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    requestAnimationFrame(tick);
  })();
  document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
  document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
}
function expandCursor()   { cursor && cursor.classList.add('expanded'); }
function collapseCursor() { cursor && cursor.classList.remove('expanded'); }

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', expandCursor);
  el.addEventListener('mouseleave', collapseCursor);
});


// ─── HOME GRID: show placeholder when no video ─
document.querySelectorAll('.grid-cell').forEach(cell => {
  // Skip folder cells — those are handled by the carousel init below
  if (cell.querySelector('.folder__track')) return;

  const video = cell.querySelector('.grid-video');
  if (video) {
    video.addEventListener('error', () => cell.classList.add('no-video'));
    // lazy-loaded tiles carry the URL in data-src until they scroll into view
    const src = video.dataset.src
             || video.getAttribute('src')
             || video.querySelector('source')?.getAttribute('src')
             || '';
    if (!src || src.includes('YOUR_')) {
      cell.classList.add('no-video');
      video.style.display = 'none';
    }
  }

  const ytEmbed = cell.querySelector('.yt-embed');
  if (ytEmbed) {
    const id = ytEmbed.getAttribute('data-youtube-id') || '';
    if (!id || id.includes('YOUR_')) {
      cell.classList.add('no-video');
      ytEmbed.style.display = 'none';
    }
  }

  cell.addEventListener('mouseenter', expandCursor);
  cell.addEventListener('mouseleave', collapseCursor);
});


// ─── WORK PAGE: Folder Carousels ──────────────
document.querySelectorAll('.grid-cell').forEach(cell => {
  const track = cell.querySelector('.folder__track');
  if (!track) return; // not a folder cell

  const dotsEl  = cell.querySelector('.folder__dots');
  const tabEl   = cell.querySelector('.folder__tab');
  const countEl = cell.querySelector('.folder__counter');
  const prevBtn = cell.querySelector('.folder__arrow--prev');
  const nextBtn = cell.querySelector('.folder__arrow--next');

  const slides = Array.from(track.querySelectorAll('.folder__slide'));
  const total  = slides.length;
  let current  = 0;

  // Folder tab label from data-label
  if (tabEl) tabEl.setAttribute('data-label', cell.dataset.label || '');

  // Detect empty slides → show placeholder text (already in markup)
  slides.forEach(slide => {
    const video = slide.querySelector('video');
    if (video) {
      const src = video.querySelector('source')?.getAttribute('src') || '';
      if (!src || src.includes('YOUR_')) { video.style.display = 'none'; }
      video.addEventListener('error', () => { video.style.display = 'none'; });
    }
  });

  // Build dots
  const dots = [];
  if (dotsEl) {
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'folder__dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', e => { e.stopPropagation(); goTo(i); });
      dot.addEventListener('mouseenter', expandCursor);
      dot.addEventListener('mouseleave', collapseCursor);
      dotsEl.appendChild(dot);
      dots.push(dot);
    });
    if (total <= 1) dotsEl.style.display = 'none';
  }

  function goTo(index) {
    index = Math.max(0, Math.min(total - 1, index));
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    if (countEl) countEl.textContent = `${current + 1} / ${total}`;
    if (prevBtn) prevBtn.classList.toggle('hidden', current === 0);
    if (nextBtn) nextBtn.classList.toggle('hidden', current === total - 1);
    // Pause off-screen videos
    slides.forEach((slide, i) => {
      const v = slide.querySelector('video');
      if (v) { i === current ? v.play().catch(()=>{}) : v.pause(); }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', e => { e.stopPropagation(); goTo(current - 1); });
    prevBtn.addEventListener('mouseenter', expandCursor);
    prevBtn.addEventListener('mouseleave', collapseCursor);
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', e => { e.stopPropagation(); goTo(current + 1); });
    nextBtn.addEventListener('mouseenter', expandCursor);
    nextBtn.addEventListener('mouseleave', collapseCursor);
  }

  // Scroll wheel
  let scrollLock = false;
  cell.addEventListener('wheel', e => {
    e.preventDefault();
    if (scrollLock) return;
    scrollLock = true;
    goTo(current + (e.deltaY > 0 || e.deltaX > 0 ? 1 : -1));
    setTimeout(() => { scrollLock = false; }, 480);
  }, { passive: false });

  // Touch swipe
  let touchStartX = null;
  cell.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  cell.addEventListener('touchend', e => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 36) goTo(current + (dx < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });

  // Keyboard (when focused)
  cell.setAttribute('tabindex', '0');
  cell.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goTo(current + 1); }
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); goTo(current - 1); }
  });

  cell.addEventListener('mouseenter', expandCursor);
  cell.addEventListener('mouseleave', collapseCursor);

  goTo(0);
});


// ─── Helper: set a YouTube ID from console ────
// Home page:  setHomeYT('YOUR_VIDEO_ID_1', 'realId')
// Work page:  use the iframe markup directly in work.html
window.setYT = function(cellSelector, youtubeId, slideIndex = 0) {
  const cell = document.querySelector(cellSelector);
  if (!cell) return console.warn('Cell not found');
  const slides = cell.querySelectorAll('.folder__slide--yt, .yt-embed');
  const slide = slides[slideIndex];
  if (!slide) return console.warn('No YouTube slot found');
  let iframe = slide.querySelector('iframe');
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('allowfullscreen', '');
    slide.appendChild(iframe);
  }
  iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&playlist=${youtubeId}`;
};


/* =============================================
   WORK INDEX — clickable campaign list
   ============================================= */
(function initWorkIndex() {
  const indexEl = document.getElementById('workIndex');
  const bgEl    = document.getElementById('workBg');
  if (!indexEl || typeof CAMPAIGNS === 'undefined') return;

  const overlay = bgEl.querySelector('.work-bg__overlay');

  // Build a background video/iframe per campaign (hidden until active)
  const bgMedia = [];
  CAMPAIGNS.forEach((c, i) => {
    let media;
    if (c.bgYouTube) {
      media = document.createElement('iframe');
      media.src = `https://www.youtube.com/embed/${c.bgYouTube}?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&playlist=${c.bgYouTube}`;
      media.setAttribute('frameborder', '0');
      media.setAttribute('allow', 'autoplay; encrypted-media');
    } else {
      media = document.createElement('video');
      media.muted = true; media.loop = true; media.autoplay = true;
      media.setAttribute('playsinline', '');
      const src = document.createElement('source');
      src.src = c.bgVideo || '';
      src.type = 'video/mp4';
      media.appendChild(src);
    }
    bgEl.insertBefore(media, overlay);
    bgMedia.push(media);
  });

  // Build the clickable list
  CAMPAIGNS.forEach((c, i) => {
    const item = document.createElement('a');
    item.className = 'work-item';
    item.href = `campaign.html?id=${c.id}`;
    item.dataset.i = i;
    item.innerHTML = `
      <span class="work-item__title">${c.title}</span>
      <span class="work-item__client">${c.client}</span>`;
    indexEl.appendChild(item);

    const setActive = () => {
      indexEl.querySelectorAll('.work-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      bgMedia.forEach((m, mi) => m.classList.toggle('active', mi === i));
    };

    item.addEventListener('mouseenter', () => { setActive(); expandCursor(); });
    item.addEventListener('mouseleave', collapseCursor);
    item.addEventListener('focus', setActive);
  });

  // Activate the first item by default
  const first = indexEl.querySelector('.work-item');
  if (first) {
    first.classList.add('active');
    if (bgMedia[0]) bgMedia[0].classList.add('active');
  }

  initClientMarquee();

  // On touch devices: activate item nearest viewport center on scroll
  if (window.matchMedia('(hover: none)').matches) {
    const items = Array.from(indexEl.querySelectorAll('.work-item'));
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let best = 0, bestDist = Infinity;
      items.forEach((el, idx) => {
        const r = el.getBoundingClientRect();
        const d = Math.abs((r.top + r.height / 2) - mid);
        if (d < bestDist) { bestDist = d; best = idx; }
      });
      items.forEach((el, idx) => el.classList.toggle('active', idx === best));
      bgMedia.forEach((m, mi) => m.classList.toggle('active', mi === best));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();


/* =============================================
   CLIENT MARQUEE — infinite brand/logo ticker
   (Work page). Reads CLIENTS from campaigns.js;
   falls back to unique clients from CAMPAIGNS.
   ============================================= */
function initClientMarquee() {
  const marquee = document.getElementById('clientMarquee');
  const track = marquee && marquee.querySelector('.client-marquee__track');
  if (!track) return;

  // Source list: explicit CLIENTS, else derive from campaigns
  let list = (typeof CLIENTS !== 'undefined' && CLIENTS.length) ? CLIENTS : [];
  if (!list.length && typeof CAMPAIGNS !== 'undefined') {
    list = [...new Set(CAMPAIGNS.map(c => c.client).filter(Boolean))].map(name => ({ name }));
  }
  if (!list.length) { marquee.style.display = 'none'; return; }

  // Build one item element from a {name, logo} entry
  const makeItem = entry => {
    const el = document.createElement('span');
    el.className = 'client-marquee__item';
    if (entry.logo) {
      const img = document.createElement('img');
      img.src = entry.logo;
      img.alt = entry.name || '';
      // If the logo file is missing, fall back to the text name
      img.addEventListener('error', () => { el.textContent = entry.name || ''; });
      el.appendChild(img);
    } else {
      el.textContent = entry.name || '';
    }
    return el;
  };

  // Repeat the base list enough times to be at least as wide as the
  // viewport, so one "half" of the loop always fills the screen.
  const measure = document.createDocumentFragment();
  list.forEach(e => measure.appendChild(makeItem(e)));
  track.appendChild(measure);
  const oneSetWidth = track.scrollWidth + parseFloat(getComputedStyle(track).columnGap || 0);
  const reps = Math.max(2, Math.ceil(window.innerWidth / Math.max(oneSetWidth, 1)) + 1);

  // Build a single half = list repeated `reps` times, then duplicate the
  // half so translateX(-50%) lands on an identical frame (seamless loop).
  track.innerHTML = '';
  const half = [];
  for (let r = 0; r < reps; r++) list.forEach(e => half.push(e));
  [...half, ...half].forEach(e => track.appendChild(makeItem(e)));

  // Constant speed (~55px/sec) regardless of how many brands there are
  const halfWidth = track.scrollWidth / 2;
  track.style.animationDuration = Math.max(12, Math.round(halfWidth / 55)) + 's';
}


/* =============================================
   CAMPAIGN DETAIL — render from ?id=
   ============================================= */
(function initCampaign() {
  const root = document.getElementById('caseStudy');
  if (!root || typeof CAMPAIGNS === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const c = getCampaign(id) || CAMPAIGNS[0];

  if (!c) {
    root.innerHTML = '<div style="padding:8rem 2.5rem;text-align:center;color:var(--grey)">Campaign not found. <a href="work.html" style="color:var(--cream)">Back to Work →</a></div>';
    return;
  }

  document.title = `ELYK STUDIO — ${c.title}`;

  // Hero media
  let heroMedia;
  if (c.heroYouTube) {
    heroMedia = `<iframe src="https://www.youtube.com/embed/${c.heroYouTube}?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&playlist=${c.heroYouTube}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  } else {
    heroMedia = `<video autoplay muted loop playsinline><source src="${c.heroVideo || ''}" type="video/mp4" /></video>`;
  }

  // Results tiles
  const resultsHTML = (c.results || []).map(r => `
    <div class="cs__result">
      <span class="cs__result-value">${r.value}</span>
      <span class="cs__result-label">${r.label}</span>
    </div>`).join('');

  // YouTube clips
  const ytHTML = (c.youtube || []).map(vid => {
    if (!vid || vid.includes('YOUR_')) {
      return `<div class="cs__yt"><div class="cs__ph">YouTube — add ID</div></div>`;
    }
    return `<div class="cs__yt"><iframe src="https://www.youtube.com/embed/${vid}?rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  }).join('');

  // TikTok clips
  const ttHTML = (c.tiktoks || []).map(url => {
    if (!url || url.includes('0000000000')) {
      return `<div class="cs__tt"><div class="cs__ph">TikTok — add URL</div></div>`;
    }
    return `<div class="cs__tt"><blockquote class="tiktok-embed" cite="${url}" data-video-id=""><a href="${url}">View on TikTok</a></blockquote></div>`;
  }).join('');

  /* Only render a clips block when that platform actually has entries —
     an empty "Watch — YouTube" heading over blank space reads as broken. */
  const clipsHTML = (ytHTML || ttHTML)
    ? `<div class="cs__clips">
      ${ytHTML ? `<div class="cs__clips-head">Watch — YouTube</div>
      <div class="cs__yt-grid">${ytHTML}</div>` : ''}
      ${ttHTML ? `<div class="cs__clips-head">Watch — TikTok</div>
      <div class="cs__tt-grid">${ttHTML}</div>` : ''}
    </div>`
    : '';

  root.innerHTML = `
    <div class="cs__hero">
      ${heroMedia}
      <div class="cs__hero-overlay"></div>
      <div class="cs__hero-inner">
        <div class="cs__client">${c.client} · ${c.year}</div>
        <h1 class="cs__title">${c.title}</h1>
      </div>
    </div>

    <div class="cs__body">
      <div class="cs__overview">
        <p>${c.overview || ''}</p>
      </div>
      <div class="cs__meta">
        <div class="cs__meta-row">
          <span class="cs__meta-label">Client</span>
          <span class="cs__meta-value">${c.client}</span>
        </div>
        <div class="cs__meta-row">
          <span class="cs__meta-label">Year</span>
          <span class="cs__meta-value">${c.year}</span>
        </div>
        <div class="cs__meta-row">
          <span class="cs__meta-label">Role</span>
          <span class="cs__meta-value">${c.role || '—'}</span>
        </div>
      </div>
    </div>

    <div class="cs__section-label">Results</div>
    <div class="cs__results">${resultsHTML}</div>

    ${clipsHTML}
  `;

  // Load TikTok embed script if any real TikToks present
  if ((c.tiktoks || []).some(u => u && !u.includes('0000000000'))) {
    const s = document.createElement('script');
    s.src = 'https://www.tiktok.com/embed.js';
    s.async = true;
    document.body.appendChild(s);
  }

  // Re-bind cursor hovers for newly-injected links
  root.querySelectorAll('a, button, iframe').forEach(el => {
    el.addEventListener('mouseenter', expandCursor);
    el.addEventListener('mouseleave', collapseCursor);
  });
})();


/* =============================================
   BRANDS PAGE — renders BRAND_GROUPS into
   brands.html. No-op on every other page.
   ============================================= */
(function initBrandsPage() {
  const root = document.getElementById('brandGroups');
  if (!root || typeof BRAND_GROUPS === 'undefined') return;

  root.innerHTML = BRAND_GROUPS.map(g => `
    <div class="br-group fade-up">
      <div class="br-group__head">
        <h2 class="br-group__label">${g.label}</h2>
        <span class="br-group__count">${g.brands.length}</span>
      </div>
      ${g.blurb ? `<p class="br-group__blurb">${g.blurb}</p>` : ''}
      <ul class="br-list">
        ${g.brands.map(b => `
          <li class="br-item">
            <span class="br-item__name">${b.name}</span>
            ${b.note ? `<span class="br-item__note">${b.note}</span>` : ''}
          </li>`).join('')}
      </ul>
    </div>`).join('');

  // .fade-up is a pure CSS animation (see style.css) — nothing to re-init
})();


/* =============================================
   HOME GRID — progressive video loading.

   The grid is 10 autoplaying videos. Loading them all at once was ~110MB
   and left the page blank for many seconds. Now each <video> paints a
   Cloudinary poster frame immediately (~55KB each) and the real file is
   attached only when the tile is on screen — staggered, so they don't all
   fight for bandwidth at once.
   ============================================= */
(function initGridVideos() {
  const vids = document.querySelectorAll('.grid-video[data-src]');
  if (!vids.length) return;

  let queue = 0;
  const load = (v) => {
    if (v.dataset.loaded) return;
    v.dataset.loaded = '1';
    // stagger: two at a time, ~450ms apart, so the first tiles play soonest
    const delay = Math.floor(queue++ / 2) * 450;
    setTimeout(() => {
      v.src = v.dataset.src;
      v.load();
      v.play().catch(() => { /* autoplay blocked — poster stays, which is fine */ });
    }, delay);
  };

  if (!('IntersectionObserver' in window)) { vids.forEach(load); return; }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { load(e.target); io.unobserve(e.target); }
    });
  }, { rootMargin: '200px' });   // start just before a tile scrolls in

  vids.forEach((v) => io.observe(v));

  // Pause tiles that scroll out of view so offscreen video isn't burning CPU
  const vis = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const v = e.target;
      if (!v.dataset.loaded) return;
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
  }, { threshold: 0.1 });
  vids.forEach((v) => vis.observe(v));
})();
