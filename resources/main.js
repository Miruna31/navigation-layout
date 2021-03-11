'use strict'
// document.addEventListener("DOMContentLoaded", function(event){
//     const menuItems= document.getElementsByClassName('menu-item');

//     for(let i=0; i<menuItems.length; i++){
//         const menuItem= menuItems[i];
    
//         menuItem.addEventListener('click' , function(){
//             for(let j=0; j<menuItems.length;j++){
//                 if(menuItems[j].classList.contains('selected')){
//                     menuItems[j].classList.remove('selected');
//                 }else{
//                     continue;
//                 }
//             }
//             menuItem.classList.add('selected');
//             console.log('clicked');

//         const dataContent= menuItem.dataset.content;
//         const contentElements= document.getElementsByClassName('content');
//         for(let k=0; k<contentElements.length;k++){
//             if(contentElements[k].classList.contains('hidden')) {
//                 continue;
//             } else {
//                 contentElements[k].classList.add('hidden');
//             }
//         }
//         document.getElementById(dataContent).classList.remove("hidden");
//         console.log('page changed');


//         const logoElements= document.getElementsByClassName('inner-page-logo');
//         for(let l=0;l<logoElements.length;l++){
//             if(logoElements[l].classList.contains('hidden')){
//                 continue;
//             }else{
//                 logoElements[l].classList.add('hidden');
//             }
//         }
//         document.getElementsByClassName(dataContent)[0].classList.remove("hidden");
//         console.log('logo changed');

//         });
//     }
// });

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