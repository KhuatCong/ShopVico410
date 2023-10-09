$(function () {
    $('.user').click(function () {
        $('.action').toggle();
    })

    $('.list-category-home').slick({
        slidesToShow: 7,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
        ]
    });

    $('.tintuc-slide-home').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScrol: 1,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScrol: 1,
                }
            }
        ]
    });

    $('.list-sell-product').slick({
        slidesToShow: 6,
        slidesToScrol: 1,
        speed: 800,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScrol: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScrol: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScrol: 1,
                }
            },
        ]
    })

    $('.product-img-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.product-img-nav',
        arrows: false,
    });
    $('.product-img-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product-img-list',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });


    $('.list-too-product').slick({
        slidesToShow:6,
        slidesToScrol:1,
        dots:false,
        arrows:false,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:4,
                    slidesToScrol:1,
                    dots:false
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:3,
                    slidesToScrol:1,
                    dots:false
                }
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:2,
                    slidesToScrol:1,
                    dots:false
                }
            },
        ]

    })

})
if ($('#back-to-top').length) {
    var scrollTrigger = 100, //khoảng cách đến khi bắt đầu hiện nút (px)
        backToTop = function () {
            var scrollTop = $(window).scrollTop(); //lấy khoảng cách scroll hiện tại tính lên Top
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop(); //gọi function 'backToTop()' mỗi khi người dùng cuộn trang
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 400); //thời gian kéo lên top tính bằng mili giây 
    });

}

function openMenu() {
    document.getElementById("menu-mobile").style.width = "100%";
    document.getElementById("menu-mobile").style.padding = "30px";
}

function closeMenu() {
    document.getElementById("menu-mobile").style.width = "0%";
    document.getElementById("menu-mobile").style.padding = "0px";
}