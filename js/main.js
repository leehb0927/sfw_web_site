$(document).ready(function(){
    $('.main_visual_imgs').slick({
        autoplay:true,
        autoplaySpeed:2000,
        speed:1000,
        arrows:false,
        dots:true,
    });

    
    $('.social_slider').slick({
    });

    $('.scheduleSlider').slick();
});


$(function(){
    $('.btn1').click(function(){
        $('html').animate({"scrollTop":"700"},1000)
    })
    $('.btn2').click(function(){
        $('html').animate({"scrollTop":"1450"},1000);
    })
    $('.btn3').click(function(){
        $('html').animate({"scrollTop":"2180"},1000)
    })
    $('.btn4').click(function(){
        $('html').animate({"scrollTop":"3000"},1000)
    })
    $(window).scroll(function(){
        var ypos = $(window).scrollTop();

        if(ypos < 700){
            $('nav li').removeClass('active');
            $('nav li').eq(0)
        }
    })
})