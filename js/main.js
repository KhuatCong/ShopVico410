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
        slidesToScrol:1,
    })
})