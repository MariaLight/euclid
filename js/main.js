var mySwiper = new Swiper('.swiper-container', {

  direction: 'horizontal',
  loop: true,


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});



const burger = document.querySelector('#burger');
burger.addEventListener('click', function () {
  document.querySelector('#menu').classList.toggle('is-active');
  document.querySelector('#burger').classList.toggle('burger-active');
})




