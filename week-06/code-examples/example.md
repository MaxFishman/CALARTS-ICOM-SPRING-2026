# Code Examples - Week 06: Deployment

## Table of Contents
1. [GitHub Pages Deployment](#github-pages-deployment)
2. [Firebase Hosting Deployment](#firebase-hosting-deployment)
3. [AWS S3 Static Site Deployment](#aws-s3-static-site-deployment)
4. [Local Server Setup](#local-server-setup)
5. [Domain Configuration](#domain-configuration)

---

## GitHub Pages Deployment

### Example 1: Simple Static Site Deployment

**Project Structure:**
```
my-portfolio/
├── index.html
├── styles.css
├── script.js
└── images/
    └── profile.jpg
```

**index.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Portfolio</h1>
        <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    
    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>I'm a web developer passionate about creating beautiful websites.</p>
        </section>
        
        <section id="projects">
            <h2>My Projects</h2>
            <div class="project-card">
                <h3>Project 1</h3>
                <p>Description of my amazing project.</p>
            </div>
        </section>
        
        <section id="contact">
            <h2>Contact</h2>
            <p>Email: hello@example.com</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2026 My Portfolio. Deployed with GitHub Pages.</p>
    </footer>
    
    <script src="script.js"></script>
</body>
</html>
```

**Deployment Steps:**
```bash
# 1. Initialize git repository
git init

# 2. Add files
git add .

# 3. Commit
git commit -m "Initial commit"

# 4. Create GitHub repository (via GitHub website)
# Then link and push:
git remote add origin https://github.com/username/my-portfolio.git
git branch -M main
git push -u origin main

# 5. Enable GitHub Pages
# Go to: Repository Settings → Pages
# Source: Deploy from main branch
# Your site will be live at: https://username.github.io/my-portfolio/
```

### Example 2: GitHub Pages with Custom Domain

**Add CNAME file:**
```bash
# Create CNAME file in repository root
echo "www.myportfolio.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

**DNS Configuration at Domain Registrar:**
```
# For www subdomain:
Type: CNAME
Name: www
Value: username.github.io
TTL: 3600

# For apex domain (optional):
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### Example 3: GitHub Actions for Automatic Deployment

**.github/workflows/deploy.yml:**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build site
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Firebase Hosting Deployment

### Example 4: Deploy Static Site to Firebase

**Setup:**
```bash
# 1. Install Firebase CLI
npm install -g firebase-tools

# 2. Login to Firebase
firebase login

# 3. Initialize Firebase in your project
firebase init hosting
```

**firebase.json configuration:**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      },
      {
        "source": "**/*.@(css|js)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=604800"
          }
        ]
      }
    ]
  }
}
```

**Deployment commands:**
```bash
# Build your site (if needed)
npm run build

# Deploy to Firebase
firebase deploy

# Deploy only hosting
firebase deploy --only hosting

# Your site is live at:
# https://your-project-id.web.app
# https://your-project-id.firebaseapp.com
```

### Example 5: Firebase with Custom Domain

```bash
# Add custom domain via Firebase Console or CLI
firebase hosting:channel:deploy production

# In Firebase Console:
# 1. Go to Hosting → Add custom domain
# 2. Enter your domain: www.example.com
# 3. Follow verification steps
# 4. Add DNS records shown by Firebase
```

**DNS Records for Firebase:**
```
Type: A
Name: @
Value: (Firebase provides these)

Type: TXT
Name: @
Value: (Verification code from Firebase)
```

---

## AWS S3 Static Site Deployment

### Example 6: S3 Static Website Hosting

**AWS CLI commands:**
```bash
# 1. Install AWS CLI
# Download from: https://aws.amazon.com/cli/

# 2. Configure AWS credentials
aws configure
# Enter: AWS Access Key ID, Secret Access Key, Region, Output format

# 3. Create S3 bucket
aws s3 mb s3://my-website-bucket

# 4. Enable static website hosting
aws s3 website s3://my-website-bucket \
    --index-document index.html \
    --error-document error.html

# 5. Set bucket policy for public access
aws s3api put-bucket-policy \
    --bucket my-website-bucket \
    --policy file://bucket-policy.json

# 6. Upload files
aws s3 sync ./dist s3://my-website-bucket --delete

# 7. Your site is live at:
# http://my-website-bucket.s3-website-us-east-1.amazonaws.com
```

**bucket-policy.json:**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-website-bucket/*"
    }
  ]
}
```

### Example 7: S3 with CloudFront CDN

**CloudFront setup script:**
```bash
# Create CloudFront distribution
aws cloudfront create-distribution \
    --origin-domain-name my-website-bucket.s3.amazonaws.com \
    --default-root-object index.html

# Get distribution domain name (output from above command)
# Example: d123456abcdef8.cloudfront.net

# Update DNS to point to CloudFront
# Type: CNAME
# Name: www
# Value: d123456abcdef8.cloudfront.net
```

**Deployment script (deploy.sh):**
```bash
#!/bin/bash

# Build the site
npm run build

# Sync to S3
aws s3 sync ./dist s3://my-website-bucket \
    --delete \
    --cache-control max-age=31536000 \
    --exclude "index.html" \
    --exclude "*.html"

# Sync HTML files with shorter cache
aws s3 sync ./dist s3://my-website-bucket \
    --delete \
    --cache-control max-age=0,must-revalidate \
    --include "*.html"

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
    --distribution-id E1234567890ABC \
    --paths "/*"

echo "Deployment complete!"
```

---

## Local Server Setup

### Example 8: Simple Python HTTP Server

```bash
# Navigate to your project directory
cd /path/to/your/project

# Start Python server (Python 3)
python3 -m http.server 8000

# Or specify different port
python3 -m http.server 3000

# Access at: http://localhost:8000
```

### Example 9: Node.js HTTP Server

**server.js:**
```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    
    // Parse URL
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }
    
    // Get file extension
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    // Read and serve file
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // File not found
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - File Not Found</h1>', 'utf-8');
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`, 'utf-8');
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
```

**Run the server:**
```bash
node server.js
```

### Example 10: Express.js Server

**Install Express:**
```bash
npm init -y
npm install express
```

**app.js:**
```javascript
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

// Serve static files from 'public' directory
app.use(express.static('public'));

// Basic routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/data', (req, res) => {
    res.json({
        message: 'Hello from the server!',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```

### Example 11: Nginx Configuration for Production

**nginx.conf:**
```nginx
server {
    listen 80;
    server_name example.com www.example.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name example.com www.example.com;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    # SSL Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    
    # Root directory
    root /var/www/html;
    index index.html index.htm;
    
    # Caching for static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Main location block
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

---

## Domain Configuration

### Example 12: DNS Configuration Examples

**For GitHub Pages:**
```
# Apex domain (example.com)
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600

# Subdomain (www.example.com)
Type: CNAME
Name: www
Value: username.github.io
TTL: 3600
```

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600

Type: CNAME
Name: www
Value: yoursitename.netlify.app
TTL: 3600
```

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Example 13: SSL Certificate with Let's Encrypt (Certbot)

```bash
# Install Certbot (Ubuntu/Debian)
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Obtain certificate for Nginx
sudo certbot --nginx -d example.com -d www.example.com

# Test automatic renewal
sudo certbot renew --dry-run

# Auto-renewal is configured via systemd/cron
# Certificates auto-renew before expiration
```

**Manual certificate generation:**
```bash
# Generate certificate
sudo certbot certonly --standalone -d example.com -d www.example.com

# Certificates will be saved at:
# /etc/letsencrypt/live/example.com/fullchain.pem
# /etc/letsencrypt/live/example.com/privkey.pem
```

### Example 14: Environment Variables for Deployment

**.env file (never commit this!):**
```bash
# API Keys
API_KEY=your_api_key_here
FIREBASE_API_KEY=your_firebase_key

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/dbname

# Environment
NODE_ENV=production
PORT=8000

# Domain
DOMAIN=https://www.example.com
```

**Using environment variables in Node.js:**
```javascript
require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

app.get('/api/data', (req, res) => {
    // Use API_KEY securely
    // Never expose it to the client
    res.json({ message: 'Data retrieved successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

### Example 15: Deployment Checklist Script

**pre-deploy.sh:**
```bash
#!/bin/bash

echo "Running pre-deployment checks..."

# Check if all tests pass
echo "Running tests..."
npm test
if [ $? -ne 0 ]; then
    echo "❌ Tests failed! Fix errors before deploying."
    exit 1
fi

# Check for console.log statements
echo "Checking for console.log statements..."
if grep -r "console.log" src/; then
    echo "⚠️  Warning: console.log statements found. Remove before production."
fi

# Build the project
echo "Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Check build output size
BUILD_SIZE=$(du -sh dist | cut -f1)
echo "Build size: $BUILD_SIZE"

# Lint code
echo "Linting code..."
npm run lint
if [ $? -ne 0 ]; then
    echo "⚠️  Linting issues found. Consider fixing before deploy."
fi

echo "✅ All checks passed! Ready to deploy."
echo ""
echo "Deploy with:"
echo "  git push origin main"
echo "  firebase deploy"
echo "  aws s3 sync dist/ s3://your-bucket"
```

### Example 16: Deployment with Package.json Scripts

**package.json:**
```json
{
  "name": "my-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "jest",
    "lint": "eslint src/",
    "deploy:gh-pages": "npm run build && gh-pages -d dist",
    "deploy:firebase": "npm run build && firebase deploy",
    "deploy:s3": "npm run build && aws s3 sync dist/ s3://my-bucket --delete",
    "deploy:netlify": "npm run build && netlify deploy --prod --dir=dist"
  },
  "devDependencies": {
    "gh-pages": "^5.0.0",
    "vite": "^4.5.0"
  }
}
```

**Usage:**
```bash
# Deploy to GitHub Pages
npm run deploy:gh-pages

# Deploy to Firebase
npm run deploy:firebase

# Deploy to AWS S3
npm run deploy:s3

# Deploy to Netlify
npm run deploy:netlify
```

---

## Complete Deployment Example

### Example 17: Portfolio Site with Multiple Deployment Options

**Project Structure:**
```
my-portfolio/
├── public/
│   ├── index.html
│   ├── about.html
│   └── projects.html
├── src/
│   ├── styles/
│   │   └── main.css
│   └── js/
│       └── app.js
├── dist/ (generated by build)
├── .gitignore
├── CNAME (for GitHub Pages custom domain)
├── firebase.json (for Firebase)
├── netlify.toml (for Netlify)
├── package.json
└── README.md
```

**package.json:**
```json
{
  "name": "my-portfolio",
  "version": "1.0.0",
  "description": "Personal portfolio website",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && npm run deploy:gh-pages",
    "deploy:gh-pages": "gh-pages -d dist",
    "deploy:firebase": "firebase deploy --only hosting",
    "deploy:netlify": "netlify deploy --prod --dir=dist"
  },
  "devDependencies": {
    "gh-pages": "^5.0.0",
    "vite": "^4.5.0"
  }
}
```

**.gitignore:**
```
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
.cache/
```

**Deploy commands:**
```bash
# Build the site
npm run build

# Deploy to GitHub Pages
npm run deploy:gh-pages

# Or deploy to Firebase
npm run deploy:firebase

# Or deploy to Netlify
npm run deploy:netlify

# Or deploy to AWS S3
aws s3 sync dist/ s3://my-portfolio-bucket --delete
```

---

## Summary

These code examples demonstrate:

1. **GitHub Pages**: Simple deployment for static sites with custom domains
2. **Firebase Hosting**: Modern hosting with CDN and easy CLI deployment
3. **AWS S3**: Enterprise-grade static hosting with CloudFront CDN
4. **Local Servers**: Development and production server configurations
5. **Domain Management**: DNS configuration for various platforms
6. **Automation**: Scripts and workflows for streamlined deployment

Choose the platform that best fits your project needs:
- **GitHub Pages**: Free, easy, perfect for portfolios and documentation
- **Firebase**: Great for static and JAMstack sites, free tier available
- **AWS**: Enterprise features, scalable, more complex setup
- **Local**: Full control, good for learning, not recommended for production

Remember to:
- Test locally before deploying
- Use version control (Git)
- Configure HTTPS/SSL
- Set up custom domains properly
- Monitor your site after deployment
- Keep credentials secure (never commit .env files!)
