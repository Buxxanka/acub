document.addEventListener('DOMContentLoaded', function() {
  var thumbnailsContainer = document.querySelector('.nb-thumbnails');
  if (!thumbnailsContainer) {
    console.error('Элемент с классом .nb-thumbnails не найден!');
    return;
  }

  thumbnailsContainer.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('nb-thumb')) {
      var largeSrc = event.target.getAttribute('data-large');
      var $mainImage = $('#nbMainImage');
      var $slider = $('.nb-slider');

      // Проверяем ширину слайдера – если она равна 0, значит стили не применились или контейнер не виден
      var sliderWidth = $slider.width();
      console.log("Slider width: " + sliderWidth);

      // Если ширина определена, запускаем анимацию
      if (sliderWidth > 0) {
        // Анимация: сдвигаем текущее изображение влево (оно исчезнет за пределами)
        $mainImage.animate({ left: -sliderWidth }, 300, function() {
          // Меняем источник изображения и перемещаем его сразу за правую границу контейнера
          $mainImage.attr('src', largeSrc).css('left', sliderWidth);
          // Анимация: новое изображение двигается на место, устанавливая left: 0
          $mainImage.animate({ left: 0 }, 300);
        });
      } else {
        console.error("Ширина слайдера равна 0. Проверьте стили и размеры контейнера.");
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const headers = document.querySelectorAll('.tab-header');
  const panels = document.querySelectorAll('.tab-panel');
  
  headers.forEach(header => {
    header.addEventListener('click', function() {
      // Снимаем класс active со всех заголовков
      headers.forEach(h => h.classList.remove('active'));
      // Скрываем все панели
      panels.forEach(panel => panel.classList.remove('active'));
      
      // Добавляем класс active для выбранного заголовка
      this.classList.add('active');
      // Получаем идентификатор панели из data-атрибута
      const tabId = this.getAttribute('data-tab');
      // Отображаем соответствующую панель
      document.getElementById(tabId).classList.add('active');
    });
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






