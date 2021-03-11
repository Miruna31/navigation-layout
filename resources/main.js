'use strict'
$(function() {
    const menuItems = $('main').find('.menu-item');
    const pageContent= $('.content-wrappers').find('.content');
    const logoContent= $('aside').find('.inner-page-logo');

    menuItems.click(function(e) {
        
        menuItems.removeClass('selected');
        $(this).addClass('selected');

        pageContent.addClass('hidden');
        $("#" + $(this).data('content')).removeClass('hidden');

        logoContent.addClass('hidden');
        $("." + $(this).data('content')).removeClass('hidden');
    }); 
   
});