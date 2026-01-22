# Code Examples - Week 08: JavaScript Events & Animation

## Table of Contents
1. [Event Listeners](#event-listeners)
2. [jQuery Basics](#jquery-basics)
3. [jQuery Event Handling](#jquery-event-handling)
4. [jQuery Animation](#jquery-animation)
5. [Anime.js Animation](#animejs-animation)
6. [Practical Examples](#practical-examples)

---

## Event Listeners

### Example 1: Basic Click Event

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Click Event Example</title>
    <style>
        .button {
            padding: 15px 30px;
            font-size: 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 10px;
        }
        
        .button:hover {
            background-color: #45a049;
        }
        
        .message {
            margin-top: 20px;
            padding: 15px;
            background-color: #f0f0f0;
            border-radius: 5px;
            display: none;
        }
    </style>
</head>
<body>
    <h1>Click Event Demo</h1>
    <button class="button" id="clickBtn">Click Me!</button>
    <div class="message" id="message">Button was clicked!</div>

    <script>
        // Get the button element
        const button = document.getElementById('clickBtn');
        const message = document.getElementById('message');
        
        // Add click event listener
        button.addEventListener('click', function() {
            message.style.display = 'block';
            console.log('Button clicked!');
        });
    </script>
</body>
</html>
```

### Example 2: Multiple Event Types

**JavaScript:**
```javascript
// Get element
const box = document.getElementById('interactiveBox');

// Click event
box.addEventListener('click', function() {
    console.log('Box clicked!');
    this.style.backgroundColor = '#e74c3c';
});

// Double-click event
box.addEventListener('dblclick', function() {
    console.log('Box double-clicked!');
    this.style.backgroundColor = '#3498db';
});

// Mouse enter event
box.addEventListener('mouseenter', function() {
    console.log('Mouse entered the box');
    this.style.transform = 'scale(1.1)';
});

// Mouse leave event
box.addEventListener('mouseleave', function() {
    console.log('Mouse left the box');
    this.style.transform = 'scale(1)';
});

// Context menu (right-click)
box.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Prevent default context menu
    console.log('Right-clicked!');
    this.style.backgroundColor = '#9b59b6';
});
```

**HTML:**
```html
<style>
    #interactiveBox {
        width: 200px;
        height: 200px;
        background-color: #2ecc71;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 18px;
        transition: all 0.3s ease;
        cursor: pointer;
        user-select: none;
    }
</style>

<div id="interactiveBox">
    Interact with me!
</div>
```

### Example 3: Keyboard Events

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Keyboard Events</title>
    <style>
        .key-display {
            padding: 30px;
            font-size: 24px;
            background-color: #34495e;
            color: white;
            border-radius: 10px;
            text-align: center;
            margin: 20px;
        }
        
        .input-field {
            width: 100%;
            padding: 15px;
            font-size: 18px;
            margin: 20px 0;
            border: 2px solid #3498db;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Keyboard Event Demo</h1>
    
    <input type="text" class="input-field" id="textInput" 
           placeholder="Type something...">
    
    <div class="key-display" id="keyDisplay">
        Press any key...
    </div>
    
    <div id="keyInfo"></div>

    <script>
        const textInput = document.getElementById('textInput');
        const keyDisplay = document.getElementById('keyDisplay');
        const keyInfo = document.getElementById('keyInfo');
        
        // Keydown event - fires when key is pressed
        textInput.addEventListener('keydown', function(e) {
            console.log('Key down:', e.key);
        });
        
        // Keyup event - fires when key is released
        textInput.addEventListener('keyup', function(e) {
            console.log('Key up:', e.key);
            keyDisplay.textContent = `You pressed: ${e.key}`;
        });
        
        // Keypress event (deprecated but still used)
        textInput.addEventListener('keypress', function(e) {
            console.log('Key press:', e.key);
        });
        
        // Global keyboard listener
        document.addEventListener('keydown', function(e) {
            keyInfo.innerHTML = `
                <p><strong>Key:</strong> ${e.key}</p>
                <p><strong>Code:</strong> ${e.code}</p>
                <p><strong>Key Code:</strong> ${e.keyCode}</p>
                <p><strong>Ctrl:</strong> ${e.ctrlKey}</p>
                <p><strong>Shift:</strong> ${e.shiftKey}</p>
                <p><strong>Alt:</strong> ${e.altKey}</p>
            `;
            
            // Check for specific key combinations
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault(); // Prevent browser save dialog
                console.log('Ctrl+S pressed - custom save action!');
            }
        });
    </script>
</body>
</html>
```

### Example 4: Form Events

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form Events</title>
    <style>
        .form-container {
            max-width: 400px;
            margin: 50px auto;
            padding: 30px;
            border: 2px solid #ddd;
            border-radius: 10px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input, textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }
        
        input:focus, textarea:focus {
            outline: none;
            border-color: #4CAF50;
            box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
        }
        
        .submit-btn {
            background-color: #4CAF50;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
        }
        
        .submit-btn:hover {
            background-color: #45a049;
        }
        
        .error {
            color: red;
            font-size: 12px;
            margin-top: 5px;
        }
        
        .success {
            color: green;
            font-size: 14px;
            margin-top: 10px;
            display: none;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>Contact Form</h2>
        <form id="contactForm">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <span class="error" id="nameError"></span>
            </div>
            
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <span class="error" id="emailError"></span>
            </div>
            
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                <span class="error" id="messageError"></span>
            </div>
            
            <button type="submit" class="submit-btn">Submit</button>
            <div class="success" id="successMessage">
                Form submitted successfully!
            </div>
        </form>
    </div>

    <script>
        const form = document.getElementById('contactForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Input event - fires on every input change
        nameInput.addEventListener('input', function(e) {
            console.log('Current name value:', e.target.value);
        });
        
        // Focus event - fires when element gains focus
        nameInput.addEventListener('focus', function() {
            console.log('Name input focused');
            this.style.backgroundColor = '#f0f8ff';
        });
        
        // Blur event - fires when element loses focus
        nameInput.addEventListener('blur', function() {
            console.log('Name input lost focus');
            this.style.backgroundColor = 'white';
            
            // Validate on blur
            if (this.value.trim() === '') {
                document.getElementById('nameError').textContent = 
                    'Name is required';
            } else {
                document.getElementById('nameError').textContent = '';
            }
        });
        
        // Change event - fires when value changes and element loses focus
        emailInput.addEventListener('change', function(e) {
            console.log('Email changed to:', e.target.value);
        });
        
        // Submit event - fires when form is submitted
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            console.log('Form submitted!');
            
            // Get form data
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
            };
            
            console.log('Form data:', formData);
            
            // Show success message
            document.getElementById('successMessage').style.display = 'block';
            
            // Reset form after 2 seconds
            setTimeout(() => {
                form.reset();
                document.getElementById('successMessage').style.display = 'none';
            }, 2000);
        });
    </script>
</body>
</html>
```

---

## jQuery Basics

### Example 5: Including jQuery

**CDN Method (Recommended for learning):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery Basics</title>
    <!-- Include jQuery from CDN -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body>
    <h1>Hello jQuery!</h1>
    
    <script>
        // Check if jQuery is loaded
        if (typeof jQuery !== 'undefined') {
            console.log('jQuery version:', jQuery.fn.jquery);
        }
        
        // jQuery ready function - executes when DOM is ready
        $(document).ready(function() {
            console.log('DOM is ready!');
            $('h1').css('color', 'blue');
        });
        
        // Shorter syntax (same as above)
        $(function() {
            console.log('This also runs when DOM is ready!');
        });
    </script>
</body>
</html>
```

### Example 6: jQuery Selectors

**JavaScript:**
```javascript
// Element selector
$('p');                    // Select all <p> elements
$('div');                  // Select all <div> elements

// ID selector
$('#myId');               // Select element with id="myId"
$('#header');             // Select element with id="header"

// Class selector
$('.myClass');            // Select all elements with class="myClass"
$('.button');             // Select all elements with class="button"

// Multiple selectors
$('p, div, span');        // Select all p, div, and span elements

// Descendant selector
$('div p');               // Select all <p> inside <div>
$('.container .item');    // Select all .item inside .container

// Direct child selector
$('ul > li');             // Select direct <li> children of <ul>

// Attribute selector
$('[name="email"]');      // Select elements with name="email"
$('input[type="text"]');  // Select text inputs
$('a[href^="https"]');    // Select links starting with https

// First, last, and nth selectors
$('li:first');            // Select first <li>
$('li:last');             // Select last <li>
$('li:eq(2)');           // Select third <li> (zero-indexed)
$('li:nth-child(2)');    // Select second child <li>

// Filter selectors
$('p:even');             // Select even <p> elements
$('p:odd');              // Select odd <p> elements
$('div:visible');        // Select visible <div> elements
$('div:hidden');         // Select hidden <div> elements

// Contains selector
$('p:contains("hello")'); // Select <p> containing "hello"
```

**HTML Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery Selectors Demo</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <style>
        .highlight { background-color: yellow; }
        .box { 
            padding: 20px; 
            margin: 10px; 
            border: 2px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 id="title">jQuery Selectors</h1>
        
        <div class="box">
            <p class="text">First paragraph</p>
            <p class="text">Second paragraph</p>
            <p class="text special">Third paragraph</p>
        </div>
        
        <ul id="myList">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        
        <input type="text" name="username" placeholder="Username">
        <input type="email" name="email" placeholder="Email">
        <button id="testBtn">Test Selectors</button>
    </div>

    <script>
        $(document).ready(function() {
            $('#testBtn').click(function() {
                // Highlight all paragraphs
                $('p').addClass('highlight');
                
                // Log first list item
                console.log('First item:', $('li:first').text());
                
                // Get text input value
                console.log('Username:', $('input[name="username"]').val());
                
                // Count elements
                console.log('Number of paragraphs:', $('p').length);
            });
        });
    </script>
</body>
</html>
```

### Example 7: jQuery DOM Manipulation

**JavaScript:**
```javascript
$(document).ready(function() {
    // Get/Set content
    $('#myDiv').text();              // Get text content
    $('#myDiv').text('New text');    // Set text content
    $('#myDiv').html();              // Get HTML content
    $('#myDiv').html('<p>New HTML</p>'); // Set HTML content
    
    // Get/Set attributes
    $('img').attr('src');            // Get src attribute
    $('img').attr('src', 'new.jpg'); // Set src attribute
    $('a').attr({                    // Set multiple attributes
        href: 'https://example.com',
        target: '_blank'
    });
    
    // Get/Set CSS
    $('p').css('color');             // Get color
    $('p').css('color', 'red');      // Set color
    $('p').css({                     // Set multiple properties
        'color': 'blue',
        'font-size': '20px',
        'background-color': '#f0f0f0'
    });
    
    // Add/Remove/Toggle classes
    $('div').addClass('active');
    $('div').removeClass('inactive');
    $('div').toggleClass('hidden');
    $('div').hasClass('active');     // Returns true/false
    
    // Get/Set values
    $('input').val();                // Get input value
    $('input').val('New value');     // Set input value
    
    // Add elements
    $('ul').append('<li>New item</li>');      // Add to end
    $('ul').prepend('<li>First item</li>');   // Add to beginning
    $('p').after('<div>After</div>');         // Add after element
    $('p').before('<div>Before</div>');       // Add before element
    
    // Remove elements
    $('p').remove();                 // Remove element
    $('div').empty();                // Remove all children
    
    // Clone elements
    $('div').clone().appendTo('body');
    
    // Wrap elements
    $('p').wrap('<div class="wrapper"></div>');
    $('p').unwrap();                 // Remove wrapper
});
```

**Complete Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery DOM Manipulation</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <style>
        .highlight { background-color: yellow; padding: 5px; }
        .box { 
            border: 2px solid #333; 
            padding: 20px; 
            margin: 10px;
        }
        button { 
            margin: 5px; 
            padding: 10px 20px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="content">
        <h1>DOM Manipulation Demo</h1>
        <p id="para1">This is a paragraph.</p>
        <ul id="list">
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
    
    <div id="controls">
        <button id="changeText">Change Text</button>
        <button id="addItem">Add List Item</button>
        <button id="toggleClass">Toggle Highlight</button>
        <button id="changeStyle">Change Style</button>
        <button id="cloneElement">Clone Paragraph</button>
    </div>

    <script>
        $(document).ready(function() {
            $('#changeText').click(function() {
                $('#para1').text('Text has been changed!');
            });
            
            $('#addItem').click(function() {
                var itemCount = $('#list li').length + 1;
                $('#list').append('<li>Item ' + itemCount + '</li>');
            });
            
            $('#toggleClass').click(function() {
                $('#para1').toggleClass('highlight');
            });
            
            $('#changeStyle').click(function() {
                $('#para1').css({
                    'color': 'blue',
                    'font-size': '24px',
                    'font-weight': 'bold'
                });
            });
            
            $('#cloneElement').click(function() {
                $('#para1').clone().appendTo('#content');
            });
        });
    </script>
</body>
</html>
```

---

## jQuery Event Handling

### Example 8: jQuery Click Events

**JavaScript:**
```javascript
$(document).ready(function() {
    // Simple click
    $('#myButton').click(function() {
        alert('Button clicked!');
    });
    
    // Click with event object
    $('button').click(function(e) {
        console.log('Event type:', e.type);
        console.log('Target element:', e.target);
        console.log('Mouse X:', e.pageX);
        console.log('Mouse Y:', e.pageY);
    });
    
    // Multiple elements
    $('.clickable').click(function() {
        $(this).css('background-color', 'lightblue');
    });
    
    // Event delegation (for dynamic elements)
    $('#container').on('click', '.dynamic-button', function() {
        console.log('Dynamic button clicked!');
    });
    
    // One-time click
    $('#oneTime').one('click', function() {
        alert('This will only show once!');
    });
    
    // Prevent default action
    $('a').click(function(e) {
        e.preventDefault();
        console.log('Link click prevented');
    });
});
```

### Example 9: jQuery Hover Events

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery Hover Demo</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <style>
        .card {
            width: 200px;
            height: 150px;
            background-color: #3498db;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .info {
            display: none;
            margin-top: 10px;
            padding: 15px;
            background-color: #f0f0f0;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Hover Demo</h1>
    
    <div class="card" id="card1">
        Hover over me!
    </div>
    
    <div class="info" id="info1">
        Additional information appears on hover!
    </div>
    
    <div class="card" id="card2">
        Another card
    </div>

    <script>
        $(document).ready(function() {
            // Hover with two functions (mouseenter, mouseleave)
            $('#card1').hover(
                function() {
                    // Mouse enter
                    $(this).css({
                        'background-color': '#2ecc71',
                        'transform': 'scale(1.1)'
                    });
                    $('#info1').fadeIn();
                },
                function() {
                    // Mouse leave
                    $(this).css({
                        'background-color': '#3498db',
                        'transform': 'scale(1)'
                    });
                    $('#info1').fadeOut();
                }
            );
            
            // Hover with single function (toggles on enter/leave)
            $('#card2').hover(function() {
                $(this).toggleClass('active');
            });
            
            // Individual mouseenter and mouseleave
            $('.card').mouseenter(function() {
                console.log('Mouse entered');
            }).mouseleave(function() {
                console.log('Mouse left');
            });
            
            // Track mouse movement
            $(document).mousemove(function(e) {
                $('#mousePos').text('X: ' + e.pageX + ', Y: ' + e.pageY);
            });
        });
    </script>
    
    <div id="mousePos" style="position: fixed; top: 10px; right: 10px;"></div>
</body>
</html>
```

### Example 10: jQuery Keyboard Events

**JavaScript:**
```javascript
$(document).ready(function() {
    // Keypress event
    $('#inputField').keypress(function(e) {
        console.log('Key pressed:', e.which);
        // e.which gives the key code
    });
    
    // Keydown event
    $('#inputField').keydown(function(e) {
        console.log('Key down:', e.key);
        
        // Check for specific keys
        if (e.key === 'Enter') {
            console.log('Enter key pressed!');
        }
        
        // Check for key combinations
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            console.log('Ctrl+S detected - saving...');
        }
    });
    
    // Keyup event
    $('#inputField').keyup(function(e) {
        var value = $(this).val();
        $('#output').text(value);
        console.log('Current value:', value);
    });
    
    // Detect specific key codes
    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // Left arrow
                console.log('Left arrow pressed');
                break;
            case 38: // Up arrow
                console.log('Up arrow pressed');
                break;
            case 39: // Right arrow
                console.log('Right arrow pressed');
                break;
            case 40: // Down arrow
                console.log('Down arrow pressed');
                break;
            case 27: // Escape
                console.log('Escape pressed');
                break;
        }
    });
});
```

---

## jQuery Animation

### Example 11: jQuery Fade Effects

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery Fade Effects</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: #3498db;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px;
            font-size: 20px;
        }
        
        button {
            margin: 5px;
            padding: 10px 20px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Fade Effects Demo</h1>
    
    <div class="box" id="fadeBox">Fade Box</div>
    
    <button id="fadeOut">Fade Out</button>
    <button id="fadeIn">Fade In</button>
    <button id="fadeToggle">Fade Toggle</button>
    <button id="fadeTo">Fade To 50%</button>

    <script>
        $(document).ready(function() {
            // Fade out
            $('#fadeOut').click(function() {
                $('#fadeBox').fadeOut(1000); // Duration in milliseconds
            });
            
            // Fade in
            $('#fadeIn').click(function() {
                $('#fadeBox').fadeIn(1000);
            });
            
            // Fade toggle
            $('#fadeToggle').click(function() {
                $('#fadeBox').fadeToggle(1000);
            });
            
            // Fade to specific opacity
            $('#fadeTo').click(function() {
                $('#fadeBox').fadeTo(1000, 0.5); // Fade to 50% opacity
            });
            
            // With callback function
            $('#fadeBox').click(function() {
                $(this).fadeOut(500, function() {
                    console.log('Fade out complete!');
                    $(this).fadeIn(500);
                });
            });
        });
    </script>
</body>
</html>
```

### Example 12: jQuery Slide Effects

**JavaScript:**
```javascript
$(document).ready(function() {
    // Slide down (show)
    $('#slideDown').click(function() {
        $('#content').slideDown(1000);
    });
    
    // Slide up (hide)
    $('#slideUp').click(function() {
        $('#content').slideUp(1000);
    });
    
    // Slide toggle
    $('#slideToggle').click(function() {
        $('#content').slideToggle(1000);
    });
    
    // Slide with easing
    $('#slideEase').click(function() {
        $('#content').slideToggle(1000, 'swing'); // 'swing' or 'linear'
    });
    
    // Accordion effect
    $('.accordion-header').click(function() {
        $(this).next('.accordion-content').slideToggle(300);
        $('.accordion-content').not($(this).next()).slideUp(300);
    });
});
```

**HTML Example (Accordion):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Accordion with jQuery</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <style>
        .accordion {
            max-width: 600px;
            margin: 50px auto;
        }
        
        .accordion-header {
            background-color: #3498db;
            color: white;
            padding: 15px;
            cursor: pointer;
            border: none;
            width: 100%;
            text-align: left;
            font-size: 18px;
            margin-top: 5px;
        }
        
        .accordion-header:hover {
            background-color: #2980b9;
        }
        
        .accordion-content {
            display: none;
            padding: 15px;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="accordion">
        <h2>FAQ Accordion</h2>
        
        <button class="accordion-header">What is jQuery?</button>
        <div class="accordion-content">
            <p>jQuery is a fast, small, and feature-rich JavaScript library that makes things like HTML document traversal and manipulation, event handling, and animation much simpler.</p>
        </div>
        
        <button class="accordion-header">Why use jQuery?</button>
        <div class="accordion-content">
            <p>jQuery simplifies JavaScript programming and provides cross-browser compatibility. It's easy to learn and has excellent documentation.</p>
        </div>
        
        <button class="accordion-header">Is jQuery still relevant?</button>
        <div class="accordion-content">
            <p>While modern JavaScript frameworks have grown in popularity, jQuery is still widely used and is great for learning fundamental web development concepts.</p>
        </div>
    </div>

    <script>
        $(document).ready(function() {
            $('.accordion-header').click(function() {
                var content = $(this).next('.accordion-content');
                
                // Close all others
                $('.accordion-content').not(content).slideUp(300);
                
                // Toggle clicked one
                content.slideToggle(300);
            });
        });
    </script>
</body>
</html>
```

### Example 13: jQuery Custom Animation

**JavaScript:**
```javascript
$(document).ready(function() {
    // Basic animation
    $('#animate').click(function() {
        $('#box').animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        }, 1000);
    });
    
    // Sequential animations
    $('#sequence').click(function() {
        var box = $('#box');
        box.animate({left: '250px'}, 1000)
           .animate({top: '250px'}, 1000)
           .animate({left: '0px'}, 1000)
           .animate({top: '0px'}, 1000);
    });
    
    // Relative values
    $('#relative').click(function() {
        $('#box').animate({
            left: '+=50px',  // Move 50px right
            top: '-=50px'    // Move 50px up
        }, 500);
    });
    
    // Toggle animation
    $('#toggle').click(function() {
        $('#box').animate({
            width: 'toggle',
            height: 'toggle'
        }, 1000);
    });
    
    // Stop animation
    $('#stop').click(function() {
        $('#box').stop();
    });
    
    // Stop and clear queue
    $('#stopAll').click(function() {
        $('#box').stop(true, true);
    });
    
    // Animation with callback
    $('#callback').click(function() {
        $('#box').animate({
            left: '300px'
        }, 2000, function() {
            alert('Animation complete!');
            $(this).css('background-color', 'green');
        });
    });
    
    // Delay animation
    $('#delay').click(function() {
        $('#box').delay(1000).animate({
            left: '200px'
        }, 1000);
    });
});
```

**Complete Animation Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery Custom Animation</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <style>
        #animationArea {
            position: relative;
            width: 500px;
            height: 500px;
            border: 2px solid #333;
            margin: 20px auto;
        }
        
        .animated-box {
            position: absolute;
            width: 100px;
            height: 100px;
            background-color: #3498db;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        #controls {
            text-align: center;
            margin: 20px;
        }
        
        button {
            margin: 5px;
            padding: 10px 20px;
            cursor: pointer;
            background-color: #2ecc71;
            color: white;
            border: none;
            border-radius: 5px;
        }
        
        button:hover {
            background-color: #27ae60;
        }
    </style>
</head>
<body>
    <h1 style="text-align: center;">jQuery Animation Demo</h1>
    
    <div id="animationArea">
        <div class="animated-box" id="box1">Box</div>
    </div>
    
    <div id="controls">
        <button id="moveRight">Move Right</button>
        <button id="moveCircle">Move in Circle</button>
        <button id="pulse">Pulse</button>
        <button id="bounce">Bounce</button>
        <button id="reset">Reset</button>
        <button id="stopBtn">Stop</button>
    </div>

    <script>
        $(document).ready(function() {
            var box = $('#box1');
            
            $('#moveRight').click(function() {
                box.animate({left: '400px'}, 1500);
            });
            
            $('#moveCircle').click(function() {
                box.animate({left: '400px'}, 1000)
                   .animate({top: '400px'}, 1000)
                   .animate({left: '0px'}, 1000)
                   .animate({top: '0px'}, 1000);
            });
            
            $('#pulse').click(function() {
                box.animate({
                    width: '120px',
                    height: '120px'
                }, 500)
                .animate({
                    width: '80px',
                    height: '80px'
                }, 500)
                .animate({
                    width: '100px',
                    height: '100px'
                }, 500);
            });
            
            $('#bounce').click(function() {
                for (var i = 0; i < 3; i++) {
                    box.animate({top: '300px'}, 500)
                       .animate({top: '0px'}, 500);
                }
            });
            
            $('#reset').click(function() {
                box.stop(true, false).css({
                    left: '0px',
                    top: '0px',
                    width: '100px',
                    height: '100px'
                });
            });
            
            $('#stopBtn').click(function() {
                box.stop(true, true);
            });
        });
    </script>
</body>
</html>
```

---

## Anime.js Animation

### Example 14: Getting Started with Anime.js

**Including Anime.js:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Anime.js Basics</title>
    <!-- Include Anime.js from CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    <style>
        .anime-box {
            width: 100px;
            height: 100px;
            background-color: #FF6B6B;
            margin: 50px;
        }
    </style>
</head>
<body>
    <div class="anime-box" id="box1"></div>
    
    <script>
        // Basic anime.js animation
        anime({
            targets: '#box1',
            translateX: 250,
            rotate: '1turn',
            backgroundColor: '#4ECDC4',
            duration: 2000,
            easing: 'easeInOutQuad'
        });
    </script>
</body>
</html>
```

### Example 15: Anime.js Transform Properties

**JavaScript:**
```javascript
// Translate (move)
anime({
    targets: '.element',
    translateX: 250,      // Move right 250px
    translateY: -100,     // Move up 100px
    duration: 1000
});

// Scale
anime({
    targets: '.element',
    scaleX: 2,           // Scale width to 2x
    scaleY: 1.5,         // Scale height to 1.5x
    scale: 2,            // Scale both to 2x
    duration: 1000
});

// Rotate
anime({
    targets: '.element',
    rotate: '360deg',    // Rotate 360 degrees
    rotate: '1turn',     // Same as 360deg
    rotateX: '180deg',   // 3D rotation
    rotateY: '180deg',
    duration: 1000
});

// Skew
anime({
    targets: '.element',
    skewX: '20deg',
    skewY: '10deg',
    duration: 1000
});

// Multiple properties
anime({
    targets: '.element',
    translateX: 250,
    rotate: 360,
    scale: 1.5,
    duration: 1500,
    easing: 'easeInOutQuad'
});
```

### Example 16: Anime.js CSS Properties

**JavaScript:**
```javascript
// Color animation
anime({
    targets: '.element',
    backgroundColor: '#FF6B6B',
    color: '#FFFFFF',
    duration: 1000
});

// Size animation
anime({
    targets: '.element',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    duration: 1000
});

// Opacity
anime({
    targets: '.element',
    opacity: 0.5,
    duration: 1000
});

// Border
anime({
    targets: '.element',
    borderWidth: '10px',
    borderColor: '#FFF',
    duration: 1000
});
```

### Example 17: Anime.js Easing and Timing

**JavaScript:**
```javascript
// Different easing functions
anime({
    targets: '.element',
    translateX: 250,
    easing: 'linear'           // Constant speed
});

anime({
    targets: '.element',
    translateX: 250,
    easing: 'easeInQuad'       // Slow start
});

anime({
    targets: '.element',
    translateX: 250,
    easing: 'easeOutQuad'      // Slow end
});

anime({
    targets: '.element',
    translateX: 250,
    easing: 'easeInOutQuad'    // Slow start and end
});

anime({
    targets: '.element',
    translateX: 250,
    easing: 'easeInOutElastic' // Elastic effect
});

anime({
    targets: '.element',
    translateX: 250,
    easing: 'spring(1, 80, 10, 0)' // Spring physics
});

// Custom bezier curve
anime({
    targets: '.element',
    translateX: 250,
    easing: 'cubicBezier(.5, .05, .1, .3)'
});

// Duration and delay
anime({
    targets: '.element',
    translateX: 250,
    duration: 2000,    // 2 seconds
    delay: 500,        // Wait 0.5 seconds before starting
    endDelay: 1000     // Wait 1 second after finishing
});
```

### Example 18: Complete Anime.js Example

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Anime.js Complete Demo</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 50px;
        }
        
        .demo-container {
            margin: 30px 0;
        }
        
        .anime-element {
            width: 80px;
            height: 80px;
            background-color: #FF6B6B;
            margin: 20px;
            display: inline-block;
            border-radius: 5px;
        }
        
        button {
            margin: 10px 5px;
            padding: 10px 20px;
            background-color: #4ECDC4;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
        }
        
        button:hover {
            background-color: #45B7AF;
        }
        
        #timeline-demo {
            position: relative;
            width: 600px;
            height: 300px;
            border: 2px solid #ddd;
            margin: 20px 0;
        }
        
        .timeline-element {
            position: absolute;
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        
        #circle1 { background-color: #FF6B6B; }
        #circle2 { background-color: #4ECDC4; }
        #circle3 { background-color: #FFE66D; }
    </style>
</head>
<body>
    <h1>Anime.js Animation Library</h1>
    
    <!-- Basic Animations -->
    <div class="demo-container">
        <h2>Basic Animations</h2>
        <div class="anime-element" id="element1"></div>
        <br>
        <button id="translateBtn">Translate</button>
        <button id="scaleBtn">Scale</button>
        <button id="rotateBtn">Rotate</button>
        <button id="colorBtn">Change Color</button>
    </div>
    
    <!-- Timeline Animation -->
    <div class="demo-container">
        <h2>Timeline Animation</h2>
        <div id="timeline-demo">
            <div class="timeline-element" id="circle1"></div>
            <div class="timeline-element" id="circle2"></div>
            <div class="timeline-element" id="circle3"></div>
        </div>
        <button id="timelineBtn">Play Timeline</button>
    </div>
    
    <!-- Stagger Animation -->
    <div class="demo-container">
        <h2>Stagger Animation</h2>
        <div id="stagger-container">
            <div class="anime-element stagger-el"></div>
            <div class="anime-element stagger-el"></div>
            <div class="anime-element stagger-el"></div>
            <div class="anime-element stagger-el"></div>
            <div class="anime-element stagger-el"></div>
        </div>
        <button id="staggerBtn">Stagger Animation</button>
    </div>

    <script>
        // Basic translate
        document.getElementById('translateBtn').addEventListener('click', function() {
            anime({
                targets: '#element1',
                translateX: 300,
                duration: 1500,
                easing: 'easeInOutQuad'
            });
        });
        
        // Scale
        document.getElementById('scaleBtn').addEventListener('click', function() {
            anime({
                targets: '#element1',
                scale: [1, 2, 1],
                duration: 2000,
                easing: 'easeInOutElastic'
            });
        });
        
        // Rotate
        document.getElementById('rotateBtn').addEventListener('click', function() {
            anime({
                targets: '#element1',
                rotate: '2turn',
                duration: 2000,
                easing: 'easeInOutQuad'
            });
        });
        
        // Color
        document.getElementById('colorBtn').addEventListener('click', function() {
            anime({
                targets: '#element1',
                backgroundColor: [
                    {value: '#4ECDC4'},
                    {value: '#FFE66D'},
                    {value: '#FF6B6B'}
                ],
                duration: 3000,
                easing: 'linear'
            });
        });
        
        // Timeline animation
        document.getElementById('timelineBtn').addEventListener('click', function() {
            var timeline = anime.timeline({
                easing: 'easeInOutQuad',
                duration: 1000
            });
            
            timeline
                .add({
                    targets: '#circle1',
                    translateX: 500,
                    backgroundColor: '#4ECDC4'
                })
                .add({
                    targets: '#circle2',
                    translateX: 500,
                    translateY: 200,
                    backgroundColor: '#FFE66D'
                }, '-=500')  // Start 500ms before previous animation ends
                .add({
                    targets: '#circle3',
                    translateX: 250,
                    translateY: 100,
                    scale: 2,
                    backgroundColor: '#FF6B6B'
                }, '-=800');
        });
        
        // Stagger animation
        document.getElementById('staggerBtn').addEventListener('click', function() {
            anime({
                targets: '.stagger-el',
                translateY: -50,
                scale: [1, 1.5, 1],
                backgroundColor: ['#FF6B6B', '#4ECDC4', '#FF6B6B'],
                duration: 2000,
                delay: anime.stagger(200), // Delay each element by 200ms
                easing: 'easeInOutQuad',
                loop: false
            });
        });
    </script>
</body>
</html>
```

---

## Practical Examples

### Example 19: Interactive Image Gallery

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Interactive Gallery</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .gallery-item img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            display: block;
            transition: transform 0.3s ease;
        }
        
        .gallery-item:hover img {
            transform: scale(1.1);
        }
        
        .gallery-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0,0,0,0.8));
            color: white;
            padding: 20px;
            transform: translateY(100%);
            transition: transform 0.3s ease;
        }
        
        .gallery-item:hover .gallery-overlay {
            transform: translateY(0);
        }
        
        /* Lightbox */
        .lightbox {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.9);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }
        
        .lightbox img {
            max-width: 90%;
            max-height: 90%;
            box-shadow: 0 0 50px rgba(255,255,255,0.3);
        }
        
        .lightbox-close {
            position: absolute;
            top: 20px;
            right: 40px;
            color: white;
            font-size: 40px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1 style="text-align: center; margin-bottom: 30px;">Interactive Photo Gallery</h1>
    
    <div class="gallery">
        <div class="gallery-item">
            <img src="https://picsum.photos/400/300?random=1" alt="Image 1">
            <div class="gallery-overlay">
                <h3>Beautiful Landscape</h3>
                <p>Click to view larger</p>
            </div>
        </div>
        
        <div class="gallery-item">
            <img src="https://picsum.photos/400/300?random=2" alt="Image 2">
            <div class="gallery-overlay">
                <h3>City Lights</h3>
                <p>Click to view larger</p>
            </div>
        </div>
        
        <div class="gallery-item">
            <img src="https://picsum.photos/400/300?random=3" alt="Image 3">
            <div class="gallery-overlay">
                <h3>Nature Walk</h3>
                <p>Click to view larger</p>
            </div>
        </div>
        
        <div class="gallery-item">
            <img src="https://picsum.photos/400/300?random=4" alt="Image 4">
            <div class="gallery-overlay">
                <h3>Mountain View</h3>
                <p>Click to view larger</p>
            </div>
        </div>
    </div>
    
    <!-- Lightbox -->
    <div class="lightbox" id="lightbox">
        <span class="lightbox-close">&times;</span>
        <img src="" alt="Lightbox Image" id="lightbox-img">
    </div>

    <script>
        $(document).ready(function() {
            // Click on gallery item
            $('.gallery-item img').click(function() {
                var imgSrc = $(this).attr('src');
                $('#lightbox-img').attr('src', imgSrc);
                $('#lightbox').fadeIn(300);
            });
            
            // Close lightbox
            $('.lightbox-close, #lightbox').click(function() {
                $('#lightbox').fadeOut(300);
            });
            
            // Prevent closing when clicking on image
            $('#lightbox-img').click(function(e) {
                e.stopPropagation();
            });
            
            // Close on Escape key
            $(document).keyup(function(e) {
                if (e.key === 'Escape') {
                    $('#lightbox').fadeOut(300);
                }
            });
        });
    </script>
</body>
</html>
```

### Example 20: Animated Navigation Menu

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Animated Navigation</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
        }
        
        nav {
            background-color: #2c3e50;
            padding: 15px 50px;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 100;
            transition: all 0.3s ease;
        }
        
        nav.scrolled {
            background-color: #1a252f;
            padding: 10px 50px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        
        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        nav li {
            margin: 0 20px;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            font-size: 18px;
            padding: 10px 20px;
            display: block;
            position: relative;
            transition: all 0.3s ease;
        }
        
        nav a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background-color: #3498db;
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }
        
        nav a:hover::after {
            width: 100%;
        }
        
        nav a:hover {
            color: #3498db;
        }
        
        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
        }
        
        .hamburger span {
            width: 30px;
            height: 3px;
            background-color: white;
            margin: 4px 0;
            transition: 0.3s;
        }
        
        .content {
            margin-top: 100px;
            padding: 50px;
            min-height: 2000px;
        }
        
        section {
            padding: 100px 0;
            min-height: 500px;
        }
        
        @media (max-width: 768px) {
            .hamburger {
                display: flex;
            }
            
            nav ul {
                position: fixed;
                right: -100%;
                top: 70px;
                flex-direction: column;
                background-color: #2c3e50;
                width: 100%;
                text-align: center;
                transition: 0.3s;
                padding: 20px 0;
            }
            
            nav ul.active {
                right: 0;
            }
            
            nav li {
                margin: 15px 0;
            }
        }
    </style>
</head>
<body>
    <nav id="navbar">
        <div class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul id="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    
    <div class="content">
        <section id="home">
            <h1>Home Section</h1>
            <p>Scroll down to see the navigation animation</p>
        </section>
        
        <section id="about">
            <h1>About Section</h1>
        </section>
        
        <section id="services">
            <h1>Services Section</h1>
        </section>
        
        <section id="portfolio">
            <h1>Portfolio Section</h1>
        </section>
        
        <section id="contact">
            <h1>Contact Section</h1>
        </section>
    </div>

    <script>
        $(document).ready(function() {
            // Scroll effect
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('#navbar').addClass('scrolled');
                } else {
                    $('#navbar').removeClass('scrolled');
                }
            });
            
            // Smooth scroll to sections
            $('nav a').click(function(e) {
                e.preventDefault();
                var target = $(this).attr('href');
                $('html, body').animate({
                    scrollTop: $(target).offset().top - 70
                }, 800);
                
                // Close mobile menu
                $('#nav-menu').removeClass('active');
            });
            
            // Hamburger menu toggle
            $('#hamburger').click(function() {
                $('#nav-menu').toggleClass('active');
                $(this).toggleClass('active');
            });
            
            // Highlight active section
            $(window).scroll(function() {
                var scrollPos = $(window).scrollTop() + 100;
                
                $('section').each(function() {
                    var sectionTop = $(this).offset().top;
                    var sectionBottom = sectionTop + $(this).outerHeight();
                    var sectionId = $(this).attr('id');
                    
                    if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                        $('nav a').removeClass('active');
                        $('nav a[href="#' + sectionId + '"]').addClass('active');
                    }
                });
            });
        });
    </script>
</body>
</html>
```

---

## Summary

These code examples demonstrate:

1. **Event Listeners**: Click, hover, keyboard, and form events with vanilla JavaScript
2. **jQuery Basics**: Including jQuery, selectors, and DOM manipulation
3. **jQuery Events**: Simplified event handling with jQuery
4. **jQuery Animation**: Built-in fade, slide, and custom animations
5. **Anime.js**: Modern animation library with advanced features
6. **Practical Examples**: Real-world implementations like galleries and navigation

### Key Concepts Covered:
- addEventListener() for vanilla JavaScript events
- jQuery $ selector for easy element selection
- .click(), .hover(), .keydown() for jQuery events
- .fadeIn(), .fadeOut(), .slideToggle() for jQuery animations
- anime() for complex, timeline-based animations
- Event delegation for dynamic content
- Animation timing and easing functions
- Interactive UI components

### Best Practices:
- Always wait for DOM to be ready before manipulating elements
- Use event delegation for dynamically added elements
- Choose the right library for your needs (jQuery for simplicity, Anime.js for complex animations)
- Test animations on different devices for performance
- Clean up event listeners when elements are removed
- Use CSS transitions for simple animations when possible
