(function ($) {
  "use strict";
  $(document).ready(() => {
    $('.mdb-select').materialSelect({});
    $(".button-collapse").sideNav();
    new WOW().init();
  });
  $('.count').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      step: function (func) {
        $(this).text(parseFloat(func).toFixed(size));
      }
    });
  });
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
  // Collapsible Card
  $('a[data-action="collapse"]').on("click", function (e) {
    e.preventDefault();
    $(this)
      .closest(".card")
      .children(".card-content")
      .collapse("toggle");
    $(this)
      .closest(".card")
      .find('[data-action="collapse"]')
      .toggleClass("rotate");
  });
  $('[data-toggle="tooltip"]').tooltip()
  // Toggle fullscreen
  $('a[data-action="expand"]').on("click", function (e) {
    e.preventDefault();
    $(this)
      .closest(".card")
      .find('[data-action="expand"] i')
      .toggleClass("fa-expand fa-compress");
    $(this)
      .closest(".card")
      .toggleClass("card-fullscreen");
  });
  // Close Card
  $('a[data-action="close"]').on("click", function () {
    $(this).closest(".card").removeClass().slideUp("fast");
  });
  $(".heading-elements-toggle").on("click", function () {
    $(this)
      .next(".heading-elements")
      .toggleClass("visible");
  });

  function toggleDropdown(e) {
    var _d = $(e.target).closest(".dropdown"),
      _m = $(".dropdown-menu", _d);
    setTimeout(
      function () {
        var shouldOpen = e.type !== "click" && _d.is(":hover");
        _m.toggleClass("show", shouldOpen);
        _d.toggleClass("show", shouldOpen);
        $('[data-toggle="dropdown"]', _d).attr("aria-expanded", shouldOpen);
      },
      e.type === "mouseleave" ? 300 : 0
    );
  }
  $(document).ready(function () {
    $("#searchKecDes").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#dtKecDes *").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  $("body")
    .on("mouseenter mouseleave", ".dropdown", toggleDropdown)
    .on("click", ".dropdown-menu a", toggleDropdown);

  $(".parallax").each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        "background-image": "url(" + $(this).data("bg") + ")"
      });
    }
  });
  $(".wellcome").each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        "background-image": "url(" + $(this).data("bg") + ")"
      });
    }
  });
  $(".services").each(function () {
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

  $(".next-portofolio").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".prev-portofolio").click(function () {
    owl.trigger("prev.owl.carousel");
  });
  var script = document.createElement('script');
  script.onload = function () {
    //do stuff with the script
  };
  script.src = "https://widget.kominfo.go.id/gpr-widget-kominfo.min.js";

  document.body.appendChild(script);

  $(document).ready(function () {

    $("#statistikTab a[href='#kependudukan']").tab('show');
    $('a[data-toggle="tab"]').one('show.bs.tab', function (e) {
      var dataID = $(e.target).attr("data-id");
      var dataType = $(e.target).attr("data-type");
      switch ($(e.target).attr("href")) {
        case '#kependudukan':
          getKependudukan(dataID, dataType);
        break;
        case '#kemiskinan':
          getKemiskinan(dataID, dataType);
        break;
        case '#peristiwa':
          getPeristiwa(dataID, dataType);
        break;
        default:
          console.log('undefined');
      }
    });

    function getKependudukan(id, type) {
      //variable ID untuk nentuin id desa atau id kecamatan
      //variable TIPE untuk nentuin (desa, kecamatan, kabupaten)

      if ($('#grafik_pendidikan').length > 0) {
        var pieChartctx = $("#grafik_pendidikan");
        var chartTitle = 'GRAFIK PENDIDIKAN BERDASARKAN DATA PEKON YANG BARU TERINTEGRASI';
        var chartLabels = ["Tdk/Blm Sekolah", "Blm Tamat SD", "SD", 'SLTP', 'SLTA', 'D I/II', 'D III', 'D IV /S1', 'S II', 'S III'];
        var chartData = [6817491, 3503427, 11126412, 5507279, 4976259, 110969, 309772, 821653, 41587, 2441];
        var pieChartconfig = {
          type: 'pie',
          options: {
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration: 500,
            title: {
              display: true,
              text: chartTitle
            }
          },
          data: {
            labels: chartLabels,
            datasets: [{
              data: chartData,
              backgroundColor: palette('totol-sql', chartData.length).map(function (hex) {
                return '#' + hex;
              }),
            }]
          }
        };
        new Chart(pieChartctx, pieChartconfig);
      }
    }

    function getKemiskinan(id, type) {
      console.log('getKemiskinan');
      console.log(id, type);
    }

    function getPeristiwa(id, type) {
      console.log('getPeristiwa');
      console.log(id, type);
    }
  });
})(jQuery);
