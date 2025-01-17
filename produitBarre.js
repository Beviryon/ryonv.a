document.addEventListener('DOMContentLoaded', () => {
    const navSlide = () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.nav-links');
      const navLinks = document.querySelectorAll('.nav-links li');
  
      if (burger && nav && navLinks) {
        burger.addEventListener('click', () => {
          nav.classList.toggle('nav-active');
          burger.classList.toggle('toggle');
        });
  
        navLinks.forEach((link) => {
          link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
          });
        });
      }
    };
  
    navSlide();
  });
  