const ham = document.getElementById('ham');
const menu_wrapper = document.getElementById('menu_wrapper');
ham.addEventListener('click', function () {
    ham.classList.toggle('clicked');
    menu_wrapper.classList.toggle('clicked');
});

$(function () {
    setTimeout(function () {
        $('.start p').fadeIn(1600);
    }, 500);
    setTimeout(function () {
        $('.start').fadeOut(500);
    }, 2500);
});

$(window).on('scroll', function () {

    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 2; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

    if (bgPosition) {
        $('.firstview').css('background-position', 'center top -' + bgPosition + 'px');
    }
});

$('.slider').slick({
    autoplay: true, // 自動再生を設定
    autoplaySpeed: 5000, // スライド切り替えの時間を設定
    dots: true, // インジケーターを表示
    arrows: false
});
$(function () {
    $(window).scroll(function () {
        $('.effect-fade').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
                $(this).addClass('effect-scroll');
            }
        });
    });
});
