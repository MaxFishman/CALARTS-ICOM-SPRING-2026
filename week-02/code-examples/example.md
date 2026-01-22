# Code Examples - Week 02

## HTML Typography Examples

### Headings

```html
<h1>This is a Main Heading (h1)</h1>
<h2>This is a Subheading (h2)</h2>
<h3>This is a Sub-subheading (h3)</h3>
<h4>This is a Level 4 Heading (h4)</h4>
<h5>This is a Level 5 Heading (h5)</h5>
<h6>This is a Level 6 Heading (h6)</h6>
```

### Paragraphs

```html
<p>This is a paragraph. Paragraphs are used to organize text into blocks. 
Browsers automatically add space before and after paragraphs to make them distinct.</p>

<p>Here is another paragraph. You can have multiple paragraphs in your document,
and each one will be separated by default spacing.</p>
```

### Emphasis

```html
<p>This text has <em>emphasis</em> which typically renders as italic.</p>

<p>This text has <strong>strong emphasis</strong> which typically renders as bold.</p>

<p>You can also <strong><em>combine them</em></strong> for extra emphasis!</p>
```

## HTML Layout Examples

### Division (div)

```html
<div>
  <h2>Section Title</h2>
  <p>This div contains a heading and a paragraph.</p>
  <p>Divs are used to group content together.</p>
</div>

<div>
  <h2>Another Section</h2>
  <p>Each div can be styled independently using CSS.</p>
</div>
```

### Span

```html
<p>This paragraph has a <span>word wrapped in a span</span> element.</p>

<p>You can use span to <span>style specific words</span> or 
<span>phrases within text</span> without breaking the flow.</p>
```

### Semantic HTML5 Elements

```html
<!-- Navigation section -->
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>

<!-- Article with sections -->
<article>
  <h1>Article Title</h1>
  
  <section>
    <h2>Introduction</h2>
    <p>This section contains the introduction.</p>
  </section>
  
  <section>
    <h2>Main Content</h2>
    <p>This section contains the main content.</p>
  </section>
</article>

<!-- Figure with caption -->
<figure>
  <img src="chart.png" alt="Sales Chart">
  <figcaption>Figure 1: Annual Sales Data</figcaption>
</figure>
```

## Links and Images Examples

### Links (Anchor Tags)

```html
<!-- External link -->
<a href="https://www.google.com">Visit Google</a>

<!-- Link to another page in your site -->
<a href="about.html">About Us</a>

<!-- Link to a section on the same page -->
<a href="#contact">Jump to Contact Section</a>

<!-- Link that opens in a new tab -->
<a href="https://www.github.com" target="_blank">Visit GitHub</a>
```

### Images

```html
<!-- Basic image -->
<img src="photo.jpg" alt="A beautiful sunset">

<!-- Image with width and height -->
<img src="logo.png" alt="Company Logo" width="200" height="100">

<!-- Image from external source -->
<img src="https://via.placeholder.com/300" alt="Placeholder Image">
```

### Images with Links

```html
<!-- Clickable image -->
<a href="https://www.example.com">
  <img src="banner.jpg" alt="Click to visit our site">
</a>
```

## Tips for Your Homework

1. **Start with a basic structure**: Use the document examples above as templates
2. **Use proper heading hierarchy**: Start with h1, then h2, then h3, etc.
3. **Group related content**: Use div, section, or article tags to organize
4. **Add emphasis**: Use em and strong to highlight important text
5. **Test your links**: Make sure href attributes have valid URLs
6. **Include alt text**: Always describe your images with alt attributes
7. **Indent your code**: Make it readable by indenting nested elements

## Common Mistakes to Avoid

- Forgetting to close tags
- Using multiple h1 tags on one page
- Not including alt text on images
- Broken links (check your href values)
- Skipping heading levels (h1 → h3 without h2)
- Using divs when semantic elements would be better
