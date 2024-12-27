const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
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
  };
  
  navSlide();
  
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  const targetElement = e.target;
  
  // Vérifie si l'élément survolé est une image
  if (targetElement.tagName.toLowerCase() === 'img') {
    cursor.style.display = 'block'; // Affiche le curseur personnalisé
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  } else {
    cursor.style.display = 'none'; // Cache le curseur personnalisé
  }
});

