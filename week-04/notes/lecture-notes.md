# Lecture Notes - Week 04

## Advanced CSS

This week, we dive deeper into CSS to explore advanced techniques that will elevate your web design skills. We'll cover positioning, layout systems, animations, and ways to embed rich media content.

### What We're Learning This Week

Week 4 focuses on **Advanced CSS** techniques that give you more control over layout, styling, and interactivity. These tools allow you to create modern, dynamic, and visually engaging websites.

**Topics Covered:**
- Positioning and layout with Flexbox and CSS Grid
- Background images, GIFs, and videos
- Pseudo-selectors for interactive states
- Embedding external content (videos, audio)
- CSS gradients for visual effects
- Transitions and animations for movement

---

## Positioning and Layout

Modern CSS provides powerful tools for creating flexible, responsive layouts without relying on older techniques like floats or tables.

### Flexbox (Flexible Box Layout)

**Flexbox** is a one-dimensional layout system designed for distributing space and aligning items within a container, either horizontally (in rows) or vertically (in columns).

#### When to Use Flexbox

- Navigation menus
- Card layouts
- Centering content vertically and horizontally
- Distributing items with equal spacing
- Creating flexible components that adapt to content

#### Basic Flexbox Concepts

**Container Properties (applied to parent element):**

```css
.container {
  display: flex; /* Enables flexbox */
  flex-direction: row; /* row | row-reverse | column | column-reverse */
  justify-content: center; /* flex-start | flex-end | center | space-between | space-around | space-evenly */
  align-items: center; /* flex-start | flex-end | center | stretch | baseline */
  flex-wrap: wrap; /* nowrap | wrap | wrap-reverse */
  gap: 20px; /* Spacing between items */
}
```

**Key Properties Explained:**

- **`display: flex`**: Turns an element into a flex container
- **`flex-direction`**: Sets the main axis direction (horizontal or vertical)
- **`justify-content`**: Aligns items along the main axis
- **`align-items`**: Aligns items along the cross axis
- **`flex-wrap`**: Controls whether items wrap to new lines
- **`gap`**: Creates spacing between flex items (modern browsers)

**Item Properties (applied to child elements):**

```css
.item {
  flex-grow: 1; /* How much the item can grow */
  flex-shrink: 1; /* How much the item can shrink */
  flex-basis: 200px; /* Starting size before growing/shrinking */
  flex: 1; /* Shorthand for flex-grow, flex-shrink, flex-basis */
  align-self: flex-start; /* Override align-items for this item */
}
```

#### Flexbox Example: Navigation Menu

```css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
}

nav ul {
  display: flex;
  gap: 30px;
  list-style: none;
}

nav a {
  color: white;
  text-decoration: none;
}
```

#### Flexbox Example: Card Layout

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.card {
  flex: 1 1 300px; /* Grow, shrink, base width of 300px */
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
```

### CSS Grid

**CSS Grid** is a two-dimensional layout system that allows you to create complex layouts with rows and columns simultaneously.

#### When to Use CSS Grid

- Page layouts (header, sidebar, main content, footer)
- Image galleries
- Complex magazine-style layouts
- Any layout requiring precise control over rows AND columns

#### Basic Grid Concepts

**Container Properties:**

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Three columns */
  grid-template-rows: auto 1fr auto; /* Three rows */
  gap: 20px; /* Spacing between grid items */
  padding: 20px;
}
```

**Grid Units:**
- **`fr`** (fraction): Divides available space proportionally
- **`px`**: Fixed pixel width
- **`%`**: Percentage of container
- **`auto`**: Sizes based on content
- **`minmax(min, max)`**: Sets minimum and maximum size

**Useful Grid Functions:**

```css
.grid {
  /* Repeat pattern: repeat(count, size) */
  grid-template-columns: repeat(3, 1fr); /* Three equal columns */
  
  /* Auto-fit: as many columns as will fit */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  
  /* Auto-fill: fills row with columns, even if empty */
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
```

**Item Properties:**

```css
.grid-item {
  grid-column: 1 / 3; /* Span from column line 1 to 3 */
  grid-row: 1 / 2; /* Span from row line 1 to 2 */
  
  /* Or use span notation */
  grid-column: span 2; /* Span across 2 columns */
  grid-row: span 3; /* Span across 3 rows */
}
```

#### Grid Example: Basic Page Layout

```css
.page-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 20px;
  min-height: 100vh;
}

.header {
  grid-area: header;
  background-color: #333;
  color: white;
  padding: 20px;
}

.sidebar {
  grid-area: sidebar;
  background-color: #f0f0f0;
  padding: 20px;
}

.main {
  grid-area: main;
  padding: 20px;
}

.footer {
  grid-area: footer;
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}
```

#### Grid Example: Image Gallery

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  padding: 20px;
}

.gallery img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}
```

### Flexbox vs. Grid: When to Use Each

**Use Flexbox when:**
- You need one-dimensional layouts (row OR column)
- Content size should determine layout
- You want items to wrap naturally
- Building components (navigation, cards, toolbars)

**Use Grid when:**
- You need two-dimensional layouts (rows AND columns)
- You want precise control over placement
- Creating page-level layouts
- Items should be aligned in both directions

**Pro Tip:** You can (and often should) use both! Grid for overall page layout, Flexbox for component-level layouts.

---

## Background Images

CSS allows you to add images, GIFs, and even videos as backgrounds to create rich visual experiences.

### Background Image Basics

```css
.element {
  background-image: url('path/to/image.jpg');
  background-size: cover; /* cover | contain | auto | [width] [height] */
  background-position: center; /* center | top | bottom | left | right | [x] [y] */
  background-repeat: no-repeat; /* repeat | repeat-x | repeat-y | no-repeat */
  background-attachment: fixed; /* scroll | fixed | local */
}
```

**Property Explanations:**

- **`background-size: cover`**: Scales image to cover entire element, may crop edges
- **`background-size: contain`**: Scales image to fit inside element, may show empty space
- **`background-position`**: Controls which part of the image is visible
- **`background-repeat`**: Whether image tiles/repeats
- **`background-attachment: fixed`**: Creates parallax effect (image stays fixed during scroll)

**Shorthand Syntax:**

```css
.element {
  background: url('image.jpg') center/cover no-repeat fixed;
  /* url position/size repeat attachment */
}
```

### Multiple Background Images

CSS supports layering multiple background images:

```css
.element {
  background-image: 
    url('overlay.png'),
    url('main-image.jpg');
  background-position: 
    center,
    center;
  background-size: 
    contain,
    cover;
  background-repeat: 
    no-repeat,
    no-repeat;
}
```

The first image listed appears on top.

### Using GIFs as Backgrounds

GIFs work exactly like static images but add animation:

```css
.animated-background {
  background-image: url('animated.gif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

**Best Practices for GIFs:**
- Keep file size small (compress GIFs)
- Don't overuse animated backgrounds (can be distracting)
- Ensure text remains readable over animated backgrounds
- Consider accessibility - some users may find animations overwhelming
- Respect user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .animated-background {
    background-image: url('static-version.jpg'); /* Replace with static image */
  }
}
```

### Video Backgrounds

For video backgrounds, use HTML video elements with CSS positioning:

```html
<div class="video-background">
  <video autoplay muted loop playsinline>
    <source src="background.mp4" type="video/mp4">
    <source src="background.webm" type="video/webm">
  </video>
  <div class="content">
    <h1>Content Over Video</h1>
  </div>
</div>
```

```css
.video-background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  z-index: -1;
  object-fit: cover;
}

.video-background .content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding: 50px;
}
```

**Important Video Attributes:**
- **`autoplay`**: Starts playing automatically
- **`muted`**: Must be included for autoplay to work in most browsers
- **`loop`**: Repeats video continuously
- **`playsinline`**: Plays inline on mobile devices (iOS requirement)

**Best Practices for Video Backgrounds:**
- Keep videos short (10-20 seconds, looped)
- Optimize file size (aim for under 5MB)
- Provide fallback image for slow connections
- Ensure text contrast for readability
- Consider user preferences (respect `prefers-reduced-motion`)

---

## Pseudo-Selectors

**Pseudo-selectors** (also called pseudo-classes) allow you to style elements based on their state or position, without adding extra classes to your HTML.

### Interactive State Pseudo-Selectors

#### `:hover` - Mouse Over State

Applies styles when the user hovers their mouse over an element.

```css
a:hover {
  color: #ff6b6b;
  text-decoration: underline;
}

button:hover {
  background-color: #2c3e50;
  transform: scale(1.05);
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}
```

**Common Use Cases:**
- Link color changes
- Button hover effects
- Card elevation on hover
- Image zoom effects
- Menu highlighting

#### `:active` - Click/Press State

Applies styles when an element is being actively clicked or pressed.

```css
button:active {
  background-color: #1a252f;
  transform: scale(0.98);
}

a:active {
  color: #c0392b;
}
```

**Use Case:** Provides visual feedback that a click is registered.

#### `:visited` - Link History State

Styles links that the user has previously visited.

```css
a:visited {
  color: purple;
}

a:link {
  color: blue; /* Unvisited links */
}
```

**Privacy Note:** Modern browsers limit what styles can be applied to `:visited` for security reasons (mainly color-related properties).

#### `:focus` - Keyboard/Form Focus

Styles elements when they receive keyboard focus (important for accessibility).

```css
input:focus {
  outline: 2px solid #3498db;
  border-color: #3498db;
}

button:focus {
  outline: 3px solid #f39c12;
  outline-offset: 2px;
}
```

**Accessibility Note:** Never remove focus indicators without providing an alternative visual cue!

### Order Matters: Link States

For link pseudo-classes, follow the **LVHA order** (LoVe HAte):

```css
a:link { /* 1. Unvisited links */ }
a:visited { /* 2. Visited links */ }
a:hover { /* 3. Mouse hover */ }
a:active { /* 4. Being clicked */ }
```

This order ensures styles cascade correctly.

### Other Useful Pseudo-Selectors

```css
/* First and last children */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }

/* Nth child */
tr:nth-child(even) { background-color: #f2f2f2; } /* Zebra striping */
li:nth-child(3) { color: red; } /* Specific child */

/* Not selector */
button:not(.primary) { background-color: gray; }

/* Empty elements */
p:empty { display: none; }
```

### Pseudo-Elements (Double Colon)

Pseudo-elements style specific parts of an element:

```css
/* First letter/line */
p::first-letter {
  font-size: 2em;
  font-weight: bold;
  float: left;
}

p::first-line {
  font-variant: small-caps;
}

/* Before and after content */
.icon::before {
  content: "→ ";
  color: #3498db;
}

.external-link::after {
  content: " ↗";
  font-size: 0.8em;
}

/* Selection highlighting */
::selection {
  background-color: #ffeb3b;
  color: black;
}
```

---

## Embedded Content

Modern websites often include rich media content from external sources like video platforms and music streaming services.

### Embedding Videos

#### YouTube

To embed a YouTube video, use the iframe embed code provided by YouTube:

```html
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
```

**How to Get YouTube Embed Code:**
1. Go to the video on YouTube
2. Click "Share" button
3. Click "Embed"
4. Copy the provided iframe code

**Styling YouTube Embeds:**

```css
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
```

This creates a responsive video that maintains aspect ratio.

#### Vimeo

Similar to YouTube, Vimeo provides embed codes:

```html
<iframe 
  src="https://player.vimeo.com/video/VIDEO_ID" 
  width="640" 
  height="360" 
  frameborder="0" 
  allow="autoplay; fullscreen; picture-in-picture" 
  allowfullscreen>
</iframe>
```

**Vimeo Customization Options:**

You can add URL parameters to customize the player:
- `?autoplay=1` - Auto-play video
- `?loop=1` - Loop the video
- `?background=1` - Background mode (auto-play, muted, looping)
- `?muted=1` - Start muted

Example: `https://player.vimeo.com/video/VIDEO_ID?autoplay=1&loop=1&muted=1`

### Embedding Audio

#### SoundCloud

SoundCloud provides embed codes for tracks, playlists, and sets:

```html
<iframe 
  width="100%" 
  height="166" 
  scrolling="no" 
  frameborder="no" 
  allow="autoplay" 
  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/TRACK_ID">
</iframe>
```

**How to Get SoundCloud Embed:**
1. Go to the track on SoundCloud
2. Click "Share" button
3. Click "Embed" tab
4. Copy the provided code

**SoundCloud Player Customization:**

```css
.soundcloud-embed {
  max-width: 800px;
  margin: 20px auto;
}

.soundcloud-embed iframe {
  border-radius: 8px;
}
```

#### Bandcamp

Bandcamp offers embeddable players for albums and tracks:

```html
<iframe 
  style="border: 0; width: 350px; height: 470px;" 
  src="https://bandcamp.com/EmbeddedPlayer/album=ALBUM_ID/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" 
  seamless>
</iframe>
```

**How to Get Bandcamp Embed:**
1. Go to the album/track page
2. Click "Share/Embed" button
3. Click "Embed this album"
4. Customize options and copy code

### Best Practices for Embedded Content

**Performance:**
- Use lazy loading when possible: `loading="lazy"` attribute
- Consider loading embeds only when user scrolls to them
- Be mindful of total number of embeds on a page

**Responsive Design:**
- Use the aspect-ratio wrapper technique shown above
- Test embeds on different screen sizes
- Consider hiding or resizing embeds on mobile if needed

**Accessibility:**
- Always include meaningful `title` attributes on iframes
- Provide fallback content/links if iframes don't load
- Ensure keyboard navigation works with embedded content

**Privacy:**
- Some embeds track users - consider privacy-focused alternatives
- Use YouTube's "no-cookie" domain for better privacy:

```html
<!-- Standard YouTube embed -->
<iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>

<!-- Privacy-enhanced YouTube embed -->
<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID"></iframe>
```

- Inform users about external content

---

## CSS Gradients

Gradients allow you to display smooth transitions between multiple colors, creating rich visual effects without images.

### Linear Gradients

Linear gradients transition colors along a straight line.

**Basic Syntax:**

```css
.element {
  background: linear-gradient(direction, color1, color2, color3, ...);
}
```

**Simple Examples:**

```css
/* Top to bottom (default) */
.gradient1 {
  background: linear-gradient(#3498db, #2c3e50);
}

/* Left to right */
.gradient2 {
  background: linear-gradient(to right, #e74c3c, #f39c12);
}

/* Diagonal */
.gradient3 {
  background: linear-gradient(to bottom right, #9b59b6, #e91e63);
}

/* Specific angle (0deg = bottom to top, 90deg = left to right) */
.gradient4 {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}
```

**Multi-Color Gradients:**

```css
.sunset {
  background: linear-gradient(
    to bottom,
    #ff6b6b,    /* Red */
    #f7b731,    /* Orange */
    #feca57,    /* Yellow */
    #48dbfb,    /* Blue */
    #0abde3     /* Dark Blue */
  );
}
```

**Color Stops (Control Positions):**

```css
.custom-stops {
  background: linear-gradient(
    to right,
    #3498db 0%,      /* Blue at start */
    #3498db 40%,     /* Blue until 40% */
    #e74c3c 40%,     /* Red starts at 40% */
    #e74c3c 100%     /* Red to end */
  );
}
```

### Radial Gradients

Radial gradients radiate from a center point.

**Basic Syntax:**

```css
.element {
  background: radial-gradient(shape size at position, color1, color2, ...);
}
```

**Examples:**

```css
/* Simple radial */
.radial1 {
  background: radial-gradient(#3498db, #2c3e50);
}

/* Circle shape */
.radial2 {
  background: radial-gradient(circle, #ff6b6b, #4ecdc4);
}

/* Positioned */
.radial3 {
  background: radial-gradient(circle at top left, #feca57, #ff6348);
}

/* Custom size */
.radial4 {
  background: radial-gradient(circle closest-side, #48dbfb, #0abde3);
}
```

### Conic Gradients

Conic gradients rotate around a center point (like a color wheel).

```css
.conic {
  background: conic-gradient(
    #ff6b6b,
    #f7b731,
    #4ecdc4,
    #3498db,
    #9b59b6,
    #ff6b6b
  );
}

/* Pie chart effect */
.pie {
  background: conic-gradient(
    #3498db 0deg 120deg,
    #e74c3c 120deg 240deg,
    #2ecc71 240deg 360deg
  );
  border-radius: 50%;
}
```

### Repeating Gradients

Create pattern effects with repeating gradients:

```css
/* Striped background */
.stripes {
  background: repeating-linear-gradient(
    45deg,
    #3498db,
    #3498db 10px,
    #2c3e50 10px,
    #2c3e50 20px
  );
}

/* Concentric circles */
.circles {
  background: repeating-radial-gradient(
    circle,
    #3498db,
    #3498db 10px,
    #ffffff 10px,
    #ffffff 20px
  );
}
```

### Combining Gradients

Layer multiple gradients using commas:

```css
.complex {
  background: 
    linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%),
    linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%),
    linear-gradient(to bottom, #3498db, #2c3e50);
  background-size: 20px 20px, 20px 20px, 100% 100%;
  background-position: 0 0, 10px 10px, 0 0;
}
```

### Gradient Tools and Resources

- **CSS Gradient Generator**: cssgradient.io
- **uiGradients**: uigradients.com
- **Gradient Hunt**: gradienthunt.com
- **WebGradients**: webgradients.com

### Text Gradients

Apply gradients to text (modern browsers):

```css
.gradient-text {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #feca57);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: bold;
}
```

---

## Transitions and Animations

CSS transitions and animations bring your websites to life with smooth, performant motion effects.

### CSS Transitions

**Transitions** create smooth changes between property values over a specified duration.

#### Basic Transition Syntax

```css
.element {
  transition: property duration timing-function delay;
}
```

**Components:**
- **property**: Which CSS property to animate (or `all`)
- **duration**: How long the transition takes (e.g., `0.3s`, `200ms`)
- **timing-function**: Speed curve (e.g., `ease`, `linear`, `ease-in`, `ease-out`)
- **delay**: Time to wait before starting (optional)

#### Simple Transition Examples

```css
/* Button hover effect */
button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2c3e50;
}

/* Link underline animation */
a {
  position: relative;
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s ease;
}

a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #3498db;
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}

/* Card elevation */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
```

#### Multiple Transitions

Transition multiple properties with different settings:

```css
.box {
  transition: 
    background-color 0.3s ease,
    transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),
    opacity 0.2s linear;
}

/* Or use 'all' to transition everything */
.box {
  transition: all 0.3s ease;
}
```

#### Timing Functions

Control the speed curve of transitions:

```css
.linear { transition-timing-function: linear; }
.ease { transition-timing-function: ease; } /* Default */
.ease-in { transition-timing-function: ease-in; }
.ease-out { transition-timing-function: ease-out; }
.ease-in-out { transition-timing-function: ease-in-out; }

/* Custom cubic-bezier */
.custom { transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }

/* Steps (no smooth transition) */
.steps { transition-timing-function: steps(4, end); }
```

Experiment with timing functions at **cubic-bezier.com** or **easings.net**.

#### Common Transition Properties

Properties that work well with transitions:
- `opacity`
- `transform` (translate, rotate, scale)
- `background-color`, `color`
- `width`, `height`
- `margin`, `padding`
- `border-color`, `border-width`
- `box-shadow`
- `filter` (blur, brightness, etc.)

**Performance Note:** `transform` and `opacity` are the most performant properties to animate because they only trigger compositing (the final step in rendering), not layout or paint operations. This applies to both transitions and animations. Other properties may cause the browser to recalculate layout (reflow) and repaint the page, which can cause jank and poor performance, especially on mobile devices.

### CSS Animations

**Animations** provide more control than transitions, allowing you to define multiple keyframes and create complex motion sequences.

#### Basic Animation Syntax

**Step 1: Define Keyframes**

```css
@keyframes animation-name {
  from {
    /* Starting styles */
  }
  to {
    /* Ending styles */
  }
}

/* Or use percentages for more control */
@keyframes animation-name {
  0% {
    /* Starting styles */
  }
  50% {
    /* Middle styles */
  }
  100% {
    /* Ending styles */
  }
}
```

**Step 2: Apply Animation**

```css
.element {
  animation: animation-name duration timing-function delay iteration-count direction fill-mode;
}
```

#### Simple Animation Examples

**Fade In:**

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1s ease-in;
}
```

**Slide In:**

```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideIn 0.5s ease-out;
}
```

**Bounce:**

```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.bounce {
  animation: bounce 0.5s ease infinite;
}
```

**Pulse:**

```css
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.pulse {
  animation: pulse 1s ease-in-out infinite;
}
```

**Rotate:**

```css
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading-spinner {
  animation: rotate 1s linear infinite;
}
```

**Color Change:**

```css
@keyframes colorChange {
  0% { background-color: #3498db; }
  25% { background-color: #e74c3c; }
  50% { background-color: #2ecc71; }
  75% { background-color: #f39c12; }
  100% { background-color: #3498db; }
}

.rainbow {
  animation: colorChange 4s ease-in-out infinite;
}
```

#### Animation Properties

**animation-duration:**
```css
.element { animation-duration: 2s; } /* or 2000ms */
```

**animation-timing-function:**
```css
.element { animation-timing-function: ease-in-out; }
```

**animation-delay:**
```css
.element { animation-delay: 0.5s; } /* Wait 0.5s before starting */
```

**animation-iteration-count:**
```css
.element { animation-iteration-count: 3; } /* Run 3 times */
.element { animation-iteration-count: infinite; } /* Run forever */
```

**animation-direction:**
```css
.element { animation-direction: normal; } /* Default */
.element { animation-direction: reverse; } /* Run backwards */
.element { animation-direction: alternate; } /* Forward then backward */
.element { animation-direction: alternate-reverse; } /* Backward then forward */
```

**animation-fill-mode:**
```css
.element { animation-fill-mode: none; } /* Don't apply styles before/after */
.element { animation-fill-mode: forwards; } /* Keep final state */
.element { animation-fill-mode: backwards; } /* Apply first keyframe during delay */
.element { animation-fill-mode: both; } /* Apply both forwards and backwards */
```

**animation-play-state:**
```css
.element { animation-play-state: running; } /* Default */
.element:hover { animation-play-state: paused; } /* Pause on hover */
```

#### Shorthand Animation

```css
.element {
  animation: name duration timing-function delay iteration-count direction fill-mode;
}

/* Example */
.example {
  animation: slideIn 1s ease-out 0.5s 1 normal forwards;
}
```

#### Multiple Animations

Apply multiple animations to one element:

```css
.element {
  animation: 
    rotate 2s linear infinite,
    pulse 1s ease-in-out infinite,
    colorChange 3s ease infinite;
}
```

### Animation Best Practices

**Performance:**
- Prefer animating `transform` and `opacity` for best performance
- Avoid animating properties that trigger layout (width, height, margin, padding)
- Use `will-change` property to hint at upcoming animations (sparingly)

```css
.element {
  will-change: transform, opacity;
}
```

**Accessibility:**
- Respect user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**User Experience:**
- Keep animations subtle and purposeful
- Shorter durations for small UI elements (200-300ms)
- Longer durations for larger movements (500-800ms)
- Don't overuse animations - they should enhance, not distract
- Ensure animations don't interfere with usability

### Combining Transitions and Animations

Use transitions for interactive state changes (hover, focus) and animations for automatic, attention-grabbing effects:

```css
.button {
  /* Transition for hover states */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.button.success {
  /* Animation for success state */
  animation: successPulse 0.6s ease;
}

@keyframes successPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
```

### Animation Libraries

For complex animations, consider using libraries:
- **Animate.css**: Ready-to-use CSS animations
- **Hover.css**: Collection of hover effects
- **AOS (Animate On Scroll)**: Scroll-triggered animations
- **GSAP**: JavaScript animation library (more powerful than CSS)

---

## Key Concepts Summary

### Layout Systems
- **Flexbox**: One-dimensional layout (rows or columns)
- **CSS Grid**: Two-dimensional layout (rows and columns)
- Both can be used together for optimal results

### Visual Enhancements
- **Background Images**: Add depth with images, GIFs, and videos
- **Gradients**: Create color transitions without images
- **Pseudo-selectors**: Style interactive states (`:hover`, `:active`, `:visited`)

### Motion and Interactivity
- **Transitions**: Smooth changes between states
- **Animations**: Complex, multi-step motion sequences
- **Performance**: Prefer `transform` and `opacity` for smoothest animations

### Embedded Content
- **Videos**: YouTube, Vimeo with responsive wrapper
- **Audio**: SoundCloud, Bandcamp players
- **Best practices**: Lazy loading, accessibility, privacy considerations

---

## Homework

The things we learned in class this week are a little less linear, so for this assignment feel free to break away from the styled text document idea we have been working with. Try making a landing page, a looping animation, or just experiment and play with everything we've learned so far.

Not all techniques will be relevant to all projects, try to use **at least 2** of the things we learned this week. Plus anything else you are excited about.

### Requirements

Choose at least two of the following:

1. **Use flex or grid in your layout**
   - Create a page layout using CSS Grid
   - Build a component layout using Flexbox
   - Combine both for a complete page

2. **Use a CSS gradient, or the background-image to add detail**
   - Add a linear or radial gradient as a background
   - Use a background image with proper sizing and positioning
   - Layer multiple backgrounds or gradients

3. **Use a pseudo-selector to add conditional styling to some part of your site**
   - Add hover effects to links or buttons
   - Style visited links differently
   - Use `:focus` for form accessibility

4. **Use a CSS transition to animate an element on :hover**
   - Smooth color changes
   - Transform elements (move, scale, rotate)
   - Animate box-shadow or opacity

5. **Add a CSS animation to your site**
   - Create a looping animation
   - Add entrance animations for elements
   - Build a loading spinner or decorative animation

### Tips for Success

- **Experiment**: This week's techniques are meant for creative exploration
- **Start simple**: Get one technique working before adding complexity
- **Combine techniques**: Gradients + animations, flexbox + transitions
- **Test interactions**: Make sure hover effects feel natural
- **Mind performance**: Smooth animations are better than fancy slow ones
- **Accessibility**: Ensure your site remains usable and readable

### Examples to Inspire You

- A landing page with grid layout, gradient background, and hover effects on buttons
- An animated portfolio with smooth transitions between sections
- A music player interface with flexbox layout and animated controls
- A product showcase with image galleries using CSS Grid
- An experimental art piece with looping animations and color changes

---

## Resources

### Layout Resources
- **Flexbox**:
  - [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  - [Flexbox Froggy](https://flexboxfroggy.com/) - Interactive game to learn Flexbox
  - [Flexbox Defense](http://www.flexboxdefense.com/) - Tower defense game with Flexbox

- **CSS Grid**:
  - [CSS-Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - [Grid Garden](https://cssgridgarden.com/) - Interactive game to learn Grid
  - [Grid by Example](https://gridbyexample.com/) - Examples and patterns

### Animation Resources
- **Timing Functions**:
  - [cubic-bezier.com](https://cubic-bezier.com/) - Create custom timing functions
  - [easings.net](https://easings.net/) - Easing function reference

- **Animation Libraries**:
  - [Animate.css](https://animate.style/) - Ready-to-use animations
  - [Hover.css](https://ianlunn.github.io/Hover/) - Hover effect collection
  - [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library

### Gradient Tools
- [CSS Gradient](https://cssgradient.io/) - Visual gradient generator
- [uiGradients](https://uigradients.com/) - Beautiful gradient collection
- [Gradient Hunt](https://gradienthunt.com/) - Gradient color palettes
- [WebGradients](https://webgradients.com/) - Free gradient collection

### Pseudo-Selector References
- [MDN: Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [MDN: Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

### Embedded Content
- **Video Platforms**:
  - [YouTube Embed Documentation](https://developers.google.com/youtube/player_parameters)
  - [Vimeo Player Documentation](https://developer.vimeo.com/player/sdk)

- **Audio Platforms**:
  - [SoundCloud Widget API](https://developers.soundcloud.com/docs/api/html5-widget)
  - [Bandcamp Embedding Guide](https://get.bandcamp.help/hc/en-us/articles/360007902173-How-do-I-embed-my-music-)

### General CSS Resources
- [MDN Web Docs: CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Comprehensive CSS reference
- [Can I Use](https://caniuse.com/) - Browser support tables
- [CSS-Tricks](https://css-tricks.com/) - Articles, guides, and tutorials

### Accessibility
- [WebAIM](https://webaim.org/) - Web accessibility guidelines
- [The A11Y Project](https://www.a11yproject.com/) - Accessibility resources
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation tool
