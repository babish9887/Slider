#Slider
A lightweight, responsive card slider component with smooth scaling transitions and touch support. Built with vanilla JavaScript and CSS, this component provides an engaging user experience with cards that smoothly scale up when centered.
Show Image
Features

Smooth vertical scrolling with mouse and touch support
Dynamic card scaling when centered
Snap-to-grid functionality
Hardware-accelerated animations
Responsive design
Touch-friendly interface
No external dependencies

Setup
Installation

Clone the repository:

bashCopygit clone https://github.com/babish9887/Slider.git
cd Slider

Include the required files in your HTML:

htmlCopy<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>

Add the slider markup to your HTML:

htmlCopy<div class="slider-container">
  <div class="slider">
    <div class="card">
      <div class="inner-top"></div>
      <div class="content">
        <div class="circle"></div>
        <div class="text-container">
          <div class="text-line-large"></div>
          <div class="text-line-small"></div>
        </div>
      </div>
    </div>
    <!-- Add more cards as needed -->
  </div>
</div>
Technical Details
Technology Choices

Vanilla JavaScript

CSS Transforms & Transitions

requestAnimationFrame



Implementation Details

Uses CSS transform: translateY() for smooth vertical scrolling
Implements touch events for mobile support
Uses CSS transitions for smooth scaling animations
Calculates card positions relative to container center
Implements snap-to-grid functionality for better UX

Known Limitations & Trade-offs

Vertical Scrolling Only

Fixed Card Heights

Performance on Large Lists

Requires modern browser support for CSS transforms



Future Improvements

Virtual Scrolling

Customization Options

Accessibility

Performance Optimizations

Additional Features

Add infinite scroll option
Support for different card layouts
Add pagination indicators
Support for card content lazy loading

License
This project is licensed under the MIT License - see the LICENSE file for details.