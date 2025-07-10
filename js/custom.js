$(function () {
    $('.mbtn').on('click', function () {
        $('.hd_wrap').toggleClass('on')
        $('.hd_gnb').toggleClass('on')
        $('.hd_icon').toggleClass('on')

    });


});


$(function () {
    const main_eh_slide = new Swiper('.main_eh_slide', {
        slidesPerView: "1.9",
        centeredSlides: true,

        loop: true,


        spaceBetween: 0,

        breakpoints: {
            768: {
                spaceBetween: 0
            }
        }
    });
});



$(function () {

    $('.main_collection_slide').slick({
        arrows: false,
        // autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
        speed: 1000,
    });



    $('.main_collection .tab_menu li button').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).parent().index();
        let $itm = $(this).closest('.itm');

        $itm.find('.tab_menu li button').removeClass('on');
        $(this).addClass('on');

        $itm.find('.tab_content figure')
            .removeClass('on')
            .eq(idx).addClass('on');
    });





    $('.main_collection .arrows .prev').on('click', function () {
        $('.main_collection_slide').slick('slickPrev');
    });

    $('.main_collection .arrows .next').on('click', function () {
        $('.main_collection_slide').slick('slickNext');
    });

});







$(function () {
    $('.main_notice .tab_menu li button').on('click', function () {
        let idx = $(this).parent().index();
        console.log(idx);

        $('.main_notice .tab_menu li button').removeClass('on');
        $(this).addClass('on');

        $('.main_notice .tab_content .itm').removeClass('on')
        $('.main_notice .tab_content .itm').eq(idx).addClass('on')
    });
});