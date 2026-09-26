$(function(){
// ----ここからjQueryの記述----
$('.gnav__link').on('click', function(){

    const target = $(this).attr('href');

    const targetPos = $(target).offset().top;

    $('html, body').animate({scrollTop: targetPos}, 500);
})



 return false;
// ----ここまで----------
});