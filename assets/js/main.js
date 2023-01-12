$(document).ready(function() {
    // Init WOW.js and get instance

    var wow = new WOW();
    wow.init();

    $('.btn-fixed-menu').click(function() {
        $('.menubox.fixed').toggleClass('d-block');
    });

    $(window).scroll(function() {
        var wintop = $(this).scrollTop();
        if ($(window).scrollTop() > 500) {
            $('.menubox').addClass('fixed');
            $('.btn-fixed-menu').addClass('display');

        } else if (window.matchMedia('(min-width: 768px)').matches) {
            $('.menubox').removeClass('fixed');
            $('.btn-fixed-menu').removeClass('display');
            $('.menubox').removeClass('d-block');
        }
    });
});