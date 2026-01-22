# Code Examples - Week 03: CSS

This document contains practical code examples demonstrating CSS concepts from Week 03.

## Table of Contents
1. [Basic CSS Setup](#basic-css-setup)
2. [Selector Examples](#selector-examples)
3. [Color Examples](#color-examples)
4. [Font Examples](#font-examples)
5. [Box Model Examples](#box-model-examples)
6. [Complete Page Examples](#complete-page-examples)

---

## Basic CSS Setup

### Linking External CSS

**index.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My CSS Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to CSS!</h1>
  <p>This page is styled with external CSS.</p>
</body>
</html>
```

**styles.css:**
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
}

h1 {
  color: #2c3e50;
}

p {
  color: #34495e;
  line-height: 1.6;
}
```

---

## Selector Examples

### Tag Selectors

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* All paragraphs will be styled */
    p {
      color: #333;
      font-size: 16px;
      line-height: 1.6;
    }
    
    /* All headings will be styled */
    h2 {
      color: #2c3e50;
      border-bottom: 2px solid #3498db;
      padding-bottom: 10px;
    }
    
    /* All links will be styled */
    a {
      color: #3498db;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h2>About CSS</h2>
  <p>CSS stands for Cascading Style Sheets.</p>
  <p>It's used to style web pages.</p>
  <a href="#">Learn more about CSS</a>
</body>
</html>
```

### Class Selectors

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Button class - can be used on any element */
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #3498db;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      border: none;
      cursor: pointer;
    }
    
    .button:hover {
      background-color: #2980b9;
    }
    
    /* Card class for content boxes */
    .card {
      background-color: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    /* Highlight class for important text */
    .highlight {
      background-color: #fff3cd;
      padding: 2px 6px;
      border-radius: 3px;
    }
    
    /* Alert variations */
    .alert {
      padding: 15px;
      margin-bottom: 20px;
      border-radius: 4px;
    }
    
    .alert-info {
      background-color: #d1ecf1;
      border: 1px solid #bee5eb;
      color: #0c5460;
    }
    
    .alert-success {
      background-color: #d4edda;
      border: 1px solid #c3e6cb;
      color: #155724;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Welcome!</h2>
    <p>This is a <span class="highlight">card component</span> styled with CSS.</p>
    <a href="#" class="button">Click Me</a>
  </div>
  
  <div class="alert alert-info">
    This is an informational alert!
  </div>
  
  <div class="alert alert-success">
    Success! Your changes have been saved.
  </div>
</body>
</html>
```

### ID Selectors

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Header styling */
    #header {
      background-color: #2c3e50;
      color: white;
      padding: 20px;
      text-align: center;
    }
    
    /* Main content area */
    #main-content {
      max-width: 800px;
      margin: 20px auto;
      padding: 20px;
    }
    
    /* Footer styling */
    #footer {
      background-color: #34495e;
      color: white;
      text-align: center;
      padding: 20px;
      margin-top: 40px;
    }
  </style>
</head>
<body>
  <header id="header">
    <h1>My Website</h1>
  </header>
  
  <main id="main-content">
    <h2>Welcome</h2>
    <p>This is the main content area.</p>
  </main>
  
  <footer id="footer">
    <p>&copy; 2026 My Website. All rights reserved.</p>
  </footer>
</body>
</html>
```

### Child and Sibling Selectors

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Descendant selector - all links inside nav */
    nav a {
      color: white;
      text-decoration: none;
      padding: 10px;
    }
    
    /* Child selector - direct li children only */
    ul > li {
      list-style-type: square;
      margin-bottom: 10px;
    }
    
    /* Adjacent sibling - paragraph immediately after h2 */
    h2 + p {
      font-size: 18px;
      font-weight: bold;
      color: #555;
    }
    
    /* General sibling - all paragraphs after h2 */
    h2 ~ p {
      color: #666;
    }
    
    /* Combining selectors */
    article > h3 + p {
      font-style: italic;
    }
  </style>
</head>
<body>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
  
  <article>
    <h2>Article Title</h2>
    <p>This paragraph is styled differently (adjacent to h2).</p>
    <p>This paragraph also gets styles (general sibling of h2).</p>
    <p>So does this one.</p>
    
    <h3>Subsection</h3>
    <p>This is italic (adjacent to h3 inside article).</p>
  </article>
  
  <ul>
    <li>Item 1 (direct child - square bullet)</li>
    <li>Item 2
      <ul>
        <li>Nested item (not a direct child of parent ul)</li>
      </ul>
    </li>
  </ul>
</body>
</html>
```

---

## Color Examples

### Named Colors, Hex, RGB, and RGBA

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .color-demo {
      padding: 20px;
      margin: 10px;
      border-radius: 8px;
      color: white;
      font-weight: bold;
    }
    
    /* Named color */
    .named-color {
      background-color: tomato;
    }
    
    /* Hex color */
    .hex-color {
      background-color: #3498db;
    }
    
    /* Hex shorthand */
    .hex-short {
      background-color: #f39;  /* Same as #ff3399 */
    }
    
    /* RGB color */
    .rgb-color {
      background-color: rgb(46, 204, 113);
    }
    
    /* RGBA with transparency */
    .rgba-color {
      background-color: rgba(231, 76, 60, 0.7);
    }
    
    /* Transparent overlay example */
    .overlay-demo {
      position: relative;
      background-image: url('https://via.placeholder.com/400x200');
      height: 200px;
      margin: 20px;
    }
    
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
    }
    
    /* Color combinations */
    .color-scheme {
      padding: 40px;
      margin: 20px;
    }
    
    .blue-scheme {
      background-color: #e3f2fd;  /* Light blue background */
      color: #1565c0;             /* Dark blue text */
      border-left: 4px solid #2196f3;  /* Medium blue border */
    }
  </style>
</head>
<body>
  <h1>Color Examples</h1>
  
  <div class="color-demo named-color">Named Color: tomato</div>
  <div class="color-demo hex-color">Hex Color: #3498db</div>
  <div class="color-demo hex-short">Hex Shorthand: #f39</div>
  <div class="color-demo rgb-color">RGB: rgb(46, 204, 113)</div>
  <div class="color-demo rgba-color">RGBA: rgba(231, 76, 60, 0.7)</div>
  
  <div class="overlay-demo">
    <div class="overlay">Transparent Overlay</div>
  </div>
  
  <div class="color-scheme blue-scheme">
    <h2>Color Scheme Example</h2>
    <p>This uses a harmonious blue color palette.</p>
  </div>
</body>
</html>
```

### Gradients (Bonus)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .gradient-box {
      height: 150px;
      margin: 20px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 20px;
      font-weight: bold;
    }
    
    .gradient-1 {
      background: linear-gradient(to right, #667eea, #764ba2);
    }
    
    .gradient-2 {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    }
    
    .gradient-3 {
      background: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);
    }
  </style>
</head>
<body>
  <div class="gradient-box gradient-1">Purple Gradient</div>
  <div class="gradient-box gradient-2">Pink to Red</div>
  <div class="gradient-box gradient-3">Blue Gradient</div>
</body>
</html>
```

---

## Font Examples

### System Fonts

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .font-demo {
      padding: 20px;
      margin: 10px;
      background-color: #f8f9fa;
      border-left: 4px solid #007bff;
    }
    
    .sans-serif {
      font-family: Arial, Helvetica, sans-serif;
    }
    
    .serif {
      font-family: Georgia, "Times New Roman", serif;
    }
    
    .monospace {
      font-family: "Courier New", Courier, monospace;
    }
    
    .system-ui {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    
    /* Font properties */
    .font-styles {
      font-size: 18px;
      font-weight: bold;
      font-style: italic;
      line-height: 1.6;
      letter-spacing: 1px;
    }
    
    /* Text transformations */
    .uppercase {
      text-transform: uppercase;
    }
    
    .capitalize {
      text-transform: capitalize;
    }
  </style>
</head>
<body>
  <div class="font-demo sans-serif">
    <strong>Sans-serif:</strong> This is Arial or Helvetica font
  </div>
  
  <div class="font-demo serif">
    <strong>Serif:</strong> This is Georgia or Times New Roman font
  </div>
  
  <div class="font-demo monospace">
    <strong>Monospace:</strong> This is Courier New font (good for code)
  </div>
  
  <div class="font-demo system-ui">
    <strong>System UI:</strong> This uses your operating system's default font
  </div>
  
  <div class="font-demo font-styles">
    Font with multiple style properties applied
  </div>
  
  <div class="font-demo uppercase">
    this text will be uppercase
  </div>
  
  <div class="font-demo capitalize">
    this text will be capitalized
  </div>
</body>
</html>
```

### Google Fonts

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Load Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:wght@400;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      padding: 20px;
      line-height: 1.6;
    }
    
    h1, h2, h3 {
      font-family: 'Playfair Display', serif;
      color: #2c3e50;
    }
    
    .hero {
      font-family: 'Poppins', sans-serif;
      font-size: 48px;
      font-weight: 600;
      text-align: center;
      margin: 40px 0;
      color: #3498db;
    }
    
    .subtitle {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      color: #7f8c8d;
      text-align: center;
    }
    
    .elegant-text {
      font-family: 'Playfair Display', serif;
      font-size: 24px;
      font-weight: 400;
      line-height: 1.8;
      color: #34495e;
    }
  </style>
</head>
<body>
  <div class="hero">Beautiful Typography</div>
  <p class="subtitle">Using Google Fonts for modern web design</p>
  
  <h1>Playfair Display Heading</h1>
  <p>This body text uses Roboto, a clean and modern sans-serif font.</p>
  
  <p class="elegant-text">
    This paragraph uses Playfair Display for an elegant, 
    serif look that's perfect for longer form content.
  </p>
  
  <h2>Font Pairing</h2>
  <p>Combining Playfair Display (serif) for headings with Roboto (sans-serif) 
  for body text creates visual hierarchy and interest.</p>
</body>
</html>
```

### Custom Font with @font-face

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Define custom font */
    @font-face {
      font-family: 'MyHandwriting';
      src: url('fonts/MyHandwriting.woff2') format('woff2'),
           url('fonts/MyHandwriting.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    
    .signature {
      font-family: 'MyHandwriting', cursive;
      font-size: 32px;
      color: #2c3e50;
      margin: 20px 0;
    }
    
    .handwritten-note {
      font-family: 'MyHandwriting', cursive;
      font-size: 24px;
      background-color: #fff9e6;
      padding: 20px;
      border-left: 4px solid #f39c12;
      line-height: 2;
      color: #333;
    }
  </style>
</head>
<body>
  <h1>Custom Font Demo</h1>
  <p>Regular text in Arial.</p>
  
  <div class="signature">John Doe</div>
  
  <div class="handwritten-note">
    This looks like handwriting because it uses a custom font 
    created with Calligraphr!
  </div>
</body>
</html>
```

---

## Box Model Examples

### Padding Examples

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      background-color: #3498db;
      color: white;
      margin: 10px;
      border: 2px solid #2980b9;
    }
    
    .padding-all {
      padding: 20px;
    }
    
    .padding-vertical-horizontal {
      padding: 10px 30px; /* 10px top/bottom, 30px left/right */
    }
    
    .padding-individual {
      padding-top: 5px;
      padding-right: 15px;
      padding-bottom: 25px;
      padding-left: 35px;
    }
    
    .no-padding {
      padding: 0;
    }
  </style>
</head>
<body>
  <div class="box padding-all">
    padding: 20px (all sides equal)
  </div>
  
  <div class="box padding-vertical-horizontal">
    padding: 10px 30px (vertical | horizontal)
  </div>
  
  <div class="box padding-individual">
    Different padding on each side
  </div>
  
  <div class="box no-padding">
    No padding
  </div>
</body>
</html>
```

### Margin Examples

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: #f5f5f5;
    }
    
    .box {
      background-color: #e74c3c;
      color: white;
      padding: 20px;
      width: 200px;
    }
    
    .margin-all {
      margin: 20px;
    }
    
    .margin-centered {
      margin: 20px auto; /* Center horizontally */
    }
    
    .margin-bottom {
      margin-bottom: 40px;
    }
    
    .no-margin {
      margin: 0;
    }
  </style>
</head>
<body>
  <div class="box margin-all">
    margin: 20px
  </div>
  
  <div class="box margin-centered">
    margin: 20px auto (centered)
  </div>
  
  <div class="box margin-bottom">
    margin-bottom: 40px
  </div>
  
  <div class="box no-margin">
    margin: 0
  </div>
</body>
</html>
```

### Border Examples

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .border-demo {
      padding: 20px;
      margin: 20px;
      background-color: #ecf0f1;
    }
    
    .solid-border {
      border: 2px solid #3498db;
    }
    
    .dashed-border {
      border: 3px dashed #e74c3c;
    }
    
    .dotted-border {
      border: 2px dotted #2ecc71;
    }
    
    .mixed-borders {
      border-top: 3px solid #e74c3c;
      border-right: 2px dashed #3498db;
      border-bottom: 4px double #2ecc71;
      border-left: 5px solid #f39c12;
    }
    
    .rounded {
      border: 2px solid #9b59b6;
      border-radius: 10px;
    }
    
    .circle {
      width: 100px;
      height: 100px;
      border: 3px solid #1abc9c;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px;
    }
    
    .pill {
      border: 2px solid #34495e;
      border-radius: 25px;
      padding: 10px 20px;
      display: inline-block;
    }
  </style>
</head>
<body>
  <div class="border-demo solid-border">
    Solid Border
  </div>
  
  <div class="border-demo dashed-border">
    Dashed Border
  </div>
  
  <div class="border-demo dotted-border">
    Dotted Border
  </div>
  
  <div class="border-demo mixed-borders">
    Different borders on each side
  </div>
  
  <div class="border-demo rounded">
    Rounded Corners (border-radius)
  </div>
  
  <div class="circle">
    Circle
  </div>
  
  <div class="pill">
    Pill Shape
  </div>
</body>
</html>
```

### Complete Box Model

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      padding: 20px;
    }
    
    .card {
      /* Content */
      width: 300px;
      
      /* Padding - space inside */
      padding: 20px;
      
      /* Border */
      border: 2px solid #ddd;
      border-radius: 8px;
      
      /* Margin - space outside */
      margin: 20px auto;
      
      /* Background */
      background-color: white;
      
      /* Shadow for depth */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .card-header {
      margin: -20px -20px 15px -20px;
      padding: 15px 20px;
      background-color: #3498db;
      color: white;
      border-radius: 6px 6px 0 0;
    }
    
    .card-body {
      margin-bottom: 15px;
    }
    
    .card-footer {
      margin: 15px -20px -20px -20px;
      padding: 15px 20px;
      background-color: #ecf0f1;
      border-radius: 0 0 6px 6px;
      text-align: center;
    }
    
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #2ecc71;
      color: white;
      border: none;
      border-radius: 4px;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-header">
      <h2 style="margin: 0;">Card Title</h2>
    </div>
    <div class="card-body">
      <p>This card demonstrates the complete box model with padding, border, margin, and additional styling.</p>
    </div>
    <div class="card-footer">
      <a href="#" class="button">Learn More</a>
    </div>
  </div>
</body>
</html>
```

---

## Complete Page Examples

### Simple Blog Post

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Blog Post</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
  
  <style>
    * {
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Open Sans', sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
    }
    
    header {
      background-color: #2c3e50;
      color: white;
      padding: 40px 20px;
      text-align: center;
    }
    
    header h1 {
      font-family: 'Merriweather', serif;
      margin: 0;
      font-size: 36px;
    }
    
    .container {
      max-width: 800px;
      margin: 40px auto;
      padding: 0 20px;
    }
    
    article {
      background-color: white;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin-bottom: 40px;
    }
    
    article h2 {
      font-family: 'Merriweather', serif;
      color: #2c3e50;
      margin-top: 0;
    }
    
    .meta {
      color: #7f8c8d;
      font-size: 14px;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid #ecf0f1;
    }
    
    .highlight {
      background-color: #fff3cd;
      padding: 2px 6px;
      border-radius: 3px;
    }
    
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #3498db;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 20px;
    }
    
    .button:hover {
      background-color: #2980b9;
    }
    
    footer {
      background-color: #34495e;
      color: white;
      text-align: center;
      padding: 20px;
      margin-top: 40px;
    }
  </style>
</head>
<body>
  <header>
    <h1>My Blog</h1>
  </header>
  
  <div class="container">
    <article>
      <h2>Getting Started with CSS</h2>
      <div class="meta">
        Published on January 22, 2026 by John Doe
      </div>
      <p>
        CSS is an incredibly powerful tool for <span class="highlight">styling web pages</span>. 
        In this article, we'll explore the fundamentals of CSS and how it can transform 
        your HTML into beautiful, functional designs.
      </p>
      <p>
        The CSS Box Model is one of the most important concepts to understand. Every element 
        on a web page is essentially a box with content, padding, border, and margin.
      </p>
      <a href="#" class="button">Read More</a>
    </article>
  </div>
  
  <footer>
    <p>&copy; 2026 My Blog. All rights reserved.</p>
  </footer>
</body>
</html>
```

### Product Card Grid

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Grid</title>
  
  <style>
    * {
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f5f5f5;
    }
    
    h1 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 40px;
    }
    
    .grid {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }
    
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    .card-image {
      width: 100%;
      height: 200px;
      background-color: #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      font-size: 48px;
    }
    
    .card-content {
      padding: 20px;
    }
    
    .card-title {
      margin: 0 0 10px 0;
      color: #2c3e50;
      font-size: 20px;
    }
    
    .card-description {
      color: #7f8c8d;
      font-size: 14px;
      line-height: 1.5;
      margin: 0 0 15px 0;
    }
    
    .card-price {
      font-size: 24px;
      font-weight: bold;
      color: #27ae60;
      margin: 0 0 15px 0;
    }
    
    .card-button {
      display: block;
      width: 100%;
      padding: 12px;
      background-color: #3498db;
      color: white;
      text-align: center;
      text-decoration: none;
      border-radius: 4px;
      border: none;
      cursor: pointer;
    }
    
    .card-button:hover {
      background-color: #2980b9;
    }
    
    .badge {
      display: inline-block;
      padding: 4px 8px;
      background-color: #e74c3c;
      color: white;
      font-size: 12px;
      border-radius: 3px;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <h1>Our Products</h1>
  
  <div class="grid">
    <div class="card">
      <div class="card-image">📱</div>
      <div class="card-content">
        <span class="badge">NEW</span>
        <h3 class="card-title">Smartphone X</h3>
        <p class="card-description">
          Latest flagship phone with amazing features and stunning display.
        </p>
        <div class="card-price">$999</div>
        <button class="card-button">Add to Cart</button>
      </div>
    </div>
    
    <div class="card">
      <div class="card-image">💻</div>
      <div class="card-content">
        <h3 class="card-title">Laptop Pro</h3>
        <p class="card-description">
          Powerful laptop for professionals and creative work.
        </p>
        <div class="card-price">$1,499</div>
        <button class="card-button">Add to Cart</button>
      </div>
    </div>
    
    <div class="card">
      <div class="card-image">🎧</div>
      <div class="card-content">
        <span class="badge">SALE</span>
        <h3 class="card-title">Wireless Headphones</h3>
        <p class="card-description">
          Premium sound quality with active noise cancellation.
        </p>
        <div class="card-price">$299</div>
        <button class="card-button">Add to Cart</button>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## Practice Exercises

### Exercise 1: Style a Resume
Create a single-page resume using CSS to:
- Use different font families for headings and body text
- Apply the box model to create clear sections
- Use colors to highlight important information
- Add borders to separate sections

### Exercise 2: Create a Navigation Bar
Build a horizontal navigation menu with:
- Consistent spacing using padding
- Hover effects with color changes
- Active link highlighting

### Exercise 3: Design a Card Component
Make a reusable card component with:
- Border and border-radius
- Box shadow for depth
- Padding for internal spacing
- Margin for spacing between cards

### Exercise 4: Color Palette
Create a page showcasing a color palette:
- Use hex, RGB, and named colors
- Create color swatches
- Show transparent overlays with RGBA
- Demonstrate good contrast

---

## Additional Resources

- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Google Fonts](https://fonts.google.com/)
- [Coolors - Color Palette Generator](https://coolors.co/)
- [Can I Use - Browser Compatibility](https://caniuse.com/)
