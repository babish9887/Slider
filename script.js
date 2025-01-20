// Select DOM elements
const slider = document.querySelector(".slider"); 
const container = document.querySelector(".slider-container"); 
let isDown = false; 
let startY; 
let currentTranslate = 0; 
let prevTranslate = 0; 
const cardHeight = 240;
const cards = document.querySelectorAll(".card"); 

const minY = -(cards.length - 3) * cardHeight; 
const maxY = 0;

// Function to set the slider's position based on the Y value
function setSliderPosition(y) {
  currentTranslate = y; 
  slider.style.transform = `translateY(${y}px)`; 
  requestAnimationFrame(updateCardsScale);
}

// Function to update the scaling of the cards based on their distance from the center
function updateCardsScale() {
  const containerCenter = container.getBoundingClientRect().top + container.offsetHeight / 2; 

  cards.forEach(card => {
    const cardCenter = card.getBoundingClientRect().top + card.offsetHeight / 2; 
    const distanceFromCenter = Math.abs(containerCenter - cardCenter); 
    
    const maxDistance = cardHeight;
    const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1); 
    const scale = 1.1 - (0.1 * normalizedDistance); 

    card.style.zIndex = distanceFromCenter < cardHeight / 2 ? '10' : '1';

    card.style.transition = `transform ${isDown ? '0.1s' : '0.3s'} ease`; 
    card.style.transform = `scale(${scale})`; 
  });
}


// When mouse or touch starts dragging
function dragStart(e) {
  isDown = true; 
  startY = e.pageY || e.touches[0].pageY;
  prevTranslate = currentTranslate;
  slider.style.transition = 'none'; 
}

// When mouse or touch moves during the drag
function drag(e) {
  if (!isDown) return; 
  e.preventDefault(); 
  const y = e.pageY || e.touches[0].pageY; 
  const diff = y - startY;
  let newTranslate = prevTranslate + diff;
  newTranslate = Math.max(minY, Math.min(maxY, newTranslate));
  
  setSliderPosition(newTranslate); // Update the slider position
}

// When mouse or touch ends, finalize the drag and snap to the closest card
function dragEnd() {
  isDown = false;
  slider.style.transition = 'transform 0.3s ease'; 
  const targetPosition = Math.round(currentTranslate / cardHeight) * cardHeight; 
  setSliderPosition(Math.max(minY, Math.min(maxY, targetPosition))); 
}

// Initial call to update card scaling
updateCardsScale();

// Event listeners for mouse drag
slider.addEventListener("mousedown", dragStart); 
window.addEventListener("mousemove", drag); 
window.addEventListener("mouseup", dragEnd); 
window.addEventListener("mouseleave", dragEnd);

// Event listeners for touch drag
slider.addEventListener("touchstart", dragStart); 
window.addEventListener("touchmove", drag); 
window.addEventListener("touchend", dragEnd); 
window.addEventListener("touchcancel", dragEnd); 
