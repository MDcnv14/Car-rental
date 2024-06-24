let animation = document.getElementById("animation");
let header = document.querySelector("header");
let nums = document.querySelectorAll(".container .box .num");
let servicesSection = document.getElementById("services");
let started = false; // Function Started ? No

header.style.display = "none";
window.addEventListener("load", () => {
  animation.remove();
  header.style.display = "flex";
});

window.onscroll = () => {
  if (window.scrollY >= servicesSection.offsetTop) {
    if (!started) {
      nums.forEach((nums) => startCount(nums));
    }
    started = true
  }
}
function startCount(e) {
  let goal = e.dataset.goal;
  let count = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
