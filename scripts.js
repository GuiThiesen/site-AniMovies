$(document).ready(function() {

    // Parallax

    // setTimeout(function () {
    //     $("#data-area").parallax({ imageSrc: "img/cidadeparallax.png" });
    //     $("#apply-area").parallax({ imageSrc: "img/pattern.png" });
    //   }, 250);

    //Scroll Suave
    let navBtn = $('.nav-item');

    let bannerSection = $('#carouselExampleIndicators');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let catalogSection = $('#catalog-area');

    let scrollTo = '';

    $(navBtn).click(function() {

        let btnId = $(this).attr('id');

        switch (btnId) {
            case 'about-menu':
                scrollTo = aboutSection;
                break;
            case 'services-menu':
                scrollTo = servicesSection;
                break;
            case 'catalog-menu':
                scrollTo = catalogSection;
                break;
            case 'portfolio-menu':
                scrollTo = portfolioSection;
                break;

            default:
                scrollTo = bannerSection
        }
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 56
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

        const iframeData = [
            'https://www.youtube.com/embed/P75q_3Qlrqg', 'https://www.youtube.com/embed/EL-D9LrFJd4', 'https://www.youtube.com/embed/fCQufN8Wsgc', 'https://www.youtube.com/embed/ShEAiFqkY0E', 'https://www.youtube.com/embed/kkP4h-gUWfo', 'https://www.youtube.com/embed/Mzi_V0m7Qsk',
            'https://www.youtube.com/embed/zXkJW7ar0AE', 'https://www.youtube.com/embed/22NkKx6_MWw', 'https://www.youtube.com/embed/dr1bP4hIfnk', 'https://www.youtube.com/embed/lG7DGMgfOb8', 'https://www.youtube.com/embed/YoHD9XEInc0', 'https://www.youtube.com/embed/JMU_ksS3fq4'

        ]



        let getTarget = $(this).attr("data-target");

        switch (getTarget) {
            case '#anime1':
                document.querySelector(".modal").id = "anime1"
                document.querySelector(".iframe-tag").src = iframeData[0]
                break;
            case '#anime2':
                document.querySelector(".modal").id = "anime2"
                document.querySelector(".iframe-tag").src = iframeData[1]
                break;
            case '#anime3':
                document.querySelector(".modal").id = "anime3"
                document.querySelector(".iframe-tag").src = iframeData[2]
                break;
            case '#anime4':
                document.querySelector(".modal").id = "anime4"
                document.querySelector(".iframe-tag").src = iframeData[3]
                break;
            case '#anime5':
                document.querySelector(".modal").id = "anime5"
                document.querySelector(".iframe-tag").src = iframeData[4]
                break;
            case '#anime6':
                document.querySelector(".modal").id = "anime6"
                document.querySelector(".iframe-tag").src = iframeData[5]
                break;
            case '#movie1':
                document.querySelector(".modal").id = "movie1"
                document.querySelector(".iframe-tag").src = iframeData[6]
                break;
            case '#movie2':
                document.querySelector(".modal").id = "movie2"
                document.querySelector(".iframe-tag").src = iframeData[7]
                break;
            case '#movie3':
                document.querySelector(".modal").id = "movie3"
                document.querySelector(".iframe-tag").src = iframeData[8]
                break;
            case '#movie4':
                document.querySelector(".modal").id = "movie4"
                document.querySelector(".iframe-tag").src = iframeData[9]
                break;
            case '#movie5':
                document.querySelector(".modal").id = "movie5"
                document.querySelector(".iframe-tag").src = iframeData[10]
                break;
            case '#movie6':
                document.querySelector(".modal").id = "movie6"
                document.querySelector(".iframe-tag").src = iframeData[11]
                break;

            default:
                document.querySelector(".iframe-tag").src = ''
        }


    });

    $(".modal").on('hidden.bs.modal', function() {
        document.querySelector(".iframe-tag").src = '';
    });

});