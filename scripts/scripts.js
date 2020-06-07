console.log('funciona!')

jQuery(document).ready(function($) {
    // Scroll to the desired section on click
    // Make sure to add the `data-scroll` attribute to your `<a>` tag.
    // Example: 
    // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top
        }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection);
}(jQuery));


// Dynamically add copyright year using new Date
document.getElementById('copyright-year').innerHTML = new Date().getFullYear();

//Navbar
$(function() {
    $(document).scroll(function() {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

//Reveal Effect
window.sr = ScrollReveal();

sr.reveal('.about-content-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});

sr.reveal('.about-content-bottom', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px'
});

sr.reveal('.about-content-bottom2', {
    duration: 3000,
    origin: 'bottom',
    distance: '300px'
});

sr.reveal('.about-content-bottom3', {
    duration: 4000,
    origin: 'bottom',
    distance: '300px'
});

sr.reveal('.about-content-bottom4', {
    duration: 5000,
    origin: 'bottom',
    distance: '300px'
});

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

//navbar
$(document).ready(function() {

    $('.first-button').on('click', function() {

        $('.animated-icon1').toggleClass('open');
    });

});