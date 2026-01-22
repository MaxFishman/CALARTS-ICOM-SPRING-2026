# Lecture Notes - Week 08

## Topics Covered

### JavaScript Events & Interactivity
- Understanding the event-driven model
- Adding interactivity to web pages
- Event listeners and handlers
- Common event types (click, hover, keyboard)

### jQuery Library
- What is jQuery and why use it
- Including jQuery in your projects
- jQuery selectors and DOM manipulation
- jQuery event handling
- jQuery animations

### Animation Techniques
- CSS transitions vs JavaScript animations
- jQuery built-in animation methods
- External animation libraries (Anime.js)
- Creating smooth, engaging user experiences

---

## Understanding JavaScript Events

### What are Events?

**Events** are actions or occurrences that happen in the browser that JavaScript can detect and respond to. They are the foundation of interactive web applications.

**Common Event Sources:**
- **User Actions**: Clicks, key presses, mouse movements, form submissions
- **Browser Actions**: Page load, window resize, scroll
- **Network Events**: Data loaded, fetch completed
- **Timer Events**: setTimeout, setInterval

### The Event-Driven Model

JavaScript uses an **event-driven programming model**:

1. **Event occurs** (user clicks a button)
2. **Event is detected** by the browser
3. **Event handler executes** (your JavaScript code runs)
4. **DOM updates** (page changes based on your code)

**Example Flow:**
```
User clicks button → Click event fires → Event listener triggers → 
Function executes → DOM updates → User sees change
```

### Event Listeners

**Event listeners** "listen" for specific events on specific elements and execute code when those events occur.

**Three Ways to Add Event Listeners:**

1. **HTML Attribute (Not Recommended)**
   ```html
   <button onclick="alert('Clicked!')">Click Me</button>
   ```
   - Mixes HTML and JavaScript
   - Hard to maintain
   - Security concerns

2. **DOM Property (Okay)**
   ```javascript
   element.onclick = function() { alert('Clicked!'); };
   ```
   - Better than inline
   - Can only assign one handler per event
   - Overwrites previous handlers

3. **addEventListener Method (Best Practice)**
   ```javascript
   element.addEventListener('click', function() {
       alert('Clicked!');
   });
   ```
   - Separates HTML and JavaScript
   - Multiple handlers for same event
   - Better control with options
   - Modern and flexible

### Event Object

When an event occurs, JavaScript creates an **event object** containing information about the event:

**Common Properties:**
- `type`: Type of event (e.g., "click", "keydown")
- `target`: Element that triggered the event
- `currentTarget`: Element the listener is attached to
- `timeStamp`: When the event occurred
- `preventDefault()`: Prevents default browser behavior
- `stopPropagation()`: Stops event from bubbling up

**Mouse Event Properties:**
- `clientX`, `clientY`: Mouse position relative to viewport
- `pageX`, `pageY`: Mouse position relative to document
- `button`: Which mouse button was pressed

**Keyboard Event Properties:**
- `key`: The key that was pressed (e.g., "a", "Enter")
- `code`: Physical key code (e.g., "KeyA", "Enter")
- `keyCode`: Numeric code (deprecated but still used)
- `ctrlKey`, `shiftKey`, `altKey`: Modifier keys pressed

### Common Event Types

**Mouse Events:**
- `click`: Mouse button clicked and released
- `dblclick`: Double-click
- `mousedown`: Mouse button pressed
- `mouseup`: Mouse button released
- `mouseenter`: Mouse enters element (doesn't bubble)
- `mouseleave`: Mouse leaves element (doesn't bubble)
- `mouseover`: Mouse enters element or its children (bubbles)
- `mouseout`: Mouse leaves element or its children (bubbles)
- `mousemove`: Mouse moves over element
- `contextmenu`: Right-click

**Keyboard Events:**
- `keydown`: Key is pressed (fires continuously when held)
- `keyup`: Key is released
- `keypress`: Key is pressed (deprecated, use keydown)

**Form Events:**
- `submit`: Form is submitted
- `input`: Input value changes (fires on every keystroke)
- `change`: Input value changes and element loses focus
- `focus`: Element receives focus
- `blur`: Element loses focus

**Window/Document Events:**
- `load`: Page/resource finished loading
- `DOMContentLoaded`: HTML is fully parsed
- `resize`: Window is resized
- `scroll`: Page is scrolled
- `unload`: Page is about to unload

### Event Bubbling and Capturing

**Event Propagation** is the process where events travel through the DOM.

**Three Phases:**

1. **Capturing Phase** (top-down)
   - Event travels from window → document → target
   - Rarely used

2. **Target Phase**
   - Event reaches the target element

3. **Bubbling Phase** (bottom-up)
   - Event bubbles up from target → document → window
   - Default behavior

**Example:**
```html
<div id="outer">
    <div id="inner">
        <button id="button">Click</button>
    </div>
</div>
```

When button is clicked:
1. Event goes down: window → document → outer → inner → button
2. Event reaches target: button
3. Event bubbles up: button → inner → outer → document → window

**Stopping Propagation:**
```javascript
element.addEventListener('click', function(e) {
    e.stopPropagation(); // Stop event from bubbling
});
```

### Event Delegation

**Event delegation** is a technique where you attach a single event listener to a parent element instead of multiple listeners to child elements.

**Benefits:**
- Better performance (fewer event listeners)
- Works with dynamically added elements
- Less memory usage
- Simpler code

**Example:**
```javascript
// Instead of this (inefficient):
document.querySelectorAll('li').forEach(function(li) {
    li.addEventListener('click', function() {
        console.log('Clicked:', this.textContent);
    });
});

// Use this (efficient):
document.querySelector('ul').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        console.log('Clicked:', e.target.textContent);
    }
});
```

---

## jQuery: Write Less, Do More

### What is jQuery?

**jQuery** is a fast, small, and feature-rich JavaScript library created in 2006 by John Resig. It makes things like:
- HTML document traversal and manipulation
- Event handling
- Animation
- Ajax interactions

Much simpler with an easy-to-use API that works across browsers.

### Why Use jQuery?

**Advantages:**

1. **Simpler Syntax**
   ```javascript
   // Vanilla JavaScript
   document.getElementById('myElement').style.color = 'red';
   
   // jQuery
   $('#myElement').css('color', 'red');
   ```

2. **Cross-Browser Compatibility**
   - Handles browser differences automatically
   - Works consistently across all browsers

3. **Powerful Selectors**
   - Uses CSS selector syntax
   - More intuitive than vanilla JavaScript

4. **Method Chaining**
   ```javascript
   $('#element').fadeOut().fadeIn().slideDown();
   ```

5. **Large Ecosystem**
   - Thousands of plugins available
   - Extensive documentation
   - Large community

6. **Built-in Animation**
   - Easy fade, slide, and custom animations
   - No need for external libraries for basic effects

**When to Use jQuery:**
- Learning web development basics
- Quick prototypes and simple projects
- Projects requiring broad browser support
- When you need jQuery plugins
- Working with legacy codebases

**When NOT to Use jQuery:**
- Modern single-page applications (use React, Vue, Angular)
- Projects where bundle size matters
- When vanilla JavaScript is sufficient
- Learning fundamental JavaScript (learn vanilla first!)

### Including jQuery

**CDN (Content Delivery Network) - Recommended for Learning:**
```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

**Benefits of CDN:**
- Fast loading (cached by browser)
- No download needed
- Always up to date

**Download and Host Locally:**
1. Download from jquery.com
2. Place in your project folder
3. Include with `<script>` tag

**npm (For Node.js projects):**
```bash
npm install jquery
```

### jQuery Basics

**The jQuery Function: $()**

The dollar sign `$` is an alias for the jQuery function. It's the core of jQuery.

**Document Ready:**
```javascript
// Long form
$(document).ready(function() {
    // Code runs when DOM is ready
});

// Short form (common)
$(function() {
    // Code runs when DOM is ready
});
```

**Why Use Document Ready?**
- Ensures DOM is fully loaded before your code runs
- Prevents errors from accessing elements that don't exist yet
- Similar to `DOMContentLoaded` in vanilla JavaScript

### jQuery Selectors

jQuery uses CSS selector syntax to find elements:

**Basic Selectors:**
```javascript
$('p')              // All <p> elements
$('#myId')          // Element with id="myId"
$('.myClass')       // All elements with class="myClass"
$('div.special')    // <div> elements with class="special"
$('ul li')          // <li> inside <ul> (descendant)
$('ul > li')        // Direct <li> children of <ul>
```

**Attribute Selectors:**
```javascript
$('[name]')                 // Elements with name attribute
$('[name="email"]')         // Elements where name="email"
$('input[type="text"]')     // Text inputs
$('a[href^="https"]')       // Links starting with https
$('img[src$=".jpg"]')       // Images ending with .jpg
```

**Filter Selectors:**
```javascript
$('li:first')       // First <li>
$('li:last')        // Last <li>
$('li:eq(2)')       // Third <li> (zero-indexed)
$('li:odd')         // Odd <li> elements
$('li:even')        // Even <li> elements
$(':visible')       // Visible elements
$(':hidden')        // Hidden elements
$('p:contains("hello")')  // <p> containing "hello"
```

### jQuery DOM Manipulation

**Getting/Setting Content:**
```javascript
$('#element').text()                // Get text content
$('#element').text('New text')      // Set text content
$('#element').html()                // Get HTML content
$('#element').html('<p>HTML</p>')   // Set HTML content
$('input').val()                    // Get input value
$('input').val('New value')         // Set input value
```

**Getting/Setting Attributes:**
```javascript
$('img').attr('src')                    // Get src attribute
$('img').attr('src', 'image.jpg')       // Set src attribute
$('a').attr({                           // Set multiple attributes
    href: 'https://example.com',
    target: '_blank'
});
$('input').removeAttr('disabled')       // Remove attribute
```

**CSS Manipulation:**
```javascript
$('p').css('color')                     // Get color
$('p').css('color', 'red')              // Set color
$('p').css({                            // Set multiple properties
    color: 'blue',
    'font-size': '18px',
    backgroundColor: '#f0f0f0'
});
```

**Class Manipulation:**
```javascript
$('div').addClass('active')             // Add class
$('div').removeClass('inactive')        // Remove class
$('div').toggleClass('hidden')          // Toggle class
$('div').hasClass('active')             // Check if has class (returns boolean)
```

**Adding/Removing Elements:**
```javascript
$('ul').append('<li>End</li>')          // Add to end
$('ul').prepend('<li>Start</li>')       // Add to beginning
$('p').after('<div>After</div>')        // Insert after
$('p').before('<div>Before</div>')      // Insert before
$('p').remove()                         // Remove element
$('div').empty()                        // Remove all children
```

### jQuery Event Handling

**Basic Event Methods:**
```javascript
$('#button').click(function() {
    // Click handler
});

$('#element').hover(
    function() { /* mouse enter */ },
    function() { /* mouse leave */ }
);

$('input').keyup(function() {
    // Key released
});

$('form').submit(function(e) {
    e.preventDefault(); // Prevent form submission
    // Handle form
});
```

**The .on() Method (Recommended):**
```javascript
$('#element').on('click', function() {
    // Click handler
});

// Multiple events
$('#element').on('mouseenter mouseleave', function() {
    // Handler for both events
});

// Event delegation
$('#parent').on('click', '.child', function() {
    // Handles clicks on .child elements, even if added dynamically
});
```

**Event Object:**
```javascript
$('#element').click(function(e) {
    console.log(e.type);           // Event type
    console.log(e.target);         // Element that triggered event
    console.log(e.pageX, e.pageY); // Mouse position
    e.preventDefault();            // Prevent default action
    e.stopPropagation();          // Stop event bubbling
});
```

**The this Keyword:**
```javascript
$('.item').click(function() {
    $(this).addClass('active');    // $(this) refers to clicked element
    console.log(this);             // DOM element
    console.log($(this));          // jQuery object
});
```

---

## jQuery Animation

### Why Animate?

**Benefits of Animation:**
- Guides user attention
- Provides feedback
- Makes interfaces feel responsive
- Creates engaging experiences
- Shows relationships between elements
- Smooths transitions between states

**Animation Best Practices:**
- Keep animations short (200-500ms typically)
- Use for purpose, not decoration
- Respect user preferences (prefers-reduced-motion)
- Don't animate too many elements at once
- Test on different devices for performance

### Built-in jQuery Effects

**Fade Effects:**
```javascript
$('#element').fadeIn(1000);        // Fade in over 1 second
$('#element').fadeOut(500);        // Fade out over 0.5 seconds
$('#element').fadeToggle(1000);    // Toggle fade
$('#element').fadeTo(1000, 0.5);   // Fade to 50% opacity
```

**Slide Effects:**
```javascript
$('#element').slideDown(1000);     // Slide down
$('#element').slideUp(500);        // Slide up
$('#element').slideToggle(1000);   // Toggle slide
```

**Show/Hide:**
```javascript
$('#element').show(500);           // Show with animation
$('#element').hide(500);           // Hide with animation
$('#element').toggle(500);         // Toggle visibility
```

**Custom Animation:**
```javascript
$('#element').animate({
    left: '250px',
    opacity: 0.5,
    height: '150px',
    width: '150px'
}, 1000);

// Sequential animations (chaining)
$('#element')
    .animate({left: '250px'}, 1000)
    .animate({top: '250px'}, 1000)
    .animate({left: '0px'}, 1000)
    .animate({top: '0px'}, 1000);
```

**Animation Control:**
```javascript
$('#element').stop();              // Stop current animation
$('#element').stop(true);          // Stop and clear queue
$('#element').stop(true, true);    // Stop, clear queue, jump to end
$('#element').delay(1000);         // Delay next animation
$('#element').finish();            // Complete all queued animations
```

**Callbacks:**
```javascript
$('#element').fadeOut(1000, function() {
    console.log('Animation complete!');
    // Code here runs after animation finishes
});
```

### Easing

**Easing** controls the speed of animation at different points.

**Default Easing:**
- `swing`: Starts slow, speeds up, ends slow (default)
- `linear`: Constant speed

```javascript
$('#element').fadeIn(1000, 'swing');
$('#element').slideDown(1000, 'linear');
```

**For More Easing Options:**
- Use jQuery UI library
- Or use CSS transitions
- Or use Anime.js

---

## Anime.js: Modern Animation Library

### What is Anime.js?

**Anime.js** is a lightweight JavaScript animation library with a simple, yet powerful API. It works with:
- CSS Properties
- SVG
- DOM attributes
- JavaScript Objects

**Why Use Anime.js?**
- More powerful than jQuery animations
- Better performance
- More easing options
- Timeline support
- Stagger animations
- Modern API
- Small file size (~17KB)

### Including Anime.js

**CDN:**
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
```

**npm:**
```bash
npm install animejs
```

### Anime.js Basics

**Basic Animation:**
```javascript
anime({
    targets: '.element',
    translateX: 250,
    duration: 2000
});
```

**Animatable Properties:**
- **CSS**: opacity, backgroundColor, fontSize, etc.
- **Transforms**: translateX/Y/Z, rotate, scale, skew
- **SVG**: All SVG attributes
- **DOM**: Any DOM attribute
- **Objects**: Properties of JavaScript objects

### Anime.js Features

**Multiple Targets:**
```javascript
anime({
    targets: ['.square', '.circle', '.triangle'],
    translateX: 250
});
```

**Property Objects:**
```javascript
anime({
    targets: '.element',
    translateX: {
        value: 250,
        duration: 1000,
        delay: 500,
        easing: 'easeInOutQuad'
    }
});
```

**From/To Values:**
```javascript
anime({
    targets: '.element',
    opacity: [0, 1],  // From 0 to 1
    translateX: [0, 250]
});
```

**Function-Based Values:**
```javascript
anime({
    targets: '.element',
    translateX: function(el, i) {
        return 50 + (i * 50);  // Different value per element
    }
});
```

### Easing in Anime.js

**Built-in Easing:**
- `linear`
- `easeInQuad`, `easeOutQuad`, `easeInOutQuad`
- `easeInCubic`, `easeOutCubic`, `easeInOutCubic`
- `easeInElastic`, `easeOutElastic`, `easeInOutElastic`
- `easeInBounce`, `easeOutBounce`, `easeInOutBounce`

**Custom Bezier:**
```javascript
anime({
    targets: '.element',
    translateX: 250,
    easing: 'cubicBezier(.5, .05, .1, .3)'
});
```

**Spring Physics:**
```javascript
anime({
    targets: '.element',
    translateX: 250,
    easing: 'spring(1, 80, 10, 0)'
});
```

### Timeline Animations

**Timelines** let you orchestrate complex sequences:

```javascript
var timeline = anime.timeline({
    easing: 'easeInOutQuad',
    duration: 1000
});

timeline
    .add({
        targets: '.square',
        translateX: 250
    })
    .add({
        targets: '.circle',
        translateX: 250
    }, '-=500')  // Start 500ms before previous ends
    .add({
        targets: '.triangle',
        translateX: 250
    });
```

### Stagger Animations

**Stagger** creates sequential delays:

```javascript
anime({
    targets: '.element',
    translateY: -50,
    delay: anime.stagger(100)  // 100ms delay between each
});

// Advanced stagger
anime({
    targets: '.grid .cell',
    scale: [0, 1],
    delay: anime.stagger(100, {
        grid: [14, 5],
        from: 'center'
    })
});
```

### Playback Controls

```javascript
var animation = anime({
    targets: '.element',
    translateX: 250,
    autoplay: false  // Don't start automatically
});

animation.play();      // Play animation
animation.pause();     // Pause animation
animation.restart();   // Restart from beginning
animation.reverse();   // Reverse direction
animation.seek(1000);  // Jump to 1000ms
```

---

## Choosing the Right Tool

### Vanilla JavaScript
**Use when:**
- Learning fundamentals
- Simple interactions
- Modern browsers only
- Want smallest file size

### jQuery
**Use when:**
- Learning web development
- Quick prototypes
- Need broad browser support
- Using jQuery plugins
- Simple animations are sufficient

### Anime.js
**Use when:**
- Complex animations needed
- Timeline sequences
- Modern project
- Performance matters
- SVG animations

### CSS Animations
**Use when:**
- Simple transitions
- Best performance needed
- No JavaScript control needed
- Hover effects

---

## Best Practices

### Event Handling
1. Use `addEventListener` over inline handlers
2. Remove event listeners when elements are removed
3. Use event delegation for dynamic content
4. Prevent default actions when appropriate
5. Stop propagation only when necessary

### jQuery
1. Cache jQuery selections in variables
   ```javascript
   var $element = $('#myElement');
   $element.addClass('active');
   $element.fadeIn();
   ```
2. Use method chaining
3. Use `.on()` instead of `.click()`, `.hover()`, etc.
4. Keep selectors simple and efficient
5. Wait for document ready

### Animation
1. Keep animations short (200-500ms)
2. Use appropriate easing
3. Don't animate too many properties at once
4. Test on slower devices
5. Provide way to disable animations
6. Use CSS animations for simple effects
7. Use JavaScript for complex sequences

### Performance
1. Minimize DOM manipulation
2. Batch changes together
3. Use event delegation
4. Cache selections
5. Avoid animating too many elements
6. Use CSS transforms (hardware accelerated)

---

## Common Patterns

### Modal/Popup
```javascript
$('#openModal').click(function() {
    $('#modal').fadeIn(300);
});

$('#closeModal, #modalOverlay').click(function() {
    $('#modal').fadeOut(300);
});

// Close on Escape key
$(document).keyup(function(e) {
    if (e.key === 'Escape') {
        $('#modal').fadeOut(300);
    }
});
```

### Accordion
```javascript
$('.accordion-header').click(function() {
    $(this).next('.accordion-content').slideToggle(300);
    $('.accordion-content').not($(this).next()).slideUp(300);
});
```

### Tabs
```javascript
$('.tab-button').click(function() {
    var tab = $(this).data('tab');
    
    $('.tab-button').removeClass('active');
    $(this).addClass('active');
    
    $('.tab-content').hide();
    $('#' + tab).fadeIn(300);
});
```

### Form Validation
```javascript
$('#form').submit(function(e) {
    e.preventDefault();
    
    var isValid = true;
    
    $('input[required]').each(function() {
        if ($(this).val() === '') {
            $(this).addClass('error');
            isValid = false;
        } else {
            $(this).removeClass('error');
        }
    });
    
    if (isValid) {
        // Submit form
        this.submit();
    }
});
```

---

## Debugging Tips

### Console Methods
```javascript
console.log('Value:', value);           // Log values
console.error('Error message');         // Log errors
console.warn('Warning message');        // Log warnings
console.table(arrayOfObjects);          // Table format
console.dir(element);                   // Element details
```

### Breakpoints
- Use browser DevTools
- Set breakpoints in code
- Step through execution
- Inspect variables

### Common Issues
1. **Code runs before DOM is ready**
   - Solution: Use `$(document).ready()`

2. **Event listener not working**
   - Check selector is correct
   - Check element exists
   - Check for JavaScript errors

3. **Animation not smooth**
   - Use CSS transforms
   - Reduce animated elements
   - Check for other JavaScript running

4. **jQuery not found**
   - Check script is included
   - Check order of scripts
   - Check for typos in URL

---

## Resources

### Documentation
- [MDN Web Docs - Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [jQuery Documentation](https://api.jquery.com/)
- [Anime.js Documentation](https://animejs.com/documentation/)
- [jQuery Learning Center](https://learn.jquery.com/)

### CDN Links
- [jQuery CDN](https://code.jquery.com/)
- [cdnjs - Anime.js](https://cdnjs.com/libraries/animejs)

### Tutorials
- [JavaScript.info - Events](https://javascript.info/events)
- [jQuery Tutorial - W3Schools](https://www.w3schools.com/jquery/)
- [Anime.js Examples](https://animejs.com/documentation/#cssSelector)

### Tools
- [Easing Functions Cheat Sheet](https://easings.net/)
- [Cubic-Bezier Generator](https://cubic-bezier.com/)
- [Can I Use](https://caniuse.com/) - Browser compatibility

### Practice
- [CodePen](https://codepen.io/) - Try examples online
- [JSFiddle](https://jsfiddle.net/) - Test code snippets
- [JavaScript30](https://javascript30.com/) - 30 day vanilla JS challenge

---

## Key Takeaways

1. **Events** are the foundation of interactive web pages
2. **addEventListener** is the modern way to handle events
3. **Event object** contains useful information about the event
4. **jQuery** simplifies DOM manipulation and event handling
5. **Animation** guides user attention and improves UX
6. **Choose the right tool** for your project needs
7. **Performance matters** - test on real devices
8. **Keep learning** - JavaScript ecosystem is always evolving

## Next Steps

1. Practice event handling with vanilla JavaScript
2. Build simple interactive components with jQuery
3. Experiment with different animation techniques
4. Combine multiple concepts in a project
5. Explore advanced animation libraries
6. Learn about performance optimization
7. Study accessibility in interactive components

Remember: **Start simple, then add complexity.** Master the fundamentals before moving to advanced techniques!
