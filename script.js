document.addEventListener('DOMContentLoaded', () => {
  // Handle the back-to-top button visibility
  const backToTopBtn = document.getElementById('backToTopBtn');
  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          backToTopBtn.classList.add('show');
      } else {
          backToTopBtn.classList.remove('show');
      }
  };

  // Smooth scroll to top when the button is clicked
  backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  // Highlight the active navigation link
  const currentPage = window.location.pathname.split('/').pop();
  const navigationLinks = document.querySelectorAll('.navigation-links a, .right-side-element a');

  navigationLinks.forEach(link => {
      const href = link.getAttribute('href').split('/').pop();
      if (href === currentPage) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });
});
