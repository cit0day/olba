// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};



// Scroll Reveal
ScrollReveal({
  reset: false,
  distance: '200px',
  duration: 2000,
  delay: 100
});

ScrollReveal().reveal('.hero', { origin: 'top', distance: "200px", delay: 0, duration: 2000, });
ScrollReveal().reveal('.features', { origin: 'top', distance: "0px", delay: 200, duration: 2000, });
ScrollReveal().reveal('.about-content', { origin: 'top', distance: "0px", delay: 200, duration: 2000, });
ScrollReveal().reveal('.products-title', { origin: 'top', distance: "200px", delay: 0, duration: 2000, });
ScrollReveal().reveal('.search-filter', { origin: 'top', distance: "0px", delay: 200, duration: 2000, });
ScrollReveal().reveal('.faq-title', { origin: 'top', distance: "200px", delay: 0, duration: 2000, });
ScrollReveal().reveal('.question, .answer', { origin: 'top', distance: "0px", delay: 200, duration: 2000, });
ScrollReveal().reveal('.gallery-title', { origin: 'top', distance: "200px", delay: 0, duration: 2000, });
ScrollReveal().reveal('.gallery-container', { origin: 'top', distance: "0px", delay: 200, duration: 2000, });



// Navbar anchor + hiding # in URL
$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 300);
  }
});



// Black Bar toggle
$(document).ready(function () {
  var menuOpen = false;

  $("#btn-blackbar, .nav-blackbar-item").click(function () {
    if (!menuOpen) {
      $("body").css("overflow", "hidden");
      $("#black-bar").slideDown();
      $("#btn-blackbar").addClass("active");
      $("#blackbarbutton-icon").removeClass("fa-bars").addClass("fa-xmark");
      menuOpen = true;
    } else {
      $("body").css("overflow", "auto");
      $("#black-bar").slideUp();
      $("#btn-blackbar").removeClass("active");
      $("#blackbarbutton-icon").removeClass("fa-xmark").addClass("fa-bars");
      menuOpen = false;
    }
  });
});