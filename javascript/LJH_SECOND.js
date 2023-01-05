
jQuery(document).ready(function(){
            $('.navbar-nav > li').mouseover(function(){
                    $(this).find('.submenu').stop().slideDown(500);  
                }).mouseout(function(){
                        $(this).find('.submenu').stop().slideUp(500);
                    });
                });
            
            
            
// var resize = window.innerWidth
// var c = document.getElementsByClassName("submenu");
// resize.
// window.onresize = function(event){
//     resize >= 1200 ? c.control : c.control2;
// }



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














