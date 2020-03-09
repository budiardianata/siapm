(function($) {
  "use strict";
  new WOW().init();
  objectFitImages();
  jarallax(document.querySelectorAll(".jarallax"));
  jarallax(document.querySelectorAll(".jarallax-keep-img"), {
    keepImg: true
  });
  var owl = $("#galery-slide");
  var fSlide = $("#footer-slide");
  var fcopy = document.getElementsByClassName("footer-copyright")[0];
  var copy = "Copyright &copy; ";
  var ContentLeft = document.getElementById("main-content-left");
  var mdbLight = document.getElementById("popupGalery");
  var scrWidth = $(window).width();
  if (scrWidth > 992 && ContentLeft !== null) {
    document.getElementById("main-content-right").style.height =
      ContentLeft.offsetHeight + "px";
  }
  if (mdbLight !== null) {
    mdbLight.innerHTML += window.atob('PGRpdiBjbGFzcz0icHN3cCIgdGFiaW5kZXg9Ii0xIiByb2xlPSJkaWFsb2ciIGFyaWEtaGlkZGVuPSJ0cnVlIj4gPGRpdiBjbGFzcz0icHN3cF9fYmciPjwvZGl2PjxkaXYgY2xhc3M9InBzd3BfX3Njcm9sbC13cmFwIj4gPGRpdiBjbGFzcz0icHN3cF9fY29udGFpbmVyIj4gPGRpdiBjbGFzcz0icHN3cF9faXRlbSI+PC9kaXY+PGRpdiBjbGFzcz0icHN3cF9faXRlbSI+PC9kaXY+PGRpdiBjbGFzcz0icHN3cF9faXRlbSI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0icHN3cF9fdWkgcHN3cF9fdWktLWhpZGRlbiI+IDxkaXYgY2xhc3M9InBzd3BfX3RvcC1iYXIiPiA8ZGl2IGNsYXNzPSJwc3dwX19jb3VudGVyIj48L2Rpdj48YnV0dG9uIGNsYXNzPSJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1jbG9zZSIgdGl0bGU9IkNsb3NlIChFc2MpIj48L2J1dHRvbj4gPGJ1dHRvbiBjbGFzcz0icHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tZnMiIHRpdGxlPSJUb2dnbGUgZnVsbHNjcmVlbiI+PC9idXR0b24+IDxidXR0b24gY2xhc3M9InBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLXpvb20iIHRpdGxlPSJab29tIGluL291dCI+PC9idXR0b24+IDxkaXYgY2xhc3M9InBzd3BfX3ByZWxvYWRlciI+IDxkaXYgY2xhc3M9InBzd3BfX3ByZWxvYWRlcl9faWNuIj4gPGRpdiBjbGFzcz0icHN3cF9fcHJlbG9hZGVyX19jdXQiPiA8ZGl2IGNsYXNzPSJwc3dwX19wcmVsb2FkZXJfX2RvbnV0Ij48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48YnV0dG9uIGNsYXNzPSJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCIgdGl0bGU9IlByZXZpb3VzIChhcnJvdyBsZWZ0KSI+IDwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPSJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQiIHRpdGxlPSJOZXh0IChhcnJvdyByaWdodCkiPiA8L2J1dHRvbj4gPGRpdiBjbGFzcz0icHN3cF9fY2FwdGlvbiI+IDxkaXYgY2xhc3M9InBzd3BfX2NhcHRpb25fX2NlbnRlciI+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+');
  }
  fcopy.insertAdjacentHTML(
    "afterbegin",
    copy.concat(new Date().getFullYear()).concat(" All Rights Reserved by ")
  );
  fcopy.insertAdjacentHTML(
    "beforeend",
    "<br><span>Made with <i class='fa fa-heart pulse'></i> by <a href='https://bit.ly/3cbVfOh' target='_blank'>Pustaka Digital</a></span>"
  );

  function toggleDropdown(e) {
    var _d = $(e.target).closest(".dropdown"),
      _m = $(".dropdown-menu", _d);
    setTimeout(
      function() {
        var shouldOpen = e.type !== "click" && _d.is(":hover");
        _m.toggleClass("show", shouldOpen);
        _d.toggleClass("show", shouldOpen);
        $('[data-toggle="dropdown"]', _d).attr("aria-expanded", shouldOpen);
      },
      e.type === "mouseleave" ? 300 : 0
    );
  }

  $("body")
    .on("mouseenter mouseleave", ".dropdown", toggleDropdown)
    .on("click", ".dropdown-menu a", toggleDropdown);

  $(".parallax").each(function() {
    if ($(this).attr("data-bg")) {
      $(this).css({
        "background-image": "url(" + $(this).data("bg") + ")"
      });
    }
  });
  $(".services").each(function() {
    if ($(this).attr("data-bg")) {
      $(this).css({
        "background-image": "url(" + $(this).data("bg") + ")"
      });
    }
  });
  owl.owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 2
      },

      600: {
        items: 2
      },

      1024: {
        items: 2
      },

      1366: {
        items: 3
      }
    }
  });
  fSlide.owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    dots: false,
    responsive: {
      0: {
        items: 3
      },

      600: {
        items: 3
      },

      1024: {
        items: 5
      },

      1366: {
        items: 5
      }
    }
  });

  $(".next-portofolio").click(function() {
    owl.trigger("next.owl.carousel");
  });
  $(".prev-portofolio").click(function() {
    owl.trigger("prev.owl.carousel");
  });
  var script = document.createElement('script');
script.onload = function () {
    //do stuff with the script
};
script.src = "https://widget.kominfo.go.id/gpr-widget-kominfo.min.js";

document.body.appendChild(script);
})(jQuery);
