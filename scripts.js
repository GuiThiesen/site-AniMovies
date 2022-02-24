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
          scrollTop: $(scrollTo).offset().top - 75
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

  $(document).on('click', '.modal-btn', function() {

      const iframeData = [
        'https://www.youtube.com/embed/P75q_3Qlrqg', 'https://www.youtube.com/embed/EL-D9LrFJd4', 'https://www.youtube.com/embed/fCQufN8Wsgc', 'https://www.youtube.com/embed/ShEAiFqkY0E', 'https://www.youtube.com/embed/kkP4h-gUWfo', 'https://www.youtube.com/embed/Mzi_V0m7Qsk',
        'https://www.youtube.com/embed/zXkJW7ar0AE',  'https://www.youtube.com/embed/22NkKx6_MWw',  'https://www.youtube.com/embed/dr1bP4hIfnk',  'https://www.youtube.com/embed/lG7DGMgfOb8',  'https://www.youtube.com/embed/YoHD9XEInc0',  'https://www.youtube.com/embed/JMU_ksS3fq4'
 
    ]
             
          

          let getTarget = $(this).attr("data-target");

          document.querySelector(".modal").id = "anime1"

          if (getTarget == '#anime1') {
              document.querySelector(".modal").id = "anime1"
              document.querySelector(".iframe-tag").src = iframeData[0]

          } else if (getTarget == '#anime2') {
              document.querySelector(".modal").id = "anime2"
              document.querySelector(".iframe-tag").src = iframeData[1]

          } else if (getTarget == '#anime3') {
              document.querySelector(".modal").id = "anime3"
              document.querySelector(".iframe-tag").src = iframeData[2]

          } else if (getTarget == '#anime4') {
              document.querySelector(".modal").id = "anime4"
              document.querySelector(".iframe-tag").src = iframeData[3]

          } else if (getTarget == '#anime5') {
              document.querySelector(".modal").id = "anime5"
              document.querySelector(".iframe-tag").src = iframeData[4]

          } else if (getTarget == '#anime6') {
              document.querySelector(".modal").id = "anime6"
              document.querySelector(".iframe-tag").src = iframeData[5]

          } else if (getTarget == '#movie1') {
              document.querySelector(".modal").id = "movie1"
              document.querySelector(".iframe-tag").src = iframeData[6]

          } else if (getTarget == '#movie2') {
              document.querySelector(".modal").id = "movie2"
              document.querySelector(".iframe-tag").src = iframeData[7]

          } else if (getTarget == '#movie3') {
              document.querySelector(".modal").id = "movie3"
              document.querySelector(".iframe-tag").src = iframeData[8]

          } else if (getTarget == '#movie4') {
              document.querySelector(".modal").id = "movie4"
              document.querySelector(".iframe-tag").src = iframeData[9]

          } else if (getTarget == '#movie5') {
              document.querySelector(".modal").id = "movie5"
              document.querySelector(".iframe-tag").src = iframeData[10]

          } else if (getTarget == '#movie6') {
              document.querySelector(".modal").id = "movie6"
              document.querySelector(".iframe-tag").src = iframeData[11]

          };

          
  });

   $(".modal").on('hidden.bs.modal', function () {
    document.querySelector(".iframe-tag").src = '';
  });
});
// pegar elemento no data-target (anime1, anime2)

// mudar no modal o id dele e o link no iframe