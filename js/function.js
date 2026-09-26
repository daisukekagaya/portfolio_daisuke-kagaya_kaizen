
    const windowHeigth = window.innerHeight;
    const ST = window.scrollY;
    const fadeIn = document.querySelectorAll('.fadeIn');
    const bgBtn = document.getElementById('header__bgbtn');
    const slideMenu = document.getElementById('slidemenu');
    const slideGnavlink = document.querySelectorAll('.slidegnav__link');
    const btnTxt = document.getElementById('header__btntxt');


    // バーガーボタンをクリックしたらスライドメニューが現れる
    bgBtn.addEventListener('click', function () {
        slideMenu.classList.toggle('translatemenu');

    });
    // スライドメニュー内のリンクをクリックしたらスライドメニューが格納される
    slideGnavlink.forEach(function (link) {
        link.addEventListener('click', function () {
            slideMenu.classList.remove('translatemenu');
        });
    });

    // バーガーボタンをクリックしたらMENU→CLOSEに切り替わる
    bgBtn.addEventListener('click', function () {
        if (btnTxt.textContent === 'MENU') {
            btnTxt.textContent = 'CLOSE'
        } else
            btnTxt.textContent = 'MENU';
    });

    //スライドメニュー内のリンクをクリックしたらMENU→CLOSEに切り替わる
    slideGnavlink.forEach(function (link) {
        link.addEventListener('click', function () {
            btnTxt.textContent = 'MENU';
        });
    });

    // フェードイン
    window.addEventListener('scroll', function () {
        fadeIn.forEach(function (link) {
            const targetY = link.getBoundingClientRect().top - 160;
            if (ST > targetY - windowHeigth / 2) {
                link.classList.add('showElement');
            } else { }
        });
    });

    slideGnavlink.forEach(function (sgnavlink) {

        sgnavlink.addEventListener('click', function (event) {
            event.preventDefault();
            const targetLink = this.getAttribute('href');
            const target = document.querySelector(targetLink);
            const targetPos = target.offsetTop;

            window.scrollTo({
                top: targetPos,
                behavior: 'smooth'
            })
        });
    });















