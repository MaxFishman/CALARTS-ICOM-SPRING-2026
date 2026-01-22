# Lecture Notes - Week 02

## Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure and content of a webpage using elements.

### What is HTML?
- HTML stands for HyperText Markup Language
- It's not a programming language - it's a markup language
- HTML uses tags to structure content
- Browsers read HTML and render it as visual web pages

## Elements, Tags, and Attributes

### HTML Elements
An HTML element is defined by a start tag, content, and an end tag:
```
<tagname>Content goes here</tagname>
```

### Tags
- Tags are the building blocks of HTML
- Most tags come in pairs: opening tag `<tag>` and closing tag `</tag>`
- Some tags are self-closing (e.g., `<img />`, `<br />`)

### Attributes
- Attributes provide additional information about elements
- Placed inside the opening tag
- Usually come in name/value pairs: `name="value"`
- Example: `<a href="https://example.com">Link</a>`

## Typography Elements

### Headings (h1 - h6)
- `<h1>` through `<h6>` define headings
- `<h1>` is the most important (largest)
- `<h6>` is the least important (smallest)
- Use heading hierarchy properly - don't skip levels
- Only one `<h1>` per page is recommended for SEO

### Paragraphs (p)
- `<p>` defines a paragraph
- Browsers automatically add space before and after paragraphs
- Used for blocks of text

### Emphasis (em and strong)
- `<em>` provides emphasis (usually renders as italic)
- `<strong>` provides strong emphasis (usually renders as bold)
- These have semantic meaning beyond just styling
- Screen readers may interpret them differently

## Layout Elements

### Division (div)
- `<div>` is a generic container element
- Used to group content for styling or layout purposes
- Block-level element (takes full width available)
- No semantic meaning by itself

### Span
- `<span>` is an inline container element
- Used to group inline content for styling
- Doesn't break the flow of text
- No semantic meaning by itself

### Semantic HTML5 Elements
- `<section>` - Defines a section of content
- `<article>` - Defines independent, self-contained content
- `<figure>` - Specifies self-contained content, like images with captions
- `<nav>` - Defines navigation links
- These elements have semantic meaning and improve accessibility

## Attributes with Links and Images

### Links (a and href)
- `<a>` creates hyperlinks
- `href` attribute specifies the URL destination
- Syntax: `<a href="URL">Link Text</a>`
- Can link to:
  - External websites: `<a href="https://example.com">Visit Example</a>`
  - Internal pages: `<a href="about.html">About</a>`
  - Sections on the same page: `<a href="#section-id">Jump to Section</a>`

### Images (img and src)
- `<img>` embeds an image
- `src` attribute specifies the image source (URL or file path)
- `alt` attribute provides alternative text (important for accessibility)
- Self-closing tag: `<img src="image.jpg" alt="Description" />`
- Example: `<img src="logo.png" alt="Company Logo" />`

## Using Web Editors

### Glitch
- Online code editor for web development
- Real-time preview of your website
- Easy to share and collaborate
- Free hosting included
- Great for beginners

### CodePen
- Online code editor focused on front-end development
- Live preview as you type
- Great for experimenting and sharing code snippets
- Community features for inspiration

### Benefits of Web Editors
- No installation required
- Work from any device with internet
- Easy sharing and collaboration
- Instant preview of changes
- Good for learning and prototyping

## Key Concepts

1. **HTML Structure**: HTML documents have a tree-like structure with nested elements
2. **Semantic HTML**: Use elements that describe their meaning (section, article, nav) rather than just divs
3. **Accessibility**: Always include alt text for images, use proper heading hierarchy
4. **Block vs Inline**: Block elements take full width (div, p, h1-h6), inline elements flow with text (span, em, strong, a)
5. **Separation of Concerns**: HTML is for structure, CSS is for styling (comes later)

## Best Practices

- Always close your tags
- Use lowercase for tag names and attributes
- Use semantic elements when possible
- Indent nested elements for readability
- Include alt text for all images
- Use meaningful link text (not "click here")
- Maintain proper heading hierarchy

## Next Steps

- Practice creating HTML documents with different elements
- Experiment with nesting elements
- Create a structured document (resume, flier, etc.)
- Focus on proper HTML structure before worrying about styling

## Resources

- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [Glitch](https://glitch.com/)
- [CodePen](https://codepen.io/)
