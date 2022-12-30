var resize = window.innerWidth
jQuery(document).ready(function(){
    if(resize >= '1200'){
        $('.navbar-nav > li').mouseover(function(){
            $(this).find('.submenu').stop().slideDown(500);  
        }).mouseout(function(){
            $(this).find('.submenu').stop().slideUp(500);
        });
    } else if(resize < '1200'){
        $(this).toggleClass('submenu');
    }
});


$(function(){
    $('.height-20em').vegas({
        delay: 3000,
        slides: [
            { src: '../resources/jaeheon/images/game1.jpg' },
            { src: '../resources/jaeheon/images/game2.jpg' },
            { src: '../resources/jaeheon/images/game3.jpg' },
        ]
    });
});












