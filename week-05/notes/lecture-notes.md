# Lecture Notes - Week 05

## Leaving Glitch: Moving to Local Development

This week marks an important transition in your web development journey. We're moving from the online editor Glitch to a professional local development environment. This change gives you more control, better tools, and prepares you for real-world web development.

### Why Leave Glitch?

**Benefits of Local Development:**
- Full control over your development environment
- Work offline without internet connection
- Use professional text editors with advanced features
- Better performance and faster workflow
- Learn industry-standard tools and practices
- Prepare for real-world development workflows
- Version control integration (Git)
- No platform limitations

**What Glitch Was Hiding:**
Glitch provided a simplified environment that abstracted away important concepts. Now we'll learn what was happening behind the scenes:
- Complete HTML document structure (head and body)
- Linking external stylesheets
- Running local servers
- File system organization

---

## Text Editors for Web Development

A good text editor is essential for coding. Unlike word processors (like Microsoft Word), text editors are designed specifically for writing code.

### Popular Text Editors

**Visual Studio Code (VS Code)** - Recommended
- Free and open-source from Microsoft
- Most popular editor among web developers
- Excellent built-in features and extensions
- Great for beginners and professionals
- Integrated terminal
- IntelliSense (code completion)
- Git integration
- Download: https://code.visualstudio.com

**Other Options:**
- **Sublime Text**: Fast, lightweight, and elegant
- **Atom**: Free, open-source, highly customizable
- **WebStorm**: Full-featured IDE (paid)
- **Notepad++**: Simple, Windows-only

### Key Text Editor Features

**Syntax Highlighting:**
- Colors code based on language rules
- Makes code easier to read and spot errors
- Different colors for HTML tags, CSS properties, JavaScript keywords, etc.

**Auto-completion:**
- Suggests code as you type
- Speeds up coding
- Reduces typos

**Line Numbers:**
- Essential for finding errors
- Makes it easy to reference specific lines

**Multiple Files:**
- Open and edit multiple files simultaneously
- Side-by-side editing
- Project/folder view

**Find and Replace:**
- Search across files
- Find and replace text patterns
- Supports regular expressions

---

## File Structure and Organization

Understanding how files are organized on your computer is crucial for web development.

### Unix Path Syntax

Paths describe the location of files in your file system. There are two types of paths:

**Absolute Paths:**
- Start from the root of the file system
- Complete path from beginning to file
- **macOS/Linux:** `/Users/username/Desktop/project/index.html`
- **Windows:** `C:\Users\username\Desktop\project\index.html`
- Always start with root directory symbol

**Relative Paths:**
- Relative to the current location
- More flexible and portable
- Common in web development

**Relative Path Symbols:**
- `.` = Current directory
- `..` = Parent directory (one level up)
- `../..` = Two levels up
- `/` = Root directory (in absolute paths)

**Examples:**

If you're in `/Users/username/project/` and want to reference:
- File in same directory: `style.css`
- File in subdirectory: `images/logo.png`
- File in parent directory: `../index.html`
- File in sibling directory: `../about/page.html`

### Typical Web Project Structure

```
my-website/
├── index.html          # Main HTML file (home page)
├── style.css           # Main stylesheet
├── about.html          # Other HTML pages
├── contact.html
├── css/               # Folder for CSS files
│   ├── style.css
│   └── reset.css
├── js/                # Folder for JavaScript files
│   └── script.js
├── images/            # Folder for images
│   ├── logo.png
│   └── banner.jpg
└── fonts/             # Folder for custom fonts
    └── custom-font.woff
```

**Best Practices:**
- Use lowercase for file names
- Use hyphens or underscores instead of spaces
- Keep related files together in folders
- Use descriptive names
- Main page should be named `index.html`

---

## The Stuff Glitch Hides: Complete HTML Structure

Glitch simplified HTML by hiding the full document structure. Now we need to understand the complete HTML document format.

### The Full HTML Document

Every HTML document should have this basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Your visible content goes here -->
  <h1>Welcome to My Website</h1>
  <p>This is a paragraph.</p>
</body>
</html>
```

### The `<head>` Tag

The `<head>` element contains metadata and resources that aren't directly visible on the page.

**What Goes in the Head:**

**1. DOCTYPE Declaration:**
```html
<!DOCTYPE html>
```
- Must be the very first line
- Tells the browser this is HTML5
- Not an HTML tag, but a declaration

**2. HTML Tag:**
```html
<html lang="en">
```
- Root element of the page
- `lang` attribute specifies language

**3. Meta Tags:**
```html
<meta charset="UTF-8">
```
- Character encoding (supports all languages/symbols)
- Important for displaying text correctly

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- Controls responsive behavior on mobile devices
- Essential for mobile-friendly websites

**4. Title Tag:**
```html
<title>My Website</title>
```
- Appears in browser tab
- Used by search engines
- Shows in bookmarks
- Required in all HTML documents

**5. Link Tags (for CSS):**
```html
<link rel="stylesheet" href="style.css">
```
- Links external CSS files
- Can have multiple link tags
- `rel="stylesheet"` specifies it's a CSS file
- `href` is the path to the CSS file

**6. Style Tag (Internal CSS):**
```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
</style>
```
- Embed CSS directly in HTML
- Useful for page-specific styles
- Generally prefer external CSS files

**7. Script Tags:**
```html
<script src="script.js"></script>
```
- Link JavaScript files
- Can be in head or before closing body tag

### The `<body>` Tag

The `<body>` element contains all visible content of the web page.

**What Goes in the Body:**
- All visible HTML elements (headings, paragraphs, images, etc.)
- Page structure (header, nav, main, footer)
- Interactive elements (forms, buttons, links)
- Embedded media (images, videos)

**Example:**
```html
<body>
  <header>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
    </nav>
  </header>
  
  <main>
    <h1>Welcome</h1>
    <p>This is the main content.</p>
  </main>
  
  <footer>
    <p>&copy; 2026 My Website</p>
  </footer>
</body>
```

### Head vs Body Quick Reference

| Element | Location | Purpose | Visible? |
|---------|----------|---------|----------|
| `<title>` | Head | Browser tab title | In tab |
| `<meta>` | Head | Page metadata | No |
| `<link>` | Head | External resources | No |
| `<style>` | Head | Internal CSS | No |
| `<h1>`, `<p>`, etc. | Body | Page content | Yes |
| `<img>` | Body | Images | Yes |
| `<a>` | Body | Links | Yes |

---

## The `<style>` Tag

The `<style>` tag allows you to write CSS directly in your HTML document.

### Internal CSS with Style Tag

**Syntax:**
```html
<head>
  <style>
    /* CSS rules go here */
    h1 {
      color: blue;
      font-size: 32px;
    }
    
    p {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
  </style>
</head>
```

### When to Use Style Tag vs. External CSS

**Use `<style>` tag (Internal CSS) when:**
- Page-specific styles that won't be reused
- Small amount of CSS
- Quick prototyping or testing
- Single-page websites

**Use External CSS file when:**
- Styles shared across multiple pages ✓ (Recommended)
- Large amount of CSS
- Team collaboration
- Better organization and maintainability
- Browser caching benefits

### Linking External CSS

**Best Practice - External CSS File:**

**HTML file (index.html):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Site</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

**CSS file (style.css):**
```css
h1 {
  color: blue;
  font-size: 32px;
}
```

**Path Examples:**
```html
<!-- CSS in same directory -->
<link rel="stylesheet" href="style.css">

<!-- CSS in subdirectory -->
<link rel="stylesheet" href="css/style.css">

<!-- CSS in parent directory -->
<link rel="stylesheet" href="../style.css">

<!-- Multiple CSS files -->
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/style.css">
```

---

## Installing Node.js

Node.js is a JavaScript runtime that lets you run JavaScript on your computer (not just in browsers). We'll use it to run a local development server.

### What is Node.js?

- JavaScript runtime built on Chrome's V8 engine
- Allows JavaScript to run outside the browser
- Comes with npm (Node Package Manager)
- Essential tool for modern web development
- Used for running development servers, build tools, and more

### Installing Node.js

**Steps:**

1. **Download Node.js**
   - Visit: https://nodejs.org
   - Choose the LTS (Long Term Support) version
   - Download for your operating system (Windows, macOS, Linux)

2. **Run the Installer**
   - Follow the installation wizard
   - Accept default settings
   - This installs both Node.js and npm

3. **Verify Installation**
   - Open Terminal (macOS/Linux) or Command Prompt (Windows)
   - Check Node.js version:
   ```bash
   node --version
   ```
   - Check npm version:
   ```bash
   npm --version
   ```
   - You should see version numbers (e.g., v18.17.0)

### What Gets Installed

**Node.js:**
- JavaScript runtime
- Run JavaScript files from command line
- Execute: `node filename.js`

**npm (Node Package Manager):**
- Install packages/libraries
- Manage project dependencies
- Run development tools
- Execute: `npm install package-name`

---

## Running a Development Server

A development server allows you to view your website locally before deploying it to the internet.

### Why Use a Development Server?

**Problems with Opening HTML Files Directly:**
- File paths might not work correctly
- Some modern features require a server
- Cannot test server-side functionality
- CORS (Cross-Origin Resource Sharing) restrictions
- Doesn't mimic real website behavior

**Benefits of Development Server:**
- Mimics real web server
- Correct path resolution
- Hot reload (auto-refresh on changes)
- Better testing environment
- Professional workflow

### Simple HTTP Server with Node.js

**Using http-server (Recommended for Beginners):**

1. **Install http-server globally:**
   ```bash
   npm install -g http-server
   ```

2. **Navigate to your project folder:**
   ```bash
   cd /path/to/your/project
   ```

3. **Start the server:**
   ```bash
   http-server
   ```

4. **Open in browser:**
   - Usually runs on: http://localhost:8080
   - Or: http://127.0.0.1:8080

5. **Stop the server:**
   - Press `Ctrl + C` in terminal

### Using Python's Built-in Server (Alternative)

If you have Python installed:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

Then visit: http://localhost:8000

### Using VS Code Live Server Extension (Easiest)

**Install Live Server:**
1. Open VS Code
2. Go to Extensions (Ctrl/Cmd + Shift + X)
3. Search for "Live Server"
4. Install by Ritwick Dey

**Use Live Server:**
1. Open your HTML file in VS Code
2. Right-click in the editor
3. Select "Open with Live Server"
4. Browser opens automatically
5. Auto-reloads when you save changes

### Understanding localhost

- **localhost**: Your own computer acting as a server
- **IP Address**: 127.0.0.1 (same as localhost)
- **Port**: Number after colon (e.g., :8080)
- Only accessible from your computer
- Perfect for development and testing

### Common Port Numbers

- `3000` - Common for Node.js apps
- `5500` - Live Server default
- `8000` - Python server default
- `8080` - http-server default

**Tip:** If a port is busy, try another number.

---

## Using DevTools (Developer Tools)

Browser DevTools are essential for web development. They help you debug, inspect, and optimize your websites.

### Opening DevTools

**All Browsers:**
- **Right-click** on page → **Inspect** or **Inspect Element**

**Keyboard Shortcuts:**
- **Windows/Linux:** `F12` or `Ctrl + Shift + I`
- **macOS:** `Cmd + Option + I`

**Chrome Menu:**
- Click the three dots (⋮) → More Tools → Developer Tools

### Key DevTools Panels

#### 1. Elements/Inspector Panel

**Purpose:** Inspect and modify HTML and CSS in real-time

**Features:**
- View HTML structure
- See applied CSS styles
- Hover over elements to highlight them on page
- Edit HTML live
- Add/remove/edit CSS properties
- See box model (margin, border, padding, content)

**How to Use:**
- Click the inspect icon (cursor in box)
- Hover over elements on the page
- Click to select and view in DevTools
- Edit text, attributes, styles directly

**Common Use Cases:**
- Debug layout issues
- Test CSS changes before coding
- Find correct element selectors
- See inherited styles
- Check element dimensions

#### 2. Console Panel

**Purpose:** View errors, warnings, and run JavaScript

**Features:**
- JavaScript errors appear here
- Console messages (`console.log()`)
- Run JavaScript code directly
- Test code snippets
- Debug JavaScript

**Common Commands:**
```javascript
console.log("Hello");        // Print message
console.error("Error!");     // Print error
console.warn("Warning!");    // Print warning
console.table(data);         // Display data as table
```

**Use Cases:**
- Debug JavaScript errors
- Test JavaScript code
- Check variable values
- Verify code is running

#### 3. Network Panel

**Purpose:** Monitor network requests and file loading

**Features:**
- See all loaded files (HTML, CSS, JS, images)
- Check loading times
- Find 404 (not found) errors
- View request/response data
- Monitor API calls

**How to Use:**
- Open Network panel
- Refresh page (Ctrl/Cmd + R)
- See all requests load
- Click on individual requests for details

**Use Cases:**
- Debug missing files (404 errors)
- Optimize load times
- Verify correct files are loading
- Check if CSS/JS files are linked correctly

#### 4. Sources/Debugger Panel

**Purpose:** Debug JavaScript code line by line

**Features:**
- View all source files
- Set breakpoints
- Step through code
- Inspect variables
- Pause code execution

#### 5. Application Panel

**Purpose:** Manage storage and cached data

**Features:**
- View localStorage and sessionStorage
- See cookies
- Check cache
- View application manifest

### Common DevTools Tasks

**Finding CSS Issues:**
1. Inspect the element
2. Look at Styles panel on right
3. See which styles are applied
4. Strikethrough = overridden style
5. Edit values to test fixes

**Finding Broken Links/Images:**
1. Open Console panel
2. Look for 404 errors
3. Click error to see file path
4. Fix the path in your code

**Testing Responsive Design:**
1. Click device toggle icon (phone/tablet icon)
2. Choose device or custom size
3. Test different screen sizes
4. Rotate orientation

**Checking Box Model:**
1. Inspect element
2. Look at box model diagram
3. See margin (orange), border (yellow), padding (green), content (blue)
4. Understand spacing issues

### DevTools Tips

**Shortcuts:**
- `Cmd/Ctrl + Shift + C` - Inspect element mode
- `Cmd/Ctrl + ]` / `[` - Next/previous panel
- `Cmd/Ctrl + F` - Find in page/panel
- `Esc` - Toggle console in any panel

**Best Practices:**
- Always check Console for errors
- Use Network panel to debug loading issues
- Inspect elements to understand layout
- Test changes in DevTools before coding
- Use responsive mode for mobile testing

**Common Errors to Look For:**
- Red errors in Console (JavaScript errors)
- 404 Not Found (wrong file paths)
- CORS errors (need development server)
- CSS not loading (check link tag and path)
- Unclosed tags (check Elements panel)

---

## Putting It All Together: Your First Local Project

### Step-by-Step Setup

**1. Create Project Folder**
```bash
mkdir my-first-website
cd my-first-website
```

**2. Create Files**
```bash
touch index.html
touch style.css
```

**3. Write HTML (index.html)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Local Website</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  
  <main>
    <section>
      <h2>About Me</h2>
      <p>This is my first locally-developed website!</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2026 My Website</p>
  </footer>
</body>
</html>
```

**4. Write CSS (style.css)**
```css
/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Header Styles */
header {
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  text-align: center;
}

nav {
  margin-top: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

/* Main Content */
main {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}

section {
  margin-bottom: 30px;
}

h2 {
  color: #4CAF50;
  margin-bottom: 10px;
}

/* Footer */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
```

**5. Start Development Server**
```bash
# If using http-server
http-server

# If using VS Code Live Server
# Right-click index.html → Open with Live Server
```

**6. Open in Browser**
- Navigate to http://localhost:8080 (or the URL shown in terminal)

**7. Make Changes**
- Edit HTML or CSS
- Save file
- Refresh browser (or auto-reloads with Live Server)

**8. Use DevTools**
- Open DevTools (F12)
- Inspect elements
- Check for errors in Console
- Test CSS changes

### Troubleshooting Common Issues

**CSS Not Loading:**
- Check the `<link>` tag in HTML
- Verify file path is correct
- Check for typos in filename
- Open Network panel in DevTools to see if file loaded

**Can't Access Server:**
- Make sure server is running
- Check the correct port number
- Try http://127.0.0.1:8080 instead of localhost

**Changes Not Showing:**
- Save your files
- Hard refresh browser (Ctrl/Cmd + Shift + R)
- Clear browser cache
- Check if you're editing the correct file

**Errors in Console:**
- Read error message carefully
- Check line numbers
- Look for typos
- Verify all tags are closed

---

## Key Concepts Summary

### Essential Skills from Week 5

**Development Environment:**
- Install and use a text editor (VS Code recommended)
- Understand file structure and paths (relative vs absolute)
- Set up a local development server
- Use command line basics

**HTML Structure:**
- Complete HTML document structure
- `<head>` tag and its contents (meta, title, link, style)
- `<body>` tag for visible content
- Proper DOCTYPE and html tag

**CSS Integration:**
- Three ways to add CSS (inline, internal, external)
- Use `<link>` tag to connect external CSS
- Understand `<style>` tag for internal CSS
- Prefer external CSS files for maintainability

**Professional Tools:**
- Browser DevTools for debugging
- Development server for testing
- Console for error checking
- Network panel for file loading issues

**File Management:**
- Organize project files and folders
- Use correct paths for linking resources
- Name files appropriately (lowercase, no spaces)
- Keep project structure clean

### Moving Forward

You now have the foundation for professional web development:
- Local development environment
- Complete HTML knowledge
- CSS integration methods
- Debugging tools
- Server setup

These skills prepare you for:
- More complex projects
- Team collaboration
- Version control (Git)
- Modern frameworks and tools
- Real-world development workflows

---

## Resources

### Documentation
- **MDN Web Docs**: https://developer.mozilla.org/
  - Complete HTML reference
  - CSS documentation
  - DevTools guides

- **W3Schools**: https://www.w3schools.com/
  - Beginner-friendly tutorials
  - Interactive examples

### Tools
- **Visual Studio Code**: https://code.visualstudio.com/
- **Node.js**: https://nodejs.org/
- **Chrome DevTools**: https://developer.chrome.com/docs/devtools/

### Learning Resources
- **freeCodeCamp**: https://www.freecodecamp.org/
- **The Odin Project**: https://www.theodinproject.com/
- **CSS-Tricks**: https://css-tricks.com/

### Practice
- Start converting previous Glitch projects to local files
- Experiment with DevTools
- Practice using the command line
- Build small projects from scratch locally

---

## Homework Reminder

**Assignment:**
- Migrate one of your last two assignments (with HTML and CSS) out of Glitch
- Create separate `index.html` and `style.css` files
- Link your CSS file using the `<link>` tag in the `<head>` element
- Ensure proper HTML document structure (DOCTYPE, head, body)
- Test locally with a development server
- Submit as a .zip file containing both files

**Checklist:**
- [ ] Create index.html with complete structure
- [ ] Create style.css file
- [ ] Link CSS file in HTML head with `<link>` tag
- [ ] Include proper DOCTYPE declaration
- [ ] Include meta tags (charset, viewport)
- [ ] Include title tag
- [ ] Test locally with development server
- [ ] Verify in browser and use DevTools to check for errors
- [ ] Package as .zip file for submission
