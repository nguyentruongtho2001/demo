/*==========

Template Name: Shivaa

==========*/

/*==========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Loader JS
3.Wow Animation JS
4.Smooth Scrolling JS
5.Scroll To Top JS
6.Sticky Header JS
7.Toogle Menu Mobile JS
8.Search Form JS
9.Partners Slider JS
10.Testimonial Slider JS
11.Blog Post Slider JS
12.Submenu For Mobile JS
13.Pricing Plans Slider For Mobile JS
14.Team Page Slider For Mobile JS
15.Pricing Switch JS
16.Portfolio Tabbing JS
17.Magnific Popup
18.Light Gallery
==========*/

$(document).ready(function ($) {
  $(".back_to_top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "500");
  });



  // Whole Script Strict Mode Syntax
  ("use strict");

  // Loader JS Start
  $(window).ready(function () {
    $(".loader-box").fadeOut();
    $("body").removeClass("fixed");
  });
  // Loader JS End

  // Wow Animation JS Start
  new WOW().init();
  // Wow Animation JS Start

  // Smooth Scrolling JS Start
  $("a[href*=\\#]:not([href$=\\#])").on("click", function (e) {
    e.preventDefault();
    var offset = 100;
    var target = this.hash;
    if ($(this).data("offset") != undefined) offset = $(this).data("offset");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - offset,
        },
        800,
        "swing",
        function () {
          // window.location.hash = target;
        }
      );
  });
  // Smooth Scrolling JS End

  // Scroll To Top JS Start
  $("#scroll-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      $("#scroll-to-top").fadeIn(500);
    } else {
      $("#scroll-to-top").fadeOut(500);
    }
  });
  // Scroll To Top JS End

  // Sticky Header JS Start
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 100) {
      $(".site-header").addClass("sticky-header");
      $(".mega_menu").css("top", "77px");
      $(".dropdowns").css("color", "#000");
      $(".dropdowns .dropdown-menus").css("background", "#fff");
      $(".dropdowns .dropdown-menus li").css("color", "#000");
      $(".dropdowns").css(
        "background",
        "url(https://imgs.search.brave.com/zflzGjg_uwPQcCr5vh9qFmuJsvjb2Ht0T9KMrJ41WrM/rs:fit:512:512:1/g:ce/aHR0cDovL3d3dy5w/bmdhbGwuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy82L0NhcmV0/LVN5bWJvbC5wbmc) no-repeat right 0.8em center/1.4em, linear-gradient(to left, rgba(255, 255, 255, 0.3) 3em, rgba(255, 255, 255, 0.2) 3em)"
      );
    } else {
      $(".site-header").removeClass("sticky-header");
      $(".mega_menu").css("top", "75px");
      $(".dropdowns").css("color", "#fff");
      $(".dropdowns .dropdown-menus").css("background", "transparent");
      $(".dropdowns .dropdown-menus li").css("color", "#fff");
      $(".dropdowns").css(
        "background",
        "url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right 0.8em center/1.4em, linear-gradient(to left, rgba(255, 255, 255, 0.3) 3em, rgba(255, 255, 255, 0.2) 3em)"
      );
    }
  });
  // Sticky Header JS End

  // Toogle Menu Mobile JS Start
  $(".toggle-button").on("click", function () {
    $(".main-navigation").toggleClass("toggle-menu");
    $(".header-menu .black-shadow").fadeToggle();
  });
  $(".main-navigation ul li a").on("click", function () {
    $(".main-navigation").removeClass("toggle-menu");
    $(".header-menu .black-shadow").fadeOut();
  });
  $(".main-navigation ul li.sub-items>a").on("click", function () {
    $(".main-navigation").addClass("toggle-menu");
    $(".header-menu .black-shadow").stop();
  });
  $(".header-menu .black-shadow").on("click", function () {
    $(this).fadeOut();
    $(".main-navigation").removeClass("toggle-menu");
  });
  // Toogle Menu Mobile JS End

  $(".side_menu_toggle").on("click", function () {
    $(".side_menu").addClass("open");
    $(".side_menu_overlay").fadeIn();
  });

  $(".side_menu_overlay").on("click", function () {
    $(this).fadeOut();
    $(".side_menu").removeClass("open");
  });

  // Search Form JS Start
  $(".search-icon").on("click", function () {
    $(".search-input").fadeToggle(300);
    $(".search-input .black-shadow").fadeIn();
  });
  $(".search-input .black-shadow").on("click", function () {
    $(this).fadeOut();
    $(".search-input").fadeOut(300);
  });
  // Search Form JS End

  $(".dropdowns").hover(function () {
    $(this).attr("tabindex", 1).focus();
    $(this).toggleClass("active");
    $(this).find(".dropdown-menus").toggle();
  });
  $(".dropdowns").focusout(function () {
    $(this).removeClass("active");
    $(this).find(".dropdown-menus").hide();
  });
  $(".dropdowns .dropdown-menus li").click(function () {
    $(this).parents(".dropdowns").find("span").text($(this).text());
    $(this)
      .parents(".dropdowns")
      .find("input")
      .attr("value", $(this).attr("id"));
  });

  $(".mega_service").hover(function () {
    if ($(window).width() > 800) {
      $(".mega_menu").toggle();
    }
  });

  $(".mega_service").click(function (e) {
    if ($(window).width() < 800) {
      e.preventDefault();
      $(".mega_menu").toggle();
      $(".header-menu .black-shadow").fadeToggle();
    }
  });

  $(".mega_menu").mouseenter(function () {
    if ($(window).width() > 800) {
      $(".mega_menu").show();
      $(".mega_menu").mouseenter(function () {
        $(this).show();
      });
    }
  });

  $(".mega_menu").mouseleave(function () {
    if ($(window).width() > 800) {
      $(".mega_menu").hide();

      $(".mega_menu").mouseleave(function () {
        $(this).hide();
      });
    }
  });

  $(".header-menu .black-shadow").on("click", function () {
    if ($(".mega_menu").css("display") == "block") {
      $(".mega_menu").toggle();
    }
  });

  // Partners Slider JS Start
  $(".partners-slider").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slick-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow:
      '<button class="slick-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  // Partners Slider JS End

  // Testimonial Slider JS Start
  $(".testimonial-slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slick-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow:
      '<button class="slick-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // Testimonial Slider JS End

  // Blog Post Slider JS Start
  $(".blog-post-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slick-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow:
      '<button class="slick-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // Blog Post Slider JS End

  if ($(window).width() < 992) {
    // Submenu For Mobile JS Start
    $("body").on("click", ".main-navigation ul li.sub-items>a", function () {
      if ($(this).parent().hasClass("active-sub-menu")) {
        $(this).parent().removeClass("active-sub-menu");
        $(this).parent().find("ul").slideUp();
      } else {
        $(this).parent().addClass("active-sub-menu");
        $(this).parent().find("ul").slideDown();
      }
    });
    // Submenu For Mobile JS End

    // Pricing Plans Slider For Mobile JS Start
    $(".pricing-slider").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow:
        '<button class="slick-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
      nextArrow:
        '<button class="slick-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
      dots: true,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    // Pricing Plans Slider For Mobile JS End

    // Team Page Slider For Mobile JS Start
    $(".page-team-slider").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow:
        '<button class="slick-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
      nextArrow:
        '<button class="slick-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    // Team Page Slider For Mobile JS End
  }

  // Magnific Popup JS Start
  if (jQuery(".popup-youtube").length) {
    $(".popup-youtube").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }
  // Magnific Popup JS End

  // Light Gallery JS Start
  if (jQuery("#lightgallery, .lightgallery").length) {
    $("#lightgallery, .lightgallery").lightGallery({
      selector: ".lightimg",
      loop: true,
      thumbnail: true,
      exThumbImage: "data-exthumbimage",
    });
  }
  // Light Gallery JS End

  var support =
    '<a href="https://themeforest.net/item/shivaa-creative-agency-bootstrap-template/31977765" target="_blank" class="bt-buy-now theme-btn"><i class="ti-shopping-cart"></i><span>Buy Now</span></a><a href="https://support.w3itexperts.com" target="_blank" class="bt-support-now theme-btn"><i class="ti-headphone-alt"></i><span>Support</span></a><!-- Go to www.addthis.com/dashboard to customize your tools --><script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b221c5e31b4e54b"></script>';
  jQuery("body").append(support);
});

// Pricing Switch JS Start
function check() {
  var price_check = document.getElementById("price_check");
  var annually_text = document.getElementsByClassName("annually_text");
  var monthly_text = document.getElementsByClassName("monthly_text");

  for (var i = 0; i < annually_text.length; i++) {
    if (price_check.checked == true) {
      annually_text[i].style.display = "none";
      monthly_text[i].style.display = "block";
    } else if (price_check.checked == false) {
      annually_text[i].style.display = "block";
      monthly_text[i].style.display = "none";
    }
  }
}
check();
// Pricing Switch JS End

// Portfolio Tabbing JS Start
$(function () {
  var filterList = {
    init: function () {
      // MixItUp plugin
      // http://mixitup.io
      $("#portfoliolist").mixItUp({
        selectors: {
          target: ".portfolio",
          filter: ".filter",
        },
        load: {
          filter: ".all, .web-design, .web-development, .branding, .mobile-app",
        },
      });
    },
  };
  // Run the show!
  filterList.init();
});
// Portfolio Tabbing JS End

