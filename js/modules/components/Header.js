const Header = () => {
  const headerElement = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    headerElement.classList.toggle('header--scroll', window.scrollY > 0);
  });
};

export default Header;