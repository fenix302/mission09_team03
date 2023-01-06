
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

$(function(){
    $('.bxslider').bxSlider({
        slideWidth: 1920,
        // 이미지 위에 텍스트 올리기
        captions: true,
        // 슬라이드 전환 지속 시간(다음 슬라이드로 전환되는 과정에서의 사이 시간)
        speed: 1000,
        // 다음 전환까지 멈춰있는 시간(다음 슬라이드로 전환되기 전에 잠깐 멈춤 시간)
        pause: 3000,
        // 자동 실행
        auto: true,
        // 컨트롤 버튼(재생/정지) 표시
        autoControls:false,
        // 클릭해서 자동 실행 멈출 수 있도록 지정
        stopAutoOnclick:false,
    });
});












