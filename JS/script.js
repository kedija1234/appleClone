$("document").ready(function () {
  function isMobile() {
    return $(window).width() <= 768;
  }
  $(".footer-links-wrapper h3").on("click", function () {
    
    if (isMobile()) {
      
      const h3 = $(this);
      const subLink = h3.next("ul");
      h3.toggleClass("expanded");
      console.log(h3);
      if (h3.hasClass("expanded")) {
        console.log("ale");
        subLink.slideDown(300);
      } else {
        console.log("yelem");
        subLink.slideUp(300);
      }
    }
  });

  $(window).resize(function () {
    if (!isMobile()) {
      $(".footer-links-wrapper ul").removeAttr("style");
      $(".footer-links-wrapper h3").removeClass("expanded");
    }
  });
});
