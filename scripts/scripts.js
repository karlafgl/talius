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

sr.reveal('.choppy', {
    easing: 'steps(5)',
    duration: 3000,
});

sr.reveal('.scaleUp', {
    scale: .85,
    duration: 3000,
});


//navbar
$(document).ready(function() {

    $('.first-button').on('click', function() {

        $('.animated-icon1').toggleClass('open');
    });

});

//Slider
$('.carousel').carousel({
    interval: 2000
})