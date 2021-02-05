document.addEventListener('DOMContentLoaded', function(){
  let mySwiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    loop: true,
  
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
  
  const headerLink = document.querySelector('.header-nav-link');
  headerLink.addEventListener('click', function () {
    document.querySelector('#menu').classList.remove('is-active');
    document.querySelector('#burger').classList.remove('burger-active');
  });
  
  const accordionLinks = document.querySelectorAll('.questions-item-link');
  const accordionBtns = document.querySelectorAll('.questions-button');
  for (let i = 0; i < accordionLinks.length; ++i) {
    accordionLinks[i].addEventListener('click', function () {
      accordionBtns[i].classList.toggle('cross');
    })
  }

  
  document.querySelectorAll('.how-we-work-steps-link').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path;
      console.log(path);

      document.querySelectorAll('.tab-content').forEach(function(tabContent){
        tabContent.classList.remove('tab-content-active');
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
})


