$(document).ready(function () {
    $(".burger").click(function (e) { 
        e.preventDefault();
        $(".burger").toggleClass("active");
        $(".nav").toggleClass("active");
        $("body").toggleClass("hide");
    });

    $(".menu .link").click(function(){
        $(".menu .link").removeClass("active")
        $(this).addClass("active")
    })

    // btn up

    $(".btn-up").click(function(){
        $("body, html").animate({
            scrollTop:0
        }, 50)
    })

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".btn-up").fadeIn()
        }
        else{
            $(".btn-up").fadeOut()
        }
    })
});