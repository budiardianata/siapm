(function ($) {
  "use strict";
  new WOW().init();
  objectFitImages();
  jarallax(document.querySelectorAll('.jarallax'));
  jarallax(document.querySelectorAll('.jarallax-keep-img'), {
      keepImg: true,
  });
  var fcopy = document.getElementsByClassName('footer-copyright')[0];
  var copy = "Copyright &copy; ";
  fcopy.insertAdjacentHTML('afterbegin', copy.concat(new Date().getFullYear()).concat(" All Rights Reserved by "));
  fcopy.insertAdjacentHTML('beforeend', "<br><span>Made with <i class='fa fa-heart pulse'></i> by <a href='https://bit.ly/3cbVfOh' target='_blank'>Pustaka Digital</a></span>");
  var ContentLeft = document.getElementById('main-content-left').offsetHeight;
  var scrWidth = $(window).width();
  if (scrWidth>992) { 
    document.getElementById("main-content-right").style.height = ContentLeft+'px';
  }

  function toggleDropdown(e) {
    var _d = $(e.target).closest('.dropdown'),
      _m = $('.dropdown-menu', _d);
    setTimeout(function () {
      var shouldOpen = e.type !== 'click' && _d.is(':hover');
      _m.toggleClass('show', shouldOpen);
      _d.toggleClass('show', shouldOpen);
      $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
    }, e.type === 'mouseleave' ? 300 : 0);
  }

  $('body')
    .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);
  
  
  $('.parallax').each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        'background-image': 'url(' + $(this).data('bg') + ')'
      });
    }
  });

  $('.p-cover').each(function () {
    if ($(this).attr("data-bg")) {
      $(this).css({
        'background': 'url(' + $(this).data('bg') + ')',
        'background-position': 'center center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        'background-attachment': 'scroll'
      });
    }
  });

  $('#portfolio-carousel').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1
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
  var owl = $("#portfolio-carousel");

  owl.owlCarousel();

  // Custom Navigation Events
  $(".next-portofolio").click(function () {
    owl.trigger('next.owl.carousel');
  });
  $(".prev-portofolio").click(function () {
    owl.trigger('prev.owl.carousel');
  });

  //Menu On Hover

  $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest('.nav-item');
      _d.addClass('show');
      setTimeout(function () {
        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
      }, 1);
    }
  });

  //Switch light/dark

  $("#switch").on('click', function () {
    if ($("body").hasClass("dark")) {
      $("body").removeClass("dark");
      $("#switch").removeClass("switched");
    } else {
      $("body").addClass("dark");
      $("#switch").addClass("switched");
    }
  });

})(jQuery);
