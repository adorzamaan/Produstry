$(function ($) {
    var MainNav = $('.customNav'),
        wIn = $(window);

    var menuOfset = MainNav.offset().top;
    wIn.on('scroll', function () {
        var scrol = wIn.scrollTop();
        if (scrol > menuOfset) {
            MainNav.addClass('menufix');
        } else {
            MainNav.removeClass('menufix');
        }
        /* bakctop */
        if (scrol > 500) {
            $('.backTop').addClass('backTopBottom');
            $('.backTop').fadeIn(1000);
        } else {
            $('.backTop').removeClass('backTopBottom');
            $('.backTop').fadeOut(1000);
        }
    });

    $('.backTop').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })

    $('.menu_icon').on('click', function () {
        $('#produstry_nav ul').stop().fadeToggle(500);
    });

    $('.menu_icon').on('click', function () {
        $('.logo').stop().toggleClass('logo_ext');
    });

    var mySlider = $('.pogoSlider').pogoSlider({
        pauseOnHover: false,
        generateButtons: false,
        generateNav: false
    }).data('plugin_pogoSlider');
    $('.arrow_left').on('click', function () {
        mySlider.prevSlide();
    });
    $('.arrow_right').on('click', function () {
        mySlider.nextSlide();
    });

    $('.service-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots',

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
          },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
          ]
    });
    $('.portfolio_slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
          },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
          },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
          }
        ]
    });

    /* blog slider part start here */
    $('.blog_slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fas fa-angle-left ar_left"></i>',
        nextArrow: '<i class="fas fa-angle-right ar_right"></i>',
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
        }
      ]
    });

    $('.testimonial_slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.testimonial_client',
    });
    $('.testimonial_client').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        arrows: false,
        asNavFor: '.testimonial_slide',
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0px',
    });

    $('.brand_item').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fas fa-angle-left ar_left"></i>',
        nextArrow: '<i class="fas fa-angle-right ar_right"></i>',
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1021,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
        },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                }
        },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
        }
      ]
    });
    /* about part start here */
    $('.about_tab ul li a').on('click', function () {
        $('.about_tab ul li a').removeClass('active');
        $(this).addClass('active');
    });



    /* counter part start here */
    $('.counter').counterUp({
        delay: 50,
        time: 5000
    });
    /* counter part end here */

    /*wow js*/
    new WOW().init();

    /* wow js end */


    /* produstry about us team prt start here */
    $('.about_team_slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fas fa-angle-left ar_left"></i>',
        nextArrow: '<i class="fas fa-angle-right ar_right"></i>',
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
          },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
          },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
          }
        ]
    });

    /* venubox active here */

    $('.venobox').venobox({
        autoplay: true,
    });

});
