$( document ).ready(function() {

//Scroll Suave
let navBtn = $('.nav-item');

let bannerSection = $('#carouselExampleIndicators');
let aboutSection = $('#about-area');
let servicesSection = $('#services-area');
let catalogSection = $('#catalog-area');
let portfolioSection = $('#portfolio-area');
let contactSection = $('#contact-area');

let scrollTo = '';

$(navBtn).click(function() {

  let btnId = $(this).attr('id');

  if(btnId == 'about-menu') {
    scrollTo = aboutSection;
  } else if(btnId == 'services-menu') {
    scrollTo = servicesSection;
  } else if(btnId == 'catalog-menu') {
    scrollTo = catalogSection;
  } else if(btnId == 'portfolio-menu') {
    scrollTo = portfolioSection;
  } else if(btnId == 'contact-menu') {
    scrollTo = contactSection;
  } else {
    scrollTo = bannerSection;
  }

  $([document.documentElement, document.body]).animate({
      scrollTop: $(scrollTo).offset().top - 70
  }, 1500);
});


// Filtro do catálogo

$('.filter-btn').on('click', function() {

  let type = $(this).attr('id');
  let boxes = $('.project-box');

  $('.main-btn').removeClass('active');
  $(this).addClass('active');

  if(type == 'anime-btn') {
    eachBoxes('anime', boxes);
  } else if(type == 'movie-btn') {
    eachBoxes('movie', boxes);
  } else {
    eachBoxes('all', boxes);
  }

});

function eachBoxes(type, boxes) {

  if(type == 'all') {
    $(boxes).fadeIn();
  } else {
    $(boxes).each(function() {
      if(!$(this).hasClass(type)) {
        $(this).fadeOut('slow');
      } else {
        $(this).fadeIn();
      }
    });
  }
}

});