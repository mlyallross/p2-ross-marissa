/* hamburger menu */
var menu = document.querySelector('.menu');
var menuToggle = document.querySelector('.menuToggle');

menuToggle.addEventListener('click', (e) => {
    e.preventDefault();

    if (window.getComputedStyle(menu).display === 'block') {
      menu.style.display = 'none';
    } else  {
      menu.style.display = 'block';
    }
  });

/* sticky header */
document.querySelector('.sticky_header').style.display = "none";

addEventListener("scroll",
  function() {
    document.querySelector('.header').style.display="none";
    document.querySelector('.sticky_header').style.display="block";
  }
);