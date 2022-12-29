// vegas 적용
$(document).ready(function() {
  // 문서 전체(body 태그)에 플러그인 적용함
  $('.mainvideo').vegas({
slides: [
      // 초반 이미지 나타나게함 주석처리하면 안나타남
           { src: '',
          // video{안에 배경 동영상과 옶션값 지정함}
  video: {
      // src 속성을 사용해 동영상 지정해 줌
      src: [
          '../resources/dohyun/video/ldh.mp4',],
          // loop 속성을 사용해 동영상 반복 여부 지정함
      loop: true,
      // 동영상을 무음상태(음소거 상태)로 만들어줌
      mute: true
   }
  }
]
});
});

// carousel 적용
$(function(){
  var owl = $('.business');
  owl.owlCarousel({
      // 화면에 표시할 항목 개수 지정 : 여기서는 6개 이미지 중에서 3개 항목을 보여줌
      items:3,
      loop:true, // 무한 반복 적용 여부
      nav:true, // nav 활성화
      navText:['이전', '다음'],
      margin:10, // 항목(item)과 항목(item) 사이의 간격(margin 적용)
      autoplay:true, // 자동 스크롤 실행
      autoplayTimeout:1000, // 자동 스크롤 시간 간격, 밀리초 단위 : 1000ms = 1s = 1초
      autoplayHoverPause:true // 내용 위로 마우스 포인터를 올리면 자동 스크롤 일시 멈춤
  });
});