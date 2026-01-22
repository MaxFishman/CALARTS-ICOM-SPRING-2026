# Lecture Notes - Week 09

## Introduction to WordPress

WordPress is the world's most popular Content Management System (CMS), powering over 40% of all websites on the internet. It provides a user-friendly interface for creating and managing website content without requiring extensive coding knowledge.

### What is WordPress?

**WordPress** is an open-source content management system that allows users to create, edit, and publish content on the web. Originally created as a blogging platform in 2003, it has evolved into a versatile CMS that can power any type of website.

**Key Features:**
- **User-Friendly**: Intuitive dashboard and content editor
- **Customizable**: Thousands of themes and plugins available
- **SEO-Friendly**: Built-in features and plugins for search engine optimization
- **Responsive**: Most themes are mobile-friendly by default
- **Community**: Large, active community providing support and resources

### WordPress.com vs WordPress.org

**WordPress.com** (Hosted Solution):
- Managed hosting service by Automattic
- Quick setup with limited customization on free plans
- Automatic updates and backups
- Restricted plugin installation (on free/lower tiers)
- Good for beginners and simple sites

**WordPress.org** (Self-Hosted):
- Download the free WordPress software
- Install on your own hosting provider
- Complete control over customization
- Access to all themes and plugins
- Requires more technical knowledge
- You're responsible for updates and security

## Choosing a Host

### Hosting Options

When self-hosting WordPress, you need to choose a web hosting provider. Important factors to consider:

1. **Performance**: Server speed and uptime
2. **Support**: Quality of customer service
3. **Scalability**: Ability to handle traffic growth
4. **Price**: Monthly or annual costs
5. **Features**: Email accounts, SSL certificates, backups

**Popular Hosting Providers:**
- **Bluehost**: Official WordPress.org recommendation
- **SiteGround**: Known for excellent customer support
- **WP Engine**: Premium managed WordPress hosting
- **HostGator**: Budget-friendly option
- **DreamHost**: Good for beginners

### Setting Up with Local

**Local** (formerly Local by Flywheel) is a free application that lets you run WordPress on your local computer for development and testing.

**Advantages of Local:**
- No hosting costs during development
- Work offline
- Test changes safely before going live
- Create multiple WordPress sites easily
- One-click WordPress installation

**Setup Process:**
1. Download Local from localwp.com
2. Install the application on your computer
3. Click "Create a new site"
4. Choose site name and local domain
5. Select PHP version and web server (Preferred default)
6. Set up WordPress admin username and password
7. Click "Add Site" to create your local WordPress installation

**Local Features:**
- Built-in SSL certificates
- Easy database management with Adminer
- Live Link feature to share local sites
- Blueprint feature to save site configurations

## WordPress Dashboard

After logging in to WordPress, you'll see the **Dashboard** - the administrative control panel for your website.

### Dashboard Components:

**Left Sidebar Menu:**
- Posts
- Media
- Pages
- Comments
- Appearance
- Plugins
- Users
- Tools
- Settings

**Main Content Area:**
- Quick Draft widget
- At a Glance widget (posts, pages, comments count)
- Activity feed
- Site Health Status

## Creating Posts

**Posts** are blog entries that display in reverse chronological order (newest first). They are categorized, tagged, and appear in RSS feeds.

### When to Use Posts:
- Blog articles
- News updates
- Time-sensitive content
- Content you want to categorize
- Content with an author and publication date

### Creating a Post:

1. Click **Posts → Add New** in the dashboard
2. Enter a title in the title field
3. Write content in the editor (Block Editor/Gutenberg)
4. Add categories and tags in the right sidebar
5. Set a featured image
6. Choose post format (if theme supports it)
7. Click **Publish** when ready

### Block Editor (Gutenberg):
- Modern WordPress editor introduced in version 5.0
- Content is organized into "blocks"
- Each paragraph, image, heading, etc. is a separate block
- Blocks can be moved, duplicated, and customized
- Click the **+** button to add new blocks

**Common Block Types:**
- Paragraph: Basic text content
- Heading: H1 through H6 headings
- Image: Single images
- Gallery: Multiple images
- List: Bulleted or numbered lists
- Quote: Blockquotes
- Code: Code snippets
- Button: Call-to-action buttons
- Columns: Multi-column layouts

## Creating Pages

**Pages** are static content that doesn't change frequently. They don't have categories or tags and don't appear in chronological order.

### When to Use Pages:
- About page
- Contact page
- Homepage
- Services page
- Privacy policy
- Terms and conditions

### Creating a Page:

1. Click **Pages → Add New** in the dashboard
2. Enter a title
3. Add content using the Block Editor
4. Choose a **Page Template** (if available)
5. Set **Parent Page** to create page hierarchy
6. Adjust **Order** for menu placement
7. Click **Publish**

### Page Attributes:

**Template:**
- Default Template
- Full Width
- Landing Page
- Contact Template
- (Templates vary by theme)

**Parent:**
- Creates hierarchical structure
- Parent Page > Child Page
- Example: Services > Web Design

**Order:**
- Numeric value for menu sorting
- Lower numbers appear first

## Posts vs Pages

| Feature | Posts | Pages |
|---------|-------|-------|
| Purpose | Blog content, news | Static content |
| Date | Shows publication date | Typically no date |
| Organization | Categories & Tags | Hierarchical (parent/child) |
| RSS Feed | Included | Not included |
| Comments | Usually enabled | Usually disabled |
| Archive | Shows in archives | No archive |

## Themes

A **theme** controls the visual appearance and layout of your WordPress site. It determines colors, fonts, layout structure, and design elements.

### Theme Basics:

**What Themes Control:**
- Overall site layout
- Color schemes
- Typography
- Header and footer design
- Widget areas
- Page templates
- Responsive design

**Theme Types:**
- **Free Themes**: Available in WordPress.org theme directory
- **Premium Themes**: Purchased from marketplaces (ThemeForest, Elegant Themes)
- **Custom Themes**: Built from scratch for specific needs

### Installing a Theme:

**Method 1: Through Dashboard**
1. Go to **Appearance → Themes**
2. Click **Add New**
3. Search or browse themes
4. Click **Install** on desired theme
5. Click **Activate** after installation

**Method 2: Upload ZIP File**
1. Go to **Appearance → Themes**
2. Click **Add New → Upload Theme**
3. Choose theme ZIP file
4. Click **Install Now**
5. Click **Activate**

### Popular Free Themes:
- **Twenty Twenty-Three**: Default WordPress theme
- **Astra**: Lightweight and customizable
- **OceanWP**: Feature-rich multipurpose theme
- **GeneratePress**: Fast and accessible
- **Kadence**: Modern block-based theme

### Customizing Themes:

Access the **Customizer**:
1. Go to **Appearance → Customize**
2. Make changes in real-time preview
3. Click **Publish** to save changes

**Common Customization Options:**
- Site Identity (logo, title, tagline)
- Colors
- Typography
- Header & Footer
- Homepage Settings
- Widgets
- Menus
- Additional CSS

### Theme Best Practices:
- Choose responsive (mobile-friendly) themes
- Check browser compatibility
- Read reviews and ratings
- Verify regular updates
- Ensure good documentation
- Test loading speed

## Menus

**Navigation Menus** help visitors navigate your website. WordPress allows you to create multiple menus for different locations.

### Menu Locations:

Common theme menu locations:
- Primary Menu (top of page)
- Secondary Menu
- Footer Menu
- Social Media Menu
- Mobile Menu

### Creating a Menu:

1. Go to **Appearance → Menus**
2. Enter a menu name
3. Click **Create Menu**
4. Add items from left sidebar:
   - Pages
   - Posts
   - Custom Links
   - Categories
5. Drag items to reorder
6. Create sub-items by dragging slightly right
7. Select **Display location** (Primary, Footer, etc.)
8. Click **Save Menu**

### Menu Item Options:

**Navigation Label:** Text shown in menu
**Title Attribute:** Tooltip on hover
**CSS Classes:** For custom styling
**Link Target:** Open in new tab/window
**Description:** Some themes display this

### Menu Structure:

**Parent Item**
- Child Item 1
- Child Item 2
  - Grandchild Item

**Creating Dropdown Menus:**
- Drag menu items slightly to the right
- Creates hierarchical structure
- Parent items become dropdown triggers

### Custom Links:

Add external links or custom URLs:
1. Expand **Custom Links** section
2. Enter URL
3. Enter Link Text
4. Click **Add to Menu**

**Examples:**
- Link to social media profiles
- Link to external resources
- Link to subdomain pages

## Plugins

**Plugins** extend WordPress functionality by adding new features and capabilities without modifying core code.

### What Plugins Can Do:

- Add contact forms
- Improve SEO
- Enhance security
- Create galleries
- Add social media integration
- Implement e-commerce
- Optimize performance
- Backup your site
- Add analytics

### Installing Plugins:

**Method 1: Through Dashboard**
1. Go to **Plugins → Add New**
2. Search for plugin
3. Click **Install Now**
4. Click **Activate**

**Method 2: Upload ZIP File**
1. Go to **Plugins → Add New**
2. Click **Upload Plugin**
3. Choose plugin ZIP file
4. Click **Install Now**
5. Click **Activate**

### Essential Plugins:

**Security:**
- Wordfence Security
- Sucuri Security
- iThemes Security

**SEO:**
- Yoast SEO
- All in One SEO
- Rank Math

**Performance:**
- WP Super Cache
- W3 Total Cache
- Autoptimize

**Backups:**
- UpdraftPlus
- BackWPup
- Duplicator

**Forms:**
- Contact Form 7
- WPForms
- Gravity Forms

**Page Builders:**
- Elementor
- Beaver Builder
- Divi Builder

### Plugin Management:

**Updating Plugins:**
1. Go to **Dashboard → Updates**
2. Select plugins to update
3. Click **Update Plugins**

**Deactivating Plugins:**
1. Go to **Plugins → Installed Plugins**
2. Click **Deactivate** under plugin name
3. Plugin remains installed but inactive

**Deleting Plugins:**
1. Deactivate the plugin first
2. Click **Delete**
3. Confirm deletion

### Plugin Best Practices:

- Only install plugins you need
- Keep plugins updated
- Use plugins from reputable sources
- Check compatibility with WordPress version
- Read reviews and ratings
- Deactivate and delete unused plugins
- Test plugins on staging site first
- Backup before installing new plugins

## Updates, Backups, and Security

### WordPress Updates

WordPress regularly releases updates for three components:

**1. Core Updates:**
- Major releases (e.g., 6.0 to 6.1)
- Minor releases (e.g., 6.1.1 to 6.1.2)
- Usually includes security fixes and new features

**2. Theme Updates:**
- Bug fixes
- New features
- Security patches
- Compatibility improvements

**3. Plugin Updates:**
- Feature enhancements
- Security vulnerabilities fixed
- Performance improvements
- WordPress compatibility updates

### Updating WordPress:

**Automatic Updates:**
- Minor security updates install automatically
- Can enable automatic updates for major releases

**Manual Updates:**
1. Go to **Dashboard → Updates**
2. Review available updates
3. Create a backup first
4. Click **Update Now** for core
5. Select and update themes
6. Select and update plugins

**Best Practices:**
- Always backup before updating
- Update in this order: Plugins → Themes → Core
- Test on staging site first if possible
- Check compatibility before updating
- Update regularly (at least monthly)

### Backups

**Why Backup?**
- Protect against data loss
- Recovery from hacks
- Rollback after bad updates
- Migrate to new host
- Test changes safely

**What to Backup:**
- WordPress files (themes, plugins, uploads)
- Database (posts, pages, settings, users)
- Configuration files (wp-config.php, .htaccess)

**Backup Methods:**

**1. Plugin Backups:**
- UpdraftPlus (most popular)
- BackWPup
- Duplicator
- VaultPress/Jetpack Backup

**2. Hosting Provider Backups:**
- Many hosts provide automatic backups
- Check retention period
- Know how to restore

**3. Manual Backups:**
- Export database via phpMyAdmin
- Download files via FTP
- Time-consuming but free

**Backup Best Practices:**
- Backup before major changes
- Store backups off-site (cloud storage)
- Test restoring from backups
- Keep multiple backup versions
- Automate backup schedule
- Backup daily for active sites

### Security

**Common WordPress Vulnerabilities:**
- Outdated software
- Weak passwords
- Insecure hosting
- Malicious plugins/themes
- SQL injection attacks
- Brute force attacks
- File inclusion exploits

**Security Best Practices:**

**1. Strong Passwords:**
- Use complex passwords (12+ characters)
- Include uppercase, lowercase, numbers, symbols
- Use password manager
- Different passwords for admin, database, FTP

**2. User Management:**
- Delete unused user accounts
- Use proper user roles
- Don't use "admin" username
- Limit admin access
- Enable two-factor authentication

**3. File Permissions:**
- Folders: 755
- Files: 644
- wp-config.php: 440 or 400

**4. SSL Certificate:**
- Install SSL certificate
- Force HTTPS
- Use HTTPS in WordPress URLs

**5. Security Plugins:**
- Wordfence: Firewall and malware scanner
- Sucuri: Security monitoring
- iThemes Security: Comprehensive security features

**6. Hide WordPress Version:**
- Remove version from HTML
- Prevent information disclosure

**7. Disable File Editing:**
Add to wp-config.php:
```php
<?php
define('DISALLOW_FILE_EDIT', true);
```

**8. Limit Login Attempts:**
- Use plugin to limit login attempts
- Prevents brute force attacks
- Lock out after failed attempts

**9. Regular Security Scans:**
- Use security plugin to scan for malware
- Check for vulnerabilities
- Monitor for suspicious activity

**10. Secure wp-config.php:**
- Move outside web root if possible
- Restrict access via .htaccess

### Security Checklist:

- [ ] Use strong passwords for all accounts
- [ ] Keep WordPress, themes, and plugins updated
- [ ] Install SSL certificate
- [ ] Use security plugin
- [ ] Implement regular backups
- [ ] Remove unused themes and plugins
- [ ] Use secure hosting provider
- [ ] Disable file editing in dashboard
- [ ] Limit login attempts
- [ ] Change default "admin" username
- [ ] Use two-factor authentication
- [ ] Hide WordPress version
- [ ] Set correct file permissions
- [ ] Regular security scans

## Additional Resources

### Official Documentation:
- WordPress Codex: https://codex.wordpress.org/
- WordPress Support: https://wordpress.org/support/
- WordPress Developer Documentation: https://developer.wordpress.org/

### Learning Resources:
- WordPress.tv: Free video tutorials
- WPBeginner: Tutorials for beginners
- WordPress.org Learn: Official learning platform

### Community:
- WordPress Meetups: Local community events
- WordCamps: WordPress conferences worldwide
- WordPress Forums: Get help from community
