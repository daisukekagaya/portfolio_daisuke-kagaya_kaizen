$(function () {
    // ----ここからjQueryの記述----

    // リサイズヘッダー
    const mvHeight = $('#mv').height();

    $(window).on('scroll', function () {

        const ST = $(window).scrollTop();

        if (ST >= mvHeight) {
            $('#header').addClass('resizeHeader');
            $('#header__ttl').addClass('resizeTtl');
            $('#gnav').addClass('resizeGnav');
            

        } else {
            $('#header').removeClass('resizeHeader');
            $('#header__ttl').removeClass('resizeTtl');
            $('#gnav').removeClass('resizeGnav');
            
        }

    });

    //バーガーボタン,スライドメニュー

    $('#btn').on('click', function () {

        $('#btn__top').toggleClass('rotateTop');
        $('#btn__middle').toggleClass('hideMiddle');
        $('#btn__bottom').toggleClass('rotateBottom');

        $('#slidemenu').toggleClass('translatemenu');

    });

    //ナブのリンクをクリックしたらスライドメニューが隠れる。しかしバーガーボタンの形が戻らない・・・。
    $('.gnavsl__link').on('click', function () {
        $('#slidemenu').removeClass('translatemenu');
        

    });

    // ナブのリンクをクリックしたら、スライドメニューが隠れ、さらにバーガーボタンが元に戻る。
    $('.gnavsl__link').on('click', function(){

        $('#btn__top').removeClass('rotateTop');
        $('#btn__middle').removeClass('hideMiddle');
        $('#btn__bottom').removeClass('rotateBottom');

    });

   


    // モーダルウィンドウ
    $('.store__pic').on('click', function () {

        const modal = $(this).attr('date-modal');

        $(modal).fadeIn(function () {
            $(this).on('click', function () {
                $(this).fadeOut();
            });
        })
    });



    // スムーススクロール
    $('.gnav__link').on('click', function () {

        const target = $(this).attr('href');

        const targetPos = $(target).offset().top - 100;

        $('html, body').animate({ scrollTop: targetPos }, 300);

        return false;
    });

    $('.gnavsl__link').on('click', function () {

        const target = $(this).attr('href');

        const targetPos = $(target).offset().top - 100;

        $('html, body').animate({ scrollTop: targetPos }, 300);

        return false;
    });


    // ----ここまで----------
});