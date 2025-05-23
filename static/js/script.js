// Переключение главного изображения по клику на миниатюры
document.addEventListener('DOMContentLoaded', function() {
  // Находим контейнер с миниатюрами
  var thumbnailsContainer = document.querySelector('.nb-thumbnails');
  if (!thumbnailsContainer) {
    console.error('Элемент с классом .nb-thumbnails не найден!');
    return;
  }

  // Навешиваем обработчик клика на контейнер (делегирование событий)
  thumbnailsContainer.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('nb-thumb')) {
      // Получаем URL большого изображения из data-large
      var largeSrc = event.target.getAttribute('data-large');
      
      // Находим элемент главного изображения и обновляем src
      var mainImage = document.getElementById('nbMainImage');
      if (mainImage) {
        mainImage.src = largeSrc;
      } else {
        console.error('Элемент с id "nbMainImage" не найден!');
      }
    }
  });
});

// Masonry-сетка
$(document).ready(function() {
  let $grid = $('.masonry-grid');
  $grid.imagesLoaded(function() {
    $grid.masonry({
      itemSelector: '.masonry-grid-item',
      columnWidth: '.masonry-grid-sizer',
      percentPosition: true
    });
  });
});

// Изменение класса header при прокрутке страницы
$(document).ready(function(){
  let scrollThreshold = 100;
  
  $(window).on('scroll', function(){
    if ($(window).scrollTop() > scrollThreshold) {
      $('.header').addClass('scrolled');
    } else {
      $('.header').removeClass('scrolled');
    }
  });
});

// Инициализация Swiper для отзывов
let swiper = new Swiper('.swiper-testimonials', {
  loop: true,
  speed: 500,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-testimonials-pagination',
    type: 'custom',
    renderCustom: function(swiper, current, total) {
      return current + '/' + total;
    }
  }
});

// Обновление числового индикатора слайдера при смене слайда
let swiperTestimonials = new Swiper('.swiper-testimonials', {
  loop: true,
  speed: 500, // плавность перехода
  spaceBetween: 20,
  pagination: {
    el: '.swiper-testimonials-pagination',
    type: 'custom',
    renderCustom: function(swiper, current, total) {
      return current + '/' + total;
    }
  },
  on: {
    slideChange: function() {
      let currentIndex = this.realIndex + 1;
      let totalSlides = this.slides.length;
      const slideCounter = document.querySelector('.slide-counter');
      if (slideCounter) {
        slideCounter.innerText = currentIndex + '/' + totalSlides;
      }
    }
  }
});






