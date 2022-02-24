$(document).ready(function() {

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

      if (btnId == 'about-menu') {
          scrollTo = aboutSection;
      } else if (btnId == 'services-menu') {
          scrollTo = servicesSection;
      } else if (btnId == 'catalog-menu') {
          scrollTo = catalogSection;
      } else if (btnId == 'portfolio-menu') {
          scrollTo = portfolioSection;
      } else if (btnId == 'contact-menu') {
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
      let boxes = $('.catalog-box');

      $('.main-btn').removeClass('active');
      $(this).addClass('active');

      if (type == 'anime-btn') {
          eachBoxes('anime', boxes);
      } else if (type == 'movie-btn') {
          eachBoxes('movie', boxes);
      } else {
          eachBoxes('all', boxes);
      }

  });

  function eachBoxes(type, boxes) {

      if (type == 'all') {
          $(boxes).fadeIn();
      } else {
          $(boxes).each(function() {
              if (!$(this).hasClass(type)) {
                  $(this).fadeOut('slow');
              } else {
                  $(this).fadeIn();
              }
          });
      }
  }

  // Modal

  $('.modal-btn').on('click', function() {

          const iframeData = {
              'anime1': 'https://www.youtube.com/embed/6MRxT8kz30k',
              'anime2': 'https://www.youtube.com/embed/OhNwckCLzis',
              'anime3': 'https://www.youtube.com/embed/ChsLmEpdNrI',
              'anime4': 'https://www.youtube.com/embed/--IcmZkvL0Q',
              'anime5': 'https://www.youtube.com/embed/kkP4h-gUWfo',
              'anime6': 'https://www.youtube.com/embed/aMJpI_fEsA4',

              'movie1': 'https://www.youtube.com/embed/zXkJW7ar0AE',
              'movie2': 'https://www.youtube.com/embed/22NkKx6_MWw',
              'movie3': 'https://www.youtube.com/embed/dr1bP4hIfnk',
              'movie4': 'https://www.youtube.com/embed/lG7DGMgfOb8',
              'movie5': 'https://www.youtube.com/embed/YoHD9XEInc0',
              'movie6': 'https://www.youtube.com/embed/JMU_ksS3fq4'
          }

          let getTarget = $(this).attr("data-target");

          document.querySelector(".modal").id = "anime1"

          if (getTarget == '#anime1') {
              document.querySelector(".modal").id = "anime1"
              document.querySelector(".iframe-tag").src = iframeData.anime1

          } else if (getTarget == '#anime2') {
              document.querySelector(".modal").id = "anime2"
              document.querySelector(".iframe-tag").src = iframeData.anime2

          } else if (getTarget == '#anime3') {
              document.querySelector(".modal").id = "anime3"
              document.querySelector(".iframe-tag").src = iframeData.anime3

          } else if (getTarget == '#anime4') {
              document.querySelector(".modal").id = "anime4"
              document.querySelector(".iframe-tag").src = iframeData.anime4

          } else if (getTarget == '#anime5') {
              document.querySelector(".modal").id = "anime5"
              document.querySelector(".iframe-tag").src = iframeData.anime5

          } else if (getTarget == '#anime6') {
              document.querySelector(".modal").id = "anime6"
              document.querySelector(".iframe-tag").src = iframeData.anime6

          } else if (getTarget == '#movie1') {
              document.querySelector(".modal").id = "movie1"
              document.querySelector(".iframe-tag").src = iframeData.movie1

          } else if (getTarget == '#movie2') {
              document.querySelector(".modal").id = "movie2"
              document.querySelector(".iframe-tag").src = iframeData.movie2

          } else if (getTarget == '#movie3') {
              document.querySelector(".modal").id = "movie3"
              document.querySelector(".iframe-tag").src = iframeData.movie3

          } else if (getTarget == '#movie4') {
              document.querySelector(".modal").id = "movie4"
              document.querySelector(".iframe-tag").src = iframeData.movie4

          } else if (getTarget == '#movie5') {
              document.querySelector(".modal").id = "movie5"
              document.querySelector(".iframe-tag").src = iframeData.movie5

          } else if (getTarget == '#movie6') {
              document.querySelector(".modal").id = "movie6"
              document.querySelector(".iframe-tag").src = iframeData.movie6

          };
  });
});
// pegar elemento no data-target (anime1, anime2)

// mudar no modal o id dele e o link no iframe