# Lecture Notes - Week 1

## Introduction to ICOM 101

### Course Overview
- Course objectives
- Learning outcomes
- Assessment criteria

### Topics
- Introduction to course material
- Development environment setup
- Getting started

### Key Concepts

## A Brief History of the Internet

### The Beginning: ARPANET (1969-1989)
The internet as we know it today began with **ARPANET** (Advanced Research Projects Agency Network), developed by the U.S. Department of Defense in 1969. The goal was to create a network that could survive a partial outage and continue functioning.

**Key Milestones:**
- **1969**: First ARPANET message sent between UCLA and Stanford Research Institute
- **1971**: Email was invented by Ray Tomlinson
- **1973**: TCP/IP protocol suite was developed, allowing different networks to communicate
- **1983**: ARPANET officially switched to TCP/IP, marking the birth of the modern internet
- **1989**: Tim Berners-Lee proposed the World Wide Web at CERN

### The World Wide Web Era (1990s)
- **1991**: The World Wide Web became publicly available
- **1993**: Mosaic, the first graphical web browser, was released
- **1994**: Netscape Navigator launched, making the web accessible to mainstream users
- **1998**: Google was founded, revolutionizing web search
- **1999**: Napster introduced peer-to-peer file sharing

### Modern Internet (2000s-Present)
- **2004**: Facebook launched, beginning the social media revolution
- **2005**: YouTube created, enabling easy video sharing
- **2007**: The iPhone launched, ushering in the mobile internet era
- **2010s**: Cloud computing, streaming services, and mobile-first design became standard
- **2020s**: Web3, AI integration, and decentralized applications emerge

## Understanding Web Fundamentals

### What is an IP Address?

An **IP Address** (Internet Protocol Address) is a unique numerical label assigned to every device connected to the internet. Think of it as a phone number or home address for your computer.

**Two Types of IP Addresses:**

1. **IPv4 (Internet Protocol version 4)**
   - Format: Four numbers separated by periods (e.g., `192.168.1.1`)
   - Each number ranges from 0 to 255
   - Example: `172.217.14.206` (Google's IP address)
   - Problem: Only about 4.3 billion possible addresses (running out!)

2. **IPv6 (Internet Protocol version 6)**
   - Format: Eight groups of hexadecimal numbers (e.g., `2001:0db8:85a3:0000:0000:8a2e:0370:7334`)
   - Created to solve IPv4 shortage
   - Provides 340 undecillion possible addresses

**Public vs. Private IP Addresses:**
- **Public IP**: Visible on the internet, assigned by your ISP (e.g., `203.0.113.45`)
- **Private IP**: Used within local networks, not visible externally (e.g., `192.168.1.5`)

**Finding Your IP Address:**
- Visit websites like `whatismyip.com` or `ipinfo.io`
- Use command line: `curl ifconfig.me`
- Check in browser dev tools under Network tab

### What is DNS (Domain Name System)?

The **DNS** is like the internet's phone book. It translates human-readable domain names (like `google.com`) into IP addresses (like `172.217.14.206`) that computers use to communicate.

**Why DNS Matters:**
- Humans remember names better than numbers
- Websites can change IP addresses without users noticing
- Enables content delivery networks (CDNs) to route traffic efficiently

**How DNS Works:**

1. **You type a URL**: `www.example.com`
2. **Browser checks cache**: Is this address already stored?
3. **Recursive DNS query**: If not cached, your computer asks a DNS resolver (usually provided by your ISP)
4. **Root nameserver**: DNS resolver queries root servers to find `.com` nameservers
5. **TLD nameserver**: Queries Top-Level Domain servers for `example.com` nameservers
6. **Authoritative nameserver**: Gets the actual IP address for `www.example.com`
7. **Response returned**: IP address is sent back to your browser
8. **Connection established**: Browser connects to the web server at that IP address

**DNS Record Types:**
- **A Record**: Maps domain to IPv4 address
- **AAAA Record**: Maps domain to IPv6 address
- **CNAME**: Creates an alias for another domain
- **MX**: Specifies mail servers for the domain
- **TXT**: Holds text information for various purposes

**Tools to Explore DNS:**
- Command line: `nslookup example.com` or `dig example.com`
- Online tools: `dnschecker.org` or `mxtoolbox.com`

### Next Steps
- Review course syllabus
- Set up development environment

### Visiting a Website

#### The Journey of a Web Request

1. **YOU TYPE AN ADDRESS INTO THE BROWSER AND HIT ENTER**
   - Browser parses the URL (Uniform Resource Locator)
   - Example: `https://www.example.com/page.html`
     - `https://` - Protocol
     - `www.example.com` - Domain name
     - `/page.html` - Path to specific resource

2. **YOUR ISP MAKES A REQUEST TO A DOMAIN NAME SERVER (DNS)**
   - Visiting a website is a lot like calling someone on the phone
   - Every website on the internet has a unique IP Address, like a phone number, that points to the server where that website is being hosted
   - The DNS acts like your address book and maps website names to website addresses
   - Your browser first checks its cache to see if it already knows the IP address

3. **THE DNS RESOLVES YOUR REQUEST**
   - The DNS looks up the domain name you have requested
   - Returns the IP address of that website to your ISP
   - Your ISP then forwards your request to the IP address returned from the DNS
   - This process usually takes milliseconds

4. **THE WEBSITE YOU HAVE REQUESTED RECEIVES YOUR REQUEST**
   - Once a web server receives a request, it is expected to generate a response
   - Different types of responses:
     - A server at Twitter might dynamically generate your custom homepage and return that as the response
     - An API endpoint might calculate some data and return it in a machine-readable format
     - A server hosting a static site may just return a prewritten chunk of HTML (this is what we are doing!)

5. **THE SERVER SENDS A RESPONSE**
   - The server sends back the requested resource
   - Response includes status code (200 for success, 404 for not found, etc.)
   - Response includes headers (metadata about the response)
   - Response includes the body (HTML, CSS, JavaScript, images, etc.)

6. **YOUR BROWSER RENDERS THE PAGE**
   - Browser receives HTML and begins parsing
   - Discovers additional resources needed (CSS, JavaScript, images)
   - Makes additional requests for each resource
   - Renders the page progressively as resources load
   - Executes JavaScript to add interactivity

## Using Browser Developer Tools to Explore the Web

Modern web browsers come with powerful built-in developer tools (DevTools) that allow you to inspect, debug, and understand how websites work.

### Opening Developer Tools

**Methods to Open DevTools:**
- **Right-click** anywhere on a webpage and select "Inspect" or "Inspect Element"
- **Keyboard shortcuts:**
  - Windows/Linux: `F12` or `Ctrl + Shift + I`
  - Mac: `Cmd + Option + I`
- **Browser menu:**
  - Chrome: Menu → More Tools → Developer Tools
  - Firefox: Menu → Web Developer → Toggle Tools
  - Safari: Enable in Preferences first, then use Develop menu

### DevTools Panels Overview

#### 1. Elements/Inspector Panel

**Purpose:** View and edit HTML structure and CSS styles in real-time

**What You Can Do:**
- Inspect any element on the page by clicking the element picker (icon at top-left)
- View the HTML structure (DOM tree)
- See all CSS styles applied to selected elements
- Edit HTML and CSS live (changes are temporary)
- View box model (margin, border, padding, content)
- Check element dimensions and positioning

**Try This Exercise:**
1. Visit any website (e.g., `wikipedia.org`)
2. Right-click on a heading and select "Inspect"
3. In the Styles panel, change the color value
4. Edit the text content directly in the HTML
5. Notice changes are only on your local view

#### 2. Console Panel

**Purpose:** View JavaScript errors, log messages, and run JavaScript code

**What You Can Do:**
- See error messages and warnings
- Execute JavaScript commands directly
- Log debugging information
- Test JavaScript snippets

**Try These Commands:**
```javascript
// Get current page URL
console.log(window.location.href);

// Count elements on the page
console.log(document.querySelectorAll('*').length);

// Get page title
console.log(document.title);

// See all images on the page
console.log(document.querySelectorAll('img'));
```

#### 3. Network Panel

**Purpose:** Monitor all network requests and responses

**What You Can Do:**
- See every file loaded by the page (HTML, CSS, JS, images, fonts, etc.)
- View request/response headers
- Check file sizes and load times
- Identify slow-loading resources
- See HTTP status codes
- Inspect API calls and responses

**Important Columns:**
- **Name**: The file or resource requested
- **Status**: HTTP status code (200 = success, 404 = not found, etc.)
- **Type**: Resource type (document, stylesheet, script, image, etc.)
- **Size**: File size
- **Time**: How long it took to load

**Try This Exercise:**
1. Open DevTools Network panel
2. Refresh the page (`F5` or `Cmd+R`)
3. Watch all the requests load
4. Click on any request to see detailed information
5. Look at the "Waterfall" column to see loading sequence

#### 4. Sources/Debugger Panel

**Purpose:** View and debug JavaScript source code

**What You Can Do:**
- View all JavaScript files loaded
- Set breakpoints to pause code execution
- Step through code line by line
- Inspect variable values during execution
- View source maps for minified code

#### 5. Application/Storage Panel

**Purpose:** Inspect stored data in the browser

**What You Can Do:**
- View cookies stored by the website
- Inspect Local Storage and Session Storage
- View cached files
- Check service workers
- Examine IndexedDB data

**Try This Exercise:**
1. Visit a website you've logged into
2. Open Application panel
3. Look at Cookies to see stored authentication data
4. Check Local Storage for saved preferences

#### 6. Performance Panel

**Purpose:** Analyze page loading and runtime performance

**What You Can Do:**
- Record page load performance
- Identify bottlenecks
- See frame rate and rendering performance
- Analyze JavaScript execution time

#### 7. Lighthouse/Audits Panel

**Purpose:** Generate reports on page quality

**What You Can Do:**
- Check performance scores
- Verify accessibility standards
- Audit SEO best practices
- Test Progressive Web App features
- Get improvement suggestions

### Practical DevTools Exercises

#### Exercise 1: Explore Website Structure
1. Visit `github.com`
2. Open DevTools Elements panel
3. Use element picker to select the logo
4. Notice the HTML tag and CSS classes used
5. Expand parent elements to see page structure

#### Exercise 2: Analyze Network Performance
1. Visit `nytimes.com`
2. Open DevTools Network panel
3. Refresh the page
4. Sort by Size (largest first)
5. Identify the largest resources
6. Check total page size at bottom of panel

#### Exercise 3: Inspect Responsive Design
1. Visit any website
2. Open DevTools
3. Click device toolbar icon (looks like phone/tablet)
4. Select different device sizes from dropdown
5. Watch how the page layout changes

#### Exercise 4: Find Your IP Address
1. Visit `whatismyip.com` or similar
2. Open DevTools Console
3. Type: `fetch('https://api.ipify.org?format=json').then(r => r.json()).then(data => console.log(data))`
4. See your public IP address in the response

#### Exercise 5: View DNS Information
1. Open Terminal/Command Prompt
2. Type: `nslookup google.com`
3. See the DNS servers and IP addresses
4. Try with other domains

### DevTools Best Practices

**For Learning:**
- Inspect websites you admire to learn techniques
- Use Console to experiment with JavaScript
- Study how professional sites are structured

**For Development:**
- Always check Console for errors
- Use Network panel to optimize performance
- Test responsive designs in device mode
- Validate accessibility with Lighthouse

**For Debugging:**
- Use Console.log() to track variable values
- Set breakpoints in Sources panel
- Inspect Network requests for API issues
- Check Application panel for storage problems

### Advanced DevTools Features

**Simulate Network Conditions:**
- Network panel → Throttling dropdown
- Test on slow 3G to see user experience

**Capture Screenshots:**
- Device mode → More options → Capture screenshot
- Get full page screenshots easily

**Copy Network Requests:**
- Right-click any Network request
- "Copy as cURL" or "Copy as fetch"
- Recreate requests in terminal or code

**Search Across All Files:**
- `Ctrl/Cmd + Shift + F` in DevTools
- Search entire codebase for strings

## Understanding Servers

### What is a Server?

A **server** is a computer program or device that provides functionality or resources to other programs or devices, called "clients." In web development, servers store, process, and deliver web pages to users.

**Types of Servers:**

1. **Web Server**
   - Serves web pages to browsers
   - Examples: Apache, Nginx, Microsoft IIS
   - Handles HTTP/HTTPS requests

2. **Application Server**
   - Runs application logic
   - Examples: Node.js, Django, Ruby on Rails
   - Processes dynamic content

3. **Database Server**
   - Stores and manages data
   - Examples: MySQL, PostgreSQL, MongoDB
   - Responds to data queries

4. **File Server**
   - Stores and shares files
   - Examples: FTP servers, cloud storage servers

**How Servers Work:**

1. **Always On**: Servers run 24/7 to respond to requests
2. **Listen for Requests**: Wait for client requests on specific ports (e.g., port 80 for HTTP, 443 for HTTPS)
3. **Process Requests**: Execute code, query databases, or retrieve files
4. **Send Responses**: Return HTML, JSON, images, or other data to the client

**Server Response Types:**
- **Static Content**: Pre-written files (HTML, CSS, images) served as-is
- **Dynamic Content**: Generated on-the-fly based on user input, database queries, or time
- **API Responses**: Data in JSON or XML format for applications to consume

### Understanding Client-Server Architecture

The internet works on a **client-server model**:
- **Client**: Your web browser, mobile app, or any device requesting information
- **Server**: The remote computer providing the requested information
- **Request**: Client asks for resources (GET request)
- **Response**: Server sends back the requested resources

## Front End vs. Back End Development

### Front End (Client-Side)

The **front end** is everything users see and interact with directly in their web browser.

**Front End Technologies:**
- **HTML**: Structure and content
- **CSS**: Styling and layout
- **JavaScript**: Interactivity and dynamic behavior

**Front End Frameworks/Libraries:**
- React, Vue, Angular
- Tailwind CSS, Bootstrap
- jQuery (older, but still widely used)

**Front End Developer Responsibilities:**
- User interface (UI) design implementation
- User experience (UX) optimization
- Responsive design (mobile, tablet, desktop)
- Browser compatibility
- Performance optimization (loading speed, animations)
- Accessibility (ensuring all users can access content)

**Where Front End Code Runs:**
- Entirely in the user's web browser
- On the client's device (computer, phone, tablet)
- No server processing required after initial page load

### Back End (Server-Side)

The **back end** is the behind-the-scenes functionality that users don't see directly. It handles data processing, business logic, and database interactions.

**Back End Technologies:**
- **Programming Languages**: JavaScript (Node.js), Python, Ruby, PHP, Java, Go
- **Frameworks**: Express.js, Django, Ruby on Rails, Laravel, Spring Boot
- **Databases**: MySQL, PostgreSQL, MongoDB, Redis

**Back End Developer Responsibilities:**
- Server configuration and management
- Database design and management
- API development
- Authentication and authorization
- Security implementation
- Business logic and data processing
- Integration with third-party services

**Where Back End Code Runs:**
- On web servers in data centers
- In the cloud (AWS, Google Cloud, Azure, Heroku)
- Never visible to the user directly

### Full Stack Development

A **full stack developer** works with both front end and back end technologies, understanding the complete web application architecture from user interface to database.

**Common Full Stack Combinations:**
- **MERN Stack**: MongoDB, Express, React, Node.js
- **MEAN Stack**: MongoDB, Express, Angular, Node.js
- **LAMP Stack**: Linux, Apache, MySQL, PHP
- **Jamstack**: JavaScript, APIs, Markup

### KEY TERMS

**Server**: A computer that hosts your website and responds to client requests. Servers make the internet work, but in this class we will avoid dealing with them directly wherever possible.

**Client**: The device/browser that is visiting your website (the opposite of the server). All the code we write will be executed on the client.

**Front End / Back End (Server Side / Client Side)**: The front end and back end refer to the client and server side respectively. Example: "HTML is a front end language"

**HTTP/HTTPS**: Protocols used for transferring web pages. HTTPS is the secure version.

**API (Application Programming Interface)**: A way for different software applications to communicate with each other.

**Request/Response Cycle**: The process of a client sending a request and server sending back a response.

### Everyone is welcome in this class, we all belong here.
Coding is not reserved for a particular type person. Coding is a skill that is constantly evolving and changing, and anyone who is interested in learning and staying current with these developments can benefit from taking a coding class. Additionally, coding is a skill that can be learned and mastered by anyone, regardless of their age, gender, or background. It is an inclusive and accessible field, and everyone is welcome to join and learn.

## Homework

1. Choose three websites to explore. These can be websites for businesses, organizations, or personal blogs. Spend at least 5 minutes on each website, taking note of the elements that you like and dislike. Consider the following questions as you explore:
   - What is the overall design of the website? Is it visually appealing?
   - Is the navigation intuitive? Can you find what you're looking for easily?
   - Is the content organized in a logical way? Is it easy to read and understand?
   - Are there any interactive elements, such as forms, videos, or games?
   - Is the website responsive, meaning does it adjust to the size of the screen it is being viewed on?

2. After exploring each website, write a short summary analyzing the elements you liked and disliked, and explaining why. Be sure to include specific examples from the websites to support your analysis.
