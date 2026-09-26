$(function () {
    // ----ここからjQueryの記述----
    const mvHeight = $('#mv').height();
    const windowHeight = $(window).height();

    // ヘッダーの設定
    $(window).on('scroll', function () {

        const ST = $(window).scrollTop();

        if (ST >= mvHeight) {
            $('#header__container').addClass('opacitycontainer');

        } else {
            $('#header__container').removeClass('opacitycontainer');

        }

    });
    //スライドメニューがMVの範囲内でも消せるようにするコード
    // 画面をスクロールしたら
    $(window).on('scroll', function () {
        // スクロール量を図ってSTと名付ける
        const ST = $(window).scrollTop();
        // id名slidemenuにtranslateMenuが追加されるか調べて、menuOpenと名前を付ける
        const menuOpen = $('#slidemenu').hasClass('translateMenu');
        // スライドメニューがMV内でも消せるように、バーガーアイコンが出たままにする。
        if (menuOpen) {
            return;
        }
        // スクロール量がMVの高さを超えたら
        if (ST >= mvHeight) {
            // id名btnにopacitybtnを追加
            $('#btn').addClass('opacitybtn');
        } else {
            // 超えなかったらid名btnからopacitybtnを削除
            $('#btn').removeClass('opacitybtn');
        }


    });



    //フェードイン
    $(window).on('scroll', function () {

        const ST = $(window).scrollTop();

        $('.fadeIn').each(function () {

            const target = $(this).offset().top;

            if (ST >= target - windowHeight / 2) {

                $(this).addClass('showElement');
            } else { }

        });
    })

    //バーガーボタン
    $('#btn').on('click', function () {

        $('#btn__top').toggleClass('rotateTop');
        $('#btn__middle').toggleClass('hideMiddle');
        $('#btn__bottom').toggleClass('rotateBottom');

        $('#slidemenu').toggleClass('translateMenu');

    });
    //スライドメニューのリンクをクリックしたら、バーガーボタンが戻る。
    $('.slidegnav__link').on('click', function () {

        $('#btn__top').removeClass('rotateTop');
        $('#btn__middle').removeClass('hideMiddle');
        $('#btn__bottom').removeClass('rotateBottom');
    });



    // スムーススクロール
    $('.gnav__link').on('click', function () {

        const target = $(this).attr('href');

        const targetPos = $(target).offset().top;

        $('html, body').animate({ scrollTop: targetPos }, 400);


    })
    // スムーススクロール スライドメニュー
    $('.slidegnav__link').on('click', function () {

        const target = $(this).attr('href');

        const targetPos = $(target).offset().top;

        $('html, body').animate({ scrollTop: targetPos }, 400);

        $('#slidemenu').removeClass('translateMenu');

        return false;
    })


    // ----ここまで----------
});