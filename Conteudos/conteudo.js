const containers = document.querySelectorAll('.carousel-container');

containers.forEach(container => {

  const carousel = container.querySelector('.carousel');
  const nextBtn = container.querySelector('.next');
  const prevBtn = container.querySelector('.prev');


function getScrollValue(){
  return window.innerWidth < 768 ? 350 : 615;
}

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: getScrollValue(),
      behavior: 'smooth'
    });
  });

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: -getScrollValue(),
      behavior: 'smooth'
    });
  });

});


