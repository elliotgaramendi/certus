import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const Projects = () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: { prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' },
    pagination: { el: '.swiper-pagination', clickable: true },
    spaceBetween: 32
  });
};

export default Projects;