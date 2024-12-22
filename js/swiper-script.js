const swiper1 = new Swiper('.swiper1', {

    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    centerSliders: true,

    autoplay: {
      delay: 2000, 
      disableOnInteraction: false,
    },
    speed: 1500,

    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar1',
    },
  });

  const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 1, 
    speed: 400,
  
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
    
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    
    scrollbar: {
      el: '.swiper-scrollbar2',
    },
  
    on: {
      slideChangeTransitionEnd: function () {
        // Убираем описание у всех карточек
        document.querySelectorAll('.card-description').forEach((desc) => {
          desc.style.display = 'none';
        });
  
        // Показываем описание только для активной карточки
        const activeSlide = document.querySelector('.swiper-slide-active .card-description');
        if (activeSlide) {
          activeSlide.style.display = 'block';
        }
      },
    },
  });