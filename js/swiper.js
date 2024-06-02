/* var swiper = new Swiper( '.project_Swiper', {
        autoplay:5000,
        speed : 5000,
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,
            stretch: 100,
            depth: 400,
            modifier: 1.5,
            slideShadows : true,

        }
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
        
    } ); */

/*     var swiper = new Swiper(".project_Swiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    }); */
    var swiper = new Swiper(".project_Swiper", {
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
