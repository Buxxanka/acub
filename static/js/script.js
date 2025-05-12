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
        
$(document).ready(function(){
    // Задаём порог, после которого будет срабатывать изменение (например, 100px)
    let scrollThreshold = 100;
      
    $(window).on('scroll', function(){
    if ($(window).scrollTop() > scrollThreshold) {
        // Когда страница прокручена больше, чем порог, добавляем класс .scrolled к шапке
        $('.header').addClass('scrolled');
    } else {
        // Когда вернулись выше порога – удаляем класс
        $('.header').removeClass('scrolled');
    }
    });
});

let swiper = new Swiper('.swiper-testimonials', {
  pagination: {
    el: '.swiper-testimonials-pagination',
    type: 'custom',
    renderCustom: function(swiper, current, total) {
      // Здесь обновляем наш блок с числовым индикатором
      document.querySelectorAll('.slide-counter').forEach(function(el, index) {
        // Можно обновлять для каждого слайда или только для активного (в этом примере каждый слайд имеет свой блок)
      });
      return current + '/' + total;
    }
  }
});


swiper.on('slideChange', function () {
  var currentIndex = swiper.realIndex + 1;
  var totalSlides = swiper.slides.length;
  // Обновить нужный элемент; например, если слайдер один, можно делать так:
  document.querySelector('.slide-counter').innerText = currentIndex + '/' + totalSlides;
});

