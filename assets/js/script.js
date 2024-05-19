let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active')
      })
    }

  })
}

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  let navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      let targetId = this.getAttribute('href').substring(1);
      let targetSection = document.getElementById(targetId);

      if (targetSection) {
        let offset = targetSection.offsetTop - 100; // Adjust the offset as needed
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    });
  });
});