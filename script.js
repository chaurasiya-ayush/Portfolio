


const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");
const navContainer = document.querySelector(".navbar-container"); // Assuming navbar-container is the parent element

// Toggle the navbar when hamburger is clicked
hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the document
    navbar.classList.toggle("active");
});

// Close the navbar if the user clicks anywhere outside of the navbar
document.addEventListener("click", (e) => {
    // If the clicked element is neither the navbar nor the hamburger button, close the navbar
    if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
        navbar.classList.remove("active");
    }
});

// Prevent the click from propagating if the click is inside the navbar or hamburger (so it doesn't trigger the close action)
navbar.addEventListener("click", (e) => {
    e.stopPropagation();
});

 // Simulate page loading
 window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.querySelector('.main-content');

    // Hide the loading screen and show the main content after a delay
    setTimeout(() => {
      loadingScreen.style.opacity = '0'; // Fade out loading screen
      loadingScreen.style.transition = 'opacity 0.3s ease-in-out';
      
      // Remove loading screen after fade-out
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        mainContent.classList.add('fade-in'); // Fade in main content
      }, 500);
    }, 1000); // Adjust delay to match animation duration
  });

  // script.js
// Smooth scrolling for anchor links 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});
//Dialog box
const Dialog = document.getElementById("dialog");
const DialogClose = document.getElementById("dialog-close");
const DialogOpen = document.getElementById("dialog-open");
  // Shake effect on opening
  DialogOpen.addEventListener('click', () => {
    Dialog.showModal();
   });

// Shake effect on closing
DialogClose.addEventListener('click', () => {
  Dialog.close(); // Close the dialog after the animation
  });
  document.addEventListener('click', (event) => {
    if (!DialogOpen.contains(event.target) && !DialogClose.contains(event.target)) {
      Dialog.close();
    }
});

AOS.init();
