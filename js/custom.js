$(function(){
      // typer js plugin
      var typed = new Typed('.type', {
        strings: [
            'Web Designer.', 
            'Web Developer.',
            'Freelancer.'
        ],
        typeSpeed: 100,
        loop: true,
      });
      // counter up piugin
      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });
      // mixit up plugin
      var mixer = mixitup('#mixit', {
        animation: {
            duration: 300
        }
    });
    // slider 
    $('.slide').slick({
      dots: true,
      arrows : false,
      infinite: true,
      speed: 900,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // responsive 
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
});