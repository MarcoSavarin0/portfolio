// Archivo animation.js
console.log('g');
$(window).scroll(function() {
    // Calcular la posición del banner
    var bannerTop = $('header').offset().top;
    var bannerHeight = $('header').outerHeight();
    var windowHeight = $(window).height();
    var windowScrollTop = $(this).scrollTop();
  
    // Agregar/eliminar clase de animación dependiendo de la posición del scroll
    if (windowScrollTop > bannerTop + bannerHeight - windowHeight) {
      $('header .banner-animate').addClass('animated');
    } else {
      $('header .banner-animate').removeClass('animated');
    }
  })
  