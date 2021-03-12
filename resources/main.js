'use strict'
$(function() {
    const menuItems = $('main').find('.menu-item');
    const pageContent= $('.content-wrappers').find('.content');
    const logoContent= $('aside').find('.inner-page-logo');

    menuItems.click(function(e) {
        if(!$(this).data('content')) {
            e.preventDefault();
        }
        
        menuItems.removeClass('selected');
        $(this).addClass('selected');

        pageContent.addClass('hidden');
        $("#" + $(this).data('content')).removeClass('hidden');

        logoContent.addClass('hidden');
        $(`.${$(this).data('content')}`).removeClass('hidden');
    }); 


    const locationsWrapper= $('.content-wrappers').find('.locations-wrapper');
    const loaderOverlay = $('main').find('#loaderOverlay');
    const modalOverlay =  $('main').find('#modalOverlay');

    $('#load-button').click(function(e){
        e.preventDefault();
        loaderOverlay.removeClass('hidden');
    
        setTimeout(function() {
            loaderOverlay.addClass('hidden');
            modalOverlay.removeClass('hidden');

            setTimeout(function() {
                modalOverlay.addClass('hidden');
            }, 2000);
        }, 2000);

        $.ajax({
            type:'GET',
            url: "https://api.meetup.com/2/cities",
            
            success:function(data) {
                locationsWrapper.html('');
                for(let i = 0; i < 20; i++) {
                    let result = data.results[i];
                    console.log('result: ', result);
                    let location= `<div class="city-store-location">${result.city} Store in 
                                        <span class="country-store-location">${result.localized_country_name}</span>
                                    </div>`;
                    locationsWrapper.append(location);
                }
            },

            error:function(){
            locationsWrapper.text('There was an error in reading the locations. Please come back later.');
            },
            dataType: 'jsonp'
        });
    });
});