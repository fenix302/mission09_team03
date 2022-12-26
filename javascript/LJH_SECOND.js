

jQuery(document).ready(function(){
    $('.navbar-nav > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);  
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });
});

var re1 = document.getElementsByClassName("submenu");
console.log(re1);

window.onresize = function(){
    var width = window.innerWidth;
    var height = window.innerHeight;

    if(width <= "1200"){
        resize.mouseover.stop();
    }

}







