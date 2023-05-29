
$(document).ready(function() {
 
  var bannerTop = $('header').offset().top;
  var bannerHeight = $('header').outerHeight();
  var windowHeight = $(window).height();
  
  
  if (bannerTop + bannerHeight <= windowHeight) {
    $('header .banner-animate').addClass('animated');
  } else {
    $('header .banner-animate').removeClass('animated');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  let sobreMiSection = document.getElementById('sobre-mi');
  sobreMiSection.classList.remove('d-none');
  sobreMiSection.classList.add('animate__animated', 'animate__fadeIn', 'animate__slow');
});

  
  let modoOscuroBtn = document.getElementById('botonMode')

  modoOscuroBtn.addEventListener('click', function(){
    let sobreMi = document.getElementById('sobre-mi')
    let habilidades = document.getElementById('habilidades')
    let proyectos = document.getElementById('proyectos')
    let footer = document.getElementById('footer')
    let body = document.body
    let divButton = document.getElementById('contenedor-boton')
    modoOscuroBtn.innerHTML = '<i class="fa-regular fa-sun"></i>'

    sobreMi.classList.toggle('bg-dark')
    habilidades.classList.toggle('dark-modeSection')
    proyectos.classList.toggle('bg-dark')
    footer.classList.toggle('bg-dark')
    body.classList.toggle('text-light')
    
    if(body.classList.contains('text-light')){
      modoOscuroBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
      
    }else{
      modoOscuroBtn.innerHTML = '<i class="fa-regular fa-moon"></i>';
    }
  })




  document.addEventListener('DOMContentLoaded', function() {
    let habilidadesSection = document.getElementById('habilidades');
    let habilidadesOffsetTop = habilidadesSection.offsetTop;
    let windowHeight = window.innerHeight;
  
    function showHabilidadesSection() {
      let windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (windowScrollTop + windowHeight >= habilidadesOffsetTop) {
        habilidadesSection.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slower');
        habilidadesSection.classList.remove('d-none');
      } 
    }
  
    
    window.addEventListener('scroll', showHabilidadesSection);
    window.addEventListener('load', showHabilidadesSection);
  });


  document.addEventListener('DOMContentLoaded', function() {
    let proyectosSection = document.getElementById('proyectos');
    let proyectosOffsetTop = proyectosSection.offsetTop;
    let windowHeight = window.innerHeight;
  
    function showProyectosSection() {
      let windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (windowScrollTop + windowHeight >= proyectosOffsetTop) {
        proyectosSection.classList.add('animate__animated', 'animate__fadeInRight' ,'animate__slower');
        proyectosSection.classList.remove('d-none');
      } 
    }
  
    window.addEventListener('scroll', showProyectosSection);
    window.addEventListener('load', showProyectosSection);
  });