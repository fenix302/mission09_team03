// vegas 적용
$(document).ready(function() {
  // mainvideo 클래스에 적용
  $('.mainvideo').vegas({
slides: [
      // 초반 이미지 나타나게함 주석처리하면 안나타남
           { src: '',
          // video{안에 배경 동영상과 옶션값 지정함}
  video: {
      // src 속성을 사용해 동영상 지정해 줌
      src: [
          '../resources/dohyun/video/ldh.mp4',],
          // loop 속성을 사용해서 무한 반복 처리
      loop: true,
      // 동영상을 음소거 처리
      mute: true
   }
  }
]
});
});

$(document).ready(function(){
$('.business').bxSlider({
  captions:true,
  //슬라이드 전환 지속 시간(다음 슬라이드로 전환되는 과정에서의 사이 시간)
  speed: 1000,
  //다음 전환까지 멈춰있는 시간(다음 슬라이드로 전환되기 전에 잠깐 멈춤 시간
  pause: 3000,
  auto: true,
  //컨트롤 버튼(재생/정지) 표시
  centeredSlides: true, // 활성 슬라이드 항상 가운데 배치
  stopAutoOnclick: true,

});
});
