$(function () {

    $(".toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });



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


// chọn tỉnh, thành phố
if (address_2 = localStorage.getItem('address_2_saved')) {
  $('select[name="calc_shipping_district"] option').each(function() {
    if ($(this).text() == address_2) {
      $(this).attr('selected', '')
    }
  })
  $('input.billing_address_2').attr('value', address_2)
}
if (district = localStorage.getItem('district')) {
  $('select[name="calc_shipping_district"]').html(district)
  $('select[name="calc_shipping_district"]').on('change', function() {
    var target = $(this).children('option:selected')
    target.attr('selected', '')
    $('select[name="calc_shipping_district"] option').not(target).removeAttr('selected')
    address_2 = target.text()
    $('input.billing_address_2').attr('value', address_2)
    district = $('select[name="calc_shipping_district"]').html()
    localStorage.setItem('district', district)
    localStorage.setItem('address_2_saved', address_2)
  })
}
$('select[name="calc_shipping_provinces"]').each(function() {
  var $this = $(this),
    stc = ''
  c.forEach(function(i, e) {
    e += +1
    stc += '<option value=' + e + '>' + i + '</option>'
    $this.html('<option value="">Tỉnh / Thành phố</option>' + stc)
    if (address_1 = localStorage.getItem('address_1_saved')) {
      $('select[name="calc_shipping_provinces"] option').each(function() {
        if ($(this).text() == address_1) {
          $(this).attr('selected', '')
        }
      })
      $('input.billing_address_1').attr('value', address_1)
    }
    $this.on('change', function(i) {
      i = $this.children('option:selected').index() - 1
      var str = '',
        r = $this.val()
      if (r != '') {
        arr[i].forEach(function(el) {
          str += '<option value="' + el + '">' + el + '</option>'
          $('select[name="calc_shipping_district"]').html('<option value="">Quận / Huyện</option>' + str)
        })
        var address_1 = $this.children('option:selected').text()
        var district = $('select[name="calc_shipping_district"]').html()
        localStorage.setItem('address_1_saved', address_1)
        localStorage.setItem('district', district)
        $('select[name="calc_shipping_district"]').on('change', function() {
          var target = $(this).children('option:selected')
          target.attr('selected', '')
          $('select[name="calc_shipping_district"] option').not(target).removeAttr('selected')
          var address_2 = target.text()
          $('input.billing_address_2').attr('value', address_2)
          district = $('select[name="calc_shipping_district"]').html()
          localStorage.setItem('district', district)
          localStorage.setItem('address_2_saved', address_2)
        })
      } else {
        $('select[name="calc_shipping_district"]').html('<option value="">Quận / Huyện</option>')
        district = $('select[name="calc_shipping_district"]').html()
        localStorage.setItem('district', district)
        localStorage.removeItem('address_1_saved', address_1)
      }
    })
  })
})
