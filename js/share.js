/**
 * Share.js - Handles the social sharing functionality
 */

/**
 * Initialize the sharing functionality when the DOM is loaded
 */
function initSharing() {
  const shareButton = document.getElementById('shareButton');
  const shareOptions = document.getElementById('shareOptions');
  
  if (!shareButton || !shareOptions) return;
  
  // Toggle share options when the share button is clicked
  shareButton.addEventListener('click', () => {
      shareOptions.classList.toggle('active');
  });
  
  // Hide share options when clicking outside
  document.addEventListener('click', (event) => {
      if (!shareButton.contains(event.target) && !shareOptions.contains(event.target)) {
          shareOptions.classList.remove('active');
      }
  });
  
  // Add functionality to share options
  const shareOptionElements = document.querySelectorAll('.share-option');
  shareOptionElements.forEach(option => {
      option.addEventListener('click', () => {
          const platform = option.textContent.trim();
          shareContent(platform);
      });
  });
}

/**
* Share content to a specific platform
* @param {string} platform - The social platform name
*/
function shareContent(platform) {
  const pageUrl = window.location.href;
  const title = "The True Cost of War in the Horn of Africa";
  const text = "Each conflict in the Horn of Africa has left the ENTIRE REGION POORER and MORE UNSTABLE. Learn about the devastating costs of war.";
  
  let shareUrl;
  
  switch(platform) {
      case 'Facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
          break;
      case 'Twitter':
          shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(text)}`;
          break;
      case 'WhatsApp':
          shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + pageUrl)}`;
          break;
      case 'LinkedIn':
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
          break;
      case 'Telegram':
          shareUrl = `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(text)}`;
          break;
      case 'Reddit':
          shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(title)}`;
          break;
      default:
          // Try to use the Web Share API if available
          if (navigator.share) {
              navigator.share({
                  title: title,
                  text: text,
                  url: pageUrl
              }).catch(error => console.error('Error sharing:', error));
              return;
          }
          console.error('Unknown sharing platform:', platform);
          return;
  }
  
  // Open a new window for sharing
  window.open(shareUrl, '_blank', 'width=600,height=400,resizable=yes,scrollbars=yes');
  
  // Hide the share options after clicking
  const shareOptions = document.getElementById('shareOptions');
  if (shareOptions) {
      shareOptions.classList.remove('active');
  }
}

// When the DOM is loaded, initialize the sharing functionality
document.addEventListener('DOMContentLoaded', initSharing);