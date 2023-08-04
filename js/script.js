// 메뉴ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
$(document).ready(function(){

    $("li.menu").mouseover(function(){
        $(".submenu").stop().fadeIn();   
        // 마우스를 여러번 움직일때, 이전 애니메이션이 멈추기 전까지 
        // 애니메이션이 동작하지 않는 현상이 바로 애니메이션 큐로 인해 발생하는 문제이다.
        // 이를 방지하기 위해 .stop()을 사용한다
        })
    
    $("li.menu").mouseout(function(){
        $(".submenu").stop().fadeOut();
    });

});
