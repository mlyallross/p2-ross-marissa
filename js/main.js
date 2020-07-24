
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
var scrollPosition = window.scrollY;
var stickyHeader = document.querySelector('#header');
var header_height = header.offsetHeight;

var add_class_on_scroll = () => header.classList.add("sticky")
var remove_class_on_scroll = () => header.classList.remove("sticky")

window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

});


  

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
