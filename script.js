const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarLinks = document.querySelectorAll('.navbar-menu li a')

navbarToggle,addEventListener('click', () => {
  navbarToggle.classList .toggle('active');
  navbarMenu.classList .toggle('active');
});
