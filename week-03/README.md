# Week 3

![Calarts Creative Computing Logo](https://i.imgur.com/235dOcD.png)


## Topics Covered

### Introduction to CSS
- **Selectors**
  - Tag
  - Child and sibling selectors
  - Class and ID attributes
- **Color**
  - Web colors
  - Hex codes
  - rgba()
- **Font**
  - System
  - Web fonts
  - Loading from Google fonts
  - Creating a unique font - Calligraphr
- **Positioning with CSS Box Model**
  - padding, margin, border

## Lecture Notes
See the `notes/` directory for lecture slides and materials.

## Code Examples
See the `code-examples/` directory for hands-on coding examples.

## Homework

- Fork your assignment from last week (or start a new project if you like)
- Add some CSS to style your HTML
  - Use the CSS Box model to add padding, margin, or border styles to an element
  - Change the color or background-color of an element
  - Change the font of an element from the default
    - **Extra credit:** Load a font from Google fonts
  - Use at least one class attribute to selectively style some HTML
- If you didn't last week, add an img and a tag to your document

# 🎵 Build a Music Playlist Page
### Web Development I — Project #3 | Student Step-by-Step Guide

**What you need:** VS Code · A browser · A GitHub account

---

## What You'll Build

A single-page music playlist website with:
- Album art cards that load **real artwork** from Apple's iTunes API
- A "Now Playing" banner with a spinning thumbnail
- Genre filter tabs and a stats bar
- Deployed live on **GitHub Pages**

All in one single `index.html` file — no extra files needed.

---

## What You'll Learn

- **CSS Variables** — change your whole color scheme in one place
- **CSS Grid** — responsive card layout with a single rule
- **Flexbox** — align and space elements inside components
- **position: absolute** — layer badges and buttons on top of images
- **::after pseudo-elements** — visual effects without extra HTML
- **@keyframes** — animations for spin, shimmer, and progress bar effects
- **JavaScript fetch()** — call a live API to load real album art
- **GitHub Pages** — deploy so anyone can visit your site

---

## How to Read This Guide

Code blocks show the exact code to type or paste. Lines starting with `//` or `/* */` are **comments** — they explain what the code does. You don't have to type them, but they're helpful to read.

```html
<!-- This is an HTML comment — it explains what the code does -->
<div class="card">
  <!-- Your content goes here -->
</div>
```

```css
/* This is a CSS comment */
body {
  background-color: #0d0d0d; /* dark background */
}
```

---

## Step 1 — Create Your Files

Every website starts with an HTML file. You only need **one file** for this whole project.

**Do this:**

1. Create a new folder on your computer called `my-playlist`
2. Open VS Code → File → Open Folder → select `my-playlist`
3. Create a new file called `index.html`
4. Paste the code below into it
5. Open `index.html` in your browser — you should see a blank white page ✓

```html
<!DOCTYPE html>
<html lang="en">
<head>

  <!-- charset: allows emoji and special characters -->
  <meta charset="UTF-8" />

  <!-- viewport: makes the page look right on phones -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>My Music Playlist</title>

  <!-- Load two fonts from Google Fonts (requires internet) -->
  <!-- Playfair Display = elegant serif for headings        -->
  <!-- DM Sans          = clean font for body text          -->
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@400;500&display=swap"
    rel="stylesheet"
  />

  <style>
    /* All your CSS goes inside here */
  </style>

</head>
<body>

  <!-- All your HTML content goes here -->

</body>
</html>
```

> **⭐ Remember:** `index.html` is a special filename — web servers look for it automatically. Always name your main page `index.html` so GitHub Pages serves it correctly.

---

## Step 2 — Set Up Your Color Scheme with CSS Variables

CSS variables let you define your colors **once** and use them everywhere. To change your whole color scheme later, you only edit one block.

Add this inside your `<style>` tag:

```css
/* :root is like a 'global settings block' for your whole page */
:root {
  --color-bg:      #0d0d0d;    /* dark background for the whole page  */
  --color-surface: #181818;    /* slightly lighter — used for cards    */
  --color-border:  #2a2a2a;    /* subtle lines between elements        */
  --color-accent:  #f5c842;    /* yellow — your main brand color       */
  --color-text:    #f0ede8;    /* off-white — easier on eyes than #fff */
  --color-muted:   #888;       /* gray for secondary text              */
  --radius:        12px;       /* how rounded the card corners are     */
  --transition:    0.25s ease; /* default speed for hover animations   */
}

/* Remove default browser spacing from every element */
* {
  box-sizing: border-box; /* padding is INCLUDED in width — not added on top */
  margin: 0;
  padding: 0;
}

/* Style the whole page */
body {
  background-color: var(--color-bg);    /* reads --color-bg from :root */
  color: var(--color-text);
  font-family: 'DM Sans', sans-serif;
  min-height: 100vh;     /* always fills the full browser window height */
  padding: 3rem 1.5rem;  /* top+bottom padding, left+right padding      */
}
```

> **✏️ Try it:** Change `--color-accent` from `#f5c842` to any color you like — try `#ff6b6b` for red or `#7c3aed` for purple. Save and reload. Every element that uses `var(--color-accent)` updates instantly. That's the power of variables!

### Concepts in this step

| Property | What it means |
|---|---|
| `:root` | Targets the very top of the page — ideal for global settings |
| `--name: value` | Declares a CSS variable (custom property) |
| `var(--name)` | Uses the variable wherever a CSS value is expected |
| `box-sizing: border-box` | Padding is counted *inside* the element's width, not added to it |
| `min-height: 100vh` | Element is at least as tall as the browser window (100% viewport height) |
| `padding: A B` | Shorthand — A = top/bottom, B = left/right |

---

## Step 3 — Build the Page Header

Add the HTML inside `<body>` and the CSS inside `<style>`.

### HTML

```html
<!-- <header> = the top section of your page -->
<header class="page-header">

  <!-- Small label above the title -->
  <span class="label">🎵 Personal Collection</span>

  <!-- <em> wraps the italic, gold-colored word inside the h1 -->
  <h1>Songs That Hit <em>Different</em></h1>

  <p>A handpicked playlist of tracks I keep coming back to.</p>

</header>
```

### CSS

```css
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

/* The small "Personal Collection" label */
.page-header .label {
  display: inline-block;     /* allows top/bottom margin    */
  font-size: 0.75rem;
  letter-spacing: 0.18em;    /* spreads letters apart       */
  text-transform: uppercase; /* all caps, no HTML change    */
  color: var(--color-accent);
  margin-bottom: 0.75rem;
}

/* Main heading */
.page-header h1 {
  font-family: 'Playfair Display', serif;
  /* clamp(MIN, IDEAL, MAX) — fluid size that scales with window width */
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.1;
  margin-bottom: 1rem;
}

/* The italic, gold word inside the h1 */
.page-header h1 em {
  font-style: italic;
  color: var(--color-accent);
}

/* Subtitle paragraph */
.page-header p {
  color: var(--color-muted);
  max-width: 480px;  /* stops text stretching too wide              */
  margin: 0 auto;    /* auto left+right margins = centered block    */
}
```

> **✏️ Try it:** Resize your browser window slowly. Watch how the `h1` font size scales smoothly between `2rem` (small window) and `3.5rem` (large window). This is `clamp()` in action — one line replaces three media queries!

### Concepts in this step

| Property | What it means |
|---|---|
| `clamp(min, val, max)` | Fluid value — never below min or above max, scales with viewport |
| `letter-spacing` | Space between individual characters |
| `text-transform: uppercase` | Forces all caps without changing your HTML |
| `max-width + margin: 0 auto` | The classic pattern for centering a block element horizontally |

---

## Step 4 — Build the Card Grid with CSS Grid

This is the most important layout lesson. **One CSS rule** creates a fully responsive multi-column grid — no media queries needed.

### HTML

Add this below your `<header>`, inside `<body>`:

```html
<!-- <main> = the primary content area of the page -->
<main class="card-grid">

  <!-- Cards go here — you'll build the first one in Step 5 -->

</main>
```

### CSS

```css
.card-grid {
  display: grid;

  /* This single line does all the responsive work:          */
  /* auto-fill  = create as many columns as fit in the row  */
  /* minmax(260px, 1fr) = each column:                      */
  /*   - at least 260px wide                                */
  /*   - grows equally (1fr) to fill leftover space         */
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));

  gap: 1.5rem;       /* space between every cell (rows AND columns) */
  max-width: 1100px; /* never wider than 1100px                     */
  margin: 0 auto;    /* center the grid on the page                 */
}
```

> **✏️ Try it:** Add a few empty `<div>` elements inside `.card-grid` and give them a height and background color. Resize the browser — watch the columns reflow automatically with zero extra code.

### Concepts in this step

| Property | What it means |
|---|---|
| `display: grid` | Activates CSS Grid layout on the container |
| `repeat(auto-fill, …)` | Creates as many columns as fit — automatically responsive |
| `minmax(260px, 1fr)` | Column is at least 260px wide, grows equally to fill space |
| `gap` | Space between grid cells — applies to both rows and columns |
| `1fr` | One "fraction unit" — grid splits leftover space proportionally |

---

## Step 5 — Build the First Card

Build one card together, then duplicate it 5+ more times with your own songs. The grid places them automatically.

### HTML

Add this inside `.card-grid`:

```html
<!-- <article> = a self-contained piece of content (perfect for a song card) -->
<article class="card">

  <!-- .card-art holds the album image area                              -->
  <!-- data-artist and data-album are read by JavaScript in Step 8      -->
  <!-- class="loading" shows a shimmer animation while art loads        -->
  <div class="card-art loading"
       data-artist="Kendrick Lamar"
       data-album="DAMN.">

    <!-- Genre badge — floats top-left using absolute positioning -->
    <span class="genre-badge">Hip-Hop</span>

    <!-- Play button — appears centered on hover -->
    <button class="play-btn" aria-label="Play song"></button>

  </div>

  <div class="card-body">
    <div class="song-title">HUMBLE.</div>
    <div class="artist">Kendrick Lamar</div>
    <div class="card-footer">
      <!-- Filled ★ = rated  |  ☆ inside .empty = not rated -->
      <span class="stars">★★★★★</span>
      <span class="year">2017</span>
    </div>
  </div>

</article>
```

### CSS

```css
/* ── Card container ──────────────────────────────────────────── */
.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;   /* clips the image to the card's rounded corners */
  transition: transform var(--transition), box-shadow var(--transition);
  position: relative; /* so children can use position: absolute        */
}

/* Lift the card on hover */
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
}

/* ── Album art area ──────────────────────────────────────────── */
/* Uses background-image (set by JavaScript) instead of <img>   */
.card-art {
  position: relative;       /* contains absolutely positioned children  */
  aspect-ratio: 1 / 1;     /* always square, regardless of card width   */
  overflow: hidden;
  background-color: #1c1c1c; /* placeholder color while art loads        */
  background-size: cover;    /* fills the box without distortion         */
  background-position: center;
}

/* Shimmer animation — plays while waiting for album art to load */
@keyframes shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position:  400px 0; }
}

.card-art.loading {
  background: linear-gradient(90deg, #1c1c1c 25%, #2a2a2a 50%, #1c1c1c 75%);
  background-size: 800px 100%;
  animation: shimmer 1.4s infinite linear;
}

/* ── Card body (text below the art) ─────────────────────────── */
.card-body { padding: 1rem 1.1rem 1.2rem; }

.card-body .song-title {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  white-space: nowrap;      /* don't wrap long titles to a new line */
  overflow: hidden;          /* hide text that goes past the edge    */
  text-overflow: ellipsis;   /* show '...' for overflowing text      */
}

.card-body .artist {
  font-size: 0.85rem;
  color: var(--color-muted);
  margin-bottom: 0.85rem;
}

/* ── Card footer (stars + year) ─────────────────────────────── */
.card-footer {
  display: flex;
  justify-content: space-between; /* push stars and year to opposite ends */
  align-items: center;
}

.stars       { color: var(--color-accent); font-size: 0.85rem; }
.stars .empty { color: var(--color-border); } /* dims unrated stars */
.card-footer .year { font-size: 0.75rem; color: var(--color-muted); }
```

> **✏️ Try it:** Duplicate your `<article class="card">` block 5 more times. Change the `data-artist`, `data-album`, song title, artist name, stars, and year for each. The grid will place them automatically — no extra CSS needed!

### Concepts in this step

| Property | What it means |
|---|---|
| `overflow: hidden` | Clips children to the element's rounded shape |
| `aspect-ratio: 1 / 1` | Locks width-to-height ratio — keeps art boxes perfectly square |
| `background-size: cover` | Scales image to fill container — crops edges, no distortion |
| `text-overflow: ellipsis` | Shows `...` for text that overflows (requires `overflow: hidden`) |
| `transition: A B` | Smoothly animates property A over duration B when value changes |
| `@keyframes` | Defines a named animation with `from`/`to` or percentage steps |

---

## Step 6 — Layer the Badge, Overlay & Play Button

Three elements are **stacked** on top of the album art using `position: absolute`. The key rule: **the parent needs `position: relative`** to contain them.

Think of it like this: `position: relative` draws a box around the parent. `position: absolute` children are positioned *inside that box*.

### CSS

```css
/* ── Genre badge (top-left corner of the art box) ─────────── */
.genre-badge {
  position: absolute; /* removed from normal flow, positioned to parent */
  top: 0.75rem;
  left: 0.75rem;
  z-index: 2;         /* sits above the image                           */
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: rgba(0, 0, 0, 0.6); /* semi-transparent dark pill          */
  color: var(--color-text);
  border: 1px solid rgba(255,255,255,0.15);
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  backdrop-filter: blur(6px); /* frosted glass effect                   */
}

/* ── Dark overlay on hover (using ::after pseudo-element) ──── */
/* ::after inserts a virtual element AFTER .card-art's content  */
.card-art::after {
  content: '';      /* REQUIRED — without this, nothing renders         */
  position: absolute;
  inset: 0;         /* shorthand for top:0; right:0; bottom:0; left:0  */
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;       /* hidden by default                                */
  transition: opacity var(--transition);
}

/* Show the overlay when the card is hovered */
.card:hover .card-art::after { opacity: 1; }

/* ── Play button (centered on the overlay) ─────────────────── */
.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  /* top:50% + left:50% puts the TOP-LEFT CORNER at center.      */
  /* translate(-50%, -50%) shifts it back by half its own size   */
  /* so the CENTER of the button lands exactly at center.        */
  transform: translate(-50%, -50%) scale(0.8);
  z-index: 2;
  width: 52px;
  height: 52px;
  border-radius: 50%;            /* makes it a circle            */
  background-color: var(--color-accent);
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity var(--transition), transform var(--transition);
}

/* CSS triangle — made from borders (a classic CSS trick!) */
.play-btn::after {
  content: '';
  border-style: solid;
  /* Transparent on 3 sides, colored on the left = triangle pointing right */
  border-width: 7px 0 7px 14px;
  border-color: transparent transparent transparent #000;
  margin-left: 3px; /* nudge right to look visually centered            */
}

/* Show and grow the play button on card hover */
.card:hover .play-btn {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
```

> **✏️ Try it:** Open DevTools (right-click → Inspect) and click on `.card-art`. Notice `position: relative` on it in the Styles panel. Now click `.genre-badge` — notice `position: absolute`. Try removing `position: relative` from `.card-art` and see what happens to the badge. Put it back when done!

### Concepts in this step

| Property | What it means |
|---|---|
| `position: relative` | Makes element the "bounding box" for absolutely positioned children |
| `position: absolute` | Removes element from normal flow; positioned inside nearest relative parent |
| `inset: 0` | Shorthand for `top: 0; right: 0; bottom: 0; left: 0` |
| `z-index` | Stacking order — higher number = rendered in front |
| `::after` | Pseudo-element inserted after content — always requires `content: ''` |
| `translate(-50%, -50%)` | Shifts element by half its own size — used for perfect centering |
| `backdrop-filter: blur` | Blurs everything behind the element (frosted glass) |
| `border-radius: 50%` | Makes a square element into a perfect circle |

---

## Step 7 — Add the Now Playing Banner

A featured track banner above the card grid. Uses **Flexbox** for layout and **@keyframes** to spin the thumbnail like a record.

### HTML

Add this **above** your `.card-grid`, inside `<body>`:

```html
<section class="now-playing-section">
  <h2>— Now Playing</h2>

  <div class="now-playing-card">

    <!-- id="np-thumb" lets JavaScript find and update this element -->
    <div class="now-playing-thumb" id="np-thumb"></div>

    <div class="now-playing-info">
      <div class="np-label">▶ Now Playing</div>
      <div class="np-title">Blinding Lights</div>
      <div class="np-artist">The Weeknd · After Hours</div>

      <!-- Progress bar: outer = full track, inner = how far through -->
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill"></div>
      </div>
    </div>

  </div>
</section>
```

### CSS

```css
.now-playing-section {
  max-width: 1100px;
  margin: 0 auto 2.5rem;
}

.now-playing-section h2 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1rem;
  color: var(--color-muted);
  margin-bottom: 1rem;
}

/* The banner card */
.now-playing-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-accent); /* gold border = featured       */
  border-radius: var(--radius);
  display: flex;           /* thumbnail + info sit side by side           */
  gap: 1.5rem;
  padding: 1.25rem;
  align-items: center;     /* vertically center thumbnail and text        */
}

/* Spinning album thumbnail — background-image set by JavaScript */
.now-playing-thumb {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  border: 2px solid var(--color-accent);
  background-color: #222;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;          /* don't let Flexbox squish the thumbnail      */
  animation: spin 8s linear infinite;
}

/* Spin animation — rotates 360° on loop */
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.now-playing-info { flex: 1; } /* takes up all remaining horizontal space */

.np-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-accent);
  margin-bottom: 0.35rem;
}

.np-title  { font-size: 1.15rem; font-weight: 500; margin-bottom: 0.2rem; }
.np-artist { color: var(--color-muted); font-size: 0.9rem; }

/* Progress bar */
.progress-bar-wrap {
  margin-top: 0.85rem;
  height: 4px;
  background-color: var(--color-border);
  border-radius: 2px;
  overflow: hidden;
}

/* The filled portion — animates from 0% to 42% on page load */
.progress-bar-fill {
  height: 100%;
  width: 42%;
  background-color: var(--color-accent);
  border-radius: 2px;
  animation: load-bar 1.5s ease forwards;
}

/* 'forwards' keeps the final state (42%) after animation ends */
@keyframes load-bar {
  from { width: 0%; }
  to   { width: 42%; }
}
```

> **✏️ Try it:** Change `width: 42%` in `.progress-bar-fill` and the `to { width: 42% }` in `@keyframes load-bar` to `75%`. The bar now shows the song is 75% through. Try changing the `8s` in the spin animation to `2s` for a faster spin!

### Concepts in this step

| Property | What it means |
|---|---|
| `@keyframes spin` | Defines the spin animation — `from` = 0°, `to` = 360° |
| `animation: spin 8s linear infinite` | Applies the animation — name, duration, timing, repeat |
| `infinite` | Loops the animation forever |
| `forwards` | Keeps the final keyframe state after the animation finishes |
| `flex-shrink: 0` | Prevents a flex child from shrinking below its set size |
| `flex: 1` | Makes element grow to fill remaining space in the flex container |

---

## Step 8 — Add the Filter Tabs and Stats Bar

Two small finishing sections — both use **Flexbox**.

### HTML

Add the filter bar **above** `.card-grid`:

```html
<div class="filter-bar">
  <!-- class="active" = the currently selected filter -->
  <button class="filter-btn active">All</button>
  <button class="filter-btn">Hip-Hop</button>
  <button class="filter-btn">R&amp;B</button>
  <button class="filter-btn">Pop</button>
  <button class="filter-btn">Indie</button>
  <button class="filter-btn">Electronic</button>
</div>
```

Add the stats bar **below** `.card-grid`:

```html
<div class="stats-bar">
  <div class="stat">
    <span class="stat-number">8</span>
    <span class="stat-label">Tracks</span>
  </div>
  <div class="stat">
    <span class="stat-number">5</span>
    <span class="stat-label">Genres</span>
  </div>
  <div class="stat">
    <span class="stat-number">4.8</span>
    <span class="stat-label">Avg Rating</span>
  </div>
  <div class="stat">
    <span class="stat-number">~32</span>
    <span class="stat-label">Minutes</span>
  </div>
</div>
```

### CSS

```css
/* ── Filter bar ─────────────────────────────────────────────── */
.filter-bar {
  display: flex;
  justify-content: center; /* center the buttons in the row      */
  gap: 0.5rem;
  flex-wrap: wrap;          /* wrap to next line on narrow screens */
  margin-bottom: 2.5rem;
}

.filter-btn {
  background: none;
  border: 1px solid var(--color-border);
  color: var(--color-muted);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  padding: 0.45rem 1.1rem;
  border-radius: 999px;    /* very large value = pill shape       */
  cursor: pointer;
  transition: all var(--transition);
}

/* Active button and hover share the same style */
.filter-btn.active,
.filter-btn:hover {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  color: #000;
}

/* ── Stats bar ──────────────────────────────────────────────── */
.stats-bar {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border); /* divider line */
  margin: 2.5rem auto 0;
  max-width: 1100px;
}

.stat { text-align: center; }

.stat-number {
  display: block; /* stacks on top of label  */
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: var(--color-accent);
}

.stat-label {
  font-size: 0.75rem;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

> **✏️ Try it:** The filter buttons don't actually filter cards yet — that takes JavaScript. For now, try using the `:checked` checkbox trick: wrap each button in a `<label>` with a hidden `<input type="checkbox">` and use CSS `+` selectors to show/hide cards by genre. Ask your instructor for a hint if you get stuck!

---

## Step 9 — Load Real Album Art with JavaScript

Add this `<script>` block **just before `</body>`**. It reads the `data-artist` and `data-album` attributes from each card, calls the free iTunes API, and sets the real album artwork as a `background-image`.

```html
<script>

  /**
   * fetchAlbumArt
   * Calls the iTunes Search API and returns a high-res image URL.
   * The iTunes API is FREE — no account or API key needed.
   *
   * @param {string} artist  — e.g. "Kendrick Lamar"
   * @param {string} album   — e.g. "DAMN."
   * @returns a direct image URL string, or null if not found
   */
  async function fetchAlbumArt(artist, album) {

    // encodeURIComponent makes text safe to use inside a URL
    // e.g. "DAMN." becomes "DAMN." → "DAMN%2E"
    const query = encodeURIComponent(`${artist} ${album}`);

    // The iTunes Search API endpoint
    // entity=album → only return album results
    // limit=5      → return the top 5 matches
    const url = `https://itunes.apple.com/search?term=${query}&entity=album&limit=5`;

    try {
      // fetch() makes an HTTP request to the URL — like visiting a webpage in code
      // await means "wait here until the response comes back"
      const response = await fetch(url);

      // .json() converts the response text into a JavaScript object
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        // artworkUrl100 = Apple's thumbnail image URL (100×100 pixels)
        // We replace the size part to get a much larger 600×600 version
        return data.results[0].artworkUrl100.replace('100x100bb', '600x600bb');
      }

    } catch (err) {
      // If the network is down or the request fails, log it and move on
      // The page won't crash — cards will just show a dark placeholder
      console.warn(`Could not load art for ${artist} - ${album}:`, err);
    }

    return null; // nothing found
  }


  /**
   * loadAllAlbumArt
   * Finds every card on the page and loads its album artwork.
   */
  async function loadAllAlbumArt() {

    // querySelectorAll finds all elements matching a CSS selector
    // [data-artist] means "elements that have a data-artist attribute"
    const cards = document.querySelectorAll('.card-art[data-artist]');

    // Loop through every card
    for (const card of cards) {

      // .dataset reads data-* HTML attributes
      // data-artist="Kendrick Lamar" → card.dataset.artist
      const artist = card.dataset.artist;
      const album  = card.dataset.album;

      // Call our function to get the artwork URL
      const artUrl = await fetchAlbumArt(artist, album);

      // Remove the shimmer animation — we're done loading
      card.classList.remove('loading');

      if (artUrl) {
        // Set the CSS background-image property directly from JavaScript
        // Template literal: backticks allow ${variables} inside strings
        card.style.backgroundImage = `url(${artUrl})`;
      }
    }

    // Load the Now Playing thumbnail separately
    const npThumb = document.getElementById('np-thumb');
    if (npThumb) {
      const npArt = await fetchAlbumArt('The Weeknd', 'After Hours');
      if (npArt) npThumb.style.backgroundImage = `url(${npArt})`;
    }
  }

  // DOMContentLoaded fires when all HTML has been parsed
  // It's safe to manipulate the page at this point
  document.addEventListener('DOMContentLoaded', loadAllAlbumArt);

</script>
```

> **✏️ Try it:** Open DevTools → Network tab → reload the page. Watch the requests to `itunes.apple.com` come in one by one as each card's art loads. Click one to see the raw JSON response — that's what `data.results` contains!

### New JavaScript concepts

| Concept | What it means |
|---|---|
| `async function` | A function that can use `await` — it can pause and wait for things |
| `await fetch(url)` | Makes an HTTP request and waits for the response |
| `response.json()` | Parses the response as a JavaScript object |
| `querySelectorAll(sel)` | Returns all elements matching a CSS selector |
| `element.dataset.name` | Reads a `data-name="..."` attribute from an HTML element |
| `classList.remove()` | Removes a CSS class from an element |
| `style.backgroundImage` | Sets the CSS `background-image` property via JavaScript |
| `` `url(${artUrl})` `` | A template literal — backticks let you embed variables in strings |
| `DOMContentLoaded` | Event that fires when the page HTML is fully parsed and ready |

---

## Step 10 — Deploy to GitHub Pages

Your page is ready — now put it on the internet!

1. Go to [github.com](https://github.com) and sign in
2. Click **+** (top right) → **New repository**
3. Name it `my-playlist` — set it to **Public** — click **Create repository**
4. On the repo page: click **Add file → Upload files**
5. Drag your `index.html` file in — click **Commit changes**
6. Go to **Settings → Pages**
7. Under Source: set branch to **main**, folder to **/ (root)** → click **Save**
8. Wait about 60 seconds, then visit:

```
https://YOUR-USERNAME.github.io/my-playlist
```

> **✏️ Try it:** Share your live URL with a classmate and open two of their pages. Leave a comment in the class chat — what did you like? What would you add?

---

## Checklist — Before You Submit

- [ ] At least **6 song cards** with real content (no placeholder text)
- [ ] All cards have: song title, artist name, genre badge, star rating, year
- [ ] Album art loads from the iTunes API (or shows a dark placeholder if not found)
- [ ] Page has a Now Playing banner
- [ ] Cards lift on hover (CSS transition)
- [ ] Spinning thumbnail and progress bar animation work
- [ ] Page looks good at different window widths (no horizontal scroll)
- [ ] Page is live on GitHub Pages and the URL works
- [ ] Written reflection submitted (100–150 words)

---

## Reflection Questions

Answer these in 100–150 words total:

1. Name one CSS concept from this project you hadn't used before. Explain what it does **in your own words**.
2. What was the hardest part? How did you figure it out?
3. What would you add or change if you had more time?

---

## Quick Reference — CSS Properties Used in This Project

| Property | What it does |
|---|---|
| `var(--name)` | Uses a CSS custom property defined in `:root` |
| `display: grid` | Enables CSS Grid layout |
| `repeat(auto-fill, minmax(a,b))` | Responsive columns — no media queries needed |
| `display: flex` | Enables Flexbox layout |
| `justify-content` | Aligns flex children on the main axis (horizontal) |
| `align-items` | Aligns flex children on the cross axis (vertical) |
| `gap` | Space between grid or flex children |
| `position: relative` | Makes element the reference for absolute children |
| `position: absolute` | Positions element relative to nearest relative parent |
| `inset: 0` | Shorthand for `top:0; right:0; bottom:0; left:0` |
| `z-index` | Stacking order — higher = in front |
| `::after` | Pseudo-element after content — needs `content: ''` |
| `aspect-ratio: 1 / 1` | Locks element to a square |
| `object-fit: cover` | Fills container without distortion |
| `background-size: cover` | Same as above but for `background-image` |
| `transition` | Smooth animation when a CSS value changes |
| `@keyframes` | Defines a named animation |
| `animation` | Applies a `@keyframes` animation to an element |
| `clamp(min, val, max)` | Fluid value — scales with viewport |
| `text-overflow: ellipsis` | Shows `...` for overflowing text |
| `border-radius: 50%` | Makes a square into a circle |
| `border-radius: 999px` | Large value = pill/capsule shape |
| `backdrop-filter: blur` | Frosted glass effect |

---

## Extension Challenges

Finished early? Try these:

- **Easy:** Add a 9th card for your current favorite song
- **Easy:** Change `--color-accent` to match your personal style
- **Medium:** Add a custom scrollbar using `::-webkit-scrollbar` CSS
- **Medium:** Use `:nth-child()` to give every other card a slightly different border color
- **Hard:** Add a `@media print` stylesheet that hides the filter buttons and displays cards in a clean list
- **Hard:** Use the CSS checkbox hack to make the filter buttons actually hide/show cards by genre — no JavaScript needed!
- **Hard:** Animate the progress bar with a custom `cubic-bezier()` timing function

---

*Web Development I — Project #3 — Music Playlist Page*

