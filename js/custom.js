$(function () {
    const MMS = new Swiper('.main_reco_slide', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 16,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        speed: 5000,
    });


    $('#header .gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $('#header .gnb>ul>li .sub').hide();
        $(this).next().show();
    })
});

$(function () {
    AOS.init();
});