const btn = document.querySelector(".menu__burger-click");
const menu = document.querySelector(".navigate");

btn.addEventListener("click", function () {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
})