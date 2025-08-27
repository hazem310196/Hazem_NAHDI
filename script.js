const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
const typed = new Typed('.typing', {
      strings: ['Développeur FULLSTACK', 'Technicien Réseaux'],
      typeSpeed: 100,
      backSpeed: 100,
      backDeploy: 1200,
      loop: true,
    });