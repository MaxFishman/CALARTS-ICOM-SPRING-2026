# Lecture Notes - Week 06

## Topics Covered

### Web Deployment Overview
- Understanding deployment fundamentals
- Different deployment platforms and their use cases
- Static vs dynamic site deployment
- Domain management and DNS configuration

## Understanding Web Deployment

### What is Deployment?

**Deployment** is the process of making your website or web application available on the internet so that other people can access it. While you've been developing on your local machine (localhost), deployment moves your code to a server that's accessible to everyone.

**Key Concepts:**
- **Local Development**: Building and testing on your own computer
- **Production**: The live version of your site that users access
- **Hosting**: The service that stores and serves your website files
- **Domain**: The human-readable address (like example.com) that points to your site

### Types of Websites

Understanding what type of website you have helps determine the best deployment option:

1. **Static Websites**
   - Made of HTML, CSS, and JavaScript files
   - No server-side processing required
   - No database needed
   - Examples: Portfolio sites, landing pages, documentation sites
   - **Best for**: GitHub Pages, simple hosting

2. **Dynamic Websites**
   - Require server-side processing (Node.js, Python, PHP, etc.)
   - Often include databases
   - Generate content on-the-fly
   - Examples: Social networks, e-commerce sites, web applications
   - **Best for**: Google Cloud, AWS, Heroku, Vercel

## Deployment Platforms

### GitHub Pages

**What is GitHub Pages?**
GitHub Pages is a free static site hosting service that takes HTML, CSS, and JavaScript files directly from a GitHub repository and publishes a website.

**Advantages:**
- **Free**: No cost for public repositories
- **Easy**: Simple setup, integrated with Git workflow
- **Custom Domains**: Can link your own domain name
- **HTTPS**: Automatic SSL certificates
- **Version Control**: Every change is tracked in Git

**Limitations:**
- **Static Sites Only**: No server-side code (no Node.js, Python, etc.)
- **File Size**: 1GB repository size limit
- **Bandwidth**: 100GB per month soft limit
- **Build Time**: 10 minutes maximum build time

**When to Use GitHub Pages:**
- Personal portfolio websites
- Project documentation
- Landing pages
- Static blogs (Jekyll, Hugo, etc.)
- Demo sites for projects

**How GitHub Pages Works:**
1. You push code to a GitHub repository
2. GitHub Pages detects changes in specific branch (usually `main` or `gh-pages`)
3. Files are served directly as a website
4. Site is available at `username.github.io/repository-name`

**Deployment Steps:**
1. Create a GitHub repository
2. Add your HTML, CSS, and JavaScript files
3. Go to repository Settings → Pages
4. Select source branch (usually `main`)
5. Optionally select a folder (`/` root or `/docs`)
6. Save and wait a few minutes
7. Your site is live at the provided URL

**GitHub Pages with Custom Domain:**
1. Purchase a domain from a registrar (GoDaddy, Namecheap, Google Domains)
2. Add a `CNAME` file to your repository with your domain
3. Configure DNS records at your domain registrar:
   - For apex domain (example.com): Add A records pointing to GitHub IPs
   - For subdomain (www.example.com): Add CNAME record pointing to username.github.io
4. In GitHub Settings → Pages, enter your custom domain
5. Enable HTTPS (automatic after DNS propagates)

### Google Cloud Platform (GCP)

**What is Google Cloud?**
Google Cloud Platform is a suite of cloud computing services offering infrastructure, platform, and serverless computing options.

**Key Services for Web Hosting:**
- **Cloud Storage**: Host static websites
- **App Engine**: Platform-as-a-Service (PaaS) for web applications
- **Cloud Run**: Containerized applications that scale automatically
- **Compute Engine**: Virtual machines for full control
- **Firebase Hosting**: Fast, secure hosting for web apps

**Advantages:**
- **Scalability**: Handle any amount of traffic
- **Performance**: Google's global infrastructure
- **Flexibility**: Support for any programming language
- **Integration**: Easy integration with other Google services
- **Free Tier**: Generous free tier for experimentation

**Limitations:**
- **Complexity**: Steeper learning curve than simpler platforms
- **Cost**: Can become expensive at scale
- **Requires Credit Card**: Even for free tier

**When to Use Google Cloud:**
- Full-stack web applications
- Sites requiring databases
- Applications needing specific server configurations
- Projects that may need to scale significantly
- When using other Google Cloud services (Firestore, Cloud Functions)

**Popular GCP Deployment Options:**

1. **Firebase Hosting** (Easiest for beginners)
   - Best for: Static sites and single-page applications
   - Features: CDN, automatic SSL, custom domains
   - Free tier: 10GB storage, 360MB/day transfer

2. **App Engine** (Good for dynamic sites)
   - Best for: Web applications with server-side code
   - Supports: Node.js, Python, Java, PHP, Ruby, Go
   - Automatic scaling and load balancing

3. **Cloud Run** (Container-based)
   - Best for: Containerized applications
   - Deploy Docker containers
   - Pay per request (very cost-effective)

**Basic Deployment Steps (Firebase Hosting):**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize project: `firebase init hosting`
4. Deploy: `firebase deploy`

### Amazon Web Services (AWS)

**What is AWS?**
Amazon Web Services is the most comprehensive and widely adopted cloud platform, offering over 200 services including computing, storage, and databases.

**Key Services for Web Hosting:**
- **S3 (Simple Storage Service)**: Static website hosting
- **EC2 (Elastic Compute Cloud)**: Virtual servers
- **Elastic Beanstalk**: Easy deployment for web apps
- **Amplify**: Full-stack development platform
- **Lambda**: Serverless functions
- **CloudFront**: Content Delivery Network (CDN)

**Advantages:**
- **Market Leader**: Most mature cloud platform
- **Comprehensive**: Services for every possible need
- **Global Reach**: Data centers worldwide
- **Reliability**: Industry-leading uptime
- **Documentation**: Extensive resources and community

**Limitations:**
- **Complexity**: Can be overwhelming for beginners
- **Pricing**: Complex pricing structure, can be expensive
- **Learning Curve**: Requires significant time to master

**When to Use AWS:**
- Enterprise-level applications
- Complex architectures requiring multiple services
- When you need specific AWS services
- High-traffic applications requiring global CDN
- Applications with specific compliance requirements

**Popular AWS Deployment Options:**

1. **AWS Amplify** (Easiest)
   - Best for: Modern web apps, React, Vue, Angular
   - Features: CI/CD, hosting, authentication, APIs
   - Git-based deployment workflow

2. **S3 + CloudFront** (Static sites)
   - Best for: High-performance static sites
   - S3 stores files, CloudFront distributes globally
   - Very cost-effective for static content

3. **Elastic Beanstalk** (Dynamic apps)
   - Best for: Full web applications
   - Supports multiple programming languages
   - Handles load balancing, scaling, monitoring

4. **EC2** (Full control)
   - Best for: Custom server configurations
   - Complete control over environment
   - Requires server administration knowledge

**Basic Deployment Steps (S3 Static Hosting):**
1. Create S3 bucket
2. Enable static website hosting
3. Upload files
4. Set bucket permissions (public read)
5. Access site via S3 website URL
6. Optionally add CloudFront for CDN

### Local PC Deployment

**What is Local Deployment?**
Running a web server on your own physical computer to host a website accessible over the internet.

**Why Deploy Locally?**
- **Learning**: Understand server configuration deeply
- **Cost**: No hosting fees
- **Control**: Complete control over hardware and software
- **Privacy**: Data stays on your own hardware
- **Testing**: Test production-like environments

**Requirements:**
- **Static IP Address**: Or dynamic DNS service
- **Port Forwarding**: Configure router to forward traffic
- **Always-On Computer**: Server must run 24/7
- **Adequate Internet**: Sufficient upload bandwidth
- **Security**: Proper firewall and security configuration

**Challenges:**
- **Reliability**: Home internet not as reliable as data centers
- **Security Risks**: Your home network exposed to internet
- **Power Costs**: Computer running constantly
- **Limited Bandwidth**: Home internet upload speeds often slow
- **No Support**: You're responsible for everything
- **ISP Restrictions**: Some ISPs block hosting or charge extra

**Setting Up Local Web Server:**

1. **For Static Sites:**
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js (http-server)
   npm install -g http-server
   http-server -p 8000
   
   # Using PHP
   php -S localhost:8000
   ```

2. **For Production Local Server:**
   - Install web server software (Apache, Nginx)
   - Configure virtual hosts
   - Set up SSL certificate (Let's Encrypt)
   - Configure router port forwarding (port 80 and 443)
   - Set up dynamic DNS (if no static IP)

**Port Forwarding Steps:**
1. Find your computer's local IP address
2. Access your router's admin panel (usually 192.168.1.1)
3. Find port forwarding section
4. Forward port 80 (HTTP) and 443 (HTTPS) to your computer's IP
5. Test from outside your network

**Security Considerations:**
- Use strong passwords
- Keep software updated
- Configure firewall properly
- Use HTTPS (SSL/TLS certificates)
- Monitor logs for suspicious activity
- Consider using a reverse proxy (Nginx)
- Implement rate limiting
- Regular backups

**Dynamic DNS Services:**
If you don't have a static IP address, use services like:
- No-IP
- DuckDNS
- Dynu
- FreeDNS

**When Local Deployment Makes Sense:**
- Personal development server
- Internal company applications
- Learning server administration
- Running home automation interfaces
- Not recommended for serious production websites

## Buying and Linking Domains

### Understanding Domains

**What is a Domain Name?**
A domain name is the human-readable address of a website (like `example.com`) that maps to an IP address where your website is hosted.

**Domain Structure:**
- **TLD (Top-Level Domain)**: `.com`, `.org`, `.net`, `.dev`, etc.
- **Second-Level Domain**: The main part you choose (`example` in example.com)
- **Subdomain**: Optional prefix (`www`, `blog`, `shop` in www.example.com)

**Example Breakdown:**
```
https://blog.example.com/page
  │      │     │      │    │
  │      │     │      │    └─ Path
  │      │     │      └────── TLD
  │      │     └───────────── Second-level domain
  │      └─────────────────── Subdomain
  └────────────────────────── Protocol
```

### Choosing a Domain Name

**Best Practices:**
- **Keep it short**: Easier to remember and type
- **Make it memorable**: Unique and catchy
- **Avoid numbers and hyphens**: Can be confusing
- **Use appropriate TLD**: `.com` is most recognizable
- **Check trademark**: Ensure you're not infringing on trademarks
- **Consider SEO**: Include relevant keywords if possible
- **Think long-term**: Choose a name that can grow with your project

**Popular Domain Registrars:**
- **Namecheap**: Affordable, user-friendly
- **Google Domains**: Clean interface, integrated with Google services
- **GoDaddy**: Largest registrar, frequent sales
- **Porkbun**: Very affordable, no-nonsense
- **Cloudflare**: Registrar with at-cost pricing
- **Name.com**: Good customer service

**Domain Costs:**
- `.com`: Typically $10-15/year
- `.dev`: Typically $12-15/year
- `.io`: Typically $30-60/year
- `.org`: Typically $10-15/year
- `.net`: Typically $10-15/year

### DNS (Domain Name System) Configuration

**What is DNS?**
DNS translates domain names to IP addresses, directing visitors to your website's server.

**Common DNS Record Types:**

1. **A Record** (Address Record)
   - Maps domain to IPv4 address
   - Example: `example.com` → `192.0.2.1`
   - Use for: Connecting root domain to server

2. **AAAA Record**
   - Maps domain to IPv6 address
   - Example: `example.com` → `2001:db8::1`
   - Use for: IPv6 support

3. **CNAME Record** (Canonical Name)
   - Maps domain to another domain
   - Example: `www.example.com` → `example.com`
   - Use for: Subdomains, pointing to other services

4. **MX Record** (Mail Exchange)
   - Specifies mail servers
   - Use for: Email configuration

5. **TXT Record**
   - Holds text information
   - Use for: Verification, SPF records, DKIM

**DNS Propagation:**
- DNS changes take time to propagate globally
- Usually 1-24 hours, sometimes up to 48 hours
- Use `nslookup` or online tools to check status

### Linking Domain to GitHub Pages

**Steps:**
1. **Add CNAME file to repository**
   - Create file named `CNAME` (no extension)
   - Add your domain: `www.example.com`
   - Commit and push

2. **Configure DNS at registrar:**
   
   For `www.example.com`:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   TTL: 3600
   ```
   
   For apex domain `example.com`:
   ```
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

3. **Configure in GitHub:**
   - Repository Settings → Pages
   - Enter custom domain
   - Wait for DNS check to complete
   - Enable "Enforce HTTPS"

### Linking Domain to Other Platforms

**Firebase Hosting:**
1. In Firebase Console, go to Hosting
2. Click "Add custom domain"
3. Follow verification steps
4. Add provided DNS records to your registrar
5. Wait for SSL certificate provisioning

**Google Cloud (App Engine):**
1. Go to App Engine → Settings → Custom domains
2. Add domain and verify ownership
3. Update DNS records as instructed
4. SSL certificate generated automatically

**AWS (S3 + CloudFront):**
1. Create S3 bucket with exact domain name
2. Create CloudFront distribution
3. Get CloudFront domain name
4. Add CNAME record pointing to CloudFront
5. Configure SSL certificate in AWS Certificate Manager

**Vercel/Netlify:**
1. Go to domain settings in dashboard
2. Add your custom domain
3. Update DNS records at registrar:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com (or Netlify equivalent)
   ```
4. SSL configured automatically

### SSL/TLS Certificates (HTTPS)

**Why HTTPS Matters:**
- **Security**: Encrypts data between user and server
- **Trust**: Browsers show padlock icon
- **SEO**: Google ranks HTTPS sites higher
- **Required**: Many modern web features require HTTPS

**Getting SSL Certificates:**

1. **Free Options:**
   - **Let's Encrypt**: Free, automated certificates
   - **Cloudflare**: Free SSL with their DNS service
   - **Platform-included**: GitHub Pages, Netlify, Vercel, Firebase all include free SSL

2. **Paid Options:**
   - Domain registrars often sell SSL certificates
   - Not necessary unless you need extended validation

**Enabling HTTPS:**
- Most modern hosting platforms enable HTTPS automatically
- For custom servers, use Certbot with Let's Encrypt
- Always enforce HTTPS (redirect HTTP to HTTPS)

## Deployment Workflow Best Practices

### Development → Staging → Production

**Three-Stage Pipeline:**

1. **Development**
   - Work on local machine
   - Test thoroughly
   - Use version control (Git)

2. **Staging**
   - Deploy to staging environment
   - Test in production-like environment
   - Get feedback from team/stakeholders

3. **Production**
   - Deploy to live site
   - Monitor for issues
   - Be ready to rollback if needed

### Continuous Deployment

**Benefits:**
- Automated testing
- Faster deployment
- Fewer human errors
- Easy rollbacks

**Tools:**
- GitHub Actions
- GitLab CI/CD
- Travis CI
- Circle CI
- Jenkins

### Pre-Deployment Checklist

**Before deploying:**
- [ ] All tests passing
- [ ] No console errors
- [ ] Responsive design tested
- [ ] Cross-browser compatibility checked
- [ ] Performance optimized
- [ ] SEO meta tags added
- [ ] Analytics configured
- [ ] SSL certificate ready
- [ ] Backup of current production (if updating)
- [ ] Environment variables configured
- [ ] Database migrations tested (if applicable)

### Post-Deployment Checklist

**After deploying:**
- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Forms working
- [ ] Links functional
- [ ] Images loading
- [ ] HTTPS working
- [ ] Mobile view correct
- [ ] Test on multiple browsers
- [ ] Check analytics tracking
- [ ] Monitor error logs

## Troubleshooting Common Issues

### Site Not Loading

**Possible causes:**
- DNS not propagated yet (wait 24-48 hours)
- Incorrect DNS records
- Firewall blocking traffic
- Server not running
- Incorrect file permissions

**Solutions:**
- Check DNS with `nslookup yourdomain.com`
- Verify DNS records at registrar
- Check server status
- Review error logs

### 404 Not Found

**Possible causes:**
- Missing index.html file
- Incorrect file paths
- Case sensitivity (Linux servers)
- Build didn't copy all files

**Solutions:**
- Ensure index.html exists in root
- Check file paths are correct
- Match exact case of filenames
- Verify build output includes all files

### HTTPS Not Working

**Possible causes:**
- SSL certificate not yet issued
- DNS not pointing correctly
- Certificate expired
- Mixed content (HTTP resources on HTTPS page)

**Solutions:**
- Wait for certificate provisioning
- Verify DNS configuration
- Renew certificate
- Ensure all resources load via HTTPS

### Slow Loading Times

**Possible causes:**
- Large image files
- Too many HTTP requests
- No caching configured
- Slow server response

**Solutions:**
- Optimize and compress images
- Minify CSS and JavaScript
- Enable browser caching
- Use CDN
- Upgrade hosting plan

## Key Takeaways

1. **Choose the right platform**: Match your deployment platform to your project needs
2. **Start simple**: GitHub Pages is great for learning and static sites
3. **Plan for scale**: Consider future needs when choosing a platform
4. **Use version control**: Always deploy from Git for tracking and rollbacks
5. **Custom domains**: Professional appearance, worth the $10-15/year
6. **HTTPS is essential**: Security, trust, and SEO benefits
7. **Test before deploying**: Catch issues in development, not production
8. **Monitor your site**: Watch for errors and performance issues
9. **Document your setup**: Make it easy to redeploy or help others
10. **Security matters**: Keep software updated, use strong passwords, enable HTTPS

## Additional Resources

### Documentation
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Firebase Hosting Guide](https://firebase.google.com/docs/hosting)
- [AWS Getting Started](https://aws.amazon.com/getting-started/)
- [Google Cloud Documentation](https://cloud.google.com/docs)

### Tools
- [Let's Encrypt](https://letsencrypt.org/) - Free SSL certificates
- [Cloudflare](https://www.cloudflare.com/) - DNS and CDN services
- [GTmetrix](https://gtmetrix.com/) - Performance testing
- [SSL Labs](https://www.ssllabs.com/ssltest/) - SSL configuration testing

### Learning Resources
- [How DNS Works](https://howdns.works/)
- [Deployment Best Practices](https://web.dev/deployment/)
- [Web.dev](https://web.dev/) - Modern web development best practices
