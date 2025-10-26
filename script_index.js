// Toggle navigation for mobile
const navToggle = document.getElementById("nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

// Navigate function for buttons
function navigateTo(url) {
  window.location.href = url;
}
