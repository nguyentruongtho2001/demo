jQuery(document).ready(function ($) {
  $(window).on("hashchange load scroll resize", function () {
    if ($("#top-of-page").length && $("#scroll-review-nav").length) {
      let scrollTop = $(window).scrollTop();
      let topOfPage = $("#top-of-page").offset().top;
      let topOfPageHeight = $("#top-of-page").outerHeight();
      let headerHeight = $(".header-bottom--border:visible").outerHeight() || 0;
      let headerMargin = parseInt($(".header-bottom--border:visible").css("margin")) || 0;

      let threshold = topOfPage + topOfPageHeight - (headerHeight - headerMargin) - 10;

      if (scrollTop > 0 && scrollTop >= threshold) {
        $("#scroll-review-nav").addClass("sticky");
      } else {
        $("#scroll-review-nav").removeClass("sticky");
      }
    }
  });
});
