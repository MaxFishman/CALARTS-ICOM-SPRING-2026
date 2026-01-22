# Code Examples - Week 09

## WordPress Configuration Examples

### Basic wp-config.php Configuration

```php
<?php
/**
 * The base configuration for WordPress
 */

// Database settings
define( 'DB_NAME', 'database_name_here' );
define( 'DB_USER', 'username_here' );
define( 'DB_PASSWORD', 'password_here' );
define( 'DB_HOST', 'localhost' );
define( 'DB_CHARSET', 'utf8mb4' );
define( 'DB_COLLATE', '' );

// Authentication unique keys and salts
define('AUTH_KEY',         'put your unique phrase here');
define('SECURE_AUTH_KEY',  'put your unique phrase here');
define('LOGGED_IN_KEY',    'put your unique phrase here');
define('NONCE_KEY',        'put your unique phrase here');
define('AUTH_SALT',        'put your unique phrase here');
define('SECURE_AUTH_SALT', 'put your unique phrase here');
define('LOGGED_IN_SALT',   'put your unique phrase here');
define('NONCE_SALT',       'put your unique phrase here');

// WordPress database table prefix
$table_prefix = 'wp_';

// WordPress debugging mode
define( 'WP_DEBUG', false );

// That's all, stop editing! Happy publishing.
if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}

require_once ABSPATH . 'wp-settings.php';
```

### Enable Debug Mode (Development)

```php
// Enable WP_DEBUG mode
define( 'WP_DEBUG', true );

// Enable Debug logging to /wp-content/debug.log
define( 'WP_DEBUG_LOG', true );

// Disable display of errors and warnings
define( 'WP_DEBUG_DISPLAY', false );
@ini_set( 'display_errors', 0 );

// Use dev versions of core JS and CSS files
define( 'SCRIPT_DEBUG', true );
```

### Security Enhancements in wp-config.php

```php
// Disable file editing in dashboard
define( 'DISALLOW_FILE_EDIT', true );

// Force SSL for admin and login pages
define( 'FORCE_SSL_ADMIN', true );

// Limit post revisions
define( 'WP_POST_REVISIONS', 3 );

// Set autosave interval (in seconds)
define( 'AUTOSAVE_INTERVAL', 160 );

// Increase memory limit
define( 'WP_MEMORY_LIMIT', '256M' );

// Set maximum upload file size
@ini_set( 'upload_max_size' , '64M' );
@ini_set( 'post_max_size', '64M');
```

## Theme Development Examples

### Basic Theme Structure

```
my-theme/
├── style.css          (required)
├── index.php          (required)
├── functions.php
├── header.php
├── footer.php
├── sidebar.php
├── single.php
├── page.php
├── archive.php
├── 404.php
└── screenshot.png
```

### style.css (Theme Header)

```css
/*
Theme Name: My Custom Theme
Theme URI: https://example.com/my-theme
Author: Your Name
Author URI: https://example.com
Description: A custom WordPress theme for ICOM class
Version: 1.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Tags: custom, responsive, modern
Text Domain: my-custom-theme
*/

/* Theme styles go here */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.site-header {
    background-color: #333;
    color: white;
    padding: 20px;
}

.site-title {
    margin: 0;
    font-size: 24px;
}
```

### functions.php (Theme Functions)

```php
<?php
/**
 * Theme setup and initialization
 */
function my_theme_setup() {
    // Add theme support for various features
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo' );
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ) );
    
    // Register navigation menus
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'my-custom-theme' ),
        'footer'  => __( 'Footer Menu', 'my-custom-theme' ),
    ) );
}
add_action( 'after_setup_theme', 'my_theme_setup' );

/**
 * Enqueue scripts and styles
 */
function my_theme_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style( 'my-theme-style', get_stylesheet_uri(), array(), '1.0' );
    
    // Enqueue JavaScript file
    wp_enqueue_script( 'my-theme-script', get_template_directory_uri() . '/js/script.js', array('jquery'), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'my_theme_scripts' );

/**
 * Register widget areas
 */
function my_theme_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Sidebar', 'my-custom-theme' ),
        'id'            => 'sidebar-1',
        'description'   => __( 'Add widgets here.', 'my-custom-theme' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );
}
add_action( 'widgets_init', 'my_theme_widgets_init' );

/**
 * Custom excerpt length
 */
function my_theme_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'my_theme_excerpt_length', 999 );
```

### header.php

```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <div class="site-branding">
            <?php
            if ( has_custom_logo() ) {
                the_custom_logo();
            } else {
                ?>
                <h1 class="site-title">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                        <?php bloginfo( 'name' ); ?>
                    </a>
                </h1>
                <p class="site-description"><?php bloginfo( 'description' ); ?></p>
                <?php
            }
            ?>
        </div>
        
        <nav class="main-navigation">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'primary',
                'menu_class'     => 'primary-menu',
                'fallback_cb'    => false,
            ) );
            ?>
        </nav>
    </div>
</header>

<main id="main-content" class="site-main">
```

### footer.php

```php
</main>

<footer class="site-footer">
    <div class="container">
        <div class="footer-widgets">
            <?php dynamic_sidebar( 'sidebar-1' ); ?>
        </div>
        
        <nav class="footer-navigation">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'footer',
                'menu_class'     => 'footer-menu',
                'fallback_cb'    => false,
            ) );
            ?>
        </nav>
        
        <div class="site-info">
            <p>&copy; <?php echo esc_html( current_time( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. All rights reserved.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
```

### index.php (Main Template)

```php
<?php get_header(); ?>

<div class="container">
    <?php
    if ( have_posts() ) :
        while ( have_posts() ) :
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header">
                    <h2 class="entry-title">
                        <a href="<?php the_permalink(); ?>">
                            <?php the_title(); ?>
                        </a>
                    </h2>
                    <div class="entry-meta">
                        <span class="posted-on">
                            <?php echo get_the_date(); ?>
                        </span>
                        <span class="byline">
                            by <?php the_author(); ?>
                        </span>
                    </div>
                </header>
                
                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="post-thumbnail">
                        <?php the_post_thumbnail( 'large' ); ?>
                    </div>
                <?php endif; ?>
                
                <div class="entry-content">
                    <?php the_excerpt(); ?>
                </div>
                
                <footer class="entry-footer">
                    <a href="<?php the_permalink(); ?>" class="read-more">
                        Read More
                    </a>
                </footer>
            </article>
            <?php
        endwhile;
        
        // Pagination
        the_posts_pagination( array(
            'mid_size'  => 2,
            'prev_text' => __( 'Previous', 'my-custom-theme' ),
            'next_text' => __( 'Next', 'my-custom-theme' ),
        ) );
        
    else :
        ?>
        <p><?php _e( 'No posts found.', 'my-custom-theme' ); ?></p>
        <?php
    endif;
    ?>
</div>

<?php get_footer(); ?>
```

### single.php (Single Post Template)

```php
<?php get_header(); ?>

<div class="container">
    <?php
    while ( have_posts() ) :
        the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header class="entry-header">
                <h1 class="entry-title"><?php the_title(); ?></h1>
                <div class="entry-meta">
                    <span class="posted-on">
                        Posted on <?php echo get_the_date(); ?>
                    </span>
                    <span class="byline">
                        by <?php the_author(); ?>
                    </span>
                    <span class="categories">
                        in <?php the_category( ', ' ); ?>
                    </span>
                </div>
            </header>
            
            <?php if ( has_post_thumbnail() ) : ?>
                <div class="post-thumbnail">
                    <?php the_post_thumbnail( 'full' ); ?>
                </div>
            <?php endif; ?>
            
            <div class="entry-content">
                <?php the_content(); ?>
            </div>
            
            <footer class="entry-footer">
                <?php
                the_tags( '<span class="tags-links">Tags: ', ', ', '</span>' );
                ?>
            </footer>
        </article>
        
        <nav class="post-navigation">
            <div class="nav-previous">
                <?php previous_post_link( '%link', '&larr; %title' ); ?>
            </div>
            <div class="nav-next">
                <?php next_post_link( '%link', '%title &rarr;' ); ?>
            </div>
        </nav>
        
        <?php
        if ( comments_open() || get_comments_number() ) :
            comments_template();
        endif;
        ?>
        <?php
    endwhile;
    ?>
</div>

<?php get_footer(); ?>
```

## Plugin Development Examples

### Basic Plugin Structure

```php
<?php
/**
 * Plugin Name: My Custom Plugin
 * Plugin URI: https://example.com/my-plugin
 * Description: A custom plugin for ICOM class demonstration
 * Version: 1.0
 * Author: Your Name
 * Author URI: https://example.com
 * License: GPL2
 */

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Plugin activation hook
register_activation_hook( __FILE__, 'my_plugin_activate' );
function my_plugin_activate() {
    // Create database tables or set default options
    add_option( 'my_plugin_version', '1.0' );
}

// Plugin deactivation hook
register_deactivation_hook( __FILE__, 'my_plugin_deactivate' );
function my_plugin_deactivate() {
    // Clean up if necessary
}

// Main plugin functionality
class My_Custom_Plugin {
    
    public function __construct() {
        add_action( 'init', array( $this, 'init' ) );
        add_shortcode( 'my_shortcode', array( $this, 'shortcode_handler' ) );
    }
    
    public function init() {
        // Initialization code
    }
    
    public function shortcode_handler( $atts ) {
        $atts = shortcode_atts( array(
            'title' => 'Default Title',
        ), $atts );
        
        return '<div class="my-shortcode">' . esc_html( $atts['title'] ) . '</div>';
    }
}

// Initialize the plugin
new My_Custom_Plugin();
```

### Simple Contact Form Plugin

```php
<?php
/**
 * Plugin Name: Simple Contact Form
 * Description: A basic contact form plugin
 * Version: 1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Enqueue styles
function scf_enqueue_styles() {
    wp_enqueue_style( 'scf-style', plugins_url( 'css/style.css', __FILE__ ) );
}
add_action( 'wp_enqueue_scripts', 'scf_enqueue_styles' );

// Contact form shortcode
function scf_contact_form_shortcode() {
    ob_start();
    ?>
    <form id="contact-form" method="post" action="">
        <?php wp_nonce_field( 'submit_contact_form', 'contact_form_nonce' ); ?>
        
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        
        <button type="submit" name="submit_contact_form">Send Message</button>
    </form>
    <?php
    return ob_get_clean();
}
add_shortcode( 'contact_form', 'scf_contact_form_shortcode' );

// Handle form submission
function scf_handle_form_submission() {
    if ( isset( $_POST['submit_contact_form'] ) ) {
        // Verify nonce
        if ( ! wp_verify_nonce( $_POST['contact_form_nonce'], 'submit_contact_form' ) ) {
            return;
        }
        
        // Sanitize input
        $name = sanitize_text_field( $_POST['name'] );
        $email = sanitize_email( $_POST['email'] );
        $message = sanitize_textarea_field( $_POST['message'] );
        
        // Send email
        $to = get_option( 'admin_email' );
        $subject = 'New Contact Form Submission';
        $body = "Name: $name\n";
        $body .= "Email: $email\n\n";
        $body .= "Message:\n$message";
        $headers = array( 'Content-Type: text/plain; charset=UTF-8' );
        
        wp_mail( $to, $subject, $body, $headers );
        
        // Show success message
        echo '<div class="success-message">Thank you! Your message has been sent.</div>';
    }
}
add_action( 'wp', 'scf_handle_form_submission' );
```

### Custom Widget Example

```php
<?php
/**
 * Custom Recent Posts Widget
 */
class Custom_Recent_Posts_Widget extends WP_Widget {
    
    public function __construct() {
        parent::__construct(
            'custom_recent_posts',
            'Custom Recent Posts',
            array( 'description' => 'Display recent posts with custom styling' )
        );
    }
    
    public function widget( $args, $instance ) {
        $title = apply_filters( 'widget_title', $instance['title'] );
        $number = isset( $instance['number'] ) ? $instance['number'] : 5;
        
        echo $args['before_widget'];
        
        if ( ! empty( $title ) ) {
            echo $args['before_title'] . $title . $args['after_title'];
        }
        
        $recent_posts = wp_get_recent_posts( array(
            'numberposts' => $number,
            'post_status' => 'publish'
        ) );
        
        if ( $recent_posts ) {
            echo '<ul class="custom-recent-posts">';
            foreach ( $recent_posts as $post ) {
                echo '<li>';
                echo '<a href="' . get_permalink( $post['ID'] ) . '">';
                echo $post['post_title'];
                echo '</a>';
                echo '<span class="post-date">' . get_the_date( '', $post['ID'] ) . '</span>';
                echo '</li>';
            }
            echo '</ul>';
        }
        
        echo $args['after_widget'];
    }
    
    public function form( $instance ) {
        $title = isset( $instance['title'] ) ? $instance['title'] : 'Recent Posts';
        $number = isset( $instance['number'] ) ? $instance['number'] : 5;
        ?>
        <p>
            <label for="<?php echo $this->get_field_id( 'title' ); ?>">Title:</label>
            <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" 
                   name="<?php echo $this->get_field_name( 'title' ); ?>" 
                   type="text" value="<?php echo esc_attr( $title ); ?>">
        </p>
        <p>
            <label for="<?php echo $this->get_field_id( 'number' ); ?>">Number of posts:</label>
            <input class="tiny-text" id="<?php echo $this->get_field_id( 'number' ); ?>" 
                   name="<?php echo $this->get_field_name( 'number' ); ?>" 
                   type="number" step="1" min="1" value="<?php echo esc_attr( $number ); ?>" size="3">
        </p>
        <?php
    }
    
    public function update( $new_instance, $old_instance ) {
        $instance = array();
        $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
        $instance['number'] = ( ! empty( $new_instance['number'] ) ) ? intval( $new_instance['number'] ) : 5;
        return $instance;
    }
}

// Register the widget
function register_custom_recent_posts_widget() {
    register_widget( 'Custom_Recent_Posts_Widget' );
}
add_action( 'widgets_init', 'register_custom_recent_posts_widget' );
```

## Custom Post Type Examples

### Creating a Custom Post Type

```php
<?php
/**
 * Register Custom Post Type: Portfolio
 */
function create_portfolio_post_type() {
    $labels = array(
        'name'                  => 'Portfolio',
        'singular_name'         => 'Portfolio Item',
        'menu_name'             => 'Portfolio',
        'name_admin_bar'        => 'Portfolio Item',
        'add_new'               => 'Add New',
        'add_new_item'          => 'Add New Portfolio Item',
        'new_item'              => 'New Portfolio Item',
        'edit_item'             => 'Edit Portfolio Item',
        'view_item'             => 'View Portfolio Item',
        'all_items'             => 'All Portfolio Items',
        'search_items'          => 'Search Portfolio',
        'not_found'             => 'No portfolio items found',
        'not_found_in_trash'    => 'No portfolio items found in Trash'
    );
    
    $args = array(
        'labels'                => $labels,
        'public'                => true,
        'publicly_queryable'    => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'query_var'             => true,
        'rewrite'               => array( 'slug' => 'portfolio' ),
        'capability_type'       => 'post',
        'has_archive'           => true,
        'hierarchical'          => false,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-portfolio',
        'supports'              => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
        'show_in_rest'          => true, // Enable Gutenberg editor
    );
    
    register_post_type( 'portfolio', $args );
}
add_action( 'init', 'create_portfolio_post_type' );

/**
 * Register Custom Taxonomy: Portfolio Category
 */
function create_portfolio_taxonomy() {
    $labels = array(
        'name'              => 'Portfolio Categories',
        'singular_name'     => 'Portfolio Category',
        'search_items'      => 'Search Categories',
        'all_items'         => 'All Categories',
        'edit_item'         => 'Edit Category',
        'update_item'       => 'Update Category',
        'add_new_item'      => 'Add New Category',
        'new_item_name'     => 'New Category Name',
        'menu_name'         => 'Categories',
    );
    
    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'portfolio-category' ),
        'show_in_rest'      => true,
    );
    
    register_taxonomy( 'portfolio_category', array( 'portfolio' ), $args );
}
add_action( 'init', 'create_portfolio_taxonomy' );

/**
 * Flush rewrite rules on theme activation
 */
function my_theme_rewrite_flush() {
    create_portfolio_post_type();
    create_portfolio_taxonomy();
    flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'my_theme_rewrite_flush' );
```

### Displaying Custom Post Type

```php
<?php
/**
 * Template for displaying portfolio archive
 * Save as: archive-portfolio.php
 */
get_header();
?>

<div class="portfolio-archive">
    <header class="page-header">
        <h1>Our Portfolio</h1>
    </header>
    
    <?php if ( have_posts() ) : ?>
        <div class="portfolio-grid">
            <?php while ( have_posts() ) : the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class( 'portfolio-item' ); ?>>
                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="portfolio-thumbnail">
                            <a href="<?php the_permalink(); ?>">
                                <?php the_post_thumbnail( 'medium' ); ?>
                            </a>
                        </div>
                    <?php endif; ?>
                    
                    <h2 class="portfolio-title">
                        <a href="<?php the_permalink(); ?>">
                            <?php the_title(); ?>
                        </a>
                    </h2>
                    
                    <div class="portfolio-categories">
                        <?php
                        $terms = get_the_terms( get_the_ID(), 'portfolio_category' );
                        if ( $terms && ! is_wp_error( $terms ) ) {
                            $term_links = array();
                            foreach ( $terms as $term ) {
                                $term_links[] = '<a href="' . get_term_link( $term ) . '">' . $term->name . '</a>';
                            }
                            echo implode( ', ', $term_links );
                        }
                        ?>
                    </div>
                    
                    <div class="portfolio-excerpt">
                        <?php the_excerpt(); ?>
                    </div>
                </article>
            <?php endwhile; ?>
        </div>
        
        <?php the_posts_pagination(); ?>
        
    <?php else : ?>
        <p>No portfolio items found.</p>
    <?php endif; ?>
</div>

<?php get_footer(); ?>
```

## WordPress Hooks Examples

### Action Hooks

```php
<?php
/**
 * Add custom content after post content
 */
function add_custom_content_after_post( $content ) {
    if ( is_single() ) {
        $custom_content = '<div class="custom-cta">';
        $custom_content .= '<h3>Like this post?</h3>';
        $custom_content .= '<p>Subscribe to our newsletter!</p>';
        $custom_content .= '</div>';
        $content .= $custom_content;
    }
    return $content;
}
add_filter( 'the_content', 'add_custom_content_after_post' );

/**
 * Modify excerpt length
 */
function custom_excerpt_length( $length ) {
    return 30;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

/**
 * Change excerpt "more" string
 */
function custom_excerpt_more( $more ) {
    return '... <a class="read-more" href="' . get_permalink() . '">Continue Reading</a>';
}
add_filter( 'excerpt_more', 'custom_excerpt_more' );

/**
 * Add custom body class
 */
function add_custom_body_class( $classes ) {
    if ( is_page( 'about' ) ) {
        $classes[] = 'about-page-custom';
    }
    return $classes;
}
add_filter( 'body_class', 'add_custom_body_class' );

/**
 * Remove admin bar for non-admins
 */
function remove_admin_bar_for_users() {
    if ( ! current_user_can( 'administrator' ) ) {
        show_admin_bar( false );
    }
}
add_action( 'after_setup_theme', 'remove_admin_bar_for_users' );
```

## Security Best Practices Code

### Sanitizing and Validating Input

```php
<?php
// Sanitize text input
$name = sanitize_text_field( $_POST['name'] );

// Sanitize email
$email = sanitize_email( $_POST['email'] );

// Sanitize URL
$website = esc_url_raw( $_POST['website'] );

// Sanitize textarea
$message = sanitize_textarea_field( $_POST['message'] );

// Validate email
if ( ! is_email( $email ) ) {
    // Invalid email
}

// Validate number
$number = absint( $_POST['number'] ); // Returns absolute integer

// Sanitize HTML
$html_content = wp_kses_post( $_POST['content'] );
```

### Nonce Verification

```php
<?php
// Creating a nonce
$nonce = wp_create_nonce( 'my_action_nonce' );

// Adding nonce to a form
wp_nonce_field( 'my_action_nonce', 'security_field' );

// Verifying nonce on form submission
if ( ! wp_verify_nonce( $_POST['security_field'], 'my_action_nonce' ) ) {
    wp_die( 'Security check failed' );
}

// Nonce in URL
$url = wp_nonce_url( 'admin.php?page=my-plugin', 'my_action_nonce' );

// Verify nonce from URL
if ( ! wp_verify_nonce( $_GET['_wpnonce'], 'my_action_nonce' ) ) {
    wp_die( 'Security check failed' );
}
```

### Escaping Output

```php
<?php
// Escape HTML
echo esc_html( $text );

// Escape HTML attributes
echo '<div class="' . esc_attr( $class ) . '">';

// Escape URL
echo '<a href="' . esc_url( $url ) . '">Link</a>';

// Escape JavaScript
echo '<script>var myVar = "' . esc_js( $variable ) . '";</script>';

// Escape textarea
echo '<textarea>' . esc_textarea( $text ) . '</textarea>';

// Escape translation strings
echo esc_html__( 'Hello World', 'text-domain' );
echo esc_attr__( 'Title', 'text-domain' );
```

## Database Query Examples

### Using WP_Query

```php
<?php
// Basic query
$args = array(
    'post_type'      => 'post',
    'posts_per_page' => 10,
    'orderby'        => 'date',
    'order'          => 'DESC',
);

$query = new WP_Query( $args );

if ( $query->have_posts() ) {
    while ( $query->have_posts() ) {
        $query->the_post();
        // Display post content
        the_title();
        the_content();
    }
    wp_reset_postdata();
}

// Advanced query with meta and tax queries
$args = array(
    'post_type'      => 'portfolio',
    'posts_per_page' => 5,
    'meta_query'     => array(
        array(
            'key'     => 'featured',
            'value'   => '1',
            'compare' => '=',
        ),
    ),
    'tax_query'      => array(
        array(
            'taxonomy' => 'portfolio_category',
            'field'    => 'slug',
            'terms'    => 'web-design',
        ),
    ),
);

$query = new WP_Query( $args );
```

### Using get_posts()

```php
<?php
// Get specific posts
$posts = get_posts( array(
    'numberposts' => 5,
    'post_type'   => 'post',
    'orderby'     => 'title',
    'order'       => 'ASC',
) );

foreach ( $posts as $post ) {
    setup_postdata( $post );
    echo '<h2>' . esc_html( get_the_title() ) . '</h2>';
    echo wp_kses_post( get_the_excerpt() );
}
wp_reset_postdata();
```

These examples cover the main WordPress concepts discussed in the lecture notes, including configuration, theme development, plugin creation, custom post types, security practices, and database queries. Students can use these as references when working with WordPress.
