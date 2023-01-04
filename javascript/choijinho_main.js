$(function(){
    // 쿠키("popup")의 값이 'none'이면 id값이 'notice_wrap'인 요소를 숨깁니다.
    if($.cookie('popup') == 'none'){
        $("#notice_wrap").hide();
    }
    // class 값이 'closeBtn'인 요소를 클릭하면 체크박스의 체크 유무에 따라 쿠키를 생성하여 3일간 저장합니다.
    var $expiresChk = $("#expiresChk");
    $(".closeBtn").on("click", closePop);
    function closePop(){
        if($expiresChk.is(":checked")){
            $.cookie("popup", "none", {expires:3, path: "/"});
        }
        $("#notice_wrap").fadeOut("fast");
    }
});