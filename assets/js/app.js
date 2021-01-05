$(function() {
    //seeletor, tipo, função
    $('.js_open_menu').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.main_header_menu').fadeIn(100, function() {
                $(this).animate({ 'left': '0' });
            });

        } else {
            $('.main_header_menu').animate({ 'left': '-100%' }, function() {
                $(this).fadeOut();
            });
        }


    });
});