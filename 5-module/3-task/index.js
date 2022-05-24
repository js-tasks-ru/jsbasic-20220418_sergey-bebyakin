function initCarousel() {
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  let carouselInner = document.querySelector('.carousel__inner');
  buttonRight.addEventListener('click', rightClick)
  buttonLeft.addEventListener('click', leftClick)
  let index = 0;
  buttonLeft.style.display = 'none'
  function rightClick() {
      if (index < 3) { index++; }
      if (index > 2) { buttonRight.style.display = 'none' }
      carouselInner.style.transform = `translateX(${index * -500}px)`;
      if (index == 0) { buttonLeft.style.display = 'none' } else {buttonLeft.style.display = ''}
  }
  function leftClick() {
      if (index != 0) { index--; }
      if (index == 0) { buttonLeft.style.display = 'none' }
      carouselInner.style.transform = `translateX(${index * -500}px)`;
      if (index > 2) { buttonRight.style.display = 'none' } else {buttonRight.style.display = ''}
  }
}