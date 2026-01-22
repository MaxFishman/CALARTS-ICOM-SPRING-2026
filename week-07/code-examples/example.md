# Code Examples - Week 07

## Responsive Web Development Examples

### Example 1: Basic Media Query

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Media Query Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }

    .container {
      background-color: lightblue;
      padding: 20px;
      text-align: center;
    }

    /* Mobile styles (default) */
    .container {
      font-size: 16px;
    }

    /* Tablet styles */
    @media (min-width: 768px) {
      .container {
        background-color: lightgreen;
        font-size: 20px;
      }
    }

    /* Desktop styles */
    @media (min-width: 1024px) {
      .container {
        background-color: lightcoral;
        font-size: 24px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Resize Your Browser!</h1>
    <p>The background color and font size will change based on screen width.</p>
    <p>📱 Mobile: Light Blue, 16px</p>
    <p>📱 Tablet: Light Green, 20px</p>
    <p>💻 Desktop: Light Coral, 24px</p>
  </div>
</body>
</html>
```

### Example 2: Mobile First Design

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mobile First Example</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
    }

    /* Mobile First - Base styles for mobile */
    .header {
      background-color: #333;
      color: white;
      padding: 1rem;
      text-align: center;
    }

    .nav {
      background-color: #444;
      padding: 0.5rem;
    }

    .nav ul {
      list-style: none;
      display: flex;
      flex-direction: column;
    }

    .nav li {
      padding: 0.5rem;
      border-bottom: 1px solid #555;
    }

    .nav a {
      color: white;
      text-decoration: none;
    }

    .content {
      padding: 1rem;
    }

    .card {
      background-color: #f4f4f4;
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 5px;
    }

    /* Tablet (768px and up) - Enhance for medium screens */
    @media (min-width: 768px) {
      .nav ul {
        flex-direction: row;
        justify-content: center;
      }

      .nav li {
        border-bottom: none;
        border-right: 1px solid #555;
        padding: 0.5rem 1rem;
      }

      .nav li:last-child {
        border-right: none;
      }

      .cards-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
    }

    /* Desktop (1024px and up) - Enhance for large screens */
    @media (min-width: 1024px) {
      .header {
        text-align: left;
        padding: 1rem 2rem;
      }

      .nav ul {
        justify-content: flex-start;
      }

      .content {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .cards-container {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  </style>
</head>
<body>
  <header class="header">
    <h1>Mobile First Design</h1>
  </header>

  <nav class="nav">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <main class="content">
    <h2>Our Services</h2>
    <div class="cards-container">
      <div class="card">
        <h3>Web Design</h3>
        <p>Beautiful, responsive websites that work on all devices.</p>
      </div>
      <div class="card">
        <h3>Development</h3>
        <p>Custom web applications built with modern technologies.</p>
      </div>
      <div class="card">
        <h3>SEO</h3>
        <p>Optimize your site to rank higher in search results.</p>
      </div>
      <div class="card">
        <h3>Marketing</h3>
        <p>Digital marketing strategies to grow your business.</p>
      </div>
      <div class="card">
        <h3>Consulting</h3>
        <p>Expert advice to improve your online presence.</p>
      </div>
      <div class="card">
        <h3>Support</h3>
        <p>24/7 technical support for your peace of mind.</p>
      </div>
    </div>
  </main>
</body>
</html>
```

### Example 3: Responsive Navigation Menu

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Navigation</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
    }

    /* Mobile styles */
    .navbar {
      background-color: #2c3e50;
      padding: 1rem;
    }

    .nav-brand {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .nav-toggle {
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      float: right;
    }

    .nav-menu {
      list-style: none;
      display: none;
      margin-top: 1rem;
    }

    .nav-menu.active {
      display: block;
    }

    .nav-menu li {
      padding: 0.5rem 0;
    }

    .nav-menu a {
      color: white;
      text-decoration: none;
      display: block;
      padding: 0.5rem;
    }

    .nav-menu a:hover {
      background-color: #34495e;
    }

    /* Tablet and Desktop styles */
    @media (min-width: 768px) {
      .nav-toggle {
        display: none;
      }

      .nav-menu {
        display: flex !important;
        float: right;
        margin-top: 0;
      }

      .nav-menu li {
        padding: 0;
        margin-left: 2rem;
      }

      .nav-menu a {
        padding: 0;
      }
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <span class="nav-brand">MyWebsite</span>
    <button class="nav-toggle" onclick="toggleMenu()">☰</button>
    <ul class="nav-menu" id="navMenu">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <script>
    function toggleMenu() {
      const menu = document.getElementById('navMenu');
      menu.classList.toggle('active');
    }
  </script>
</body>
</html>
```

### Example 4: Responsive Grid Layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Grid</title>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f0f0f0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      margin-bottom: 2rem;
    }

    /* Mobile first - single column */
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .grid-item {
      background-color: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .grid-item h3 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    /* Tablet - 2 columns */
    @media (min-width: 600px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* Desktop - 3 columns */
    @media (min-width: 900px) {
      .grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    /* Large Desktop - 4 columns */
    @media (min-width: 1200px) {
      .grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Responsive Grid Layout</h1>
    <div class="grid">
      <div class="grid-item">
        <h3>Item 1</h3>
        <p>This grid automatically adjusts the number of columns based on screen size.</p>
      </div>
      <div class="grid-item">
        <h3>Item 2</h3>
        <p>1 column on mobile, 2 on tablet, 3 on desktop, 4 on large screens.</p>
      </div>
      <div class="grid-item">
        <h3>Item 3</h3>
        <p>Resize your browser window to see the responsive behavior.</p>
      </div>
      <div class="grid-item">
        <h3>Item 4</h3>
        <p>CSS Grid makes creating responsive layouts easy and flexible.</p>
      </div>
      <div class="grid-item">
        <h3>Item 5</h3>
        <p>No need for complex calculations or float-based layouts.</p>
      </div>
      <div class="grid-item">
        <h3>Item 6</h3>
        <p>Modern browsers have excellent support for CSS Grid.</p>
      </div>
      <div class="grid-item">
        <h3>Item 7</h3>
        <p>Combine with media queries for powerful responsive designs.</p>
      </div>
      <div class="grid-item">
        <h3>Item 8</h3>
        <p>Gap property provides consistent spacing between items.</p>
      </div>
    </div>
  </div>
</body>
</html>
```

### Example 5: Responsive Images

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Images</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f5f5f5;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    h2 {
      color: #333;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    /* Method 1: Max-width */
    .responsive-image {
      max-width: 100%;
      height: auto;
      display: block;
    }

    /* Method 2: Object-fit for specific dimensions */
    .image-container {
      width: 100%;
      height: 300px;
      overflow: hidden;
      margin-bottom: 1rem;
    }

    .cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .contain-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background-color: #ddd;
    }

    /* Method 3: Background images with media queries */
    .hero {
      height: 400px;
      background-image: url('https://via.placeholder.com/800x400');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      margin-bottom: 2rem;
    }

    @media (min-width: 768px) {
      .hero {
        background-image: url('https://via.placeholder.com/1200x400');
      }
    }

    @media (min-width: 1200px) {
      .hero {
        background-image: url('https://via.placeholder.com/1600x400');
      }
    }

    .example-section {
      background-color: white;
      padding: 1.5rem;
      margin-bottom: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Responsive Images Examples</h1>

    <div class="hero">
      <h2>Hero Section with Responsive Background</h2>
    </div>

    <div class="example-section">
      <h2>Method 1: Max-Width (Most Common)</h2>
      <p>This image will scale down to fit smaller screens but never exceed its natural size.</p>
      <img src="https://via.placeholder.com/800x400" alt="Sample" class="responsive-image">
      <pre><code>img {
  max-width: 100%;
  height: auto;
}</code></pre>
    </div>

    <div class="example-section">
      <h2>Method 2: Object-Fit Cover</h2>
      <p>Image fills the container while maintaining aspect ratio (may crop).</p>
      <div class="image-container">
        <img src="https://via.placeholder.com/800x400" alt="Cover example" class="cover-image">
      </div>
      <pre><code>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}</code></pre>
    </div>

    <div class="example-section">
      <h2>Method 3: Object-Fit Contain</h2>
      <p>Entire image is visible, letterboxed if necessary.</p>
      <div class="image-container">
        <img src="https://via.placeholder.com/800x400" alt="Contain example" class="contain-image">
      </div>
      <pre><code>img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}</code></pre>
    </div>

    <div class="example-section">
      <h2>Method 4: Picture Element with Multiple Sources</h2>
      <p>Serve different images for different screen sizes.</p>
      <picture>
        <source media="(min-width: 1200px)" srcset="https://via.placeholder.com/1200x400">
        <source media="(min-width: 768px)" srcset="https://via.placeholder.com/800x400">
        <img src="https://via.placeholder.com/400x300" alt="Responsive" class="responsive-image">
      </picture>
      <pre><code>&lt;picture&gt;
  &lt;source media="(min-width: 1200px)" srcset="large.jpg"&gt;
  &lt;source media="(min-width: 768px)" srcset="medium.jpg"&gt;
  &lt;img src="small.jpg" alt="Responsive"&gt;
&lt;/picture&gt;</code></pre>
    </div>
  </div>
</body>
</html>
```

## Bootstrap Examples

### Example 6: Bootstrap Grid System

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Grid Example</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    .demo-box {
      background-color: #e9ecef;
      border: 1px solid #dee2e6;
      padding: 1rem;
      margin-bottom: 1rem;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container my-5">
    <h1 class="text-center mb-4">Bootstrap Grid System</h1>

    <!-- Equal Width Columns -->
    <h2>Equal Width Columns</h2>
    <div class="row mb-4">
      <div class="col">
        <div class="demo-box">Column 1</div>
      </div>
      <div class="col">
        <div class="demo-box">Column 2</div>
      </div>
      <div class="col">
        <div class="demo-box">Column 3</div>
      </div>
    </div>

    <!-- Responsive Columns -->
    <h2>Responsive Columns</h2>
    <p>Full width on mobile, 2 columns on tablet, 4 columns on desktop</p>
    <div class="row mb-4">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="demo-box">1</div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="demo-box">2</div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="demo-box">3</div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="demo-box">4</div>
      </div>
    </div>

    <!-- Custom Widths -->
    <h2>Custom Column Widths</h2>
    <div class="row mb-4">
      <div class="col-8">
        <div class="demo-box">8 columns wide</div>
      </div>
      <div class="col-4">
        <div class="demo-box">4 columns wide</div>
      </div>
    </div>

    <!-- Nested Grids -->
    <h2>Nested Grid</h2>
    <div class="row">
      <div class="col-12 col-lg-8">
        <div class="demo-box">
          <p>Main Content Area</p>
          <div class="row">
            <div class="col-6">
              <div class="demo-box bg-light">Nested 1</div>
            </div>
            <div class="col-6">
              <div class="demo-box bg-light">Nested 2</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="demo-box">Sidebar</div>
      </div>
    </div>
  </div>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Example 7: Bootstrap Components

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Components</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">MyBrand</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container my-5">
    <!-- Buttons -->
    <h2>Buttons</h2>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-info">Info</button>

    <hr class="my-4">

    <!-- Cards -->
    <h2>Cards</h2>
    <div class="row">
      <div class="col-md-4 mb-3">
        <div class="card">
          <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Card image">
          <div class="card-body">
            <h5 class="card-title">Card Title 1</h5>
            <p class="card-text">Some quick example text to build on the card title.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card">
          <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Card image">
          <div class="card-body">
            <h5 class="card-title">Card Title 2</h5>
            <p class="card-text">Some quick example text to build on the card title.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card">
          <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Card image">
          <div class="card-body">
            <h5 class="card-title">Card Title 3</h5>
            <p class="card-text">Some quick example text to build on the card title.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>

    <hr class="my-4">

    <!-- Alerts -->
    <h2>Alerts</h2>
    <div class="alert alert-success" role="alert">
      This is a success alert—check it out!
    </div>
    <div class="alert alert-warning" role="alert">
      This is a warning alert—check it out!
    </div>
    <div class="alert alert-danger" role="alert">
      This is a danger alert—check it out!
    </div>

    <hr class="my-4">

    <!-- Form -->
    <h2>Form</h2>
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter your name">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## Advanced Media Query Examples

### Example 8: Orientation-Based Styling

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Orientation Media Query</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      transition: all 0.3s ease;
    }

    .container {
      text-align: center;
      padding: 2rem;
    }

    /* Portrait orientation (height > width) */
    @media (orientation: portrait) {
      body {
        background: linear-gradient(to bottom, #667eea 0%, #764ba2 100%);
      }

      .container h1 {
        font-size: 2rem;
      }

      .orientation-text::before {
        content: "📱 Portrait Mode";
      }
    }

    /* Landscape orientation (width > height) */
    @media (orientation: landscape) {
      body {
        background: linear-gradient(to right, #f093fb 0%, #f5576c 100%);
      }

      .container h1 {
        font-size: 3rem;
      }

      .orientation-text::before {
        content: "🖥️ Landscape Mode";
      }
    }

    h1, p {
      color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="orientation-text"></h1>
    <p>Rotate your device to see the change!</p>
    <p>Background and text size adjust based on orientation.</p>
  </div>
</body>
</html>
```

### Example 9: Dark Mode with Prefers-Color-Scheme

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Mode Example</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* Default (Light Mode) */
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      padding: 2rem;
      background-color: #ffffff;
      color: #333333;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
    }

    .card {
      background-color: #f8f9fa;
      padding: 2rem;
      margin-bottom: 1rem;
      border-radius: 8px;
      border: 1px solid #dee2e6;
    }

    h1 {
      margin-bottom: 1rem;
      color: #2c3e50;
    }

    h2 {
      margin-bottom: 0.5rem;
      color: #34495e;
    }

    /* Dark Mode */
    @media (prefers-color-scheme: dark) {
      body {
        background-color: #1a1a1a;
        color: #e0e0e0;
      }

      .card {
        background-color: #2d2d2d;
        border-color: #404040;
      }

      h1 {
        color: #ffffff;
      }

      h2 {
        color: #b0b0b0;
      }

      .mode-indicator::before {
        content: "🌙 Dark Mode Active";
      }
    }

    /* Light Mode Indicator */
    @media (prefers-color-scheme: light) {
      .mode-indicator::before {
        content: "☀️ Light Mode Active";
      }
    }

    .mode-indicator {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 2rem;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="mode-indicator"></div>

    <h1>Dark Mode Demo</h1>
    <p>This page automatically adapts to your system's color scheme preference.</p>

    <div class="card">
      <h2>How It Works</h2>
      <p>The <code>prefers-color-scheme</code> media query detects your system settings and applies appropriate styles.</p>
    </div>

    <div class="card">
      <h2>Try It Yourself</h2>
      <p>Change your system preferences:</p>
      <ul>
        <li><strong>macOS:</strong> System Preferences → General → Appearance</li>
        <li><strong>Windows:</strong> Settings → Personalization → Colors</li>
        <li><strong>iOS:</strong> Settings → Display & Brightness</li>
        <li><strong>Android:</strong> Settings → Display → Dark theme</li>
      </ul>
    </div>

    <div class="card">
      <h2>Benefits</h2>
      <ul>
        <li>Reduces eye strain in low-light conditions</li>
        <li>Saves battery on OLED screens</li>
        <li>Respects user preferences</li>
        <li>Modern user experience</li>
      </ul>
    </div>
  </div>
</body>
</html>
```

### Example 10: Print Styles

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Print Styles Example</title>
  <style>
    /* Screen styles */
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      background-color: #f5f5f5;
    }

    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 2rem;
      text-align: center;
      border-radius: 8px;
      margin-bottom: 2rem;
    }

    .content {
      background-color: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .no-print {
      background-color: #fff3cd;
      border: 2px solid #ffc107;
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 4px;
    }

    .button {
      background-color: #667eea;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin: 0.5rem;
    }

    /* Print styles */
    @media print {
      /* Remove unnecessary elements */
      .no-print,
      .button {
        display: none !important;
      }

      /* Reset page styles */
      body {
        background-color: white;
        color: black;
        padding: 0;
      }

      .header {
        background: none;
        color: black;
        padding: 0;
        border: none;
        margin-bottom: 1rem;
      }

      .content {
        box-shadow: none;
        padding: 0;
      }

      /* Typography for print */
      h1 {
        font-size: 24pt;
        page-break-after: avoid;
      }

      h2 {
        font-size: 18pt;
        page-break-after: avoid;
      }

      p {
        font-size: 12pt;
        orphans: 3;
        widows: 3;
      }

      /* Show URLs for links */
      a[href]:after {
        content: " (" attr(href) ")";
      }

      /* Page breaks */
      .page-break {
        page-break-before: always;
      }

      /* Remove link colors */
      a {
        color: black;
        text-decoration: none;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Print-Optimized Document</h1>
    <p>This page looks different when printed</p>
  </div>

  <div class="no-print">
    <strong>⚠️ This element won't appear when printed!</strong>
    <p>Try printing this page (Ctrl+P / Cmd+P) or using print preview to see the difference.</p>
    <button class="button" onclick="window.print()">Print This Page</button>
  </div>

  <div class="content">
    <h2>About Print Styles</h2>
    <p>Print styles optimize content for paper. They typically:</p>
    <ul>
      <li>Remove background colors and images (saves ink)</li>
      <li>Hide navigation, buttons, and interactive elements</li>
      <li>Adjust typography for readability on paper</li>
      <li>Show URLs for links</li>
      <li>Control page breaks</li>
    </ul>

    <h2>Why Use Print Styles?</h2>
    <p>Many users still print web pages for:</p>
    <ul>
      <li>Reference documents</li>
      <li>Receipts and confirmations</li>
      <li>Articles and tutorials</li>
      <li>Meeting handouts</li>
    </ul>

    <h2>Best Practices</h2>
    <p>When creating print styles, remember to:</p>
    <ol>
      <li>Remove unnecessary visual elements</li>
      <li>Use black text on white background</li>
      <li>Make sure text is readable (adequate font size)</li>
      <li>Include important URLs inline</li>
      <li>Control widows and orphans</li>
      <li>Test with actual printers</li>
    </ol>

    <p>Visit <a href="https://www.smashingmagazine.com">Smashing Magazine</a> for more print design tips.</p>
  </div>
</body>
</html>
```

## Tips for Your Homework

1. **Always include viewport meta tag**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
2. **Start with mobile styles**: Design for the smallest screen first
3. **Use relative units**: em, rem, %, vw, vh instead of fixed pixels
4. **Test frequently**: Check your designs at various screen sizes
5. **Make touch targets large**: Minimum 44x44 pixels for buttons/links
6. **Optimize images**: Use responsive image techniques
7. **Consider performance**: Mobile users often have slower connections
8. **Use CSS frameworks wisely**: They can speed development but add file size
9. **Test on real devices**: Simulators don't catch everything
10. **Think content-first**: What's most important for mobile users?

## Common Mistakes to Avoid

- Forgetting the viewport meta tag
- Using fixed widths instead of flexible layouts
- Making touch targets too small
- Not testing on actual devices
- Overlooking performance on mobile networks
- Using hover effects as the only interaction method
- Ignoring different orientations
- Not considering thumb reach zones on mobile
- Loading unnecessarily large images on mobile
- Breaking functionality at sizes between breakpoints
