/* Global jQuery */

/* Contents
// --------------------------------------------- -->
     1. wow animation
     2. Menu Mobile
     3. Cart
     4. Search
     5. Owl Slider
     6. Light Box
     7. Fixed Header
*/

(function ($) {
    "use strict";

    /* ------------------  2. Menu Mobile ------------------ */
    var $menu_show = $('.mobile-toggle'),
        $menu = $('header #menu-main'),
        $menu_yoga = $('header .yoga-menu'),
        $list = $("ul.nav-menu li a"),
        $list_firo = $("ul.firo-nav-menu li a"),
        $menu_list_firo = $('ul.firo-nav-menu li.has-dropdown'),
        $menu_list = $('header li.has-dropdown'),
        $menu_ul = $('ul.sub-menu'),
        $cart_model = $('.cart-model'),
        $cart_link = $('#cart-link'),
        $search_bar = $('#search_bar'),
        $search_close = $('.close-search'),
        $search_bot = $('#search-header'),
        $fixed_header = $('#fixed-header'),
        $fixed_header_dark = $('#fixed-header-dark'),
        $fixed_header_light = $('#fixed-header-light');


    $menu_show.on("click", function (e) {
        $menu.slideToggle();
        $menu_yoga.slideToggle();
    });
    $list.on("click", function (event) {
        var submenu = this.parentNode.getElementsByTagName("ul").item(0);
        if (submenu != null) {
            event.preventDefault();
            $(submenu).slideToggle();
        }
    });

    $list_firo.on("click", function (e) {
        var submenu = this.parentNode.getElementsByTagName("ul").item(0);
        if (submenu != null) {
            event.preventDefault();
            $(submenu).slideToggle();
        }
    });

    /*==============================
    Loading
    ==============================*/

    $(window).on('load', function () {
        $('body').imagesLoaded(function () {
            $('.nile-preloader').fadeOut();
        });
    });

    /*==============================
    Animation
    ==============================*/
    $('.animate').scrolla({
        once: true, // only once animation play on scroll
        mobile: false, // disable animation on mobiles 
    });


    /*-------------------  Firo Menu  --------------- */
    var $firo_menu = $('#firo-menu'),
        $open_firo_menu = $('.sidebar-menu-toggle'),
        $close_firo_menu = $('.close-firo-menu');

    $close_firo_menu.on("click", function (e) {
        $firo_menu.slideUp();
    });
    $open_firo_menu.on("click", function (e) {
        $firo_menu.slideDown();
    });



    /* ------------------  3. Cart ------------------ */
    $cart_link.on("click", function (e) {
        $cart_model.slideToggle("fast");
    });

    $(window).on("click", function (e) {
        $cart_model.hide("fast");
    });
    $cart_link.on("click", function (e) {
        event.stopPropagation();
    });





    /* ------------------  4. Search ------------------ */
    $search_bot.on("click", function (e) {
        $search_bar.slideToggle("fast");
    });
    $search_close.on("click", function (e) {
        $search_bar.hide("fast");
    });




    /* ------------------  5.Owl Slider ------------------ */
    var icon_slider = $(".icons-slider");
    var portfolio_slider = $(".portfolio-home-slider");
    var testimonial_slider = $(".testimonial-slider");
    var client_slider = $(".nile-client-slider");

    icon_slider.owlCarousel({
        slideSpeed: 1000,
        autoPlay: true,
        loop: true,
        nav: false,
        margin: 40,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    portfolio_slider.owlCarousel({
        slideSpeed: 1000,
        autoPlay: true,
        loop: true,
        nav: true,
        dots: true,
        navText: ["<span class='arrow_carrot-left box-shadow'></span>", "<span class='arrow_carrot-right box-shadow'></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    testimonial_slider.owlCarousel({
        slideSpeed: 1000,
        autoPlay: true,
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    client_slider.owlCarousel({
        slideSpeed: 1000,
        autoPlay: true,
        loop: true,
        nav: false,
        dots: false,
        navText: ["<span class='arrow_carrot-left'></span>", "<span class='arrow_carrot-right'></span>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    /* ------------------  Darmail Sidebar ------------------ */
    var $sidebar_bottom = $(".sidebar-var-link"),
        $body = $("body"),
        $close_sidebar = $(".close-nile-sidebar"),
        $sidebar_in = $(".nile-sidebar");
    $sidebar_bottom.on("click", function (e) {
        $sidebar_in.addClass("open");
        $close_sidebar.addClass("open");
        $body.css('overflow', 'hidden');
    });

    $close_sidebar.on("click", function (e) {
        $sidebar_in.removeClass("open");
        $(this).removeClass("open");
        $body.css('overflow', 'auto');
    });



    /* ------------------  6. Light Box ------------------ */
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });




    /* ------------------  7. Fixed Header ------------------ */
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 50) {
            $fixed_header.addClass('fixed-header');
            $fixed_header_dark.addClass('fixed-header-dark');
            $fixed_header_light.addClass('fixed-header-light');
        } else {
            $fixed_header.removeClass('fixed-header');
            $fixed_header_dark.removeClass('fixed-header-dark');
            $fixed_header_light.removeClass('fixed-header-light');
        }
    });

    $('a[href="#search"]').on("click", function (event) {
        event.preventDefault();
        $("#search").addClass("open");
        $('#search > form > input[type="search"]').focus();
    });

    $("#search, #search button.close").on("click keyup", function (event) {
        if (
            event.target == this ||
            event.target.className == "close" ||
            event.keyCode == 27
        ) {
            $(this).removeClass("open");
        }
    });

    $("form").submit(function (event) {
        event.preventDefault();
        return false;
    });

    jQuery("a#yt-preview").YouTubePopUp();


    /* ------------------  Filtr Container ------------------ */
    if ($(".filtr-container")[0]) {
        var $container_in = $('.filtr-container');

        if (typeof $('.filtr-container').filterizr === "function") {
            $container_in.imagesLoaded(function () {
                var filterizd = $('.filtr-container').filterizr({    //options object
                });
            });
        }
    }

    /*==============================================================
    wow animation - on scroll
    ==============================================================*/
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    $(window).imagesLoaded(function () {
        wow.init();
    });



    /*==============================================================
    // Animate the scroll to top
    ==============================================================*/
    $(window).on('scroll', function (e) {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });


    $('.go-top').on("click", function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 300);
    })

    /**************
     Sticky Sidebar 
    **************/
    if ($(".sticky-content")[0]) {
        var $sticky_content = $('.sticky-content'),
            $sticky_sidebar = $('.sticky-sidebar');

        $sticky_content.theiaStickySidebar({
            additionalMarginTop: 30
        });
        $sticky_sidebar.theiaStickySidebar({
            additionalMarginTop: 30
        });
    }




}(jQuery));
