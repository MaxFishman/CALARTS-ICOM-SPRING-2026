# Lecture Notes - Week 03

## Introduction to CSS

CSS (Cascading Style Sheets) is the language used to style and layout web pages. While HTML provides the structure and content, CSS controls how that content looks and is presented to users.

### What is CSS?

- **CSS stands for Cascading Style Sheets**
- It describes how HTML elements should be displayed
- CSS can control layout, colors, fonts, spacing, animations, and more
- One CSS file can style hundreds of HTML pages
- CSS saves a lot of work by separating content from presentation

### Why CSS Matters

**Before CSS:**
- All styling was done with HTML attributes and tags
- Each page needed its own styling information
- Making design changes required updating every single page
- Code was messy and hard to maintain

**With CSS:**
- Styling is separated from content
- One CSS file can style an entire website
- Changes in one place update the entire site
- Code is cleaner and more maintainable
- Better performance through caching

### How to Add CSS to HTML

There are three ways to add CSS to your HTML:

1. **Inline CSS**: Using the `style` attribute directly on elements
   ```html
   <p style="color: blue; font-size: 16px;">This is blue text</p>
   ```
   - Quick but not recommended for most use cases
   - Hard to maintain and override
   - Use sparingly, mainly for testing

2. **Internal CSS**: Using a `<style>` tag in the HTML `<head>`
   ```html
   <head>
     <style>
       p {
         color: blue;
         font-size: 16px;
       }
     </style>
   </head>
   ```
   - Good for single-page sites or page-specific styles
   - Keeps CSS in one place within the document

3. **External CSS**: Linking to a separate `.css` file (BEST PRACTICE)
   ```html
   <head>
     <link rel="stylesheet" href="styles.css">
   </head>
   ```
   - Best for multi-page websites
   - Easy to maintain and update
   - Browser can cache the CSS file
   - Recommended approach for most projects

### CSS Syntax

CSS follows a simple pattern:

```css
selector {
  property: value;
  property: value;
}
```

**Components:**
- **Selector**: Targets which HTML elements to style
- **Property**: What aspect to change (color, font-size, margin, etc.)
- **Value**: What to change it to
- **Declaration**: A property-value pair
- **Declaration Block**: All declarations between `{ }`

**Example:**
```css
h1 {
  color: navy;
  font-size: 32px;
  text-align: center;
}
```

## CSS Selectors

Selectors are patterns used to select and target HTML elements you want to style. Understanding selectors is crucial for effective CSS.

### Tag Selectors (Element Selectors)

The most basic selector - targets all elements of a specific HTML tag.

**Syntax:**
```css
tagname {
  /* styles */
}
```

**Examples:**
```css
/* Targets all paragraphs */
p {
  color: gray;
  line-height: 1.6;
}

/* Targets all headings level 1 */
h1 {
  color: navy;
  font-size: 36px;
}

/* Targets all links */
a {
  color: blue;
  text-decoration: none;
}

/* Targets all images */
img {
  max-width: 100%;
  height: auto;
}
```

**When to Use:**
- Applying baseline styles to all elements of a type
- Setting default typography
- Creating consistent spacing

**Pros:**
- Simple and easy to understand
- Good for global styling

**Cons:**
- Not specific - affects ALL elements of that type
- Can be overridden easily by more specific selectors

### Class Selectors

Classes allow you to apply styles to specific elements you choose. You can reuse classes on multiple elements.

**HTML Syntax:**
```html
<div class="card">Content</div>
<p class="highlight">Important text</p>
<div class="card featured">Another card with two classes</div>
```

**CSS Syntax:**
```css
.classname {
  /* styles */
}
```

**Examples:**
```css
/* Targets any element with class="button" */
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
}

/* Targets any element with class="card" */
.card {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* You can apply classes to any HTML element */
.highlight {
  background-color: yellow;
  font-weight: bold;
}
```

**Multiple Classes:**
You can apply multiple classes to one element:
```html
<button class="button primary large">Click Me</button>
```

```css
.button {
  padding: 10px 20px;
  border: none;
}

.primary {
  background-color: blue;
  color: white;
}

.large {
  font-size: 18px;
  padding: 15px 30px;
}
```

**When to Use:**
- Styling specific groups of elements
- Creating reusable style patterns
- Most common selector in modern CSS

**Best Practices:**
- Use descriptive class names (`.error-message` not `.red`)
- Use lowercase with hyphens (`.nav-item` not `.navItem` or `.nav_item`)
- Keep names semantic (describe purpose, not appearance)

### ID Selectors

IDs are unique identifiers for single elements. Each ID should only appear once per page.

**HTML Syntax:**
```html
<div id="header">Header content</div>
<section id="about">About section</section>
```

**CSS Syntax:**
```css
#idname {
  /* styles */
}
```

**Examples:**
```css
/* Targets the element with id="header" */
#header {
  background-color: navy;
  color: white;
  padding: 20px;
}

/* Targets the element with id="main-content" */
#main-content {
  max-width: 1200px;
  margin: 0 auto;
}

#footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 40px;
}
```

**When to Use:**
- Styling unique elements (header, footer, main navigation)
- Creating anchor links within a page
- JavaScript targeting (getElementById)

**Important Notes:**
- IDs have higher specificity than classes
- Each ID should only be used once per page
- Prefer classes over IDs for styling (more flexible)
- Use IDs for unique page landmarks

**Classes vs IDs - Quick Comparison:**

| Feature | Class | ID |
|---------|-------|-----|
| Syntax | `.classname` | `#idname` |
| HTML Usage | Can be used multiple times | Should be unique per page |
| Specificity | Lower | Higher |
| Best For | Reusable styles | Unique elements |
| Recommended | Yes, for most styling | Sparingly, for unique elements |

### Child and Sibling Selectors

These advanced selectors let you target elements based on their relationship to other elements in the HTML structure.

#### Descendant Selector (Space)

Targets elements nested inside another element (at any level).

**Syntax:**
```css
parent descendant {
  /* styles */
}
```

**Examples:**
```css
/* Targets all <p> tags inside <article> tags */
article p {
  line-height: 1.8;
  margin-bottom: 1em;
}

/* Targets all links inside navigation */
nav a {
  color: white;
  text-decoration: none;
}

/* Can chain multiple levels */
header nav ul li a {
  padding: 10px;
}
```

#### Child Selector (>)

Targets **direct children only** (not grandchildren or deeper descendants).

**Syntax:**
```css
parent > child {
  /* styles */
}
```

**Examples:**
```css
/* Only direct <li> children of <ul>, not nested lists */
ul > li {
  list-style-type: square;
}

/* Direct paragraph children of article only */
article > p {
  font-size: 18px;
}
```

**HTML Example:**
```html
<ul>
  <li>This will be styled (direct child)</li>
  <li>This will be styled (direct child)
    <ul>
      <li>This will NOT be styled (grandchild, not direct child)</li>
    </ul>
  </li>
</ul>
```

#### Adjacent Sibling Selector (+)

Targets an element that comes **immediately after** another element (same parent level).

**Syntax:**
```css
element + adjacent-sibling {
  /* styles */
}
```

**Examples:**
```css
/* Paragraph immediately after h2 */
h2 + p {
  font-size: 20px;
  font-weight: bold;
  color: #555;
}

/* Image immediately after a paragraph */
p + img {
  margin-top: 20px;
}
```

**HTML Example:**
```html
<h2>Heading</h2>
<p>This paragraph will be styled (immediately after h2)</p>
<p>This paragraph will NOT be styled (not immediately after h2)</p>
```

#### General Sibling Selector (~)

Targets **all siblings** that come after an element (not just the immediate next one).

**Syntax:**
```css
element ~ siblings {
  /* styles */
}
```

**Examples:**
```css
/* All paragraphs that follow an h2 (at same level) */
h2 ~ p {
  color: gray;
}

/* All images that follow a heading */
h3 ~ img {
  border: 2px solid #ddd;
}
```

#### Combining Selectors

You can combine multiple selectors for more precise targeting:

```css
/* Tag with class */
p.intro {
  font-size: 18px;
}

/* Multiple selectors (comma-separated list) */
h1, h2, h3 {
  font-family: 'Georgia', serif;
  color: navy;
}

/* Complex combinations */
.container > .card p.highlight {
  background-color: yellow;
}
```

### Pseudo-Classes

Pseudo-classes target elements in specific states or positions.

**Common Pseudo-Classes:**

```css
/* Link states */
a:link { color: blue; }          /* Unvisited link */
a:visited { color: purple; }     /* Visited link */
a:hover { color: red; }          /* Mouse over link */
a:active { color: orange; }      /* Link being clicked */

/* Form states */
input:focus {
  border-color: blue;
  outline: 2px solid lightblue;
}

input:disabled {
  background-color: #f0f0f0;
  cursor: not-allowed;
}

/* Position-based */
li:first-child {
  font-weight: bold;
}

li:last-child {
  border-bottom: none;
}

li:nth-child(odd) {
  background-color: #f9f9f9;
}

li:nth-child(even) {
  background-color: white;
}
```

## Color in CSS

Color is one of the most important aspects of web design. CSS provides multiple ways to specify colors.

### Color Properties

**Two Main Color Properties:**

1. **`color`**: Sets the text color
   ```css
   p {
     color: blue;
   }
   ```

2. **`background-color`**: Sets the background color
   ```css
   div {
     background-color: lightgray;
   }
   ```

### Named Colors (Web Colors)

CSS supports 140+ named colors that you can use by name.

**Common Named Colors:**
```css
/* Basic colors */
.red { color: red; }
.blue { color: blue; }
.green { color: green; }
.white { color: white; }
.black { color: black; }

/* Extended colors */
.navy { color: navy; }
.teal { color: teal; }
.coral { color: coral; }
.crimson { color: crimson; }
.dodgerblue { color: dodgerblue; }
.forestgreen { color: forestgreen; }
.gold { color: gold; }
.indigo { color: indigo; }
.lavender { color: lavender; }
.salmon { color: salmon; }
```

**Pros:**
- Easy to remember and type
- Good for quick prototyping
- Readable in code

**Cons:**
- Limited color palette (only 140 colors)
- Not precise enough for brand colors
- Not all names are intuitive

**Full List:** [MDN Web Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color)

### Hexadecimal Color Codes (Hex Codes)

Hex codes are the most common way to specify colors in CSS. They use base-16 (hexadecimal) notation.

**Syntax:**
```css
color: #RRGGBB;
```

Where:
- **RR** = Red value (00 to FF)
- **GG** = Green value (00 to FF)
- **BB** = Blue value (00 to FF)

**Examples:**
```css
/* Pure colors */
.red { color: #FF0000; }      /* Maximum red, no green, no blue */
.green { color: #00FF00; }    /* No red, maximum green, no blue */
.blue { color: #0000FF; }     /* No red, no green, maximum blue */

/* Grayscale (equal values) */
.white { color: #FFFFFF; }    /* Maximum all channels */
.black { color: #000000; }    /* Minimum all channels */
.gray { color: #808080; }     /* Mid-value all channels */
.lightgray { color: #D3D3D3; }

/* Custom colors */
.brand-blue { color: #3B82F6; }
.brand-orange { color: #F97316; }
.text-dark { color: #1F2937; }
```

**Shorthand Hex Codes:**

If both digits in each pair are the same, you can use shorthand:

```css
#RRGGBB → #RGB

/* These are equivalent: */
#FF0000 = #F00  (red)
#00FF00 = #0F0  (green)
#0000FF = #00F  (blue)
#FFFFFF = #FFF  (white)
#000000 = #000  (black)
#333333 = #333  (dark gray)
```

**Understanding Hex Values:**
- `00` = 0 (minimum)
- `FF` = 255 (maximum)
- Range for each channel: 0-255 in decimal, 00-FF in hex
- Total possible colors: 16,777,216 (256 × 256 × 256)

**How to Create Hex Colors:**
1. Use color picker tools (browser DevTools, design software)
2. Use online tools like [colorhunt.co](https://colorhunt.co) or [coolors.co](https://coolors.co)
3. Start with a base and adjust values
4. Copy from design mockups or brand guidelines

**Common Hex Color Patterns:**
```css
/* Blues */
#E0F2FE  /* Very light blue */
#3B82F6  /* Bright blue */
#1E3A8A  /* Dark blue */

/* Grays */
#F9FAFB  /* Almost white */
#6B7280  /* Medium gray */
#111827  /* Almost black */

/* Brand Colors */
#1DA1F2  /* Twitter blue */
#4267B2  /* Facebook blue */
#E4405F  /* Instagram pink */
```

### RGB and RGBA Colors

RGB stands for Red, Green, Blue - the three primary colors of light. RGBA adds an alpha channel for transparency.

**RGB Syntax:**
```css
color: rgb(red, green, blue);
```

Where each value is 0-255:
- 0 = no color
- 255 = maximum color

**Examples:**
```css
/* Same as hex #FF0000 */
.red { color: rgb(255, 0, 0); }

/* Same as hex #00FF00 */
.green { color: rgb(0, 255, 0); }

/* Same as hex #0000FF */
.blue { color: rgb(0, 0, 255); }

/* Gray (equal values) */
.gray { color: rgb(128, 128, 128); }

/* Custom colors */
.purple { color: rgb(128, 0, 128); }
.orange { color: rgb(255, 165, 0); }
```

**RGBA Syntax:**
```css
color: rgba(red, green, blue, alpha);
```

The alpha value controls transparency:
- 0 = completely transparent
- 0.5 = 50% transparent
- 1 = completely opaque (no transparency)

**RGBA Examples:**
```css
/* Semi-transparent black overlay */
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}

/* Slightly transparent white text */
.faded-text {
  color: rgba(255, 255, 255, 0.8);
}

/* Transparent blue box */
.info-box {
  background-color: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.5);
}

/* Glassmorphism effect */
.glass {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}
```

**When to Use RGBA:**
- Creating overlays
- Subtle backgrounds
- Layered designs
- Hover effects with transparency
- Modern UI patterns (glassmorphism, neumorphism)

**RGB vs Hex:**

| Feature | Hex | RGB/RGBA |
|---------|-----|----------|
| Format | `#FF0000` | `rgb(255, 0, 0)` |
| Transparency | No (use RGBA) | Yes (RGBA) |
| Readability | More compact | More intuitive values |
| Best For | Static colors | Dynamic colors, transparency |
| Browser Support | Excellent | Excellent |

### Other Color Formats

**HSL (Hue, Saturation, Lightness):**
```css
/* Hue: 0-360 (color wheel), Saturation: 0-100%, Lightness: 0-100% */
.blue { color: hsl(210, 100%, 50%); }
```

**HSLA (with transparency):**
```css
.transparent-blue { color: hsla(210, 100%, 50%, 0.5); }
```

**Benefits of HSL:**
- More intuitive for designers
- Easy to create color variations
- Adjust lightness/saturation independently

### Color Best Practices

1. **Use Consistent Colors**: Define color variables or use a design system
2. **Ensure Contrast**: Text should be readable (use contrast checkers)
3. **Consider Accessibility**: Color shouldn't be the only way to convey information
4. **Limit Your Palette**: 2-3 primary colors, plus neutrals
5. **Use Transparency Wisely**: RGBA for overlays and subtle effects

**Contrast Checker Tools:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)
- Browser DevTools (built-in accessibility tools)

## Fonts in CSS

Typography is crucial for readability and design. CSS provides powerful font control capabilities.

### Font Properties

**Essential Font Properties:**

```css
.text {
  font-family: Arial, sans-serif;    /* Which font to use */
  font-size: 16px;                    /* Size of text */
  font-weight: bold;                  /* Thickness of text */
  font-style: italic;                 /* Normal or italic */
  line-height: 1.5;                   /* Space between lines */
  letter-spacing: 0.5px;              /* Space between letters */
  text-align: center;                 /* Alignment */
  text-decoration: underline;         /* Underline, line-through, etc. */
  text-transform: uppercase;          /* UPPERCASE, lowercase, capitalize */
  color: #333;                        /* Text color */
}
```

### System Fonts

System fonts are pre-installed on users' devices. They're fast, reliable, and don't require downloading.

**Font Family Property:**
```css
font-family: "Font Name", fallback, generic-family;
```

**Generic Font Families:**

1. **`serif`**: Fonts with decorative strokes
   ```css
   font-family: serif;
   ```
   - Times New Roman, Georgia, Garamond
   - Traditional, formal appearance
   - Good for print-like content

2. **`sans-serif`**: Fonts without decorative strokes
   ```css
   font-family: sans-serif;
   ```
   - Arial, Helvetica, Verdana
   - Modern, clean appearance
   - Best for screens and digital content

3. **`monospace`**: Fixed-width fonts (every character same width)
   ```css
   font-family: monospace;
   ```
   - Courier, Consolas, Monaco
   - Perfect for code display
   - Good for tabular data

4. **`cursive`**: Fonts that look like handwriting
   ```css
   font-family: cursive;
   ```
   - Comic Sans MS, Brush Script
   - Decorative, informal

5. **`fantasy`**: Decorative fonts
   ```css
   font-family: fantasy;
   ```
   - Impact, Papyrus
   - Highly stylized, use sparingly

**Common System Font Stacks:**

```css
/* Modern sans-serif stack */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
               "Helvetica Neue", Arial, sans-serif;
}

/* Serif stack */
.article {
  font-family: Georgia, "Times New Roman", Times, serif;
}

/* Monospace stack */
code {
  font-family: "Courier New", Courier, monospace;
}

/* System UI font */
.button {
  font-family: system-ui, -apple-system, sans-serif;
}
```

**Why Font Stacks?**
- Different operating systems have different fonts
- Browser tries fonts left to right until it finds one installed
- Always end with a generic family as final fallback

**Operating System Fonts:**

| OS | Sans-Serif | Serif | Monospace |
|-----|------------|-------|-----------|
| macOS | SF Pro, Helvetica | Times | SF Mono, Monaco |
| Windows | Segoe UI, Arial | Times New Roman | Consolas, Courier New |
| Linux | Ubuntu, Roboto | DejaVu Serif | DejaVu Sans Mono |
| Android | Roboto | Noto Serif | Roboto Mono |
| iOS | SF Pro | Times | SF Mono, Courier |

### Web Fonts

Web fonts are custom fonts that download when a user visits your site, ensuring everyone sees the same typography.

**Benefits:**
- Consistent typography across all devices
- Unique, branded look
- Better design control
- Access to thousands of fonts

**Drawbacks:**
- Requires downloading (affects page load speed)
- Can be blocked by ad blockers or privacy tools
- Need to handle loading states
- Licensing considerations

**How Web Fonts Work:**
1. Your CSS references a font file
2. Browser downloads the font when page loads
3. Browser applies the font once downloaded
4. If download fails, fallback font is used

**@font-face Rule:**

The `@font-face` rule allows you to define and use custom fonts:

```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('fonts/mycustomfont.woff2') format('woff2'),
       url('fonts/mycustomfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap; /* Controls loading behavior */
}

body {
  font-family: 'MyCustomFont', Arial, sans-serif;
}
```

**Font File Formats:**
- **WOFF2** (Web Open Font Format 2): Best compression, modern browsers
- **WOFF**: Good compression, wider browser support
- **TTF/OTF**: Original formats, larger file sizes
- **EOT**: Internet Explorer only (deprecated)

**Recommended Format Order:**
```css
@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2'),  /* Try WOFF2 first */
       url('myfont.woff') format('woff'),    /* Fallback to WOFF */
       url('myfont.ttf') format('truetype'); /* Final fallback */
}
```

**Font Display Property:**
```css
font-display: swap;    /* Show fallback, then swap to web font */
font-display: block;   /* Wait for font, show nothing until loaded */
font-display: fallback; /* Brief wait, then show fallback */
font-display: optional; /* Use web font only if cached */
```

### Loading Fonts from Google Fonts

Google Fonts is a free library of open-source fonts that's easy to use and reliable.

**Benefits of Google Fonts:**
- Completely free (open source)
- Easy to implement
- Reliable hosting (Google's CDN)
- Fast delivery
- 1000+ font families
- Optimized loading
- No download or licensing needed

**How to Use Google Fonts (3 Methods):**

#### Method 1: Link in HTML (Easiest)

1. **Visit [fonts.google.com](https://fonts.google.com)**
2. **Select a font** (e.g., "Roboto")
3. **Click "Get font" or "+" button**
4. **Click "Get embed code"**
5. **Copy the `<link>` tag**
6. **Paste in your HTML `<head>`:**

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>This will use Roboto</h1>
</body>
</html>
```

7. **Use in your CSS:**
```css
body {
  font-family: 'Roboto', sans-serif;
}
```

#### Method 2: @import in CSS

1. **Get the @import code from Google Fonts**
2. **Add to the top of your CSS file:**

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
```

**Note:** `@import` is slightly slower than `<link>`, but keeps all styling in CSS.

#### Method 3: Download and Self-Host

1. **Download font files from Google Fonts**
2. **Add to your project's font folder**
3. **Use @font-face:**

```css
@font-face {
  font-family: 'Roboto';
  src: url('fonts/Roboto-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

body {
  font-family: 'Roboto', sans-serif;
}
```

**Loading Multiple Fonts:**

```html
<!-- Multiple fonts in one request -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet">
```

```css
body {
  font-family: 'Roboto', sans-serif;
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
}
```

**Font Weights with Google Fonts:**

When selecting fonts, choose specific weights you need:

```html
<!-- Regular (400) and Bold (700) -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

```css
p {
  font-family: 'Roboto', sans-serif;
  font-weight: 400; /* Regular */
}

strong {
  font-weight: 700; /* Bold */
}
```

**Popular Google Font Combinations:**

```css
/* Modern & Clean */
h1, h2, h3 {
  font-family: 'Montserrat', sans-serif;
}
body {
  font-family: 'Open Sans', sans-serif;
}

/* Professional & Elegant */
h1, h2, h3 {
  font-family: 'Playfair Display', serif;
}
body {
  font-family: 'Roboto', sans-serif;
}

/* Friendly & Approachable */
h1, h2, h3 {
  font-family: 'Poppins', sans-serif;
}
body {
  font-family: 'Lato', sans-serif;
}
```

**Performance Tips:**
- Only load weights you actually use
- Limit to 2-3 font families maximum
- Use `&display=swap` in URL for better loading
- Consider using `preconnect` to speed up connection

```html
<!-- Preconnect for faster loading -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### Creating a Unique Font with Calligraphr

[Calligraphr](https://www.calligraphr.com) is an amazing tool that lets you turn your handwriting into a custom font!

**What is Calligraphr?**
- Web-based tool for creating custom fonts
- Converts your handwriting to a usable font file
- Free tier available (up to 75 characters)
- Pro version for full character sets and features

**How to Create Your Own Font:**

**Step 1: Register**
- Visit [calligraphr.com](https://www.calligraphr.com)
- Create a free account

**Step 2: Create a Template**
- Click "Start App"
- Choose "Templates"
- Select language (English)
- Choose character set (Minimal Free or complete)
- Download PDF template

**Step 3: Fill Out Template**
- Print the template
- Use a black pen or marker (not pencil)
- Write each character clearly in the boxes
- Keep consistent size and alignment
- Fill in uppercase, lowercase, numbers, punctuation

**Tips for Good Results:**
- Write naturally - don't overthink it
- Stay within the boxes
- Use consistent pen thickness
- Write on a flat, stable surface
- Scan at 300 DPI or higher
- Use high contrast (black on white)

**Step 4: Upload Template**
- Scan your completed template
- Upload to Calligraphr
- Click "Add characters to your font"
- Review each character
- Make adjustments if needed (trim, align)

**Step 5: Build Your Font**
- Click "Build Font"
- Name your font
- Choose format (TTF recommended)
- Download your font file!

**Step 6: Install and Use**

**On Your Computer:**
- Double-click the downloaded .ttf file
- Click "Install"
- Font is now available in all applications

**On Your Website:**

```css
@font-face {
  font-family: 'MyHandwriting';
  src: url('fonts/MyHandwriting.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.personal-note {
  font-family: 'MyHandwriting', cursive;
  font-size: 24px;
  color: #333;
}
```

```html
<p class="personal-note">This is in my handwriting!</p>
```

**Creative Uses:**
- Personal website signatures
- Custom headers
- Unique branding
- Art projects
- Greeting cards
- Personal blogs
- Portfolio pieces

**Pro Tips:**
- Create multiple versions for variation
- Use for accent text, not body copy
- Larger sizes work better for handwriting fonts
- Add letter spacing for readability: `letter-spacing: 1px;`
- Consider line-height: `line-height: 1.8;`

**Example CSS for Handwriting Font:**
```css
@font-face {
  font-family: 'MyHandwriting';
  src: url('fonts/MyHandwriting.woff2') format('woff2'),
       url('fonts/MyHandwriting.ttf') format('truetype');
}

.signature {
  font-family: 'MyHandwriting', cursive;
  font-size: 32px;
  color: #2c3e50;
  letter-spacing: 1px;
  line-height: 1.8;
}

.handwritten-note {
  font-family: 'MyHandwriting', cursive;
  font-size: 20px;
  background-color: #fffacd;
  padding: 20px;
  border-left: 4px solid #f39c12;
  line-height: 2;
}
```

## CSS Box Model

Every HTML element is rendered as a rectangular box. The CSS Box Model describes how these boxes are sized and spaced.

### Understanding the Box Model

The box model consists of four layers (from inside out):

1. **Content**: The actual content (text, images, etc.)
2. **Padding**: Space between content and border
3. **Border**: Line around the padding
4. **Margin**: Space outside the border

**Visual Representation:**
```
+---------------------------+
|         Margin            |
|  +---------------------+  |
|  |      Border         |  |
|  |  +---------------+  |  |
|  |  |   Padding     |  |  |
|  |  |  +---------+  |  |  |
|  |  |  | Content |  |  |  |
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

### Padding

Padding creates space between the content and the border, inside the element.

**Syntax:**
```css
/* All four sides */
padding: 20px;

/* Vertical | Horizontal */
padding: 10px 20px;

/* Top | Horizontal | Bottom */
padding: 10px 20px 15px;

/* Top | Right | Bottom | Left (clockwise) */
padding: 10px 20px 15px 25px;
```

**Individual Sides:**
```css
padding-top: 10px;
padding-right: 20px;
padding-bottom: 15px;
padding-left: 25px;
```

**Examples:**
```css
/* Card with consistent padding */
.card {
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
}

/* Button with horizontal padding */
.button {
  padding: 12px 24px;
  background-color: blue;
  color: white;
}

/* Header with different top/bottom padding */
header {
  padding: 40px 20px;
}

/* Different padding on each side */
.sidebar {
  padding-top: 20px;
  padding-right: 15px;
  padding-bottom: 20px;
  padding-left: 30px;
}
```

**When to Use Padding:**
- Creating space inside elements
- Making clickable areas larger (buttons, links)
- Adding breathing room to content
- Keeping text away from borders

### Margin

Margin creates space outside the element, between it and other elements.

**Syntax:**
```css
/* Same syntax as padding */
margin: 20px;                    /* All sides */
margin: 10px 20px;               /* Vertical | Horizontal */
margin: 10px 20px 15px;          /* Top | Horizontal | Bottom */
margin: 10px 20px 15px 25px;    /* Top | Right | Bottom | Left */
```

**Individual Sides:**
```css
margin-top: 10px;
margin-right: 20px;
margin-bottom: 15px;
margin-left: 25px;
```

**Special Values:**

**`auto` - Centering:**
```css
/* Center a block element horizontally */
.container {
  width: 800px;
  margin: 0 auto;  /* 0 top/bottom, auto left/right */
}
```

**Negative Margins:**
```css
/* Pull element up by 20px */
.overlap {
  margin-top: -20px;
}

/* Overlap elements */
.image {
  margin-bottom: -50px;
  position: relative;
  z-index: 1;
}
```

**Examples:**
```css
/* Space between paragraphs */
p {
  margin-bottom: 16px;
}

/* Space between sections */
section {
  margin-bottom: 60px;
}

/* Remove default margins */
h1 {
  margin: 0;
}

/* Center content */
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
```

**Margin Collapse:**

A unique behavior where vertical margins can combine (collapse):

```css
/* These two elements are 30px apart, not 50px! */
.box1 {
  margin-bottom: 30px;
}

.box2 {
  margin-top: 20px;
}
/* Actual spacing: 30px (larger of the two) */
```

**Preventing Margin Collapse:**
- Add padding or border to parent
- Use flexbox or grid
- Add `overflow: hidden` to parent

### Border

Border is a line drawn around the padding and content.

**Border Properties:**

1. **`border-width`**: Thickness of the border
   ```css
   border-width: 1px;
   border-width: thin;   /* ~1px */
   border-width: medium; /* ~3px */
   border-width: thick;  /* ~5px */
   ```

2. **`border-style`**: Type of line
   ```css
   border-style: solid;   /* ─── */
   border-style: dashed;  /* - - - */
   border-style: dotted;  /* ··· */
   border-style: double;  /* ═══ */
   border-style: groove;  /* 3D grooved */
   border-style: ridge;   /* 3D ridged */
   border-style: inset;   /* 3D inset */
   border-style: outset;  /* 3D outset */
   border-style: none;    /* No border */
   ```

3. **`border-color`**: Color of the border
   ```css
   border-color: black;
   border-color: #3B82F6;
   border-color: rgb(255, 0, 0);
   ```

**Shorthand:**
```css
/* width | style | color */
border: 1px solid black;
border: 2px dashed blue;
border: 3px dotted #ccc;
```

**Individual Sides:**
```css
/* Different borders on each side */
border-top: 2px solid red;
border-right: 1px solid blue;
border-bottom: 3px dashed green;
border-left: 1px solid blue;

/* Or using full properties */
border-top-width: 2px;
border-top-style: solid;
border-top-color: red;
```

**Border Radius (Rounded Corners):**
```css
/* All corners */
border-radius: 5px;

/* Top-left, Top-right, Bottom-right, Bottom-left */
border-radius: 10px 5px 10px 5px;

/* Circle (when width = height) */
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

/* Pill shape */
.pill {
  border-radius: 25px;
}

/* Individual corners */
border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom-right-radius: 0;
border-bottom-left-radius: 0;
```

**Examples:**
```css
/* Card with subtle border */
.card {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
}

/* Button with border */
.button {
  border: 2px solid #3B82F6;
  background-color: white;
  color: #3B82F6;
  padding: 10px 20px;
  border-radius: 4px;
}

/* Image with thick border */
img {
  border: 5px solid white;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

/* Bottom border only (underline effect) */
.section-title {
  border-bottom: 3px solid #3B82F6;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

/* Dashed outline */
.dashed-box {
  border: 2px dashed #999;
  padding: 15px;
}
```

### Box Sizing

By default, width and height only apply to content. Padding and border are added on top!

**Default Box Model (content-box):**
```css
.box {
  width: 200px;
  padding: 20px;
  border: 1px solid black;
}
/* Total width: 200 + 40 (padding) + 2 (border) = 242px */
```

**Better Box Model (border-box):**
```css
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 1px solid black;
}
/* Total width: 200px (padding and border included!) */
```

**Best Practice - Apply to Everything:**
```css
/* At the top of your CSS file */
* {
  box-sizing: border-box;
}

/* Or more specific */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

### Box Model in Practice

**Example 1: Card Component**
```css
.card {
  /* Content area */
  width: 300px;
  
  /* Padding - space inside */
  padding: 20px;
  
  /* Border */
  border: 1px solid #ddd;
  border-radius: 8px;
  
  /* Margin - space outside */
  margin: 20px;
  
  /* Background */
  background-color: white;
  
  /* Shadow for depth */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

**Example 2: Button**
```css
.button {
  /* Inline-block to allow padding */
  display: inline-block;
  
  /* Padding makes clickable area larger */
  padding: 12px 24px;
  
  /* Border */
  border: 2px solid #3B82F6;
  border-radius: 4px;
  
  /* Margin for spacing */
  margin: 10px 5px;
  
  /* Colors */
  background-color: #3B82F6;
  color: white;
  
  /* Remove underline on links */
  text-decoration: none;
}
```

**Example 3: Page Layout**
```css
body {
  /* Remove default margin */
  margin: 0;
  padding: 0;
}

.container {
  /* Max width with auto margins to center */
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section {
  /* Vertical spacing between sections */
  margin-bottom: 40px;
  
  /* Internal spacing */
  padding: 30px;
  
  /* Visual separation */
  border-bottom: 1px solid #e5e7eb;
}
```

### Debugging the Box Model

Use browser DevTools to visualize the box model:

1. **Right-click element → Inspect**
2. **Look at the "Computed" or "Layout" tab**
3. **See visual diagram of margin, border, padding, content**
4. **Hover over diagram sections to highlight on page**

**Chrome DevTools Box Model:**
- Blue = Content
- Green = Padding
- Yellow/Gold = Border
- Orange = Margin

## Key Concepts

1. **CSS Separates Content from Presentation**: HTML for structure, CSS for styling
2. **Specificity Matters**: More specific selectors override less specific ones (ID > Class > Tag)
3. **Cascading**: Styles cascade from parent to child elements
4. **Box Model**: Every element is a rectangular box with content, padding, border, and margin
5. **Color Systems**: Hex, RGB/RGBA, HSL/HSLA all describe the same colors differently
6. **Font Loading**: Web fonts require download time, use fallbacks
7. **Selectors are Powerful**: Combine selectors for precise targeting

## Best Practices

1. **External CSS Files**: Keep CSS separate from HTML
2. **Use Classes**: More flexible than IDs for styling
3. **Semantic Naming**: Name classes by purpose, not appearance (`.error` not `.red`)
4. **Mobile-First**: Start with mobile styles, enhance for larger screens
5. **Limit Font Files**: Too many custom fonts slow page load
6. **Ensure Contrast**: Text must be readable against backgrounds
7. **Use box-sizing: border-box**: Makes sizing more intuitive
8. **Comment Your CSS**: Explain complex or non-obvious styling
9. **Organize Your Code**: Group related styles together
10. **Test in Multiple Browsers**: Ensure consistent appearance

## Common Patterns

**Centering Elements:**
```css
/* Center block element */
.container {
  width: 80%;
  margin: 0 auto;
}

/* Center text */
.text-center {
  text-align: center;
}
```

**Buttons:**
```css
.button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #3B82F6;
  color: white;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
}

.button:hover {
  background-color: #2563EB;
}
```

**Cards:**
```css
.card {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
```

## Resources

### Official Documentation
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3C CSS Specifications](https://www.w3.org/Style/CSS/)
- [Can I Use](https://caniuse.com/) - Browser compatibility tables

### Learning Resources
- [CSS-Tricks](https://css-tricks.com/) - Tutorials and guides
- [W3Schools CSS](https://www.w3schools.com/css/) - Interactive tutorials
- [Flexbox Froggy](https://flexboxfroggy.com/) - Learn flexbox through games
- [CSS Grid Garden](https://cssgridgarden.com/) - Learn grid through games

### Tools
- [Google Fonts](https://fonts.google.com/) - Free web fonts
- [Calligraphr](https://www.calligraphr.com/) - Create custom fonts
- [Coolors](https://coolors.co/) - Color palette generator
- [Color Hunt](https://colorhunt.co/) - Color palette inspiration
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Color Resources
- [Adobe Color](https://color.adobe.com/) - Color wheel and schemes
- [Paletton](https://paletton.com/) - Color scheme designer
- [Material Design Colors](https://materialui.co/colors/) - Google's color system

### Font Resources
- [Font Squirrel](https://www.fontsquirrel.com/) - Free fonts for commercial use
- [DaFont](https://www.dafont.com/) - Large collection of fonts
- [Font Pair](https://fontpair.co/) - Font pairing suggestions

### Browser DevTools
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
