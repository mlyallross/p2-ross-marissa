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

addEventListener('scroll',
  function() {
    document.querySelector('.header').style.display="none";
    document.querySelector('.sticky_header').style.display="block";
  }
);

/* Expand | Collapse */

  /* About Expand*/
  document.querySelector('.about_read_more').style.display = "none";
  var expandAbout = document.querySelector('#about_btn');

  expandAbout.addEventListener('click', 
    function() {
      document.querySelector('.about_read_more').style.display = "block";
    }
  );

  /* About Collapse */
  var collapseAbout = document.querySelector('#about_close_btn');

  collapseAbout.addEventListener('click',
    function() {
      document.querySelector('.about_read_more').style.display = "none";
    }
  );
  
  /* Yoga Expand */
  document.querySelector('.yoga_read_more').style.display = "none";
  var expandYoga = document.querySelector('#yoga_btn');

  expandYoga.addEventListener('click', 
    function() {
      document.querySelector('.yoga_read_more').style.display = "block";
    }
  );

  /* Yoga Collapse */
  var collapseYoga = document.querySelector('#yoga_close_btn');

  collapseYoga.addEventListener('click',
    function() {
      document.querySelector('.yoga_read_more').style.display = "none";
    }
  );

/* API */
