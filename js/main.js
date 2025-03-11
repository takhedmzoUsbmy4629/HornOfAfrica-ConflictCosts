/**
 * Main.js - Core functionality and initialization for the site
 */

/**
 * Initialize the site when the DOM is loaded
 */
function initSite() {
  // Initialize tab functionality
  initTabs();
  
  // Initialize scroll animation
  initScrollAnimation();
}

/**
* Initialize tab functionality
*/
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
      tab.addEventListener('click', () => {
          // Remove active class from all tabs
          document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
          
          // Add active class to clicked tab
          tab.classList.add('active');
          
          // Hide all tab content
          document.querySelectorAll('.tab-content').forEach(content => {
              content.classList.remove('active');
          });
          
          // Show the corresponding tab content
          const tabContent = document.querySelector(`.tab-content[data-tab-content="${tab.dataset.tab}"]`);
          if (tabContent) {
              tabContent.classList.add('active');
          }
      });
  });
}

/**
* Initialize scroll animation for elements with the 'scroll-trigger' class
*/
function initScrollAnimation() {
  const scrollTriggerElements = document.querySelectorAll('.scroll-trigger');
  
  // Function to check if elements are visible in the viewport
  const checkScroll = () => {
      scrollTriggerElements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
              element.classList.add('visible');
          }
      });
  };
  
  // Add scroll event listener
  window.addEventListener('scroll', checkScroll);
  
  // Check visibility on page load
  checkScroll();
}

// When the DOM is loaded, initialize the site
document.addEventListener('DOMContentLoaded', initSite);