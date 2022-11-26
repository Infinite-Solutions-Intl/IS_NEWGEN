let hamburger = document.getElementById("hamburger");
let menu = document.getElementById("menu");
let icon = document.getElementById("ham-icon");

hamburger.onclick = function () {
    menu.classList.toggle("active");
    icon.classList.toggle("active");
}