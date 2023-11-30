const Header = () => {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scroll', window.scrollY > 0);
  });

};

export default Header;