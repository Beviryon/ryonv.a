/**
 * Fix phone numbers by removing duplicated country code prefixes
 * This script fixes WhatsApp links by removing '+221' from phone numbers
 * to prevent duplicate country codes
 */

document.addEventListener('DOMContentLoaded', function() {
  // Function to fix phone number by removing duplicate '+221' prefix
  function fixPhoneNumber(phoneNumber) {
    if (!phoneNumber) return phoneNumber;
    
    // If the number starts with +221, remove the 221 part
    if (phoneNumber.startsWith('+221')) {
      return '+' + phoneNumber.substring(4); // Keep the + but remove 221
    }
    
    return phoneNumber;
  }
  
  // Fix phone numbers in WhatsApp links
  function fixWhatsAppLinks() {
    // Find all WhatsApp links on the page
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
    
    whatsappLinks.forEach(link => {
      const hrefParts = link.href.split('?');
      const baseUrl = hrefParts[0];
      const query = hrefParts.length > 1 ? '?' + hrefParts[1] : '';
      
      // Extract phone number from the URL
      const phoneNumber = baseUrl.replace('https://wa.me/', '');
      
      // Fix the phone number
      const fixedPhoneNumber = fixPhoneNumber(phoneNumber);
      
      // Update the link if the phone number was changed
      if (phoneNumber !== fixedPhoneNumber) {
        link.href = `https://wa.me/${fixedPhoneNumber}${query}`;
      }
    });
  }
  
  // Fix phone numbers in JavaScript variables before they're used
  if (typeof products !== 'undefined') {
    products.forEach(product => {
      if (product.vendorPhone) {
        product.vendorPhone = fixPhoneNumber(product.vendorPhone);
      }
      
      if (product.seller && product.seller.phone) {
        product.seller.phone = fixPhoneNumber(product.seller.phone);
      }
    });
  }
  
  // Initial fix when the page loads
  fixWhatsAppLinks();
  
  // Also fix links when they're added dynamically (using MutationObserver)
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        fixWhatsAppLinks();
      }
    });
  });
  
  // Start observing changes to the DOM
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}); 