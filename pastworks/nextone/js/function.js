$(function () {
    // ここにjQueryを記述

//フェードイン
const windowHeight = $(window).height();

$(window).on('scroll', function(){

    const ST = $(window).scrollTop();

    $('.fadeIn').each(function(){
        const target = $(this).offset().top;

        if (ST > target - windowHeight / 2)  {
            $(this).addClass('showElement');
        }else{

        }
    }); 
})


// スライドメニュー

    // document.getElementsByClassName('gnav__link').addEventListener('click', function () {

    //     const target = document.getElementsByClassName(this).setAttribute('href');
    //     const targetPos = document.querySelector(targetPos).getBoundingClientRect().top;

    //     document.querySelector('html, body');

    // })

    $('.gnav__link').on('click', function () {

        const target = $(this).attr('href');       
        const targetPos = $(target).offset().top ;
        $('html, body').animate({scrollTop:targetPos}, 500);

        return false
    });

    // ここまで
});