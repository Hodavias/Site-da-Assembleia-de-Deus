const containers = document.querySelectorAll('.carousel-container');

containers.forEach(container => {

  const carousel = container.querySelector('.carousel');
  const nextBtn = container.querySelector('.next');
  const prevBtn = container.querySelector('.prev');

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: 615,
      behavior: 'smooth'
    });
  });

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: -615,
      behavior: 'smooth'
    });
  });

});
