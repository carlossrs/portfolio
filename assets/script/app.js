const toggle = document.querySelector("#toggle")

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(item => item.addEventListener('click', () => {
  toggle.checked = false;
}));
  

