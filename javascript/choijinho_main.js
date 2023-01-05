$(function(){
    if($.cookie('popup') == 'none'){
        $("#notice_wrap").hide();
    }
    var $expiresChk = $("#expiresChk");
    $(".closeBtn").on("click", closePop);
    function closePop(){
        if($expiresChk.is(":checked")){
            $.cookie("popup", "none", {expires:3, path: "/"});
        }
        $("#notice_wrap").fadeOut("fast");
    }
});