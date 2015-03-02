// =============================================================================

    // NAV JS
    // Property of joshdrink
    // Authored by Josh Beveridge

// =============================================================================

// Navigation ==================================================================

    // Menu Open
    $('.navigation-button').click(function() {

        if($('.wrapper-navigation').hasClass('active')) {
            return false;
        }
        else {
            $('.navigation-button').css('display', 'none');
            $('.label-navigation').removeClass('active');
            $('.wrapper-navigation').addClass('active');
            $('.navigation-list-item').addClass('active');
            $('.navigation-close').addClass('active');
            $('.navigation-overlay').addClass('active');
            $('.navigation-close-exterior').css('display', 'block');
        }

    });

    // Menu Clase
    $('.navigation-close').click(function() {

        if($('.wrapper-navigation').hasClass('active')) {
            $('.navigation-button').css('display', 'block');
            $('.navigation-close').removeClass('active');
            $('.navigation-overlay').removeClass('active');
            $('.navigation-close-exterior').css('display', 'none');
            $('.wrapper-navigation').removeClass('active');
            $('.navigation-list-item').removeClass('active');
            $('.label-navigation').addClass('active');
        }
        else {
            return false;
        }

    });
